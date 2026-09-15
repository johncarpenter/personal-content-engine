Earlier this month, Karpathy released [autoresearch](https://github.com/karpathy/autoresearch). 630 lines of Python. It ran 700 experiments on a training script over two days, found about 20 real improvements, and the internet lost its mind. 8.6 million views on the announcement.

Everyone focused on the ML results. But the most interesting part of autoresearch isn't what it optimizes — it's *how* it optimizes. There's a pattern hiding in that 630-line file that has nothing to do with machine learning, but allows code to systematically be improved. 

I thought the algorithm was novel so I build [a toolkit around it](https://github.com/johncarpenter/sorkit). And I've been using it to let Claude Code autonomously improve production codebases — not training scripts, actual software — with a guarantee the code only ever gets better or stays the same.

## The autoresearch loop

Here's what autoresearch actually does. It defines one mutable file: `train.py`. Everything else — the data preparation script, the evaluation metric, the experiment runner — is frozen. The agent can't touch them.

Each iteration, the agent proposes a change to `train.py`, runs the training pipeline, and checks the validation metric (`val_bpb`). If the metric improved, the change is kept. If it didn't, the change is reverted. No exceptions.

That's it. Constrain what can change. Automate the evaluation. Advance only on improvement.

Tobi Lutke at Shopify adapted the same pattern overnight — his 0.8B model outperformed a 1.6B baseline after just 37 experiments. The [autoexp](https://gist.github.com/adhishthite/16d8fd9076e85c033b75e187e8a6b94e) community project generalized it to prompt engineering, RAG systems, and infrastructure-as-code. But everyone kept treating it as an ML tool.

It's not. It's a general-purpose pattern for making any AI agent reliably improve anything that can be measured.

## Three primitives

Strip away the machine learning and you're left with three primitives:

**Surface** — the set of files the agent is allowed to modify. Everything else is frozen. In autoresearch, the surface is `train.py`. In software development, it might be `src/api/handler.py` and `src/utils/parser.py`. The surface defines the blast radius. No surface, no constraint, no reliability.

**Oracle** — an automated evaluation that produces a pass/fail verdict or a numeric score, with no human judgment required. In autoresearch, the oracle is `prepare.py` + `val_bpb`. In software, it's your test suite. The oracle is the thing that makes the loop autonomous. If a human has to look at each change and decide "is this better?", you don't have a loop — you have a review queue.

**Ratchet** — the rule for advancing. If the oracle says the change is an improvement, commit it. If it says it's not, revert it. The ratchet ensures monotonic progress. The codebase only ever gets better or stays the same. There's no "let's keep this even though the tests are a little broken and we'll fix them later." The ratchet turns one way.

These three compose into a loop:

```
define surface → agent modifies → oracle evaluates → ratchet advances or reverts → repeat
```

I've been calling this **Surface/Oracle/Ratchet**, or S/O/R.

## This is not just TDD

If you're thinking "this sounds like test-driven development," you're not wrong — but you're not all the way right either.

TDD says: write the test first, then write code to make it pass. That's the oracle part. But TDD doesn't specify the other two primitives.

TDD doesn't tell you to explicitly constrain which files the agent can modify. Without a defined surface, a Claude Code session might "fix" your failing test by editing the test itself. Or it might refactor an unrelated module and introduce a regression somewhere you weren't looking. The surface is the constraint that says: you can only touch *these* files, and if you touch anything else, that's a violation, not a fix.

TDD doesn't tell you to automatically revert on failure. In human-driven TDD, a red test is a signal — you look at it, think about it, try something else. In agent-driven development, a red test should trigger an automatic `git reset --hard HEAD`. No accumulating broken state. No "I'll come back to fix that." The ratchet is what makes the loop autonomous.

Simon Willison [calls red/green TDD](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/) "by far the most effective way" to keep AI-generated code working. He's right. S/O/R takes the same intuition and adds the two missing constraints that let it run without you watching.

## The ratchet in action

Here's what this actually looks like. I built a [sentiment analyzer example](https://github.com/johncarpenter/sorkit/tree/main/examples/sentiment) into sorkit to show the pattern end-to-end.

The setup: a naive rule-based sentiment classifier with 6 positive words and 6 negative words. Starting composite score against a 50-example golden set: **0.3864**. Two layers — a scored classifier layer and a pass/fail API layer.

The agent ran. Here's the full experiment log:

| Iteration | Hypothesis | Score | Outcome |
|-----------|-----------|-------|---------|
| 1 | Expand word lists, add phrase matching, strip punctuation, add negation handling | 0.8463 | KEEP |
| 2 | Add neutral phrases, remove false-positive words, refine tied-score logic | 0.9438 | KEEP |
| 3 (API layer) | Implement `analyze()` returning structured dict from classifier | PASS | KEEP |

Two iterations on the classifier. One on the API. 0.3864 to 0.9438. The target was 0.85 — the agent blew past it.

What I find interesting isn't the final score — it's what the agent discovered on its own. Iteration 1 was the obvious stuff: more words, punctuation stripping, basic negation handling ("not good" should flip sentiment). But iteration 2 was subtler. The agent noticed that words like "quality," "surprised," and "favorite" were triggering false positives. It removed them. It added neutral phrase overrides for tied scores. That's not brute-force word list expansion — that's debugging against a golden set.

Then the API layer. The classifier code froze. The agent could only touch `src/api.py`. It implemented the `analyze()` function against contract tests that validated return shape, error handling, and integration with the now-frozen classifier. Passed first try.

This is the layered stacking that makes S/O/R scale to real systems. Each layer completes before the next one starts. Each layer's passing tests become frozen infrastructure for the layer above. The agent can't break what's already working because it literally can't modify those files.

It's the same bottom-up pattern autoresearch uses when `prepare.py` is frozen while `train.py` evolves. It just applies to software architecture instead of training pipelines.

## sorkit: the toolkit

I wanted this to be more than a mental model, so I built [sorkit](https://github.com/johncarpenter/sorkit) — an MCP server that implements S/O/R as a set of tools Claude Code can call during a session. It's [on PyPI](https://pypi.org/project/sorkit/) now.

You configure a project with a `sor.yaml`. Here's the one from the sentiment example:

```yaml
project_name: "Sentiment Analyzer"

always_frozen:
  - "fixtures/"
  - "tests/"

layers:
  - name: "classifier"
    surface:
      - "src/classifier.py"
    oracle:
      contracts: "tests/test_classifier_contract.py"
      scored: true
      scored_tests: "tests/test_classifier_accuracy.py"
      metrics:
        - name: "accuracy"
          extract: "ACCURACY"
          weight: 0.5
        - name: "pos_recall"
          extract: "POS_RECALL"
          weight: 0.2
        - name: "neg_recall"
          extract: "NEG_RECALL"
          weight: 0.2
        - name: "neu_recall"
          extract: "NEU_RECALL"
          weight: 0.1
    thresholds:
      target_score: 0.85

  - name: "api"
    surface:
      - "src/api.py"
    oracle:
      contracts: "tests/test_api_contract.py"
      scored: false
```

The config is the entire specification. Surface, oracle, ratchet — all declared, all enforced. The agent calls MCP tools: `sor_ratchet` to test-and-commit-or-revert, `sor_status` for a progress dashboard, `sor_results` to query experiment history. The ratchet returns structured responses — `KEEP score=0.9438 prev=0.8463` or `DISCARD FAIL` — so the agent knows exactly what happened and can hypothesize its next change.

Built-in stopping conditions prevent runaway loops: target score met, plateau detection, diminishing returns, max attempts. The agent doesn't just iterate blindly — it knows when to stop.

sorkit also generates the CLAUDE.md and experiment skill files automatically from the config, so the agent starts each session knowing exactly what it can touch, how it will be evaluated, and when to stop.

## Eval is the new bottleneck

Here's the insight that matters for anyone leading an engineering team: generation is commoditized. The agent can produce code changes all day. What's scarce is the oracle.

Karpathy's 700 experiments produced about 20 real improvements. The bottleneck wasn't writing `train.py` variations — it was having a good enough `prepare.py` and `val_bpb` to distinguish real improvements from noise.

The same is true in software. The agent can iterate on your code endlessly. But if your test suite is thin, if your golden set has gaps, if your benchmarks don't measure what actually matters — the ratchet has nothing to grip.

Every hour you spend improving your oracle — writing better tests, curating a better golden set, adding more precise metrics — buys you ten hours of unsupervised agent time. The human's irreducible contribution isn't writing code anymore. It's writing the evaluation function. It's being the oracle author.

This is the opposite of [vibe coding](https://simonwillison.net/2025/Feb/6/vibe-coding/). Vibe coding says: generate fast, trust your instincts, ship it. S/O/R says: define constraints, automate judgment, advance only on evidence. Both use the same AI models. They produce very different outcomes.

## The Trajectory connection

If you read my [previous piece on Trajectory](https://discontinuityai.substack.com), you'll see where this fits. S/O/R operates at the task level — one session, one problem, constrain-evaluate-advance. Trajectory operates at the meta-level — across sessions, learning which strategy profiles produce more green ratchets over time.

They compose into a two-level learning system. S/O/R is the inner loop: tactical improvement within a session. Trajectory is the outer loop: strategic improvement across sessions. The ratchet gives Trajectory clean signal — a session either produced commits (the ratchet advanced) or it didn't. No ambiguity. No "well, it sort of worked."

S/O/R without Trajectory is useful — you get reliable autonomous iteration on individual tasks. Trajectory without S/O/R is noisy — you're learning from sessions that may or may not have had clean evaluation. Together, the signal compounds.

## Getting started

If you want to try this:

1. Install sorkit: `pip install sorkit`
2. Write your tests first — contract tests for correctness, scored tests for quality metrics
3. Run `sor_init` to generate the config template
4. Define your layers — what's the surface, what's frozen, what does the oracle measure?
5. Let the agent run. Watch the ratchet.

The git log is your proof. Every commit message includes the score. Scores only go up. That's the whole point.

The pattern works for any project where you can write automated evaluation — which, if you're being honest, is most of the code you write. The 30-40% that can't be automatically evaluated? That's where you still need human judgment. S/O/R is for the other 60-70%, and it's a lot of territory to hand over to an agent that can iterate twenty times in the time it takes you to context-switch once.

I'm still figuring out where the boundaries are. How thin can the oracle be before the ratchet starts admitting bad changes? How many layers can you stack before the frozen surface becomes a straitjacket? If you've tried something similar — or you've found the edges — I'd genuinely like to hear about it.

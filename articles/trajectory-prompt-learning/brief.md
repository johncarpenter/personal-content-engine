# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Builders. Practitioners who run agentic coding workflows and want learning from experience without
ML infrastructure: "Every Claude Code session starts fresh. Even if you solve the same type of
problem brilliantly one day, the agent has no way to carry that learning forward."

## Why now

The idea records timeliness as high and gives two reasons. First, the broader shift the piece rides:
"the broader shift from 'prompt engineering' (static, one-shot) to 'context engineering' (dynamic,
adaptive)", with "Long-term Memory is becoming a pivotal turning point for agent intelligence" cited
as evidence that statelessness is recognized as a problem, and GEPA appearing as an ICLR 2026 oral.
Second, a committed venue: the AI Tinkerers Calgary March meetup, which the draft calls "the forcing
function for open-sourcing it."

## Provisional thesis

Provisional. "AI agents can learn and improve through prompt evolution rather than model
fine-tuning — the context envelope itself becomes the learned policy, making RL accessible to
practitioners without ML infrastructure."

The angle as stated: "Open-source tooling that brings RL principles to agentic coding workflows
through prompt evolution rather than weight updates. Demonstrates that the context envelope itself
can be the learned policy."

## Original contribution

"You are building the tool. This is not commentary on others' work — this is a practitioner talk
about something you're actively developing." Specific differentiators the idea names:

- Architecture decisions: why Go + BBolt + MCP, not Python + vector DB + framework.
- UCB1 rather than more complex approaches: why a simple bandit is enough for strategy profile
  selection.
- Strategy profiles as the unit of learning — "not optimizing individual prompts, but learning which
  bundles of instructions work for which task types."
- The Context Optimizer: the meta-layer proposing CLAUDE.md rewrites from trajectory patterns.
- Scored sessions (0–1, human-in-the-loop) as the feedback signal rather than automated metrics.

The competitive gap, in the idea's words: "Practical, open-source, Claude Code-native learning loop
that runs locally without training infrastructure or framework lock-in." Agent Lightning needs
training infrastructure, DSPy is framework-specific, GEPA and SCOPE are research, Mem0 is memory
rather than policy improvement, and CLAUDE.md best-practice guides are static.

## Scope

The system and the reasoning behind it: the MCP server running alongside Claude Code; PostToolUse
hooks recording every tool invocation into an embedded BBolt database; user scoring of each session
(0–1); UCB1 selecting among strategy profiles; strategy profiles as named bundles of prompt
instructions, few-shot retrieval settings and execution guidance in CLAUDE.md; the Context Optimizer
proposing rewrites to marked CLAUDE.md sections; and the core insight that the prompt itself becomes
the learned policy while the model stays frozen. Includes the comparison against existing work and
the counterarguments listed in `outline.md`.

## Exclusions

TODO: what it deliberately does not cover.

## Reader takeaway

From the idea's close: open-sourcing timeline; a roadmap of task type classification, multi-user
learning and a Claude Code integration proposal; and the call to action "If you want early access or
want to help build this, find me after."

## Research effort and dependencies

Estimated effort: medium. Research depth: detailed, marked ready for draft. Estimated word count
2500. Dependencies recorded as open questions: demo readiness (is Trajectory stable enough for a
live demo, with a pre-recorded fallback), whether an open-source date can be committed to during the
talk, confirmation of the March AI Tinkerers Calgary date, and how much to emphasize the Agent
Lightning comparison.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `workspace/content/published/2026-02-19-substack-trajectory-memory-rl.md`
and `workspace/content/published/2026-02-19-substack-trajectory-memory-rl-draft.md`. This brief
documents the commission after the fact and was never put through Gate 1.

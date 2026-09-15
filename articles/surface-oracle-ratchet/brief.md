# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Builders (topic cluster: the_stack). Practitioners running AI coding agents who need "a mental model
for making AI coding agents reliable" — without constraints, "AI coding agents drift." Argument 4 of
the idea also addresses engineering leaders directly: "'Eval is the new bottleneck' is the key
insight for engineering leaders."

## Why now

From the idea's open questions: "Autoresearch wave is active NOW (March 2026). Publishing within 1-2
weeks captures the amplification. Delay risks the window closing." Timeliness was rated high; the
signal source is Karpathy's autoresearch release.

## Provisional thesis

"Karpathy's autoresearch contains a general-purpose pattern for making AI agents reliably improve
anything — not just ML models. When you strip away the machine learning specifics, three primitives
emerge (Surface, Oracle, Ratchet) that apply directly to AI-assisted software development. Naming
and formalizing this pattern gives practitioners a mental model for autonomous coding that
guarantees monotonic improvement."

The three primitives, as the idea defines them:

- **Surface**: What files/code the agent can modify. Everything else is frozen.
- **Oracle**: Automated tests that determine pass/fail with no human judgment.
- **Ratchet**: The rule for advancing (commit) vs. reverting (reset).

## Original contribution

"You implemented this pattern on a real production project." Not ML research — actual software
development with layered architecture (search, API, integration), with a concrete process document
showing three-layer S/O/R design with escalating constraints, golden set methodology (human domain
expertise as frozen oracle), scored metrics vs. binary pass/fail at different layers, time budgets
and attempt limits per phase, and the bottom-up stacking principle (each layer's oracle freezes for
the next). The author can also show the Trajectory connection — the meta-level loop that learns
which development strategies produce better S/O/R outcomes. "Nobody else has both levels."

The naming opportunity: "'Surface Oracle Ratchet' returns zero Google results."

The competitive gap: "Nobody has written the piece that says 'here's the abstract pattern inside
autoresearch, here's a name for it, and here's how to apply it to building software with AI agents.'
The ML community sees autoresearch as an ML tool. The software engineering community has the
practices (TDD, CI/CD, worktrees) but hasn't connected them to the same loop."

## Scope

Deep technical piece (The Stack cluster), target length 2,200–2,500 words, following the idea's
suggested structure: the autoresearch loop; stripping it down to the three primitives; the pattern
applied to software development through a layered example; "eval is the new bottleneck"; the
Trajectory connection; and a close contrasting S/O/R with vibe coding.

## Exclusions

Stated limits in the idea:

- "Strip all client-specific details — present as a generalized pattern with anonymized example"
  (product names, industry context, data schemas).
- Karpathy credit: "Frame as 'inspired by' not 'derived from.' The naming and application to
  software development is the original contribution."
- The pattern is scoped to work that can be evaluated automatically: "S/O/R works best for the
  60-70% of development work that CAN be evaluated automatically," and "S/O/R is for implementation,
  not exploration."

## Reader takeaway

From the idea's close: "Karpathy named 'vibe coding.' This is the structural opposite. Not vibes —
constraints. The paradox: giving the agent LESS freedom produces MORE reliable results. The ratchet
only turns one way." The reader leaves with the named pattern as a mental model — constrain the
surface, automate the evaluation, ratchet forward only on success — plus the practical setup
(worktree isolation, test commands, commit/revert scripts).

## Research effort and dependencies

Estimated effort: medium. Research depth: detailed. Estimated word count: 2,500.

Dependencies recorded as open questions in the idea:

- Anonymization: verify the generalized example strips all client-specific details, because the
  process document is from a confidential project.
- Repo: decide whether to publish an open-source reference implementation (oracle runner script,
  worktree setup, ratchet automation).

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-03-13-surface-oracle-ratchet-dev.md`,
`drafts/draft-2026-03-25-surface-oracle-ratchet.md`,
`published/2026-03-26-substack-surface-oracle-ratchet.md`. This brief documents the commission after
the fact and was never put through Gate 1.

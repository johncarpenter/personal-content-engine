# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

"Karpathy's autoresearch contains a general-purpose pattern for making AI agents reliably improve
anything — not just ML models": strip away the ML specifics and three primitives remain — Surface,
Oracle, Ratchet — which apply directly to AI-assisted software development and guarantee monotonic
improvement.

## Sections

Post type: deep technical (The Stack cluster). Target length: 2,200–2,500 words.

- **Opening hook** (2–3 paragraphs) — "Karpathy released autoresearch. 8.6 million views. Everyone
  focused on the ML results. But the most interesting part isn't what it trains — it's HOW it
  trains. There's a pattern hiding in plain sight." Evidence: `[src:source-001]`, `[src:source-002]`.
- **The autoresearch loop** (3–4 paragraphs) — walkthrough: `train.py` (surface), `prepare.py` +
  `val_bpb` (oracle), keep-or-revert (ratchet). 700 experiments, 20 improvements. Tobi Lutke's
  Shopify adaptation. Evidence: `[src:source-001]`, `[src:source-009]`.
- **Strip it down — the three primitives** (3–4 paragraphs) — name them and define them. Surface:
  what can change. Oracle: automated pass/fail. Ratchet: advance or revert. "Draw the diagram. This
  is the section that gets screenshotted and shared."
- **Applied to software development** (5–6 paragraphs) — a real multi-layer system built with Claude
  Code. Layer 0: human-authored golden set (frozen). Layer 1: agent implements search with a scored
  relevance metric. Layer 2: agent implements the API, Layer 1 frozen. Each layer's oracle becomes
  the next layer's constraint; show the ratchet committing on improvement and resetting on
  regression. "Strip all client-specific details — present as a generalized pattern with anonymized
  example." Evidence: `[src:source-007]`, `[src:source-008]`, plus the author's own process document.
- **Why this matters: eval is the new bottleneck** (2–3 paragraphs) — generation is commoditized;
  the human's job shifts from writing code to writing oracles; "every hour on oracle quality buys 10
  hours of unsupervised agent time"; the "vibe coding" antidote. Evidence: `[src:source-003]`,
  `[src:source-001]`.
- **The Trajectory connection** (2 paragraphs) — S/O/R is the inner loop, Trajectory the outer loop;
  they compose into a two-level learning system. Link to the previous Trajectory article. Evidence:
  `[src:source-013]`, plus the author's published Trajectory piece.
- **Close** (1–2 paragraphs) — "Karpathy named 'vibe coding.' This is the structural opposite. Not
  vibes — constraints. The paradox: giving the agent LESS freedom produces MORE reliable results.
  The ratchet only turns one way."

## Objections to address

From the idea's "Counterarguments to Address":

- **"This is just TDD. What's new?"** — TDD tells you to write tests first. S/O/R adds explicitly
  constraining what the agent can modify (Surface) and automated reversion without human decision
  (Ratchet). "TDD is a practice. S/O/R is a runtime constraint system for autonomous agents."
- **"Not everything has a clean oracle."** — True for UI work, design decisions, architectural
  choices. S/O/R works best for the 60–70% of development work that can be evaluated automatically;
  the rest needs human-in-the-loop, which is where Trajectory's scored sessions come in.
- **"Autoresearch works because ML has clean metrics. Software doesn't."** — Software has tests; a
  green test suite is a clean metric. Invest in the oracle the way Karpathy invested in `prepare.py`.
- **"This is too rigid for creative/exploratory development."** — S/O/R is for implementation, not
  exploration. Exploration happens in the design phase, before the surface is defined and the oracle
  is written.

## Visuals

- `hero.png` — the generated header image that shipped with the Substack post. Purpose: establish
  mood. It is not referenced in the article body.

The idea also proposed drawing the Surface → Oracle → Ratchet loop diagram in the "three primitives"
section ("the section that gets screenshotted and shared"); no such diagram file exists in the
migrated material. The published article renders the loop as a code block instead.

## Open gaps

From the idea's "Open Questions":

- **Anonymization** — verify the generalized example strips all client-specific details (product
  names, industry context, data schemas); the process document is from a confidential project.
- **Repo** — should this get an open-source repo with a reference implementation (oracle runner
  script, worktree setup, ratchet automation)?
- **Timing** — the autoresearch wave is active in March 2026; publishing within 1–2 weeks captures
  the amplification.
- **Karpathy credit** — frame as "inspired by," not "derived from."

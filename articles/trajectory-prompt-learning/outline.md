# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

"AI agents can learn and improve through prompt evolution rather than model fine-tuning — the
context envelope itself becomes the learned policy, making RL accessible to practitioners without ML
infrastructure."

## Sections

Condensed from the idea's suggested structure, which was written for a 20-minute AI Tinkerers talk
(opening hook, the insight, architecture deep-dive, live demo, what's next):

- **Problem setup — why current agent workflows don't learn from experience.** Establishes the
  problem: stateless agents, context rebuilt from scratch every session. Evidence:
  `[src:source-008]`, `[src:source-007]`.
- **The insight — what if CLAUDE.md could evolve based on outcomes?** "The model doesn't need to
  learn. The context does." CLAUDE.md is already a policy specification; strategy profiles are arms
  of a bandit. Evidence: `[src:source-006]`, `[src:source-005]`, `[src:source-002]`. Shows the
  before/after of a CLAUDE.md that evolved over 30 sessions.
- **Architecture deep-dive — MCP server, PostToolUse hooks, BBolt, UCB1, strategy profiles, Context
  Optimizer, scoring CLI.** Explains the mechanism and the rationale (why an embedded DB; why the
  bandit that selects which profile to inject; how the optimizer proposes CLAUDE.md edits from
  trajectory patterns). Evidence: `[src:source-009]`. Visual: `figure-01-architecture` (session →
  UCB1 selection → strategy profile → session → scoring → BBolt).
- **Context optimization over prompt engineering.** Places the tool in the shift from static prompt
  engineering to adaptive context engineering. Evidence: `[src:source-003]`, `[src:source-011]`,
  `[src:source-012]`.
- **Demo — the feedback loop in action.** Record a trajectory, score the session, show the UCB1
  selection on the next session, show a Context Optimizer suggestion.
- **How this compares to existing work.** Distinguishes the contribution from training-based and
  framework-bound approaches. Evidence: `[src:source-001]`, `[src:source-004]`, `[src:source-002]`,
  `[src:source-010]`.
- **What's next.** Open source, roadmap (task type classification, multi-user learning, a Claude
  Code integration proposal), community.

## Objections to address

The counterarguments the idea lists, with its own answers:

1. "Why not just use DSPy or Agent Lightning?" — DSPy optimizes within its own framework; Agent
   Lightning requires training compute. Trajectory is framework-agnostic and runs locally.
2. "UCB1 is too simple — you need more sophisticated RL." — For a small action space (~10–50
   profiles), UCB1's simplicity is a feature.
3. "Human scoring (0–1) is too coarse." — Coarse but robust; automated metrics can be gamed or
   misaligned.
4. "Won't this overfit to the user's preferences?" — That is the point: it personalizes the agent to
   how you work, rather than training a general-purpose model.
5. "CLAUDE.md files should be hand-crafted, not auto-generated." — The Context Optimizer proposes
   edits to marked sections, which you review and approve.

Handled in the architecture, UCB1, scoring and comparison sections above.

## Visuals

- `hero.png` — establish mood. AI-generated header image. Not referenced in the article body.
- `figure-01-architecture.png` — explain. The session → UCB1 → strategy profile → session → scoring
  → BBolt loop, with historical data feeding selection. Editable Mermaid source shipped alongside.
  Not referenced in the article body; the body carries its own ASCII version of the same flow.

## Open gaps

The idea's unresolved open questions:

- Demo readiness: is Trajectory stable enough for a live demo? A pre-recorded fallback is needed.
- Open-source timeline: can a date be committed to during the talk?
- March meetup date: confirm the exact AI Tinkerers Calgary date.
- Comparison framing: how much to emphasize the Agent Lightning comparison without seeming
  dismissive of Microsoft research.

# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea's open questions:

- Demo readiness: is Trajectory stable enough for a live demo, and what is the fallback
  (pre-recorded)?
- Open-source timeline: can an open-sourcing date be committed to during the talk?
- March meetup date: confirm the exact AI Tinkerers Calgary date.
- Comparison framing: how much to emphasize the Agent Lightning comparison, without seeming
  dismissive of Microsoft research.

## Assumptions to test

TODO: what the brief assumes that has not been verified.

## Evidence needed for the central claims

The idea's key arguments and the supporting evidence gathered for each:

- **Agents are stateless across sessions** → market and practitioner evidence that statelessness is
  a recognized problem: `[src:source-008]`, `[src:source-007]`.
- **The prompt is the policy** → academic validation that discrete prompt optimization is policy
  learning with frozen models, and that bandits apply to prompt-level decisions:
  `[src:source-006]`, `[src:source-005]`, `[src:source-002]`.
- **Hooks make this architecturally clean** → official documentation of MCP integration and Claude
  Code hooks: `[src:source-009]`. The idea also notes async hooks (v2.1.3+) with a 10-minute timeout
  make logging and background processing practical, and that tool deferral (v2.1.7) shows Anthropic
  is thinking about context management at scale.
- **Context optimization beats prompt engineering** → evidence that execution traces are usable
  learning signals and that the industry recognizes the shift: `[src:source-003]`,
  `[src:source-011]`, `[src:source-012]`.
- **Open-source, local-first, no API lock-in** → contrast with approaches that need training
  infrastructure or cloud model access: `[src:source-001]`, `[src:source-004]`.

First-hand evidence is the author's own work: building the tool, and what can be demonstrated with
it — the MCP server running alongside Claude Code, a real trajectory being recorded and scored, UCB1
selection in real time, and before/after CLAUDE.md evolution from Context Optimizer suggestions.

## Candidate sources

Confirmed sources are in `sources.yaml` (`source-001`–`source-013`), carried over from the idea's
source bibliography in its original order.

## Disconfirming evidence

The counterarguments the idea expects, i.e. what would undercut the thesis if they hold:

- DSPy or Agent Lightning already solve this well enough.
- UCB1 is too simple for the job — sophisticated RL is required.
- Human scoring on a 0–1 scale is too coarse a reward signal.
- The learned policy overfits to one user's preferences.
- CLAUDE.md files should be hand-crafted, not auto-generated.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Migrated from the author's pre-existing material in the knowledge-worker-framework repository:

- `workspace/content/published/2026-02-19-substack-trajectory-memory-rl.md` — idea and research
  material (angle, thesis, key arguments, supporting evidence, competitive landscape,
  counterarguments, structure, open questions, source bibliography).
- `workspace/content/published/2026-02-19-substack-trajectory-memory-rl-draft.md` — the draft whose
  body is `article.md`.
- `workspace/content/images/img-2026-02-18-trajectory-memory-rl-substack-header.png` → `assets/hero.png`.
- `workspace/content/images/trajectory-architecture-flow.png` and `trajectory-flow.mmd` →
  `assets/figure-01-architecture.png` and `assets/figure-01-architecture.mmd`.

Syndication record: besides the Substack publication recorded in `article.yaml`, the idea file
records a Medium syndication at
`https://medium.com/@johncarpenter/trajectory-teaching-claude-code-to-learn-without-touching-model-weights-cb6070ef2339`,
with `medium_syndicated: 2026-03-01`. There is one `published_url` field, so this is noted here only
as a factual record of where the piece also appeared.

Deliberately left behind in the old repository (channel derivatives, not migrated):

- `workspace/content/archive/drafts/linkedin-repurpose-2026-02-18-trajectory-memory-rl.md`
- `workspace/content/archive/drafts/talk-2026-02-26-ai-tinkerers-trajectory.md`
- `workspace/content/published/2026-02-23-prompt-learning-carousel.md` (Marp carousel deck derived
  from this article)
- `workspace/content/images/img-2026-02-18-trajectory-memory-rl-linkedin-post.png`
- `workspace/content/images/img-2026-02-18-trajectory-memory-rl-og.png`

## Remaining gaps

Unresolved at migration; the article was published with these open:

- The four open questions above were never recorded as answered in the old material.
- The draft's own self-assessment flagged claims for the author to verify: that GEPA was an "ICLR
  2026 Oral"; that "PostToolUse hooks" and "MCP server" terminology matches Claude Code
  documentation; and that the UCB1 convergence-guarantee claim matches the actual implementation.
  The draft judged the "1,500 trajectories over a year" arithmetic (20–30 sessions per week × 52
  weeks) as checking out.

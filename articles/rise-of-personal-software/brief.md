# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Primary audience: AI-curious leaders. Secondary audience: builders.

"The reader who just nodded through Part 1 is now asking 'okay, but how?'" Part 1 ("Economics of a
Dying SaaS Market") established the problem — conformance tax, integration tax, cost. Part 2 is the
practical answer: here's what you build instead, here's how, and here's when it makes sense.

## Why now

The piece was explicitly teased as Part 2 in the already-published Part 1, which ended with: *"This
is the first in a two-part series on how AI is changing the economics of software. Next up: The Rise
of Personal Software — what happens when building is so cheap that software becomes disposable."*
That commitment sets the timing.

The low-code paradigm is being declared over as this publishes: Microsoft's CVP Charles Lamanna
declared "low code as we know it is dead" at Power Platform Conference 2025, and Gartner forecasts a
low-code market over $30B in 2026 even as the visual drag-and-drop paradigm is superseded.

## Provisional thesis

Low-code promised that anyone could build software but delivered another conformance tax — complex
platforms with their own learning curves. LLMs actually deliver on that promise: you describe what
you want and get working software, with zero platform lock-in and an audience of one. Personal
software isn't "building apps" — it's the practical answer to every conformance tax identified in
Part 1.

The paradigm shift beneath it: **software used to be an asset** (expensive to build, amortize over
time); **now it's closer to a memo** — you create it, use it, maybe throw it away.

## Original contribution

- Built and operates the knowledge worker framework — a complete personal automation system with 10+
  MCP servers, ETL pipelines, and skill plugins covering briefings, content, documents, planning,
  tasks, and timesheets. Not a weekend project; a daily-use production system built for an audience
  of one.
- A concrete inventory of personal software: Gmail MCP, Exchange MCP, Garmin integration,
  Harvest/Zoho timesheets, Granola meeting notes, Apple Calendar, RSS feed parser, image generation,
  memory system, the content pipeline (ideation → research → drafting → publishing → syndication),
  daily briefings, email digests, weekly planning, task management — all markdown-based, all
  personal.
- Part 1 establishes credibility on the SaaS problem; Part 2 shifts to "and here's what I built
  instead" — the most credible form of the argument.
- Practitioner across multiple client engagements (managing dev teams across four clients), so the
  piece can say where personal software works and where it does not.
- Former Global Data Privacy Officer — can speak to the security limits with authority, not just
  caution.

The competitive gap: "Nobody has written the practical guide from a practitioner who's actually built
and operates a full personal software stack. The listicles list tools. The thought pieces
philosophize. The academic pieces analyze. Nobody shows what it looks like to run 10+ personal tools
daily and explains how to decide what's worth building."

## Scope

Long-form Substack piece (~2,500 words) covering:

1. Opening callback to Part 1 — from economics to practice.
2. Low-code was the dress rehearsal; LLMs are the show.
3. What personal software actually looks like — the five recurring patterns (integration glue,
   workflow automation, data transforms, single-purpose dashboards, throwaway analysis).
4. How to actually start — three tiers of entry, from zero-code integrations to a full custom stack.
5. The decision framework — "is the conformance tax higher than the build cost?", plus the
   don't-build list.
6. The honest limits — security risk, technical debt, and where "good enough for one" applies.
7. Close — software as a thought: personal software as externalized cognition.

## Exclusions

TODO: what it deliberately does not cover.

## Reader takeaway

A taxonomy readers can use to identify what is worth building, and the filter that separates useful
personal software from vanity projects: am I spending more time adapting to this tool than it would
take to build what I actually need?

The close: "The one-person software company isn't a company. It's just how knowledge work works now."

## Research effort and dependencies

Estimated effort: medium. Research depth: detailed. Estimated word count: ~2,500.

Known dependencies (unresolved at the time of drafting):

- Hands-on validation of the Tier 1 (Composio + Claude Code) experience — the recommendation rests on
  published claims, not first-hand use.
- Concrete build times for the author's own tools, and 2-3 examples of personal software built, used
  and discarded.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-04-02-rise-of-personal-software.md`,
`drafts/draft-2026-04-09-rise-of-personal-software.md`,
`published/2026-04-10-substack-rise-of-personal-software.md`. This brief documents the commission
after the fact and was never put through Gate 1.

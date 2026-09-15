# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's open questions:

- How long did the author's own tools actually take to build — the MCP servers, the content pipeline?
  Concrete "I built this in X hours" numbers are what make the argument against low-code platforms
  land.
- Which personal tools did the author build, use and then discard? Two or three concrete examples are
  needed to demonstrate the "disposable" thesis.
- Does the Tier 1 (managed integration layer + Claude Code) experience match the marketing? Can a
  non-developer actually get a useful workflow running, and what are the real friction points?
- Should the piece include or reference a live co-work session — "here's what it looks like to go from
  zero to a working daily brief in 30 minutes"?

## Assumptions to test

- That low-code's failure mode was the platform itself (its own abstractions, component libraries,
  vendor lock-in and learning curve), not the ambition of letting people build their own tools.
- That personal software is a distinct category rather than small-scale SaaS — "an audience of one,
  with no intent to distribute."
- That the accessibility claim holds without the command line: that a managed integration layer plus
  Claude Code really is a Tier 1 entry point for a non-developer.

## Evidence needed for the central claims

- *Low-code was the dress rehearsal; LLMs are the show* → a named authority declaring the paradigm
  over plus market context: Lamanna's "low code as we know it is dead" `[src:source-003]`, Gartner's
  >$30B forecast alongside the declining visual paradigm `[src:source-010]`.
- *Personal software is a new category, not smaller SaaS* → independent naming of the pattern and
  exemplars at scale: micro apps `[src:source-001]`, ~200 LLM-built browser tools
  `[src:source-004]`, "disposable apps" as a formal concept plus app-retention data
  `[src:source-002]`, the barrier-to-app-zero framing `[src:source-006]`, and adoption evidence that
  this is happening in organisations too `[src:source-011]`.
- *Five recurring patterns* → the author's own daily-use inventory: 10 MCP servers (Gmail, Exchange,
  Garmin, Harvest, Zoho, Granola, Apple Calendar, feeds, images, memory), ETL pipelines, and 10+
  skill plugin categories (briefings, content, documents, planning, tasks, timesheets).
- *The decision framework* → Part 1's conformance tax, plus a worked example of a SaaS tool replaced
  by a prompt `[src:source-012]`.
- *The honest limits* → a security measurement rather than an impression: 40-62% of AI-generated code
  contains flaws, 86% XSS failure rate `[src:source-008]`; the maintenance burden
  `[src:source-009]`; the academic read on what vibe coding optimizes for `[src:source-005]`; and the
  discipline that compensates `[src:source-007]`.
- *Accessibility* → what the managed integration layer actually provides (500+ apps, managed OAuth)
  `[src:source-014]`, `[src:source-015]`, and a concrete build `[src:source-013]`.

## Candidate sources

All confirmed candidates were promoted into `sources.yaml` (15 entries). First-hand evidence is the
author's own knowledge worker framework, recorded as `source-016`.

## Disconfirming evidence

The counterarguments the idea file commits to addressing rather than dodging:

- **"This is just for developers."** The author's own stack runs from the command line with custom
  MCP servers — not trivial, and conceded in the draft. The rebuttal depends on the managed
  integration path being real, which is itself unvalidated (see remaining gaps).
- **"AI-generated code is insecure and unreliable."** Real, not rhetorical: 40-62% of AI-generated
  code has security flaws. Answered by bounding the sweet spot (personal, low-stakes, internal), not
  by dismissal.
- **"This creates unmaintainable technical debt."** True for production software; the taxonomy has to
  do the work of separating "keep" tools from "throw away" tools, or the objection stands.
- **"You're just reinventing the wheel with worse software."** These tools aren't competing with
  Jira; they replace the spreadsheet maintained alongside Jira. If a reader's workaround does not
  exist, the thesis has nothing to bite on.
- Also worth noting against the thesis: Karpathy, who coined "vibe coding," now prefers "agentic
  engineering" — the casual version of the practice did not survive its own author.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

- Part 2 of a series. Part 1 is `articles/economics-of-dying-saas-market/` in this repository
  (published 2026-04-03); it established the conformance tax, the integration tax, and the build-vs-
  adapt math that this piece answers in practice. The idea file also planned a Part 3 — a concrete
  example of personal software in action — which the published close previews.
- Reconstructed on 2026-09-15 from the author's pre-existing material in the
  knowledge-worker-framework repository:
  - `backlog/idea-2026-04-02-rise-of-personal-software.md` — research brief, key arguments,
    supporting evidence, competitive landscape, counterarguments, open questions, source bibliography
    (the input for `sources.yaml`).
  - `drafts/draft-2026-04-09-rise-of-personal-software.md` — the body copied verbatim into
    `article.md`, and the header image generation prompt.
  - `published/2026-04-10-substack-rise-of-personal-software.md` — publication record (Substack,
    2026-04-10; Medium syndication still pending at the time).
  - `images/img-2026-04-09-rise-of-personal-software-header.png` — copied to `assets/hero.png`.
- Deliberately left behind in the old repository, so the trail is not lost:
  `drafts/linkedin-repurpose-2026-04-09-rise-of-personal-software.md` (three LinkedIn derivatives)
  and `drafts/draft-2026-04-09-rise-of-personal-software-substack.html` (generated Substack HTML).
  Channel derivatives and generated output are not migrated.
- One of the idea file's open questions asked how Part 1 performed, to decide whether to mention
  series momentum. It is not carried into the gaps below: performance belongs to the tracking
  project, not to this repository.
- The draft's own self-assessment flagged that the accessibility section rests on published vendor
  claims rather than first-hand use. That flag is preserved as a remaining gap; the self-assessment
  itself was production metadata and was not migrated.

## Remaining gaps

Unresolved at publication; all four are carried from the idea file's open questions.

- **Build times for the author's own tools.** Still unquantified — no "I built this in X hours"
  figures for the MCP servers or the content pipeline. Not disclosed in the published article;
  resolve before any revision that leans harder on the build-cost comparison.
- **Tools built, used and thrown away.** No concrete discarded-tool examples were gathered, so the
  "disposable" half of the thesis is argued by category ("throwaway analysis") rather than
  demonstrated. Resolve with specific examples.
- **Hands-on validation of the Tier 1 path.** Never tested. The published article recommends the
  managed-integration entry point on the strength of vendor-published claims; the friction points for
  a non-developer are unknown. Resolve by running the setup, or soften the recommendation.
- **A live co-work session as part of the piece.** Considered, not decided; the published close
  instead promises Part 3 built "on camera." Out of scope for this article.

# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's Open Questions, limited to the ones this piece depends on:

- **Naming the pattern.** Still open. Candidates: "The Understanding Layer",
  "Insight-worthy vs Dashboard-worthy", "data → processing → understanding". The author's content
  does well when it names a concept, so pick one sticky term.
- **Repo roles.** Confirm whether `adaptive-simple-text-classifier` and `trajectory-memory` appear
  as worked examples in the architecture section, or stay as "see also" links to avoid scope creep.
- Two claims the draft lists for verification before publishing: the text-to-SQL 70–85% raw →
  ~100% with a semantic layer figures (frame as "approaches 100% on covered questions"), and the
  paraphrase of Forrester's "BI is leveling up, not dying" position.

## Assumptions to test

TODO: what the brief assumes that has not been verified.

## Evidence needed for the central claims

From the idea's Supporting Evidence, scoped to this piece:

- *Text-to-SQL is not reliable enough to sit in the analyst's seat* → the accuracy bands and the
  hallucination modes: fabricated tables and columns, faulty joins, aggregation errors, missing
  filters; no LLM matched human query efficiency (1.5–2x more rows read than necessary).
  `[src:source-005]`, `[src:source-006]`.
- *The semantic layer matters more, not less* → accuracy approaching ~100% only for questions
  covered by a well-modeled semantic layer. `[src:source-004]`.
- *This is not a death-of-BI argument* → Forrester's "GenAI is not replacing business intelligence"
  and "agents will reveal BI was never about dashboards". `[src:source-001]`, `[src:source-002]`.
- *MCP is the integration fabric, so the architecture is configurable rather than bespoke* → MCP as
  the de facto agent-integration standard, servers in the orchestration layer. `[src:source-003]`.
- *The role shift is real* → the emerging "AI analytics engineer"; analysts move to validating AI
  output and business-context fusion. `[src:source-007]`, `[src:source-008]`.
- *Deterministic tools behind agents survive production* → the author's own platform work
  (anonymized, conceptual). `[src:source-009]`.

The claim with no external source behind it, and the one the draft calls the sharpest in the series:
**production SQL encodes logic text-to-SQL cannot see** — `CASCADE` on delete, triggers maintaining
derived columns, stored procedures wrapping multi-step writes, indexed views. This currently rests
on the author's own experience only.

## Candidate sources

- Promoted into `sources.yaml`: the nine entries listed there.
- The umbrella idea's bibliography has 23 items; the remainder (adoption statistics, dark-data
  market sizing, vector-search limits, GraphRAG, STL/time-series evidence, the decision-framework
  sources) support the sibling pieces, not this one.
- Internal resources named in the idea but not used by this piece: `kgmd`
  (https://github.com/johncarpenter/kgmd), `adaptive-simple-text-classifier`,
  `trajectory-memory`.

## Disconfirming evidence

From the idea's "Counterarguments to Address":

- "Dashboards aren't dying — Forrester says so." Agree and use it: the argument is
  over-application, not obsolescence. Conceding this up front is what separates the piece from the
  death-of-BI chorus.
- "This just moves the work, not removes it — and adds hallucination risk." True. The layer trades
  chart-building for semantic modeling, context engineering and evaluation; mitigation is
  verification gates, the semantic layer as ground truth, and a human in the loop where the answer
  is load-bearing.
- "You still need the warehouse and the semantic layer." Completely — and this strengthens the
  thesis rather than undermining it.
- "Three stores (vector + graph + metrics) is operational complexity most teams can't run."
  Honest yes: consistency, latency, orchestration logic, cost. Note the small-scale path before the
  enterprise version.
- "LLMs are getting good at SQL / time series — this caution will age badly." Partly. Frame as
  architecture, not a bet on model weakness: the deterministic core stays cheap, interpretable and
  auditable regardless of model quality.
- "This is just RAG / agentic analytics with extra steps." The extra step is the point: most
  agentic analytics is single-lens.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Migrated on 2026-09-15 from the author's pre-existing material in the knowledge-worker-framework
repository:

- `backlog/idea-2026-05-27-dashboards-answer-known-questions.md` — the shared idea and research
  brief for the whole series (research depth: deep, researched 2026-05-27).
- `drafts/draft-2026-05-29-dont-put-llm-in-analyst-seat.md` — the draft body, migrated verbatim.
- `images/img-2026-05-29-dont-put-llm-substack-header.png` — migrated as `assets/hero.png`.

This article was split out on 2026-05-29 from the superseded 5,800-word draft
`drafts/draft-2026-05-27-dashboards-answer-known-questions.md`, together with
`articles/dashboards-answer-known-questions/` (part 1) and
`articles/three-lenses-and-translator/` (part 3). That superseded draft was deliberately not
migrated; it lives only in the old repository.

Also deliberately left behind in the old repository:

- `images/img-2026-05-29-dont-put-llm-linkedin.png` — channel-specific derivative image.
- `drafts/draft-2026-05-29-dont-put-llm-in-analyst-seat-substack.html` — generated channel HTML.

## Remaining gaps

- The `CASCADE` / triggers / stored-procedures argument has no external source. Decision needed:
  support it, or present it explicitly as first-hand experience.
- The two accuracy/position claims flagged above are unverified as stated.
- The pattern is still unnamed, and the forward and backward links to parts 1 and 3 are `(#)`
  placeholders in the draft.
- The draft notes that the "two-agent architecture" section is dense and asks whether a diagram
  would help. No diagram exists.

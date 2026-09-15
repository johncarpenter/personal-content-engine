# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

In the author's words: "LLMs are the builders. Agents are the users. Deterministic tools sit in
between, and they are the load-bearing wall."

## Sections

Condensed from the idea's Suggested Structure sections 7 (composition) and 9 (production realities
and what changes for the data team), plus the refined angle's semantic-layer finding. Part 2 of the
three-part series.

- **The text-to-SQL temptation** — establishes the failure mode: hallucination in the critical path
  (fabricated tables and columns, faulty joins, missing filters), and the author's own addition that
  production SQL encodes logic (`CASCADE`, triggers, stored procedures, indexed views) a schema-fed
  model cannot see. Evidence: `[src:source-005]`, `[src:source-006]`.
- **LLMs at the edges, deterministic tools in the middle** — the architectural principle, and the
  generation-time versus query-time distinction that carries it. Evidence: first-hand practice,
  `[src:source-009]`.
- **The two-agent architecture** — orchestrator routes, synthesizer translates, deterministic tools
  as MCP servers in between; MCP as the integration fabric that makes this configurable rather than
  bespoke. Honest seams: bad routing, over-confident merging of contradictory tool outputs,
  three-store consistency cost, compounding latency, synthesis cost; smallest-thing-first path.
  Evidence: `[src:source-003]`, `[src:source-009]`.
- **The semantic layer matters more, not less** — the counterintuitive consequence: accuracy climbs
  toward full coverage only against a well-modeled semantic layer, so modeling and governance matter
  more than before; "agents reveal that BI was never about dashboards"; not a death-of-BI argument.
  Evidence: `[src:source-004]`, `[src:source-005]`, `[src:source-002]`, `[src:source-001]`.
- **What it does to your job** — the role shift: less hand-built SQL and chart assembly, more
  semantic modeling, context engineering, and curating/validating generated tools and synthesized
  answers; the "AI analytics engineer" drift. Evidence: `[src:source-007]`, `[src:source-008]`.
- **What's next** — hands off to part 3 (the three lenses and the translator) and restates the
  principle as the takeaway.

## Objections to address

From the idea's "Counterarguments to Address", limited to those this piece owns:

- *"Dashboards aren't dying — Forrester says so."* Agree and use it: the argument is
  over-application, not obsolescence. Handled in "The semantic layer matters more, not less."
- *"This just moves the work, not removes it — and adds hallucination risk."* True, and owned:
  chart-building is traded for semantic modeling, context engineering, and evaluation; hallucination
  in the critical path is real. Handled in "The text-to-SQL temptation" and "What it does to your
  job."
- *"You still need the warehouse and the semantic layer."* Completely — and it strengthens the
  thesis. Handled in "The semantic layer matters more, not less."
- *"Three stores (vector + graph + metrics) is operational complexity most teams can't run."*
  Honest yes; the seams and the small-scale path are named. Handled in "The two-agent architecture."
- *"This is just RAG / agentic analytics with extra steps."* The extra step is the point: most
  agentic analytics is single-lens. Handled in "LLMs at the edges, deterministic tools in the
  middle."
- *"LLMs are getting good at SQL — this caution will age badly."* Framed as architecture, not a bet
  on model weakness: generation-time versus query-time holds regardless of model quality. Handled in
  "LLMs at the edges, deterministic tools in the middle."

## Visuals

- `hero.png` — **establish mood**. AI-generated header image; carries no argument and is not
  referenced in the body.

The draft flags that "Two-agent architecture" is the dense section and asks whether a small diagram
would help there. No such diagram exists.

## Open gaps

Unresolved open questions carried over from the idea, plus items the draft flags:

- **Naming the pattern** — still unresolved in the idea: "The Understanding Layer",
  "data → processing → understanding", or another sticky term.
- **Repo roles** — whether `adaptive-simple-text-classifier` and `trajectory-memory` are worked
  examples or "see also" links in the architecture section.
- The forward and backward links to parts 1 and 3 are working titles with `(#)` placeholders; they
  need real URLs.
- Two factual claims the draft lists for verification: the text-to-SQL 70–85% raw → ~100%
  with-semantic-layer figures (frame as "approaches 100% on covered questions"), and the paraphrase
  of Forrester's "BI is leveling up, not dying" position.

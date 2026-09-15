# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Primary audience: **builders**. Secondary: **AI-curious leaders**.

The reader has decided their dashboards aren't enough and is about to reach for the obvious move —
point a language model at the warehouse and let it write the SQL. The problem they arrive with is
that this looks like the natural extrapolation of BI ("a tool for asking the data questions, except
now the asking is in English") and they have no architectural reason to distrust it. The idea file
frames the underlying failure as *hallucination in the critical path*: text-to-SQL fabricates
non-existent tables and columns, faulty joins, and missing filters — wrong-and-plausible answers in
a domain where that is the worst failure mode.

## Why now

Timeliness was recorded as high, for three reasons stated in the idea's post-research angle:

- A wave of 2026 content already declares the death of the dashboard (CIO, Medium, vendor blogs),
  while Forrester pushes back that "GenAI is not replacing business intelligence." The corrective
  position is available but currently abstract and defensive.
- Each individual lens is well covered in 2026 discourse; the honest practitioner account of
  composing them is not written.
- MCP became the de facto agent-integration standard through 2025–2026, which is what makes this
  architecture configurable rather than bespoke.

## Provisional thesis

From the idea's Argument 6 and the author's framing in the draft: LLMs belong at the **edges** of a
data architecture — an orchestrator that reads a business question and routes, and a synthesizer
that turns structured findings into language — with *deterministic, auditable, reproducible* tools
in between, connected by MCP. And the part the industry has been quiet about: the LLM's real job is
to **build** those tools at design time, not to be them at runtime. In the author's words: "LLMs are
the builders. Agents are the users. Deterministic tools sit in between, and they are the
load-bearing wall."

A second, counterintuitive consequence carried over from the idea's refined angle: the understanding
layer does not kill the warehouse or the semantic model — it depends on them *more* than dashboards
did, because text-to-SQL only approaches full accuracy against a well-modeled semantic layer.

Provisional. Research is allowed to change it.

## Original contribution

From "The User's Unique Contribution":

- Three lenses running **in production, not three blog posts stitched together** — a real retail
  intelligence platform (STL decomposition + pgvector + a containerized agent stack) run in client
  environments, where the author has hit the seams: latency across stores, consistency, orchestration
  logic, and where each lens fails.
- A dual practitioner lens — builds AI systems *and* has data/finance-modeling experience — so the
  honesty about hallucination in the critical path, audit trails, and the role shift lands as
  informed rather than hand-wavy.

The competitive gap the idea identifies for this material: existing conversational-analytics content
is single-lens vendor pitching, and existing agentic-architecture content (GraphRAG + MCP) is
"architecture-only, no decision framework or production scar tissue." Nobody has written the honest
practitioner account that treats the understanding layer as a *peer* architecture rather than a BI
killer.

## Scope

Part 2 of the three-part *understanding layer* series: the architectural pattern.

- The text-to-SQL failure mode, including the argument that production SQL encodes logic
  (`CASCADE`, triggers, stored procedures, indexed views) that a schema-fed model cannot see.
- The generation-time versus query-time distinction: an LLM-written dbt model reviewed once and
  shipped versus SQL generated fresh on every query.
- The two-agent architecture — orchestrator at the top, synthesizer at the bottom, deterministic
  tools as MCP servers in between — and its honest seams: bad routing, over-confident synthesis of
  contradictory tool outputs, three-store consistency cost, compounding latency, synthesis cost.
- Why the semantic layer matters more, not less, and why this is not a "death of BI" argument.
- What it does to the analyst's job: less hand-built SQL and chart assembly, more semantic modeling,
  context engineering, and curating/validating what the system produces — the "AI analytics
  engineer" drift.

## Exclusions

Stated in the idea and the draft's own close:

- The tools themselves. The three lenses (vector search, knowledge graphs, statistical
  decomposition) and the translator role are part 3: "If the architecture in this piece is the wiring
  diagram, the next piece is the equipment that hangs off it."
- The KGMD deep-dive: kept tight and linked out, not restated here.
- The dashboard-worthy vs. insight-worthy rubric and the adoption evidence, which belong to part 1.
- Client-identifying specifics: the retail platform is presented anonymized and conceptual.

## Reader takeaway

The draft's own close: "the takeaway is the principle. LLMs at the edges. Deterministic tools in the
middle. The model builds the tools — once, reviewed, shipped — but it doesn't *be* the tools, and it
absolutely doesn't be the analyst."

## Research effort and dependencies

Research was done once for the whole umbrella idea (research depth: deep, effort: high, researched
2026-05-27) and split across the three series pieces; this piece inherits that research rather than
commissioning its own.

Dependencies and open items carried in from the idea:

- The retail-platform worked example must stay anonymized (resolved 2026-05-27: anonymize the brand,
  soften the numbers) — it is proprietary.
- Naming the pattern was still open at drafting time ("The Understanding Layer" /
  "data → processing → understanding").
- Two factual claims the draft flags for verification before publication: the text-to-SQL
  70–85% raw → ~100% with a semantic layer figures, and the paraphrase of Forrester's "BI is
  leveling up, not dying" position.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-05-27-dashboards-answer-known-questions.md`
and `drafts/draft-2026-05-29-dont-put-llm-in-analyst-seat.md`. This brief documents the commission
after the fact and was never put through Gate 1.

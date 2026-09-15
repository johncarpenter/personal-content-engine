# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Primary audience: builders. Secondary audience: AI-curious leaders.

The reader has accepted the argument that the normalize-and-visualize stack answers only the
questions someone already knew to ask, and that dropping a language model into the analyst's seat is
the wrong shape of fix. Their remaining problem is concrete: *what are the tools, actually?* They
need to know which analytical primitive answers which shape of question, and how the pieces compose
in a system they could build.

## Why now

The idea file rates timeliness high, and gives one specific reason that belongs to this piece: each
individual lens is well covered in 2026 discourse (conversational analytics, GraphRAG, time-series
foundation models), but "what's *not* written is the honest practitioner account of running all
three in parallel, in production, with a decision framework for which lens answers which question."

The second timing reason is cost collapse: the knowledge-graph lens used to mean "a six-month
consulting engagement" because domain experts had to define schemas and hand-annotate
relationships; LLMs collapsed that labor cost, which is why this lens belongs in the architecture
now and did not five years ago.

## Provisional thesis

From the idea's Angle and Thesis Statement: the understanding layer synthesizes across **three
complementary lenses that compose rather than compete** — vector search over the unstructured tail,
knowledge graphs over a markdown substrate, and classical ML / statistical decomposition wrapped by
an LLM — and returns an explanation, a recommendation, or a surfaced anomaly with context rather
than a chart.

The lens-three principle carries the piece: **don't replace the math, wrap it.** Classical statistics
finds the structure; the LLM is the tool-builder at design time and the translator at the end. The
synthesis step is a *role*, not a fourth primitive.

## Original contribution

From "The User's Unique Contribution" in the idea file:

- **Three lenses running in production, not three blog posts stitched together.** Circuit Signal is
  a real retail-intelligence platform — STL decomposition, pgvector, a containerized agent stack —
  run across all three lenses together in client environments, including the seams (latency across
  stores, orchestration logic, where each lens fails). "That lived composition is the unoccupied
  position — everyone else covers one lens at a time."
- **The worked example for lens three.** "AI codifying standard ML approaches to speed the analysis
  you need to do": residual spike → investigable lead → natural-language explanation, concrete and
  demonstrable.
- **Shippable repos back the lenses.** `kgmd` for the graph lens;
  `adaptive-simple-text-classifier` as a lens-one/lens-three bridge; `trajectory-memory` as an
  orchestration/memory candidate. "Here's the architecture" backed by "here's the code" is the
  credibility move vendor and analyst content can't match.
- **Dual practitioner lens** — builds AI systems and has data/finance-modeling experience, so the
  honesty about hallucination in the critical path lands as informed rather than hand-wavy.

The competitive gap the idea names: existing content covers one or two lenses (conversational
analytics is single-lens text-to-SQL; GraphRAG + MCP writeups omit classical ML/time-series;
time-series foundation-model pieces never connect statistical structure to unstructured or
relational context or to a synthesis layer). Nobody has written the account that composes all three
behind one synthesis layer and is backed by a real multi-lens production system and shippable code.

## Scope

The three lenses and the translator role, worked end to end through one example:

- Lens one — vector search over the unstructured tail: pgvector, hybrid retrieval (BM25 + dense),
  and honest limits (no precise numeric filters, no relational joins, nothing needing a schema).
- Lens two — knowledge graphs over a markdown substrate: the relational context schemas throw away;
  graph for structure, vectors for similarity; multi-hop as a deterministic path.
- Lens three — statistical decomposition: STL trend / seasonal / residual, the residual as where the
  questions live, and the empirical case against LLM forecasters on periodic+trend data.
- The synthesizer as translator: what it is good at, its four failure modes, and the four matching
  mitigations.

The anonymized retail worked example (a major beer brand and its alcohol-free 0.0 line, from US
restaurant POS data) runs through all four parts.

## Exclusions

Stated limits carried over from the idea file:

- The knowledge-graph lens stays deliberately tight and links out to the standalone KGMD deep-dive —
  "link out to the KGMD deep-dive for the how; do not restate it." Guard against it ballooning back
  into the deep-dive.
- Circuit Signal is proprietary: present it anonymized and conceptual — "a retail intelligence
  platform we built," never client names or proprietary specifics. Brand anonymized, numbers
  softened, exact transaction counts / run IDs / store keys dropped (treatment decision 2026-05-27).

TODO: confirm the remaining exclusions for this piece specifically — the idea file's dashboard-worthy
vs. insight-worthy rubric and the production-realities/role-shift close were assigned to the two
sibling articles when the draft was split, but the split is not documented as an explicit exclusion.

## Reader takeaway

From the idea's abstract: the reader leaves with "a concrete architectural pattern for layering
them" — which lens fits which shape of question, and why the three compose instead of competing.

The closing thought the idea asks the piece to land on: agents, not humans, are the next consumer of
this layer.

## Research effort and dependencies

Estimated effort: high. Research depth: deep; researched 2026-05-27 and marked ready for draft.

Known dependencies, from the idea's open questions:

- Naming the pattern — a sticky umbrella term was still unpicked at drafting time.
- Repo roles — whether `adaptive-simple-text-classifier` and `trajectory-memory` appear as worked
  examples or stay as "see also" links.
- Scope discipline — at 4–6k words the umbrella argument risked sprawl (the reason the draft was
  later split into three pieces).
- Circuit Signal anonymization, resolved 2026-05-27; verification of the IDC unstructured-data
  figure and the LLM-forecasting findings, still open per the draft's own verification list.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-05-27-dashboards-answer-known-questions.md`
and `drafts/draft-2026-05-29-three-lenses-and-translator.md`. This brief documents the commission
after the fact and was never put through Gate 1.

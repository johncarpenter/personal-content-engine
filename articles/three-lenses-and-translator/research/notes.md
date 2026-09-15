# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's open questions, the ones bearing on this piece:

- Repo roles: is `adaptive-simple-text-classifier` the lens-one/lens-three bridge example and
  `trajectory-memory` the orchestration/memory layer, or do both stay as "see also" links to avoid
  scope creep? (Open.)
- Naming the pattern: the author's content does well when it names a concept. Candidates for the
  umbrella were "The Understanding Layer", "Insight-worthy vs Dashboard-worthy", and
  "data → processing → understanding". Pick one sticky term. (Open.)
- Scope discipline: the knowledge-graph lens must stay tight and link out — guard against it
  ballooning back into the standalone deep-dive. (Open.)
- Other worked examples: the beer vs. college-football-scores analysis as the
  lagged-correlation / spurious-vs-real-signal honesty beat. (Open.)
- Circuit Signal anonymization: resolved 2026-05-27 — anonymize the brand, soften the numbers,
  "a major beer brand and its alcohol-free 0.0 line, from US restaurant POS data."
- Live demo material: resolved — the anonymized beer-vs-0.0 analysis is the lens-three demo (STL
  finds Sat-vs-Fri peaks unprompted → October residual spike → lagged correlation kills the
  cannibalization story → LLM synthesizes the occasion insight). Charts available.

## Assumptions to test

The draft's own list of factual claims still to verify:

- IDC ~90% of enterprise data is unstructured (`[src:source-001]` reports it second-hand).
- LLM forecasters degrade on trend+seasonal data; ARIMA unbeaten on small series
  (`[src:source-005]`, arXiv 2408.04867).
- All beer-example specifics — anonymized, rounded, no client identifiers (`[src:source-008]`).

## Evidence needed for the central claims

- *The warehouse sees a minority of what you know* → a published estimate of the unstructured share
  of enterprise data, plus a retail-specific example of free-text notes carrying insight:
  `[src:source-001]`, `[src:source-002]`.
- *Vectors are for similarity, graphs are for structure* → a source showing multi-hop questions
  where a flat vector search misses the middle link and a graph gives a deterministic path:
  `[src:source-007]`.
- *Don't replace the math* → empirical benchmarking of LLM forecasters against classical methods on
  series with both trend and seasonality, plus where deep learning still wins:
  `[src:source-005]`, `[src:source-006]`.
- *The residual is where the questions live* → STL mechanics and the standard practice of detecting
  anomalies in the remainder: `[src:source-003]`, `[src:source-004]`.
- *The composition produced an insight no dashboard would surface* → the first-hand analysis itself:
  `[src:source-008]`.

## Candidate sources

- Circuit Signal (proprietary) — retail intelligence platform: STL decomposition, pgvector,
  containerized agent stack. Live demo material for the statistics lens and the composition
  argument. Anonymize / keep conceptual in public content.
- `kgmd` — https://github.com/johncarpenter/kgmd — open-source knowledge-graphs-from-markdown
  implementation; the companion deep-dive piece covers the how.
- `adaptive-simple-text-classifier` — https://github.com/johncarpenter/adaptive-simple-text-classifier
  — candidate worked example for classical-ML-wrapped-by-AI over the unstructured tail.
- `trajectory-memory` — https://github.com/johncarpenter/trajectory-memory — candidate for the
  orchestration / memory layer.
- The vector-search limits evidence base (cosine captures direction not equivalence, hubness, no
  structured ops/negation/temporal) lives in the companion embeddings idea; reference rather than
  restate.
- The knowledge-graph evidence base (schema induction, entity resolution, GraphRAG-Bench, MCP
  interface) lives in the standalone KGMD idea; reference rather than restate.

## Disconfirming evidence

From the idea file's counterarguments — what would show the thesis is wrong, and what was found:

- *"LLMs are getting good at time series, so the wrap-the-math caution will age badly."* Partly
  true. Current evidence says LLMs degrade on periodic+trend series and classical methods win on
  small, regular, and probabilistic forecasts. The position is framed as architecture, not a bet on
  model weakness: the statistical decomposition is the cheap, interpretable, auditable core even if
  the wrapper improves.
- *"This just moves the work and adds hallucination risk."* True. Hallucination in the critical path
  is real; the synthesizer can produce a confident conclusion the lens outputs don't support. The
  answer is grounding, transparency, explicit uncertainty, and human review where the answer is
  load-bearing.
- *"Three stores (vector + graph + metrics) is operational complexity most teams can't run."*
  Honest yes — consistency, latency, orchestration logic, cost. A small-scale path exists before the
  enterprise version.
- *"This is just RAG / agentic analytics with extra steps."* Most agentic analytics is single-lens
  (text-to-SQL, or RAG over documents); the composition of structured statistics, unstructured
  semantics and a relational graph behind one synthesis layer is the claim.
- Data-quality disconfirmers inside the worked example itself: differing store coverage may inflate
  the weekday skew, the 0.0 sample is ~15x smaller, and a late-period export artifact produced an
  implausible z ~ 26 spike — the kind of thing the residual layer flags and a human must adjudicate.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed. The old
material records only "estimated effort: high" and "research depth: deep" (researched 2026-05-27),
not a stop rule.

## Notes

Source material for this article, in the knowledge-worker-framework repository:

- `backlog/idea-2026-05-27-dashboards-answer-known-questions.md` — the shared idea/research brief
  for all three articles in the series. Only the material supporting this piece's architecture
  argument was carried over (lenses one to three, the composition point, the synthesis role, and the
  worked example); the dashboard-critique and analyst-seat material stayed with the sibling pieces.
- `drafts/draft-2026-05-29-three-lenses-and-translator.md` — the draft body, copied verbatim into
  `article.md` minus frontmatter, the H1, and the trailing draft self-assessment.

Deliberately left behind, so the trail is not lost:

- `drafts/draft-2026-05-27-dashboards-answer-known-questions.md` — the superseded 5,800-word single
  draft. On 2026-05-29 it was split into three articles: this one, plus
  `articles/dashboards-answer-known-questions/` and `articles/dont-put-llm-in-analyst-seat/`. Not
  copied here.
- `drafts/draft-2026-05-29-three-lenses-and-translator-substack.html` — generated channel HTML, not
  migrated.
- The draft's trailing self-assessment block (voice/hook scoring, title options, word-count
  estimates, repurposing plans) — production tooling output, not article prose, so not migrated.
  Its two substantive residues are recorded above: the factual-claims-to-verify list under
  "Assumptions to test", and the author-attention items (unpublished KGMD cross-link, placeholder
  series links) in `outline.md`.

## Remaining gaps

- The two in-article series links point at `#` placeholders and the KGMD cross-link points at the
  Substack root because that piece was unpublished at drafting time. Resolve before publication.
- The article's closing section is itself a list of unresolved questions the author states openly
  (how thin the orchestrator's routing logic can be, how confident a synthesizer may sound when
  lens inputs disagree, whether the two-agent split pays for itself below a certain scale, whether
  LLM-as-tool-builder generalizes beyond analytics). Disclosed in the article rather than resolved.
- The idea file's reference diagram of the composed architecture and the residual charts from the
  worked example do not exist in this repository. Decide: produce, or ship without.

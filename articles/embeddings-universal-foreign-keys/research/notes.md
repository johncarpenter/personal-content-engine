# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

Carried over from the idea file's Research Brief (research pass recorded as detailed, 2026-05-06).
No draft exists.

## Questions that must be answered

From the idea file's Open Questions:

- **Circuit Signal permissions** — can the case study be referenced by name, or does it need
  anonymization? The behavioral embeddings in pgvector are the strongest proof point.
- **Prototype feasibility** — can the knowledge worker framework's qmd indexer be extended to
  demonstrate cross-collection relationship discovery (emails that relate to meetings that relate
  to feed items)? This would provide a live demo.
- **Naming decision** — "universal foreign keys" vs. "emergent foreign keys". "Universal" implies
  they replace all FKs (they don't); "emergent" captures the discovery aspect, less punchy, more
  precise.
- **LOTUS deep-dive** — include a code walkthrough of `sem_sim_join`? Credibility for builders vs.
  risk of an over-academic piece.
- **Framework naming** — is "propose, adjudicate, commit" the sticky name for the three layers?
- **Embedding model choice** — does dimensionality matter for "foreign key" quality
  (text-embedding-3-large at 3072 dimensions vs. smaller models)? Brief note or separate
  investigation?

## Assumptions to test

Claims the idea file asserts without evidence recorded for them:

- That the three-layer architecture (discover → verify → materialize) is "the pattern nobody has
  named" — the competitive-landscape table is the only support offered.
- That "embeddings as universal foreign keys" is an unoccupied phrase. The file records a zero-result
  search only for the earlier term "Surface Oracle Ratchet"; no search is recorded for this one.
- That the Circuit Signal emergent clusters revealed patterns "a designed relational schema missed
  entirely" — first-hand, currently undocumented beyond the author's recollection.

## Evidence needed for the central claims

The idea file's six key arguments and the evidence it assembled for each:

1. **Foreign keys are human assertions; embeddings are emergent assertions.** Relational model
   (Codd, 1970) — foreign keys as integrity constraints, deliberate by definition. Embedding models
   encode statistical co-occurrence: two items are "related" if they occupy nearby vector space, a
   property that emerges from training data rather than human design. A 3072-dimensional vector
   (OpenAI text-embedding-3-large) encodes relational information across a space no human schema
   designer would enumerate. Trade-off: foreign keys are 100% precise, embeddings are probabilistic.
2. **The three-layer architecture is the real pattern.** Nobody has successfully replaced foreign
   keys with embeddings; the hybrid is Layer 1 embedding similarity (high recall, lower precision) →
   Layer 2 LLM verification (raises precision) → Layer 3 materialization (explicit, now-discovered
   link). LOTUS formalizes this as `sem_sim_join`: embedding pre-filter plus LLM verification,
   nearly doubling F1 over pure similarity, 800x speedup on BioDEX
   (`source-001`). Enterprise variant: RERP for SQL Server — separate content from embeddings,
   metadata-scoped filtering before similarity (`source-011`). Formal join optimization:
   Trummer 2024 (`source-007`). Benchmarking: SemBench (`source-006`).
3. **Entity resolution is the proof case — and already mature.** Ditto achieves 90–98% F1 matching
   records across databases with no shared keys using pre-trained Transformer embeddings, up to 32%
   F1 improvement over previous SOTA, 96.5% F1 on company matching (789K × 412K records); technique
   concatenates record pairs into a single sequence for token-level interaction (`source-003`).
   Broader evaluation across 12 language models and 17 benchmarks (`source-004`); streaming
   extension (`source-005`); accessible overview linking ER to knowledge-graph construction
   (`source-016`). Most immediately actionable part for builders.
4. **The mathematical limits are real and worth being honest about.** For embedding dimension *d*
   the number of representable top-k subsets is bounded, and the limitation shows up with realistic
   queries, not just edge cases (`source-002`). Cosine similarity captures directional alignment,
   not semantic equivalence (`source-012`, `source-013`). The hubness problem: certain
   high-dimensional points become nearest neighbours of many others regardless of relatedness,
   creating systematic false positives. Structured operations (filter, sort, aggregate, negate),
   multi-hop traversal, factual precision and temporal/causal relationships have no natural vector
   representation (`source-014`).
5. **"Embed first, ask questions later" works for discovery, not operations.** Embeddings as the
   intake and discovery layer for a data lake; materialize the valuable discoveries as explicit
   structure; keep relational schema for operational queries. The embedding layer generates schema,
   it does not replace it.
6. **LanceDB is the closest production implementation.** Raw data, embeddings and metadata in one
   Lance-format table, queryable by vector search, full-text search and SQL via DuckDB
   (`source-008`, `source-009`); embedded, serverless, Apache 2.0; new columns/embeddings added
   during large-scale transformation, i.e. schema evolving as you discover. Also pgvector (vector
   similarity plus full SQL in one query), Weaviate semantic cross-references (`source-010`), and
   SQL Server 2025's native VECTOR type with DiskANN indexing and full T-SQL.

## Candidate sources

First-hand observations, not yet promoted into `sources.yaml` — permission and documentation are
unresolved (see "Questions that must be answered"):

- **Circuit Signal** — behavioral embeddings in pgvector; customer actions across web, app and
  support interactions embedded into one vector space, with emergent clusters linking a support
  ticket, a product page visit and a payment failure without those links being schematized.
- **Adaptive classifier** — emergent categorization from embedding clusters with no predefined
  taxonomy; categories discovered rather than designed.
- **Knowledge worker framework qmd indexer** — embeds documents and enables semantic search across
  collections (emails, meetings, feeds); candidate small-scale demonstration of cross-collection
  relationship discovery.

Also cited in the idea file without a full reference: **Codd, 1970**, the relational model (foreign
keys as integrity constraints — "a value in one relation that must match a primary key in
another"). Needs a proper citation before use.

The 16 web sources from the idea file's Source Bibliography are recorded in `sources.yaml` as
`source-001`–`source-016`.

## Disconfirming evidence

What would show the thesis is wrong, and what the research pass already found:

- The DeepMind ICLR 2026 proof (`source-002`) is the strongest disconfirming find: it forced the
  original claim ("structure was never a property of the data — it was a property of the query") to
  be narrowed, because some structure is irreducibly necessary. The idea file's answer is that the
  proof constrains embedding-*only* retrieval and therefore argues for the hybrid rather than
  against it.
- Cosine similarity is not a semantic-equivalence measure (`source-012`, `source-013`), and the
  hubness problem produces systematic false positives — relational integrity cannot rest on Layer 1
  alone.
- Embeddings fail outright on structured operations, negation, multi-hop traversal, factual
  precision and temporal/causal relationships (`source-014`).
- SemBench (`source-006`) finds that cost optimization for semantic joins comes at the expense of
  quality — a direct challenge to the "broad cheap sweep, narrow expensive verification" economics.
- Knowledge graphs are positioned by Neo4j as the answer instead (`source-015`, `source-014`);
  the counter-position to test is complementarity rather than competition.
- Objections the idea file expects and answers: "this is just search, not relational modelling";
  "cosine similarity is too noisy for relational integrity"; "LLM verification is O(n²)"; "you
  still need a schema for operational queries"; "entity resolution has been around for decades";
  "the DeepMind paper proves this can't work".

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

- Built from the author's pre-existing material in the knowledge-worker-framework repository:
  `workspace/content/backlog/idea-2026-04-02-embeddings-universal-foreign-keys.md` (the only input;
  no draft, no research file, no images existed).
- Deliberately left behind in the old repository: the idea file's derivative-channel planning —
  the derivative angles list, the repurposing-plan table (short-form posts, a 10–12 slide carousel,
  a 20-minute talk with live demo, syndication), the backlog scoring block, and the
  channel/priority front-matter fields. None of that is editorial work product for this
  repository.
- Cross-references the idea file records: related published pieces "Trajectory" (novel application
  of ML concepts to practical engineering) and "Surface Oracle Ratchet" (naming a concept that
  exists but isn't formalized); related backlog idea "Literate Programming Waited for AI"; possible
  seed for a "Rethinking Data Architecture" thread.

## Remaining gaps

Everything under "Questions that must be answered" is still open; none was closed before migration.
The blocking two are Circuit Signal permissions (resolve, or anonymize the case study) and the
naming decision (resolve before drafting, since the title depends on it). The framework name, the
LOTUS code walkthrough and the embedding-dimensionality question are drafting-time decisions rather
than evidence gaps. Prototype feasibility can be disclosed rather than resolved if the qmd
extension is not built.

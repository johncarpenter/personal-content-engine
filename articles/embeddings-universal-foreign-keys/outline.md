# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

Condensed from the idea file's "Initial Structure Thoughts" and "Suggested Structure" (long-form,
~2,500 words) plus its "Counterarguments to Address". No draft exists yet.

## Argument in one sentence

Embeddings don't replace foreign keys — they discover foreign keys that humans never would have
designed: they are a relationship *proposal* mechanism, not a relationship *assertion* mechanism,
so the architecture worth naming is discover via embedding → verify via LLM → materialize as an
explicit link.

## Sections

- **Opening: the most important concept in databases** (~250 words) — establishes the primitive.
  The foreign key, Codd 1970, a deliberate assertion that "these two things are related." It works
  because a human designed the relationship; it breaks when the relationship wasn't anticipated —
  data from a source the schema author never imagined, in a format that doesn't fit, expressing a
  relationship nobody thought to model.
- **The 3072-dimensional foreign key** (~400 words) — states the analogy. A foreign key is a
  1-dimensional link (match/no-match); an embedding is a 3072-dimensional link (similarity across a
  space no human would design). Deliberate vs. emergent, schema-dependent vs. schema-free. The
  trade-off: the foreign key is always right, the embedding is sometimes wrong — but it works
  across schemas, modalities, and contexts that were never designed to connect.
- **Where this actually works: entity resolution** (~400 words) — the strongest proof case.
  Evidence: `[src:source-003]` (Ditto: 96.5% F1 matching company records across databases with no
  shared keys — literally discovering foreign keys that don't exist in the schema), supported by
  `[src:source-004]`, `[src:source-016]`. Then the Circuit Signal case study: behavioral embeddings
  in pgvector revealing customer patterns a designed schema missed. Concrete, specific, shows the
  code/architecture.
- **The three-layer architecture** (~400 words) — the pattern nobody has named, and the intended
  screenshottable framework. Layer 1 embedding similarity casts a wide net (high recall); Layer 2
  LLM verification confirms or rejects candidates (raises precision); Layer 3 materialization
  stores confirmed links as explicit structure. Propose → adjudicate → commit. Evidence:
  `[src:source-001]` (LOTUS formalizes this as `sem_sim_join`), `[src:source-011]`,
  `[src:source-006]`, `[src:source-007]`.
- **Where this breaks: the honest limits** (~350 words) — makes the recommendation credible by
  naming the ceiling. Evidence: `[src:source-002]` (mathematical ceiling for embedding dimension
  *d*), `[src:source-012]`, `[src:source-013]` (cosine captures direction, not equivalence), the
  hubness problem, and `[src:source-014]` (structured operations, negation, multi-hop traversal,
  temporal/causal relationships, factual precision). Be specific about what you would still
  schematize manually.
- **The architecture you actually build** (~400 words) — turns the argument into practice. Embed
  first, discover relationships, materialize the valuable ones; keep relational structure for
  operational queries. Evidence: `[src:source-008]`, `[src:source-009]` (LanceDB / Lance x DuckDB
  as embed-first lakehouse), pgvector hybrid queries, `[src:source-010]`, `[src:source-001]`, plus
  the knowledge worker framework as a small-scale proof (emails, meetings, feeds, documents all
  embedded, cross-collection relationships discovered automatically).
- **Close: the best foreign key is one you never had to design** (~200 words) — lands the takeaway.
  Schemas are expensive and wrong the moment the data changes. Not "throw away your schema" — "let
  the schema emerge." The 3072-dimensional foreign key isn't a replacement; it's a scout.

## Objections to address

The idea file lists six, with its intended response:

1. **"This is just search, not relational modeling."** Distinguish: vector search retrieves
   *relevant* documents; this uses similarity to discover *relationships between* documents and
   then materializes them. The output is a relational model, not a ranked list. Handled in the
   three-layer architecture section.
2. **"Cosine similarity is too noisy for relational integrity."** Agree — that is why the three
   layers exist: embedding gives recall, LLM verification gives precision, materialization gives
   deterministic relationships. Handled in the three-layer architecture and limits sections.
3. **"This doesn't scale — LLM verification on every pair is O(n²)."** The embedding pre-filter
   reduces the candidate set before verification; LOTUS reports an 800x speedup on BioDEX
   (`[src:source-001]`). Handled in the three-layer architecture section.
4. **"You still need a schema for operational queries."** Completely agree, acknowledge head-on.
   Embeddings handle discovery and fuzzy matching; operations (filter, aggregate, sort, enforce
   constraints) require relational structure. Handled in "the architecture you actually build".
5. **"Entity resolution has been around for decades — what's new?"** The accuracy jump from
   pre-trained Transformer embeddings (Ditto's 32% F1 improvement over previous SOTA) plus the
   three-layer architecture that makes it practical at scale; embedding-based ER works across
   modalities and languages without hand-crafted rules. Handled in the entity resolution section.
6. **"The DeepMind paper proves this fundamentally can't work."** It proves embedding-*only*
   retrieval has hard limits, which strengthens rather than invalidates the hybrid. Handled in the
   limits section.

## Visuals

TODO: planned images and the editorial purpose of each — explain, demonstrate, provide evidence, or
establish mood.

No image assets exist for this article. The only visuals the idea file proposes belong to
derivative channel formats (carousel slides, a live-demo talk), which are out of scope here.

## Open gaps

The idea file's unresolved open questions:

- **Circuit Signal permissions** — can the case study be referenced by name, or does it need
  anonymization? It is the strongest proof point.
- **Prototype feasibility** — can the knowledge worker framework's qmd indexer be extended to
  demonstrate cross-collection relationship discovery (emails → meetings → feed items)?
- **Naming decision** — "universal foreign keys" or "emergent foreign keys"? "Universal" implies
  they replace all FKs (they don't); "emergent" captures the discovery aspect but is less punchy.
- **LOTUS deep-dive** — include a code walkthrough of `sem_sim_join`? Adds technical credibility
  for builders but risks making the piece too academic.
- **Framework naming** — is "propose, adjudicate, commit" the sticky name, or does something else
  work better?
- **Embedding model choice** — text-embedding-3-large (3072-dim) vs. smaller models: does
  dimensionality affect "foreign key" quality? A brief note or a separate investigation?

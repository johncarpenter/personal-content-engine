# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Builders. The idea file frames their question as: not *whether* embeddings can replace relational
schema ("they can't, and the math proves it"), but "what relationships emerge when you embed first
and ask questions later — relationships no human would have schematized." The reader arrives having
designed databases, so the foreign-key analogy is intuitive to them; what they lack is a
practitioner account of where embedding-based relationship discovery works, where it breaks, and
what architecture to actually build.

## Why now

TODO: the timing reason, if there is one. "No particular timing" is an acceptable answer.

## Provisional thesis

Provisional — recorded as it stood after the idea file's research pass.

Initial thesis statement: "Embeddings don't replace foreign keys — they discover foreign keys that
humans never would have designed. A relational foreign key is a deliberate, one-dimensional
assertion ('these two rows are linked'). An embedding vector is an emergent, 3072-dimensional
assertion of the same thing — but across modalities, schemas, and contexts that were never designed
to connect."

The idea file then refines the original provocative claim ("Structure was never a property of the
data — it was a property of the query. Embeddings just make that explicit."), because a DeepMind
ICLR 2026 paper proves a fundamental mathematical limit: for a given embedding dimension *d*, there
exist document combinations that cannot be retrieved regardless of query. Some structure is
irreducibly necessary. The refined thesis: "Embeddings are a relationship *proposal* mechanism, not
a relationship *assertion* mechanism." The three-layer architecture emerging in production
(discover via embedding → verify via LLM → materialize as explicit link) is the pattern worth naming
and explaining; the "universal foreign key" is the candidate key that gets promoted to a real key
after verification. The idea file's own assessment: this makes the piece "not a utopian 'throw away
your schemas' argument but a practical 'here's how the discovery layer works, here's where it
breaks, and here's the architecture you actually build.'"

## Original contribution

Two real implementations, not thought experiments (the idea file's phrasing), plus a third
small-scale system:

- **Circuit Signal — behavioral embeddings in pgvector.** A system where customer actions across
  modalities (web, app, support interactions) are embedded into the same vector space. Emergent
  clusters revealed behavioral patterns a designed relational schema missed entirely: the "foreign
  keys" between a support ticket, a product page visit, and a payment failure were never
  schematized — they emerged from embedding proximity.
- **Adaptive classifier — emergent categorization.** Categorization without predefined taxonomies;
  categories emerge from embedding clusters rather than from a human deciding "these are the 12
  categories." Discovered, not designed.
- **The knowledge worker framework — embed-first knowledge base.** Its qmd indexer already embeds
  documents and enables semantic search across collections (emails, meetings, feeds);
  cross-collection similarity could discover implicit relationships without manual tagging.

The competitive gap the idea file identifies: existing content either sells a product (LanceDB,
Weaviate), publishes theory (DeepMind), or lists problems (RAG-limitation posts). "Nobody has
written the practitioner piece that says: 'Here's the foreign key analogy that makes this intuitive.
Here's the three-layer architecture (discover → verify → materialize). Here's where it works, here's
where it breaks, and here's a real implementation.' ... The 'honest practitioner with a memorable
name for the pattern' position is completely open."

## Scope

TODO: what the article covers.

## Exclusions

TODO: what it deliberately does not cover.

## Reader takeaway

From the idea file's close — "The best foreign key is one you never had to design": schemas are
expensive, they require upfront knowledge of what matters, and they are wrong the moment the data
changes. Embeddings invert the process: ingest everything, discover what's related, then build
structure around the discoveries. Not "throw away your schema" — "let the schema emerge." The
3072-dimensional foreign key isn't a replacement; it's a scout.

## Research effort and dependencies

TODO: expected effort (e.g. "half a day, desk research only" or "two practitioner interviews"), plus
known dependencies — data access, interviewees, legal or product review.

Dependencies the idea file does record:

- **Circuit Signal permissions** — can the case study be referenced by name, or does it need
  anonymization? The behavioral embeddings in pgvector are the strongest proof point.
- **Prototype feasibility** — can the knowledge worker framework's qmd indexer be extended to
  demonstrate cross-collection relationship discovery (emails that relate to meetings that relate
  to feed items)?

The idea file records its research pass as detailed, completed 2026-05-06.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `workspace/content/backlog/idea-2026-04-02-embeddings-universal-foreign-keys.md`.
This brief documents the commission after the fact and was never put through Gate 1. The article has
no draft: it was pulled forward at pre-draft stage for its research value, so `article.md` remains
the untouched scaffold.

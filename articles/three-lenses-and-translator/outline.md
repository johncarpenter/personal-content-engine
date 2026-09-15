# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

The three lenses aren't competing; they compose — vector search for the unstructured tail, a
knowledge graph for the relationships schemas throw away, statistical decomposition for the
structure inside the numbers — and the synthesizer's job is translation, not computation: don't
replace the math, wrap it.

## Sections

Condensed from the idea file's suggested structure (its sections 4–6 plus the composition section),
which the draft turned into three lenses and a role:

- **Three lenses, one role** — owns the category mismatch up front: three primitives (similarity,
  structure, statistics) plus a role the synthesizer plays. Three lenses plus a role, not four
  lenses.
- **Lens one — vector search over the unstructured tail** — embeddings + pgvector turn the tail the
  warehouse can't model into queryable substrate. Hybrid retrieval (BM25 + dense). Latent-space
  clustering as discovery, not retrieval. Honest limits: precise numeric filters, relational joins,
  anything needing a schema, relationships between things. Evidence: `[src:source-001]`,
  `[src:source-002]`.
- **Lens two — knowledge graphs over a markdown substrate** — a schema is a decision about what
  context to throw away; the old hand-annotation labor cost is what LLMs collapsed; the graph is
  built once, reviewed, then queried deterministically. Composition point: graph for structure,
  vectors for similarity; multi-hop is a deterministic walk, not a lucky retrieval. Kept tight and
  linked out to the standalone KGMD deep-dive. Evidence: `[src:source-007]`, `[src:source-009]`.
- **Lens three — wrap the math, don't replace it** — STL trend / seasonal / residual; the residual
  is where the questions live. The empirical case against LLM forecasters on periodic+trend series
  is the spine of "wrap, don't replace." Worked example in three beats: the decomposition finding
  the weekly and annual peaks with no calendar labels, the recurring October residual, and the
  lagged correlation that falsified the cannibalization story. Evidence: `[src:source-003]`,
  `[src:source-004]`, `[src:source-005]`, `[src:source-006]`, `[src:source-008]`.
- **Lens four — the translator role** — takes the pile of structured findings (distances, paths,
  residuals, anomaly scores, lead values) and writes the sentence a stakeholder can act on. Four
  failure modes (hallucination, overconfidence, prompt sensitivity, no memory) against four
  mitigations (grounding, transparency, uncertainty, human oversight). Evidence:
  `[src:source-008]`.
- **What's left to figure out** — the open edges of the pattern, closing on agents rather than
  humans as the next consumer of this layer.

## Objections to address

From the idea file's "Counterarguments to Address", the ones this piece carries:

- **"LLMs are getting good at time series — this lens-three caution will age badly."** Partly; but
  the current evidence is that LLMs degrade on periodic+trend series and classical methods win on
  small, regular, and probabilistic forecasts. "Wrap the math" is robust regardless: the statistical
  decomposition stays the cheap, interpretable, auditable core. Frame as architecture, not a bet on
  model weakness. Handled in lens three.
- **"This is just RAG / agentic analytics with extra steps."** The extra step *is* the point: most
  agentic analytics is single-lens. The contribution is composing structured stats, unstructured
  semantics and a relational graph behind one synthesis layer. Handled by the composition argument
  running through lenses one to three.
- **"This just moves the work, and adds hallucination risk."** True; hallucination in the critical
  path is real and numbers can't be trusted blind. Mitigation: grounding, transparency, explicit
  uncertainty, human-in-the-loop where the answer is load-bearing. Handled in lens four's
  limitations-and-mitigations pair.
- **"Three stores (vector + graph + metrics) is operational complexity most teams can't run."**
  Honest yes. Partly handled in the close, which asks whether the two-agent split is worth the
  operational cost below a certain scale.

## Visuals

- `hero` (`assets/hero.png`) — **establish mood**. AI-generated abstract header: three geometric
  forms channeling into one focal point. Never referenced from the article body.

TODO: the idea file calls for a reference diagram of the composed architecture (ingestion → the
lenses in parallel → orchestration → conversation/notification/artifact) and mentions residual
charts from the worked example are available. Neither exists in this repository — decide whether to
produce them.

## Open gaps

Unresolved open questions carried from the idea file:

- Repo roles — confirm `adaptive-simple-text-classifier` as the lens-one/lens-three bridge and
  `trajectory-memory` as the orchestration/memory layer, or keep both as "see also" links.
- Naming the pattern — no sticky umbrella term picked ("The Understanding Layer",
  "Insight-worthy vs Dashboard-worthy", "data → processing → understanding" were the candidates).
- Scope discipline — the graph lens must stay tight and link out rather than reabsorbing the
  deep-dive.
- Other worked examples — the beer vs. college-football-scores analysis remains a candidate for the
  lagged-correlation / spurious-vs-real-signal honesty beat.

TODO: the draft's own author-attention list is also unresolved: the KGMD cross-link points at the
Substack root because that piece isn't published yet, and both series links are placeholders.

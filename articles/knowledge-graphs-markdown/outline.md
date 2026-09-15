# Outline

Condensed from the idea file's "Structure Thoughts" and "Suggested Structure (~2,500 words)".

## Argument in one sentence

"Your markdown files already contain a knowledge graph — entities, relationships, context scattered
across hundreds of documents. LLMs can now extract that graph automatically, and with local tools
(SQLite, embeddings, MCP), you can query it without any cloud infrastructure or graph database."

## Sections

- **Opening hook** — "You have a knowledge graph. You just can't see it yet." Opens on a concrete
  scenario: you know a person is connected to a project because you read about it in meeting notes
  three months ago, but you can't find it.
- **What is a knowledge graph? (accessible, not academic)** — nodes are things (people, projects,
  companies, concepts), edges are relationships (works-on, funded-by, depends-on). The insight: your
  markdown files ARE a knowledge graph with the edges hidden in prose. Evidence:
  `[src:source-001]`.
- **Why now? Four things converged** — (a) LLM extraction quality is good enough
  (`[src:source-002]`, `[src:source-003]`), (b) 12x cost collapse in 36 months (`[src:source-013]`),
  (c) sqlite-vec means no infrastructure (`[src:source-009]`), (d) MCP means any AI agent can query
  it (`[src:source-010]`). Context-setting, not the main act.
- **The Karpathy moment** — "Karpathy described the architecture. Here's an implementation."
  Evidence: `[src:source-001]`, `[src:source-014]`.
- **Three stages: Extract, Resolve, Induce** — the core technical section, each stage with a
  concrete example from a real corpus. Extract: entities and a typed relation from one paragraph.
  Resolve: name variants cluster, LLM confirms the merge (`[src:source-012]`). Induce: after ~200
  files, the discovered entity types, relation predicates, and hierarchy. Constraining extraction
  with a schema matters (`[src:source-011]`).
- **Building one from your notes** — walkthrough: `pip install kgmd`, `kgmd init`, `kgmd build`,
  actual CLI output, a neighbor query, the MCP integration. First-hand evidence: the author's own
  tool, https://github.com/johncarpenter/kgmd.
- **What this doesn't do (honest limitations)** — addresses the counterarguments directly:
  hallucination rates, imperfect entity resolution, navigational aid rather than source of truth,
  better than grep but not better than a domain expert's memory (`[src:source-005]`).
- **Where this goes** — MCP integration means an AI assistant has structured memory; the graph
  becomes the long-term memory layer current tools lack (`[src:source-010]`). Brief,
  forward-looking, not over-promised.
- **Close** — "pip install kgmd", link to the repo, try it on your own notes.

## Objections to address

Handled in the "What this doesn't do" section unless noted:

1. "LLMs hallucinate entities and relationships." 1.5–1.9% false edges in auto-constructed graphs;
   manageable at personal scale with human review. The graph is a navigational aid, not a source of
   truth; the source documents remain authoritative.
2. "Entity deduplication is an unsolved hard problem." Partially true; the resolve pipeline achieves
   85–92% F1, and imperfect deduplication still beats none. (Also touched in the Resolve stage.)
3. "GraphRAG often underperforms vanilla RAG." True for simple factual lookups — GraphRAG-Bench
   showed 13.4% lower accuracy on simple queries — but graphs win on multi-hop reasoning and entity
   disambiguation. The answer is hybrid, not either/or.
4. "Schema drift degrades quality over time." Real risk; the induction pass re-derives the schema
   from accumulated data, but periodic human review is still necessary.
5. "The maintenance burden kills most KG projects." True for enterprise aspirations of completeness;
   not for a personal system with incremental builds and a manageable corpus. "The bar isn't
   'perfect graph' — it's 'better than grep.'"

## Visuals

- `hero.png` — AI-generated header image, purpose: establish mood. Not referenced in the article
  body; carried over from the old repository as the piece's header image.

TODO: whether the walkthrough section ships real terminal output or a diagram of the three stages.
(The idea file lists capturing CLI output as an open question but never decided the visual.)

## Open gaps

From the idea's Open Questions:

- Run kgmd on the knowledge worker framework's own `workspace/` directory as the demo corpus.
- Benchmark `kgmd build` on a 200-file corpus: runtime and API cost. Concrete numbers still missing.
- Capture actual CLI output for the walkthrough section.
- Verify the Karpathy reference (April 2026 date, 16M view count) before publishing.
- Decide whether to position this as "Built in a Day" entry #3 or a standalone Stack piece.

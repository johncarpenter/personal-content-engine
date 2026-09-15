# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

## Reader and problem

Primary audience: builders. Secondary audience: AI-curious leaders. (The draft that was written from
this idea inverted that order — it is written for AI-curious leaders first, builders second.)

The reader's problem, in the idea's own framing: "you know a person is connected to a project because
you read about it in meeting notes three months ago, but you can't find it. Your notes contain the
answer — you just can't query the relationships." Most people's knowledge lives in flat files —
notes, docs, wikis. The relationships between entities (people, projects, concepts, companies) exist
implicitly but aren't queryable. A knowledge graph turns "grep and hope" into "show me everyone
connected to Project X within two hops."

## Why now

The idea states that four things converged:

- LLM extraction quality is good enough. "Two years ago, building a KG from unstructured text
  required custom NLP pipelines, NER models, and ontology engineering. Now it's a prompt."
- A 12x cost collapse in 36 months makes it affordable.
- sqlite-vec means no infrastructure — a single SQLite file rather than a graph database.
- MCP means any AI agent can query it (78% of enterprise AI teams have at least one MCP-backed agent
  in production as of April 2026; 9,400+ MCP servers in the public registry).

The idea also identifies a "Karpathy moment": the LLM Wiki concept (April 2026, 16M+ views)
validated the same insight — "Knowledge compounds instead of scattering" — which positions this
piece as "Karpathy described the architecture; here's the implementation."

## Provisional thesis

Provisional. From the idea's Thesis Statement:

> Your markdown files already contain a knowledge graph — entities, relationships, context scattered
> across hundreds of documents. LLMs can now extract that graph automatically, and with local tools
> (SQLite, embeddings, MCP), you can query it without any cloud infrastructure or graph database. I
> built a CLI that does this in three commands.

## Original contribution

From "The User's Unique Contribution":

- **Built the tool.** kgmd is a working, published, pip-installable CLI. Not theoretical —
  `pip install kgmd && kgmd init && kgmd build`.
- **The three-stage architecture is novel in combination.** Extract (LLM via litellm,
  model-agnostic) → Resolve (local embeddings via fastembed + LLM verification) → Induce (schema
  discovery from data). No existing tool combines all three with a local-only SQLite backend.
- **Knowledge worker framework context.** kgmd emerged from building a personal automation framework
  where markdown is the universal data format; the knowledge graph is the missing query layer on top
  of a markdown-everything architecture.
- **Practitioner perspective on the Karpathy moment** — the practical complement to the viral
  concept.

The competitive gap, stated in the idea: "LLM extraction + local-only SQLite storage + entity
resolution + schema induction + MCP interface. No existing tool combines all five for
personal/professional markdown." Compared against Microsoft GraphRAG, Neo4j LLM Graph Builder,
Graphiti (Zep), obra/knowledge-graph, Karpathy's LLM Wiki, CocoIndex, and Knowledge Graph Kit.

## Scope

Two parts, per the idea's Angle:

1. **The concept** — what a knowledge graph is and why it matters; why this is possible now; the
   three stages (Extract, Resolve, Induce), each with a concrete example from a real markdown corpus.
2. **The implementation** — kgmd as the worked example, its architecture (chunking → LLM extraction →
   local embedding for entity resolution → LLM verification → schema induction), the single-SQLite-file
   storage model, the MCP server, and practical use cases (personal knowledge management, research
   synthesis, organizational memory, connecting meeting notes to project docs to people).

A section of honest limitations is part of the scope: hallucination rates, imperfect entity
resolution, "a navigational aid, not a source of truth," "better than grep, not better than a domain
expert's memory."

Length: ~2,500 words, long-form.

## Exclusions

TODO: what it deliberately does not cover. (The idea file states no exclusions.)

## Reader takeaway

Try it on your own notes. The idea's close is a call to action to the repo: `pip install kgmd`.

## Research effort and dependencies

Estimated effort: medium. Research depth: detailed. Estimated word count: 2,500.

Dependencies recorded in the idea's Open Questions:

- Run kgmd on the knowledge worker framework's own `workspace/` directory as the demo corpus.
- Benchmark `kgmd build` on a 200-file corpus — runtime and API cost. Concrete numbers needed.
- Capture actual CLI output / screenshots for the walkthrough.
- Verify the Karpathy reference (April 2026 date, 16M view count) before publishing.
- Decide whether to position this as "Built in a Day" series entry #3 or a standalone Stack piece.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-05-08-knowledge-graphs-markdown.md`,
`drafts/draft-2026-05-10-knowledge-graphs-markdown.md`. This brief documents the commission after the
fact and was never put through Gate 1.

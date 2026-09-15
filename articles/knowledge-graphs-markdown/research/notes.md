# Research plan and notes

Reconstructed from the idea file's Research Brief, Key Arguments, Supporting Evidence,
Counterarguments and Open Questions. Kept in the author's terms.

## Questions that must be answered

From the idea's Open Questions:

- Run kgmd on the knowledge worker framework's own `workspace/` directory as the demo corpus — would
  make the example deeply personal and meta.
- Benchmark: how long does `kgmd build` take on a 200-file corpus? What does it cost in API calls?
  Concrete numbers are needed for the article.
- Capture actual CLI output / screenshots for the walkthrough section.
- Verify the Karpathy reference (April 2026 date and 16M view count) before publishing.
- Decide whether to position this as "Built in a Day" series entry #3 or a standalone Stack piece.

## Assumptions to test

- LLM extraction quality is "good enough" for personal-scale corpora — but OntoMetric found
  unconstrained extraction reaches only 3–10% semantic accuracy vs 65–90% with ontology-guided
  methods, so the assumption holds only when extraction is schema-constrained (`source-011`).
- Entity resolution reaches 85–92% F1 with embedding similarity plus LLM verification (stated in the
  idea's Key Arguments with no source attached — see Remaining gaps).
- False edge rates of 1.5–1.9% in auto-constructed graphs are manageable at personal scale.
- The induced schema stays stable enough that periodic human review is sufficient (`source-011`,
  schema drift).
- The numbers quoted in the draft ("six entity types and fourteen relationship types" after
  processing the author's workspace) match actual tool output.

## Evidence needed for the central claims

- *Knowledge graphs make implicit relationships explicit and queryable* → Karpathy's LLM Wiki as
  independent validation of the insight (`source-001`); Obsidian's graph view as the
  explicit-links-only counterexample.
- *LLMs solved the extraction problem* → the LLM-empowered KG construction survey (`source-002`) and
  the peer-reviewed Nature work (`source-003`), with OntoMetric as the honest caveat
  (`source-011`).
- *You don't need a graph database* → sqlite-vec stability (`source-009`), obra/knowledge-graph as a
  working local stack (`source-007`), Microsoft GraphRAG's cost and infrastructure as the contrast
  (`source-004`).
- *Entity resolution is the hard part* → deduplication F1 benchmarks; GDELT's finding that LLM
  output is inconsistent across identical prompts (`source-012`).
- *Schema induction discovers its own structure* → documented schema drift in auto-constructed
  graphs.
- *MCP makes the graph instantly accessible to agents* → MCP adoption statistics (`source-010`);
  Knowledge Graph Kit (`source-015`) and obra/knowledge-graph (`source-007`) both shipping as MCP
  servers.
- *Local-only, personal scale is a real alternative* → first-hand: the author built and published
  kgmd (https://github.com/johncarpenter/kgmd) and the Claude Code plugin
  (https://github.com/johncarpenter/kgmd-plugin).

## Candidate sources

All confirmed entries from the idea's Source Bibliography are promoted into `sources.yaml`
(`source-001` … `source-016`). Additional first-hand material: the kgmd CLI and its plugin, and the
author's own workspace corpus as the demo.

## Disconfirming evidence

The counterarguments the idea commits to addressing — each is evidence against the thesis if it does
not hold:

- LLMs hallucinate entities and relationships (1.5–1.9% false edges).
- Entity deduplication is an unsolved hard problem; some merges will be wrong or missed.
- GraphRAG often underperforms vanilla RAG — GraphRAG-Bench (ICLR 2026) showed 13.4% lower accuracy
  on simple queries (`source-005`). Graphs win on multi-hop and entity disambiguation
  (`source-016`); the answer is hybrid, not either/or.
- Schema drift degrades quality over time; the induction pass mitigates but does not eliminate it.
- The maintenance burden kills most KG projects — true for enterprise completeness aspirations, not
  for an incremental personal corpus.
- Unconstrained LLM extraction scores far worse than ontology-guided extraction (`source-011`).

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed. (The old
material records `estimated_effort: medium` and `research_depth: detailed` but never states a limit.)

## Notes

Built from these files in the knowledge-worker-framework repository:

- `backlog/idea-2026-05-08-knowledge-graphs-markdown.md` — signal summary, angle, key arguments,
  supporting evidence, competitive landscape, counterarguments, suggested structure, open questions,
  source bibliography.
- `drafts/draft-2026-05-10-knowledge-graphs-markdown.md` — the draft body, its subtitle, and the
  self-assessment list of factual claims still needing primary sources.
- `images/img-2026-05-10-knowledge-graphs-markdown-substack-header.png` — header image, copied to
  `assets/hero.png`.

Deliberately left behind in the old repository (not migrated, channel derivatives):

- `drafts/linkedin-repurpose-2026-05-10-knowledge-graphs-markdown.md`
- `drafts/draft-2026-05-10-knowledge-graphs-markdown-substack.html`

Note on drift between the idea and the draft: the idea targets builders first and pitches the CLI
(`pip install kgmd`); the draft targets AI-curious leaders first and pitches the Claude Code plugin,
with the CLI as the secondary path. The draft also drops the Karpathy section and compresses "why
now" to a single paragraph.

## Remaining gaps

Carried from the draft's own "Factual claims to verify" list — each currently rests on the research
brief rather than a primary source:

- "1.5–2% false edge rate" — needs a primary source.
- "85–92% accuracy for entity resolution" — needs a primary source.
- "12x price reduction" — attributed to `source-013`; verify the figure in that source.
- The Nature 2026 publication claim — verify the specific paper exists (`source-003`).
- "six entity types and fourteen relationship types" — verify it matches actual tool output.
- The draft's install command and slash commands (`claude plugin install …`, `/build-graph`,
  `/search`, `/explore`) — verify against the current plugin.
- The Acme Corp / Sarah / Project Phoenix scenario and the "Brian Anderson" extract example are
  invented illustrations; the draft flags confirming they do not collide with real entities.
- The "Connection Intelligence" section still uses hypothetical connections; a real discovery from
  the author's own corpus would replace it.

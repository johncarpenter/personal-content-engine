# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's open questions:

- Which specific financial models can be referenced? Concrete before/after examples are needed; a
  sanitized DCF or LBO was the suggestion.
- Has the structured hands-on session happened — build a 3-statement model, run scenarios, trace
  errors, capture screenshots?
- Who is the primary reader: a bank analyst, a PE associate, a corporate FP&A analyst, or a startup
  CFO? The idea leans PE/IB associate.
- Are the 14+ data connectors (FactSet, S&P Capital IQ, PitchBook, Morningstar) in scope, or scope
  creep for a first piece?
- Does this belong in the "Built in a Day" series? The idea answers "probably standalone, not
  series."

## Assumptions to test

- That Claude for Excel is the only tool working inside the live workbook with formula-level
  awareness — the claim the "this isn't ChatGPT" section rests on.
- That the institutional adoption signal is production use rather than pilots.
- Claims the draft itself flags for verification: Walleye Capital 400-person / 100% adoption; the
  Vals AI 64.37% figure being current; Claude for Excel pricing (included with Pro at $20/mo); the
  Ctrl+Option+C shortcut; the May 5, 2026 announcement date; whether the Copilot for Finance
  characterization is still accurate `[src:source-010]`.

## Evidence needed for the central claims

- Claude for Excel is different in kind from file-upload tools → product behaviour: formula reading,
  cell references across tabs, cell-level citations, dependency-preserving edits, cross-app context
  `[src:source-012]`; plus the competitor characterizations `[src:source-010]`.
- Adoption is institutional, not experimental → named endorsements and deployments
  `[src:source-001]`, `[src:source-011]`, and the vendor case studies `[src:source-007]`,
  `[src:source-008]`.
- The accuracy picture is honest and improving → benchmark scores `[src:source-002]`,
  `[src:source-003]`, `[src:source-004]`.
- The adoption ladder is the practical path → the finance agent templates map to Levels 3-4
  `[src:source-001]`; Levels 1-2 need only the Excel add-in.
- It will break in specific, nameable ways → hallucination documented across tested models
  `[src:source-003]`; non-determinism as a fundamental LLM property; circular-reference handling; no
  definitive SEC or FINRA guidance on LLM-generated analysis in client-facing materials; absent
  audit trail. Scale-of-change context: `[src:source-006]`.

## Candidate sources

All confirmed entries are promoted into `sources.yaml` (source-001 … source-012). Additional items
named in the old material but not separately catalogued:

- Google Gemini — native Sheets integration, tightly coupled to the Google ecosystem, "less powerful
  for complex models."
- Julius AI — standalone web app, accessible to non-coders but outside the spreadsheet workflow, no
  formula awareness.
- The author's own first-hand testing is the piece's primary evidence and has no entry: the idea file
  still lists the structured hands-on session as an open question, so its extent is unclear.

## Disconfirming evidence

The counterarguments the idea set out to answer, each of which cuts against the thesis if it holds:

- The error rates argue LLMs cannot be trusted with financial calculations — the premise is accepted;
  the best model still fails roughly 1 in 3 complex financial tasks `[src:source-002]`.
- The piece could read as a Claude ad. The stated defence is genuine balance: where ChatGPT + Code
  Interpreter is better (visualization, Python analysis), where Copilot for Finance is better (ERP,
  accounting), and Claude for Excel's own weaknesses — newer product, fewer third-party
  integrations, limited independent reviews.
- Compliance teams may simply refuse. Institutional adopters are using Claude for internal analysis
  with governance guardrails, not unreviewed client-facing deliverables.
- Readers who tried ChatGPT for financial work and found it terrible may generalize the experience to
  the whole category.
- "Excel is dying — this should be about Python/SQL." Counter: Excel remains dominant in investment
  banking, private equity, asset management and corporate finance.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed. The old
material records only `estimated_effort: medium` and `research_depth: detailed`.

## Notes

Built from the author's pre-existing material in the knowledge-worker-framework repository:

- `workspace/content/backlog/idea-2026-05-06-llm-financial-modeling-analysts.md` — signal summary,
  angle, key points, research brief (thesis, arguments, supporting evidence, unique contribution,
  competitive landscape, counterarguments, suggested structure, open questions, source
  bibliography).
- `workspace/content/drafts/draft-2026-05-06-llm-financial-modeling-analysts.md` — the draft body,
  its reference list, and a draft self-assessment listing factual claims to verify.

Deliberately left behind in the old repository:

- The idea file's scoring block (composite 8.9, rank 1, adjusted 10.0) and the draft's
  self-assessment scores (confidence 7/10, voice match 8/10, hook strength 8/10) — production
  scoring, not editorial material.
- The repurposing plan (LinkedIn posts, LinkedIn carousel, Medium syndication, Twitter/X thread,
  syndication partner) and the SEO keyword list.
- The alternative title options, estimated word count and read time.
- Channel, calendar and status fields (`suggested_publish_date: 2026-05-13`, `status`,
  `post_type`, `topic_cluster`).

No images exist for this piece; `assets/` stays empty. The draft's author note asks for screenshots
of the Claude for Excel interface, which were never produced.

## Remaining gaps

- The author's specific examples. The draft's "What I Actually Tried" section carries an inline
  author note saying its examples are placeholders to be replaced with the author's own model, the
  exact error Claude made, and before/after material. Decision: resolve before drafting further.
- Screenshots of the tool in use. Decision: resolve or cut.
- Level 4 is named but not demonstrated — the Anthropic templates (pitch builder, earnings reviewer)
  are listed, not described step by step. Decision: resolve or disclose.
- Data connector ecosystem — untested. Decision: cut as scope creep or resolve with testing.
- Currency of every figure listed under *Assumptions to test*. Decision: resolve; several are
  time-sensitive and the draft dates from 2026-05-06.

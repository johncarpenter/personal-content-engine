# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's Open Questions (unchecked items as of the old repo):

- **Repo roles.** Confirm `adaptive-simple-text-classifier` as the lens-one/lens-three bridge example
  and `trajectory-memory` as the orchestration/memory layer — "or keep them as 'see also' links to
  avoid scope creep." (Bears on the sibling pieces, not this one.)
- **Naming the pattern.** "Pick one sticky term before drafting" — candidates recorded: "The
  Understanding Layer," "Insight-worthy vs Dashboard-worthy," "data → processing → understanding."
  The draft settled on "understanding layer."
- **Scope discipline.** "At 4–6k words this risks sprawl." Handled by splitting into three pieces.
- **Other analyses.** Beer vs college-football scores as the lagged-correlation /
  spurious-vs-real-signal honesty beat; charts available in the old workspace.

Resolved before drafting (recorded 2026-05-27): anonymization treatment for the platform and the
client example; the beer-vs-0.0 analysis as the worked example; the opening anchored on it.

## Assumptions to test

- That the argument holds as over-application rather than obsolescence: "'BI is dying' is a crowded,
  half-wrong take… The strongest practitioner position is **not** to join the death-of-BI chorus."
- That the composition of lenses — not any single lens — is the contribution: "Each individual lens
  is well-covered in 2026 discourse… What's *not* written is the honest practitioner account of
  running all three in parallel."

## Evidence needed for the central claims

- Dashboards are over-applied, and the misfit shows up as adoption failure → adoption figures and
  the practitioner quote: `[src:source-006]`, `[src:source-002]`, `[src:source-003]`.
- The concession that dashboards keep a narrow band they are good at → `[src:source-001]`,
  `[src:source-004]`, `[src:source-005]`.
- A question no dashboard could answer, with the intuitive read contradicted → the first-hand
  engagement, `[src:source-008]`; category context for the opening, `[src:source-007]`.

## Candidate sources

Promoted into `sources.yaml`: the six web items above plus the first-hand engagement and the
non-alcoholic-beer category PDF.

Left in the old idea file and not promoted here, because this piece does not make the claims they
support (they belong to the sibling articles): ssp.sh "BI is not dead 2026"; Data Upward agentic
analytics; Observable "Why self-serve analytics failed" (45% failure rate); the unstructured/dark
data set (Analytics Insight, Market Research Future); STL and time-series items (business-science
anomalize, GeeksforGeeks, arXiv 2408.04867, MachineLearningMastery); GraphRAG/MCP items (Hyperight,
OneReach, AetherLink); text-to-SQL items (dbt, Promethium, aimultiple); role-shift items (TechnoEdge,
InfoWorld). The full annotated bibliography stays in the old repo's idea file.

## Disconfirming evidence

The counterarguments recorded in the idea file:

- "Dashboards aren't dying — Forrester says so." Conceded up front rather than rebutted.
- "This just moves the work, not removes it — and adds hallucination risk." True; owned by the
  sibling pieces.
- "You still need the warehouse and the semantic layer." Conceded: the understanding layer "depends
  on them *more* than dashboards did."
- "Three stores is operational complexity most teams can't run." Honest yes; the seams belong to the
  composition section of the sibling piece.
- "LLMs are getting good at time series / SQL — this caution will age badly." Partly; framed as
  architecture, not a bet on model weakness.
- "This is just RAG / agentic analytics with extra steps." Answered by naming the composition.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Sources this research was built from, in the knowledge-worker-framework repository:

- `backlog/idea-2026-05-27-dashboards-answer-known-questions.md` — the research brief, arguments,
  supporting evidence, worked example, competitive landscape, counterarguments, open questions, and
  the 23-item source bibliography. The idea file is shared by three articles.
- `drafts/draft-2026-05-29-dashboards-answer-known-questions.md` — the canonical body migrated into
  `article.md` (status `draft`, never published).

History deliberately left behind in the old repository (not copied here):

- `drafts/draft-2026-05-27-dashboards-answer-known-questions.md` — an earlier ~5,800-word draft,
  marked `superseded`. It was split on 2026-05-29 into three articles: this one,
  `articles/dont-put-llm-in-analyst-seat/`, and `articles/three-lenses-and-translator/`. This
  repository keeps one canonical `article.md` per article; the old repo keeps the history.
- `drafts/slides-2026-05-27-dashboards-answer-known-questions.md` — Marp talk deck; references a
  `charts/` folder that does not exist in the old repo.
- `drafts/draft-2026-05-29-dashboards-answer-known-questions-substack.html` — generated channel
  output.
- `images/img-2026-05-29-dashboards-answer-known-questions-linkedin-post.png` — channel-specific
  image.
- `inbox/Non-Alcoholic-Beer-is-on-a-Bender.pdf` — third-party PDF, referenced as `source-007` by
  locator instead of being copied.

## Remaining gaps

Factual claims the draft's own review lists for verification before publication:

- Gartner self-service BI adoption below 20% — no publication or URL recorded (`source-006`).
  Decision: resolve (find the Gartner source) or attribute more loosely.
- The $400M retailer / $2.1M / 11% figures — the old draft note suggests softening to "one retailer
  I read about," which the prose already does (`source-002`).
- All beer-example specifics — anonymized and rounded by the treatment decision (`source-008`);
  the opening category figures still need their publisher confirmed (`source-007`).

Also unresolved in the draft: the forward references in "What's coming next" use working titles for
the two sibling pieces — "Update once the other pieces are settled."

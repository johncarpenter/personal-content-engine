# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea's "Open Questions":

- **Anonymization** — does the generalized example strip all client-specific details (product names,
  industry context, data schemas)? The process document behind it is from a confidential project.
- **Repo** — should this ship with an open-source reference implementation (oracle runner script,
  worktree setup, ratchet automation)? "Would strengthen the piece significantly."
- **Timing** — the autoresearch wave is active in March 2026; publishing within 1–2 weeks captures
  the amplification.
- **Karpathy credit** — frame as "inspired by," not "derived from"; the naming and the application
  to software development are the original contribution.

## Assumptions to test

- "Nobody has connected these existing practices to autoresearch's loop or named the three-part
  pattern. The vocabulary is missing — and vocabulary shapes practice."
- "'Surface Oracle Ratchet' returns zero Google results" — the naming opportunity depends on this
  staying true at publication.
- "S/O/R works best for the 60-70% of development work that CAN be evaluated automatically" — the
  split is asserted, not measured.

## Evidence needed for the central claims

- **Autoresearch is a general optimization loop, not an ML tool** → the tool itself and its
  mechanics `[src:source-001]`, plus independent generalizations `[src:source-009]`,
  `[src:source-004]`, and Tobi Lutke's Shopify adaptation.
- **The three primitives map cleanly to software development** → worktree-isolated agent practice
  `[src:source-007]`, `[src:source-008]`, and the author's own layered implementation.
- **This is TDD plus two missing constraints** → `[src:source-005]`, `[src:source-006]`,
  `[src:source-010]`.
- **Eval is the new bottleneck** → `[src:source-003]` and Karpathy's own ~700-experiments /
  ~20-improvements ratio `[src:source-001]`.
- **S/O/R composes with Trajectory at the meta-level** → the author's published Trajectory piece and
  `[src:source-013]`.

Claims the draft's own self-assessment listed for verification before publication: "8.6 million
views on the announcement"; "630 lines of Python" (verify against current repo); "Tobi Lutke... 37
experiments" (needs author confirmation of source); sorkit MCP tool names; "700 experiments, 20 real
improvements".

## Candidate sources

Cited in the old research brief but never promoted into `sources.yaml` — no URL was recorded for
them:

- Tobi Lutke (Shopify) adapting autoresearch: 0.8B model outperformed a 1.6B baseline after 37
  overnight experiments (19% improvement).
- Jakub Pachocki's projected "Automated AI Research Intern" by September 2026.
- Claude Code's built-in `--worktree` flag (each agent gets its own branch, index, and HEAD).
- The author's own process document showing layered S/O/R across search, API, and integration
  layers — from a confidential client project, so it stays outside this repository.
- The author's published Trajectory piece (UCB1 bandit selection across strategy profiles based on
  scored sessions).

## Disconfirming evidence

The counterarguments the idea committed to addressing:

- "This is just TDD. What's new?"
- "Not everything has a clean oracle." (UI work, design decisions, architectural choices)
- "Autoresearch works because ML has clean metrics. Software doesn't."
- "This is too rigid for creative/exploratory development."

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Migrated on 2026-09-15 from the author's pre-existing material in the knowledge-worker-framework
repository:

- `backlog/idea-2026-03-13-surface-oracle-ratchet-dev.md` — signal summary, angle, research brief,
  counterarguments, suggested structure, source bibliography.
- `drafts/draft-2026-03-25-surface-oracle-ratchet.md` — the published body plus the draft's
  self-assessment (verification list carried above; scoring, title options, and repurposing notes
  deliberately not migrated).
- `published/2026-03-26-substack-surface-oracle-ratchet.md` — publication record. Published on
  Substack 2026-03-26; syndicated to Medium 2026-03-30
  (https://medium.com/@johncarpenter/surface-oracle-ratchet-the-pattern-inside-karpathys-autoresearch-applied-to-code-4672a40e4c4e).
  This repository has no syndication field, so the Medium copy is recorded here only.
- `images/img-2026-03-25-surface-oracle-ratchet-substack-header.png` — copied to
  `assets/hero.png`.

Old files deliberately left behind:

- `drafts/sor-demo-program.md` — an S/O/R agent program targeting the
  `adaptive-simple-text-classifier` repo (surface/frozen file lists, a composite oracle of
  `0.6 * accuracy + 0.4 * llm_reduction`, a 20-attempt budget, and a `results.tsv` log). None of its
  numbers, file names, or repository appear in the article; the published piece demonstrates the
  pattern with the sorkit sentiment-analyzer example instead. Judged related first-hand material,
  not evidence the article relies on, so it is referenced here rather than migrated.
- `drafts/linkedin-repurpose-2026-03-25-surface-oracle-ratchet.md` and
  `drafts/draft-2026-03-25-surface-oracle-ratchet-substack.html` — channel derivatives, out of scope
  for this repository.

## Remaining gaps

- The anonymization and open-source-repo questions have no recorded answer in the old material; the
  published article does link a public toolkit (sorkit), which may have settled the repo question in
  practice.
- The draft's verification list above was never marked resolved: the 8.6M views figure, the 630-line
  count, and the Tobi Lutke 37-experiment result rest on the research brief rather than on a checked
  primary source.
- No source entry exists for the Tobi Lutke result, the Pachocki projection, or the author's
  confidential process document — the article states the first of these in the body.

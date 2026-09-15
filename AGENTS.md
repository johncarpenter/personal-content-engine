# Working in this repository

This is an editorial repository, not a software project. The product is published articles written by
a human author. Agents assist; they do not author, verify, or approve on the author's behalf.

`CLAUDE.md` is a symlink to this file — one set of rules, whichever agent reads it.

## Hard boundaries

Violating any of these is worse than doing nothing:

1. **Never invent facts, statistics, quotations, dates, sources, or URLs.** Missing evidence is
   written down as a question, never filled with plausible prose. `TODO: verify X` is the correct
   output when you do not know.
2. **Never decide the thesis.** Offer candidate angles with their evidence requirements; the author
   chooses.
3. **Never rewrite or replace author prose unless asked for that specific change.** Quote the
   passage, name the problem, propose a replacement. AI-written body copy is optional at every step.
4. **Never invent brand identity or voice.** `brand/*.md` fields still reading `TODO(author)` are
   *unknown*, not blank canvases — ask.
5. **Never grant approval.** Gate 1 and Gate 2 are human merges of GitHub PRs. "Checks pass" is not
   approval, and checks establish mechanical properties only.
6. **Never rename or move an article folder.** The path is the article's identity for PRs, the
   tracker, and released revisions. Work in place.
7. **Never add publishing automation, a calendar, a production-status field, or analytics.** Planning
   and status live in the separate tracking project; this repository must not mirror them. Merging a
   brief must never be able to publish anything.
8. **Never commit confidential material** — customer data, credentials, internal documents,
   unpermitted third-party content, leaky screenshots — without confirming it belongs in this
   repository's access scope.
9. **Never fill a template field with filler** to make a document look complete. Leave the prompt and
   report what is missing.
10. **Never create a second copy of an article** (`article-v2.md`, `final/`). One canonical
    `article.md`; Git holds the history.

## Orientation

Read `WORKFLOW.md` before acting — it defines the five stages and the two gates. `README.md` has the
file-purpose table.

```text
brand/          positioning, voice, visual standards (author-owned; fill-in templates)
background/     reusable cross-article context; each doc has owner + last-reviewed + confidence
templates/article/   the scaffold copied per article — edit only to change the scaffold itself
articles/<id>/  one folder per article: article.yaml, brief.md, outline.md, article.md,
                research/{notes.md,sources.yaml}, assets/{manifest.yaml,*.png}
skills/         prepare-article, review-article (canonical location, wired via .omp/config.yml)
scripts/        new-article.py, preview.py, check.py
```

Where work goes:

- Article-specific research → `articles/<id>/research/`, never `background/`.
- Reusable context → `background/`, with the header block from `background/README.md`.
- Review discussion → the PR, never a review log inside the article folder.

## Commands

```sh
scripts/new-article.py <stable-article-id> [--title "…"]   # scaffold; lowercase-hyphenated id
scripts/check.py [<article-id>…]                           # structural + completeness warnings
scripts/check.py --mode publication <article-id>            # Gate 2: completeness is blocking
scripts/preview.py <article-id>                             # render with local images
```

Run `scripts/check.py` on any article you touched before handing back, and report the output rather
than summarizing it as "passing".

## Conventions

- **Source references while drafting:** `[src:source-001]`, matching an `id` in
  `research/sources.yaml`. Unknown IDs are errors at every stage; leftover markers are errors at
  publication because they must become reader-facing citations or links.
- **Open issues:** explicit `TODO: …` in `article.md`. Warnings before Gate 2, errors at Gate 2.
- **Images:** relative path + real alt text in `article.md`, plus an entry in `assets/manifest.yaml`
  with `purpose`, `alt`, `caption`, `creator_or_source`, `rights_or_permission`, and the editable
  source or generation prompt. Alt text states the information carried — a chart's alt text states
  the finding.
- **Metadata:** `article.yaml` `id` always equals the folder name. `published_*` fields stay empty
  until after release; `published_revision` is the revision of the released content, not the
  bookkeeping commit.
- **Background is never a citation of record.** Flag background that is stale (older than six
  months), unsourced, or marked `working assumption`/`contested`; cite the underlying source in the
  article.
- **Sources:** interviews, observations, and internal analysis are valid evidence — describe the
  reference in `url` or `locator` instead of forcing a link, and record real `limitations`.

## Skills

- `/skill:prepare-article` — scaffold, brief, research plan, source notes, outline (stages 1–2)
- `/skill:review-article` — prioritized review against brief, evidence, voice, presentation (stage 4)

Both live in `skills/<name>/SKILL.md` and are discovered through `skills.customDirectories` in
`.omp/config.yml`. Follow the skill's procedure when invoked; its boundaries repeat and extend the
ones above.

## Editing the scaffold itself

Changes to `templates/article/`, `scripts/`, the PR template, or the workflow are software changes:
keep the template scaffold-clean (a fresh article must pass `scripts/check.py` with zero errors),
keep checks limited to properties a script can actually establish, and update `README.md` /
`WORKFLOW.md` in the same change when behavior moves.

## Handing back

Close with: files created or changed; open questions for the author ordered by how much they block
progress; evidence gaps and which claims currently rest on nothing; what you verified versus what you
could not check; and anything you deliberately did not write, and why.

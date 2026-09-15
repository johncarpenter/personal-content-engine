# Content creation repository

Git-backed workspace for producing long-form research and thought leadership articles with imagery.
Prose is written in Markdown by the author; AI assistance is optional at every step.

Planning lives elsewhere. This repository owns article work products (brief, research, outline, copy,
imagery) and the brand/background guidance behind them. The **tracking project** owns ideas,
calendar, assignments, production status, performance, and refresh reminders.

## Quickstart

```sh
# 1. create an article folder from the template (stable, descriptive ID)
scripts/new-article.py why-batch-inference-wins

# 2. write articles/why-batch-inference-wins/brief.md, open the Brief PR

# 3. research -> outline -> article.md -> assets/, then open the Publication PR

# 4. preview rendered Markdown with local images
scripts/preview.py why-batch-inference-wins

# 5. run the repository checks
scripts/check.py                                   # scaffold/brief-safe checks
scripts/check.py --mode publication why-batch-inference-wins
```

`WORKFLOW.md` is the authoritative process description, including the two approval gates.

## Repository structure

```text
README.md                     this file
WORKFLOW.md                   editorial workflow and approval gates
brand/                        positioning, voice, visual standards (author-owned, fill in)
background/                   reusable context shared across articles
templates/article/            the article scaffold copied per article
articles/<stable-article-id>/ one folder per article, same shape as the template
skills/                       prepare-article and review-article agent skills
scripts/                      new-article, preview, check
.github/                      PR template and checks workflow
.omp/config.yml               wires skills/ into agent skill discovery
```

### Files in an article folder

| Path | Purpose | Required |
|---|---|---|
| `article.yaml` | Canonical metadata: ID, title, author, tracker link, publication record | Yes |
| `brief.md` | Reader, problem, provisional thesis, contribution, scope, takeaway | Yes (Gate 1) |
| `outline.md` | Argument, section purposes, key evidence, planned visuals | Optional, lightweight |
| `article.md` | The canonical article body. One file; Git holds the history | Yes (Gate 2) |
| `research/notes.md` | Research plan, questions, assumptions, disconfirming evidence, gaps | Optional, lightweight |
| `research/sources.yaml` | Sources, what each one supports, locator, limitations | Yes when the article makes sourced claims |
| `assets/` | Final images plus `manifest.yaml` (purpose, alt, caption, provenance, rights) | Yes when the article ships imagery |

Article IDs are stable. Do not rename or move the folder when the title or the workflow stage
changes.

## Evidence traceability

While drafting, reference sources inline with their stable ID: `[src:source-001]`. `scripts/check.py`
verifies every referenced ID exists in `research/sources.yaml`, so claims can be traced back to the
research at any stage. Before publication approval these working references must be converted to
reader-facing citations or links; publication-mode checks fail while any `[src:...]` marker remains.

## Checks

`scripts/check.py` establishes only mechanical properties. A green run does not mean an argument is
true, persuasive, or approved.

Errors at every stage (so broken structure never merges):

- YAML files parse (article, sources, manifest, and the template itself)
- `article.yaml` exists and its `id` matches the folder name
- every `[src:...]` reference resolves to an entry in `research/sources.yaml`
- source and asset entries have IDs, assets declare a `file`, no duplicate source IDs

Completeness findings — warnings in the default mode, errors with `--mode publication`, so
incomplete scaffolds and brief PRs stay valid:

- `article.md` and `brief.md` exist, have content, and contain no unresolved placeholders (`TODO`,
  `FIXME`, `TK`, `XXX`, `???`)
- no leftover `[src:...]` working references
- every local image referenced in `article.md` exists on disk and is listed in
  `assets/manifest.yaml` with `purpose`, `alt`, and `creator_or_source`; alt text is present
- declared manifest files exist on disk
- source entries have a `title`, a non-empty `supports` list, and a `url` or `locator`

Requires Python 3 and PyYAML (`pip install pyyaml`). CI runs the same script; see
`.github/workflows/checks.yml`.

## Preview with local images

`scripts/preview.py <article-id>` renders `article.md` to `articles/<id>/.preview.html` (gitignored)
and opens it. Because the HTML is written into the article folder, relative image paths such as
`assets/figure-01.png` resolve exactly as they do in the Markdown source. Rendering uses
`npx marked` (Node required; first run downloads the package).

Offline alternative: any editor Markdown preview rooted in the article folder — VS Code's
*Markdown: Open Preview* resolves the same relative asset paths.

## Skills

Two skills assist the author without taking over authorship:

- `prepare-article` — scaffold, brief, research questions, source notes, outline
- `review-article` — evaluate against brief, evidence, voice, and presentation checklists

The canonical copies live in `skills/<name>/SKILL.md`. `.omp/config.yml` registers `skills/` as a
project skill directory, so in this workspace invoke them with `/skill:prepare-article` and
`/skill:review-article`, or just ask for them by name. Agents that only scan their own conventional
location (for example Claude Code's `.claude/skills/`) need a symlink or copy to that path; keep
`skills/` the single source of truth.

## Pull requests

Two PRs per article by default: a **Brief PR** (merge accepts the commission) and a **Publication
PR** (merge records editorial acceptance). `.github/PULL_REQUEST_TEMPLATE.md` carries both
checklists behind an approval-type selector. Merging a brief never publishes anything; there is no
publishing automation in this repository.

Label the Publication PR `publication` so CI runs publication-mode checks; unlabeled PRs run the
lenient checks.

For a solo author, no second GitHub approval is required: record completion of the editorial
checklist before merging. A self-check is not an independent review — if a reviewer is available,
use them for unfamiliar or consequential claims.

## Release

Approval and publication are separate events. Publishing is a manual handoff until a destination and
release policy are chosen. After publication, verify the live page, then record `published_url`,
`published_at`, and `published_revision` (the Git revision of the released content, not the later
bookkeeping commit) in `article.yaml`, and update the tracker.

## Decisions still needed

Not blocking local use of this scaffold; some block creating or configuring the hosted repository.

- GitHub repository name, owner, visibility
- Brand materials and voice examples to drop into `brand/`
- Tracker location and article-link convention
- Publishing destination and its formatting requirements
- Whether release happens on final approval or as a separate scheduled/manual action
- Whether an independent reviewer will sometimes participate

# Content creation repository

Git-backed workspace for producing long-form research and thought leadership articles with imagery.
Prose is written in Markdown by the author; AI assistance is optional at every step.

Planning lives elsewhere. This repository owns article work products (brief, research, outline, copy,
imagery), the brand/background guidance behind them, and the durable content strategy: channel
guidance, distribution practice, and intended cadence. The **tracking project** owns ideas, the live
calendar, release dates, assignments, production status, performance, and refresh reminders.

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
AGENTS.md                     rules for AI agents working in this repository
CLAUDE.md                     symlink to AGENTS.md (Claude Code's conventional filename)
brand/                        positioning, voice, visual standards (author-owned, fill in)
background/                   reusable context shared across articles
strategy/                     content strategy, channels, distribution practice, intended cadence
templates/article/            the article scaffold copied per article
templates/distribution-asset.md  template for optional per-article channel copy
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
| `distribution/` | Optional supporting channel copy, created only when needed | No |

`distribution/` is never scaffolded empty. `scripts/new-article.py` does not create it; the folder
appears only when a channel asset is actually written. See `strategy/distribution-playbook.md`.

Article IDs are stable. Do not rename or move the folder when the title or the workflow stage
changes.

## Evidence traceability

While drafting, reference sources inline with their stable ID: `[src:source-001]`. `scripts/check.py`
verifies every referenced ID exists in `research/sources.yaml`, so claims can be traced back to the
research at any stage. Before publication approval these working references must be converted to
reader-facing citations or links; publication-mode checks fail while any `[src:...]` marker remains.

## Strategy

Durable strategy lives in `strategy/` and guides commissioning, writing, and distribution:

| Document | Purpose |
|---|---|
| `strategy/content-strategy.md` | What this publication is for: audience, topic pillars, success measures |
| `strategy/channels.md` | Which channels are in use, which are only proposed, and what each is for |
| `strategy/distribution-playbook.md` | How an article is adapted per channel and what that copy must not do |
| `strategy/cadence.md` | The intended publishing rhythm and what makes it sustainable |

Open decisions in these documents read `To decide` — a valid permanent state, not a placeholder to
clear. They are guidance, not gates: there is no strategy approval step, and brief approval (Gate 1)
and publication approval (Gate 2) remain the only two routine gates. The tracking project stays
authoritative for the live calendar and the release schedule.

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

Distribution assets are only checked when `--distribution` is passed:

```sh
scripts/check.py --mode publication --distribution <article-id>
```

Without the flag, `articles/<id>/distribution/` is not examined at all, so optional distribution work
can never block an otherwise complete article. With it, each `*.md` in that folder joins the same
completeness findings: non-empty, no unresolved placeholders, and local images that exist on disk and
are listed in `assets/manifest.yaml` with `purpose`, `alt`, and `creator_or_source`. Image paths
resolve relative to the distribution file, so reused article imagery is referenced as
`../assets/hero.png`. `--distribution` and `--mode` are independent and combine.

Documents in `strategy/` are never scanned for placeholders; `To decide` is a valid permanent state.

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

A PR has exactly one scope: **brief**, **article publication package**, or **distribution assets**.
Name the scope in the PR, and for distribution assets name the assets it covers.

Label the Publication PR `publication` so CI runs publication-mode checks. Label a PR
`distribution` so CI includes distribution assets in the completeness checks; both labels may apply
to the same PR. Unlabeled PRs run the lenient checks.

Approval rules for supporting assets:

- Gate 2 covers supporting assets only when the PR's scope explicitly lists them.
- Distribution assets may be approved later, in a follow-up PR that references the source article and
  names the assets being approved.
- An asset that is essential to the intended release must be identified explicitly and reviewed
  before that release proceeds.
- Asset approval is neither scheduling nor publication.

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

Open strategic decisions, carried from the author's own source documents and deliberately not
resolved here:

- Which audience the publication prioritises, among the personas in `brand/positioning.md`
- Whether the intended weekly cadence still stands: the author's channel strategy (updated
  2026-04-11) states weekly, but nothing has been published since 2026-04-10
  (`background/published-work.md`)
- The conflicting LinkedIn link guidance — the channel strategy (updated 2026-04-11) treats LinkedIn
  as traffic to Substack, while the growth strategy (updated 2026-03-13) says not to post links;
  both are attributed in `strategy/channels.md`
- Whether Twitter/X and the other proposed channels (Substack Notes, a LinkedIn native newsletter,
  Hacker News, podcast guesting, Dev.to, AI Tinkerers Calgary talks) are adopted or dropped
- Which of the two open-rate targets (>50% vs 40%+) and which of the two subscriber-growth targets
  (10%/month vs 5%+ month-over-month) stands; the two source documents disagree, and both pairs are
  recorded in `strategy/content-strategy.md`

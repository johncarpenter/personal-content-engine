# Editorial workflow

Lean workflow for research and thought leadership articles. Two approval gates, one stable article
folder, Git history as the record.

## Principles

1. Start with a reader problem and a reason to publish. A topic alone is not a brief.
2. Make the contribution explicit: an argument, synthesis, first-hand experience, new evidence, or a
   useful framework.
3. Separate sourced facts, interpretation, and opinion. Strong opinions are welcome; unsupported
   factual claims are not.
4. Let research change the thesis. The initial angle is not a conclusion that sources must justify.
5. Preserve the author's judgment and voice. AI assistance is optional at every step.
6. Keep stages lightweight. An outline or research plan may be a few bullets.
7. Review copy and imagery together before release.

## Roles

- **Author** — owns the article, resolves editorial feedback, is accountable for facts.
- **Approver** — accepts the brief (Gate 1) and the final package (Gate 2).
- **Optional second reviewer** — most useful for unfamiliar or consequential claims.

One person may hold both roles in a solo workflow. A self-check is not an independent review; say so
plainly in the PR rather than implying review that did not happen.

## Ownership boundaries

| Concern | Authoritative home |
|---|---|
| Ideas, priorities, themes, campaigns | Tracking project |
| Live editorial calendar, release dates, target publication dates | Tracking project |
| Assignments, production status, performance, refresh reminders | Tracking project |
| Article brief, research, outline, copy, imagery | This repository |
| Brand, voice, visual standards, shared background | This repository |
| Durable content strategy, channel guidance, distribution practice, intended cadence | This repository (`strategy/`) |
| Supporting distribution assets | This repository; approval evidence in pull requests |
| Approval evidence | GitHub pull requests |
| Published URL and released revision | `article.yaml`, linked from the tracker |

The connection between systems is the stable article ID plus `tracker_url` in `article.yaml`. Do not
add a second editable calendar or production-status field here. A future integration may derive
tracker updates from repository events; no synchronization is required now.

## 1. Commission and approve the brief

```sh
scripts/new-article.py <stable-article-id>
```

Fill `brief.md`:

- Intended reader and the problem or question they bring.
- Why it matters now, if timing is relevant.
- Proposed thesis or angle, explicitly marked provisional.
- Original contribution, and why the author is equipped to make it.
- Scope and exclusions.
- Desired reader takeaway or action; a commercial call to action is optional.
- Strategic fit: the pillar and reader it serves, per `strategy/content-strategy.md`.
- Intended publication and distribution, per `strategy/channels.md`. Supporting assets stay optional.
- Expected research effort and known dependencies.
- Tracker link.

Set `id`, `title`, `author`, and `tracker_url` in `article.yaml`.

An unresolved strategic question is surfaced at Gate 1 rather than answered inside the brief: record
it as an open question and let the approver decide. There is no separate strategy gate.

**Gate 1 — brief approval.** Open the Brief PR (approval type: brief). Merge approves purpose,
scope, and effort before substantial production begins. The brief does not need to predict the final
conclusion. Merging a brief never publishes anything.

## 2. Research and shape

Write a short research plan in `research/notes.md`: questions that must be answered, assumptions to
test, evidence needed for the central claims, candidate primary sources and first-hand
observations, evidence that would challenge the thesis, the research effort limit, and remaining
gaps.

Record each source in `research/sources.yaml` with what it supports, its locator, and its
limitations. Non-web evidence (interviews, observations, internal research) is allowed: describe the
reference instead of forcing a URL. Store concise notes and permitted material — not indiscriminate
copies of third-party content — and do not commit confidential material without confirming it
belongs in this repository's access scope.

Then write a lightweight outline: the argument, each section's purpose, the key evidence, and useful
visuals.

Research is sufficient when the main argument is supported and material uncertainty is resolved,
disclosed, or moved out of scope.

**No routine gate here.** Normal refinement of the thesis needs no approval. If research materially
changes the reader, purpose, scope, or effort, update `brief.md` and explicitly revisit Gate 1.

## 3. Draft and develop imagery

Write the article in `article.md`. It is the single canonical copy; do not fork "v2" files.

While drafting, cite sources by stable ID: `[src:source-001]`. Checks verify each ID exists in
`research/sources.yaml`, and publication-mode checks fail while any working reference remains — so
convert them to reader-facing citations or links before Gate 2.

Mark unresolved issues explicitly: `TODO: verify 40% figure`, `TODO: replace placeholder image`.
Never fill an evidence gap with plausible prose.

Plan each image around its editorial purpose — explain, demonstrate, provide evidence, or establish
mood. Put final files in `assets/` and record them in `assets/manifest.yaml`: purpose, alt text,
caption, creator or source, rights or permission, and any editable source or generation prompt that
will help a future revision.

Preview copy and imagery together:

```sh
scripts/preview.py <article-id>
```

### Supporting distribution assets (optional)

Distribution copy is per-article and optional. When an asset is actually needed, copy
`templates/distribution-asset.md` to `articles/<id>/distribution/<channel>-<asset>.md` — for example
`distribution/linkedin-launch-post.md` — and choose the set per `strategy/distribution-playbook.md`.
Reuse the article's own imagery from `assets/` by relative path (`../assets/hero.png`) instead of
duplicating files. The folder is never created empty.

Optional distribution work never blocks an otherwise complete article: the checks ignore the folder
unless `--distribution` is passed.

## 4. Edit, verify, and approve

Review in this order:

1. **Argument** — Is the thesis clear, useful, supported? Are plausible objections addressed? Is
   evidence distinguished from opinion?
2. **Structure** — Does every section advance the argument? Missing explanations? Unnecessary
   detours?
3. **Verification** — Check factual claims, quotations, numbers, dates, source interpretation, and
   links. Resolve or disclose material uncertainty.
4. **Voice** — Preserve the author's meaning while applying `brand/voice.md`.
5. **Presentation** — Review the rendered article with images, captions, links, and publishing
   metadata.
6. **Supporting assets in scope** — Review each distribution asset for accuracy, voice, context, and
   consistency with the article. Supporting copy must not overstate the article's evidence.

`/skill:review-article` produces a prioritized review; it does not rewrite the article or grant
approval.

Before requesting approval:

```sh
scripts/check.py --mode publication <article-id>
```

Add `--distribution` when the PR's scope includes distribution assets; the `distribution` PR label
makes CI do the same.

**Gate 2 — publication approval.** The Publication PR (approval type: publication, label
`publication`) approves the actual article and imagery with all blocking issues resolved. AI can
assist with review but does not replace the author's factual and editorial accountability. Passing
checks establish mechanical properties only.

A PR has exactly one scope: **brief**, **article publication package**, or **distribution assets**.
Approval rules:

- Gate 2 covers supporting assets only when the PR's scope explicitly lists them.
- Distribution assets may be approved later, in a follow-up PR that references the source article and
  names the assets being approved.
- An asset that is essential to the intended release must be identified explicitly and reviewed
  before that release proceeds.
- Asset approval is neither scheduling nor publication.

Gate 1 and Gate 2 remain the only two routine gates; strategy and distribution work adds none.

## 5. Release and hand back

Approval and publication are distinct events. Publishing is a manual handoff until a destination and
release policy are selected; no automatic publishing exists in this repository.

After publication:

1. Verify the live page renders as approved.
2. Record `published_url`, `published_at`, and `published_revision` in `article.yaml`.
   `published_revision` is the revision of the released content, not the bookkeeping commit that
   records it.
3. Update the tracking project with the URL and revision.

A follow-up distribution PR references the source article and names the assets being approved.
Approved assets are handed to the tracking project for scheduling — approval is neither scheduling
nor publication.

Planning, performance review, and refresh scheduling stay in the tracker. Future substantive
revisions open another PR against the same article folder.

## Cadence

`strategy/cadence.md` holds the intended publishing rhythm and the evidence behind it. It is a
target for commissioning decisions, not a commitment: committed dates live in the tracking project.

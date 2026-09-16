# Distribution asset

Copy to `articles/<article-id>/distribution/<channel>-<asset>.md` — for example
`articles/rise-of-personal-software/distribution/linkedin-launch-post.md`. Create the
`distribution/` folder only when an asset is actually needed; never scaffold it empty.

The folder path already carries the article id, so do not repeat it here. No status field, no
release date: Git and the pull request hold revision and approval history, and the tracking project
holds scheduling and execution state.

## Channel and format

TODO: which channel from `strategy/channels.md`, which format, and any hard constraint that shapes
the copy — length limit, slide count, aspect ratio.

## Purpose and angle

TODO: what this asset is for and the distinct angle it takes. Not a verbatim slice of the article.

## Copy

TODO: the finished, ready-to-use copy — written or approved by the author, and claiming no more than
the article's evidence supports.

## Imagery

Optional. Reuse an article image by relative path with its real alt text; a channel-only image goes
in `articles/<article-id>/assets/` and is registered in that article's `assets/manifest.yaml` with
`purpose`, `alt`, `creator_or_source`, and `rights_or_permission`.

<!-- Example, replace or delete:
![What the image tells the reader, not what it looks like](../assets/hero.png) -->

TODO: the image this asset uses, or "none". Real alt text states the information the image carries.

## Link destination

TODO: where the reader is sent — a real URL, or an explicitly marked unresolved link
(`TODO: link unresolved`). The article's own `published_url` in `article.yaml` is empty until after
release.

## Relationship to the article release

TODO: relative sequencing only — "after the article is live", "prepared before release, sent once
live". Exact dates and execution status belong to the tracker. See
`strategy/distribution-playbook.md#sequencing`.

---

`scripts/check.py --distribution <article-id>` includes distribution assets in the completeness
checks; without that flag they are not completeness-checked at all, so an optional asset can never
block an article.

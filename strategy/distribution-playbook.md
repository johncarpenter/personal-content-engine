# Distribution playbook

- Owner: To decide
- Last reviewed: To decide — created 2026-09-15
- Source material: the author's own documents from the previous content system at
  `knowledge-worker-framework/workspace/content/` — `guidelines/channel-strategy.md` (updated
  2026-04-11) and `guidelines/substack-growth-strategy.md` (updated 2026-03-13, its own review date
  2026-06-13 now passed) — plus the publication record in `background/published-work.md`. Facts
  carried from those documents are attributed inline; none of them has been confirmed since
  2026-04-10.

> Decisions still open are marked `To decide`. This document guides commissioning, writing and
> distribution; the tracking project remains authoritative for the live calendar, release dates,
> assignments, production status and actual performance.

## What this covers

How a finished article becomes a distribution package inside this repository: choosing which
channels a particular piece justifies, finding the angle for each one, preparing the copy and
imagery, reviewing them, and handing approved assets onward. Scheduling and execution are not here —
exact dates, owners and production status live in the tracking project, and nothing in this
repository sends, posts, schedules or calls an external service. Supporting assets are optional: an
article is complete without them, and a missing asset never blocks a publication package.

## 1. Choose channels for this article

Channel selection is per-article, not standing policy. Work from `strategy/channels.md`, which
records each channel's decision state, and from the piece in front of you.

**Not every article needs every channel.** A channel appearing in `strategy/channels.md` is not an
instruction to produce an asset for it, and a channel whose state there is `proposed` is not an
approved commitment — it is an idea the author has written down and not yet acted on. Producing an
asset for a `proposed` channel is a decision the author makes deliberately, for that piece.

Decide by answering, in order:

1. Who is this specific piece for? (`brand/positioning.md` holds the personas; do not re-derive
   them here.)
2. Which channels actually reach that reader, as opposed to the ones that are available?
3. What is the reader meant to do next — read the full piece, reply, try something, or simply have
   the idea? An asset with no next step is usually an asset that did not need to exist.
4. Is the effort proportionate to the piece? A long-form argument built on a strong first-hand
   story can carry a derivative post; a short explainer may not repay a carousel.

Record the channels chosen in the PR description under the **distribution assets** scope, with the
reason each one was chosen. If the answer is "the article only", say that and stop here.

## 2. Find the channel-specific angle

Each channel gets its own angle and its own asset. Reposting identical copy across channels is not
distribution; it produces weaker copy everywhere and gives a reader who follows two channels nothing
the second time.

For each chosen channel, write down before drafting: the one idea this asset carries, the audience
assumption it makes, and what the reader does next.

The author's own guidance, worth following where it fits — `channel-strategy.md` (2026-04-11) says a
LinkedIn derivative should "pull a moment or thread from the piece — something you actually
experienced or noticed" and tell it conversationally, "as if updating a colleague", adding: "Don't
extract the insight; share the experience that led to it." That is a useful default for any
experience-led channel, not only LinkedIn. It is 5 months old and unconfirmed since; whether it
still describes the author's intent is `To decide`.

Register and tone per channel are already written down in `brand/voice.md` (see its section of
guidance for the author's other channels). Follow that file; do not restate it here.

## 3. Prepare copy and imagery together

Assets live at `articles/<article-id>/distribution/<channel>-<asset>.md` — for example
`articles/rise-of-personal-software/distribution/linkedin-launch-post.md`. Create the folder and
each file from `templates/distribution-asset.md` only when an asset is actually needed. Never
retrofit an empty `distribution/` folder onto an article to make it look complete.

Imagery:

- **Shared imagery** is reused from the article's own `assets/` by relative path —
  `../assets/hero.png` — and stays registered in `articles/<article-id>/assets/manifest.yaml`. Do
  not copy the file into the distribution folder; one image, one home.
- **A channel-only image** goes into the same `assets/` folder and gets its own entry in that same
  `manifest.yaml`, with its own `purpose`, `alt` text, `creator_or_source` and
  `rights_or_permission`, exactly like an article image. Alt text states the information carried,
  not the appearance.

The asset file carries copy and its imagery references, and nothing else. Plainly:

- **No duplicated article id.** The folder path already identifies the article.
- **No status field.** Production status belongs to the tracker.
- **No release-date field.** The release date belongs to the tracker as well.

Completeness checks only look at distribution assets when you ask them to:

```sh
scripts/check.py --distribution <article-id>                      # assets included, warnings
scripts/check.py --mode publication --distribution <article-id>   # assets included, blocking
```

Without `--distribution`, distribution files are not completeness-checked at all — which is what
keeps an optional asset from ever blocking an otherwise complete article.

## 4. Review supporting assets

Review copy and imagery together, against the article, not against the channel's conventions alone:

1. **Accuracy against the article's own evidence.** Every factual claim in the asset traces to
   something the article supports from `research/sources.yaml`.
2. **No overstatement.** Supporting copy must not claim more than the article's evidence supports.
   A claim that is absent from the article does not become true by appearing in a LinkedIn post; a
   hedge in the article stays a hedge in the derivative. If a stronger claim is worth making, it
   belongs in the article, with evidence.
3. **Voice.** `brand/voice.md`, including its per-channel guidance.
4. **Links work** and point where they should — including the canonical link back to the primary
   publication where a channel is a syndication (`channel-strategy.md`, 2026-04-11: "Always add
   canonical link pointing to Substack").
5. **Stands alone.** A reader who never opens the article still gets a coherent, honest piece of
   writing; a reader who does open it finds the same argument.

`/skill:review-article` produces the prioritized review; it does not rewrite the asset and does not
grant approval.

## 5. Hand off

Approved assets are handed to the tracking and publishing process, which owns scheduling and
execution. This repository's part ends at "reviewed and approved".

Approval rules:

- **Gate 2 covers supporting assets only when the PR's scope explicitly lists them.** A publication
  PR whose scope is the article package approves the article and its imagery — not assets it does
  not name.
- **Assets may be approved later**, in a follow-up PR that references the source article and names
  the assets being approved. This is the normal path when the article is ready and the supporting
  copy is not.
- **An asset essential to the intended release must be identified and reviewed before that release
  proceeds.** "Essential" is the author's call, made explicitly and written in the PR — not
  inferred from the asset existing.
- **Asset approval is neither scheduling nor publication.** It records editorial acceptance of the
  copy. The release date and the act of posting stay outside this repository.

## Sequencing

Relative order only — no dates. Publication of the article comes first, because the derivative copy
points at it; the exception is copy that can be written earlier and sent later (see below).

The author's recorded relative gaps, from `channel-strategy.md` (2026-04-11):

| Asset | Recorded gap after the article |
|---|---|
| Derivative post (LinkedIn) | 1–3 days after the article |
| Carousel | 3–4 days after the article |
| Syndication (Medium) | 5–7 days after the article, with a canonical link back |
| Short-form post or thread | same day or the next day |

Those gaps are the author's own, 5 months old and unconfirmed since 2026-04-10. Treat them as the
recorded default, not a rule; whether they still hold is `To decide`.

A newsletter-style asset is the useful exception to "publication first": it may be fully prepared
and approved *before* the article is released, and sent once the article is live. Preparing early is
fine; what must not happen is a link going out to a page that does not exist yet.

Exact dates, day-of-week placement, owners and execution status live in the tracker. This document
fixes only what comes before what.

## Follow-up, resurfacing and reuse

**Responding to discussion.** Replies and comments are the author's, in their own voice, and are not
article work products — they are not drafted, stored or reviewed here. Where a reply commits to a
factual claim the article does not support, that is a signal the article needs a correction or a
follow-up piece, and it goes back through the normal workflow.

**Resurfacing an older piece.** An argument that is still true and still useful can be pointed at
again without being rewritten. Two constraints: check that nothing in it has gone stale (the
six-month staleness flag in `AGENTS.md` applies to the evidence underneath it too), and be honest
that it is an older piece rather than presenting it as new.

The author's "hero post" idea is relevant here — `substack-growth-strategy.md` (2026-03-13) proposes
concentrating referral traffic on 2–3 proven pieces instead of linking every new one, on the
reasoning that "concentrated traffic on proven converters beats spreading thin". It is recorded as a
plan, not as something the publication record shows was done, and its own review date has passed.

**Reusing material in a new piece.** Self-quotation and building on a previous argument are normal.
The line is contribution: if the new piece's argument is substantially the earlier piece's argument,
it is a resurfacing, not a new article. A piece that reuses material but makes its own contribution
needs its own brief and its own Gate 1, like any other article.

Open here:

- `To decide` — whether hero-post concentration is adopted at all, and if so which pieces.
- `To decide` — what triggers resurfacing an older piece (an anniversary, a news hook, a recurring
  reader question, or nothing systematic).
- `To decide` — how far reuse may go before a piece needs its own brief.
- `To decide` — how much distribution effort a piece has to justify before assets are produced
  (step 1, question 4 currently relies on the author's judgment with no stated threshold).

## Deliberately out of scope

This document does not, and must not:

- **Schedule anything.** No dates, no day-of-week placement, no posting times.
- **Hold a calendar.** There is exactly one calendar and it is in the tracking project. The author's
  recorded day-of-week and time-of-day posting table was not carried into this repository;
  `strategy/cadence.md` records what was carried and what was left behind, and why.
- **Automate publishing.** Nothing here sends, posts, schedules, or calls an external service.
- **Write to the tracker.** The link between the two systems is the stable article ID and
  `tracker_url` in `article.yaml`; updates are made by a person, in the tracker.
- **Analyse performance.** Actual open rates, impressions, referral traffic and subscriber numbers
  are results, and results live in the tracker. Target measures, where the author has recorded any,
  belong in `strategy/content-strategy.md` and `strategy/channels.md`; real numbers are recorded
  nowhere in this repository.
- **Add a gate.** The two routine gates are brief approval (Gate 1) and publication approval
  (Gate 2). Distribution work introduces no third mandatory gate.

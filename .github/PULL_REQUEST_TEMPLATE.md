<!-- Keep review discussion in this PR; there is no duplicate review log in the article folder. -->

**Article:** `articles/<article-id>` · **Tracker:** <tracker URL>

**PR scope** (tick one; delete the others, and the checklists that do not apply):

- [ ] **Brief (Gate 1)** — approves purpose, scope, and effort. Merging a brief publishes nothing.
- [ ] **Article publication package (Gate 2)** — approves the actual article and imagery. Add the
      `publication` label so CI runs publication-mode checks.
- [ ] **Distribution assets** — approves per-channel copy derived from an already-approved article.
      Add the `distribution` label so CI checks those assets too.

## Summary

<!-- Brief PR: the reader, the problem, the provisional angle, expected effort.
     Publication PR: what the article argues, what changed since the brief, anything the
     approver should look at closely.
     Distribution PR: the source article these assets derive from, and the assets being
     approved. -->

---

## Brief checklist (Gate 1)

- [ ] `article.yaml` has `id` matching the folder, plus `title`, `author`, `tracker_url`
- [ ] Reader and their problem are stated; the topic has a reason to publish
- [ ] Thesis is marked provisional
- [ ] Original contribution and the author's standing to make it are explicit
- [ ] Scope, exclusions, and expected research effort are stated
- [ ] `scripts/check.py <article-id>` passes

## Publication checklist (Gate 2)

Argument and evidence

- [ ] Thesis is clear, useful, and supported; plausible objections are addressed
- [ ] Sourced fact, interpretation, and opinion are distinguishable
- [ ] Every factual claim, number, date, and quotation is verified against `research/sources.yaml`
- [ ] Working `[src:...]` references are converted to reader-facing citations or links
- [ ] Material uncertainty is resolved, disclosed, or out of scope; no placeholders remain
- [ ] The article still matches the approved brief, or the brief was updated and Gate 1 revisited

Imagery and presentation

- [ ] Every image has an editorial purpose, alt text, provenance, and a rights basis in
      `assets/manifest.yaml`
- [ ] Rendered preview reviewed with images, captions, and links (`scripts/preview.py <article-id>`)
- [ ] Voice guidance applied without changing the author's meaning
- [ ] No confidential material committed

Mechanics

- [ ] `scripts/check.py --mode publication <article-id>` passes
- [ ] Publication metadata fields are still empty; release is a separate manual step
- [ ] Approval scope: supporting assets are covered by this approval only when listed in this PR;
      any asset essential to the intended release is listed and reviewed before that release
      proceeds

## Distribution assets checklist

Assets in scope — list each file, or this checklist does not apply:

- `articles/<article-id>/distribution/<channel>-<asset>.md` — channel, purpose, angle

- [ ] Source article named above; its publication package is already approved, or this PR is the
      follow-up that references that article and names the assets being approved
- [ ] Each asset states its channel, its purpose, and the angle it takes
- [ ] Copy is accurate against the article's evidence and does not overstate it
- [ ] Voice applied per `brand/voice.md`, including its guidance for the channel in question
- [ ] Links are present and correct, or explicitly marked unresolved
- [ ] Imagery is reused from the article's `assets/` by relative path and registered in
      `assets/manifest.yaml` with purpose, alt text, and a rights basis
- [ ] Any relative release dependency is stated (for example, "goes out after the article is
      live"); exact dates stay in the tracker
- [ ] `scripts/check.py --distribution <article-id>` passes

## Review

- [ ] Independent review performed by: <name> — or **self-check only** (solo workflow; not an
      independent review)

<!-- Checks establish mechanical properties only. A green run says nothing about whether the
     argument is true, persuasive, or approved. Approval is this merge. Publication is separate:
     after release, record published_url / published_at / published_revision in article.yaml and
     update the tracker. Approving an asset is neither scheduling nor publication; the tracker
     owns release dates. Distribution work is optional and does not block an otherwise complete
     article. -->

<!-- Keep review discussion in this PR; there is no duplicate review log in the article folder. -->

**Article:** `articles/<article-id>` · **Tracker:** <tracker URL>

**Approval type** (delete the other, and the checklist that does not apply):

- [ ] **Brief (Gate 1)** — approves purpose, scope, and effort. Merging a brief publishes nothing.
- [ ] **Publication (Gate 2)** — approves the actual article and imagery. Add the `publication`
      label so CI runs publication-mode checks.

## Summary

<!-- Brief PR: the reader, the problem, the provisional angle, expected effort.
     Publication PR: what the article argues, what changed since the brief, anything the
     approver should look at closely. -->

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

## Review

- [ ] Independent review performed by: <name> — or **self-check only** (solo workflow; not an
      independent review)

<!-- Checks establish mechanical properties only. A green run says nothing about whether the
     argument is true, persuasive, or approved. Approval is this merge. Publication is separate:
     after release, record published_url / published_at / published_revision in article.yaml and
     update the tracker. -->

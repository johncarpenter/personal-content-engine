# Cadence

- Owner: To decide
- Last reviewed: To decide — created 2026-09-15
- Source material: the author's own documents from the previous content system at
  `knowledge-worker-framework/workspace/content/` — `guidelines/channel-strategy.md` (updated
  2026-04-11) and `guidelines/substack-growth-strategy.md` (updated 2026-03-13, its own review date
  2026-06-13 now passed) — corroborated against the publication record in
  `background/published-work.md` and the effort qualifiers in the migrated briefs. Nothing here has
  been confirmed since 2026-04-10.

> Decisions still open are marked `To decide`. This document guides commissioning, writing and
> distribution; the tracking project remains authoritative for the live calendar, release dates,
> assignments, production status and actual performance.

## Intended rhythm

This is an **intended** rhythm — a target shape for the work, not a set of committed dates. No date
in this repository is a commitment; commitments live in the tracker.

**Long-form: weekly, as last recorded.** Both source documents say weekly.
`channel-strategy.md` (2026-04-11) records the primary publication's frequency as weekly long-form
of 1,500–2,500 words. `substack-growth-strategy.md` (2026-03-13) repeats weekly in its cadence table
and calls never missing the weekly post "the non-negotiable", with the reasoning "consistency
compounds".

**What the publication record actually shows.** `background/published-work.md` records seven
long-form pieces with article folders here, published between 2026-02-19 and 2026-04-10: gaps
between consecutive pieces of 5, 8, 9, 13, 8 and 7 days. That is roughly weekly, unevenly — a
sustained near-weekly rhythm over about seven weeks with one gap closer to two weeks. Two further
Substack items in that window (2026-02-15 and 2026-02-22) are curated digests rather than
long-form articles, and the same record notes that everything after 2026-04-10 is simply absent from
it.

**So the intent is recorded, and unconfirmed.** Both source documents are 5–6 months old, the growth
document's own review date passed on 2026-06-13, and no publication is recorded after 2026-04-10.
Whether weekly long-form is still the author's intended rhythm is `To decide`, and so is whether the
target should instead be stated as a range (for example "every one to two weeks") that matches what
the record shows actually happened.

**Supporting distribution frequency, as recorded.** From the cadence table in
`substack-growth-strategy.md` (2026-03-13) and the per-channel frequencies in
`channel-strategy.md` (2026-04-11), with the day-of-week and time-of-day columns deliberately
dropped — those are calendar material:

| Supporting work | Recorded intended frequency |
|---|---|
| Medium syndication of the canonical piece | weekly |
| LinkedIn posts | 3–5 per week |
| LinkedIn carousel | 1 per week |
| Substack Notes | daily, batch-produced |
| LinkedIn native newsletter | weekly |
| Hacker News submissions | "when warranted" |

Read this table together with `strategy/channels.md`: a frequency recorded for a channel whose
decision state there is `proposed` is a plan the author wrote down, not a commitment, and not an
instruction to produce anything. Per-article channel selection is made in
`strategy/distribution-playbook.md`, step 1 — not by filling a row in this table.

Whether each of these frequencies still stands is `To decide`.

## Capacity assumptions

The rhythm above is only feasible if one long-form piece fits in the time available. One piece
costs, in this repository's own workflow (`WORKFLOW.md`):

1. Brief — reader, problem, provisional thesis, contribution, scope, takeaway.
2. Research — questions, sources recorded with what they support and their limitations,
   disconfirming evidence, and resolving or disclosing material uncertainty.
3. Outline and draft.
4. Editorial review across argument, structure, verification, voice and presentation.
5. Imagery — planned around an editorial purpose, produced, and registered in
   `assets/manifest.yaml` with purpose, alt text, caption, provenance and rights.
6. Supporting assets, when the piece justifies them (`strategy/distribution-playbook.md`).

**No hour figures exist anywhere in this material, and none are invented here.** What the migrated
briefs record is coarse qualifiers only: `estimated effort` of `medium` or `high` and
`research depth` of `detailed` or `deep` — for example `articles/economics-of-dying-saas-market`
records medium effort with detailed research, and `articles/dashboards-answer-known-questions`
records high effort with deep research. Some briefs carry an estimated word count (2,500 and 5,000
appear); several record no effort estimate at all.

Real capacity — how many pieces of each effort class fit in a period, and how much of that period
supporting assets consume — is `To decide`, and cannot be derived from the material that exists.

Where a real limit would be recorded: each article's `research/notes.md` has an **Effort limit**
prompt ("the point at which research stops — hours, number of interviews, or sources reviewed"). It
is unfilled in all 15 migrated articles. Filling it per article is the mechanism by which capacity
stops being a guess; a stated stop rule is also the thing that keeps a single piece from consuming a
rhythm's worth of research time.

## Planned work versus timely commentary

Some pieces are planned from the backlog; some exist because something just happened. The balance
between them is a real decision and it is not recorded.

What is recorded: `channel-strategy.md` (2026-04-11) allows "+1-2 opportunistic posts on breaking
news" per week in the short-form content mix — that is, timely commentary is explicitly budgeted for
short-form. Nothing in either source document states a planned-versus-timely split for long-form.
That split is `To decide`, including whether the intended rhythm reserves any long-form slot for
timely work or absorbs it as displacement.

Two constraints apply either way:

- **The brief-first workflow applies to both.** A timely piece still gets a brief and Gate 1. A
  brief can be short — `WORKFLOW.md` keeps the stages lightweight and `templates/article/brief.md`
  says one page is plenty — but "it is topical" is not a brief.
- **Timeliness is not a contribution.** A news hook explains why now; it does not supply a reason to
  publish or an original contribution, and it does not lower the evidence bar. `WORKFLOW.md`
  principles 1 and 2 hold unchanged: a reader problem, a reason to publish, and an explicit
  contribution.

## Sequencing and dependencies

Order constraints, not dates:

- The article is published before the distribution that points at it.
- A newsletter-style asset is the exception: it may be written and approved before release, and sent
  once the article is live.
- Syndication follows the canonical piece, and carries a canonical link back to it.
- Supporting assets depend on the finished article, so an article in review has no distribution work
  ready to hand off yet — which is why asset approval is allowed to arrive in a later PR.

The relative gaps the author recorded between the article and each supporting asset are in
`strategy/distribution-playbook.md` under "Sequencing"; they are not repeated here. Exact dates,
owners and execution status live in the tracker.

## When a target becomes infeasible

When research, quality or capacity will not fit the intended rhythm, the rhythm gives way. This
repository already states the principle: unsupported factual claims are not acceptable
(`WORKFLOW.md` principle 3), and evidence gaps are written down rather than filled with plausible
prose (`AGENTS.md`, hard boundary 1). Publishing a claim the evidence does not support in order to
hold a rhythm is the wrong trade, every time.

Decide in this order:

1. **Narrow the scope.** Cut the claim that is not yet supported and publish the argument that is.
   The brief is updated, and Gate 1 is explicitly revisited if the reader, purpose, scope or effort
   materially changed.
2. **Disclose the uncertainty.** Publish with the limitation stated plainly, where the argument
   survives being honest about what is not known.
3. **Move the piece.** Keep the scope, take the later slot.
4. **Skip the slot.** Publish nothing rather than publish something unsupported or unfinished.

The test for whether option 1 or 2 is even available is the one already in `WORKFLOW.md`: research
is sufficient when the main argument is supported and material uncertainty is resolved, disclosed,
or moved out of scope.

Whichever option is chosen, the date change is recorded in the tracker, not here. This repository
records the editorial consequence — an updated brief, a narrowed scope, a disclosed limitation.

## Reconsidering the cadence

Revisit the intended rhythm when there is evidence, not when it feels wrong.

Evidence that would justify a change:

- Sustained divergence between intent and what actually shipped, over enough pieces to be a pattern
  rather than a run of bad weeks.
- Quality pressure: pieces repeatedly reaching review with unresolved evidence gaps, or briefs
  repeatedly narrowed late to make a slot.
- A shift in what the work is for — a change in `strategy/content-strategy.md` or in
  `brand/positioning.md` that changes which pieces are worth writing.
- Measured results against whatever success measures the author confirms.

That evidence lives in the tracking project: actual publication dates, production status, and
performance. This repository holds the intent and the reasoning; it must not grow a second copy of
the record in order to argue with it.

**Standing trigger, already met:** the intended rhythm above is unconfirmed since 2026-04-10, and
the growth document's own review date (2026-06-13) has passed. Confirming or replacing the
weekly long-form intent is the first decision this document needs; everything else in it depends on
the answer.

## Deliberately not carried across

Two dated sections of `substack-growth-strategy.md` (2026-03-13) were left behind on purpose: its
**90-day playbook**, a week-by-week execution checklist running March to June 2026, and its
**subscriber-milestone timeline**, which pairs audience-size milestones with target dates. Both are
expired execution plans, and execution plans belong to the tracking project — reproducing them here
would create exactly the second calendar this repository is not allowed to have. The same reasoning
applies to the per-day and per-time posting schedules in both source documents, and to the old
system's `calendar/` frontmatter integration section: dates, day-of-week placement and scheduling
fields are the tracker's, not this repository's.

---
name: review-article
description: Review a draft article in this content repository against its brief, sources, voice guidance, strategic fit, and presentation checklist — plus supporting distribution assets when the PR's scope lists them. Use before publication approval or when asked to critique a draft. Produces a prioritized findings list covering unsupported claims, overstatement, missing counterarguments, citation problems, and unresolved placeholders; suggests focused changes without rewriting the article or granting approval.
---

# Review article

Review the article at `articles/<article-id>/` for Gate 2 of `WORKFLOW.md`.

## Hard boundaries

- **Never silently rewrite the article.** Propose focused changes: quote the passage, state the
  problem, suggest a replacement. Edit the file only when the author asks for that specific change.
- **Never grant approval.** Approval is a human act recorded by merging the Publication PR. AI
  review does not replace the author's factual and editorial accountability.
- **Never soften a blocking issue to be agreeable, and never invent evidence** to fix a gap you
  found.
- **Distinguish what you verified from what you could not.** An unchecked claim is unchecked, not
  correct.
- **Never turn an unresolved strategy choice into an article-blocking defect.** A `To decide` field
  or a `proposed` channel in `strategy/channels.md` is a question to surface, not a fault in the
  draft.
- **Never treat a deliberately new argument or angle as a deviation defect** merely because it
  departs from the brief or the established strategy. Name the departure and what it implies, and
  let the author decide.

## Inputs

Read, in this order: `brief.md` (the standard the article is judged against), `article.md`,
`research/sources.yaml`, `research/notes.md`, `outline.md`, `assets/manifest.yaml`, `article.yaml`,
then `brand/voice.md` and `brand/visual-style.md`, then `strategy/content-strategy.md` and
`strategy/channels.md`. Treat unfilled `TODO(author)` brand fields as unknown — do not enforce a
voice that has not been defined — and treat any strategy field reading `To decide` the same way: an
open decision, not a standard to enforce.

The PR's stated scope determines what is being reviewed — **brief**, **article publication
package**, or **distribution assets**. Review distribution assets only when the scope lists them.

Run the mechanical checks first so you do not spend review effort on them:

```sh
scripts/check.py --mode publication <article-id>
```

When the scope includes distribution assets:

```sh
scripts/check.py --mode publication --distribution <article-id>
```

## Review order

### 1. Argument

- Is the thesis clear, useful, and actually defended — or merely asserted and restated?
- Does the article deliver the brief's original contribution, or has it become a summary of other
  people's work?
- Are plausible objections addressed rather than strawmanned or ignored?
- Is sourced fact distinguished from interpretation and opinion? Strong opinion is welcome;
  unsupported factual claims are not.
- Does the conclusion follow from the evidence presented, and does it match the brief's declared
  scope? If the article outgrew the brief, say so — that may require revisiting Gate 1.
- Does the article still serve the audience need, objective, and topic pillar recorded in the
  brief's **Strategic fit** section, and the strategy it was commissioned under? A deliberate new
  angle is a legitimate outcome — name the departure and what it implies rather than scoring it as
  an error.

### 2. Structure

- Does each section advance the argument? Name sections that could be cut.
- Missing explanation a reader needs, or detours they do not?
- Is the opening about the reader's problem, and does the takeaway land?

### 3. Verification

For every factual claim, number, date, quotation, and named entity:

- Is there a source in `sources.yaml` whose `supports` covers this claim?
- Does the source actually say it, at the stated `locator`, or has it been stretched?
- Do the source's `limitations` undercut the weight the article puts on it?
- Are numbers internally consistent (percentages, totals, time periods, units)?
- Are links present, correct, and non-placeholder? Note which links you could and could not check.
- Any remaining `[src:...]` working reference must be converted to a reader-facing citation.

Material uncertainty must be resolved, disclosed in the text, or removed from scope.

### 4. Voice

Apply `brand/voice.md` while preserving the author's meaning. Flag hype, hedging that dilutes a
defensible claim, and overstatement beyond the evidence. Never strengthen a claim to make it read
better.

### 5. Presentation

- Every image in `article.md` exists, is registered in `assets/manifest.yaml`, and has a stated
  editorial purpose.
- Alt text describes the information carried (a chart's finding), not the appearance.
- Captions add context and attribution; they do not substitute for alt text.
- `creator_or_source` and `rights_or_permission` are recorded; flag anything third-party without a
  permission basis, and any screenshot that may leak confidential data.
- `article.yaml`: `title` set, `tracker_url` present, publication fields still empty before release.
- Review the rendered page, not just the source: `scripts/preview.py <article-id>`.

### 6. Supporting distribution assets (when in the PR scope)

Only for the assets the PR's scope actually lists. A missing asset is not a finding: distribution is
optional and never blocks an otherwise complete article.

- Is each asset's channel, purpose, and angle stated, and coherent for that channel?
- Is it accurate against the article's own evidence — no claim, number, or attribution the article
  does not carry?
- **Does any line claim more than the article supports?** Call overstatement out explicitly;
  short-form copy is where it usually enters.
- Does it read in the author's voice per `brand/voice.md`?
- Does it stand alone away from the article — enough context for a reader who has not read it?
- Are links present, correct, and non-placeholder? `published_url` in `article.yaml` stays empty
  until after release, so a link to the live article may legitimately be unresolved before release;
  say which links you could not check, and flag any placeholder posing as a real URL.
- Is imagery reused from the article's `assets/` by relative path (`../assets/hero.png`) and
  registered in `assets/manifest.yaml`? A channel-only image belongs in that same `assets/` folder
  with a manifest entry — never an unregistered file or an invented visual.
- Is any stated relative release dependency coherent — for example an asset that must go out only
  after the article is live? Relative dependencies only; exact dates belong to the tracker.

## Output format

```markdown
## Blocking
1. <file:line or quoted passage> — <problem> — <suggested change>

## Recommended
1. ...

## Optional
1. ...

## Verification performed
- Checked: <claims, links, numbers you actually verified, and how>
- Not checked: <claims you could not verify, and why>

## Not reviewed
- <anything out of reach: paywalled sources, internal data, unrendered destination>
```

Blocking = a factual, citation, rights, accessibility, or editorial-integrity defect that must not
ship. Recommended = materially improves the argument. Optional = taste.

Findings about assets outside the PR's approval scope, and unresolved strategy choices, belong under
`Recommended`/`Optional` or a short `Questions for the author` list — never under `Blocking`, which
is reserved for defects in what this PR actually asks to approve.

End with one sentence on whether the blocking list is empty — and state that publication approval
remains the author's and approver's decision.

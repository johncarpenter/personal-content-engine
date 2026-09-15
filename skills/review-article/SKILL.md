---
name: review-article
description: Review a draft article in this content repository against its brief, sources, voice guidance, and presentation checklist. Use before publication approval or when asked to critique a draft. Produces a prioritized findings list covering unsupported claims, overstatement, missing counterarguments, citation problems, and unresolved placeholders; suggests focused changes without rewriting the article or granting approval.
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

## Inputs

Read, in this order: `brief.md` (the standard the article is judged against), `article.md`,
`research/sources.yaml`, `research/notes.md`, `outline.md`, `assets/manifest.yaml`, `article.yaml`,
then `brand/voice.md` and `brand/visual-style.md`. Treat unfilled `TODO(author)` brand fields as
unknown — do not enforce a voice that has not been defined.

Run the mechanical checks first so you do not spend review effort on them:

```sh
scripts/check.py --mode publication <article-id>
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

End with one sentence on whether the blocking list is empty — and state that publication approval
remains the author's and approver's decision.

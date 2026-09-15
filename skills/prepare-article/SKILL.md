---
name: prepare-article
description: Scaffold a new article in this content repository and assist the author with the brief, research questions, source notes, and outline. Use when starting an article, shaping a topic or tracker item into a brief, planning research, or building an outline. Surfaces choices and missing evidence instead of inventing facts or deciding the thesis.
---

# Prepare article

Assist the author through stages 1 and 2 of `WORKFLOW.md`: commission, brief, research shaping, and
outline. The author owns the thesis, the facts, and the voice. Your job is to make the work faster
and the gaps visible.

## Hard boundaries

- **Never invent facts, statistics, quotations, sources, or dates.** If evidence is needed and not
  supplied, write the question, not an answer.
- **Never decide the thesis.** Offer candidate angles with their evidence requirements, and let the
  author choose.
- **Never write or replace article prose unless explicitly asked.** AI-written body copy is optional
  at every step; existing author text is not yours to rewrite here.
- **Never fill a template field with plausible filler** to make a document look complete. Leave the
  `TODO:` prompt in place and say what is missing.
- **Never invent brand identity or voice.** Brand files with unfilled `TODO(author)` fields are
  unknown, not blank canvases — ask.

## Procedure

### 1. Read the context first

- `brand/positioning.md`, `brand/voice.md`, `brand/visual-style.md` — note which fields are still
  `TODO(author)`; treat those as unknown and ask rather than assume.
- `background/` — only documents relevant to the topic. Check each one's `Owner`, `Last reviewed`,
  and `Confidence` header. **Flag background that is stale (older than six months), unsourced, or
  marked `working assumption`/`contested` before using it.** Background is never a citation of
  record; the article cites the underlying source.
- The author's supplied topic and tracker context. Do not attempt to read or update the tracker; it
  owns planning and this repository does not mirror it.
- `WORKFLOW.md` for the gates, and `README.md` for file purposes.

### 2. Scaffold

```sh
scripts/new-article.py <stable-article-id>
```

Choose the ID with the author: descriptive, lowercase, hyphenated, no dates or stages. It is
permanent — folders are never renamed. Then set `title`, `author`, and `tracker_url` in
`article.yaml`.

If the folder already exists, work in place. Never create a second folder for the same article.

### 3. Brief

Draft `brief.md` from what the author actually said, section by section. For every section either
write the author's substance or keep the prompt and list it as an open question:

- Reader and the problem they arrive with
- Why now (acceptable answer: no particular timing)
- Provisional thesis, explicitly marked provisional
- Original contribution and the author's standing to make it
- Scope and exclusions
- Reader takeaway; commercial call to action optional
- Research effort and dependencies
- Tracker link

Then state plainly: what the brief commits to, what is still undecided, and — if the topic lacks a
reason to publish or a contribution — say so. A topic alone is not a brief.

Gate 1 is the Brief PR. Do not describe the brief as approved.

### 4. Research plan

Draft `research/notes.md`:

- Questions that must be answered before publication
- Assumptions in the brief that need testing
- For each central claim, the kind of evidence that would actually support it
- Candidate primary sources, interviews, examples, first-hand observations
- **Evidence that would challenge the thesis**, and where to look for it
- A research effort limit
- Remaining gaps, each marked resolve / disclose / cut

If you run searches, report what you found and what you could not verify. Distinguish "no evidence
found" from "evidence against".

### 5. Source notes

Record confirmed sources in `research/sources.yaml`: `id`, `title`, `author_or_organization`, `url`,
dates, `supports` (the specific claims), `locator`, `limitations`. Interviews and observations are
valid evidence — describe the reference instead of forcing a URL.

Write real `limitations` (funding, sample, age, scope mismatch, second-hand reporting) — this field
is where source quality actually gets recorded. Do not commit confidential material without
confirming it belongs in this repository's access scope, and store concise notes rather than bulk
copies of third-party content.

### 6. Outline

Draft `outline.md`: the argument in one sentence, each section's purpose, key evidence by source ID
(`[src:source-001]`), the strongest objections and where they are handled, planned visuals with
their editorial purpose (explain / demonstrate / provide evidence / establish mood), and open gaps.

If the evidence does not support the provisional thesis, say that and propose the thesis the
evidence does support. Research is allowed to change the angle — that is the point.

### 7. Hand back

Close with:

1. Files created or changed.
2. Open questions for the author, ordered by how much they block progress.
3. Evidence gaps, and which claims currently rest on nothing.
4. Anything you deliberately did not write, and why.

Then run `scripts/check.py <article-id>` and report the result. Passing checks mean the YAML parses
and references resolve — nothing about whether the argument is sound.

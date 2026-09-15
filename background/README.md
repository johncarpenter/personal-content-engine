# Background

Reusable context that several articles draw on: market structure, product mechanics, recurring data,
internal definitions, prior positions taken. **Not** article-specific research — that belongs in
`articles/<id>/research/`.

## Rules

1. One topic per file, named descriptively: `inference-cost-structure.md`.
2. Every substantive document starts with the header block below. Ownership, sources, and a
   last-reviewed date are what make background trustworthy later.
3. Mark confidence explicitly. Separate established facts from working assumptions.
4. Cite sources for factual claims, exactly as an article would.
5. Background is a starting point, never a citation of record. An article cites the underlying
   source, not this folder.
6. Do not store confidential material unless it belongs in this repository's access scope.

Agents (including `prepare-article`) must flag background that is stale, unsourced, or marked
uncertain rather than presenting it as established fact.

## Header block

Copy this to the top of each background document:

```markdown
# <Topic>

- Owner: <name>
- Last reviewed: <YYYY-MM-DD>
- Confidence: established | working assumption | contested
- Sources: <links or references, or "internal — see below">

## Summary

<Two or three sentences a writer can rely on.>

## Detail

<Facts with sources. Mark interpretation as interpretation.>

## Open questions and known gaps

<What is not settled, and what would settle it.>
```

## Review cadence

Re-read documents older than six months before relying on them, and update the `Last reviewed` date
when you do. If a claim can no longer be supported, correct or delete it — do not leave it standing
because an article once used it.

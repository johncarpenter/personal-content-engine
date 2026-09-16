---
name: draft-article
description: Write the first draft of article.md for an article whose brief has passed Gate 1, from the brief, outline, research notes and sources. Use when the author asks for a draft, a first pass, or to "write it up" after the brief is merged. Every factual claim carries a [src:] reference, every gap becomes a TODO, and the author's own experience is never invented. Does not run before Gate 1 and never overwrites author prose.
---

# Draft article

Stage 3 of `WORKFLOW.md`, on request only. `prepare-article` ends at the outline; `review-article`
starts from a draft. This skill fills the gap between them: it turns an approved brief, an outline
and a source list into a first draft of `article.md` that the author then owns, rewrites, and is
accountable for.

AI-written body copy is optional at every step of the workflow. This skill runs only when the author
asks for a draft. The output is scaffolding in the author's voice as far as `brand/voice.md` defines
it, with every gap left visible rather than papered over.

## Hard boundaries

- **Never invent facts, statistics, quotations, dates, sources, or URLs.** Every number, quotation,
  named organization and dated event in the draft carries a `[src:source-NNN]` reference to an
  existing entry in `research/sources.yaml`, and that entry's `supports` list must actually cover
  the claim. A claim with no source becomes `TODO: verify …` or is left out.
- **Never invent the author's experience.** Where the outline calls for what the author built,
  observed or measured and `research/` does not record it, write `TODO(author): …` saying what is
  needed. First-hand evidence that *is* recorded (a source entry naming the author as
  `author_or_organization`) may be used like any other source.
- **Never draft before Gate 1.** The brief must be merged to `main` and free of `TODO` placeholders.
  If it is not, stop and say so; a draft against a brief that may still change is wasted work.
- **Never overwrite author prose.** Draft only when `article.md` is still the template placeholder
  or empty. If it already holds prose, do not replace it: offer `review-article` instead, or draft
  only the specific section the author asked for.
- **Never decide the thesis.** Draft the thesis the brief and outline state. If the evidence does
  not support it, draft what the evidence supports, mark the departure with a `TODO(author)` at the
  passage, and say so in the hand-back.
- **Never invent voice.** Apply `brand/voice.md` where it is filled in; treat `TODO(author)` fields
  as unknown and match the register of the repository's published articles instead. Say which you
  did.
- **Never touch `brief.md`, `research/sources.yaml` or the tracker.** If drafting shows that a
  source is missing or a claim needs a new entry, list it in the hand-back; the author or
  `prepare-article` records it.
- **Never reference an image that does not exist.** Where the outline plans a figure, leave a
  `TODO: figure-NN — <purpose>` line at the position instead of an image reference.
- **Never grant approval or call the draft ready.** Checks establish mechanical properties only; the
  draft is unreviewed until stage 4.

## Preconditions

Confirm all four before writing a word, and report each in the hand-back:

1. `articles/<id>/brief.md` contains no `TODO` and is on `main`:
   `git log --oneline main -- articles/<id>/brief.md` shows at least one commit.
2. `research/sources.yaml` exists and `scripts/check.py <id>` reports no errors.
3. `outline.md` has an argument and sections. If it is still the template, run the
   `prepare-article` outline step first and hand that back before drafting.
4. `article.md` is the template placeholder or empty.

## Procedure

### 1. Read, in this order

`brief.md` (the standard the draft is judged against), `outline.md` (the plan), `research/notes.md`
(what was found and what was not), `research/sources.yaml` (what each source actually supports and
its `limitations`), `brand/voice.md`, `brand/positioning.md`, one or two published articles in
`articles/` for register and length, and `assets/manifest.yaml`.

Note which `brand/voice.md` fields are filled and which are still `TODO(author)`.

### 2. Build the claim ledger before drafting

For each outline section, list the claims it makes and, for each claim, the source ID whose
`supports` covers it. Mark every claim that is:

- **unsourced** — becomes `TODO: verify …` or is cut;
- **second-hand** — the source's `limitations` says the figure is reported from elsewhere; use it
  with attribution ("as reported by …") and a `TODO: trace to origin` where the notes ask for one;
- **the author's own** — recorded first-hand evidence may be stated as the author's; anything not
  recorded becomes `TODO(author)`;
- **a forecast or an opinion** — must read as one in the sentence.

The ledger is working material for the session and the hand-back. Do not write it into the article
folder.

### 3. Write `article.md`

- No `# H1`; the title lives in `article.yaml`. Start with the body.
- First line: `TODO(author): AI-assisted first draft (<date>) from brief, outline and sources; …`
  so the draft cannot reach Gate 2 without the author reading it.
- Open on the concrete case the outline names, never on an industry frame.
- Keep the outline's section order unless the argument reads better otherwise; if you reorder, say
  so in the hand-back.
- Distinguish sourced fact, interpretation and opinion inside the sentence ("Gartner predicts …",
  "my reading is …", "I think …").
- Address the outline's objections in the body, each with its source.
- Where the outline plans a fill-in model or table, build it from recorded inputs only, and make
  sure the arithmetic is in `research/notes.md`.
- Match the register and length of the repository's published articles unless `brand/voice.md`
  sets a length.
- Leave `[src:…]` markers in place. Converting them to reader-facing citations is stage 4 work with
  the author, once the citation style in `brand/voice.md` is decided.

### 4. Check and preview

```sh
scripts/check.py <article-id>
scripts/preview.py <article-id>   # optional; renders with local images
```

Report the check output verbatim. Every `[src:…]` marker and every `TODO` appears as a warning;
that is expected before Gate 2. Any `error` line must be fixed before hand-back.

### 5. Hand back

Close with:

1. Files created or changed.
2. Every `TODO` in the draft, ordered by how much it blocks Gate 2: `TODO(author)` items first,
   because only the author can resolve them, then `TODO: verify` items with the source that would
   settle each.
3. Claims resting on second-hand or single-source evidence, and what the article does if they fall.
4. Where the draft departs from the outline or from the brief's provisional thesis, and why.
5. Voice: which `brand/voice.md` rules were applied, which were unknown, and what register was
   matched instead.
6. Anything deliberately not written, and why.

Then say plainly that the draft is unreviewed: stage 4 (`review-article`) and Gate 2 remain.

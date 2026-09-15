# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's open questions:

- Does this alienate builders who love CLI? — resolved: no, framed as "CLI is great for us, but not
  the answer for everyone."
- Should the piece mention specific alternatives (Cursor, Replit Agent)? — yes, briefly, but the
  piece is about the principle, not product recommendations.
- Should it include actual screenshots of Claude Code setup complexity? — would strengthen the
  "it's not just natural language" point. Unresolved.

## Assumptions to test

The idea file records the assumption the research overturned: the author started from "maybe more
people need terminal literacy," and the research convinced him this is the wrong framing. The piece
is deliberately built as that reversal.

## Evidence needed for the central claims

The idea file's five key arguments and the kind of evidence each needs:

- **GUIs won for fundamental cognitive reasons, not fashion** — interface-design and accessibility
  research: `[src:source-001]`, `[src:source-002]`, `[src:source-003]`, `[src:source-012]`,
  `[src:source-013]`.
- **The dropout rate for learning programming is ~50%** — programming-education studies and
  bootcamp statistics: `[src:source-004]`, `[src:source-005]`.
- **The market is already voting — and it's voting for GUIs** — adoption and positioning data for
  Copilot, Cursor, Claude Code: `[src:source-006]`, `[src:source-007]`, `[src:source-008]`.
- **AI is solving the terminal problem differently** — existence and framing of NLP-to-command
  tools: `[src:source-009]`, `[src:source-010]`, `[src:source-011]`.
- **Your audience doesn't want this** — the AI-curious-leader persona wants jargon-free, accessible
  content: `[src:source-012]`, `[src:source-013]`.

## Candidate sources

- The thirteen web sources in the idea file's Source Bibliography, promoted into `sources.yaml` as
  `source-001` … `source-013`.
- First-hand evidence used in the article but never entered in the bibliography: the author's own
  Claude Code briefing system (MCP servers plus a cron job) and the earlier "How to Build a Claw
  That Won't Eat You" post it documents, plus direct observation of non-developer colleagues
  freezing at a blinking cursor.
- One further source appears in the idea file's Supporting Evidence for the dropout argument but
  not in its numbered bibliography, so it has no entry in `sources.yaml`: ACM Computing Education,
  https://dl.acm.org/doi/abs/10.1145/3778857?af=R — "Students perceive programming errors as
  indicators of failure rather than learning opportunities, resulting in frustration, anxiety and
  dropout."

## Disconfirming evidence

The counterarguments the idea file set out to answer, with the responses it recorded:

- "Power users will always prefer CLI" — true, but the question is how knowledge workers access AI
  tools, not what power users prefer.
- "Terminal is actually simple once you learn it" — survivorship bias; the 50% who dropped out
  aren't writing Medium posts.
- "Claude Code's natural language interface makes CLI accessible" — partially true; the natural
  language is one layer, the environment (npm/pip install, path navigation, files and directories)
  is another.
- "GUIs are dumbed down / less powerful" — false dichotomy; GUIs can expose power progressively, as
  Cursor does.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Reconstructed on 2026-09-15 from the author's own material in the knowledge-worker-framework
repository:

- `backlog/idea-2026-02-20-terminal-literacy-knowledge-work.md` — research brief, key arguments,
  supporting evidence, counterarguments, open questions, source bibliography.
- `drafts/draft-2026-02-28-terminal-literacy-trap.md` — draft body (now `article.md`) and the
  draft's own list of factual claims to verify.
- `published/2026-03-04-substack-terminal-literacy-trap.md` — publication record.

Published on Substack 2026-03-04 and syndicated to Medium 2026-03-13
(https://medium.com/@johncarpenter/i-live-in-the-terminal-i-stopped-telling-others-to-join-me-3f1d0e4bd90e).
This repository records only the primary publication in `article.yaml`; the syndication link is kept
here so the trail is not lost.

Deliberately left behind in the old repository (channel derivatives, not article work products):

- `drafts/linkedin-repurpose-2026-02-28-terminal-literacy-trap.md` — LinkedIn repurpose post.
- `drafts/draft-2026-02-28-terminal-literacy-trap-substack.html` — generated Substack HTML.

## Remaining gaps

- Whether to show the setup complexity (screenshots or the actual terminal command) was never
  decided; the published piece describes the briefing system without showing it.
- Factual claims the draft flagged for verification and which were never confirmed in writing:
  - "20 million Copilot users" — sourced from DigitalOcean, may have increased; verify the current
    number.
  - "Cursor is the fastest-growing AI coding tool" — check whether this was still accurate as of
    late February 2026.
  - The Builder.io quote — verify the exact wording against the source.
  - The Codex-CLI and CLAI descriptions — verify those projects are still active and relevant.
  - "50% dropout rate in intro programming" — the draft considered this one solid, sourced from the
    STEM Education Journal.
- Reader-facing attribution: the published prose names ACM researchers and Builder.io inline but
  does not link every source in `sources.yaml`.

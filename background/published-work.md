# Published work (inventory)

- Owner: TODO(author)
- Last reviewed: TODO(author)
- Confidence: established — these are the author's own publication records.
- Sources: internal — migrated from the publication records in
  knowledge-worker-framework/workspace/content/published/ (one file per piece). Every URL and date
  below is copied from those files; nothing is reconstructed.

## Summary

Nine Substack pieces and one slide deck are recorded as published between 2026-02-15 and
2026-04-10. Seven of them correspond to article folders in this repository. `article.yaml` holds a
single `published_url`, so the additional facts the old records carry — Medium syndication URLs and
dates, series membership, and the pieces this repository does not model — are recorded here instead.

## Detail

### Long-form articles with a folder in this repository

| Title | Substack | Medium syndication | Article folder | Series |
|---|---|---|---|---|
| Trajectory: Teaching Claude Code to Learn Without Touching Model Weights | [link](https://discontinuityai.substack.com/p/trajectory-teaching-claude-code-to) — 2026-02-19 | [link](https://medium.com/@johncarpenter/trajectory-teaching-claude-code-to-learn-without-touching-model-weights-cb6070ef2339) — syndication recorded complete 2026-03-01 | `articles/trajectory-prompt-learning` | none recorded |
| How to Build a Claw That Won't Eat You | [link](https://discontinuityai.substack.com/p/how-to-build-a-claw-that-wont-eat) — 2026-02-24 | [link](https://medium.com/@johncarpenter/how-to-build-a-claw-that-wont-eat-you-234f47042511) — syndication recorded complete 2026-03-01 | `articles/knowledge-worker-claw` | none recorded |
| I Live in the Terminal. I Stopped Telling Others to Join Me. | [link](https://discontinuityai.substack.com/p/i-live-in-the-terminal-i-stopped) — 2026-03-04 | [link](https://medium.com/@johncarpenter/i-live-in-the-terminal-i-stopped-telling-others-to-join-me-3f1d0e4bd90e) — 2026-03-13 | `articles/terminal-literacy-trap` | none recorded |
| SOC2 Ready in a Day: How I Built a Complete Compliance Kit with Claude Code | [link](https://discontinuityai.substack.com/p/soc2-ready-in-a-day-how-i-built-a) — 2026-03-13 | [link](https://medium.com/@johncarpenter/soc2-ready-in-a-day-how-i-built-a-complete-compliance-kit-with-claude-code-afb5a8041170) — 2026-03-19 | `articles/soc2-in-a-day` | `built-in-a-day`; the record calls it "'Built in a Day' series #2" |
| Surface, Oracle, Ratchet: The Pattern Inside Karpathy's Autoresearch — Applied to Code | [link](https://discontinuityai.substack.com/p/surface-oracle-ratchet-the-pattern) — 2026-03-26 | [link](https://medium.com/@johncarpenter/surface-oracle-ratchet-the-pattern-inside-karpathys-autoresearch-applied-to-code-4672a40e4c4e) — 2026-03-30 | `articles/surface-oracle-ratchet` | none recorded |
| The Economics of a Dying SaaS Market | [link](https://discontinuityai.substack.com/p/the-economics-of-a-dying-saas-market) — 2026-04-03 | [link](https://medium.com/@johncarpenter/the-economics-of-a-dying-saas-market-748141292af2) — 2026-04-07 | `articles/economics-of-dying-saas-market` | no `series` field of its own; its record's note says "Part 1 of the personal software series", and the Rise of Personal Software record names it as Part 1 of `saas-economics` |
| The Rise of Personal Software | [link](https://discontinuityai.substack.com/p/the-rise-of-personal-software) — 2026-04-10 | **not recorded** — the Medium `url` and `date` fields in the record are blank, so syndication was either still pending or never logged | `articles/rise-of-personal-software` | `saas-economics`, `series_part: 2` |

Notes on individual entries:

- **Trajectory** — two records exist for this piece. The publication record
  (`2026-02-19-substack-trajectory-memory-rl.md`) carries the title "Trajectory: RL for Claude Code
  Without Touching Model Weights"; its companion draft record
  (`2026-02-19-substack-trajectory-memory-rl-draft.md`) carries "Trajectory: Teaching Claude Code
  to Learn Without Touching Model Weights", which is also the title in both published URL slugs.
  The title used in the table above is that published one. That record schedules Medium
  syndication for 2026-02-26 but logs
  `medium_syndicated: 2026-03-01`; 2026-03-01 is the completion date used here.
- **SOC2 Ready in a Day** — the record also names an open-source repository for the kit:
  `https://github.com/2Lines-Software/soc2-compliance-for-solo-owners`. The "#1" of the "Built in a
  Day" series is not identified in the migrated records.
- **The Rise of Personal Software** — its record links Part 1 explicitly: "Part 1: The Economics of
  a Dying SaaS Market — April 3, 2026."

### Published items this repository does not model

These are recorded as published in the old repository but have no article folder here, because they
are different content types than the long-form article this repository is built around.

| Item | Substack | Date | Type |
|---|---|---|---|
| What My Algorithm Read This Week: Feb 15, 2026 — "Junior devs aren't going anywhere, the epistemic crisis deepens, and open source velocity is absurd" | [link](https://discontinuityai.substack.com/p/what-my-algorithm-read-this-week) | 2026-02-15 | Curated feed digest — a weekly roundup of links with commentary, not a researched argument |
| What My Algorithm Read This Week: Feb 22, 2026 — "AI is less capable than advertised, the GPU era may already be ending, and that verified badge costs more than you think" | [link](https://discontinuityai.substack.com/p/what-my-algorithm-read-this-week-244) | 2026-02-22 | Curated feed digest |
| An Experiment: What if Your Prompts Could Learn? (prompt-learning carousel) | no URL recorded | 2026-02-23 per the record's filename; the file itself records no publication date or URL | Slide deck (Marp carousel), derived from the Trajectory work |

The two digests are the author's own publication records and their URLs are recorded; only the
carousel's publication destination is unknown. Neither content type has a brief, a research trail,
or a single argument, which is what an article folder here is shaped to hold.

## Open questions and known gaps

- Medium syndication for **The Rise of Personal Software** is blank in the record. TODO(author):
  confirm whether it was syndicated and, if so, with what URL and date.
- The prompt-learning carousel has no recorded URL or publication channel. TODO(author): confirm
  where (and whether) it was published.
- The "Built in a Day" series has a recorded #2 (SOC2) but no recorded #1. TODO(author): identify
  the first entry, or confirm the numbering is informal.
- This inventory is a snapshot of the old records as of the 2026-09-15 migration. Anything published
  after 2026-04-10, or after the old repository stopped being maintained, is not here.
- Performance data, repurposing schedules, and channel plans present in the old records were
  deliberately not migrated: they belong to the tracking project, not to this repository.

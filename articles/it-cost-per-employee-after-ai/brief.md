# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Drafted 2026-09-15 from the author's commissioning note. Sections that go beyond what the author
said are marked as proposals; unmarked text is the author's substance restated.

## Reader and problem

Confirmed by the author 2026-09-15: a technology leader, or a CEO or CFO, deciding how to deploy AI
across an organization — not what to build with it or how to operate it. In this repository's
personas that is the AI-Curious Leader; the Builder is secondary at most. Pillar: **The Shift**
(author's decision, 2026-09-15).

The problem they arrive with: they have a per-employee IT cost they understand (licences, devices,
support, cloud) and an AI line that started as a few per-seat subscriptions. They are now being
asked to fund tokens, and they have no model for what that line does over the next two to three
years or how to keep it from becoming an uncontrolled overrun.

## Why now

- Gartner published a prediction on 2026-08-17 that inference cost per agentic workflow rises more
  than fivefold through 2028 even as token prices fall roughly 95% by 2030.
- Uber (reported May 2026) and a Microsoft division (reported May 2026) each exhausted an annual AI
  coding budget within months of rolling out Claude Code, at a reported $500–2,000 per engineer per
  month.
- Per-seat AI pricing is converting to consumption pricing (GitHub Copilot moved to usage-based
  billing in 2026; Microsoft 365 Copilot agents bill by credits).
- Most organizations are in 2027 budget planning now (Q4 2026).

## Provisional thesis

Provisional. The author's expectation, in the author's framing:

> IT cost per employee could jump on the order of 40% once AI spend is included, driven by two
> factors. (1) Token spend per employee rises and keeps rising: once a company moves from bounded
> per-seat pricing to unbounded token cost, the trend continues. (2) Today's AI use is mostly
> files (creating, reading, summarizing) and simple data access (MCP, API). It will move to
> compute-first work where AI takes on workload and automation, and that work needs far more
> tokens and compute per employee. Companies therefore need to build their AI frameworks,
> environments, and cost structures now: not "which model is best" but "which model solves my
> problem at the lowest cost". Without a model for handling extra AI workload and a way to monitor
> and manage model usage, the only option left is to throw money at the problem.

Research status against this thesis (detail in `research/notes.md`):

- Both driving factors have supporting evidence from analyst, academic, and reported-incident
  sources.
- The 40% figure is not supported by any single external source, but it falls out of the
  author's own numbers: one person working the author's way, priced at API list rates (~$550 a
  month), adds about 37% to a $1,500-a-month enterprise IT baseline, and one $100 subscription
  adds 40% to a $250 startup baseline. External datapoints point the same direction: Deloitte's
  tech spend rising from ~6% to ~8% of revenue over two years; the Atlanta Fed's $1,358 → $2,068
  AI spend per employee (2025 → 2026); Uber's $150–250 average and $500–2,000 power-user monthly
  spend per engineer on one coding agent.
- Dispersion is the dominant fact: more than half of surveyed firms plan to spend $200 or less per
  employee on AI in 2026, while the top decile plans $2,800 or more. A single "40%" hides this.

## Original contribution

Confirmed by the author 2026-09-15 (items 1 and 2); items 3 and 4 remain proposals.

1. **First-hand token economics.** The author consumed 673.9 million tokens on Claude Opus 5
   in the 30 days to 2026-09-15 (97% of them cache reads), and about the same on OpenAI models, on
   flat-rate subscriptions of roughly $100/month each, typically using about 95% of each
   allowance. At Opus 5 list prices that month is about $540–600 — a real number no analyst
   report provides, and the difference between a bounded and an unbounded bill in one person's
   usage.
2. **A real baseline.** From fractional CTO work: IT cost per employee of roughly $200–300 a month
   at startups and $1,000–2,000 a month at enterprises, before AI. Against that baseline, one
   $100 Max subscription per employee is a 33–50% jump at a startup; the 40% in the thesis is not
   an abstraction, it is one subscription.
3. **The "lowest cost that solves the problem" stance.** Model selection framed as a cost
   engineering decision (routing, tiering, caching, effort caps) rather than a capability
   leaderboard, drawn from what the author has built. TODO(author): confirm what you can show.
4. **Continuity with the author's published work.** "The Economics of a Dying SaaS Market" argued
   that build cost collapsed; this piece is the counterweight: the run cost of AI-heavy work does
   not collapse with it.

## Scope

Proposed:

- What a per-employee IT cost is made of today and where AI spend sits in it.
- The two factors: unbounded token cost, and the file-to-compute shift in AI workload.
- Evidence that unit price declines do not offset volume growth (the "inference paradox").
- What to build now: workload-to-model matching, token budgets and monitoring, a cost-per-result
  view, and where routing to cheaper models is safe.
- Reported cases (Uber, Microsoft) as illustrations of what happens without those controls.

## Exclusions

Proposed:

- No model benchmark or leaderboard comparison; the argument is about cost structure, not which
  model is best.
- No vendor or gateway product comparison.
- No macro claims about AI infrastructure investment or data-centre economics beyond what is
  needed to explain enterprise inference cost.
- Headcount reduction as an offset is acknowledged, not argued: it is a separate article.

## Reader takeaway

The reader can estimate their own AI-inclusive IT cost per employee under a "file work" and a
"compute-first" scenario, and leaves with a short list of what to put in place before the second
scenario arrives: a way to route work to the cheapest adequate model, per-team token budgets with
monitoring, and a cost-per-result measure. A commercial call to action is optional and not planned.

## Research effort and dependencies

Desk research is done (see `research/`). Remaining effort is small and first-hand:

- Optional: the OpenAI usage figure from its dashboard, to replace the author's estimate.
- Permission to publish anonymized client-workspace figures, if the baseline is stated as observed
  rather than as a range.
- Optional: one conversation with a CIO or FinOps lead who has lived through an AI budget overrun.
- Effort limit: half a day after the above are in hand.

## Tracker

No tracker entry exists yet (author, 2026-09-15). `tracker_url` in `article.yaml` stays empty
until one is created; the check warns on it and will keep warning until it is set.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

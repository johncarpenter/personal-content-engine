# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

Desk research run 2026-09-15 (web search plus direct reads of primary pages where they allowed it;
Gartner, Goldman Sachs, Forbes, Axios and the Menlo PDF blocked the agent and are recorded from
secondary coverage — see `limitations` in `sources.yaml`). Everything below distinguishes what was
found from what could not be verified.

## Questions that must be answered

1. **What is the baseline?** What does IT cost per employee today, and for which kind of company?
   No free public cross-industry figure was found. The widely quoted "$9,000–14,000 per FTE" is a
   modelled estimate from an SEO calculator site, not a survey, and should not be cited. The real
   number sits in Avasant/Computer Economics `[src:source-034]` (paywalled) or in the author's own
   client workspaces. **Without a baseline the 40% cannot be computed.**
2. **What is the numerator?** "AI cost" means different things in every source: the Atlanta Fed
   bundles software, hardware, training and IT staff `[src:source-010]`; Zylo counts AI-native
   application subscriptions `[src:source-017]`; Uber and Microsoft are one coding tool's tokens
   `[src:source-021]`, `[src:source-022]`. The article has to define its own line items.
3. **Additive or substitutive?** Does AI spend land on top of existing IT cost per employee, or
   replace SaaS seats, contractors and headcount? Evidence points both ways (see Disconfirming).
4. **Which reader?** Budget owner or builder. The evidence supports either article; the framing,
   examples and depth differ.

## Assumptions to test

| Assumption in the brief | Status after desk research |
|---|---|
| Token spend per employee rises and keeps rising once pricing is unbounded | **Supported** in direction: Gartner's fivefold-per-workflow prediction `[src:source-003]`, Goldman's 24x token volume `[src:source-004]`, IDC's thousandfold call load `[src:source-005]`, Uber/Microsoft `[src:source-021]`, `[src:source-022]`, and the per-seat-to-consumption shift `[src:source-032]`. Magnitude per employee is not established anywhere. |
| Current use is mostly files and simple data; the shift to compute-first work is coming | **Partly supported.** Anthropic's index shows explanations, documents/reports and guidance as the top outputs `[src:source-028]`; McKinsey shows chatbots scaled by 47% versus ~20% for agents `[src:source-029]`. Gartner forecasts 40% of enterprise apps with task-specific agents by end 2026 `[src:source-027]`. Whether the shift happens broadly, and when, is a forecast. |
| Compute-first work needs far more tokens per task | **Supported**, with a wide range: Gartner ≥5x `[src:source-003]`; Deloitte >100x for long-thinking inference vs summarizing an email `[src:source-007]`; Stanford/MIT ~1000x for agentic coding vs code chat `[src:source-006]`. |
| Falling token prices do not offset the volume increase | **Supported by analysts, contested by the price data.** Epoch AI: 9x–900x per year price decline at fixed capability `[src:source-008]`. Gartner argues each capability generation spends more, and more expensive, tokens faster than prices fall `[src:source-003]`. The two are consistent only if enterprises keep buying the frontier — which the Uber/Microsoft cases suggest they do. |
| IT cost per employee could jump ~40% | **Not supported by any source found; not contradicted either.** Nearest datapoints: Deloitte tech spend ~6% → ~8% of revenue in two years, a one-third rise in the whole tech budget `[src:source-011]`; Atlanta Fed AI spend per employee +50% year over year, from a low base `[src:source-010]`; ETR AI share of IT budget 12.1% → 14.2% `[src:source-019]`. A 40% jump in per-employee IT cost is plausible for top-decile, knowledge-work-heavy firms and implausible for the median firm (over half plan ≤$200 per employee). |
| Without frameworks and monitoring you end up throwing money at it | **Supported by correlation, not causation.** Overrun rates of 43–79% across four surveys `[src:source-012]`, `[src:source-014]`, `[src:source-015]`, `[src:source-016]`; only 44% have financial guardrails `[src:source-025]`; only 5% confident in production visibility `[src:source-014]`; 78% hit unexpected AI/consumption charges `[src:source-017]`. KPMG (second-hand) reports 3x ROI where AI cost accountability exists `[src:source-016]`. No source shows that guardrails *prevent* overruns; DoiT finds mature FinOps shops overrun *more*, because they run bigger programmes and can see it `[src:source-015]`. |
| "Which model solves my problem at the lowest cost" beats "which model is best" | **Supported in principle** (RouteLLM: large cost cuts at 95% of GPT-4 quality on benchmarks `[src:source-031]`; Gartner's "cost-per-result" framing `[src:source-003]`). No enterprise-scale published result found; the savings hinge on routing accuracy. |

## Evidence needed for the central claims

- **Claim: AI-inclusive IT cost per employee rises materially.** Needs a baseline per-employee IT
  cost for a named company type, plus a defined AI line (seats + tokens + platform), for at least
  one real organization. Best source: the author's own client workspaces, anonymized. Second best:
  Avasant per-user benchmark `[src:source-034]` plus the Atlanta Fed top-decile figure
  `[src:source-010]`.
- **Claim: token spend keeps rising.** Analyst forecasts `[src:source-003]`, `[src:source-004]`,
  `[src:source-005]` plus reported cases `[src:source-021]`, `[src:source-022]` and pricing-model
  shift `[src:source-032]`. Would be far stronger with the author's own month-over-month token
  bill.
- **Claim: work is moving from files to compute.** Usage composition today `[src:source-028]`,
  `[src:source-029]`; agent adoption forecasts `[src:source-027]`; per-task multipliers
  `[src:source-006]`, `[src:source-007]`.
- **Claim: build the cost structure now.** Overrun and visibility surveys (above); cases where the
  response was to cut the tool `[src:source-022]` or seek supplemental funding `[src:source-012]`;
  routing evidence `[src:source-031]`.

## Candidate sources

Confirmed sources are in `sources.yaml` (34 entries). Still to obtain:

- **Author's first-hand data (highest value):** monthly Claude Code / API token spend by workload
  type for the author and, with permission, anonymized per-workspace figures across fractional CTO
  clients. The voice guide already records a 30-day session log; that is the seed.
- **A real baseline:** one client's IT cost per employee, anonymized, or the Avasant chapter.
- **Primary pages the agent could not open:** Gartner 2026-08-17 release, Goldman Sachs article,
  Forbes (Uber; Green column), Axios 2026-04-26 "AI can cost more than human workers now".
- **Second-hand figures to trace to origin before use:** RBC 91% net-new `[src:source-020]`;
  KPMG Global AI Pulse figures `[src:source-016]`; Bain n=951 `[src:source-018]`; Gartner 44%
  guardrails `[src:source-025]`; McKinsey scaling percentages `[src:source-029]`; RouteLLM 85%
  `[src:source-031]`; the "73% of AI projects blow budget" figure attributed to FinOps Foundation
  (not on the report page `[src:source-013]`).
- Optional interview: a CIO or FinOps lead who has lived an AI overrun.

## Disconfirming evidence

What would show the thesis is wrong, and what was found:

- **Unit prices fall faster than volume grows.** Epoch AI's 9x–900x per year decline
  `[src:source-008]`, a16z's 10x per year `[src:source-009]`. If an organization pins a capability
  level instead of chasing the frontier, its per-task cost collapses. Gartner's counter is that
  nobody pins `[src:source-003]`. The article should say this plainly rather than bury it.
- **AI spend substitutes rather than adds.** Redpoint: 45% of CIOs fund AI from existing software
  lines, 54% consolidating vendors `[src:source-018]`; ETR: AI share of IT budget rising while
  total IT budgets grow 3.6% `[src:source-019]`; Atlanta Fed: expected hiring reductions of about
  1% `[src:source-010]`; Gartner CFO headcount growth expectations 6% → 2% (third-hand,
  `[src:source-018]`). If headcount falls, cost *per employee* rises even when total cost does not
  — the metric itself can mislead. Against this: RBC's 91% net-new `[src:source-020]`.
- **Most firms are not spending much.** Over half plan ≤$200 per employee `[src:source-010]`; 89%
  of tech leaders allocate ≤25% of tech budget to AI `[src:source-011]`. A 40% jump is a
  top-decile story.
- **Agentic spend may not scale.** Gartner: over 40% of agentic projects cancelled by end 2027
  `[src:source-026]`; MIT NANDA: 95% of pilots show no P&L return in six months
  `[src:source-033]`; Deloitte: 42% report low or no AI ROI `[src:source-011]`. Microsoft's
  response to overrun was to cut the tool, not fund it `[src:source-022]`.
- **Governance does not visibly prevent overruns.** DoiT: mature FinOps organizations overrun
  more `[src:source-015]`. The honest framing is that governance makes overruns *visible and
  decidable*, not that it prevents them.

Recorded as "no evidence found", not "evidence against": no source quantifies per-employee token
spend for non-engineering roles; no source measures the file-to-compute shift over time.

## Effort limit

Proposed: desk research stops here. One further day after the author supplies first-hand numbers,
to reconcile them with the benchmarks and trace the second-hand figures listed above. No further
searching for a public per-employee baseline; it is paywalled or in the author's own data.

## Notes

- **The 40% intuition has a defensible form.** Take the Atlanta Fed top-decile AI spend
  ($2,800+/employee/year, 2026 planned) `[src:source-010]` against a knowledge-work IT baseline in
  the low five figures per employee and the AI line alone is 20–30% on top; add the token growth
  the analysts forecast and 40% within two to three years is a scenario, not a stretch. But every
  input is either paywalled, self-reported, or a forecast. The article should present it as a
  model with the reader's own inputs, not as a finding.
- **Per-engineer cases are the vivid version.** $500–2,000 per engineer per month
  `[src:source-021]` is $6,000–24,000 per year on one tool, which is the whole of many
  per-employee IT budgets. That is what "unbounded" looks like in practice.
- **Gartner's inference paradox is the article's spine** `[src:source-003]`: cheaper tokens fund
  more ambitious workflows, which spend more tokens on pricier models, so cost per task rises even
  as price per token collapses. It is the same Jevons-style argument the author made about cloud.
- **Stanford/MIT paper's most useful finding** is not 1000x but that human-rated difficulty barely
  predicts token cost and models cannot predict their own spend `[src:source-006]`. That is the
  argument for measuring rather than estimating.
- **Two survey findings pull against the "control it" prescription.** Retool: faced with a 20% cost
  rise, only 15% would push teams to use less; 43% push adoption wherever value exists
  `[src:source-014]`. The reader's real question is how to spend *well*, not how to spend less.
- **Vocabulary check against `brand/voice.md`:** avoid "leverage", "best practices", "disruption",
  "AI-powered". Name tools and models (Claude Code, GitHub Copilot CLI, specific model tiers)
  rather than "AI tools".

## Remaining gaps

| Gap | Decision proposed |
|---|---|
| No per-employee IT baseline | **Resolve** — author's client data or Avasant chapter; otherwise the 40% becomes a worked example with stated inputs |
| No first-hand token spend data | **Resolve** — author's own logs; this is the original contribution |
| Gartner / Goldman / Forbes primaries unread | **Resolve** — author opens them in a browser and confirms quotes |
| RBC, KPMG, Bain, Gartner-44%, McKinsey, RouteLLM figures second-hand | **Resolve or cut** — trace each or drop it |
| Additive vs substitutive spend unresolved | **Disclose** — present both survey results and say the per-employee metric rises either way if headcount falls |
| Timing of the file-to-compute shift | **Disclose** — forecast, with the Gartner cancellation prediction as the counter |
| "73% blow budget" FinOps figure unlocated | **Cut** unless found on the report |

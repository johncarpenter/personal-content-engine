# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

Drafted 2026-09-15 as a proposal. The thesis is the author's; the section order and evidence
mapping are a suggestion for the author to reshape.

## Argument in one sentence

Provisional: once AI moves from per-seat subscriptions to metered tokens and from summarizing files
to doing work, IT cost per employee stops being a stable number, and the only companies that will
control it are the ones that built the routing, budgets and measurement before the bill arrived.

Alternative angles the evidence would also support (author's choice):

- **The model, not the number.** Drop the 40% headline; give the reader a per-employee cost model
  with two scenarios (file work, compute-first work) and let them see their own number.
- **The top decile is the preview.** Uber and Microsoft engineers at $6k–24k per year on one tool
  are what every knowledge worker's AI line looks like in three years; plan for that.
- **The inference paradox for CFOs.** Explain why cheaper tokens produce bigger bills, and what a
  budget owner can actually govern.

## Sections

- **Open on a real bill** — 673.9 million Opus 5 tokens in 30 days on a ~$100 subscription,
  97% of them the agent re-reading its own context, and the same month at API list price: about
  $540–600 (working in `research/notes.md`). Establishes the problem in numbers before any forecast, and
  introduces bounded versus unbounded pricing in one paragraph. Evidence: `[src:source-035]`,
  `[src:source-037]`, `[src:source-038]`. Visual: none, or a two-line table.
- **What IT cost per employee is made of, and where AI sits today** — the baseline and the
  current AI line. Evidence: `[src:source-036]` (author's observed $200–300 startup,
  $1,000–2,000 enterprise per month, before AI), `[src:source-010]`
  (dispersion: half ≤$200, top decile ≥$2,800), `[src:source-011]` (89% allocate ≤25% to AI),
  `[src:source-019]` (AI 14.2% of IT budgets). Point: today's AI line is small and per-seat for
  most companies — which is why the next two sections matter.
- **Factor one: unbounded tokens** — per-seat pricing is converting to consumption
  `[src:source-032]`, including Anthropic metering agent tools at API rates from June 2026
  `[src:source-021]`; what happened at Uber and Microsoft `[src:source-021]`, `[src:source-022]`,
  `[src:source-023]`; the forecasts `[src:source-004]`, `[src:source-005]`; Gartner's own word
  for the default outcome is "unbounded costs" `[src:source-003]`. Point: once the price is per
  token, the spend follows usage, and usage only goes up.
- **Factor two: from files to compute** — what AI is used for today `[src:source-028]`,
  `[src:source-029]`; what changes when agents do the work `[src:source-027]`; what that costs per
  task `[src:source-007]`, `[src:source-006]`, `[src:source-003]`. Point: the token multiplier per
  task is somewhere between 5x and 1000x depending on the work, and nobody can predict it in
  advance.
- **The objection: but tokens are getting cheaper** — handled head-on. Epoch AI and a16z on price
  declines `[src:source-008]`, `[src:source-009]`; Gartner's inference paradox as the reply
  `[src:source-003]`. Point: prices fall for fixed capability; enterprises buy the frontier.
  Visual: `figure-01` — price per token at fixed capability versus cost per agentic workflow, two
  lines diverging (provide evidence / explain). Data sourcing TODO: needs actual series, not
  illustrative curves.
- **The state of control today** — overrun rates `[src:source-012]`, `[src:source-014]`,
  `[src:source-015]`; visibility and guardrail gaps `[src:source-014]`, `[src:source-016]`,
  `[src:source-025]`, `[src:source-017]`. Point: most organizations found out from the invoice.
- **What to build now** — the author's practitioner section. Workload-to-model matching (the
  cheapest model that solves the problem) `[src:source-031]`, backed by Gartner's "no reliable,
  economical one-size-fits-all model on the horizon" and Emme's "the right model runs the right
  task" `[src:source-003]`, `[src:source-023]`; incentives — Uber's and Amazon's usage
  leaderboards as the anti-pattern `[src:source-021]`, `[src:source-023]`; per-team token budgets that are
  checked and adjusted `[src:source-014]`; cost per result rather than cost per token
  `[src:source-003]`; measurement over estimation `[src:source-006]`. Show the actual setup: the
  routing rule, the budget, the dashboard. Evidence: TODO(author) what the author has actually
  built. Visual: `figure-02` — the author's workload-to-model tiering, as a table or diagram
  (explain).
- **The per-employee model** — a fill-in table: baseline IT cost, per-seat AI, token spend under
  file-work and compute-first scenarios, resulting per-employee cost and percentage change. Worked
  with the author's inputs (`research/notes.md`, "The 40% against the author's own baseline"):
  at a $250/month startup baseline one $100 subscription is +40% and an average Uber engineer on
  metered pricing is +60% to +100%; at a $1,500 enterprise baseline one subscription is +7%, an
  average metered engineer +10% to +17%, a power user +33% to +133%, and the author's own usage
  at list price about +37%. Evidence: `[src:source-035]`,
  `[src:source-036]`, `[src:source-021]`, `[src:source-037]`. Visual: the table itself, inline
  Markdown.
- **Close** — what the reader does this budget cycle. No commercial call to action planned.

## Objections to address

1. **"Token prices are collapsing; this solves itself."** Handled in the objection section:
   `[src:source-008]` versus `[src:source-003]`. Concede that pinning a capability level does
   collapse cost; observe that almost nobody pins.
2. **"AI spend replaces SaaS seats and headcount, so the total is flat."** Handled in the baseline
   section: `[src:source-018]`, `[src:source-019]` versus `[src:source-020]`. Concede substitution
   is real; note that if headcount falls, cost *per employee* rises anyway, and say the metric can
   mislead.
3. **"Most companies spend almost nothing on AI."** Concede with `[src:source-010]`; reframe the
   top decile as the preview, not the exception.
4. **"Agentic projects will be cancelled, not scaled."** `[src:source-026]`, `[src:source-033]`,
   `[src:source-011]`. Concede; argue the ones that survive are the ones with cost structure, which
   is the thesis.
5. **"Governance doesn't prevent overruns."** `[src:source-015]`. Concede; the claim is that it
   makes them visible and decidable, and that the alternative (Microsoft cutting the tool) is
   worse.
6. **"Capping tokens kills the value."** `[src:source-014]` (leaders push adoption anyway). Agree;
   the prescription is routing and budgets by workload, not caps.

## Visuals

- `figure-01` — price per token at fixed capability versus cost per agentic workflow, diverging.
  Purpose: provide evidence / explain. Needs real series; if none can be sourced, cut it rather
  than draw an illustrative curve.
- `figure-02` — the author's workload-to-model tiering. Purpose: explain. From the author's own
  setup.
- Per-employee cost model — inline Markdown table, not an image.
- Hero image — TODO(author): `brand/visual-style.md` has no palette, format or AI-imagery policy
  yet; previous articles used an AI-generated abstract header. Needs explicit approval per article
  until the policy is written.

## Open gaps

- Baseline is a practitioner range, not a survey — disclose as such.
- Primary Gartner, Goldman and Forbes pages unread by the agent — author pulling them.
- Seven second-hand figures to trace (listed in `research/notes.md`) — resolve or cut.
- Reader confirmed (tech leader, CEO, CFO deciding how to deploy AI); pillar still the author's
  call.
- The article's evidence supports "costs will rise and are unpredictable" more firmly than it
  supports any specific percentage. If the author wants the 40% in the title, the article has to
  own it as the author's estimate.

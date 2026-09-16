TODO(author): AI-assisted first draft, 2026-09-16, written at your request from `brief.md`, `outline.md`, `research/notes.md` and `research/sources.yaml`. Every number carries a `[src:]` marker and nothing is verified beyond what `sources.yaml` records. Treat it as scaffolding in your voice, not as your prose: replace what is not yours, resolve or cut each `TODO`, and convert the markers to citations before Gate 2.

Last month I used 673.9 million tokens on Claude Opus 5.

That is Claude Code's own count for the 30 days to September 15: 41 sessions over 19 working days, the longest of them a little over 20 hours, working the way I work now, which is one or two agent flows at a time, not a fleet. I paid about $100 for it, on a Claude Max subscription, and I used roughly 95% of the allowance. I ran a similar volume through OpenAI's models on a similar plan, though that one is an estimate rather than a count. [src:source-035] [src:source-038]

Priced at Anthropic's list rates instead of the subscription, the same month costs about $540 to $600. [src:source-037] [src:source-035]

| Bucket | Tokens | List rate per million | Cost |
|---|---|---|---|
| Fresh input | 16.9k | $5.00 | under $1 |
| Output | 4.4M | $25.00 | about $110 |
| Cache read | 653.0M | $0.50 | about $327 |
| Cache write | 16.5M | $6.25 to $10.00 | about $103 to $165 |
| **Total** | **673.9M** | | **about $540 to $600** |

TODO: the cache-write rates ($6.25 for a five-minute cache, $10 for one hour) are taken from the arithmetic in `research/notes.md`; confirm both appear on the pricing page before publication [src:source-037].

TODO(author): the stats view reports Opus 5 as the most-used model; confirm whether all 673.9M tokens were Opus 5 or whether some ran on Sonnet or Haiku, because the list-price total assumes Opus.

Two things in that table matter more than the total. First, 97% of the tokens are cache reads: the agent re-reading its own context so it can take the next step. What I typed is a rounding error. What the model wrote back is about a fifth of the bill. The cost of agentic work is the cost of remembering, not the cost of answering. Second, the subscription absorbed five to six times its own price in usage. That is not a flaw in Anthropic's pricing; it is how flat-rate plans work. They are priced for the median user, and the heavy users are subsidized by everyone else. Forbes reports that GitHub had been carrying up to eight times the subscription value for its heaviest Copilot users before it moved to usage billing this year. [src:source-023]

Hold on to those two facts. They are most of this article.

## The Number You Already Budget Against

If you run technology for a company, you have a number you understand: IT cost per employee. Laptops, licences, support, cloud, security, the help desk. Across the client workspaces I've worked in as a fractional CTO it runs about $200 to $300 per employee per month at startups and $1,000 to $2,000 at enterprises, before any AI spend. [src:source-036] That is a practitioner's range from a handful of companies, not a survey, and what sits inside it varies, but it is the shape of the number your CFO already plans around.

TODO(author): confirm you are comfortable publishing the $200 to $300 / $1,000 to $2,000 range as observed across (anonymized) clients, or restate it as a rougher band.

Then there is the AI line. For most companies it started as a few per-seat subscriptions and it is still small. The Atlanta Fed's CFO survey puts employment-weighted AI spend at $1,358 per employee in 2025 and $2,068 planned for 2026, but more than half of firms plan to spend $200 or less per employee this year, while the top 10% plan $2,800 or more. [src:source-010] Deloitte finds 89% of technology leaders putting no more than a quarter of their technology budget into AI. [src:source-011] ETR has AI's share of IT budgets at 14.2%, up from 12.1% a year earlier, while the budgets themselves grow 3.6%. [src:source-019]

So the honest starting position is: small line, per-seat pricing, wide dispersion. The median firm is spending the price of a laptop bag per employee on AI.

My expectation, and the argument of this piece, is that the line is about to stop being small and stop being predictable, for two reasons. The unit of pricing is moving from the seat to the token, so the bill follows usage instead of headcount. And the usage is moving from reading and writing files to doing work, which takes more tokens per task than anyone can estimate in advance. Put the two together and I think IT cost per employee at AI-heavy companies rises on the order of 40%. I'll show where that number comes from further down. It is my estimate, it hides more than it reveals, and it is not a guess.

## Factor One: The Price Becomes Unbounded

Per-seat pricing is bounded. Ten people, ten seats, one line in the budget, and the worst case is that nobody uses it. Token pricing has no worst case.

Uber found this out in four months. It rolled Claude Code out to roughly 5,000 engineers in December 2025. By February 32% of engineers were classed as agentic coding users; by March it was 84%, and about 70% of committed code was coming from AI tools. Monthly cost per engineer averaged $150 to $250, with power users at $500 to $2,000. The CTO, Praveen Neppalli Naga, reported spending $1,200 himself in a two-hour session. By April the company had exhausted its entire 2026 AI budget, and Naga told The Information that Uber was back to the drawing board on its assumptions. [src:source-021]

Two details in that story matter more than the headline. Uber ran internal leaderboards ranking engineers by Claude Code usage, which Forbes describes as a cultural incentive to consume more tokens. And, in the reporter's words, the teams driving adoption were not the same teams managing the spend. [src:source-021] Amazon reportedly ran a similar leaderboard, KiroRank, and took it down after employees started burning tokens on meaningless tasks to climb it. [src:source-023] Uber's COO, Andrew Macdonald, is reported as saying publicly that token usage didn't correlate directly with useful features shipped. [src:source-023]

TODO: the Amazon leaderboard and the Macdonald statement are from an opinion column that does not name its sources; trace both to their origin or attribute them as "reported by Forbes" only.

Microsoft's Experiences and Devices division reportedly went the other way: it discontinued Claude Code licences by the end of June and moved engineers to GitHub Copilot CLI. Fortune and The Information attribute the move to cost; Microsoft did not confirm that explanation, and Microsoft has an obvious interest in its own tool. [src:source-022]

These are not isolated pricing accidents. The vendors are moving the whole market the same way. GitHub moved Copilot to usage-based billing on June 1: the Business and Enterprise seats now include a matching credit allowance, and usage beyond it is billed on token consumption at listed model rates. [src:source-032] On May 13 Anthropic announced that subscribers would get a separate monthly credit meter for agent tools and third-party harnesses, billed at full API rates from June 15. [src:source-021] Zylo's index reports that 78% of IT leaders have already seen unexpected charges tied to AI features or consumption pricing. [src:source-017]

TODO: the GitHub billing details in `[src:source-032]` were taken from search summaries; verify against the GitHub post before citing.

Gartner has a word for what happens when you default to the most capable model for everything and let usage run: "unbounded costs orders of magnitude higher than those of optimized product ecosystems." [src:source-003] Gartner is talking to product leaders building AI products, so its "provider inference cost" is the vendor's bill rather than yours. The mechanism is the same on the buying side. Once the price is per token, spend follows usage, and usage only goes one way.

## Factor Two: From Files to Compute

Look at what AI is actually used for today and it is mostly files. Anthropic's own economic index reports that the most common outputs on Claude are explanations (17% of conversations), documents and reports (15%) and guidance (11%). [src:source-028] McKinsey's global survey finds chatbots the most widely scaled AI tool, with 47% of respondents scaling them across the enterprise, against about two in ten scaling agents. [src:source-029] Read this, summarize that, draft the other. Bounded tasks, bounded tokens.

TODO: the McKinsey percentages came from search summaries, not the report; verify before publication [src:source-029].

The next phase is agents doing the work rather than describing it. Gartner predicts 40% of enterprise applications will feature task-specific agents by the end of 2026, up from under 5% in 2025. [src:source-027] At Uber, 11% of live backend updates were already being written by agents with no human in the loop. [src:source-021] The same index that shows Claude mostly writing documents also shows Claude Code sessions running at materially higher autonomy than chat. [src:source-028]

What does that do to tokens per task? Every estimate I can find points the same direction and none of them agree on the size:

- Gartner: routing a task to an agentic reasoning model costs at least five times a basic chatbot interaction, "and often much more as task complexity grows". [src:source-003]
- Deloitte: long-thinking inference uses more than 100 times the compute of a simple task like summarizing an email. [src:source-007]
- A Stanford and MIT team that traced eight frontier models through SWE-bench tasks found agentic coding consumes roughly 1,000 times the tokens of code chat, with input tokens dominating the cost. [src:source-006]
- Goldman Sachs' semiconductor analyst describes agentic AI as taking a chatbot request and "blowing it up 10-fold, 20-fold, 50-fold", and forecasts token consumption multiplying 24 times between 2026 and 2030. [src:source-004]
- IDC predicts G2000 agent use rises tenfold by 2027 and token and API call loads a thousandfold. [src:source-005]

The Stanford and MIT paper has a finding I think matters more than any multiplier. Runs of the same task differed by up to 30 times in total tokens, human-rated difficulty only weakly predicted cost, and the models underestimated their own token usage. [src:source-006] Nobody can price a compute-first task in advance. Not the vendor, not the model, not you.

My own bill is the small version of this. A month of agentic work was 97% cache reads. That is what "doing the work" looks like in tokens: not a longer answer, but the agent re-reading everything it knows, on every step, for hours.

## But Tokens Are Getting Cheaper

They are, and dramatically. Epoch AI measured the price of reaching a fixed benchmark score falling between 9 and 900 times a year depending on the task; GPT-4-level performance on MMLU went from $37.50 to $0.18 per million tokens in under two years. [src:source-008] a16z put the trend at roughly 10 times a year. [src:source-009] Goldman has chip cost per inference token falling 60% to 70% a year. [src:source-004]

So why did Uber's bill go up? Because nobody buys last year's capability. Gartner calls this the inference paradox: "tokens are becoming more cost-efficient, but not as quickly as AI capabilities and the costs associated with those capabilities are increasing." Each generation needs more tokens, and more expensive ones, and "the rate of innovation is outpacing the cost curve". Its prediction is that inference cost per agentic workflow rises more than fivefold through 2028 even as unit prices fall. [src:source-003] One Forbes column claims that roughly 95% of enterprise AI usage still runs on the costliest frontier models, even for work that doesn't need them. [src:source-023]

TODO: the 95% frontier-model share is unattributed in the Forbes column; find the origin or cut the sentence.

I'll concede the strong version of the objection. If you pin a capability level, decide that this year's Sonnet is good enough for a given job and stop upgrading it, your cost per task on that job collapses. Almost nobody pins. I didn't: I ran a month of Opus because it was the best model available and the subscription made the marginal token free. Price per token is falling. Price per unit of work you actually want done is not, because the unit of work keeps getting bigger.

TODO(author): confirm that reading of your own behaviour, or replace it with what you actually did about model choice.

## Where Control Stands Today

Most organizations found out from the invoice. Futurum's survey of CIOs has 46.9% of enterprises over their AI budget and 5.6% under, with overruns driven by prompt volume, inference demand, model changes and broader deployment; nearly half of those over budget went looking for supplemental funding. [src:source-012] Retool's survey of 101 technology leaders has 43% spending more than they budgeted and only 5% confident in their visibility into AI-generated tools running in production. [src:source-014] DoiT's survey of 500 finance leaders has 79% reporting overruns in the past year. [src:source-015] Flexera finds only 31% with accurate visibility into their AI software. [src:source-016] A Gartner survey reported by MarketScale found only 44% had adopted financial guardrails or AI FinOps practices at all. [src:source-025]

TODO: the Gartner 44% figure is second-hand; locate the Gartner release or session record, or cut it.

Here is the finding that keeps me honest about the prescription that follows. DoiT found that organizations with mature FinOps reported the highest overruns: 89%, with a mean overspend of 30.9%. Its explanation is that they run bigger programmes and can see the spend. [src:source-015] Governance does not prevent the overrun. It makes the overrun visible and decidable, which is the difference between Uber's "back to the drawing board" and Microsoft's "stop using the tool". The FinOps Foundation reports that 98% of FinOps teams now manage AI spend, up from 31% two years ago. [src:source-013] The discipline is arriving, but after the bills did.

## What to Build This Budget Cycle

The question I hear most from leaders deploying AI is "which model is best?" I think that is the wrong question and it is the one that produces unbounded bills. The question is "which model solves this problem at the lowest cost?" Gartner puts it flatly: "There is no reliable, economical one-size-fits-all model on the horizon." [src:source-003] Lisa Emme of Inversion AI puts it better: "The winners this decade won't run the biggest model. They'll have built systems where the right model runs the right task." [src:source-023]

Four things follow from that, and I'd build them before the compute-first work arrives rather than after.

**Route work to the cheapest adequate model.** The price gap is large. At list, Opus 5 is $5 per million input tokens and $25 output; Sonnet 5 is $2 and $10; Haiku 4.5 is $1 and $5. [src:source-037] Most of the work that flows through an organization does not need the top tier, and an academic router trained on preference data was able to send most queries to the cheaper model while keeping most of the quality on public benchmarks. [src:source-031] The savings depend entirely on how well the router judges your traffic, so this is a measurement problem as much as an architecture one.

TODO: verify the RouteLLM figures against the paper before quoting a number; the current source entry was written from memory [src:source-031].

TODO(author): show your own workload-to-model tiering here, as a table or `figure-02`. The brief says "confirm what you can show"; the outline plans this as the article's practitioner evidence and right now the section rests on Gartner, Emme and a two-year-old paper.

**Give teams token budgets, and check them.** Not caps. Retool's respondents describe per-team token allocations that are reviewed and adjusted, and the same survey found that faced with a 20% cost rise only 15% of leaders would push teams to use less while 43% would push adoption wherever it creates value. [src:source-014] I think that is the right instinct. The failure at Uber was not that engineers used too much; it was that the people driving usage and the people owning the budget never met. [src:source-021] A budget somebody owns, per team, reviewed monthly, is the smallest structure that puts them in the same room.

TODO: confirm the 15% and 43% figures are in the Retool piece and add them to its `supports` list [src:source-014].

TODO(author): anything you have set up for a client here, even a spreadsheet, is worth more than the survey.

**Measure cost per result, not cost per token.** Gartner's framing is that reasoning agents have to earn "exponentially higher returns relative to basic models" or be tiered and routed. [src:source-003] Macdonald's reported remark that Uber's token usage didn't track features shipped is the same point from the other side. [src:source-023] Because the research says nobody can estimate agentic cost in advance, [src:source-006] the only honest method is to measure it after: cost per merged change, per resolved ticket, per closed report, by team and by model. Tokens are the input. Nobody funds inputs for long.

**Manage context, because that is the bill.** Ninety-seven percent of my tokens were the agent re-reading its own context. Cache reads are priced at a tenth of fresh input, [src:source-037] which is why the month cost hundreds rather than thousands, and it is also why the size and lifetime of what the agent carries around is the largest cost lever anyone in the organization controls. Shorter answers do nothing. Smaller, better-structured working sets do.

TODO(author): what you actually do about context: session length, what goes in `CLAUDE.md`, when you start fresh. Without it this paragraph is an inference from one bill.

## Your Number

Here is the arithmetic behind the 40%, with my inputs. Substitute yours.

| Baseline, per employee per month, before AI | One $100 subscription | Average Uber engineer, $150 to $250 | Me, at list price, about $550 | Uber power user, $500 to $2,000 |
|---|---|---|---|---|
| Startup, $250 | +40% | +60% to +100% | about +220% | +200% to +800% |
| Enterprise, $1,500 | +7% | +10% to +17% | about +37% | +33% to +133% |

Sources: baseline [src:source-036]; subscription price [src:source-038]; Uber figures [src:source-021]; my usage and list prices [src:source-035] [src:source-037]. Working in `research/notes.md`.

Read the table two ways. At a startup, the 40% is one $100 subscription per employee, today, before anyone touches metered pricing. At an enterprise, one person working the way I work, on metered pricing instead of a plan, adds about 37% to a $1,500 baseline. That is the 40%. It is not a forecast about the average company; the Atlanta Fed data says the median firm is nowhere near it. [src:source-010] It is what the top decile already looks like, and I think the top decile is the preview, not the exception. Forbes reports unnamed analysts expecting enterprise AI bills to rise another 30% to 50% as the subsidized pricing unwinds, [src:source-023] which is the same band from a different direction.

Two adjustments cut against it, and I want both on the page. First, some AI spend substitutes for other spend: Redpoint's survey has 45% of CIOs funding AI straight out of existing software lines and 54% consolidating vendors. [src:source-018] Against that, RBC's CIO survey is reported as finding 91% treating AI as entirely new budget. [src:source-020] I don't know which is closer to your company; you do. Second, if AI reduces headcount, cost per employee rises even when total cost is flat. The Atlanta Fed's executives expect hiring reductions of about 1% over the next year, [src:source-010] which is small, but it means the metric in the title can mislead in both directions, and I'd track total AI spend and cost per employee side by side rather than either alone.

TODO: the RBC 91% figure is second-hand with no sample or date; verify with RBC or cut it [src:source-020].

The strongest objection is that none of this scales. Gartner predicts over 40% of agentic AI projects will be cancelled by the end of 2027 on cost, unclear value or inadequate controls. [src:source-026] MIT's NANDA group found 95% of generative AI pilots showing no measurable P&L return within six months. [src:source-033] Deloitte has 42% of technology leaders reporting low or no AI ROI. [src:source-011] Goldman forecasts only 12% of knowledge workers using agentic AI by 2030. [src:source-004] I take all of that seriously. But look at what the cancellation reasons are: cost and unclear value. The projects that survive will be the ones that could see their cost per result and defend it. That is the thesis again, from the losing side.

## What I'd Do Before the Next Budget

Budget planning for 2027 is happening now. If I were sitting in that meeting I'd do three things.

Compute your own version of the table above with your baseline and your heaviest team's actual usage, and put the compute-first column in front of the CFO before it arrives on its own. Stand up per-team token budgets with a named owner and a monthly review, so the people driving adoption and the people funding it are the same people. And start measuring cost per result on the one workflow that matters most, so that when the agentic version of that workflow shows up costing five times as much, you can say whether it earned it.

The subscription era was kind to heavy users like me. I paid $100 for $550 of tokens and never thought about it. That is ending, for me and for your organization. The bill will track usage, the usage will grow, and the only thing you get to decide is whether you see it coming.

TODO(author): close in your own words; this one is a summary, not a position.

TODO: figure-01 (price per token at fixed capability versus cost per agentic workflow) needs real data series from `[src:source-008]` and `[src:source-003]`; cut it if none can be sourced rather than drawing an illustrative curve.

TODO(author): hero image. `brand/visual-style.md` has no AI-imagery policy yet; previous articles used an AI-generated abstract header and this one needs explicit approval per article until the policy is written.

Last week, Anthropic launched ten finance agent templates and announced that Citadel, BNY Mellon, Carlyle, and a 400-person hedge fund called Walleye Capital are all using Claude inside their spreadsheets. Not experimenting. Using. Walleye says 100% of their employees are on it.

I've been building financial models for years — DCFs, LBOs, comps tables, the whole toolkit. I've also been building AI systems professionally, which puts me in a strange position: I understand both why financial analysts are skeptical of AI tools and why the skepticism is about to become very expensive.

So I installed the Claude for Excel plugin, opened a model, and spent a week finding out what actually happens when you let an LLM into your workbook. This is what I learned.

## This Isn't ChatGPT

First, a clarification that matters. Most financial professionals who've "tried AI" uploaded an Excel file to ChatGPT, got back something that looked approximately right but was subtly wrong, and wrote the whole category off. Fair. That experience is bad.

Claude for Excel is a different thing. It's an add-in that runs inside your live workbook. It reads your formulas. It understands cell references across tabs. When you ask it to change an assumption, it modifies the cell and the formula dependencies hold — the same way they would if a colleague edited the model.

That distinction — working inside the live model versus working on a copy of your data — changes what's possible. You're not exporting a CSV to a chatbot and hoping it gets the context right. You're having a conversation with something that can see your entire workbook structure, including the formula chains you forgot you built three quarters ago.

The competitive landscape for anyone evaluating tools right now:

| Tool | How It Works | Best For |
|---|---|---|
| **Claude for Excel** | Add-in inside your workbook, reads formulas natively | Model building, formula analysis, scenario testing |
| **Copilot for Finance** | Microsoft 365 integration, connects to Dynamics 365/SAP | ERP reconciliation, month-end close, accounting |
| **ChatGPT + Code Interpreter** | Upload files, Python-based analysis in a separate environment | Data visualization, ad-hoc exploration |
| **Rogo** | Purpose-built finance platform (35,000+ professionals) | Institutional research, multi-source synthesis |

For investment analysis and financial modeling specifically, Claude for Excel is the most directly relevant tool available because it's the only one that works where you already work — inside the spreadsheet, with formula-level awareness.

## What I Actually Tried

<!-- AUTHOR NOTE: Replace/expand these with your specific examples. The more concrete and specific, the better. Screenshots would strengthen this significantly. -->

I started with something low-risk: asking Claude to explain a model I'd built months ago. A three-statement model with linked tabs — income statement, balance sheet, cash flow, plus a assumptions sheet driving everything. I'd forgotten half the logic.

Claude walked through the formula chain tab by tab, with cell-level citations. "Cell D14 on the Income Statement pulls revenue growth from Assumptions!B4, which feeds into the top-line calculation at D6..." It read the model better than I could have explained it myself. For any analyst who's inherited someone else's workbook — which is everyone — this alone is worth the install.

Then I pushed harder. Scenario testing: "What happens if revenue growth drops to 3% and COGS increases by 200 basis points?" Claude updated the assumptions, and the formulas cascaded correctly. It preserved every dependency. The model recalculated the way it should. I checked every output against what I'd get doing it manually. It matched.

Where it got interesting was model building. I asked Claude to build a comps table from a set of company financials. The structure was clean — appropriate metrics, reasonable formatting, formulas where they should be. But two of the multiples were wrong. Not dramatically wrong — the kind of wrong where you'd nod and move on if you weren't paying attention. Revenue multiples that were off by about 15% because Claude pulled a trailing figure where it should have used forward.

That's the moment I understood the tool's actual position in a financial workflow. It's a fast, capable first draft. It is not a calculator you can trust without checking.

## The Adoption Ladder

After a week of testing, I think there's a natural progression for financial analysts getting started. Each level builds trust before adding autonomy. Don't skip steps.

**Level 1: Explain and Audit**

Ask Claude to explain existing models. What does this formula do? Where does this input come from? Why is this cell throwing an error? Trace the logic across tabs. You're reading output, not using it — zero risk. Every analyst should be doing this today.

This is also where Claude earns your trust. You already know what the model does. You can verify whether Claude's explanation is right. That verification builds intuition for where the tool is accurate and where it drifts.

**Level 2: Scenario Testing**

Give Claude your model and ask "what if" questions. Change revenue assumptions, adjust discount rates, stress-test margin compression. Claude modifies the assumptions while preserving formula structure. You verify the outputs.

This is where the speed advantage becomes obvious. Running twenty scenarios that would take an afternoon takes minutes. The quality of each individual scenario is the same as manual — Claude is just changing inputs and letting your formulas do the math. The risk is low because the formula logic is still yours.

**Level 3: Draft and Build**

Ask Claude to build model components — a DCF template, an LBO structure, a comps table. It produces reasonable first drafts with formulas, not hard-coded values. You review every number and every formula reference.

This is where the earlier point matters: Claude builds fast, capable first drafts with occasional errors. The errors tend to be subtle — wrong time period for a metric, an assumption that should be forward-looking but isn't. Exactly the kind of thing an analyst catches in review, but only if they're actually reviewing.

**Level 4: Agent Workflows**

Multi-step processes: pull earnings data from connected sources, update the model, flag changes to the investment thesis, draft commentary. Anthropic's ten finance agent templates operate at this level — the pitch builder, earnings reviewer, model builder, and valuation reviewer are all Level 4 tools.

This level requires firm-level governance, not just individual judgment. Most of the institutional adopters — Citadel, BNY, Walleye — are operating here with compliance guardrails in place. Individual analysts should build a track record at Levels 1-3 before proposing Level 4 workflows to their teams.

## Where It Will Break You

I want to be specific about the failure modes, because vague warnings about "AI hallucination" aren't useful. Here's exactly where Claude fails in financial work:

**It fabricates plausible numbers.** This is the biggest risk. Claude can produce a revenue growth rate, a P/E ratio, or a discount rate that looks right, is formatted correctly, and is completely made up. Not random — plausible. That's worse than obviously wrong, because plausible numbers survive casual review. Every number that comes from Claude needs to be checked against a source document.

**Same prompt, different numbers.** Run the same analysis twice and you might get different results. LLMs are non-deterministic — there's randomness baked in. For most use cases this doesn't matter. For financial models where someone will ask "how did you get this number?", it matters enormously. "I asked Claude" without a verification trail is not an acceptable audit response.

**Circular references are hard.** Financial models frequently use iterative circular references — interest expense depends on debt, which depends on cash flow, which depends on interest expense. Claude struggles with these loops. It sometimes resolves them incorrectly or breaks the circularity in ways that change the model's behavior.

**No regulatory clarity.** SEC and FINRA haven't issued definitive guidance on using LLM-generated analysis in client-facing materials. Most institutional adopters are using Claude for internal analysis with review gates, not in materials that go directly to clients. If your compliance team hasn't approved this, start at Level 1 — nobody objects to using a tool that explains formulas.

**The benchmark tells the story.** On the Vals AI Finance Agent benchmark, Claude Opus 4.7 leads all models with a score of 64.37%. That's the best available — and it means the best model still fails roughly one in three complex financial tasks. This isn't a bug that will be patched next quarter. It's a fundamental characteristic of how these models work. Your workflow needs to be designed around verification, not around trust.

## The Verification Habit

If there's one practice that separates analysts who use AI well from analysts who get burned, it's this: never accept a number from Claude without checking it against a source.

Not some of the time. Every time.

Build the verification into your workflow as a mandatory step, not an afterthought. Some specific practices that work:

- **Spot-check ratios against filings.** If Claude gives you an EV/EBITDA multiple, pull the 10-K and calculate it yourself. Do this enough times and you'll calibrate when Claude is reliable and when it drifts.
- **Compare model outputs to known benchmarks.** If the model says a company's WACC is 4.2%, and you know the industry average is 9-11%, something went wrong. Claude won't flag this for you.
- **Keep a log for the first month.** Track where Claude was right and where it was wrong. You'll find patterns — specific task types where it's reliable and specific task types where it isn't.

The goal isn't to distrust the tool. It's to build a calibrated sense of where it's accurate. That calibration is what makes you faster over time — you learn which outputs to accept and which to verify more carefully.

## The Shift

The competitive dynamic here isn't "analysts who use AI versus analysts who don't." That framing assumes AI is optional and the choice is binary.

What's actually happening is that the floor is rising. When Walleye has 400 people using Claude and Citadel is building coverage models with it, the analyst at a competing firm who refuses to engage is falling behind — not because the tool is magic, but because it's a multiplier on the parts of financial work that are repetitive, mechanical, and time-consuming. Formatting. First-draft building. Scenario iteration. Error tracing.

The parts that aren't mechanical — judgment about what assumptions matter, intuition about whether a management team is credible, the ability to spot the subtle error in a comps table — those are more valuable than ever. AI makes the grunt work cheap. The human work becomes the differentiator.

Start at Level 1. Install the add-in and ask Claude to explain a model you already understand. Verify its explanation against your knowledge. Then move up the ladder at whatever pace makes sense for your workflow and your compliance environment.

The best analyst will be the one who verifies fastest. Not the one who trusts the most, and not the one who refuses to try.

---

*Claude for Excel is available as a [Microsoft Office add-in](https://claude.ai/claude-for-excel) — included with Claude Pro ($20/month) and all higher plans. Anthropic's finance agent templates are available at [anthropic.com/news/finance-agents](https://www.anthropic.com/news/finance-agents).*

*If you've tried AI tools in your financial workflow — or you're still skeptical — I'd like to hear about it. What worked? What didn't?*

---

## References

1. [Anthropic Finance Agents (May 5, 2026)](https://www.anthropic.com/news/finance-agents) — 10 agent templates, Claude for Excel GA, institutional endorsements from Citadel, BNY Mellon, Carlyle, Walleye, FIS, Travelers
2. [Vals AI Finance Agent Benchmark](https://www.vals.ai/) — Claude Opus 4.7 leads at 64.37%
3. [FinanceBench (Patronus AI, 2023)](https://arxiv.org/abs/2311.11944) — GPT-4-Turbo: 81% error rate on financial QA. Historical baseline for comparison.
4. [FinBen Benchmark (2024)](https://arxiv.org/abs/2402.12659) — 36 datasets, 24 financial tasks. LLMs struggle with advanced reasoning and forecasting.
5. [OffDeal Case Study](https://www.anthropic.com/customers/offdeal) — M&A advisory: buyer lists for ~$200 vs $12,000 traditionally
6. [Rogo Case Study](https://www.anthropic.com/customers/rogo) — 35,000+ finance professionals, 50,000+ queries/day
7. [Deloitte 2026 State of AI](https://www.deloitte.com/) — Worker AI access up 50% in 2025
8. [Accenture Banking Research](https://www.accenture.com/) — 73% of US bank employee time affected by generative AI

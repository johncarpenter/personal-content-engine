The average company spends $4,830 per employee per year on SaaS. For a 50-person team, that's nearly a quarter million dollars — and the number went up 22% last year alone. That's every company across every industry. No one is immune. 

But here's the thing: the subscription price isn't even the expensive part.

I've worked in leadership roles for years, and SaaS penetration has never been higher.  Each employee has dozens or more SaaS applications. Between Jira, ClickUp, Zoho Projects, Harvest, Slack, Teams, Gmail, Outlook, four calendar systems, and a constellation of smaller tools every organization is peppered with. I know personally, I used to start with forty-five minutes of opening tabs, copying context between systems, and trying to remember where the important thing was. Not building. Not thinking. Just navigating. That's a "feature" of SaaS, master one-task and do that well. 

But that forty-five minutes is a tax. And multiply that by 50. Multiple SaaS systems are a drain on productivity. 

## The Conformance Tax

One of the most expensive impacts of SaaS isn't the cost, it's the way that SaaS has decided HOW you are going to work. SaaS tools force you to change how you work, dictate the workflow for the team. That cost in terms of productivity is the SaaS **conformance tax**. 

It's the delta between how you naturally work and how your SaaS vendor tells you to work.

Jira doesn't just manage your tickets. It forces you to think in Jira's ontology — epics, stories, sprints, story points, a whole methodology baked into the product. You don't choose to organize work this way. You adapt to it because that's what the tool demands. If your team thinks in tasks and milestones, too bad. Jira thinks in Scrum.

This isn't unique to Jira. Salesforce imposes its object model on your sales process. HubSpot shapes your marketing around its funnel stages. Every SaaS tool arrives with opinions about how you should work, and you spend real time — often more than you realize — bending your workflow to fit.

The research backs this up. Productivity drops 20-40% in the first three months after adopting new enterprise software. Eighty percent of SaaS features go unused — not because they're bad features, but because they don't match how people actually work. Features that fit into existing workflows see 4.7x higher sustained usage than features that require you to change how you operate.

The conformance tax is invisible because nobody measures it. There's no line item for "hours spent adapting to a tool that wasn't designed for us." But if you've ever caught yourself manually maintaining a spreadsheet alongside a project management tool because the tool doesn't track what you actually need — that's the conformance tax.

## What SaaS Actually Costs

Let's look at what you're paying for the privilege of conforming.

Salesforce Enterprise runs $175 per seat per month. Jira Premium is $14.54 per user. HubSpot Marketing Pro costs $800 per month for three seats. Slack Business+ is $15 per user. Monday.com Pro is $19 per seat. These are the sticker prices. The real costs are higher.

Implementation adds 30-45% of first-year fees. Training a thousand-person org costs $200K-$500K. And the renewal? SaaS prices are rising four times faster than inflation — 12.2% versus CPI at 2.7% in 2024. Seventy-two percent of Salesforce's revenue growth last year came from price increases, not new customers. Nearly a third of SaaS contracts experienced shrinkflation in 2024 — features removed or usage caps tightened while the price held steady or went up.

True total cost of ownership, measured over three years, runs 3-5x the subscription price. Buyers miss 60-75% of total costs at the point of purchase. Meanwhile, 53% of licenses go unused. The average company runs 106 SaaS applications, and 70% of organizations report functional overlap between tools. Large enterprises waste $21 million per year on licenses nobody uses.

This is the visible part of the bill. The conformance tax sits on top of it, unmeasured.

## The Integration Tax

There's a third tax hiding behind the other two, and in many organizations it's the most expensive of all.

Every SaaS tool you add doesn't just cost its subscription — it adds integration complexity to every other tool in your stack. The math is combinatorial: 10 tools create 45 potential integration pairs. 100 tools create 4,950. The average enterprise manages nearly 900 applications, and only 29% of them are integrated. The rest are data silos.

Those silos are expensive. Salesforce estimates that disconnected data costs organizations $7.8 million per year in lost productivity. IDC puts the revenue impact at 20-30% annually. Employees spend five to twelve hours a week searching for information trapped in a system they don't have access to, or manually copying data between tools — what the industry politely calls "swivel chair integration."

IT teams spend 39% of their time building and maintaining integrations. That's four out of every ten engineering hours going to duct tape between vendor systems, not to building things that matter. And the integration platforms themselves are another SaaS expense: Zapier at scale runs $10K-$50K per year for a mid-size company. Enterprise integration platforms like MuleSoft carry a first-year total cost of $350K-$600K.

Here's what this looked like in practice for me. Three client workspaces, each with different tools, none talking to each other. My morning was the integration layer. I was the human Zapier — copying context from email to project tracker to Slack to calendar, cross-referencing across systems, trying to build a coherent picture from twelve data silos.

That's the integration tax. It compounds the conformance tax. And unlike the conformance tax, it gets geometrically worse with every tool you add.

## What Changed

In the first week of February 2026, $285 billion evaporated from global software stocks. Goldman Sachs compared it to the structural decline of newspapers. The catalyst wasn't a recession. It was a growing realization that the economics of building software had fundamentally changed.

The build side of the ledger collapsed.

Someone built a commercial vehicle document tracking system — authentication, database, email alerts, Stripe payments — in under two weeks, for $75 total. Thomas Landgraf archived his team's Jira instance and [replaced it with a 600-line Claude Code prompt](https://thomaslandgraf.substack.com/p/how-i-replaced-jira-with-a-600-line). Companies are replacing marketing automation platforms that cost $3,000 per month with AI agents that cost $200. A Retool survey of 817 customers found that 35% have already replaced at least one SaaS tool with something they built themselves. Seventy-eight percent expect to build more in 2026.

This isn't a tech curiosity. Garry Tan, the CEO of Y Combinator, says a quarter of the current YC batch has code that's 95% AI-written. The cost to prototype a functional business tool has dropped from six figures to a weekend. Not the cost to build Twitter — the cost to build the internal dashboard, the project tracker, the approval workflow, the specific tool that does the one thing your SaaS tool does poorly.

## The Sweet Spot Nobody's Talking About

The debate right now is framed as "SaaS versus build your own." That's the wrong framing. There's a third option emerging, and it's where the economics are most interesting.

It's AI-built custom software, and the model is simple: purpose-built tools, created with AI assistance in hours or days, hosted on simple cloud infrastructure that someone else manages. Not self-hosted on your own servers. Not a SaaS subscription with features you don't need. The middle ground.

The hosting costs are almost negligible. Railway charges $5 per month. Render starts at $7. Fly.io runs a small always-on instance for about $2 a month. A low-traffic internal tool with a database — the kind of thing that replaces a $50/seat/month SaaS tool — costs $5-25 per month to host. Total. Not per user.

|  | Traditional SaaS | AI-Built Custom |
|---|---|---|
| Monthly cost (10 users) | $500-1,750 | $5-25 hosting |
| Build time | 0 (buy) | 1-5 days |
| Conformance tax | High | Zero |
| Integration tax | N*(N-1)/2 pairs | One database |
| Maintenance | Vendor handles | You + AI |
| Feature fit | 20% used | 100% relevant |

It's straightforward,  [I wrote about it earlier this year](https://discontinuityai.substack.com/p/how-to-build-a-claw-that-wont-eat). That forty-five-minute morning ritual across twelve SaaS tools became a single markdown file produced by an automated system running on my laptop. ETL pipelines pull from email, calendars, project trackers, and meeting transcripts, normalize everything into markdown, and a Claude skill produces a morning briefing. One data store. One query surface. Zero swivel chair.

The conformance tax went to zero because I built the tool around how I actually work, not around someone else's product decisions. The integration tax went to zero because everything lives in the same directory. The SaaS bill dropped by the cost of the tools I stopped using.

## Where This Doesn't Work

I want to be clear about the limits, because the "SaaS is dead" takes are as wrong as the "SaaS is fine" takes.

Sridhar Vembu, the CEO of Zoho, put it well: show me the vibe-coded payroll system that handles tax compliance across fifty states and thirty countries. He's right. Nobody's replacing that. Don't build your own email server. Don't vibe-code your accounting system. Don't replace the SaaS tools that are genuinely better because the vendor has accumulated years of domain knowledge and customer feedback.

Arvid Kahl, who writes The Bootstrapped Founder, makes a fair point too: you can clone a product's features in an afternoon, but you can't clone the customer conversations and hard-won insights that made those features work for real people.

The kill zone is specific. It's horizontal SaaS tools where you use 20% of the features and spend more time adapting to the tool than the tool saves you. Project management. Simple CRM for a five-person team. Internal dashboards. Workflow automation. Approval flows. The tools where the conformance tax plus the integration tax exceeds the cost to build.

That's the decision framework. Not "should I build or buy?" but "does the conformance tax on this specific tool exceed the cost to build a replacement?" For your payroll system, no. For the project tracker you keep complaining about, probably yes.

## The Flip

SaaS was a bargain when building was expensive. You were buying pre-built functionality at a fraction of custom development cost, and the conformance tax — the cognitive overhead of adapting to someone else's ontology — was the acceptable price of admission.

That math worked for twenty years. It doesn't work for everything anymore.

The conformance tax didn't change. The integration tax didn't change. What changed is the other side of the ledger. When building a purpose-fit tool takes a weekend and costs $7 a month to run, the conformance tax of a SaaS tool that doesn't quite fit is no longer an acceptable trade. It's just a tax.

Look at your SaaS stack. Find the tool your team complains about most — the one where you maintain a side spreadsheet because the tool doesn't track what you need, the one where half the team has found workarounds, the one whose ontology you've been conforming to for years without questioning it.

That's your first candidate. The economics just changed.

---

*This is the first in a two-part series on how AI is changing the economics of software. Next up: [The Rise of Personal Software](https://discontinuityai.substack.com/) — what happens when building is so cheap that software becomes disposable.*

*If you've replaced a SaaS tool with something you built — or you're thinking about it — I'd like to hear about it. What was the tool, and what pushed you over the edge?*

---

## References

1. [Zylo 2025 SaaS Management Index](https://zylo.com/reports/2025-saas-management-index/) — $4,830/employee/year SaaS spend, 21.9% YoY increase
2. [Zylo 2026 SaaS Management Index](https://zylo.com/reports/2026-saas-management-index/) — $55.7M average org spend, 106 apps average, 53% license underutilization
3. [SaaS Prices Rising 4x Faster Than Inflation](https://www.softwareseni.com/why-saas-prices-are-rising-4x-faster-than-inflation/) — SoftwareSeni, 12.2% SaaS vs 2.7% CPI
4. [The Great SaaS Price Surge of 2025](https://www.saastr.com/the-great-price-surge-of-2025/) — SaaStr, 72% of Salesforce growth from price increases
5. [SaaS TCO: What Buyers Miss](https://www.cloudnuro.ai/blog/saas-tco) — CloudNuro, true TCO 3-5x subscription price
6. [Why 80% of SaaS Features Are Underused](https://www.saasfactor.co/blogs/why-80-of-your-saas-features-are-underused/) — SaaS Factor
7. [Cognitive Load Reduction in SaaS UX](https://www.2pointagency.com/glossary/why-cognitive-load-reduction-is-a-competitive-edge-for-saas-ux/) — 2Point Agency, 20-40% productivity drop, 4.7x workflow-fit metric
8. [SaaS Integration Sprawl: Hidden Costs](https://www.binadox.com/blog/saas-integration-sprawl-managing-the-hidden-costs-of-app-to-app-connections/) — Binadox, 29% integration rate, 39% IT time on integrations
9. [The Cost of Data Silos](https://appian.com/blog/acp/data-fabric/data-silo-costs-statistics) — Appian, $7.8M/year productivity loss (Salesforce), $12.9M bad data cost (Gartner)
10. [How Data Silos Impact Your Organization](https://www.sinequa.com/resources/blog/how-do-data-silos-impact-your-organization/) — Sinequa, 5.3 hours/week wasted on disconnected data
11. [MuleSoft Total Cost of Ownership](https://www.integrate.io/blog/mulesoft-cost/) — Integrate.io, $350K-$600K first-year TCO
12. [SaaSpocalypse 2026: $285B Software Stock Crash](https://www.nxcode.io/resources/news/saaspocalypse-2026-software-stock-crash) — NxCode, IGV ETF -23%
13. [How I Replaced Jira with a 600-Line Claude Code Prompt](https://thomaslandgraf.substack.com/p/how-i-replaced-jira-with-a-600-line) — Thomas Landgraf
14. [Enterprises Are Replacing SaaS Faster Than You Think](https://www.newsweek.com/nw-ai/enterprises-are-replacing-saas-faster-than-you-think-11521483) — Newsweek/Retool, 35% have replaced SaaS tools
15. [Will Vibe Coding Kill SaaS?](https://www.taskade.com/blog/will-vibe-coding-kill-saas) — Taskade, Garry Tan vs Zoho CEO debate
16. [Vibe Coding Won't Kill SaaS](https://thebootstrappedfounder.com/vibe-coding-wont-kill-saas/) — Arvid Kahl, The Bootstrapped Founder
17. [Software-As-A-Prompt](https://sidbharath.com/blog/software-as-a-prompt-ai-saas/) — Sid Bharath, $75 document tracker case study
18. [The SaaSpocalypse: AI Agents, Vibe Coding, and SaaS Economics](https://www.thesaascfo.com/the-saaspocalypse-ai-agents-vibe-coding-and-the-changing-economics-of-saas/) — The SaaS CFO, defensibility spectrum

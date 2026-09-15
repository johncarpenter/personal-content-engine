Last week I [laid out the hidden costs of your SaaS stack](https://discontinuityai.substack.com/p/the-economics-of-a-dying-saas-market) — the conformance tax, the integration tax, the simple math showing that adapting to someone else's software often costs more than building your own. The response told me something: a lot of people recognized the problem.

The question that kept coming back was simpler: *okay, but what do I actually build instead?*

This is that answer. Not a manifesto about software eating itself. A practical guide to what personal software looks like, which kinds are worth building, and how to start — even if you've never opened a terminal.

## Low-Code Was the Dress Rehearsal

We've heard "anyone can build software" before. That was the low-code promise. Drag-and-drop interfaces, visual workflows, point-and-click logic. Platforms like Mendix, Appian, OutSystems — they promised to democratize software the way WordPress democratized websites.

It didn't work out that way.

Low-code platforms delivered their own conformance tax. Each one came with its own abstractions, its own component libraries, its own way of thinking about data and logic. You traded learning to code for learning a platform. You traded vendor lock-in on SaaS for vendor lock-in on the low-code tool itself. Microsoft's own Corporate Vice President for Business Applications, Charles Lamanna, declared at the Power Platform conference last year: "Low code as we know it is dead."

He's right about the diagnosis, if not the remedy. The drag-and-drop era is ending, but not because the idea was bad. The idea — let people who understand their own work build tools that fit — was exactly right. The execution added a middleman. The platform itself became another thing to learn, another vendor to pay, another ontology to conform to.

LLMs skip that layer entirely. You describe what you want in plain language. You get code that runs anywhere — your laptop, a $5 cloud server, a browser tab. No platform. No vendor lock-in. The output is just code, yours to keep, modify, or throw away. The low-code promise, delivered fifteen years late, by a completely different technology.

## What Personal Software Actually Looks Like

I've been running what I call a knowledge worker framework for several months now. It's a personal automation system built entirely on Claude Code — MCP servers, ETL pipelines, structured prompts that operate on markdown files. It does my morning briefings, manages my content pipeline, processes my email, tracks my timesheets across clients, curates my RSS feeds, and pulls health data from my Garmin watch into my daily planning.

None of this is a product. None of it has users. It has an audience of one: me.

Roger Wong coined the term "micro apps" for this pattern — tools "intended to be used only by the creator and only for as long as the creator wants." Simon Willison has about two hundred single-page browser tools at tools.simonwillison.net, built mostly with LLMs. Andrej Karpathy got excited about "the barrier to app dropping to zero, where anyone could build and publish an app just as easily as they can make a TikTok."

They're all describing the same thing, but I think the framing matters. This isn't "small-scale SaaS." This isn't "apps for non-developers." It's a different category. Software as a memo — you create it, use it, maybe throw it away.

Here are the five patterns I keep seeing, in my own work and in conversations with others doing this:

**Integration glue.** The software that replaces you as the human Zapier. My morning brief pulls from five email accounts, five calendars, meeting transcripts from Granola, and my Garmin sleep data — then a Claude skill synthesizes it into one markdown file. That forty-five-minute morning ritual I described in Part 1? It takes about thirty seconds now.

**Workflow automation.** Recurring processes that follow a pattern but don't exist in any SaaS tool. My content pipeline goes from idea capture → research → drafting → publishing → syndication → LinkedIn derivatives. Every stage is a structured prompt. No project management tool supports this workflow because it's mine.

**Data transforms.** Converting, normalizing, enriching data between formats. RSS feeds get curated by an AI skill that scores relevance against my content pillars. Email across five accounts gets classified and surfaced by priority. None of these transforms exist as off-the-shelf products because the rules are specific to how I work.

**Single-purpose dashboards.** Views that no SaaS tool provides. I have a publication tracker that shows publishing cadence across Substack, Medium, and LinkedIn, with cluster health and syndication lag. I have a content scoring system that ranks my backlog across seven dimensions. These exist because no SaaS vendor will build a dashboard for an audience of one.

**Throwaway analysis.** The most underrated category. One-time scripts to answer a specific question, then delete. How many hours did I spend on Suncorp vs. Circuit last month? What's my average Substack-to-Medium syndication lag? You build it, run it, get the answer, and move on. The script was never meant to last.

## How to Actually Start

I want to be honest about something: my setup isn't trivial. The knowledge worker framework runs from the command line. It has custom MCP servers I built for Gmail, Exchange, Garmin, Harvest, and half a dozen other services. If you're not comfortable in a terminal, this specific implementation isn't your starting point.

But the barrier is collapsing, fast.

There are now three tiers of entry, and most people should start at the first one.

**Tier 1: Connect and ask.** Platforms like Composio provide a universal MCP server that connects to five hundred-plus apps — Gmail, Slack, GitHub, Notion, Google Calendar, Salesforce — through a single setup command. Managed OAuth. No API keys to configure. No custom wiring. You connect your tools and then talk to Claude: "Pull my calendar for this week, cross-reference with my email, and tell me what needs my attention today." Someone built a full invoice management system this way — authentication, client management, PDF generation, email sending — in one day, for $3.65 in API costs. Anthropic just released managed agents — you can deploy a Claude agent with tool access in minutes, no infrastructure required. The barrier didn't drop. It's approaching zero.

**Tier 2: Describe your workflow.** Claude Code with a few custom prompts for workflows that don't exist off the shelf. This is where you describe your process as structured natural language — a SKILL.md file, essentially — and Claude executes it against your connected tools. Not code. Structured intent. "Every morning, check these three inboxes, pull today's calendar, summarize action items from yesterday's meetings, and generate a brief." You're not programming. You're documenting how you already work, and making it executable.

**Tier 3: Build the plumbing.** Custom MCP servers for tools that aren't covered by existing platforms. ETL pipelines for data normalization. My knowledge worker framework lives here. You end up here when your needs are specific enough that no existing integration covers them — but you don't start here. Nobody should.

Start at Tier 1. Move up when you hit a wall, not before.

## When to Build and When Not To

In Part 1, I proposed a decision framework: *does the conformance tax on this tool exceed the cost to build a replacement?*

That framework sharpens here. Walk through your daily tools and ask three questions:

1. **Do I maintain a workaround?** A side spreadsheet, a personal Notion page, a manual process that exists because the official tool doesn't do what you need. That workaround is your conformance tax made visible.

2. **Is this tool personal or shared?** Personal tools — your own dashboards, your own briefings, your own data transforms — are perfect candidates. Shared team tools have coordination costs that change the math.

3. **What happens if it breaks?** If the answer is "I fix it or I go without until I have time," it's a fine candidate. If the answer is "the team is blocked" or "customer data is at risk," don't build it. Keep the SaaS.

Here's my don't-build list, and I want to be explicit because the discourse gets irresponsible about this:

Don't build your own authentication. Don't build anything that handles other people's money. Don't build anything that stores other people's personal data without proper security review. Don't build payroll, compliance, or anything regulated. Zoho's CEO Sridhar Vembu made this point in Part 1, and he's right. The sweet spot for personal software is internal, personal, low-stakes tools where "good enough for one" is genuinely good enough.

## Good Enough for One

That last phrase deserves unpacking because it's where the honest conversation about quality happens.

Trend Micro found that 40 to 62 percent of AI-generated code contains security vulnerabilities. That's a real number and it matters — for production software serving real users. But personal software has different quality requirements. A script that generates my morning brief doesn't need to be secure against XSS attacks. It runs on my laptop, reads my data, and produces a markdown file that I read.

Karpathy coined "vibe coding" in early 2025 — building by describing what you want and accepting the AI's output without reviewing the code. He's already moved on from the term. He now prefers "agentic engineering," because the mature version of this isn't casual and it isn't careless. It's spec-driven, deliberate, and reviewed. Google's Addy Osmani describes it well: treat the AI as "an over-confident junior developer" who needs direction, context, and oversight.

The distinction I'd draw is between throwaway and durable. Throwaway personal software — analysis scripts, one-time data transforms, holiday apps for your family — can be vibe-coded without guilt. Durable personal software — the integration glue and workflow automation you'll use daily for months — deserves more care. Write it with AI, but understand what it does. Review the parts that touch your data. Keep it simple enough to debug when it breaks, because it will break.

That's not a limitation. That's just how software works, and it always has.

## Software as a Thought

There's a philosophical frame here that I keep coming back to.

A script that processes my email isn't really an email app. It's how I *think* about email, made executable. The content pipeline isn't project management software. It's my creative process, externalized into structured prompts. The morning brief isn't a dashboard. It's my morning thinking, automated.

Personal software is externalized cognition. It's the gap between how a SaaS vendor thinks you should work and how you actually work, filled with code that's yours.

Software used to be an asset — expensive to create, amortized over time, built to last. Now it's closer to a memo. You create it when you need it, use it for as long as it's useful, and let it go when it's not. The one-person software company isn't a company. It's just how knowledge work works now.

---

*This is Part 2 of a series on how AI is changing the economics of software. [Part 1: The Economics of a Dying SaaS Market](https://discontinuityai.substack.com/p/the-economics-of-a-dying-saas-market). Part 3 is coming — I'm going to build a personal agent from scratch, on camera, and walk through every decision.*

*What's the first personal tool you'd build? The one workaround you maintain that should just be software? I'd genuinely like to know.*

---

## References

1. [The Rise of Micro Apps](https://rogerwong.me/2026/01/rise-of-micro-apps) — Roger Wong on non-developers building their own tools
2. [tools.simonwillison.net](https://tools.simonwillison.net/colophon) — Simon Willison's ~200 LLM-built browser tools
3. [Low-Code Is Dead](https://www.synapx.com/how-ai-is-changing-low-code-development-in-2026/) — Microsoft CVP Charles Lamanna at Power Platform Conference 2025
4. [The Real Risk of Vibecoding](https://www.trendmicro.com/en_us/research/26/c/the-real-risk-of-vibecoding.html) — Trend Micro, 40-62% of AI-generated code contains security flaws
5. [Vibe Coding May Offer Insight Into Our AI Future](https://news.harvard.edu/gazette/story/2026/04/vibe-coding-may-offer-insight-into-our-ai-future/) — Harvard Gazette on democratization and limits
6. [My LLM Coding Workflow Going into 2026](https://addyosmani.com/blog/ai-coding-workflow/) — Addy Osmani on treating AI as an "over-confident junior developer"
7. [Enterprises Are Replacing SaaS Faster Than You Think](https://www.newsweek.com/nw-ai/enterprises-are-replacing-saas-faster-than-you-think-11521483) — Retool survey: 35% have replaced SaaS tools, 78% plan to build more
8. [Claude Code with MCP Is All You Need](https://composio.dev/content/cluade-code-with-mcp-is-all-you-need) — Composio, invoice MVP built in 1 day for $3.65
9. [The Economics of a Dying SaaS Market](https://discontinuityai.substack.com/p/the-economics-of-a-dying-saas-market) — Part 1 of this series

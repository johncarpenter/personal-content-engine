This week, Andrej Karpathy gave a name to something I've been running for months.

He called it a "Claw" — a persistent autonomous agent that orchestrates, schedules, uses tools, maintains memory, and runs on your own hardware. A new layer on top of agents, like agents were a new layer on top of LLMs.

In the same breath, OpenClaw hit 135,000 GitHub stars. Then 512 vulnerabilities. Then a supply chain attack that installed itself on developer machines without consent. Karpathy himself said he was "a bit sus'd to run OpenClaw specifically — giving my private data/keys to 400K lines of vibe coded monster that is being actively attacked at scale is not very appealing at all."

Here's the thing: you don't need 400,000 lines of code to build a Claw. You need a directory, some markdown files, and Claude Code. I've been running one for three months — not because I set out to build an autonomous agent platform, but because I was drowning in context-switching and started automating my way out. The patterns that emerged are simple enough that you could build your own version this weekend.

This post is the blueprint.

## The Stack Karpathy Described

Karpathy's taxonomy is simple and useful:

```
Layer 3: Claws    — orchestration, scheduling, persistence, tools, context
Layer 2: Agents   — LLMs with tools and instructions
Layer 1: LLMs     — base language models
```

Simon Willison endorsed it immediately, defining a Claw as "AI agents that generally run on personal hardware, communicate via messaging protocols and can both act on direct instructions and schedule tasks."

The characteristics — local execution, persistent state, scheduled tasks, tool access, continuous operation — sound like a product pitch. They're actually just what happens when you wire up Claude Code's existing capabilities: skills, MCP servers, hooks, and a cron job.

## Start With One Problem

I'm a Fractional CTO juggling three clients. Which means three workspaces, each with different configurations. Apple Calendar, Outlook, Slack, Gmail, Granola when I can, Teams when I must, Jira, ClickUp, Zoho, Harvest, and a sprinkle of messaging apps — oh, and then my personal accounts. Every morning started with forty-five minutes of opening tabs and trying to remember what mattered.

So I built a morning briefing. Nothing complicated — just a directory with files in it. Claude Code reads my emails, checks my calendar, pulls my Jira tickets, summarizes yesterday's meetings, and produces a single markdown file: here's what happened, here's what's urgent, here's what you should do first.

That took a weekend. If you're building your own, start here. Pick the one thing you do every morning that's pure information gathering and automate it. Don't try to build a platform. Build a script that produces one useful file.

Then I thought: what if the meeting summaries fed into the project tracker? What if the emails informed the task priorities? What if the RSS feeds surfaced ideas for the content I needed to write? Claude Code has tools to handle all of this — skills, agents, hooks — all of it just needs wiring.

Each new use case was the same pattern: connect a data source, write a skill, produce markdown. The system grew not by design but by accretion. Three months later it handles daily operations, project management, content pipeline, timesheet reconciliation, and even investment analysis for a venture firm. But each of those started as "what if I added one more data source?"

## The Architecture (Or: Everything Is a Markdown File)

Three principles:

- Everything that is not executable code is a markdown file
- Executable code sits in the same directory as the data
- Everything is contained in one folder

That's it. Data is markdown. Outputs are markdown. State is markdown. Working memory is markdown. Workflow definitions are markdown. When something breaks, you open a file and read it. No query language, no ORM, no schema migration.

```
External Sources → ETL → Markdown → Skills (Claude) → Markdown → Export
                            ↑                              |
                            |                              |
                            +---- State / Memory (MD) -----+
```

Here's what each layer looks like in practice:

**ETL pipelines** pull from external sources and normalize everything into markdown with YAML frontmatter. Read from API, write to MD, build a search index. Each source is its own connector — Gmail, Exchange, Jira, Harvest, Zoho, calendars, meeting transcripts, RSS feeds, file drops. You don't need all of these. Start with one. Add the next when you feel the pull.

**Skills** are the core idea, and the thing that surprised me most. They're SKILL.md files — structured prompts that tell Claude what to read, what to produce, and how to evaluate quality. They're not code. A skill for email triage reads the inbox data, checks working memory for context, and produces a prioritized summary. A skill for content scoring reads the backlog, loads editorial guidelines, and produces ranked recommendations. When requirements change, you edit a markdown file, not a codebase.

**MCP servers** provide the tool layer — Claude Code talks to external services through Model Context Protocol servers running locally. Each server scopes what Claude can access and do. No wildcard permissions. For the most part, MCPs only pull data into markdown, which prevents a lot of strangeness when APIs don't work.

(MCP servers are a minefield of auth and functional issues. Do yourself a favour and always write your own. My Gmail MCP can't send email. That's intentional. Enabling that would be insane.)

**The dispatcher** orchestrates scheduled workflows — morning briefings, feed ingestion, timesheet reconciliation. It's built on cron and launchd. Nothing complicated. Each run produces an audit trail in markdown.

The whole thing runs on Claude Code with Opus. Your machine. Your data. Your files.

I've been meaning to open source the code as a reference, but honestly? Take this post, paste it into Claude Code, and tell it to build the structure. You'll end up with something better suited to your workflow than anything I could package.

## Lessons from OpenClaw (Or: What Not to Do)

OpenClaw's ambition is the same as what I'm describing. The execution is a cautionary tale. If you're building your own Claw, these are the mistakes to avoid:

**Don't expose a network surface.** OpenClaw's gateway defaults to trusting localhost without credentials. Security researchers found 30,000 publicly accessible instances. Your Claw should run in a terminal. No web interface, no API endpoint, no port to scan. There's nothing to exploit if there's nothing to connect to.

**Don't use a plugin marketplace.** OpenClaw's ClawHub has 10,700+ community-contributed skills. Snyk found prompt injection in 36% of them and 1,467 malicious payloads. Twenty percent of the ecosystem is hostile. Your skills should be SKILL.md files — plain text, version-controlled in git, reviewed before deployment. They're not executable code. They're instructions. You can read them in thirty seconds and know exactly what they do.

**Don't send data you don't have to.** OpenClaw sends your data to external LLM providers with unrestricted transmission. Keep processing local. Use MCP servers to mediate external access with scoped permissions. The only data that should leave your machine is what you explicitly approve.

If you're particularly sensitive:

```
export ANTHROPIC_BASE_URL="http://localhost:11434"
export ANTHROPIC_AUTH_TOKEN="ollama"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
claude --model qwen2.5-coder:7b
```

That runs entirely on Ollama. No data leaves your machine at all.

**Don't give your agent full autonomy on day one.** OpenClaw gives agents unrestricted system access and lets them self-improve. Ben Seri from Zafran Security summarized it: "The only rule is that it has no rules." Build a decision queue instead — consequential actions get routed to a human approval step. Routine processing (email summaries, feed scoring) runs autonomously. Actions that change external state (creating Jira tickets, sending messages, updating timesheets) require your sign-off.

The supply chain attack that hit Cline CLI 2.3.0 — compromised to silently install OpenClaw on developer machines — can't happen when there's no install mechanism, no marketplace, and no remote code execution path. It's markdown files and a dispatcher script.

## Graduated Trust

Anthropic published research this week that frames autonomy as "co-constructed by model, user, and product." They found that 73% of Claude Code tool calls have human-in-the-loop involvement, and only 0.8% are irreversible. Experienced users shift from approving individual actions to monitoring and intervening when needed.

That's exactly what will happen when you build your own Claw.

When I first built the morning briefing, I approved every action. Read this email account — yes. Summarize this meeting — yes. Check the calendar — yes. After a few weeks, I trusted the pattern. I let the briefing skill run on its own. But I kept the approval gate on anything that writes to an external system.

The dispatcher encodes this graduated trust. Skills have an autonomy level: `autonomous` for read-only data processing, `supervised` for actions that affect my workspace, `gated` for anything that touches external systems. I didn't design this taxonomy upfront. It emerged from watching which actions I kept approving without reading and which ones I always wanted to check.

You'll find the same pattern. Start with everything gated. Pay attention to what you approve without thinking. Those are your candidates for autonomous. The audit trail — every run logged to markdown — is what makes this safe to do incrementally. It's not overhead. It's the mechanism that lets you grant more autonomy over time.

## What You'll Discover Along the Way

Three months of daily use taught me things that don't show up in architecture diagrams.

**Markdown is the right abstraction.** I've tried databases, JSON, YAML-only formats. Markdown with YAML frontmatter wins because it's human-readable, AI-readable, version-controllable, grep-able, and has zero vendor lock-in. When something breaks, you open a file and read it.

**Build it yourself and you'll actually understand it.** When you construct every piece with Claude Code — the connectors, the skills, the dispatcher — you know exactly how the system behaves and reacts. There's no black box. No dependency you haven't read. When something breaks, you know where to look because you built the thing. That's not a luxury. That's the point.

**The boring parts are the important parts.** Audit trails, frontmatter schemas, decision queues — none of this is exciting. All of it is what makes the system trustworthy enough to use for real work. I track billable hours with this system. I analyse investment opportunities. The fun parts (agent swarms, semantic search) only work because the boring parts (state management, error handling, human approval gates) are solid.

**Growth is organic, not planned.** I didn't design a "knowledge worker operating system." I built a morning briefing, then a project tracker, then a content pipeline, then an investment platform. Each new skill was a thirty-minute addition because the architecture — ETL into markdown, skills against markdown, outputs as markdown — absorbs new use cases without restructuring.

## Go Build Yours

The industry conversation about Claws is split into two camps: enthusiasts building capability and security researchers sounding alarms. What's missing is the practical middle — systems that are useful AND safe to run. Not because some vendor solved it for you, but because the architecture is simple enough that you can understand every moving part.

Before I was a CTO building AI systems, I was a Global Data Privacy Officer. I led SOC 2 certification, GDPR compliance, PCI audits. (Worst boast ever.) But the compliance answer is always simple: don't do the bad thing. OpenClaw is a useful thing that does a lot of bad things. You can get the useful parts without the bad parts.

Here's the recipe:

1. **Pick one workflow** — the one that wastes your morning
2. **Create a directory** — workspace, data, outputs, state
3. **Write one ETL connector** — pull from one source into markdown
4. **Write one skill** — a SKILL.md that reads the data and produces something useful
5. **Add a cron job** — run it before you wake up
6. **Repeat** — add the next data source when you feel the pull

Karpathy is right: Claws are an exciting new layer of the AI stack. But you don't need 400,000 lines of vibe-coded monster to get there. You need a directory, some markdown files, Claude Code, and the discipline to keep it simple.

Trust the command line. It's good for you.

---

*This post was drafted using the system it describes. The research was ingested via RSS feed pipeline, scored by the content scoring skill, and made relevant from the terminal. The irony is not lost on me.*

*If you're building something similar — or thinking about it — I'd love to hear about your architecture. What does your Claw look like?*

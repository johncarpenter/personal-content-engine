# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Builders (the idea file's `audience: builders`, the draft's `target_audience: builders`), filed
under the `field_notes` topic cluster. The problem they arrive with, in the idea's words:
"knowledge workers drown in context-switching across tools."

## Why now

From the idea's cultural context: "OpenClaw (https://openclaw.ai/) has gone viral using a similar
concept — Claude Code as an always-on autonomous agent." The research brief states the same week's
convergence: Karpathy coined "Claws" on Feb 20-21, Anthropic published its agent autonomy research
on Feb 18, and the OpenClaw security crisis was "ongoing and escalating" — "the term is brand new,"
so the article "can be among the first to use 'Claw' as a defined term to describe a production
system."

## Provisional thesis

From the idea's Angle: "Most 'AI productivity' content is about prompting tips. This is a full
operating system for knowledge work — built by a practitioner, for a practitioner, using commodity
tools (Claude Code, markdown, cron)." The key insight: "everything that isn't executable code is a
markdown file."

Positioning, from the same section: "what OpenClaw would look like if a former Global Data Privacy
Officer built it" — all the power, none of the massive security holes. Built "for professionals with
security and control as first principles: local execution, no cloud API keys exposed, no autonomous
actions without human approval, version-controlled state, and auditable decision trails."

## Original contribution

First-hand production experience: a framework the author "built and actively [is] using" — Claude
Code as the execution engine, markdown as the universal data format, MCP servers for integrations,
ETL pipelines for ingestion, qmd indexer for semantic search. It "started as a daily planning tool
(tasks, email, calendar, meeting summaries) and evolved into a platform handling: research,
PMO/project management, content management, marketing, KPI tracking, and a complete investment
analysis platform for a venture firm (1864 Ventures)."

The competitive gap, from the research brief: "Everyone is talking about the security problems. Very
few are showing what a governance-first autonomous agent system looks like in practice. That is the
article's opening." Credibility rests on the author being a former Global Data Privacy Officer with
SOC 2, GDPR and PCI experience.

## Scope

The idea's structure: the context-switching problem; the insight that Claude Code can be an
execution engine rather than a chatbot; the architecture (ETL → Markdown → Skills → Outputs, with
diagram); the evolution from daily planner to research platform, PMO, content engine and investment
platform; what makes it work (markdown as universal format, MCP for integrations, skills as
structured prompts); what the author would do differently and the limitations; and how to build your
own.

## Exclusions

TODO: what it deliberately does not cover.

## Reader takeaway

The idea's close: "How to build your own (open-sourceable components)."

## Research effort and dependencies

TODO: expected effort (e.g. "half a day, desk research only" or "two practitioner interviews"), plus
known dependencies — data access, interviewees, legal or product review.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-02-21-knowledge-worker-framework.md`,
`research/knowledge-worker-os-claws-article-research.md`,
`published/draft-2026-02-21-knowledge-worker-os.md`. This brief documents the commission after the
fact and was never put through Gate 1.

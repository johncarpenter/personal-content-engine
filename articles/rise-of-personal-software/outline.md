# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

Low-code promised that anyone could build software but delivered another conformance tax; LLMs
actually deliver on that promise — you describe what you want and get working software, with zero
platform lock-in and an audience of one.

## Sections

- **Opening — callback to Part 1** (~200 words) — moves the reader from economics to practice. "In
  Part 1, I laid out what SaaS costs. The conformance tax. The integration tax. The simple math
  showing that building often costs less than adapting. This is what building looks like." The reader
  who nodded through Part 1 is asking "but how?"
- **Low-code was the dress rehearsal** (~300 words) — establishes why "anyone can build" failed the
  first time: drag-and-drop replaced code but added platform lock-in, vendor dependency, and a
  learning curve rivalling the tools it replaced. LLMs bypass the platform: describe → build → run.
  Evidence: `[src:source-003]` (Microsoft CVP Lamanna: "low code as we know it is dead"),
  `[src:source-010]` (Gartner: low-code > $30B but the visual paradigm declining).
- **What personal software actually looks like** (~400 words) — the practical heart: the five
  recurring patterns, each with a concrete example from the knowledge worker framework. Integration
  glue (morning brief from five email accounts, five calendars, meeting notes, Garmin → one markdown
  file); workflow automation (content pipeline idea → research → draft → publish → syndicate); data
  transforms (RSS feeds → curated briefing with AI scoring against content pillars); single-purpose
  dashboards (publication tracker, content scoring, backlog rankings); throwaway analysis (one-time
  scripts, then delete). Evidence: `[src:source-001]` (micro apps — "used only by the creator and
  only for as long as the creator wants"), `[src:source-004]` (~200 browser tools),
  `[src:source-002]` (disposable apps; >50% of installed apps uninstalled within 30 days),
  `[src:source-006]` (barrier to app → zero), `[src:source-011]` (35% have replaced a SaaS tool, 78%
  plan to build more), plus the author's own inventory.
- **How to actually start — the accessibility problem** (~400 words) — answers "this is just for
  developers." Three tiers: Tier 1 zero-code (universal MCP server, 500+ apps, managed OAuth); Tier 2
  light customization (structured prompts / SKILL.md against connected tools); Tier 3 full personal
  stack (custom MCP servers, ETL pipelines). Start at Tier 1, move up only when you hit a wall.
  Evidence: `[src:source-014]`, `[src:source-013]` (invoice MVP in one day for $3.65),
  `[src:source-015]`.
- **The decision framework** (~300 words) — callback to Part 1's conformance tax: "is the conformance
  tax on this tool higher than the cost to build a replacement?" Walk a real example, then the
  don't-build list: auth, payments, compliance, anything handling other people's data. Evidence:
  `[src:source-012]` (replacing a SaaS tool with a prompt, referenced in Part 1).
- **The honest limits** (~300 words) — personal software has different quality requirements than
  production software; "good enough for one" is legitimate only when the stakes match. Evidence:
  `[src:source-008]` (40-62% of AI-generated code has security flaws), `[src:source-009]` (year of
  technical debt), `[src:source-005]` (optimizing for "how much wow can I get in the next hour"),
  `[src:source-007]` (AI as over-confident junior developer; specs, tests, reviews matter more).
- **Close — software as a thought** (~200 words) — the philosophical frame: personal software is
  externalized cognition. A script that processes your email isn't an email app; it's how you think
  about email, made executable. The one-person software company isn't a company. It's just how
  knowledge work works now. Series callback to Part 3.

## Objections to address

1. **"This is just for developers — regular people can't do this."** Handled in "How to actually
   start": the three tiers, with a managed integration layer plus Claude Code as the Tier 1 entry
   point. The author built custom MCP servers because those tools did not exist yet.
2. **"AI-generated code is insecure and unreliable."** Handled in "The honest limits": do not dismiss
   it — 40-62% of AI-generated code has security flaws. Define the sweet spot instead: personal,
   low-stakes, internal use. Don't vibe-code your auth system.
3. **"This creates unmaintainable technical debt."** Handled in the pattern taxonomy: true for
   production software, not for disposable tools. Some software *should* be throwaway; the taxonomy
   separates "keep" tools (integration glue, workflow automation) from "throw away" tools (analysis
   scripts, one-time transforms).
4. **"You're just reinventing the wheel with worse software."** Handled in "What personal software
   actually looks like": these apps are "intended to be used only by the creator and only for as long
   as the creator wants." They aren't competing with Jira; they replace the spreadsheet you maintain
   alongside Jira because Jira doesn't track what you actually need.

## Visuals

- `hero.png` — **establish mood**. AI-generated header image (prompt recorded in
  `assets/manifest.yaml`). Used as the Substack header; never referenced in the article body.

## Open gaps

Carried from the idea file's open questions; none were resolved before publication:

- Specific build times for the author's personal tools (MCP servers, content pipeline) — concrete "I
  built this in X hours" numbers would strengthen the argument against low-code platforms.
- 2-3 concrete examples of personal software the author built, used and discarded, to demonstrate the
  "disposable" thesis.
- Hands-on validation of the Tier 1 experience: can a non-developer actually get a useful workflow
  running, and what are the real friction points? The Tier 1 recommendation currently rests on
  published vendor claims.
- Whether the piece should include or reference a live co-work session ("zero to a working daily brief
  in 30 minutes").

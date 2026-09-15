# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

From the idea's Angle: this is "a full operating system for knowledge work — built by a
practitioner, for a practitioner, using commodity tools (Claude Code, markdown, cron)," where "the
key insight: everything that isn't executable code is a markdown file" — "what OpenClaw would look
like if a former Global Data Privacy Officer built it."

## Sections

From the idea's Structure Thoughts, with the research brief's proposed structure in brackets where
it adds a section:

- **The problem** — knowledge workers drown in context-switching across tools. [Research brief opens
  on the week's events: Karpathy coins "Claws" `[src:source-001]`, OpenClaw hits 135K stars then 512
  vulnerabilities and a supply chain attack `[src:source-004]`, `[src:source-005]`,
  `[src:source-012]`, and Anthropic publishes autonomy research `[src:source-010]`.]
- **The insight** — Claude Code can be an execution engine, not just a chatbot.
- **What is a Claw** — Karpathy's stack (LLMs > Agents > Claws) and Willison's definition; show how
  the framework maps to every characteristic. Evidence: `[src:source-001]`, `[src:source-002]`,
  `[src:source-003]`.
- **The architecture** — ETL → Markdown → Skills → Outputs, with diagram. Evidence:
  `[src:source-022]`. Visual: `figure-01-architecture`.
- **The evolution** — daily planner → research platform → PMO → content engine → investment
  platform. Evidence: `[src:source-022]`.
- **What makes it work** — markdown as universal format, MCP for integrations, skills as structured
  prompts.
- **The security thesis** — contrast with OpenClaw point by point: no public attack surface vs. 30K
  exposed instances, no plugin marketplace vs. malicious ClawHub skills, human-in-the-loop decision
  queue vs. unrestricted autonomy, markdown skills vs. executable plugins. Evidence:
  `[src:source-005]`, `[src:source-006]`, `[src:source-014]`.
- **Co-constructed autonomy in practice** — map Anthropic's research to the framework's design.
  Evidence: `[src:source-010]`.
- **What I'd do differently / limitations.**
- **How to build your own** — open-sourceable components.

## Objections to address

TODO: the strongest counterarguments, and where each is handled.

The idea file lists no counterarguments. The closest statement available is the research brief's
framing of the opposing view: "You can build a Claw that's powerful AND secure. The industry
conversation is treating these as opposing forces. They're not. Governance doesn't reduce capability
— it makes capability sustainable." Karpathy's own reservation is the other standing objection to
running a Claw at all `[src:source-001]`.

## Visuals

- `hero.png` — establish mood. AI-generated header image; never referenced in the article body.
- `figure-01-architecture.png` — explain the ETL → Markdown → Skills → Export flow with the
  state/memory loop. Also never referenced in the article body; the published article carries the
  same flow as an ASCII diagram instead.

## Open gaps

TODO: what is still unsupported, and whether it will be resolved, disclosed, or cut.

The idea file records no open questions. The research brief's own remaining steps at the time were:
select architecture diagrams or code snippets to include, decide the title, identify the specific
daily workflows to highlight as proof of production use, and watch for further community reactions.

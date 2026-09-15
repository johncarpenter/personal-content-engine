# Topic clusters (the five content pillars)

- Owner: TODO(author)
- Last reviewed: TODO(author)
- Confidence: working assumption — these are the author's own editorial categories, not an
  established external taxonomy. Nothing outside the author's own files supports them, and they can
  be renamed, merged, or dropped by the author at any time.
- Sources: internal — migrated from
  knowledge-worker-framework/workspace/content/guidelines/topic-clusters.md (last updated 2026-02-18
  per that file's frontmatter), with the persona mapping from
  knowledge-worker-framework/workspace/content/guidelines/audience-personas.md.

## Summary

The author files every piece under one of five pillars: The On-Ramp, Field Notes, The Stack, The
Alberta Angle, and The Shift. Each pillar names a purpose, a target reader, the kinds of piece that
belong to it, and a tone. A piece gets one primary pillar for filing and may carry a secondary
pillar for cross-referencing.

## Detail

### 1. The On-Ramp — `the_onramp`

- **Purpose:** demystifying AI adoption for people who haven't started yet.
- **Target audience:** AI-curious leaders, executives, non-technical founders. (Primary persona:
  AI-Curious Leaders; secondary: Startup Operators.)
- **Content types:** "Here's what AI can actually do today" explainers; first-step guides (which
  tool, how to start); myth-busting (what AI can't do); ROI frameworks and business case templates;
  fear-to-confidence transformation stories.
- **Example topics recorded in the source:** "Which AI Should You Use? A Decision Framework"; "Your
  First Week with Claude: A Non-Technical Guide"; "What AI Adoption Actually Costs (And Saves)".
- **Tone:** patient, reassuring, concrete. No jargon.

### 2. Field Notes — `field_notes`

- **Purpose:** honest practitioner reports from the trenches.
- **Target audience:** builders, technical leaders, fellow practitioners. (Primary persona:
  Builders; secondary: AI-Curious Leaders.)
- **Content types:** project retrospectives (what worked, what didn't); tool comparisons from actual
  use; workflow documentation; failure analyses; "day in the life" of AI-assisted work.
- **Example topics recorded in the source:** "30 Days of Claude Code: What I Learned"; "Why I
  Stopped Using [Tool] After 6 Months"; "The Cognitive Debt Problem Nobody's Talking About".
- **Tone:** candid, specific, evidence-based. Show the messy reality.

### 3. The Stack — `the_stack`

- **Purpose:** opinionated takes on tools, architectures, and technical decisions.
- **Target audience:** builders, CTOs, technical founders. (Primary persona: Builders.)
- **Content types:** architecture decision records; tool deep-dives and comparisons; "how I built X"
  technical walkthroughs; infrastructure and deployment patterns; performance optimization guides.
- **Example topics recorded in the source:** "MCP Servers: When to Build Your Own"; "DuckDB + dlt:
  The Modern Data Stack for AI Apps"; "Why I'm Betting on Claude Code Over Copilot".
- **Tone:** technical but accessible. Strong opinions, loosely held.

### 4. The Alberta Angle — `alberta_angle`

- **Purpose:** local startup ecosystem coverage, Calgary/Alberta tech community.
- **Target audience:** startup operators, local founders, ecosystem builders. (Primary persona:
  Startup Operators; secondary: all.)
- **Content types:** founder spotlights; funding round coverage; ecosystem event recaps; provincial
  policy analysis; Alberta success stories.
- **Example topics recorded in the source:** "Calgary's AI Startup Landscape in 2026"; "What
  Platform Calgary's Impact Report Tells Us"; "10 Alberta Startups to Watch This Year".
- **Tone:** boosterish but honest. Celebrate wins, acknowledge gaps.

### 5. The Shift — `the_shift`

- **Purpose:** how AI is changing work, organizations, and industries.
- **Target audience:** all personas — this is the "big picture" pillar.
- **Content types:** industry transformation analysis; career and skills evolution; organizational
  change patterns; economic and societal implications; predictions and trend analysis.
- **Example topics recorded in the source:** "The Junior Developer Renaissance"; "Why IBM Is
  Tripling Entry-Level Hiring"; "What 'Cognitive Debt' Means for Engineering Teams".
- **Tone:** thoughtful, nuanced, forward-looking. Avoid doom and hype.

### Cross-pillar filing

Many pieces touch multiple pillars. The source assigns a **primary** pillar for filing and a
**secondary** for cross-referencing, with these worked examples:

| Example topic | Primary | Secondary |
|---|---|---|
| "How I Built an AI Agent for My Calgary Client" | `field_notes` | `alberta_angle` |
| "Claude Code for Non-Developers: A Guide" | `the_onramp` | `the_stack` |
| "Why the Best Engineers Will Be Generalists" | `the_shift` | `field_notes` |

The published articles already carry these assignments: `the_stack` for the Trajectory and
Surface/Oracle/Ratchet pieces, `field_notes` for the Claw and SOC2 pieces, `the_shift` for the
terminal-literacy, dying-SaaS, and personal-software pieces (see `background/published-work.md`).

## Open questions and known gaps

- **`alberta_angle` describes a distribution position this repository does not own.** The pillar is
  defined by local ecosystem coverage — founder spotlights, funding rounds, event recaps — which is
  audience-building and ecosystem work rather than long-form research. No article in this repository
  is filed under it. Whether it remains an editorial category here is the author's call.
- **Cadence is not migrated.** The source sets a weekly pillar-balance target (The Shift 2x, The
  Stack 2x, Field Notes 1–2x, The On-Ramp 1x, Alberta Angle 1x when relevant) and a
  pillar-to-channel mapping naming Substack, LinkedIn, Medium, Twitter, and AI Tinkerers. Both are
  publishing-schedule and distribution decisions owned by the tracking project, not by this
  repository, and are recorded here only as the reason those parts of the source document were left
  behind.
- **The pillars have never been tested against a reader.** They are a filing scheme the author wrote
  for himself. Nothing in the migrated material evaluates whether readers experience the publication
  in these five categories.
- TODO(author): confirm the five pillars are still current, and set a review date.

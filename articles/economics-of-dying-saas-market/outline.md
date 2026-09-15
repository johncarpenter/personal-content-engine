# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

When the cost to build drops below the conformance tax, SaaS stops being a bargain.

## Sections

From the idea file's suggested structure for the long-form Substack piece:

- **Opening: the SaaS bill nobody reads** (~200 words) — establishes the problem with the aggregate
  number, $4,830 per employee per year, nearly $250K/year for a 50-person company, and the punchline
  that the sticker price is not even the expensive part. Evidence: `[src:source-001]`,
  `[src:source-005]`.
- **The conformance tax** (~400 words) — names and defines the concept: the delta between how you
  naturally work and how the vendor tells you to work. Jira's ontology of epics, stories, sprints.
  The 45-minute morning ritual from the Claw piece. Evidence: `[src:source-007]`, `[src:source-006]`.
- **What SaaS actually costs: the real numbers** (~350 words) — the pricing tour, then the hidden
  multipliers: implementation, training, prices rising 4x faster than inflation, shrinkflation, 53%
  of licenses unused. Evidence: `[src:source-003]`, `[src:source-004]`, `[src:source-005]`,
  `[src:source-031]`, `[src:source-032]`.
- **The integration tax: the cost that compounds** (~350 words) — combinatorial integration pairs,
  29% of apps integrated, data silo costs, 39% of IT time, and the cost of integration platforms
  themselves. Evidence: `[src:source-023]`, `[src:source-024]`, `[src:source-025]`,
  `[src:source-027]`.
- **What changed: the build side of the ledger collapsed** (~400 words) — the SaaSpocalypse, the $75
  document tracker, the 600-line Jira replacement, Retool's survey, YC's AI-written code. Evidence:
  `[src:source-008]`, `[src:source-010]`, `[src:source-011]`, `[src:source-012]`,
  `[src:source-013]`, `[src:source-015]`.
- **The sweet spot: AI-built custom, hosted cheaply** (~300 words) — the middle category between
  self-hosting and subscription; hosting economics; the comparison table (monthly cost, build time,
  conformance tax, integration tax, maintenance, feature fit).
- **Where this doesn't work (and why that's fine)** (~250 words) — the kill zone stated precisely:
  horizontal tools where 20% of features are used. Evidence: `[src:source-015]`, `[src:source-014]`,
  `[src:source-009]`.
- **Close: the best tool thinks like you do** (~150 words) — callback to the conformance tax, the
  framework in one sentence, and the invitation to find the tool the team complains about most.

## Objections to address

The counterarguments the idea lists:

1. **"The maintenance burden is real."** Software is never finished — but the maintenance cost of a
   simple hosted app is still less than the conformance tax of a tool that does not fit. Only build
   where the conformance tax exceeds maintenance cost.
2. **"AI-generated code has more security flaws."** Acknowledge Veracode and CodeRabbit findings
   (`[src:source-019]`, `[src:source-020]`); counter that internal tools behind auth with a small
   user base carry a different risk profile, and SaaS has its own incidents.
3. **"You can't vibe-code enterprise complexity."** Agree — nobody is replacing multi-state payroll
   or regulatory compliance engines (`[src:source-015]`).
4. **"Shadow IT creates sprawl and risk."** 60% of teams build outside IT oversight
   (`[src:source-013]`); the answer is building intentionally — version-controlled, auditable,
   documented.
5. **"Opportunity cost — time spent building is time not spent on core work."** Counter with the
   economics: hours saved per week x weeks x hourly rate versus build time.

## Visuals

- `assets/hero.png` — **establish mood**. AI-generated abstract header image used for the Substack
  post. Never referenced from the article body.
- The SaaS versus AI-built-custom comparison table is inline Markdown in the article, not an image.

## Open gaps

The idea file's unresolved open questions:

- Verify the author's specific SaaS spend numbers across 3 client workspaces — would strengthen the
  opening.
- Get permission to reference specific client tool stacks (anonymized).
- Confirm the publishing sequence before referencing "The Rise of Personal Software" in the close.

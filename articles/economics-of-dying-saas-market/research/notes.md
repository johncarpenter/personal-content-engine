# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's Open Questions. The first five were marked gathered at the time of drafting:

- SaaS pricing data — gathered (Zylo, SaaStr, individual vendors).
- Hosting cost comparison — gathered (Railway, Render, Fly.io, Vercel).
- AI-built examples — gathered (Landgraf/Jira, Bharath/$75 tracker, Retool survey).
- Counterarguments — gathered (Kahl, Vembu, Veracode security data).
- Integration costs and data silos — gathered (Binadox, Salesforce, IDC, Gartner, MuleSoft, Zapier
  pricing).
- Still open: verify the author's specific SaaS spend numbers across 3 client workspaces.
- Still open: permission to reference specific client tool stacks (anonymized).
- Still open: confirm the publishing sequence for the companion piece before referencing it in the
  close.

## Assumptions to test

TODO: what the brief assumes that has not been verified.

## Evidence needed for the central claims

The idea file's key arguments and the evidence each rests on:

1. **SaaS costs more than you think** — $4,830/employee/year average spend; true TCO 3-5x the
   subscription; prices rising 12.2% versus 2.7% CPI; 53% of licenses unused; 106 apps average with
   70% reporting overlap; $21M/year wasted on unused licenses. `[src:source-001]`,
   `[src:source-003]`, `[src:source-005]`, `[src:source-032]`.
2. **The conformance tax is the hidden cost nobody measures** — productivity drops 20-40% in the
   first three months of adopting enterprise software; 80% of features unused; workflow-fitting
   features see 4.7x higher sustained usage. `[src:source-006]`, `[src:source-007]`.
3. **The integration tax compounds it** — 10 tools = 45 pairs, 100 tools = 4,950; 897 apps with 29%
   integrated; 39% of IT time on integration; $7.8M/year silo cost; 5-12 hours/week lost;
   Zapier $10K-50K/year at scale; MuleSoft first-year TCO $350K-$600K. `[src:source-023]`,
   `[src:source-024]`, `[src:source-025]`, `[src:source-026]`, `[src:source-027]`.
4. **AI collapsed the build side of the ledger** — $75 document tracker; 600-line Jira replacement;
   $3K/mo marketing automation replaced at $200/mo; 35% of Retool customers have replaced a tool,
   78% expect to build more; 25% of the YC batch at 95% AI-written code; $285B of software market
   value gone in the first week of February 2026. `[src:source-008]`, `[src:source-010]`,
   `[src:source-011]`, `[src:source-012]`, `[src:source-013]`, `[src:source-015]`.
5. **The sweet spot is AI-built custom software hosted cheaply** — Railway $5/mo, Render $7/mo,
   Fly.io ~$2/mo, Vercel Pro $20/mo; $5-25/month total for a low-traffic internal tool with a
   database, versus $50-175/seat/month SaaS. Recorded in the idea file as vendor pricing; no
   bibliography entry covers the hosting prices, so they rest on the vendors' own pricing pages.
6. **SaaS isn't dead, but high-conformance-tax SaaS is vulnerable** — the defensibility spectrum:
   data mass, regulatory compliance and deep domain knowledge survive; workflow convenience and seat
   expansion do not. `[src:source-009]`, `[src:source-015]`.

## Candidate sources

All confirmed items are in `sources.yaml` (32 entries, in the order of the idea file's Source
Bibliography). First-hand evidence used by the piece and not in that bibliography:

- The author's own knowledge worker framework — markdown-based task management replacing Jira's
  ontology; the automated morning briefing replacing the 45-minute tab-opening ritual; a SOC2
  compliance kit replacing Vanta/Drata.
- Fractional CTO work across 3 client workspaces with different SaaS stacks (Jira, ClickUp, Zoho,
  Harvest, and others).

## Disconfirming evidence

The counterarguments the idea file collected, and how it planned to handle each:

- **Maintenance burden is real** — software is never finished; only build where the conformance tax
  exceeds the maintenance cost.
- **AI-generated code has more security flaws** — Veracode: nearly half of AI-generated code contains
  security flaws; CodeRabbit: 1.7x more major issues and 2.74x higher security vulnerabilities
  (`[src:source-019]`, `[src:source-020]`). Both are cited second-hand via Cyber Unit.
- **You can't vibe-code enterprise complexity** — Vembu's 50-state payroll challenge stands
  (`[src:source-015]`).
- **Shadow IT creates sprawl and risk** — 60% of teams build outside IT oversight
  (`[src:source-013]`).
- **Opportunity cost** — time spent building is time not spent on core work.

Also relevant as counter-evidence to the vendor-sourced numbers: the $7.8M/year data silo figure is
Salesforce's own statistic, flagged in the draft's verification list as potentially biased
(`[src:source-024]`).

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

Recorded in the idea file: estimated effort medium, research depth detailed, estimated word count
2,500. No stop rule was stated.

## Notes

- Reconstructed on 2026-09-15 from the author's own material in the knowledge-worker-framework
  repository:
  - `workspace/content/backlog/idea-2026-04-02-economics-of-saas-ai-era.md` (idea, research brief,
    bibliography, counterarguments, structure)
  - `workspace/content/drafts/draft-2026-04-02-economics-of-saas-ai-era.md` (article body,
    references, header-image prompt)
  - `workspace/content/published/2026-04-03-substack-economics-of-saas.md` (publication record)
  - `workspace/content/images/img-2026-04-02-economics-of-saas-header.png` (copied to
    `assets/hero.png`)
- **Working title differed from the published title.** The draft carried the working title "Your
  SaaS Stack Has Three Hidden Taxes"; the piece was published as "The Economics of a Dying SaaS
  Market" on 2026-04-03, and that published title is what `article.yaml` records. The draft also
  listed two other title options ("The Conformance Tax: What Your SaaS Stack Really Costs", "When
  Building Costs Less Than Conforming").
- **Series relationship.** This is Part 1 of a two-part series on how AI is changing the economics
  of software. Part 2 is `articles/rise-of-personal-software/` ("The Rise of Personal Software"),
  referenced in the closing note of this article.
- Syndicated to Medium on 2026-04-07:
  https://medium.com/@johncarpenter/the-economics-of-a-dying-saas-market-748141292af2
- The idea file's Source Bibliography numbers two entries twice (a second "23." and "24." at the
  end); `sources.yaml` renumbers everything sequentially as `source-001`..`source-032` in order of
  appearance, so the Salesforce pricing page is `source-031` and Zylo's statistics page is
  `source-032`.
- Twelve bibliography entries recorded no article title in the old material (for example Deloitte,
  Adaptavist, ProcessMaker, ScaleUpAlly, Theneo, the second Newsweek/Retool piece). Their `title`
  keeps the name the bibliography used rather than inventing one; the URL carries the identity.
- Deliberately left behind in the old repository (not migrated, per this repository's scope):
  - `workspace/content/drafts/linkedin-repurpose-2026-04-02-economics-of-saas-ai-era.md` — three
    LinkedIn derivative posts.
  - `workspace/content/drafts/draft-2026-04-02-economics-of-saas-ai-era-substack.html` — generated
    Substack HTML of the same body.
  - The draft's trailing "Draft Self-Assessment" block (self-scoring, title options, word-count and
    read-time estimates, repurposing and thread notes) — tool output, not article prose. Its
    verification checklist is summarized above where it bears on evidence.

## Remaining gaps

- The author's own SaaS spend figures across the three client workspaces were never verified —
  disclose or leave out.
- Permission to name (even anonymized) specific client tool stacks was never obtained.
- Hosting prices (Railway, Render, Fly.io, Vercel) have no bibliography entry and were flagged in the
  draft as needing a currency check.
- The draft's verification list also flagged: the $285B figure and the Goldman Sachs newspapers
  comparison (single secondary source, `[src:source-008]`), and whether the Landgraf URL is still
  live (`[src:source-011]`).

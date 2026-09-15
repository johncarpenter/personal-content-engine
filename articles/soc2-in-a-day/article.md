*As part of an ongoing learning, I tackle projects start-to-finish in a day using automation tools. Sure they are half-baked but I'll share my learnings and code so you can test it out yourself. Remember everything is a coding problem..*

SOC2 compliance is recurring nightmare of mine. Not because doing the security work of compliance is hard.  Usually organizations with best-practices, or even reasonable practices will be able to pass compliance, but the complicated part is the "paperwork", screenshots and documentation that is involved. 

I know what the compliance process actually looks like because I used to run it. Before I was a CTO building AI systems, I was a Global Data Privacy Officer. I led SOC 2 certification, GDPR compliance, PCI audits at different companies. I've sat in the room with auditors. I've written the policies. I've collected the evidence. I know exactly which parts cost $100,000 and which parts are someone copying a template they bought from another consultant.

I hate it (everyone does) so I thought, you know AI would love this work - so I built the automation framework and open-sourced it. The whole thing took a day.

## Why SOC 2 Matters (Even If You Don't Know What It Is)

If you're a technical founder, you can skip this section. You already know.

If you're an operator, a co-founder handling the business side, or an early employee who just got handed a security questionnaire — here's what you need to know: SOC 2 is a toll booth on the road to enterprise revenue. It stands for "System and Organization Controls," and it's an audit framework that proves your company handles customer data responsibly.

Enterprise buyers don't ask for SOC 2 because they've carefully evaluated your security posture. They ask because their procurement process has a checkbox, and if you can't check it, the deal stops.

The traditional path to SOC 2 looks like this:

- Hire a compliance consultant: $20,000-$60,000
- Subscribe to a compliance platform (Vanta, Drata, Sprinto): $5,000-$15,000/year
- Dedicate someone's time for 4-6 months (usually the CTO): 100-200 hours
- Pay for the actual audit: $10,000-$30,000
- Total first-year cost: $50,000-$150,000
- Annual maintenance: $10,000-$40,000 thereafter

For a growth-stage company with revenue, this is a line item. For a three-person startup trying to close their first enterprise contract, it's an impossible ask. The SOC2 requirement comes before the revenue that would pay for it.

That's the chicken-and-egg problem I wanted to solve.

## What I Actually Built

The [SOC 2 Compliance Worker Framework](https://github.com/2Lines-Software/soc2-compliance-for-solo-owners) is an open-source kit designed for startups with fewer than five people. Clone the repo, point it at your infrastructure, and let Claude Code generate your policies, collect evidence, and tell you exactly what's left before you're audit-ready.

Here's what's in the box:

**A compliance knowledge base.** 41 sub-control mappings covering the Security and Confidentiality trust criteria — the two that matter most for B2B SaaS. Every control is a markdown file. You can read each one in thirty seconds and understand exactly what it requires.

**12 auditor-ready policy templates.** Information Security, Access Control, Change Management, Incident Response — the policies your auditor will ask for. Not boilerplate pulled from a Google search. Each template accounts for the reality of a small team where one person wears four hats.

**Evidence collection automation.** Five Claude Code skill workflows that pull evidence from the tools you're already using — GitHub, AWS, GCP, Google Workspace, Cloudflare, Terraform. Instead of a consultant asking you to screenshot your AWS IAM policies every quarter, the kit collects that evidence programmatically.

**An MCP server with 54 tools.** The technical layer that lets Claude Code interact with your compliance data — reading controls, checking evidence status, generating gap assessments. It's a TypeScript server using the Model Context Protocol, the same pattern I described in the [Claw piece](link-to-claw-post).

**Compensating controls for solo founders.** This is the part that doesn't exist anywhere else. Standard SOC 2 controls assume you have a dedicated security team, separate people handling development and deployment, a formal HR function managing access reviews. When there are two of you, none of that applies.

Compensating controls are alternative protections that achieve the same security objective with fewer people. An auditor will accept them — but only if they're well-documented and honestly address the gap. That documentation is the most valuable part of the kit, and it's the part that required actual compliance experience to write.

## What Claude Code Did vs. What I Did

This is the section that matters if you're trying to understand what AI-assisted development actually looks like on a real project.

Claude Code built the TypeScript MCP server — 54 tools, properly typed, with tests. It generated the initial policy templates from my structural specifications. It wrote the evidence collection skills, the CLI integrations, the gap assessment workflows. It handled the tedious, repetitive work of mapping controls to sub-controls and creating the file structure.

I did the compliance architecture. Which trust criteria to cover. How to structure compensating controls for a one-person team. What auditors actually check versus what the framework technically requires. Which evidence is worth collecting automatically versus what's better handled manually.

The compliance knowledge was the bottleneck, not the code. I could have built the MCP server without AI — it would have taken a week instead of a few hours. I could not have generated accurate compensating controls without a decade of compliance work. Claude Code didn't replace the expertise. It let me implement it fast enough that "build a complete compliance kit" became a day project instead of a quarter-long engagement.

This is the pattern I keep seeing: AI collapses implementation time for practitioners who already know what to build. The compliance industry charges six figures not for the code or the templates — those are commodities. They charge for the judgment calls. Which controls matter for your specific situation. How to document a compensating control that an auditor will accept. What evidence is actually worth collecting.

If you have that judgment — either from experience or from hiring someone who does — the implementation becomes trivially fast with the right tools.

## What This Kit Doesn't Do

I want to be honest about the ceiling, because the CTO reading this already knows it exists.

This kit is for startups with one to five people. That's the scope. That's the boundary.

I also run SOC 2 compliance for larger organizations, and for those I use Vanta. When you have twenty people across engineering, operations, and business functions, compliance complexity doesn't grow linearly — it grows exponentially. Cross-functional access controls, vendor management across departments, segregation of duties that can't be compensated away, continuous monitoring across dozens of integrated systems. That's where platforms earn their fee, managing the interconnections between people, systems, and controls at scale.

The kit doesn't replace the auditor, either. You still need a CPA firm to issue the actual SOC 2 report. What the kit replaces is the $50,000-$100,000 of readiness consulting that happens *before* the audit — the part where someone helps you understand what you need, generates your policies, and collects your evidence. The auditor is the final exam. The kit is the study guide.

And the policies aren't blindly AI-generated. I've seen the concern — "AI-generated compliance documents won't hold up under scrutiny." Fair. That's why the compliance architecture came from a former GDPO, not from a prompt that says "write me a SOC 2 policy." The skill definitions encode what auditors actually check. The AI implements the structure; the human architects the substance.

We ran a pentest against the kit's outputs. They held up.

## The Open-Source Question

There's a growing movement to change this. [Probo](https://github.com/getprobo/probo) is building an open-source compliance platform. [Comp AI](https://github.com/trycompai/comp) just raised $2.6 million to do the same. GraphGRC puts compliance documentation directly in GitHub with Actions validation. The market is telling you that compliance tooling shouldn't be the expensive part.

My kit takes a different approach from these platforms — it's not a product, it's a workflow. Claude Code skills and an MCP server, running locally, producing markdown files you own. No account to create. No subscription. No vendor lock-in. The compliance knowledge is in the skill definitions, inspectable and forkable.

The transparency is the point. When your auditor can read the exact process that generated your policies and collected your evidence, that builds more trust than a vendor dashboard with a green checkmark.

## If You're That Three-Person Startup

Here's what I'd actually tell you to do:

1. **Clone the repo.** Read the README. Understand the components.
2. **Run the gap assessment skill.** It'll tell you where you stand against the Security and Confidentiality criteria.
3. **Generate your policies.** Customize the templates to your actual team structure and tech stack. Don't leave the defaults — your auditor will notice.
4. **Set up evidence collection.** Connect the CLI integrations to your GitHub, cloud provider, and identity provider. Let it run for a few weeks to build a baseline.
5. **Hire an auditor.** Not a consultant — an auditor. You want the CPA firm that will issue the report. They'll do a readiness review and tell you what's missing. The kit gets you 80% of the way there. The auditor closes the gap.
6. **Budget $10,000-$15,000 for the audit itself.** That's the irreducible cost. Everything else, you just did for free.

Total cost: $10,000-$15,000 and a few weeks of part-time effort. Compared to $50,000-$150,000 and six months.

The enterprise deal that's waiting on the other side of that checkbox is worth it.

---

*This is the second piece in a series about things I've built in a day with Claude Code. The first was [How to Build a Claw That Won't Eat You](link-to-claw-post) — the knowledge worker automation framework that this compliance kit now plugs into.*

*The repo is at [github.com/2Lines-Software/soc2-compliance-for-solo-owners](https://github.com/2Lines-Software/soc2-compliance-for-solo-owners). If you're going through SOC 2 for the first time and have questions about compensating controls for small teams, I'm genuinely happy to talk through it.*

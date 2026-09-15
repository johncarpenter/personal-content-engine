# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Primary audience: startup operators. Secondary audience: builders.

Solo founders and micro-startups (fewer than five people) get priced out of compliance or skip it
entirely — which blocks enterprise sales. Enterprise buyers require SOC 2 before signing contracts,
and for startups under five people the traditional path ($20K-$150K, 4-6 months, 100-200 hours of
internal time) is prohibitively expensive. The problem section "needs to land for the non-CTO
audience — founders and ops leads who might not know what SOC 2 is but understand 'enterprise buyers
won't sign the contract.'"

## Why now

Two timing signals recorded in the idea: an industry trend toward AI-assisted compliance (DSALTA,
"SOC 2 Automation in 2026: How AI Cuts Compliance Work by 50%"), and new open-source entrants
emerging — Probo, Comp AI ($2.6M pre-seed, AGPLv3), GraphGRC. "The open-source trend validates the
thesis that the tooling shouldn't be the expensive part."

## Provisional thesis

"SOC 2 compliance is a revenue gate that prices out small startups — but the compliance knowledge,
not the tooling, is the real barrier, and an AI-assisted practitioner can collapse months of
consulting work into a day by encoding domain expertise into agentic workflows."

Angle: "The compliance industry is built around large enterprises with dedicated security teams.
Solo founders and micro-startups get priced out or skip compliance entirely — which blocks
enterprise sales. This kit automates the hard parts: trust centers, policies, audits, and evidence
gathering. The real story is that Claude Code did the heavy lifting, collapsing months of consulting
work into a day of agentic development."

## Original contribution

- Former Global Data Privacy Officer: led SOC 2 certification, GDPR compliance, PCI audits at
  BlackSquare. "This isn't a developer guessing at compliance; it's a compliance professional who
  also codes."
- Actually built and shipped it: the repo exists, is open-source, and is inspectable. "Not a thought
  experiment."
- Dual practitioner perspective — can speak to both the compliance requirements (what auditors care
  about) and the technical implementation (how Claude Code accelerated it). "Very few people sit at
  this intersection."
- Builds on an established credential: the published Knowledge Worker OS (Claw) piece already
  references the GDPO background and compliance-first architecture.
- The "boring parts" philosophy: audit trails, policy frameworks and evidence gathering aren't
  exciting but they're what makes systems trustworthy.

Competitive gap: "Nobody is telling the practitioner story — compliance expert + AI coding tool =
impossible speed. Everyone is either selling a platform or writing generic guides. The 'I built this
in a day and here's the open-source result' angle is completely unoccupied."

## Scope

Long-form Substack piece following the structure in the idea: the dollar-figure hook, grounded
immediately (the readiness kit, not the audit itself); SOC 2 as a revenue gate for small startups
with specific cost data; what was actually built (41 sub-control mappings, 12 policy templates,
evidence collection automation, CLI integrations, MCP server + markdown + Claude Code skills); what
Claude Code did versus what required human judgment; the counterargument section; close with a link
to the open-source repo.

## Exclusions

The kit's ceiling is stated explicitly rather than covered: it solves the 1-5 person problem.
"Compliance complexity grows exponentially with team size. At 5+ people, you're dealing with
cross-functional access controls, vendor management across departments, segregation of duties that
can't be compensated away. That's where platforms like Vanta earn their fee." The kit is also framed
as audit preparation, not audit replacement — "The kit doesn't replace the auditor (you still need
one for the actual SOC 2 report)."

## Reader takeaway

"The compliance knowledge shouldn't be locked behind a $100K consulting engagement." Close by
linking to the open-source repo, with a callback to the Claw piece philosophy: the boring parts
(policies, evidence, audit trails) are the important parts.

## Research effort and dependencies

Estimated effort: medium. Research depth: standard. Estimated word count: 2200.

Open questions recorded at commission time:

- Verify the repo README and component list are current before drafting (check last commit date).
- Confirm whether the pentest that was run is something to reference in the article.
- Decide on dual-audience balance: how much space for "what is SOC 2 and why should you care" versus
  the build story. Author notes suggest leaning into the non-CTO audience more than originally
  planned.
- Check whether the open-source competitors (Probo, Comp AI, GraphGRC) should be acknowledged in the
  piece.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-02-21-soc2-in-a-day-claude-code.md`,
`drafts/draft-2026-03-11-soc2-in-a-day-claude-code.md`,
`published/2026-03-13-substack-soc2-in-a-day.md`. This brief documents the commission after the fact
and was never put through Gate 1.

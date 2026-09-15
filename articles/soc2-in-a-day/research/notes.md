# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

From the idea file's open questions:

- Verify the repo README and component list are current before drafting (check last commit date).
- Confirm whether the pentest that was run is something to reference in the article (adds
  credibility if the kit was actually tested).
- Decide on dual-audience balance: how much space to devote to "what is SOC 2 and why should you
  care" versus jumping straight to the build story. Author notes suggest leaning into the non-CTO
  audience more than originally planned.
- Check if any of the open-source competitors (Probo, Comp AI, GraphGRC) should be acknowledged in
  the piece — positioning alongside rather than ignoring them strengthens credibility.

## Assumptions to test

Claims the draft flagged for verification:

- "$30,000 to $150,000" SOC 2 cost range — attributed to Sprinto, Scytale, Secureframe 2026 data.
- "100-200 hours" internal time — attributed to Secureframe.
- "$5,000-$15,000/year" compliance platform pricing — attributed to market data.
- "41 sub-control mappings", "54 tools" in the MCP server, "12 policy templates" — verify against
  current repo state.
- Comp AI "$2.6 million" raise — Security Ledger, August 2025.
- "last major revision was 2017" for SOC 2 trust criteria — not stated in the piece, but it informs
  the "open-source can keep up" logic.
- The $10,000-$15,000 audit cost estimate — confirm this is in the right range for a Type 1 for a
  small company.

## Evidence needed for the central claims

- SOC 2 is a revenue gate small startups can't afford → published cost and timeline data:
  `[src:source-001]`, `[src:source-002]`; annual maintenance runs 40% of initial costs.
- The compliance industry sells process, not knowledge → compliance SaaS pricing ($5K-$15K/year
  across Vanta, Drata, Sprinto, Secureframe, Scytale) plus the emerging open-source entrants:
  `[src:source-005]`, `[src:source-006]`, `[src:source-007]`, `[src:source-008]`.
- AI collapses time-to-compliance for practitioners → what the repo actually ships: MCP server with
  54 tools, markdown knowledge base, 5 Claude Code skill workflows, 41 sub-control mappings,
  integrations with GitHub, AWS, GCP, Google Workspace, Cloudflare, Terraform: `[src:source-010]`.
- Compensating controls are the key insight for small teams → standard frameworks assume dedicated
  security teams and target companies with 50+ employees: `[src:source-009]`; the kit's own
  compensating controls: `[src:source-010]`.

## Candidate sources

- The nine items in the idea file's source bibliography, promoted to `sources.yaml` as
  `source-001`-`source-009`.
- First-hand: the author's open-source repository
  (https://github.com/2Lines-Software/soc2-compliance-for-solo-owners), promoted as `source-010`.
- First-hand: the author's own practitioner experience as a former Global Data Privacy Officer (SOC 2
  certification, GDPR compliance, PCI audits at BlackSquare), and running SOC 2 for larger
  organizations using Vanta. Not promoted to `sources.yaml` — it is the author's testimony, stated as
  such in the article.

## Disconfirming evidence

The counterarguments the idea file requires the piece to address:

- DIY compliance is risky — you'll miss something an auditor catches. Trava Security notes DIY may
  cost more long-term if expertise is lacking (`[src:source-003]`).
- AI-generated policies won't hold up under audit scrutiny.
- Open-source compliance tools can't keep up with framework changes.
- If you need SOC 2, you can afford $15K for a platform.
- This can't possibly scale to a real company — correct, and the piece says so: at 5+ people the
  interconnections are where platforms like Vanta earn their fee.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

Reconstructed on 2026-09-15 from the author's pre-existing material in the
knowledge-worker-framework repository:

- `backlog/idea-2026-02-21-soc2-in-a-day-claude-code.md` (angle, arguments, supporting evidence,
  counterarguments, structure, open questions, source bibliography)
- `drafts/draft-2026-03-11-soc2-in-a-day-claude-code.md` (article body, image generation prompt,
  claims-to-verify list)
- `published/2026-03-13-substack-soc2-in-a-day.md` (publication record)

Deliberately left behind in the old repository so the trail is not lost:

- `drafts/linkedin-repurpose-2026-03-17-soc2-in-a-day.md` — channel derivative (LinkedIn posts).
- `drafts/draft-2026-03-11-soc2-in-a-day-claude-code-substack.html` — generated Substack HTML.
- `images/img-2026-03-11-soc2-in-a-day-linkedin-post.png` — LinkedIn-specific image.
- The idea file also recorded a planned LinkedIn carousel and Twitter/X thread; those channel
  derivatives are out of scope for this repository.

Syndication recorded in the old repository but not representable here: Medium,
https://medium.com/@johncarpenter/soc2-ready-in-a-day-how-i-built-a-complete-compliance-kit-with-claude-code-afb5a8041170,
2026-03-19.

## Remaining gaps

- The four open questions above were never recorded as answered in the old material; the published
  piece went out without a written resolution for them.
- The pentest reference in the article ("We ran a pentest against the kit's outputs. They held up.")
  has no supporting record in the old material — resolve or disclose.
- The article body contains two `(link-to-claw-post)` placeholders for the earlier Claw piece; the
  draft flagged that the real URL still needs inserting at both locations.

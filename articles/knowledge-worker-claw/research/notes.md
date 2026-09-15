# Research plan and notes

Lightweight. Bullets are fine. Purpose: make the evidence requirement explicit before drafting, and
keep gaps visible.

## Questions that must be answered

The idea file records no open questions. From the research brief's objective and next steps, the
questions it set out to answer were:

- What exactly did Karpathy name, and does the author's existing framework meet that definition?
- What went wrong with OpenClaw, specifically enough to be instructive rather than alarmist?
- What does Anthropic's autonomy research say about how oversight actually evolves in practice?
- Which daily workflows can be cited as proof of production use?

## Assumptions to test

- That the framework "is, by Karpathy's definition, a Claw" — the research brief asserts this by
  mapping the framework against each characteristic (local execution, scheduled workflows,
  persistent state, tool access, continuous operation).
- That governance and capability are not opposing forces: "Governance doesn't reduce capability — it
  makes capability sustainable."
- That the gap in the conversation is real: "Everyone is talking about the security problems. Very
  few are showing what a governance-first autonomous agent system looks like in practice."

## Evidence needed for the central claims

- Karpathy's taxonomy and his own reservation about OpenClaw → his post `[src:source-001]`, with
  Willison's endorsement and definition `[src:source-002]`, `[src:source-003]`.
- OpenClaw's security record → Kaspersky `[src:source-005]`, Fortune `[src:source-006]`, VentureBeat
  `[src:source-007]`, Security Boulevard `[src:source-008]`, Microsoft `[src:source-009]`; supply
  chain attack via Cline CLI 2.3.0 `[src:source-012]`, `[src:source-013]`; ClawHub skill poisoning
  `[src:source-014]`.
- Autonomy figures used in the article (73% human-in-the-loop, 0.8% irreversible, and the shift from
  approving actions to monitoring) → Anthropic `[src:source-010]`.
- The architecture, the graduated-trust pattern, and everything about daily use → first-hand, the
  author's own running system `[src:source-022]`.

## Candidate sources

All 21 items in the research brief's bibliography are promoted into `sources.yaml` as
`source-001`–`source-021`, in the order they appear there; the author's own system is
`source-022`. Items cited in the brief's "Community Sentiment" section but absent from its numbered
bibliography were not promoted: The Hacker News, Infosecurity Magazine, University of Toronto's
advisory, Microsoft's Cloud Adoption Framework guidance, Deloitte, State Tech Magazine, CIO.com.

## Disconfirming evidence

- Karpathy's own reservation cuts against running a Claw at all: "giving my private data/keys to
  400K lines of vibe coded monster that is being actively attacked at scale is not very appealing at
  all."
- Anthropic's caution against prescribing oversight: "Oversight requirements prescribing specific
  forms of involvement create friction without safety benefits" — an argument against a
  heavy-handed approval gate.
- The autonomy paradox in the same study: auto-approval rises with experience (~20% for new users to
  40%+ for users with 750+ sessions) while interrupt rates also rise (5% to 9%) — trust does not
  simply increase.
- Boris Tane's pattern `[src:source-018]` shows where most Claude Code users actually are (no MCP,
  no automation, no scheduled workflows), which is a check on how generalizable the framework is.
- zclaw `[src:source-017]` and NanoClaw `[src:source-021]` are competing minimal implementations;
  Karpathy praised NanoClaw's ~4,000-line core, so "build your own on markdown" is not the only
  minimal answer.

## Effort limit

TODO: the point at which research stops — hours, number of interviews, or sources reviewed.

## Notes

- Built from: `research/knowledge-worker-os-claws-article-research.md` (the main input — findings,
  quotes, comparison table, bibliography), `backlog/idea-2026-02-21-knowledge-worker-framework.md`,
  and the frontmatter of `published/draft-2026-02-21-knowledge-worker-os.md`, all in the
  knowledge-worker-framework repository.
- The research brief's numbers as recorded there: 135,000+ GitHub stars; 512 vulnerabilities (8
  critical); CVE-2026-25253 at CVSS 8.8; 30,000+ exposed instances (attributed to Censys/Bitsight,
  which is not in its bibliography); 824+ malicious ClawHub skills (~20% of the ecosystem) plus
  Snyk's 36% prompt-injection rate and 1,467 malicious payloads; ClawHub's 10,700+ skills.
- Deliberately left behind in the old repository, so the trail is not lost: the LinkedIn repurpose
  post (`drafts/linkedin-repurpose-2026-02-21-knowledge-worker-os.md`), the generated Substack HTML
  (`archive/drafts/draft-2026-02-21-knowledge-worker-os-substack.html`), the LinkedIn-specific image
  (`images/linkedin_how_to_build_a_claw.jpeg`), and the draft's own self-assessment block
  (self-scoring, title options, SEO keywords, repurposing plans) which was tool output rather than
  article prose.
- Syndication not representable in this repository's metadata: the piece was also syndicated to
  Medium on 2026-03-01 at
  https://medium.com/@johncarpenter/how-to-build-a-claw-that-wont-eat-you-234f47042511. `article.yaml`
  records only the Substack URL.

## Remaining gaps

The draft's self-assessment flagged these as still needing author verification at the time of
publication; recorded here because the claims are live in the published prose:

- "135,000+ GitHub stars" — from the research brief dated 2026-02-21.
- "512 vulnerabilities" — Kaspersky and security publications.
- "30,000+ publicly accessible instances" — Censys/Bitsight (not in the bibliography).
- "36% prompt injection / 1,467 malicious payloads" — Snyk ToxicSkills study.
- "73% tool calls human-in-the-loop / 0.8% irreversible" — Anthropic research.
- Cline CLI 2.3.0 supply chain attack — Dark Reading, The Register.
- The "three months" timeline, the exact "Global Data Privacy Officer" title, and whether the Ollama
  environment variables and model name in the code snippet still work.

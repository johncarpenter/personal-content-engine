# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

Primary audience: AI-curious leaders. Secondary audience: builders. Concretely, the reader is a
financial analyst "who's heard the hype but hasn't opened the plugin yet."

The problem they arrive with, in the idea file's words: "for the individual financial analyst
sitting at a desk with a model to build, the question isn't 'is this real?' anymore. It's 'where do
I start, and where will it break?'"

Reader calibration is unresolved: "Is the primary reader a financial analyst at a bank, a PE
associate, a corporate FP&A analyst, or a startup CFO? Different readers need different examples.
Lean toward PE/IB associate — most likely to adopt first, highest engagement potential."

## Why now

"The timeliness is exceptional: Anthropic's finance agents launch was yesterday (May 5).
Institutional endorsements from Citadel and Walleye are public. The window for 'first credible
practitioner take' is open right now."

Anthropic launched 10 finance agent templates on May 5, 2026 with public endorsements from Citadel,
BNY Mellon, Carlyle, Mizuho, Walleye Capital (100% of 400 employees), FIS and Travelers; Claude for
Excel is generally available.

## Provisional thesis

Provisional. Research is allowed — expected — to change it.

"The institutional adoption of LLMs in financial analysis crossed a threshold in May 2026 — Citadel,
BNY Mellon, Carlyle, and a 400-person hedge fund are publicly endorsing Claude inside their
spreadsheets. But for the individual financial analyst sitting at a desk with a model to build, the
question isn't 'is this real?' anymore. It's 'where do I start, and where will it break?' This piece
provides the honest practitioner answer: a structured adoption path from explanation to automation,
with clear markings on where LLMs help, where they hallucinate, and where human judgment remains
irreplaceable."

Angle: "Not a product review. Not a vendor pitch. A practitioner field note: 'I'm someone who builds
financial models. I tried Claude inside my spreadsheets. Here's what actually happened — what
worked, what broke, and what I'd tell an analyst starting today.'"

## Original contribution

"The intersection nobody else occupies":

1. Builds financial models for clients — "not theoretical, has real experience with the modeling
   workflow, knows what analysts actually care about (formula integrity, auditability, client-ready
   output)".
2. Builds AI systems professionally — "understands LLM limitations from the engineering side, not
   just the user side. Can explain WHY Claude hallucinates numbers (not just THAT it does)".
3. Has used Claude for Excel on actual financial work — "can show specific examples of what worked
   and what failed, with the kind of detail that vendor case studies never include".
4. Former GDPO — "can speak credibly to the compliance and audit trail concerns that financial
   professionals care deeply about".

The competitive gap: "Nobody has written the honest practitioner piece: 'I build financial models. I
tried Claude inside my Excel workbooks. Here's the adoption ladder — what to try first, what to try
next, and where it will absolutely fail you.' The vendors are selling, the academics are
benchmarking, and the journalists are trend-spotting. The practitioner-with-financial-modeling-experience
position is wide open."

## Scope

Long-form, ~2,200 words, structured as: the institutional signal; why this is different from
ChatGPT (with a Claude for Excel / Copilot for Finance / ChatGPT + Code Interpreter comparison);
what the author actually tried; the adoption ladder (Level 1 explain and audit, Level 2 scenario
testing, Level 3 draft model building, Level 4 agent workflows); where it will break you (numerical
hallucination, non-deterministic outputs, circular references, compliance gap, audit trail
absence); the verification habit; close.

## Exclusions

Stated limits from the idea:

- Not a product review and not a vendor pitch.
- Python/SQL integration is out: "Python/SQL integration is Level 5 — not Level 1." The piece meets
  analysts in Excel.
- Not part of the "Built in a Day" series: "Less 'I built a thing' and more 'here's how to use a
  thing.' Probably standalone, not series."
- Undecided: the 14+ data connectors (FactSet, S&P Capital IQ, PitchBook, Morningstar). The idea
  asks whether they are "scope creep for the first piece" without answering.

TODO: confirm the remaining exclusions — the old material states no others.

## Reader takeaway

"The competitive dynamic isn't 'analysts who use AI vs analysts who don't.' It's 'analysts who use
AI with disciplined verification vs analysts who either avoid it or trust it blindly.' The adoption
ladder is how you get to the first group. The verification habit is what keeps you there."

Action: start at Level 1 — install the add-in and ask Claude to explain a model you already
understand — then move up the ladder at the pace your workflow and compliance environment allow.

## Research effort and dependencies

Estimated effort: medium. Research depth: detailed (researched 2026-05-06); the idea file was marked
`ready_for_draft: false`.

Known dependencies:

- Personal examples: "Which specific financial models can be referenced? Need concrete before/after
  examples. Could demo with a sanitized DCF or LBO model."
- Claude for Excel hands-on: "Do a structured test session: build a 3-statement model, run
  scenarios, trace errors. Document screenshots for the article and carousel."
- Audience calibration (see *Reader and problem*).
- Data connectors: "Worth testing which ones are actually available and how they work, or is that
  scope creep for the first piece?"

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `workspace/content/backlog/idea-2026-05-06-llm-financial-modeling-analysts.md`
and `workspace/content/drafts/draft-2026-05-06-llm-financial-modeling-analysts.md`. This brief
documents the commission after the fact and was never put through Gate 1.

# Brief

Approved at Gate 1. A topic alone is not a brief: this document commits to a reader, a reason to
publish, and an effort budget. It does not have to predict the final conclusion.

Delete prompts as you replace them. Keep it short — one page is plenty.

## Reader and problem

The idea file records `audience: builders`, `secondary_audience: ai-curious-leaders`; the draft that
became this piece records the reverse (`target_audience: ai-curious-leaders`, `secondary_audience:
builders`) and describes itself as "the strategy/VP-leaning piece."

The problem they arrive with, in the idea's words: the canonical BI stack "optimizes for questions
you already know to ask," and "the hard part now is knowing *which* numbers to look at." The idea's
evidence that this is the reader's lived problem rather than a rhetorical one: self-service BI
adoption has "wallowed below 20%"; one $400M retailer spent $2.1M on an AI-powered BI platform and
hit 11% adoption after 18 months; one software firm saw 5 of 100 intended users actively use the
tool; and people revert to spreadsheets because "Excel may be wrong, but at least it's their wrong."

## Why now

Stated in the idea's post-research angle: "'BI is dying' is a crowded, half-wrong take. A wave of
2026 content already declares the death of the dashboard (CIO, Medium, vendor blogs). Forrester
pushes back directly." The timing reason is therefore the shape of the conversation, not an event:
the position that is still unoccupied is the nuanced one — dashboards are *over-applied*, not
obsolete — and "AI finally makes 'everything else' tractable." The idea records `timeliness: high`.

## Provisional thesis

From the idea's Thesis Statement: the normalize-and-visualize stack "was built for an era when the
hard part was getting numbers onto a page. That era ended. Dashboards are structurally optimized for
*recurring questions with a known answer shape* — and they cannot surface the questions you didn't
already know to ask. The alternative is not a better dashboard; it's a different terminal output."
The replacement for the visualize step is an **understanding layer** that returns "an explanation, a
recommendation, or a surfaced anomaly *with context* rather than a chart for a human to interpret."

Net, per the refined angle: "honest-practitioner, not death-of-BI hype" — the critique is
over-application, and the payoff is a routing rubric (dashboard-worthy vs. insight-worthy).

## Original contribution

From "The User's Unique Contribution":

- "Three lenses running in production, not three blog posts stitched together" — the author runs
  them together in client environments and "has hit the seams." (This piece carries the claim; the
  lenses themselves are the sibling articles' subject.)
- The worked example: an anonymized retail-intelligence engagement — "a major beer brand and its
  alcohol-free 0.0 line, from US restaurant POS data (2019–2025)" — where the statistical signal
  contradicted the intuitive dashboard read. "The killer insight is one **no dashboard would surface
  and no analyst would think to query**."
- "Dual practitioner lens": the author builds AI systems *and* has data/finance-modeling experience,
  so the honesty about limits "lands as informed, not hand-wavy."

The competitive gap, in the idea's words: "nobody has written the honest practitioner account that
(a) treats the understanding layer as a *peer* architecture rather than a BI killer, (b) composes all
three lenses with a rubric for which fits which question, and (c) is backed by a real multi-lens
production system and shippable code."

## Scope

Part 1 of the three-part `understanding-layer` series. Per the draft's own statement of position, it
"names the problem, the reframe, and the rubric. Ends without naming the architecture; that's piece
2's job." It covers sections 1–3 and 8 of the idea's nine-section structure:

- The dashboard that answered the question everyone walked in with (the beer / 0.0 example).
- What normalize-and-visualize actually optimizes for: repeated questions, numeric answers, human
  eyeballs as the synthesis step — "none of which is the binding constraint now."
- The reframe: data → processing → understanding, as a peer architecture, defined operationally —
  "the system can answer *why*, not just *what*."
- The decision framework: dashboard-worthy vs. insight-worthy.

## Exclusions

- The three lenses (vector search, KGMD, classical ML / STL), their composition and MCP as
  integration fabric, and the production-realities close: sections 4–7 and 9 of the idea's structure,
  moved to the sibling articles `dont-put-llm-in-analyst-seat` and `three-lenses-and-translator`.
- The KGMD lens is deliberately kept out of scope here and links out: "Lens two MUST stay tight and
  link out — guard against it ballooning back into the deep-dive."
- Client-identifying and proprietary detail. Treatment decision recorded 2026-05-27: "Anonymize
  brand, soften numbers"; drop "exact transaction counts, run IDs, store keys, and anything
  client-identifying."

## Reader takeaway

The rubric, as the article puts it: "For now, the takeaway is the rubric. Dashboard-worthy or
insight-worthy. Most teams have been forcing the second kind through tooling built for the first."
The idea calls this "the 'Monday morning' payoff" and "the slide attendees photograph."

## Research effort and dependencies

The idea records `estimated_effort: high`, `research_depth: deep`, researched 2026-05-27, and
`estimated_word_count: 5000` — for the single long-form piece before it was split into three.
Dependencies stated in the idea:

- Anonymization treatment for the proprietary retail-intelligence platform and the client example —
  resolved 2026-05-27.
- Naming the umbrella pattern (candidates: "The Understanding Layer," "Insight-worthy vs
  Dashboard-worthy," "data → processing → understanding") — recorded as still open.
- Scope discipline at 4–6k words — recorded as still open; the split into three pieces is how it was
  handled.

## Tracker

TODO: tracker URL. Also set `tracker_url` in `article.yaml`.

---

If research materially changes the reader, purpose, scope, or effort, update this brief and revisit
Gate 1 explicitly. Normal refinement of the thesis does not need another gate.

## Migration note

Reconstructed on 2026-09-15 from the author's own pre-existing material in the
knowledge-worker-framework repository: `backlog/idea-2026-05-27-dashboards-answer-known-questions.md`,
`drafts/draft-2026-05-29-dashboards-answer-known-questions.md`. This brief documents the commission
after the fact and was never put through Gate 1.

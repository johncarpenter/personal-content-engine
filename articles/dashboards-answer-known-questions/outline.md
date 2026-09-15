# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

From the idea's Angle: "dashboards are an artifact of an era when the hard part was getting numbers
onto a page. That era ended. The hard part now is knowing *which* numbers to look at — and
dashboards structurally can't surface the questions you didn't already know to ask."

## Sections

Sections 1–3 and 8 of the idea's nine-section structure; 4–7 and 9 went to the sibling articles.

- **The dashboard that answered the question everyone walked in with** — opens on the anonymized
  beer / 0.0 engagement: "A dashboard shows two trend lines. The obvious (wrong) read: the 0.0
  product is cannibalizing the flagship." Lands the core claim that dashboards are an artifact of
  the "getting data onto a page is the bottleneck" era. Evidence: `[src:source-007]` (NA category
  context), `[src:source-008]` (the engagement itself).
- **What normalize-and-visualize actually optimizes for** — walk the canonical pipeline fairly
  (source → ingest → warehouse → semantic model → BI tool → dashboard); it still wins for known
  KPIs, regulated reporting, operational monitoring. The critique is over-application: it optimizes
  for repeated questions, numeric answers, and human visual pattern-matching as the synthesis step,
  "none of those is the binding constraint anymore." Pre-empt Forrester here: `[src:source-001]`.
- **The misfit is structural** — the adoption evidence: sub-20% self-service BI adoption
  `[src:source-006]`, the $2.1M / 11%-after-18-months story and "Excel may be wrong, but at least
  it's their wrong" `[src:source-002]`, 5 of 100 intended users `[src:source-003]`.
- **The reframe: data → processing → understanding** — peer architecture, not replacement. Terminal
  output is "an explanation, a recommendation, or a surfaced anomaly with context." Define
  understanding operationally: answers *why*, not just *what*.
- **Dashboard-worthy vs. insight-worthy** — the rubric, "the slide attendees photograph."
  Dashboard-worthy: recurring, known answer shape, regulated/audited, operational monitoring.
  Insight-worthy: ambiguous, exploratory, requires fusing context, asked once or rarely but
  expensively. Reinforce complementary-not-either/or: `[src:source-004]`, `[src:source-005]`.
- **What's coming next** — hands off to the sibling pieces: the LLM-in-the-analyst's-seat failure
  mode, then the three-lenses-plus-translator architecture with the beer brand as worked example.

## Objections to address

The counterarguments the idea lists, and where each lands:

1. "Dashboards aren't dying — Forrester says so." Handled here, up front: "the argument is
   *over-application*, not obsolescence… Making this concession up front is what separates the piece
   from the death-of-BI chorus."
2. "This just moves the work, not removes it — and adds hallucination risk." Deferred — the draft
   says "there are real limits I'll cover in the next two pieces."
3. "You still need the warehouse and the semantic layer." Deferred to the sibling pieces; the idea's
   position is that this "strengthens the thesis."
4. "Three stores (vector + graph + metrics) is operational complexity most teams can't run."
   Deferred (composition section, sibling piece).
5. "LLMs are getting good at time series / SQL — this lens-three caution will age badly." Deferred
   (lens three, sibling piece).
6. "This is just RAG / agentic analytics with extra steps." Deferred (composition, sibling piece).

## Visuals

- `hero.png` — generated header image; purpose: establish mood. Not referenced in the article body,
  and no reference was added during migration.

The idea notes charts exist for the beer / 0.0 analysis as talk visuals; none were carried into this
repository, and the article body does not reference any figure.

## Open gaps

The idea's unresolved open questions:

- **Repo roles.** Whether `adaptive-simple-text-classifier` and `trajectory-memory` are worked
  examples or "see also" links (bears on the sibling pieces).
- **Naming the pattern.** "The Understanding Layer," "Insight-worthy vs Dashboard-worthy," or
  "data → processing → understanding" — "Pick one sticky term before drafting." The draft uses
  "understanding layer."
- **Scope discipline.** Flagged as a sprawl risk at 4–6k words; the split into three pieces is how
  it was handled.
- **Other Circuit Signal analyses.** Beer vs college-football scores as the
  spurious-vs-real-signal beat.

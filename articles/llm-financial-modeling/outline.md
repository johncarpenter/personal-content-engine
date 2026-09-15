# Outline

Optional and deliberately lightweight — bullets are fine. Its job is to expose a weak argument
before the prose hides it.

## Argument in one sentence

The institutional question is settled, so the analyst's real question is a practical one — "where do
I start, and where will it break?" — answered by a structured adoption path from explanation to
automation with verification built in as a mandatory step.

## Sections

From the idea file's suggested structure (long-form Substack, ~2,200 words):

- **Opening: the institutional signal** (200 words) — establishes that this is past the
  experimentation phase. "Citadel. BNY Mellon. A 400-person hedge fund where every employee uses
  Claude." Evidence: `[src:source-001]`.
- **Why this is different from ChatGPT** (300 words) — establishes the distinction the piece rests
  on: Claude for Excel works inside the live workbook, reads formulas, modifies assumptions while
  preserving dependencies. Comparison of Claude for Excel (embedded, formula-aware) vs ChatGPT (file
  upload, works on copies) vs Copilot for Finance (ERP-focused). Evidence: `[src:source-012]`,
  `[src:source-010]`. Visual: comparison table (in prose, not an image).
- **What I actually tried** (400 words) — first-hand evidence: explaining a formula chain across 4
  tabs, sensitivity analysis on revenue assumptions, building a comps table, tracing a circular
  reference error, cross-app model analysis → deck generation. "For each: what worked, what
  surprised me, what failed. Concrete, specific, with before/after." Evidence: author's own hands-on
  testing (still an open dependency).
- **The adoption ladder** (400 words) — the framework and the takeaway. Level 1 explain and audit
  (zero risk), Level 2 scenario testing (low risk, high value), Level 3 draft model building (medium
  risk, requires verification), Level 4 agent workflows (high value, requires governance). "For each
  level: what to try, what to watch for, when to graduate to the next. This is the screenshottable,
  shareable framework." Evidence: `[src:source-001]` for the Level 4 templates.
- **Where it will break you** (350 words) — the honest limits specific to financial work: numerical
  hallucination, non-deterministic outputs, circular reference struggles, compliance gap (no
  SEC/FINRA guidance yet), audit trail absence. Evidence: `[src:source-002]`, `[src:source-003]`,
  `[src:source-004]`.
- **The verification habit** (200 words) — converts the limits into a practice: never accept a
  number without checking it against a source; spot-check ratios against filings, compare outputs to
  known benchmarks, keep a "Claude vs source" log for the first month.
- **Close: the best analyst will be the one who verifies fastest** (150 words) — reframes the
  competitive dynamic and links to Claude for Excel and the finance agent templates.

## Objections to address

The counterarguments the idea lists, in its order:

1. **"LLMs can't be trusted with financial calculations — the error rates prove it."** Agree with the
   premise, reframe the conclusion: use Claude to accelerate the parts that aren't calculation and
   verify every number yourself. Handled by the adoption ladder.
2. **"This is just a Claude ad."** Answered by genuine balance — where ChatGPT + Code Interpreter is
   better, where Copilot for Finance is better, and Claude for Excel's own weaknesses (newer
   product, fewer integrations, limited independent reviews). Handled in "Why this is different from
   ChatGPT."
3. **"My compliance team will never approve this."** Acknowledged as a real constraint; institutional
   adopters use Claude for internal analysis with guardrails, and Level 1 is zero-risk. Handled in
   the ladder and "Where it will break you."
4. **"I've tried ChatGPT for financial work and it was terrible."** Distinguish ChatGPT-the-chatbot
   from Claude-for-Excel reading the live workbook. Handled in "Why this is different from ChatGPT."
5. **"Excel is dying — this should be about Python/SQL."** Excel remains dominant in IB, PE, asset
   management and corporate finance; meeting analysts in Excel is the right starting point.

## Visuals

None. No images exist for this piece.

Screenshots were identified as wanted but never produced: "Document screenshots for the article and
carousel" and, in the draft's author notes, "Screenshots would strengthen this significantly."

## Open gaps

The idea file's unresolved open questions:

- Personal examples — which specific financial models can be referenced; a sanitized DCF or LBO was
  suggested. The draft's "What I Actually Tried" section carries an author note saying the examples
  there are placeholders to be replaced with the author's own.
- Claude for Excel hands-on — a structured test session (3-statement model, scenarios, error
  tracing) with screenshots was planned, not recorded as done.
- Audience calibration — bank analyst vs PE associate vs FP&A vs startup CFO.
- Data connectors — whether the 14+ connectors belong in this piece or are scope creep.
- Series fit — "Probably standalone, not series."
- Factual claims the draft flags for verification: Walleye Capital 400-person / 100% adoption; Vals
  AI 64.37% currency; Claude for Excel pricing; the Ctrl+Option+C shortcut; the May 5, 2026
  announcement date; and whether the Copilot for Finance characterization is still accurate.

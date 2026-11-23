# 2×2 prioritization — impact versus feasibility

**Axes (provisional expert estimates, not research measurements):**
- **Impact, 1–5:** expected value for settling **one disputed card combination correctly and with evidence**. High = 4–5.
- **Feasibility, 1–5:** practical ease of implementing a testable MVP from a few permitted **text-based** rulebooks. High = 4–5.
- Ratings are assumptions to revisit after prototyping; not weighted or statistically derived.

## Matrix

| | **LOW feasibility (1–3)** | **HIGH feasibility (4–5)** |
| --- | --- | --- |
| **HIGH impact (4–5)** | **Later:** S5 Cross-reference retrieval (I5/F2); S6 Official-vs-house-rule distinction (I4/F2) | **MVP focus:** S1 Situation question (I5/F5); S2 Source-linked ruling (I5/F4); S3 Game/edition scope (I5/F4); S4 Focused clarification (I4/F4) |
| **LOW impact (1–3)** | **Defer:** S9 Card camera (I3/F2); S10 Voice question (I2/F2) | **Optional:** S7 Saved rulings (I2/F5); S8 Share ruling snippet (I3/F5) |

## Why each idea sits here

| ID | Impact / feasibility | Rationale | Evidence status |
| --- | --- | --- | --- |
| S1 | **5 / 5** | The question arose as an exact card sequence; text input is technically straightforward. | Task relevance supported by E1; rating assumed. |
| S2 | **5 / 4** | P01 read rules before agreeing; passage citations are important but require reliable extraction. | Rule reading supported by E2; interface benefit/effort assumed. |
| S3 | **5 / 4** | Edition mismatch is serious for accuracy, while selection UI is modest. | Project constraint / audit-derived risk; not participant evidence. |
| S4 | **4 / 4** | One targeted follow-up avoids guessing with relatively small UI scope. | Assumption about missing-context frequency and usability. |
| S5 | **5 / 2** | Combining scattered exceptions may be valuable, but trustworthy cross-references are challenging. | Technical hypothesis, not tested. |
| S6 | **4 / 2** | Distinguishing house rules would improve clarity but needs an explicit, separate local-rule record. | Assumption; not in interview. |
| S7 | **2 / 5** | Easy storage, little evidence of repeated lookup needs for this one task. | Low demand evidence; score provisional. |
| S8 | **3 / 5** | Simple to copy ruling plus source; group setting suggests utility but not demonstrated. | Group setting E1; sharing need unverified. |
| S9 | **3 / 2** | Camera/OCR adds work and errors without solving citation reliability. | Entirely assumption. |
| S10 | **2 / 2** | Speech recognition raises complexity; no voice demand reported. | Entirely assumption. |

## Direction chosen and why

**Take forward S1 + S2, supported by the minimum needed S3 + S4.** Build a **small, mobile-friendly rule-checking prototype**: choose the correct game edition, ask one situational question, see a concise ruling with a clickable supporting passage, and receive a clarification or explicit “insufficient evidence” response when necessary.

**Justification:** The only primary participant account contains a specific card-combination dispute (E1) and rule reading before a decision (E2). Therefore asking about a situation and accessing the rule text are closer to documented behavior than camera, speech or favorites. Edition scope and clarification are preventive safeguards extrapolated from the project and audit; they must be tested rather than described as user demands. The chosen set can be evaluated without implementing broad automation.

**Proposed next test:** Five participants each resolve four supported rule questions and one unresolved case using the prototype. Measure correct ruling, correct supporting passage, completion within 90 seconds, and explicit handling of missing evidence. Compare to plain rule-page search; validate or revise the matrix from observed outcomes.

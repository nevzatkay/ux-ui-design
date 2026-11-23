# Rulebook — Research and test evidence policy

This policy prevents a common coursework problem: treating **screen inspection, planned tests, simulated scenarios and real participant findings** as if they were interchangeable.

## Evidence levels

| Code | Evidence type | Can support | Cannot support |
| --- | --- | --- | --- |
| P01 | Actual anonymous retrospective report of one UNO +2/+4 incident | A participant reported searching and reading rules | Population claims, time/emotion, official rule correctness |
| DRxx | Designer review of authored Figma frames, prose and accessibility risks | A particular UI element/label exists and motivates a design hypothesis | Frequency of real user confusion |
| TECHxx | Deterministic Figma inspection: reaction links, variants and instances | Navigation is structurally linked; reusable components exist | Whether a person can complete or understand the task |
| SIMxx | Clearly named fictional/synthetic example | Explaining how to fill a research form | Any real consent, quote, timing or successful usability test |
| Uxx/Txx/Lxx/Rxx | Consented independent real participant session | Observed behavior within the stated task and sample | Population-wide causal effects from a tiny sample |

## Mandatory provenance for a genuine result

A real observation record should state: anonymous ID; consent obtained; approximate session date; task and starting prototype; actual action/path; direct exact quote **if any**; independent completion; observed problem; interpretation clearly separated; limitations.

Do not fabricate:
- consent or number of participants;
- a quotation, pause, misclick, completion time or success rate;
- verified official source pages or citations not actually retrieved;
- A/B performance gain or claims of WCAG compliance without testing.

## What current files actually establish

- One retrospective person account appears in Week 02.
- Week 03 contains external-site heuristic and text-only audit observations, with accessibility issues needing live verification.
- Week 07 peer test: **not conducted**.
- Week 05 label test: **0/3**.
- Week 08 usability study: **0/3**.
- Week 09: **technical recheck only**; independent participant retest not conducted.
- Weeks 05/07/08/09 contain extra `SIMULATED` examples, never a substitute for the above.

## Good final-report wording

- **Appropriate:** “We observed a reported UNO disagreement; the prototype was designed to expose source status. Its four main navigation links were technically checked, while three-person usability testing remains pending.”
- **Inappropriate:** “Three players tested Rulebook and all understood the citations,” if there are only simulated rows.

## Decision discipline

Every iteration should include **evidence → hypothesis → change → rejected alternative → expected effect → open question → measured check/limits**. If evidence is a design inspection, label it `DRxx` and set human effectiveness to `unverified`.

## Submission and ethics

Obtain informed, voluntary permission before using classmates' observations. Keep identifying details out of a public GitHub repository. If a participant declines, do not preserve their individual responses. Retain only research-relevant anonymous notes.

The standard sample in this project is an **illustration**. A factual Uno ruling must be tied to a permissioned official source, correct edition and exact passage before claiming source-backed correctness.

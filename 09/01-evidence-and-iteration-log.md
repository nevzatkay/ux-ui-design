# 01 — Decision log: iteration from Week 08

## Evidence source and severity

Week 08 `04-severity-and-findings.md` identified **designer-inspected** risks DR01–DR04, with provisional High / Medium severity. No three-person usability-test results exist, so the rows below never claim to be participant findings. The design decisions preserve the single main task: inspect a proposed UNO card combination against the correct rule source or recognize that no answer is supported.

| Decision | Evidence / severity (not user test) | Checkable hypothesis | Change made in Week 09 | Rejected alternative / trade-off | Expected effect and target | Open question |
| --- | --- | --- | --- | --- | --- | --- |
| **IT01 — Explicit evidence state** | **DR01, High**: Week 07–08 rule passages are placeholders and can look authoritative. | If “DEMO / NOT VERIFIED” appears in the evidence component and a separate warning appears on S04, the player will recognize that the result is only a demonstration. | Created reusable `Rulebook / Evidence status card` with `Demo`, `NoEvidence`, `Reviewed`; S03 uses Demo and S04 explicitly labels the example passage. | **Alternative:** hide the source screen entirely until licensed documents are indexed. **Trade-off:** that would avoid sample evidence but prevent prototype testing of the source-reading task. | **Future peer criterion:** 3/3 participants correctly identify the absence of a verified citation without a hint. **Technical precheck:** warning strings present on both S03 and S04. | Would a prominent “DEMO” label be missed in a rushed group setting? |
| **IT02 — One primary next step** | **DR04, Medium**: answer, citations and recovery competed for attention; user impact unknown. | If S03 has one salient text-labeled primary action, most users will open the source rather than an exception branch on their first attempt. | Native `Button` component set: `Style=Primary/Secondary`, `State=Enabled/Disabled`; S03 primary button says “Inspect source” with secondary no-source recovery. | **Alternative:** icon-only source link beside evidence. **Trade-off:** takes less space but is harder to recognize and describe to a screen reader. | **Future criterion:** ≥2/3 reach S04 without prompting or wrong-turn recovery. **Technical precheck:** S03→S04 click is correctly connected. | Does “Inspect source” communicate the expected result better than “Read rule”? |
| **IT03 — Form states without a false text-entry claim** | **DR02, High**: S02 contained a preset question; the Week 08 test could not measure question creation. | Explicit input state labels (default/focus/error) and a scope note will stop evaluators interpreting navigation success as successful data entry. | Created `Rule question field` with `State=Default/Focus/Error`; default shown on S02, focus shown in E01, error specified for future validation; preset-input limitation remains visible. | **Alternative:** make fake input visually editable without actual interaction. **Trade-off:** would appear functional but mislead participants and developer handoff. | **Technical target:** 3/3 variants exist and are named; **future goal:** test real typing once a functional form exists. | Can participants identify that the field is a preset when the task asks them to investigate a move? |
| **IT04 — Confirmation must not imply correctness** | **DR03, Medium**: older completion copy sounded like a verified referee ruling even though the citation was a sample. | If success says the sample was reviewed, participants will not mistake S05 for validation of the actual game rule. | Reused `Evidence=Reviewed` component on S05 and clearly states that the actual rulebook must determine the table decision. | **Alternative:** a large green check and “Correct answer” badge. **Trade-off:** looks decisive but falsely communicates proof. | **Future criterion:** 3/3 explain that they reviewed an example, not a certified answer. **Technical precheck:** review state has a distinct named component. | Should the confirmation repeat the full source version and reference when the backend exists? |

## Prioritization and rationale

IT01 and IT03 are **high-priority trust/validity concerns**, based on designer review. IT02 and IT04 clarify navigation and completion. These are not user-tested fixes; severity must be re-ranked with observed incidence and recoverability after the three consented trials.

## Implementation map

- **S01:** edition-select component; supported-edition path and E03.
- **S02:** Rule question default input; missing-details path to E01.
- **S03:** Evidence=Demo component, primary inspect action and E02 recovery.
- **S04:** visibly labeled sample passage, explicit source-loading error E04.
- **S05:** Evidence=Reviewed and restart action.
- **03 — Dev handoff:** S03 as Demo, NoEvidence, MissingContext, and SourceError specification states.

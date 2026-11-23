# Week 07 — Prototype route coverage and independent-trial acceptance

[Open the Week 07 prototype](https://www.figma.com/proto/XaM92SjirDruf467HMzwZD?node-id=1-4&starting-point-node-id=1%3A4).

## What was produced

A clickable prototype for a **single decision task** with S01 Choose rules, S02 Ask, S03 Answer/source, S04 Inspect source and S05 Completion, plus three explicitly reachable exceptions E01 missing details, E02 no evidence and E03 unsupported edition.

**Known limitation:** The question is prefilled, the rule answer is an illustrative sample, and there is no real rulebook search or editable text input.

## Acceptance matrix

| Scenario / question | Source frame | Destination / expectation | Status |
| --- | --- | --- | --- |
| Main route | S01 → S02 → S03 → S04 → S05 | All four transitions are represented as native Figma interactions | Implemented in the Week 07 design; human ease of use unverified |
| Unavailable edition | S01 | E03 explains limitation, allows reselect | Designed and connected |
| Need a specific detail | S02 | E01 asks a relevant follow-up, lets user revise | Designed and connected |
| Cannot support ruling | S03 | E02 clearly abstains and offers recovery | Designed and connected |
| Source inspection | S03 → S04 | Passage is visibly demo/unverified; no fake page | Prototype scope documented |
| Completion | S04 → S05 | Ends the **navigation** journey, not an official rules decision | Implemented in prototype |
| One independent peer trial | Consent and separate behavior notes | At least three genuine quote/observation/interpretation records, if applicable | **NOT RUN** |

## Independent peer-trial task and recording

Use the neutral [scenario](02-first-trial-protocol.md) with exactly one other student (or more). Do not demonstrate the controls or tell them which screen to open.

**Record:** screen-by-screen sequence, any misclick/backtrack, whether the source was opened before completion, exact words if spoken and consented, and one change inferred from an actual problem. Keep **behavior ≠ quote ≠ interpretation** separate. An imagined pause is not an observed pause.

**Success criterion (proposed):** the participant reaches source inspection and can explain that it is a demonstration without moderator hints. If they trust an unverified answer as official, treat that as a high-severity risk regardless of whether all buttons worked.

## Triaging observed issues after a real session

| Priority | Rule |
| --- | --- |
| P0 | Wrong official-authority impression, inaccessible task or misleading citation |
| P1 | Major detour, inaccessible recovery or unclear source action |
| P2 | Recoverable label confusion or redundant navigation |
| P3 | Minor copy or presentation friction |

**Research status:** No peer-trial results exist in [the actual evidence sheet](03-observations-and-feedback.md). The [SIMULATED case](06-SIMULATED-peer-trial-example.md) demonstrates format only and is not evidence.

**Next check:** Have one independent participant follow the neutral task; record the first unprompted action on S03 and whether they open S04. This is the most direct uncertainty affecting the source-first design.

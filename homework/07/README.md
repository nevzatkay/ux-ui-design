---
week: 7
neptun: JWM27Z
project: Rulebook — board-game rules companion with source references
submission_type: clickable Figma prototype and informal first feedback
---

# Week 7 — Clickable prototype and first feedback

**Figma prototype (start at S01):** https://www.figma.com/proto/XaM92SjirDruf467HMzwZD?node-id=1-4&starting-point-node-id=1%3A4

**Editable Figma file:** https://www.figma.com/design/XaM92SjirDruf467HMzwZD

**PowerMD presentation:** [presentation/07-01/presentation.md](../../presentation/07-01/presentation.md)

## Goal and implemented flow

A player in a group is uncertain about a disputed card sequence and wants to check a supported ruling in the chosen ruleset.

**S01 Choose game & rules → S02 Ask a rule → S03 Answer & source → S04 Read source → S05 Confirmation.** The primary task succeeds when the user opens the source passage and explicitly marks that it was checked; the prototype does not adjudicate the real game.

**Exceptional states reachable by click:** E01 Missing details (from S02), E02 No supported answer (from S03) and E03 Unsupported edition (from S01). Each state has a recovery link. These are linked as native Figma click interactions; they are not merely arrows on a static board.

## Deliverables and evidence status

| Homework item | Where | Status |
| --- | --- | --- |
| Shareable Figma prototype | Link above, start S01 | Prototype links implemented; verify teacher sharing access |
| Clear start and success | S01 and S05 | Implemented |
| Working main-path connections | S01→S02→S03→S04→S05 | Implemented |
| Exception reachable | E01, E02, E03 | Implemented |
| Known limitations | [Prototype map and limits](01-prototype-flow-and-limitations.md) | Documented |
| Scenario and task for first trial | [Trial protocol](02-first-trial-protocol.md) | Prepared, not run |
| ≥3 quote / observation / interpretation records | [Feedback log](03-observations-and-feedback.md) | **Not collected; actual peer trial required** |
| Surprising / useful / change reflection | [Reflection](04-reflection-and-next-step.md) | Design reflection drafted; post-test reflection pending |

## Data integrity

No other student's trial has been completed through this workflow, and no participant quotes, behavioral observations, completion times or success percentages are claimed. Three slots in the feedback log are ready for real, anonymized data. This is the one element that still needs human participation before the homework meets every evaluation criterion.

The Week 5 label-comprehension test is also pending; current labels are provisional. The Figma prototype uses a static example and a deliberately unverified rulebook passage placeholder, not a final authoritative UNO ruling.

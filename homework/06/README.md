---
week: 6
neptun: JWM27Z
project: Rulebook — Board-game rules companion with source references
figma: https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr
presentation: ../../presentation/06-01/presentation.md
---

# Homework 06 — Low-fidelity wireframes

**Student:** Nevzat Kayıkçı · **Neptun:** JWM27Z  
**Course:** UX/UI Design · University of Pécs  
**Deliverable:** [Standalone Week 6 Figma Design](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr)  
**PowerMD presentation:** [presentation/06-01/presentation.md](../../presentation/06-01/presentation.md)

This Figma file contains **Week 6 only**. It does not mix Week 4 or Week 5 boards into the wireframe canvas. Its screen structure directly follows Week 5's sitemap and main decision task.

## Task and design boundary

**User goal:** During a card game, a player wants to check whether a proposed move is allowed by the selected rulebook, inspect a source passage, and return to the table with a supported ruling—or a clear statement that the evidence is insufficient.

The example scenario is a group's UNO `+2 → +4` dispute. This is a **low-fidelity task example**, not a verified automated rules engine. Exact document page numbers and final rulebook wording must be bound to a permitted source during implementation.

## Figma deliverables — independently verified

| Screen | Frame | Main action |
| --- | --- | --- |
| S01 — Choose game & rules | [Open mobile frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-4) | Continue to the question |
| S02 — Ask a rule | [Open mobile frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-29) | Ask about this rule |
| S03 — Answer & source | [Open mobile frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-47) | Read source passage |
| S04 — Read source | [Open mobile frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-64) | I checked this source |
| S05 — Confirmation | [Open mobile frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-79) | Ask another question / return to game |
| E01 — Missing details | [Open state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-94) | Supply missing card or phase |
| E02 — No supported answer (empty evidence) | [Open state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-111) | Edit the question or change the edition |
| E03 — Unsupported edition | [Open state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-126) | Choose another edition |
| E04 — Error / conflicting evidence | [Open state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-139) | Retry or revise the question |
| S03 — Desktop answer & source | [Open larger-screen frame](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=6-2) | Inspect the ruling and source side by side |

The design includes 5 main task screens, 4 critical state screens, and a 1040px-wide desktop adaptation of S03; all are native, editable, black-and-white Figma frames. The five mobile screens and the exception frames use vertical Auto Layout. The desktop S03 includes **horizontal Auto Layout columns** nested in a vertical page frame.

Connections are identified on the canvas by screen IDs and arrows, with a separate flow explanation. The project deliberately uses reference arrows rather than claiming a functional clickable prototype.

## Files

- [01-screen-specifications.md](01-screen-specifications.md) — each screen, action and next step
- [02-layout-logic-and-annotations.md](02-layout-logic-and-annotations.md) — content hierarchy, desktop/mobile, Auto Layout justification
- [03-user-flow-and-critical-states.md](03-user-flow-and-critical-states.md) — decision points and exceptional paths
- [04-delivery-check.md](04-delivery-check.md) — evaluation-criteria mapping and remaining limitations
- [PowerMD slide deck](../../presentation/06-01/presentation.md) — slides with `<!--@slide ...-->` markers and Mermaid flow

## Academic honesty and boundaries

- The screen labels are proposed wording; the three-person label test from Week 5 remains **unverified**. No results are invented here.
- The +2/+4 ruling shown on the draft wireframe is example content, not the result of a tested product. Actual rulebook passages and citations must be loaded from a permitted source.
- The **Figma file and nodes were created and checked**; whether a teacher can open the link depends on the file's **Share** permissions.
- No final colors, photography, decoration, real AI integration or production functionality are claimed.

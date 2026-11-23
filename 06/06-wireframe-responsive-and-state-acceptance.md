# Week 06 — Responsive wireframe and state acceptance checklist

**Figma:** [Week 06 standalone wireframes](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr). This is a **low-fidelity structure specification**. It does not claim final visual styling, interactive text entry, real citations, or validated accessibility.

## Screens and task rules

| ID | Main purpose | Required visible hierarchy | Next action / state |
| --- | --- | --- | --- |
| S01 | Choose the applicable ruleset | Title → game → edition/expansions → Continue | S02 or E03 (unsupported) |
| S02 | State the disputed move | Ruleset recap → question field → submit | S03 or E01 (one missing detail) |
| S03 | Interpret result and evidence | Source status → short response → citation preview → open source | S04 or E02 (no evidence) |
| S04 | Inspect passage in context | Document/version → excerpt → review/return actions | S05 or E04 (cannot load) |
| S05 | Confirm navigation is complete | Honest completion note → new question | Return S02 |
| E01–E04 | Handle missing context/source/version/network | Cause in plain words → primary recovery → retain user context | Back to relevant screen |

## Responsive implementation targets (designer specification, NOT device test)

| Layout | Width | Expected structure | Must remain true |
| --- | ---: | --- | --- |
| Mobile task screens | Approx. 384–390 px | One-column vertical reading order, clear content grouping, 24 px outer horizontal padding | No horizontal scrolling; primary action follows its evidence |
| Desktop answer view | 1040 px documented | Side-by-side answer summary and supporting evidence | Source status and edition stay visible; left-to-right visual sequence matches accessible reading order |
| Narrower phones (future validation) | 320 px proposed stress test | Stack all content and wrap long source labels | Buttons remain perceivable and readable; no clipped text |
| Larger fonts (future validation) | Up to 200% text zoom proposed | Hug-content heights and reflowed text | Meaning and interaction not hidden under fixed layers |

## Auto Layout expectations

- Main screens use **vertical Auto Layout**; card/field groups grow with content.
- Desktop S03 uses **horizontal Auto Layout** within a vertical page frame.
- Long edition names and question text must wrap instead of clipping.
- The return/back action is distinct from a status message, and does not alter the selected version unexpectedly.
- A new question does not inherit an old citation.

## Five structural checks the developer can run

1. Every screen begins with one meaningful heading and includes the selected game/edition when relevant.
2. E01, E02, E03 and E04 have **non-dead-end** recovery actions.
3. S03 never treats the absence of a real source as a successful supported ruling.
4. On S04 source error, the prior question and edition are preserved.
5. At mobile width, user can reach the next step without a horizontally scrolling source excerpt.

**Evidence level:** These are explicit developer acceptance checks drawn from the wireframes. Actual keyboard, screen reader, 320 px and 200% zoom tests have **not** been run.

[Screen specifications](01-screen-specifications.md) · [Layout and annotation rationale](02-layout-logic-and-annotations.md) · [Critical states](03-user-flow-and-critical-states.md) · [Existing rubric check](04-delivery-check.md)

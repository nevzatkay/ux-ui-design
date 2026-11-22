# 03 — Reusable Figma components, variants and placement

[Open the Week 09 Figma design system](https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy) → **02 — Components and variants**.

## Native Figma component sets

| Set name in Figma | Variant axis and values | Actual states | Used on |
| --- | --- | --- | --- |
| `Rulebook / Button` | `Style=Primary / Secondary`; `State=Enabled / Disabled` | 4 combinations | Primary and secondary actions on S01–S05 and E01–E04; disabled is a documented future validation state |
| `Rulebook / Rule question field` | `State=Default / Focus / Error` | 3 | S02 default, E01 focus; error available for form-validation implementation |
| `Rulebook / Evidence status card` | `Evidence=Demo / NoEvidence / Reviewed` | 3 | S03 demo, E02 no evidence, S05 reviewed, S03 handoff states |
| `Rulebook / Edition select` | `State=Closed / Open` | 2 | S01 closed, open documented as a variant |

**Verified:** 4 native component sets containing **12 Figma component variants**. The Figma flow contains **23 instances** across nine screens, so the library is not decorative or unrelated to the app. The variants are laid out in named component sets, not stacked on top of one another.

## Rules for using them

**Buttons:** one primary action per screen, secondary for alternative/recovery. Enabled must have meaningful label and accessible name; disabled must not accept navigation, and must have a reason near it when functionality is unavailable. In production, keyboard focus and target size ≥44×44 CSS px should be implemented and verified. Figma shows focus styles but cannot substitute for keyboard testing.

**Input:** use a persistent text label, not just a placeholder. Focus has a visible ring; Error has explicit error text and a relationship to the field in code. The prototype's text is fixed; actual typing, validation and error presentation will be developed later.

**Evidence card:** state must be written in text and associated with actual rule-version/source data. `Demo` may be used only for the mock-up, `NoEvidence` offers no fabricated citation, and `Reviewed` confirms only that the review step was reached.

**Edition select:** always display current edition, and never select another edition without the user choosing it. The selected ruleset must persist through answer, source and retry states.

## Naming and reuse

- Components are named `Rulebook / <functional control>`.
- Variant axes are `Style=`, `State=`, and `Evidence=`.
- Screens use `W09 | Sxx/Eyy | <task label>`.
- Instances are `Instance | <screen> | <purpose>`.
- Handoff frames use `HANDOFF / S03 / State=<state>`.

This grouping lets a developer find a control by function and state without searching for decorative UI elements. No buttons or inputs unrelated to the Rulebook flow were created.

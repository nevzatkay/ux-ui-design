# 02 — Check of selected modifications (technical, not participant retest)

## Method

On 22 November 2026, the connected Figma editor was queried for the **actual `reactions` navigation targets**, instantiated component types and visible status text. This is a deterministic structural inspection of the authored mock-up, not a participant trial, visual accessibility audit, or measurement of human comprehension.

## Checks and success criteria

| Modification / criterion | Measured result | Status | What it actually shows |
| --- | --- | --- | --- |
| Core navigation is traversable: **S01→S02→S03→S04→S05**, four expected links | **4/4** links point to the intended next screen | **Pass — technical** | The Figma clicks target the right frames; no one has tested whether the controls are understandable. |
| All four exceptional branches can be entered from the main task: edition unavailable E03, details missing E01, no evidence E02, source error E04 | **4/4** entry links connected | **Pass — technical** | Exception states are reachable in the clickable mock-up. |
| Evidence labeling is not falsely verified on S03 and S04 | **2/2** screens contain “NOT VERIFIED” or sample-status wording (inspected text nodes) | **Pass — technical** | The words exist on screen; users may still miss or misunderstand them. |
| Native components: button 4, input 3, evidence card 3, edition selector 2 | **12/12** documented variants exist across **4** component sets | **Pass — structural** | Variants are genuine Figma `COMPONENT` nodes in `COMPONENT_SET` parents, rather than decorative shapes. |
| Components are actually reused in user-flow screens | **23** Figma `INSTANCE` nodes across the 9 main/exception screens | **Pass — structural** | Library is reused on screens and can propagate shared changes. |
| Handoff includes the task's relevant answer states | **4/4** handoff state frames present | **Pass — structural** | Variants are described; backend results and real screen-reader behavior are still unimplemented. |

## Why the measurement is limited

This **does not** establish a successful usability retest, support for real card rulings, effectiveness of the visual hierarchy, keyboard support, or correct focus behavior. The prototype uses preset text and demonstration source material; no real PDF is bound to the citations. A student test could still fail despite all four links being technically correct.

## Next human recheck (not performed)

Give three students the Week 08 neutral scenario without verbal navigation hints. Record completion, 90-second exploratory target, wrong turns, source-status interpretation and whether they incorrectly attribute authority to the sample. Planned target: all three acknowledge the evidence is not verified. Record actual outcomes before asserting improvement.

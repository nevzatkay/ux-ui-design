# Fix decisions and accessibility justification

**Design source:** Provisional inspection DR01–DR04 in `04-severity-and-findings.md`. These are not yet fixes proven by participant tests.

| Before | Refined design | Why it supports the main task | Accessibility / comprehension basis |
| --- | --- | --- | --- |
| Example rule presented without strong demo warning | S03 and S04 label “EXAMPLE / NOT VERIFIED” and “SAMPLE RULEBOOK TEXT” | Limits false confidence in an unsupported ruling | Visibility of system status; words are not color-only |
| S02 fixed question without scope explanation | Explicit noneditable example label | Prevents misleading trial success about real query composition | Clear instructions / expectations |
| “Source checked” sounded authoritative | “Review complete” with honest prototype limitation | Separates completed task navigation from correctness | Error prevention, plain language |
| Weak distinction among unknown/missing/error states | Separate E01 “More information needed”, E02 “No supported evidence”, E03 “Edition unavailable”, E04 “Source cannot load” | Correct recovery route for each risk | WCAG 1.3.1 meaningful structure; explicit descriptive labels |
| Undocumented visual role colors | Figma semantic light/dark variables, readable focus and border roles | Keeps answers and recovery readable at the table | WCAG 1.4.3 / 1.4.11 AA contrast thresholds |
| Unclear action prominence | One clear primary CTA per task screen, secondary alternatives | Players can find the next step without inspecting every option | Consistent hierarchy and recognition over recall |

## Reachable prototype path

`S01 → S02 → S03 → S04 → S05`. The main path is native Figma navigation, with additional routes to E01–E04 and back. The true clickable file is [here](https://www.figma.com/proto/lDLN7kR1Y8MTZruP0Ku3JR?node-id=2-4&starting-point-node-id=2%3A4). This click-through is a navigational simulation only, not a product implementation.

## Why WCAG thresholds matter

WCAG 2.2 AA requires at least **4.5:1** for normal text (1.4.3) and **3:1** for visual information needed to identify UI components/states (1.4.11). Contrast checks in `contrast-audit.csv` test the specified foreground/background pairs. This does not prove full WCAG conformance; keyboard, screen-reader, focus and responsiveness still need testing.

- Official W3C text contrast: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- Official W3C component contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast

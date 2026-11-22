# Week 8 — WCAG AA contrast audit

The following values are calculated for the specified foreground/background pair. The contrast checks support the prototype's mini UI guideline; they do not constitute a complete accessibility audit.

| Mode | Component | Foreground | Background | Category | Ratio | Minimum | Result |
| --- | --- | --- | --- | --- | ---: | ---: | --- |
| light | body text | #111827 | #FFFFFF | normal text | 17.74:1 | 4.5:1 | PASS |
| light | supporting text | #475569 | #FFFFFF | normal text | 7.58:1 | 4.5:1 | PASS |
| light | button label | #FFFFFF | #1D4ED8 | normal text | 6.70:1 | 4.5:1 | PASS |
| light | input border | #64748B | #FFFFFF | UI component | 4.76:1 | 3.0:1 | PASS |
| light | error label | #B91C1C | #FFFFFF | normal text | 6.47:1 | 4.5:1 | PASS |
| light | warning label | #92400E | #FFFFFF | normal text | 7.09:1 | 4.5:1 | PASS |
| light | focus ring | #1D4ED8 | #FFFFFF | UI component | 6.70:1 | 3.0:1 | PASS |
| dark | body text | #F1F5F9 | #0B1220 | normal text | 17.09:1 | 4.5:1 | PASS |
| dark | supporting text | #CBD5E1 | #172033 | normal text | 10.96:1 | 4.5:1 | PASS |
| dark | button label | #0B1220 | #93C5FD | normal text | 10.38:1 | 4.5:1 | PASS |
| dark | input border | #93C5FD | #172033 | UI component | 9.02:1 | 3.0:1 | PASS |
| dark | error label | #FCA5A5 | #172033 | normal text | 8.57:1 | 4.5:1 | PASS |
| dark | warning label | #FDBA74 | #172033 | normal text | 9.65:1 | 4.5:1 | PASS |

For normal-size text, AA requires at least 4.5:1. For meaningful user-interface boundaries and non-text graphics, AA requires at least 3:1. In Figma, role variables cover light and dark themes, and status is also described in text.

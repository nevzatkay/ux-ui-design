# 09 — Contrast audit and limitations

Calculated from sRGB relative luminance using the WCAG contrast formula, rounded to two decimal places. The values below apply **only to these specified foreground/background pairs** and are not a substitute for a full accessibility audit.

| Use | Foreground | Background | Ratio | Threshold | Result |
| --- | --- | --- | ---: | ---: | --- |
| Light primary button label | `#FFFFFF` | `#1D4ED8` | **6.70:1** | 4.5:1 | Pass AA normal text |
| Light main body | `#111827` | `#FFFFFF` | **17.74:1** | 4.5:1 | Pass |
| Light supporting body | `#475569` | `#FFFFFF` | **7.58:1** | 4.5:1 | Pass |
| Light disabled button label | `#475569` | `#E2E8F0` | **6.15:1** | 4.5:1 | Pass (disabled controls are not in scope for 1.4.3 but retained for legibility) |
| Light focus outline | `#1D4ED8` | `#FFFFFF` | **6.70:1** | 3:1 | Pass non-text ratio |
| Light input border | `#64748B` | `#FFFFFF` | **4.76:1** | 3:1 | Pass |
| Dark primary body | `#F1F5F9` | `#172033` | **14.85:1** | 4.5:1 | Pass |
| Dark primary action text | `#93C5FD` | `#172033` | **9.02:1** | 4.5:1 | Pass |
| Dark disabled label | `#CBD5E1` | `#334155` | **6.97:1** | 4.5:1 | Pass |

**Limitations:** WCAG AA involves more than static color ratios: input semantics, contrast of all adjacent states, keyboard focus, zoom/reflow, screen readers, disabled behavior and real content must be tested in the functional build. Textual messages are shown for status, so no status depends only on color. Native Figma component variants demonstrate intended design, not executed accessibility.

Reference: [W3C WCAG 2.2 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) and [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).

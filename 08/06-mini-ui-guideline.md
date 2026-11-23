# Rulebook mini UI guideline — Figma page 02

[**Open mini UI guideline in Figma**](https://www.figma.com/design/lDLN7kR1Y8MTZruP0Ku3JR) and select **02 — Mini UI guideline**.

This is a small design system for **the rule-checking task**, not for an imagined full app. Text is Inter. The Figma file contains **11 semantic color variables with Light and Dark modes**, **five text styles**, and **six spacing variables**. The main prototype binds relevant color roles to actual Figma layers.

## Semantic color variables (Light / Dark)

| Role | Light | Dark | Purpose |
| --- | --- | --- | --- |
| `color/background` | `#F8FAFC` | `#0B1220` | Canvas |
| `color/surface` | `#FFFFFF` | `#172033` | Panels and input areas |
| `color/text/primary` | `#111827` | `#F1F5F9` | Reading text |
| `color/text/secondary` | `#475569` | `#CBD5E1` | Metadata |
| `color/action/primary` | `#1D4ED8` | `#93C5FD` | Primary CTA |
| `color/action/on-primary` | `#FFFFFF` | `#0B1220` | CTA foreground |
| `color/border/interactive` | `#64748B` | `#93C5FD` | Input/button outline |
| `color/status/success` | `#166534` | `#86EFAC` | Success text |
| `color/status/error` | `#B91C1C` | `#FCA5A5` | Error text |
| `color/status/warning` | `#92400E` | `#FDBA74` | Demo/unverified |
| `color/focus` | `#1D4ED8` | `#93C5FD` | Focus indication |

**Contrast:** See [measured values](09-contrast-audit.md). Normal text should reach 4.5:1, and essential control boundaries/icons should reach 3:1 under WCAG AA. Actual component pairings used in the designed UI pass these target values. A theme variable existing does not mean a complete dark-mode UX test has taken place.

## Typography

`Type / Display` Inter 32 Bold; `Type / Heading` Inter 24 Bold; `Type / Body` Inter 16 Regular; `Type / Label` Inter 14 Medium; `Type / Caption` Inter 12 Regular. Use one main heading per screen. Body carries decisions and evidence; never rely solely on tiny captions for critical status.

## Spacing

Figma variables `space/4`, `/8`, `/12`, `/16`, `/24`, `/32` (pixels). In 390px mobile frames, 24px horizontal margins; 16–18px panel padding, ~20px between sections. Mobile-first Auto Layout preserves logical reading order.

## Button rule

Exactly one **primary** action on each task screen, shown as a wide button with an action verb (“Inspect rule passage”), with a high-contrast foreground. Secondary outlined buttons provide alternate paths and recovery. Buttons get descriptive labels and need keyboard focus indication in a functional build.

## Input rule

Persistent visible labels, bordered fields, explicit help/error messaging, clear focus state; a placeholder must not replace a field label. For the *clickable Figma prototype*, input contents are fixed samples. Real form validation is outside this week's prototype.

## Icon rule

Icons are limited to meaningful actions/states (back, evidence link, warning), never decoration. An icon accompanies understandable text and an accessible name; never rely on color or an icon alone to communicate “not verified”.

## Review status

This guideline is justified by design-review findings and WCAG principles. Its effectiveness is **not yet validated by three students**.

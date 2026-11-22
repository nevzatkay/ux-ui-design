# 04 — Mini design system specification

**Figma page:** [02 — Components and variants](https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy)

The Week 09 library reuses the Week 08 semantic concept and formalizes it in native component variants. Color roles have **Light and Dark** modes, and functional layers use role-bound paints. Dark-mode values are tokens, not a separate fully tested dark UX.

## Semantic colors (Light / Dark)

| Variable | Light | Dark | Use |
| --- | --- | --- | --- |
| `color/background` | `#F8FAFC` | `#0B1220` | App background |
| `color/surface` | `#FFFFFF` | `#172033` | Form/card surface |
| `color/text/primary` | `#111827` | `#F1F5F9` | Body and heading |
| `color/text/secondary` | `#475569` | `#CBD5E1` | Metadata/support |
| `color/action/primary` | `#1D4ED8` | `#93C5FD` | Primary action |
| `color/action/on-primary` | `#FFFFFF` | `#0B1220` | Primary label |
| `color/border/interactive` | `#64748B` | `#93C5FD` | Input/button boundaries |
| `color/state/error` | `#B91C1C` | `#FCA5A5` | Error text |
| `color/state/warning` | `#92400E` | `#FDBA74` | Unverified/demo text |
| `color/state/success` | `#166534` | `#86EFAC` | Review state |
| `color/focus` | `#1D4ED8` | `#93C5FD` | Keyboard focus intention |
| `color/disabled/fill` | `#E2E8F0` | `#334155` | Disabled button surface |
| `color/disabled/text` | `#475569` | `#CBD5E1` | Disabled label |

All thirteen roles are **real Figma color variables**. The `Rulebook / Week 09 / Semantic` collection has Light and Dark modes. Contrast samples and interpretation are in `09-contrast-audit.md`.

## Text styles

Five real Figma styles: `Type / Display` 32 px Bold; `Type / Heading` 24 px Bold; `Type / Body` 16 px Regular; `Type / Label` 14 px Medium; `Type / Caption` 12 px Regular. Inter is used consistently. Prefer full words to icon-only status indicators; critical evidence and error states must never be reduced to small caption text.

## Spacing and layout

Six number tokens `space/4`, `space/8`, `space/12`, `space/16`, `space/24`, and `space/32`. Mobile frames are 390px wide, with 24px side padding and vertically grouped Auto Layout elements. If a wider layout is built later, preserve information order: **question → answer/evidence status → source → recovery**.

## Accessibility principles

- Text contrast target **4.5:1** for ordinary text; essential controls and boundaries **3:1** under WCAG AA.
- Focus indicator must be visible even without relying only on hue.
- Labels describe actions; source credibility appears in explicit status text.
- Error handling must be reversible; never erase the user's question on retry.
- Use semantic form controls, heading order, and programmatic status announcements in the functional implementation.

Design decisions are justified by Week 08 **screen inspection** DR01–DR04 and accessibility guidelines. They have **not** been demonstrated to work for three real users.

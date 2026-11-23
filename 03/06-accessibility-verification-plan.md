# Week 03 — Accessibility verification plan and severity rationale

**Audited third-party service:** [UltraBoardGames UNO Game Rules](https://www.ultraboardgames.com/uno/game-rules.php). This document refines the existing [eight inspection findings](annotated-findings.md); it is **not** a new live accessibility test and does not certify the third-party site.

## Distinguish observed structure from unverified failures

| Finding | Existing inspection evidence | Risk if confirmed | Required manual check |
| --- | --- | --- | --- |
| F07 / skipped heading level | Text outline shows Special Cards as H2 and individual card headings at H4 | Heading-navigation sequence may be surprising | Inspect actual DOM heading structure and screen-reader heading list; a skipped level alone is not automatically a WCAG violation |
| F08 / images named only as “Image” in text-only representation | Text-only export does not expose descriptive alternatives | Informational cards may be unclear to screen-reader users | Inspect actual `alt` attributes, computed accessible names and surrounding equivalent text |
| F01 / page-level search | Visible prompt is for board-game search, not intra-rule search | Searching for a +2/+4 ruling may take extra steps | Attempt lookup via keyboard, note page search options and exact interaction sequence |
| F05 / no visible selected edition beside rule text | Page content is not explicitly version-scoped in inspected representation | User may apply rules from a mismatched version | Check page metadata and visible source/version; compare with the real physical deck |

## Repeatable verification protocol (pending execution)

1. Open the audited URL and record **inspection date**, browser and viewport.
2. Navigate the content using only **Tab, Shift+Tab, Enter and arrow keys**, recording focus order and traps.
3. Inspect the live headings as announced by a screen reader (not merely the visual font size).
4. Locate the Draw Two and Wild Draw Four passages with heading navigation and browser Find.
5. Inspect card images' accessible names: distinguish redundant decorative images from informative ones.
6. Verify contrast of identified UI text/components with a real foreground/background pair (not a guessed theme).
7. Screenshot or capture a precise on-page location for each verified finding; log date, viewport and the state displayed.

No steps are marked completed without actual inspection. Existing F07/F08 remain **verification targets**, not confirmed conformance failures.

## Severity rubric

**Critical:** incorrect/unsupported rule is presented as authoritative or task becomes impossible.  
**High:** substantial source or edition ambiguity, major extra effort to locate a rule.  
**Medium:** recoverable search, hierarchy or labeling friction.  
**Low:** minor formatting or secondary-navigation issue.

Severity reflects **potential impact**; observed frequency requires participant evidence, which the original service inspection does not provide.

## Design transfer to Rulebook

- Always show game/edition next to sourced answers.
- Keep `Answer & evidence` separate from `Read original passage`.
- Expose source status in words and accessible label, not solely color.
- Use predictable headings and a visible keyboard focus state.
- For a conflicting/no-source answer, provide a reversible path rather than a confident guess.

### Accessible acceptance checks for the future functional app

- Body text and status text have meaningful accessible names and normal-text contrast of **at least 4.5:1** where required by WCAG 2.2 AA.
- Essential icons, focus indicators and input boundaries reach applicable **3:1** non-text contrast.
- Each screen has one logical primary heading; focus returns to the relevant action after overlay closure.
- Error/unknown states are announced programmatically and remain readable without color perception.

**Limit:** These are implementation requirements, not results from running a screen reader on the Figma click-through.  
[Original audit scope](audit-overview.md) · [Annotated findings](annotated-findings.md) · [Design risks](persona-and-project-risks.md)

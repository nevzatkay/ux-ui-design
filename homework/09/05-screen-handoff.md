# 05 — Developer handoff: S03 “Answer & evidence”

[Open Week 09 Figma](https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy) → **03 — Dev handoff: Answer & evidence**.

The handoff page displays four mobile variants of the same selected task screen, with annotations. In Figma, these are named `HANDOFF / S03 / State=...` and use native component instances. They are marked **UI specification ready / data integration pending** in visible text. The connected Figma editor could **not** set a native `Ready for Dev` flag (`set node.devStatus is not yet supported`); do not present that flag as set.

## Data contract

**Inputs:** `gameId`, `editionId`, `expansionIds[]`, `questionText`, optional `turnContext`.

**Output:** `status ∈ {demo, supported, needs_context, no_evidence, conflict, source_error}`, `answerText`, `citations[]`. Each citation should carry `documentId`, `version`, `sectionId`, `page` (if known), `excerpt`, and an openable source reference. The prototype has no real citation records; demo examples are explicitly labeled.

## Required UI states

| S03 state | Required text | Primary action | Secondary/recovery | Accessibility/behavior |
| --- | --- | --- | --- | --- |
| **Demo/example** | `DEMO / NOT VERIFIED` and summary clearly marked as illustrative | **Inspect source** → S04 | Unsupported → E02 | Show rule set and source status; do not claim proof without actual citation |
| **NoEvidence** | `NO SUPPORTED ANSWER`; no fabricated page | **Edit question** → S02 | Change edition → S01 | Alert must be perceivable in text and announced in live region in functional build |
| **MissingContext** | Specific question about card/turn phase | **Add missing detail** → E01 | Edit original question → S02 | Keep previous input; move focus to prompt; do not guess |
| **SourceError** | `Could not open selected source` | **Retry source** → S04 | Back to answer → S03 | Preserve question and edition; focus to error heading on entry; retry returns to source |

**Note:** `Supported` (real source-backed ruling) and `Conflict` (disagreeing actual sources) are future backend statuses. Their data fields are specified, but no real source-backed output is available in this clickable mock-up. Do not conflate `Demo` with `Supported`.

## Component and variable references

- `Rulebook / Evidence status card`: `Evidence=Demo`, `Evidence=NoEvidence`, `Evidence=Reviewed`.
- `Rulebook / Button`: `Style=Primary/Secondary`, `State=Enabled/Disabled`.
- `Rulebook / Rule question field`: `State=Default/Focus/Error`.
- Semantic colors: `color/surface`, `color/text/primary`, `color/text/secondary`, `color/action/primary`, `color/action/on-primary`, `color/border/interactive`, `color/state/warning`, `color/state/error`, `color/state/success`, `color/focus`.
- Spacing: `space/8`, `space/12`, `space/16`, `space/24`; type: `Type / Heading`, `Type / Body`, `Type / Label`.

## Developer acceptance rules

1. Before showing a sourced ruling, validate that all cited passages belong to the selected edition and available expansions.
2. If no source or contradictory passages are found, show an explicit uncertainty state; never fabricate citations.
3. S03 main path leads to S04 and S05 via real source review; “reviewed” is **not** proof that the game's move is correct.
4. Implement 44×44 minimum targets, keyboard navigation, visible focus, programmatic labels, `aria-live` for errors, and no color-only status.
5. Preserve the question and ruleset on clarification and source retries. A loading indicator must not imply success.
6. Only mark the production implementation ready after actual document access, backend handling and a human accessibility/usability pass.

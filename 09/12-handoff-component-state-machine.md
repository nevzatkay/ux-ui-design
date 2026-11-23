# Week 09 — Design-system handoff, state machine and dev acceptance

[Week 09 Figma design system and handoff](https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy) · [S03 handoff specification](05-screen-handoff.md).

## Component library actually used in screens

| Figma component set | Native variant axes | Usage and accessibility rule |
| --- | --- | --- |
| `Rulebook / Button` | Style: Primary/Secondary; State: Enabled/Disabled (4) | One primary CTA; descriptive visible label; a disabled control cannot trigger navigation |
| `Rulebook / Rule question field` | Default, Focus, Error (3) | Visible persistent label; helper/error text; focused control has visible focus indicator |
| `Rulebook / Evidence status card` | Demo, NoEvidence, Reviewed (3) | Explicit status text; green/amber/red alone is insufficient |
| `Rulebook / Edition select` | Closed, Open (2) | Never silently substitute edition; expose active ruleset |

**Implemented inventory:** four native component sets, 12 variants, 23 instances on the primary and exception screens, per the existing structural Figma verification. These are **not** results of a usability study.

## Functional S03 state-transition contract

| Input / source outcome | Expected state | Output rule | Primary action | Recovery / exit |
| --- | --- | --- | --- | --- |
| Preset demo content with no linked verified source | `demo` | Print **DEMO / NOT VERIFIED** before answer | Inspect sample passage | Return to S03; never show a fake page citation |
| Valid source-backed, edition-matching citation (future) | `supported` | Explain only what the cited passage supports; show document/version/page if known | Open original context | Change edition only by explicit request |
| Missing relevant card/phase | `needs_context` | Ask one specific question; preserve original input | Add missing detail | Edit question |
| No supporting passage found | `no_evidence` | Clearly abstain; no guessed yes/no | Edit question | Change edition |
| In-scope passages disagree | `conflict` | Show conflict without a forced definite ruling | Inspect conflicting sources | Request missing context |
| Passage retrieval fails | `source_error` | Distinguish technical failure from empty evidence | Retry loading passage | Back to answer with preserved context |

**Important:** `supported` and `conflict` are **contract-only future backend states**. The authored Figma handoff shows four visual states (Demo, NoEvidence, MissingContext, SourceError) and should not be described as a working rule engine.

## Input, output and version invariants

`request = { gameId, editionId, expansionIds[], questionText, optional turnContext }`

`result = { status, answerText?, citations[], clarificationQuestion?, errorReason? }`

Each real citation must contain at minimum `documentId`, `version`, `sectionId`, `excerpt` and openable source location; `page` may be unknown and must never be invented.

- A previous answer retains its **original edition context** when a selection changes.
- If cited passages do not match the selected edition/expansions, render `no_evidence` or a transparent version mismatch.
- An open-passage failure is `source_error`, not “no evidence”.
- “Reviewed” means **the example/source was opened**, not that the game ruling is certified correct.
- Question and edition survive focus changes, clarification and retry.

## Handoff acceptance checklist

- [x] Screen S03 demonstrates four distinct states in Figma and documents their corresponding actions.
- [x] Semantic color, spacing and typography variables and relevant component states are named.
- [x] Native button/field/card/edition component variants are present and reused as instances.
- [x] A structural technical recheck is recorded with explicit counts and limits.
- [ ] Native Figma Ready for Dev flag confirmed (the connected editor interface could not set it).
- [ ] Actual API version-validation, source retrieval, loading/error and input interactions implemented.
- [ ] Keyboard-only, screen-reader, zoom/reflow, actual touch-target and focus-announcement behavior verified.
- [ ] Human retest confirms source-status comprehension.

**Concrete next uncertainty:** would three real players recognize “DEMO / NOT VERIFIED” without instruction? Follow the neutral [retest plan](10-human-retest-plan.md), not the [fictional example](11-SIMULATED-retest-example.md).

# Layout rationale, hierarchy and annotations

## Structure before visual style

The wireframes are intentionally black, white and neutral gray. Screens use rectangular fields, short text labels, rulebook placeholders and hierarchy through size/weight/spacing. There are no final brand colors, photos, icons, visual decoration or payment/profile flows.

## Hierarchy of information

1. **Ruleset identity:** Game and edition first; expansions only if relevant. This prevents a source from the wrong ruleset silently becoming an answer.
2. **One concrete question:** The current disputed move is expressed in the player's own language, avoiding a generic rulebook tour.
3. **Decision with evidence:** The main answer is immediately followed by source identity and supporting passages, so a yes/no does not appear without provenance.
4. **Primary action:** “Read source passage” is visually more prominent than editing the question or changing edition. The source is part of the decision.
5. **Confirmation and recovery:** The player acknowledges reviewing the rule and can return to the game. Missing evidence, conflicting passages and error states offer named recovery routes.

## Why Auto Layout

- **S01–S05 mobile (384px):** Vertical Auto Layout establishes a stable reading order: top bar → task context → fields/answer → primary action → secondary actions. Nested field/card/button frames also use Auto Layout, so text remains editable and spacing can change without positioning individual rectangles.
- **E01–E04:** The same vertical template makes exceptional states consistent with the main journey. A state is not a disconnected pop-up drawn only to satisfy the assignment.
- **S03 desktop (1040px):** The page uses vertical Auto Layout and a nested **horizontal two-column Auto Layout**. The left column contains question, ruling and action; the right contains selected ruleset, excerpt and source limitations. The task is identical to mobile even though the reading space differs.

## Annotations on the design

| Annotation | Location / meaning |
| --- | --- |
| A01 | S01: ruleset is required; unsupported edition goes to E03 rather than substituting a version |
| A02 | S02: ask a task-shaped question; missing card or phase goes to E01 |
| A03 | S03: answer and source are a joint decision unit; unsupported or inconsistent evidence never counts as success |
| A04 | S04→S05: only explicit “I checked this source” leads to the confirmation |
| A05 | Desktop S03: wider view reorganizes the same content into two columns, without adding unrelated functions |
| A06 | State screens: error, empty evidence and unavailability retain recovery actions and preserve context where possible |

## Exclusions and academic limits

No login, user profile, game simulation, opponent, game marketplace, score tracking, voice/card recognition, saved-question dashboard or decorative elements. No claim of actual usability/keyboard testing or of validated labels is made here. The Week 5 three-person label-comprehension check is still outstanding and can lead to future wording changes.

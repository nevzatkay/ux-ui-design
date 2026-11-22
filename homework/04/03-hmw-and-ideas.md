# Opportunity questions and alternative solution directions

## How Might We…? (open, task-specific, solution-neutral)

**HMW1 — Clarity:** How might we help a player understand which rule applies to a specific move while a game is underway?

**HMW2 — Trust:** How might we help a group judge whether a proposed ruling is supported by the rules being used?

**HMW3 — Uncertainty:** How might we help players deal with missing or conflicting rule context without guessing?

These are focused on the studied decision and do **not** require AI, a search box, or a specific interface as their answer.

## Ten ideas (diverge before choosing)

| ID | From | Solution direction | Short description |
| --- | --- | --- | --- |
| **S1** | HMW1 | Situation question input | Ask in everyday language about the exact card sequence or move; e.g. “Can +4 follow +2?” |
| **S2** | HMW2 | Source-linked ruling | Show a concise answer with a directly inspectable rule passage and document identifier. |
| **S3** | HMW2 | Game and edition scope | Have users select the game, edition and active expansions so lookup uses the right rules. |
| **S4** | HMW3 | One focused clarification | If the answer depends on the card, phase or edition, request one necessary detail. |
| **S5** | HMW2 | Cross-reference retrieval | Traverse related sections and exceptions to reconcile rules that are far apart in a book. |
| **S6** | HMW3 | Official-vs-house-rule distinction | Make it explicit when a supported official rule conflicts with a user-entered house rule. |
| **S7** | HMW1 | Saved rulings | Bookmark previously checked rulings together with their original source context. |
| **S8** | HMW2 | Shareable ruling snippet | Copy or show an answer plus its reference to other players at the table. |
| **S9** | HMW1 | Camera-based card recognition | Photograph the two cards to prefill a rule question; do not infer game edition from image alone. |
| **S10** | HMW1 | Voice question | Ask a question hands-free, with an editable text confirmation before submission. |

## Consideration before selection

S1 and S2 respond most directly to the reported **specific question** and **rule reading**. S3 and S4 guard against wrong-context answers but are **project-driven assumptions**. S5/S6 may matter later but require more complicated source handling. S7–S10 may improve convenience without addressing the main trust problem first. None of these features was tested with the participant.

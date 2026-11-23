# Week 06 — Screen specifications

**Project:** Rulebook · **Primary task:** decide a disputed move using the selected rulebook and inspect the evidence.

The main flow is a continuation of the Week 5 sitemap: choose the ruleset → ask → inspect answer and source → read original passage → confirm source reviewed. Confirmation communicates that the **player checked the evidence**, not that the system enforced a game rule or that the entire group agreed.

| ID | Name | Content priority | User action | Next screen |
| --- | --- | --- | --- | --- |
| S01 | Choose game & rules | Game, edition, expansions, why the version matters | Continue | S02, or E03 if edition unsupported |
| S02 | Ask a rule | Selected ruleset, exact question, one example | Ask about this rule | S03, or E01 if context missing |
| S03 | Answer & source | Question → supported/uncertain answer → short source passages → citation | Read source | S04, or E02/E04 if not verifiable |
| S04 | Read source | Original passage, rulebook/version identity, section reference | I checked this source | S05; Back returns to S03 |
| S05 | Confirmation | Source checked, same game/question, next choice | Ask another question / return to game | S02 / end |

## Mobile frames

All mobile screens are 384px-wide named **vertical Auto Layout** frames with editable text, outlined content blocks and one primary action. Non-essential secondary navigation is subordinate to the source-checking task. The frame names retain their IDs (`S01`–`S05`) for direct comparison with the sitemap.

## Desktop decision screen

[S03 desktop main decision](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=6-2) is 1040px wide and preserves the mobile task. A nested **horizontal Auto Layout** places the question/ruling/primary action in the left column and edition-specific rulebook evidence in the right. This layout adds readable comparison space, not new product functionality.

## States as designed

| State | Trigger | Message and next action |
| --- | --- | --- |
| E01 — Missing details | Not enough context (card/phase) | Ask for the single missing detail, preserve the original question, resume |
| E02 — Empty evidence | No matching supported passage | “No supported ruling found”; edit question or change edition; no fabricated citation |
| E03 — Unsupported edition | Selected document collection lacks this version | Name the version problem; choose a supported ruleset |
| E04 — Error or conflict | Retrieval failed or source passages disagree | Retry or edit; do not produce a definitive ruling while evidence is inconsistent |

All exceptional states are tied to an observed task need or a plausible system risk: edition mismatch, insufficient context, unsupported AI output and service failure.

## Content and source assumptions

The user research supports the **existence of a specific UNO card-combination dispute and online rule lookup** (one retrospective account). It does not show tested performance, an official document's exact page or validated screen labels. Treat example text as placeholder copy until evidence and user testing support it.

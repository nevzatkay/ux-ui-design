# Week 06 — User flow and critical states

The flow **starts with the user's goal** and only then enters the first screen. Each decision has a recovery route. IDs match the editable Figma frames and the Week 5 screen labels.

```mermaid
flowchart TD
  G["GOAL: Decide a disputed card move"] --> S01["S01 Choose game and rules"]
  S01 --> D1{"Selected edition supported?"}
  D1 -->|No| E03["E03 Unsupported edition"]
  E03 --> S01
  D1 -->|Yes| S02["S02 Ask a rule"]
  S02 --> D2{"Enough context?"}
  D2 -->|No| E01["E01 Ask for missing details"]
  E01 --> S02
  D2 -->|Yes| D3{"Supported passage found?"}
  D3 -->|No| E02["E02 No supported answer"]
  E02 --> S02
  D3 -->|Retrieval error / conflict| E04["E04 Error or conflict"]
  E04 --> S02
  D3 -->|Yes| S03["S03 Answer and source"]
  S03 --> S04["S04 Read original source"]
  S04 --> D4{"Source checked?"}
  D4 -->|No| S04
  D4 -->|Yes| S05["S05 Confirmation"]
  S05 -->|Another question| S02
  S05 -->|Finish| END["Return to the game"]
```

## Main path

**Goal → S01 → S02 → S03 → S04 → S05 → return to game.** The primary action of S03 is `Read source passage`. The only route to S05 is after the player acknowledges having checked the source. Users are not forced to claim that the entire group agreed.

## Exceptional branches

**E01 — Missing details:** The question omitted a relevant card or phase. Ask one specific follow-up; preserve the question and resume. This protects against guessing.

**E02 — No supported answer / empty evidence:** The selected rulebook has no sufficient passage. Present a plain-language empty state with Edit question and Change edition. Never invent a passage to make a success state.

**E03 — Unsupported edition:** Clearly identify the unsupported ruleset and return to selection. Do not silently use the edition from another game or deck.

**E04 — Retrieval error or conflicting evidence:** Explain that verification failed, keep the player's question, offer Retry/Edit. No definitive answer is shown while source evidence conflicts.

## Explicit design assumptions

- Edition selection and the citation's placement are **proposed safeguards**, not demonstrated user preferences.
- The example UNO ruling is placeholder copy. The implementation must use an appropriate, permitted source with a precise location before declaring support.
- Wireframes depict intended states. They are not live navigation or an implemented AI assistant.

## Direct links

[Main decision screen](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-47) · [Empty evidence state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-111) · [Error state](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-139) · [Confirmation](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=1-79) · [Desktop main decision](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr?node-id=6-2)

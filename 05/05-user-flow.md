# User flow — main task and exceptional paths

**START FROM GOAL, NOT A SCREEN:** “We are playing UNO and need to decide whether +4 can be played on +2.”

## Main path
1. Player needs a ruling while a group is deciding a move.
2. Choose UNO, the relevant rules edition and any active expansions.
3. Enter the card-combination question in plain language.
4. App searches the selected rules and returns a short decision **only if** adequate evidence is found.
5. Player opens the cited rulebook passage.
6. Player uses the source to discuss and decide the move with the group. **Success = supported ruling inspected**, not just an AI assertion.

## Decision points and exceptions

| Branch | Condition | State and user-facing recovery | Risk basis |
| --- | --- | --- | --- |
| E1: Unsupported ruleset | Selected game/edition unavailable | “Rules not available for this edition”; choose another supported ruleset; never substitute a different edition invisibly | Week 3 edition/source concern |
| E2: Missing context | Rule question lacks card, phase or edition detail | Ask one precise clarification and preserve the original question | Ambiguous move is inherent to research task; mechanism untested |
| E3: No supporting evidence | No relevant official rule passage found | “Cannot verify from the selected rules”; show what is missing; do not invent a yes/no | Project core evidence constraint |
| E4: Conflicting sources | Two in-scope passages are inconsistent | Show the conflict and sources; request context or mark unresolved | Audit/project risk, not reported event |
| E5: Network error | Retrieval fails | Show “Could not load rules,” a retry control, and retain question/ruleset | Standard service recovery risk |

### Proposed acceptance checks
- Can the participant reach an inspectable passage from the task goal without unrelated screens?
- Do screen labels lead them to game selection, question entry and original-source viewing?
- In an unsupported, missing-context or error state, does the interface communicate why and what to do next?
- Are keyboard focus and status messages usable without color-only cues?

**Testing status:** This is a proposed flow, not a tested prototype. No live execution data is claimed.

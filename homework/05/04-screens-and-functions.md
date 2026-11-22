# Main screens and supported functions

| Screen | Main purpose | Essential controls/content | Success or failure behavior |
| --- | --- | --- | --- |
| 1. Choose game & rules | Select the correct reference set | Game, edition, optional expansions, continue | Missing/unavailable ruleset → show limitation and allow correction |
| 2. Ask a rule | Describe the specific move | Single question field with an example, selected ruleset recap, submit | Missing critical card/turn detail → ask one clear follow-up; loading/error preserve input |
| 3. Answer & source | Decide with traceable support | Short ruling or explicit unknown, source title/edition, quoted passage preview, “Read source,” ask another question | No evidence → “Cannot verify”; conflict → show disputed passages and avoid forced yes/no |
| 4. Read source | Inspect evidence in context | Original permitted passage, source document title/version, section/page, back to answer | Missing content → state that passage cannot be opened and do not portray citation as verified |

### Content and state principles
- Every rule result shows the selected edition/expansions; change context should not silently rewrite old citations.
- Do not treat **loading**, **no evidence**, **conflicting evidence**, or **network error** as a successful answer.
- User controls, result links and any alerts must be keyboard-operable, have meaningful text labels and appropriate focus order.
- There is no “Dashboard,” profile, shopping, scores or game-playing screen in this limited user flow.

**Evidence vs assumptions:** Questions about card combinations and reading rules are observed through P01's self-report. The four-screen layout, labels, guardrails and WCAG handling are proposed design directions requiring usability testing.

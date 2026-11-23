# Task states and deceptive patterns

## State inventory for the bounded task

| State | Observed / missing / weak | Evidence and consequence | Improvement for the Rulebook project |
| --- | --- | --- | --- |
| **Normal** | **Present** | UNO rule text and action-card sections are readable in the standard page view. | Show the scoped game, edition, input and search area clearly. |
| **Loading** | **Not verified / possibly not applicable to static content** | No separate loading screen or query progress could be tested from the text-only page representation. | During retrieval, provide progress with a short `Searching the selected rules...` message and accessible status announcement. |
| **Empty** | **Untested** | The header game-search no-result behavior was not exercised. | Show `No matching rule passage found`, explain scope and offer clarifying inputs. |
| **Error** | **Untested** | Network failure and search errors were not triggered. | Give a plain-language failure message, retry and preserve the user's question. |
| **Success** | **Weak for this specific task** | A reader finds prose but there is no task-specific, explicitly confirmed +2 → +4 answer state with a linked source. | Show a concise ruling and directly inspectable passage with source + edition label. |
| **Disabled** | **Not observed / may not apply to reading a static page** | No rule-answer action whose disabled state can be evaluated was found. | Disable submission only with an explanation of missing required context; keep keyboard focus understandable. |

**Interpretation:** “Untested” is not equivalent to “missing”. “Not applicable” is not a defect in a static rule page. The state list is a design checklist transferred to the planned interactive assistant, not an invented test outcome.

## Deceptive-pattern check

**No confirmed deceptive pattern was observed in the audited rule-finding task.** Product-price links appear as separate shopping offers after the rule content. The review did not identify a consent dialog, payment gate, hidden cost, difficult cancellation flow, or misleading required step in the bounded task; these were not tested beyond the visible content.

**Fair alternative:** Keep the rule answer and evidence independent of commerce, mark sponsored or affiliate offers as such if applicable, and do not disguise a shop link as a rule source.

# Prioritized content inventory — one ruling task

**Decision:** Include only what helps a group decide a disputed move, with visible rule support. P0 = necessary for the task. P1 = useful guardrail or follow-up. Excluded = not needed now.

| Rank | Content / function | Screen / state | Why it is needed | Evidence status |
| --- | --- | --- | --- | --- |
| P0 / 1 | Game selection | Choose game & rules | Determine which rules to consult | Design requirement / assumption |
| P0 / 2 | Rules edition and active expansions | Choose game & rules | Prevent incorrect cross-edition citations | Week 3 audit-derived risk; not observed in P01 |
| P0 / 3 | Plain-language situation question, e.g., “Can +4 follow +2?” | Ask a rule | The research incident involved a concrete card combination | P01 reported the specific situation |
| P0 / 4 | Concise ruling or explicit inability to answer | Answer & source | Supports an actionable next move without fabricated certainty | P01 reported arriving at a ruling; presentation is a hypothesis |
| P0 / 5 | Clearly identified source passage with rulebook/page or section | Answer & source / Read source | Players can inspect the text on which the ruling depends | P01 reported reading rules; exact display is proposed |
| P0 / 6 | Source document identity and edition | Answer & source | Establish which rulebook was used | Week 3 audit-derived risk |
| P0 / 7 | “Need more details” prompt, preserving prior question | Clarification state | Avoid guessing when card/phase/context is underspecified | Week 4 design assumption based on known ambiguity risk |
| P0 / 8 | “Cannot verify” or “Conflicting sources” message | No evidence/conflict state | Avoid presenting an unsupported ruling | Project reliability constraint; not tested yet |
| P1 / 9 | Retry after loading/network failure | Error state | Allows recovery without losing the question | Engineering / accessibility safeguard |
| P1 / 10 | Loading progress/status message | Loading state | Prevents repeated submissions or uncertainty during retrieval | Design safeguard |
| P1 / 11 | Keyboard-navigable cited-source link, text labels | All task screens | Supports accessible inspection of the passage | Week 3 audit-derived accessibility risk |

### Explicitly excluded for the Week 5 main task
No player account, saved-question archive, share-to-social feed, card photo recognition, voice input, house-rule editor, game timer, opponent, scoring, product catalog, or universal game coverage. They are not required to settle the single task, even if they appeared as Week 4 alternative ideas.

### Proposed label vocabulary (untested)
**Choose game** · **Edition & expansions** · **Ask a rule** · **Answer & source** · **Read source** · **Add missing detail** · **Cannot verify** · **Try again**. Confirm wording with three participants before calling it validated.

# Persona revision and preventive project risks

## Week 2 evidence-based proto-persona — P01

**Situation (reported):** While playing UNO in a group, players discussed whether a +4 can be put on a +2. They looked online, read rules and decided it could not.  
**Goal (inferred):** Settle the specific in-game dispute and make a justified move.  
**Knowledge (inferred):** Knows the special cards but needs clarity on their interaction.  
**Unknown:** Personal attributes, feelings, device, preferred language, time pressure and rules edition.

## Week 3 change log — what is new and why?

| Persona attribute | Week 2 | Week 3 update | Basis / strength |
| --- | --- | --- | --- |
| Need | Locate relevant text to resolve a dispute | **Hypothesis:** Also needs a short question-specific ruling with direct passage access | Audit F01–F04, not participant testimony |
| Constraint | Current group play and uncertainty | **Hypothesis:** Must know which edition / house rules the answer refers to | Audit F05 |
| Accessibility need | Not asked | **Risk to investigate:** Clear semantic card names, navigable headings and keyboard-usable citations | Audit F07–F08; unverified for P01 |
| Risk | Misreading a rule | **Hypothesis:** Ambiguous rule summaries and inaccessible evidence can produce an unsupported ruling | Audit F03–F05, F07–F08 |

**Important:** This remains a proto-persona based on one interview account. The audit adds *design hypotheses*, not demographic information or new user-reported facts. No invented feelings or abilities are attributed to P01.

## Three risks in our own Rulebook project, with prevention

### R1 — Wrong source or edition produces a confident but wrong answer
- **Why it matters:** Different UNO editions, expansions and house rules may require different rulings. An AI-generated sentence without source context can seem authoritative.
- **Prevention:** Make game/edition/expansion selection visible; retrieve only from the selected sources; show page/section citations and document version; state `insufficient evidence` instead of guessing.
- **Validation:** Seed cross-edition questions and check that the UI flags incompatible rulebook passages.

### R2 — Card icons and references are inaccessible without a mouse or sight
- **Why it matters:** An answer that is accurate but impossible to navigate or inspect is not usable by everyone.
- **Prevention:** Semantic H1/H2/H3 structure, explicit text labels for cards, named citation links, keyboard operability, focus visibility, zoom/reflow support, and contrast checks.
- **Validation:** Test question → answer → citation → back using keyboard only, and inspect the accessible name of card images/links with a screen reader.

### R3 — The system does not clearly distinguish loading, missing evidence, error and confirmed answer
- **Why it matters:** Under time pressure, an unfinished or uncertain result might be misread as a final ruling.
- **Prevention:** Distinct normal/loading/empty/error/success/disabled states; actionable error recovery; clear `not enough evidence` wording; follow-up questions when the card or phase is unspecified.
- **Validation:** Simulate missing rulebooks, zero search results, blocked retrieval and slow responses and check comprehension with players.

## Immediate next steps

1. Prototype the direct +2/+4 question with an edition/source chip and citations.
2. Perform a real keyboard-only and screen-reader check on the audited page and prototype (not completed in this audit).
3. Invite additional participants and record behavior, source checking and whether the answer is understood without external help.

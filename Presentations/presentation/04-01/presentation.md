<!--@slide Welcome-->
# Week 04 — Problem definition and opportunity search

**Rulebook** — a source-backed companion for board-game rules

Nevzat Kayıkçı · JWM27Z · University of Pécs

---

<!--@slide Project brief-->
# One task, not every board-game feature

A group disputes a specific UNO move during play. The player needs to locate the relevant rules and inspect the evidence before deciding.

**Audience:** the player and other group members.

**Scope:** selected games and permitted text-based rulebooks; no game engine or opponent.

---

<!--@slide Evidence-->
# The evidence begins with a disputed card combination

Participant P01 reported that their group checked whether +4 could follow +2, read online rules and arrived at a decision.

**Known:** the dispute, online lookup and reading step.

**Not known:** time, emotion, official edition, exact website and source correctness.

This distinction shapes the solution without inventing research.

---

<!--@slide Problem statement-->
# The current decision is harder than it should be

A player in a group game encounters an unclear card combination, interrupts play and must search for and interpret rules before the group can continue.

**User story:** As a player facing a disputed move, I want to check whether it is permitted and see the relevant rule so the group can agree on what happens next.

---

<!--@slide HMW-->
# Three “How Might We” questions

1. How might we help players understand which rule applies to a specific move during play?
2. How might we help a group judge whether a ruling is supported by the rules they use?
3. How might we help players proceed when details or evidence are incomplete?

---

<!--@slide Idea generation-->
# Ten directions, from simple queries to voice input

| Fast MVP candidates | Defer or investigate |
| --- | --- |
| Situation-based question | Cross-section retrieval |
| Citation next to answer | House-rule distinction |
| Game/edition scope | Card image recognition |
| Focused clarification | Voice input |
| Saved rulings | |
| Share cited ruling | |

These are alternatives, not ten features to implement.

---

<!--@slide Prioritization-->
# The impact × feasibility matrix sets an MVP direction

| | Lower feasibility | Higher feasibility |
| --- | --- | --- |
| Higher impact | Cross-references; house rules | Situational question; citation; ruleset; clarification |
| Lower impact | Camera; voice | Save and share |

Ratings are provisional 1–5 estimates, not measured user outcomes.

---

<!--@slide Decision-->
# Take forward four connected ideas

**S1 + S2 + S3 + S4**

Ask a concrete question → use the selected edition → show a concise supported ruling and passage → request one missing detail or say “cannot verify” when necessary.

This follows the reported move/question and rule-reading steps most closely.

---

<!--@slide Validation-->
# A hypothesis must lead to a measurable check

Plan: ask players to resolve covered and unsupported questions. Record answer correctness, evidence inspection, completion time and recognition of uncertainty.

**No evaluation results are claimed yet.**

[Week 4 FigJam](https://www.figma.com/board/qM115e40DgRrVNNfGI1Eu8)

---

<!--@slide Thank you-->
# Thank you for listening

Questions?

Nevzat Kayıkçı · JWM27Z

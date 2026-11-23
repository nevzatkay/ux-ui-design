# Rulebook — 5-minute easy English speaking script

**Speaker notes, not projected slides.** Say the main idea rather than reading every slide word. Times are targets to rehearse, not recorded presentation results.

## Slide 1 — Opening (20 seconds)

Hello everyone. My name is Nevzat Kayıkçı. My Neptun code is JWM27Z, and I study Computer Science Engineering at the University of Pécs.

My project is called Rulebook. It helps players check board-game rules and see the source of an answer.

## Slide 2 — Problem (35 seconds)

Imagine you are playing UNO with your friends. Someone asks, “Can I play a plus-four card after a plus-two?”

One person told us about this kind of disagreement. Their group searched online, read rules, and made a decision.

A small question can stop the game. Finding the right rulebook and edition is important.

## Slide 3 — Research (40 seconds)

Our strongest research evidence is one short, anonymous report about that UNO disagreement.

The player said their group searched online and read the rules. We do not know how long it took or which edition they used.

This gave us one design idea: let players ask about a specific move, then show the rule passage. This idea still needs real usability testing.

## Slide 4 — Solution (45 seconds)

The design has four simple steps.

First, choose the game and edition. Second, ask a question about the situation. Third, see the answer and its source status. Finally, open the supporting passage.

If information is missing, the app should ask for more detail. If there is no reliable evidence, it should say “cannot verify” instead of guessing.

## Slide 5 — Live prototype (85 seconds, including 50–60 seconds of clicking)

Now I will demonstrate the prototype.

**S01 → S02:** We select the rules and continue to the question.

**S02 → S03:** The example answer appears. Notice **DEMO — NOT VERIFIED**.

**S03 → S04:** We open the sample passage. A real version would show the correct rulebook section.

**Optional S04 → S05:** Review complete does not mean the UNO rule is officially confirmed.

This prototype demonstrates navigation, not a finished AI rules engine.

## Slide 6 — Iteration and evaluation (45 seconds)

We improved the earlier design after a design review.

The source warning is clearer, the main button says “Inspect source”, and the controls use reusable Figma components.

Our technical checks found four working main navigation links, four exception links and twelve component variants.

But we have not completed independent user tests, so we cannot claim the design is already easy for real players.

## Slide 7 — Next step and thank you (30 seconds)

My next step is to test with three real participants and connect one rulebook that we have permission to use.

I want to see whether players understand the difference between an example and verified evidence.

The goal is a useful answer that people can actually check.

Thank you for listening. Any questions?

---

## Memory cue

**Problem → Real report → Show the source → Four-step flow → Demo → Technical check → Next test.**

If a sentence is forgotten, say the slide's single main point in your own words.

# Week 01 — Task framing, assumptions, and success model

**Project:** Rulebook — a source-aware board-game rules companion  
**Task:** While a game is paused, identify which rule applies to a disputed move and inspect supporting text from the selected game edition.

## Context → design decision → evidence level

| Statement | Evidence level | Consequence for design |
| --- | --- | --- |
| A reported group disputed playing UNO +4 after +2, searched online and read rules | One retrospective anonymous participant account (Week 02); **not a Week 01 measured finding** | Accept a question about a concrete card sequence |
| Rules may be edition- or expansion-dependent | Domain/project constraint, **not confirmed by participant report** | Show selected game/version before every ruling |
| A supported answer needs inspectable passages | Project reliability requirement plus reported rule reading | Display an original source, not an unsupported yes/no |
| A fast in-game lookup is desirable | Design assumption, **not a recorded duration or emotion** | Treat speed as a metric to validate rather than a claim |

## Primary user story and scope

**As a player** who encounters a disputed card move **I want** to check that move against the selected rules and inspect the supporting passage **so that** our group can decide whether to proceed without relying on an unsupported guess.

**In scope:** Choose game and edition; describe situation; inspect answer and source; ask for missing details; explicitly abstain if evidence is absent.  
**Out of scope:** Playing the game, scoring, accounts, universal game coverage, and invented official rulebook pages.

## Falsifiable hypotheses

| ID | Hypothesis | Planned evidence | Failure condition |
| --- | --- | --- | --- |
| H01 | A direct situation-question entry will be understandable to players | Independent route observation from S01 to S02 | Participants cannot find where to ask without hints |
| H02 | The answer + source layout will encourage source inspection | Count independent openings of S04 before participants declare completion | Participants trust S03 without opening evidence |
| H03 | A visible source-status warning will prevent false authority | Ask participants whether the example passage is an official verified citation | A participant describes the sample as official proof |
| H04 | An unavailable ruleset can be corrected without losing the goal | Observe E03 → S01 recovery | A participant gets stuck or changes edition unknowingly |

## Success metrics — planned, NOT measured

- **Covered cases:** 16 of 20 correct move + supporting passage identifications within 90 seconds in a planned larger study.
- **Unresolved cases:** 4 of 5 correctly recognize that evidence is insufficient in the planned study.
- **Prototype-level success:** open sample passage and recognize that it is unverified; clicking a sample cannot prove game-rule accuracy.

These are distinct evaluation stages. The targets above must never be reported as results until consented participants and actual official source data exist.

## Traceability

Problem framing: [Week 01 overview](README.md). Research grounding: [Week 02 anonymized interview](../02/interview-summary.md). Opportunity prioritization: [Week 04 decision matrix](../04/04-prioritization.md). Product flow: [Week 05 sitemap](../05/03-sitemap.md).

**Open question:** Do participants in a live game value inspectable evidence enough to spend time opening it? Only independent, contextual user observation can answer this.

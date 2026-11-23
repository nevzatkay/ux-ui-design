# Rulebook — Weeks 01–10 evidence-to-rubric matrix

**Date:** 23 November 2026  
**Student:** Nevzat Kayıkçı · **Neptun:** JWM27Z  
**Repository organization:** `01/`–`10/` directly at root; `Presentations/presentation/` is separate.

## Source transparency

The public course portal is https://pte-mik.github.io/info/ux-ui-en/. Its [public portal repository](https://github.com/pte-mik/info) lists `ux-ui-en/book.md` inside `laborci/books`; the portal README explicitly says these course sources are **private**. This matrix therefore uses the homework briefs supplied in the project work, the accessible submission documents and the concrete Figma artifacts. **It is not presented as an exhaustive verified copy of every current private course rubric.**

## Evidence and outstanding work, by week

| Week | Main grading concern / evidence expected | Where to look | Status and remaining limitation |
| --- | --- | --- | --- |
| 01 | Clearly framed problem, audience, hypothesis and measurable success | [Task and hypotheses](01/02-task-model-and-hypotheses.md), [FigJam](https://www.figma.com/board/8CpfdHJFAHqpO9RcMVzzMj) | Prepared; success thresholds proposed, not measured |
| 02 | Neutral research questions, anonymous evidence, persona and journey | [Research plan](02/research-plan.md), [summary](02/interview-summary.md), [coding](02/06-research-traceability-and-coding.md) | One retrospective account; verbatim research-use consent not confirmed |
| 03 | Specific usability and accessibility audit, issues and remedies | [Eight annotated observations](03/annotated-findings.md), [verification protocol](03/06-accessibility-verification-plan.md) | Text/heuristic inspection; no live screen-reader or keyboard test |
| 04 | Problem statement, HMWs, 8+ ideas, 2×2 matrix and rationale | [Idea set](04/03-hmw-and-ideas.md), [matrix](04/04-prioritization.md), [decision log](04/06-decision-trace-and-tradeoffs.md) | Documented; priority scores are designer estimates |
| 05 | Prioritized IA, label test, sitemap, screen map and 3+ exceptions | [Inventory](05/01-content-inventory.md), [sitemap](05/03-sitemap.md), [label acceptance](05/09-ia-content-and-label-acceptance.md) | IA ready; **0/3 real label tests** |
| 06 | 3–5 main low-fi screens, critical states, Auto Layout and desktop variant | [Figma](https://www.figma.com/design/TsqmdorEJi0IQe42RTquvr), [responsive/state contract](06/06-wireframe-responsive-and-state-acceptance.md) | Source frames exist; real assistive-tech/device test not run |
| 07 | Clickable start-to-end prototype, reachable exceptions and one peer trial | [Figma prototype](https://www.figma.com/proto/XaM92SjirDruf467HMzwZD?node-id=1-4&starting-point-node-id=1%3A4), [trial matrix](07/07-prototype-route-and-trial-coverage.md) | Clickable flow prepared; **real peer trial pending** |
| 08 | Three neutral usability tests, observation/quote/inference, severity-ranked changes and UI guideline | [Figma](https://www.figma.com/design/lDLN7kR1Y8MTZruP0Ku3JR), [study analysis](08/12-usability-severity-and-analysis-contract.md), [guideline](08/06-mini-ui-guideline.md) | Designer review and guideline ready; **0/3 real tests** |
| 09 | Three+ iteration decisions (finding, hypothesis, rejected alternative, tradeoff, effect, open question), variants, technical recheck, annotated handoff | [Decision log](09/01-evidence-and-iteration-log.md), [measured check](09/02-modification-check.md), [state machine](09/12-handoff-component-state-machine.md), [Figma](https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy) | Structural evidence real: 4/4 main links, 4/4 exception entries, 12 variants and 23 instances; **human recheck pending** |
| 10 | 5–7 slides, around 5 minutes; problem → research → design → live demo → improvement → limitation/next step | [Primary 7-slide PowerMD](Presentations/final-project-5min/presentation.md), [spoken script](Presentations/final-project-5min/speaker-notes.md), [demo guide](Presentations/final-project-5min/demo-and-timing.md); [original extended 13 slides](Presentations/presentation/10-01/presentation-extended.md) | Short presentation and notes prepared; timed rehearsal/instructor sharing not checked |

## Important rubric-specific detail — Week 09

- **Decision quality:** IT01–IT04 in [09/01](09/01-evidence-and-iteration-log.md) include designer evidence, checkable hypothesis, implemented change, rejected alternative/trade-off, expected effect and open question.
- **Modification check:** [09/02](09/02-modification-check.md) reports 4/4 technical route links and explicitly says it is **not a participant retest**.
- **Design system:** Four real native Figma component sets with 12 variants including primary/secondary/disabled buttons and default/focus/error input.
- **Handoff:** Page “03 — Dev handoff: Answer & evidence” documents four example states, behavioral and accessibility rules and named variables.
- **Limit:** Native Figma “Ready for Dev” flag could not be set by the editor. Real API data states `supported` and `conflict` are handoff contracts, not implemented backend behavior.

## Research integrity / simulated materials

The files containing `SIMULATED` in their filenames are **deliberately fictional teaching illustrations**, not human evidence or assignment-completion records. They cannot increase tested-participant counts. [Detailed evidence policy](RESEARCH_EVIDENCE_POLICY.md).

## Quality checks

- [x] All 10 week directories and 10 distinct presentation sources are present.
- [x] Repository-relative Markdown links were checked in the pre-enhancement repository (89 Markdown files, no broken relative links found).
- [x] A repeatable [local validator](tools/validate_coursework.py) and a [GitHub Actions workflow](.github/workflows/coursework-qa.yml) are included in this enhancement.
- [ ] A teacher account can open all Figma/PowerMD links without signing into the owner's account.
- [ ] The empirical tests flagged above are actually conducted, consented, analyzed and reflected in affected iterations.

**Overall:** The project has substantial **design artifacts and documented decisions**, but empirical evidence requirements cannot be completed by adding plausible-looking text. Future work must prioritize genuine research and one permissioned source-backed rules scenario.

## Final project talk — short version

The [primary 7-slide PowerMD](Presentations/final-project-5min/presentation.md) was built for the previously supplied **Presentation structure and visual narrative** lesson: one claim per slide, visual support, a selective live Figma demo, clear evidence levels, honest limitations and one next research action. [Delivery crosswalk](10/02-assessment-and-presentation-fit.md).

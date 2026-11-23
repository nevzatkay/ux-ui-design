# Week 08 — Usability-study analysis and severity contract

**Research status: 0/3 actual participants.** This document makes the Week 08 test-analysis method auditable, but it does not invent or replace the required user study.

**Relevant files:** [neutral test plan](01-test-plan.md), [briefing and consent](02-consent-and-moderation.md), [empty evidence records](03-participant-notes.md), [provisional designer review](04-severity-and-findings.md).

## What is being measured

| Question | Observable record | Pass criterion / meaning | Key limitation |
| --- | --- | --- | --- |
| Can a participant complete navigation? | Screen sequence and independent S05 completion | Completion without directions | Preset query is not editable |
| Do they inspect evidence? | Opened S04 before declaring done, yes/no | Yes without prompting | S04 contains sample text, not a licensed rulebook |
| Do they understand source status? | Their own explanation, recorded verbatim if permitted | State that example is **NOT verified official evidence** | Interview response can be influenced by wording |
| Can they recover from a missing source? | E02 selection and next action | Recovery is attempted and reason understood | Exception may have to be introduced as a separate neutral scenario |
| Does task time suggest friction? | Seconds recorded from first click to done | Report raw seconds, not invented mean | 3-person sample cannot represent population |

## Issue coding and severity

For each *actual* user-derived issue write:

`Finding ID | participant ID | screen | observed sequence | quote if spoken | interpretation | alternative explanation | severity | affected success metric | proposed fix | retest result`.

- **Critical:** a misleading authoritative answer or unrecoverable end of task.
- **High:** major misunderstanding of edition, evidence, or inability to inspect source.
- **Medium:** recoverable wrong turn, missed action, ambiguous input state.
- **Low:** minor copy issue without task impact.

Assign severity using **effect on the task and recoverability**, then note frequency as an independent fraction `x/3`. Do **not** assign severity by frequency alone. Distinguish designer-audited DR01–DR04 from findings with an actual U01–U03 observation ID.

## Reproducible calculations (when data exist)

- **Completion fraction:** number completed independently / number actually tested.
- **Source-opening fraction:** number who opened S04 unprompted / number actually tested.
- **Source-understanding fraction:** number who independently identified that passage is a demo / number actually tested.
- **Median task time:** middle of the three measured durations, **only for genuinely recorded trials**; distinguish incomplete attempts.
- **Prompt count:** number of moderator navigation hints; a hinted completion is **not** independent success.

Never compute these from the [fictional example table](11-SIMULATED-usability-example.md). Three genuine trials are formative, not a population estimate or causal experiment.

## Design decision log for observed findings

| Required field | Example entry, **hypothetical only** |
| --- | --- |
| Evidence | “U01 clicked secondary action before source”; only insert if it actually occurs |
| Hypothesis | More prominent source action will reduce a wrong turn |
| Change | Move the primary CTA immediately below evidence status |
| Rejected alternative | Icon-only citation reduces clarity for screen readers |
| Expected effect | More users independently reach S04 |
| Retest | Same neutral task with new participants; log results separately |

## Collection order

1. Obtain voluntary consent.
2. Record individual test on the same starting frame, with no navigation hints.
3. Document exact observed action and any real verbatim comments separately.
4. Code findings; compute raw outcomes; prioritize by severity.
5. Implement the smallest remedy for a high-priority issue.
6. Re-run the affected task and document whether the predeclared criterion was reached.

**Current actual result:** no participant-derived finding or time measurement exists. The Week 09 [technical recheck](../09/02-modification-check.md) is not a human retest.

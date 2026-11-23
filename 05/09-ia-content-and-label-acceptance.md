# Week 05 — IA acceptance, screen hierarchy and label-validation contract

This document connects the prioritized [content inventory](01-content-inventory.md), [sitemap](03-sitemap.md), [screen functions](04-screens-and-functions.md) and [decision flow](05-user-flow.md) to observable acceptance checks.

## Task-content map

| User decision | Location | Required content | Failure state | Valid transition |
| --- | --- | --- | --- | --- |
| Which rulebook applies? | S01 / Choose game & rules | Game, edition, expansions | E03 / unsupported edition | Correct selection returns to S01 then S02 |
| What happened in the game? | S02 / Ask a rule | Specific card/phase question, selected ruleset summary | E01 / missing detail | Ask one precise follow-up and preserve question |
| Is the answer supported? | S03 / Answer & evidence | Evidence status, short explanation, source title/version | E02 / no evidence or conflict | Abstain or offer edit/edition correction |
| Can I inspect the original? | S04 / Read source | Exact passage + context where available | E04 / loading failure | Retry without losing question/version |
| Have I completed inspection? | S05 / Review complete | Honest navigation completion, not certified game ruling | Restart or switch ruleset | New question returns S02 |

**Priority:** The selected version and source status are P0 because they prevent misleading interpretations, not because participants explicitly requested them.

## Label distinction to test

| Candidate label | Intended meaning | Potential confusion | Alternative if users fail |
| --- | --- | --- | --- |
| Choose game & rules | Select source collection before querying | “Ask a rule” may appear to be the start | “1 · Choose game and edition” |
| Ask a rule | Enter a situation-level question | Sounds like immediate result rather than text entry | “Describe your move” |
| Answer & source | Summary and evidence status | May suggest full passage is already shown | “Answer and evidence preview” |
| Read source | Open original passage in context | “Source” could mean an external website | “Open original rule passage” |
| Cannot verify | Evidence does not support a ruling | May be confused with a network error | “No supporting rule found” |
| Try again | Retry a failed load only | Could suggest retry search or choose an edition | “Retry opening passage” |

## Real three-person label test — remains PENDING

Use [02-label-comprehension-test.md](02-label-comprehension-test.md) to collect independent responses from three consented participants. Do not offer these alternatives as hints during the session. Record **actual selected label**, confidence/reason, hesitations, consent and the precise misunderstanding.

**Proposed acceptance:** at least 2/3 users independently select the correct entry and source-view destination and can distinguish lack of evidence from technical failure. Record raw counts, not only a pass/fail. If any participant treats “Cannot verify” as an official ruling, classify it as a high-priority trust concern.

The [SIMULATED example](07-SIMULATED-label-test-example.md) is **not** human study data and must never be counted in the rubric.

## Navigation-specific review checklist

- [x] Sitemap explicitly identifies screens and exception relationships in documentation.
- [x] Content inventory separates P0/P1/excluded concepts.
- [x] Main flow starts from a **user goal**, not a product screen.
- [x] At least three recovery/exception cases are described.
- [ ] Three consented label-test participant records exist.
- [ ] Labels revised and rechecked based on recorded participant behavior.

**Next uncertainty:** Does a new user understand the difference between *answer preview* and *original source passage* from the labels alone?

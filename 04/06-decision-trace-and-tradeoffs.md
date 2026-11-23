# Week 04 — Opportunity decision record and rejected alternatives

## Why this direction was selected

The project did **not** start with an assumption that players need AI. The recorded P01 situation was an unresolved card combination, followed by internet search, rule reading and a group decision. That supports a narrow research focus: **one question, one selected ruleset, inspectable supporting passages**.

The [impact-versus-feasibility matrix](04-prioritization.md) identifies the minimal cluster:

- **S1: Situational text question** — matches the reported card-sequence form.
- **S2: Evidence-linked answer** — supports text inspection before a group ruling.
- **S3: Edition/expansion scope** — safeguards against version ambiguity.
- **S4: Missing-context clarification** — prevents guessing.

Scores in the matrix are **designer assumptions**, not participant votes or implementation measurements.

## Decision log

| Decision | Evidence or constraint | Hypothesis | Rejected alternative | Trade-off / expected effect | Next check |
| --- | --- | --- | --- | --- | --- |
| D04-1: start with edition selection | Wrong-edition risk from audit; P01's edition unknown | Showing edition first reduces cross-version decisions | Detect edition automatically | Manual selection adds one step but makes scope explicit | Can a user identify the correct edition? |
| D04-2: typed situational rule question | P01 described a concrete +2/+4 disagreement | A specific question is clearer than topic browsing | Require card-image recognition | Typed form is simpler to prototype and audit; no OCR uncertainty | Can players formulate a question unaided? |
| D04-3: make cited passage central | P01 reported reading rules | Players may inspect evidence before acting | Display a confident answer only | Citation costs screen space, reduces unsupported authority | Do they voluntarily open the passage? |
| D04-4: abstain on insufficient evidence | Product integrity requirement | Explicit uncertainty is more trusted than fabricated certainty | Guess likely rules | Less apparent coverage; higher traceability | Do users understand what to do next? |
| D04-5: defer camera/voice/social | No participant evidence for those needs; added complexity | Removing these keeps a task-focused MVP | Build universal assistant immediately | Narrower scope and measurable outcomes | Reconsider after actual usage patterns |

## Scope guardrails

**Must have:** game/version, question, evidence status, inspect passage, one recovery action.  
**Should have:** preservation of inputs on retry, clear loading and conflict status.  
**Not for the first iteration:** scoring, user accounts, every published game, visual card recognition, speculative rule citations.

## Testable acceptance outcomes

1. An independent tester can locate the **correct edition** before asking a question.
2. The UI does not label a sample source as official evidence.
3. A missing-source branch has a **specific recoverable next action**.
4. The chosen task can be completed in a clickable **navigation simulation** without implying rule correctness.

These are validation targets. Only criterion 4's route connections have been structurally checked in later prototypes; human outcomes remain unknown.

## Trace chain

[Research account](../02/interview-summary.md) → [third-party heuristic findings](../03/annotated-findings.md) → [HMW opportunities and ten directions](03-hmw-and-ideas.md) → [2×2 ranking](04-prioritization.md) → [Week 05 content inventory](../05/01-content-inventory.md).

**Open decision:** Whether a real rulebook's internal cross-references are needed to answer selected questions reliably must be evaluated with permissioned, annotated source passages rather than inferred from this storyboard.

# Provisional design-review findings, ordered by severity

**Not participant-derived findings:** These are observations of the Week 7 **interface itself**, made by the designer before Week 8 testing. They are not substitutes for three observed usability sessions. Severity is provisional; revise after participant evidence.

**Severity rubric:** Critical = cannot complete the core task or encourages false authority; High = major interruption/misunderstanding; Medium = recoverable ambiguity; Low = minor friction. The current pre-test scores are professional judgment, not participant ratings.

## DR01 — High: sample source may be mistaken for verified evidence

- **Observed screen detail:** The Week 7 source screen explicitly contains placeholder rule text and states the real page is not verified.
- **Affected task:** Inspect evidence before applying a ruling.
- **Potential consequence:** A player may treat an unverified sample paragraph as a definitive quotation.
- **Evidence type:** Designer inspection of prototype content; user occurrence unmeasured.
- **Proposed fix:** Label answer and source panels “Example / not verified”; never fabricate a page number. In a real system, cite exact document/version/page.
- **New prototype:** S03 and S04, with inline warnings and explicit source status.
- **Verification needed:** Ask three participants what they believe the source status means after viewing S04.

## DR02 — High: prefilled question prevents genuine composition testing

- **Observed screen detail:** The previous S02 displayed a fixed example question; the prototype does not accept free-form input.
- **Affected task:** Frame a rule question during play.
- **Potential consequence:** Completion time could be interpreted as successful question entry despite no entry being possible.
- **Evidence type:** Designer inspection, not user evidence.
- **Proposed fix:** Explicitly state the prototype's scope and run tests of source interpretation, not real question typing. Add editable input in next functional iteration.
- **New prototype:** S02 states “Example question is filled in” and documents the limitation.
- **Verification needed:** Re-test with genuine input once available.

## DR03 — Medium: confirmation wording overstated evidence

- **Observed screen detail:** The Week 7 S05 used “Source checked” / “Decision recorded” even though its source was a sample.
- **Affected task:** Know whether the investigation is complete.
- **Potential consequence:** Player could mistake successful navigation for a verified game ruling.
- **Evidence type:** Designer inspection of wording.
- **Proposed fix:** State “Review complete — prototype success,” and explicitly say that the group must check the official rulebook to settle the game.
- **New prototype:** S05.

## DR04 — Medium: unsupported vs simulated states lack a distinct label in the old design

- **Observed screen detail:** The previous answer combined short rule summary, citation preview, recovery links and a question example without a prominent simulation status.
- **Affected task:** Interpret the answer and decide whether to trust it.
- **Potential consequence:** An unsupported or demonstration answer may be interpreted as a firm ruling.
- **Evidence type:** Designer inspection, user impact untested.
- **Proposed fix:** Explicit headings “Example answer / not verified”, “No supported evidence”, “Need one detail”, and “Edition unavailable”; present status in text, not just color.
- **New prototype:** S03, E01, E02, E03, E04.

## Findings after live trials

**PENDING:** For each participant-derived finding, add: issue title, quote/observation ID, frequency (x/3), affected task/screen, consequence, severity, change and re-test evidence. No verified observations exist yet.

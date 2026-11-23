<!--@slide Welcome-->
# Week 09 — Iteration, components & mini design system

Rulebook: board-game rules companion with source references

Nevzat Kayıkçı · JWM27Z · Computer Science Engineering · University of Pécs

---

<!--@slide Main task-->
# The user still needs one credible decision

A group is playing UNO and disputes whether a +4 card can follow a +2 card.

The core flow remains: **select rules → ask → inspect answer → inspect source → complete review**.

**Week 09 Figma:** https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy

---

<!--@slide Evidence boundary-->
# Week 08 has design-review findings, not completed participant tests

- **DR01 / High:** Sample passages can appear authoritative.
- **DR02 / High:** Preset question means actual typing is untested.
- **DR03 / Medium:** Completion could sound like rule correctness.
- **DR04 / Medium:** Evidence and recovery states could compete for attention.

**Research status:** No three-participant test results or quotes have been collected.

---

<!--@slide Iteration 1-->
# Show evidence status before the next action

**Hypothesis:** The explicit DEMO state will prevent mistaken trust in an unverified citation.

**Change:** Reusable evidence card plus warning on the original passage.

**Rejected:** Hide the source screen; that would prevent testing the source-reading task.

**Measure later:** 3/3 peers identify sample text as not verified.

---

<!--@slide Iterations 2 and 3-->
# Prioritize the source; formalize input states

**IT02:** One primary “Inspect source” button; alternatives are secondary.

**IT03:** Inputs now have default, focus and error variants, with an explicit note that typing is not supported in this mock-up.

**Trade-off:** A convincing fake input would mislead the test; real entry comes next.

---

<!--@slide Iteration 4-->
# Completing the prototype is not proving a ruling

**Change:** S05 uses a reusable “Review complete” evidence state.

**Rejected:** A green “Correct answer” check would imply proof we do not have.

**Open question:** Where should the verified source version appear once the backend exists?

---

<!--@slide Reusable components-->
# Four component sets; twelve real variants

- Buttons: primary/secondary × enabled/disabled = **4**.
- Rule-question field: default/focus/error = **3**.
- Evidence card: demo/no evidence/reviewed = **3**.
- Edition selector: closed/open = **2**.

Used as **23 native instances** on the prototype screens, not duplicated drawings.

---

<!--@slide Design tokens-->
# Role-based tokens make status readable

**13 Light/Dark color variables**, five text styles and six spacing tokens.

- Text contrast target: **≥4.5:1**.
- Necessary UI boundaries: **≥3:1**.
- Important status is written in words, not conveyed by color alone.

See `04-mini-design-system.md` and `09-contrast-audit.md`.

---

<!--@slide Technical check-->
# We verified structure, not human usability

| Check | Result |
| --- | ---: |
| Main navigation transitions | **4/4** |
| Reachable exception branches | **4/4** |
| Explicit sample/source warning screens | **2/2** |
| Native variants | **12/12** |
| Reused instances across screens | **23** |

This check does **not** prove that students understand the design.

---

<!--@slide Developer handoff-->
# Answer & evidence has four specified states

1. Demo / example
2. No supported evidence
3. Missing context
4. Source load error

Each state describes copy, action, recovery, focus, accessibility rules and semantic variable names.

**Handoff label:** UI specification ready; real source integration pending.

---

<!--@slide Next validation-->
# Test the uncertain part, not the whole app

Give **three students** one neutral scenario without walking them through it.

Record path, time, mistakes, source-status interpretation and exact quotations.

**Target:** 3/3 distinguish sample from verified evidence. Re-rank the provisional findings after observing real behavior.

---

<!--@slide Thank you-->
# Thank you for listening

Questions?

https://www.figma.com/design/shH7rwYFexBW16cpIfhWZy

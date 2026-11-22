# Eight annotated audit findings

**Audit task:** UNO +2 → +4 ruling. **Source:** https://www.ultraboardgames.com/uno/game-rules.php. The evidence is described as precise **screen details**, as permitted by the assignment, not as screenshot images.

## F01 — Game-level search does not solve rule-level lookup
**Observed screen detail (S1):** The header search prompt says “Type Board Game to search...”, although the user's task is locating an individual rule within the UNO page. The inspected representation does not expose a dedicated question/rule search input on that page.

**Heuristic:** H7 — Flexibility and efficiency of use.  
**Consequence for P01:** They must inspect a lengthy set of rules to locate one card combination.  
**Improvement direction:** Provide an in-rule search or quick-answer query filtered to the selected game; return exact sections and supporting links.  
**Confidence:** High for the visible search prompt; search behavior itself untested.

## F02 — The concrete +2/+4 scenario is distributed across sections
**Observed screen detail (S2):** “Draw 2 Card” and “Wild Draw 4 Card” are separate subsections of “Special Cards”, not a question-answer entry for this interaction.

**Heuristic:** H2 — Match between system and real world.  
**Consequence for P01:** They must combine explanations while others await a decision; a hurried synthesis may be incorrect.  
**Improvement direction:** Include a direct card-combination answer and link both underlying passages, without removing the full rulebook context.  
**Confidence:** High for observed information organization.

## F03 — Similar-card language is easy to confuse with penalty stacking
**Observed screen detail (S3):** The Draw Two explanation tells the next player to draw and lose a turn, then notes that a Draw Two may be played on another Draw Two. These are different contexts, but the passage does not explicitly distinguish a player's regular turn from replying immediately to a penalty.

**Heuristic:** H4 — Consistency and standards (also H5 Error prevention).  
**Consequence for P01:** They might misread the later legal match as permission to stack an action card while serving a draw penalty.  
**Improvement direction:** Split the text into “when it is your turn” and “when you have been penalized”; add a worked +2 → +4 example.  
**Confidence:** High for wording, medium for potential user confusion (not usability-tested).

## F04 — A broadly worded gameplay summary hides the Wild Draw Four restriction
**Observed screen detail (S4):** The “Game Play” example broadly says the player may play a Wild Draw 4; the condition about not holding a card of the current color is elsewhere under “Wild Draw 4 Card”.

**Heuristic:** H5 — Error prevention.  
**Consequence for P01:** A player reading only the overview may walk away with an overgeneralized answer.  
**Improvement direction:** Put a short legality condition immediately beside every Wild Draw Four mention and link the detailed challenge rule.  
**Confidence:** High for distribution of text; risk is inferred.

## F05 — The applicable rules edition is not made explicit beside the ruling
**Observed screen detail (S5):** The page title is “UNO Game Rules”, it lists 112 cards, and later offers many variant links. No dated Mattel source, ruleset revision, or selected-edition identification is shown beside the disputed action-card explanation in the inspected representation.

**Heuristic:** H6 — Recognition rather than recall (also H5 Error prevention).  
**Consequence for P01:** They may use the wrong deck/edition's rules, or confuse an agreed house rule with a base-game rule.  
**Improvement direction:** Label game, release/edition, expansion and source document with an inspectable citation directly next to the answer.  
**Confidence:** High for the inspected page text; unspecified hidden metadata not ruled out.

## F06 — Optional content competes with the current task
**Observed screen detail (S6):** After the UNO rules, a long list of related UNO editions is followed by price-labeled shopping links.

**Heuristic:** H8 — Aesthetic and minimalist design.  
**Consequence for P01:** The most relevant task result is not isolated from exploration and purchasing content.  
**Improvement direction:** Keep the compact ruling and source on top, and move optional related games or commerce to a separate area.  
**Confidence:** High for visible content; actual distraction has not been measured.

## F07 — Accessibility concern: skipped heading level in the rule structure
**Observed screen detail (S7):** The inspected text outline represents “Special Cards” at H2 and individual card names (e.g., “Draw 2 Card”) at H4, with no intervening H3 in that section.

**WCAG:** 1.3.1 — Info and Relationships (Level A), **structural risk to verify**.  
**Consequence for P01:** A person navigating by headings may get an inconsistent hierarchy and find the correct card rule less predictably.  
**Improvement direction:** Nest the individual card names as H3 under “Special Cards”; validate the real DOM and screen reader heading list.  
**Manual check:** The text outline was directly inspected by the auditor rather than inferred from an automated accessibility score. A heading level skip alone is **not sufficient to declare a WCAG failure**.

## F08 — Accessibility concern: card images have no descriptive names in the text-only representation
**Observed screen detail (S8):** Card illustrations alongside “Draw 2 Card”, “Reverse Card” and “Wild Draw 4 Card” appear as generic “Image” markers in the available text-only representation, without meaningful accessible descriptions exposed by that representation.

**WCAG:** 1.1.1 — Non-text Content (Level A), **possible risk, not a confirmed failure**.  
**Consequence for P01:** If the actual images are informational and lack alternatives, a nonvisual user may miss card identification and require extra cross-reference.  
**Improvement direction:** Check image `alt` attributes in the live page. Add meaningful descriptions (e.g. “Wild Draw Four card”) when images convey information; use decorative alternatives if identical adjacent text fully conveys it.  
**Confidence:** Limited; the actual DOM/accessibility tree was not available and must be tested.

## Severity and honest test scope
F01–F06 are content and navigation observations, not measured user failures. F07–F08 are **accessibility concerns requiring on-device verification**, not a WCAG conformance judgment. There was no live keyboard-only session, so a complete accessibility audit would require that extra manual test before submission if the course expects one.

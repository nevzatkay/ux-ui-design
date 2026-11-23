# Audit scope, task and method

## Existing service and user

[UltraBoardGames — UNO Game Rules](https://www.ultraboardgames.com/uno/game-rules.php) is an informational web page covering UNO components, setup, action cards, gameplay and other editions. The page is not the Mattel website; for comparison, an [official Mattel UNO instruction sheet](https://service.mattel.com/instruction_sheets/42001pr.pdf) was also inspected.

**Target:** An UNO group player (Week 2 proto-persona P01) who needs an answer to a current disagreement, not a tutorial on the whole game.

**Bounded task:** Find whether the next player may place a +4 on top of a +2 while the +2 draw penalty applies, and identify supporting rule text.

**Expected successful outcome:** The player distinguishes playing a card on their own valid turn from attempting to respond to a draw penalty, identifies the relevant edition or house rules, and can show a supporting passage to the group.

## Audit procedure and limitations

- Inspected the web page's textual rendering, headings, input labels, links and rule explanations as available on **22 November 2026**.
- Traced the user question through the “Draw 2 Card”, “Wild Draw 4 Card”, and “Game Play” sections; compared the rule context with Mattel's instruction sheet.
- **Manual accessibility spot-check:** read the rendered heading hierarchy directly. “Special Cards” appears as H2, and the action-card subheadings appear at H4. This is an odd skipped level requiring structural verification. It is not, by itself, proof of a WCAG failure.
- **Secondary accessibility spot-check:** in the text-only representation, card illustrations appear as anonymous “Image” markers. This suggests checking image alternatives, but the live image alt attributes and accessibility tree were unavailable.
- Did **not** interact with the live page by keyboard, inspect its DOM, operate a screen reader, or measure colors from a screenshot. Loading, search-empty and error states remain untested. No invented test results are reported.

## Audit principles

**Nielsen usability heuristics:** https://www.nngroup.com/articles/ten-usability-heuristics/  
**WCAG 2.2 reference:** https://www.w3.org/TR/WCAG22/  
**Relevant WCAG criteria:** 1.1.1 Non-text Content; 1.3.1 Info and Relationships.

## Evidence anchors (page details)

- **S1:** Header input, “Type Board Game to search...”.
- **S2:** Heading “Special Cards”, then “Draw 2 Card” and “Wild Draw 4 Card”.
- **S3:** “Draw 2 Card” paragraph about drawing and losing a turn, then matching another Draw Two.
- **S4:** “Game Play” summary permitting Wild Draw 4, contrasted with the separate condition under “Wild Draw 4 Card”.
- **S5:** Title “UNO Game Rules”, “Components” list containing 112 cards; list “Check other UNO Versions”.
- **S6:** After rules: many UNO variant links, followed by product-price links.
- **S7:** Heading sequence (H2 “Special Cards” to H4 individual card subheadings) in the available structured text representation.
- **S8:** Image markers adjoining card names in the available nonvisual text representation.

Evidence is accessible at https://www.ultraboardgames.com/uno/game-rules.php. Use these section references to reproduce each observation; the notes are not representations of screenshots.

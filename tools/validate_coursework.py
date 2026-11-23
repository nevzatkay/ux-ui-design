#!/usr/bin/env python3
"""Check Rulebook UX/UI coursework layout and relative Markdown links.

This checks local artifact structure only. It does not validate human research,
Figma access permissions, official game rules or actual usability.
"""
from pathlib import Path
from urllib.parse import unquote
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"!?(?:\[[^\]]*\])\(([^)]+)\)")
URL = re.compile(r"^(https?://|mailto:|data:|#)", re.IGNORECASE)
WEEKS = [f"{i:02d}" for i in range(1, 11)]
errors = []

def check_exists(path, description):
    if not path.exists():
        errors.append(f"missing {description}: {path.relative_to(ROOT)}")

def validate_links(file):
    text = file.read_text(encoding="utf-8")
    for match in LINK.finditer(text):
        candidate = match.group(1).strip()
        if not candidate or URL.match(candidate):
            continue
        candidate = candidate.strip("<>").split(maxsplit=1)[0]
        target = unquote(candidate.split("#", 1)[0].split("?", 1)[0])
        if not target:
            continue
        resolved = (file.parent / target).resolve()
        try:
            resolved.relative_to(ROOT)
        except ValueError:
            errors.append(f"{file.relative_to(ROOT)}: link escapes repository: {candidate}")
            continue
        if not resolved.exists():
            errors.append(f"{file.relative_to(ROOT)}: broken link: {candidate}")

def check_presentations():
    for w in WEEKS:
        check_exists(ROOT / f"Presentations/presentation/{w}-01/presentation.md", f"Week {w} presentation")
        check_exists(ROOT / f"{w}/README.md", f"Week {w} homework")
        p = ROOT / f"Presentations/presentation/{w}-01/presentation.md"
        if p.is_file():
            txt = p.read_text(encoding="utf-8")
            slide_count = txt.count("<!--@slide")
            if slide_count < 2:
                errors.append(f"{p.relative_to(ROOT)} has fewer than two PowerMD slides")
    p = ROOT / "Presentations/presentation/10-01/presentation.md"
    if p.is_file() and re.search(r"\{\{[^{}]*\}\}", p.read_text(encoding="utf-8")):
        errors.append("Final Week 10 presentation contains unresolved template placeholders")

check_exists(ROOT / "README.md", "root overview")
check_exists(ROOT / "project/README.md", "project overview")
check_exists(ROOT / "SUBMISSION_EVIDENCE_MATRIX.md", "evidence matrix")
check_exists(ROOT / "RESEARCH_EVIDENCE_POLICY.md", "research evidence policy")
check_presentations()
for item in sorted(ROOT.rglob("*.md")):
    if ".git" in item.parts:
        continue
    validate_links(item)

if errors:
    print(f"FAIL — {len(errors)} coursework issue(s):")
    for item in errors:
        print(" -", item)
    sys.exit(1)

print(f"PASS — Weeks 01–10, ten PowerMD decks and {len(list(ROOT.rglob('*.md')))} Markdown files; no broken local links.")
print("NOTE — This is a structural check, not proof of completed student usability tests.")

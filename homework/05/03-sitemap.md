# Sitemap — hierarchy and screen relationships

The main task is a **single supported ruling**. No accounts or feature menus are included.

```text
Rule check (task entry)
└── Choose game & rules  [Screen 1]
    ├── Game
    ├── Edition
    ├── Active expansions (if any)
    ├── Unsupported ruleset notice [state]
    └── Ask a rule  [Screen 2]
        ├── Plain-language situation question
        ├── Add missing detail [clarification state; returns here]
        ├── Loading / network error [states]
        └── Answer & source  [Screen 3]
            ├── Answer or “Cannot verify”
            ├── Source title, edition, section/page
            ├── Conflicting evidence [state]
            ├── Read source  [Screen 4, viewer]
            ├── Ask another question → Screen 2
            └── Change game/edition → Screen 1
```

**Relationships:** Screen 1 establishes trusted context; Screen 2 asks about a specific move; Screen 3 contains the decision and evidence; Screen 4 reveals the cited passage. Exceptional states remain embedded in the relevant screen instead of creating irrelevant extra pages.

**Rationale:** P01's reported incident began with a specific uncertain move and ended with the group interpreting online rules. Screens implement that narrow task; edition checks and uncertainty are design safeguards, not directly reported participant preferences.

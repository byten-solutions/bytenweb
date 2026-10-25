# Byten Agent Orchestration & Coordination Guide

This guide establishes how **Intent**, **Impeccable**, **Ponytail**, **Graphify**, and **Change Tracking** coordinate across the product development lifecycle.

---

## 1. The 5-Phase Coordination Lifecycle

```
[Phase 1: Strategy & Structure]
       Intent UX
(Problem framing, wireframing, microcopy)
              │
              ▼
[Phase 2: Visual Craft & Design Tokens]
       Impeccable UI
(Design tokens, contrast, anti-slop detection)
              │
              ▼
[Phase 3: Minimalist Implementation]
       Ponytail Code
(7-Step Necessity Ladder, Next.js 16/Tailwind)
              │
              ▼
[Phase 4: Knowledge Graph Synchronization]
       Graphify AST
(AST dependency extraction, token-efficient queries)
              │
              ▼
[Phase 5: Change Audit & Decision Records]
       Track Changes
(CHANGELOG.md, PROJECT_STATE.md, ADRs)
```

---

## 2. Specialized Subagents

| Subagent | Role | Framework | Focus Area |
| :--- | :--- | :--- | :--- |
| **`ux-strategist`** | UX Strategist | **Intent** | User journeys, wireframing, content articulation (`/strategize`, `/wireframe`, `/articulate`). |
| **`ui-craftsman`** | UI Craftsman | **Impeccable** | Visual polish, typography, tokens, anti-slop verification (`/polish`, `/audit`, `impeccable detect`). |
| **`ponytail-engineer`** | Minimalist Dev | **Ponytail** | 7-step Necessity Ladder, clean code, no unnecessary packages (`/ponytail`, `/ponytail-review`). |
| **`system-auditor`** | Change Auditor | **Change Tracking + Graphify** | Git diff audit, `CHANGELOG.md`, `PROJECT_STATE.md`, ADRs, and `graphify update`. |

---

## 3. When and How to Coordinate

### Scenario A: Designing a New Page or Feature
1. **Strategize**: Call `ux-strategist` to produce the layout structure and UX copy.
2. **Design Tokens**: `ui-craftsman` applies tokens from `docs/DESIGN.md` and runs `npx impeccable detect`.
3. **Build**: `ponytail-engineer` writes the Next.js components using native features first.
4. **Audit**: `system-auditor` runs tests, updates `CHANGELOG.md`, and runs `graphify update .`.

### Scenario B: Refactoring or Reviewing Code
1. Use `/ponytail-review` or assign `ponytail-engineer` to identify unnecessary abstractions or unused dependencies.
2. Use `/impeccable detect` to ensure visual standards weren't compromised.
3. Use `/track-changes` to document the refactor.

### Scenario C: Team Collaboration Modes
- Use the slash command `/teamwork` when you want autonomous multi-agent collaboration across large tasks.
- Use `/plan` or `/grill-me` when framing high-level design decisions before implementation.

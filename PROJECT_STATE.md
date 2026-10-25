# Project State & Iteration Ledger

> **Notice for AI Agents**: Always consult this document before starting any major task, and update it when features are added, refactored, or redesigned.

---

## 1. Project Overview
- **Project Name**: Byten Official Website (`bytenweb`)
- **Status**: Official Homepage Redesign Implemented & Hardened. Zero AI anti-patterns.
- **Tech Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript 5.

---

## 2. Active Roadmap & Milestones

| Milestone | Status | Description |
| :--- | :--- | :--- |
| **M1: Agent & Skillset Infrastructure** | ✅ Complete | Installed Impeccable, Intent, Ponytail, Graphify, and Change Tracking system. |
| **M2: UI/UX Wireframing & Strategy** | ✅ Complete | Formulated structural layout and high-signal value propositions. |
| **M3: Component Design & Polish** | ✅ Complete | Built obsidian dark technical theme (`docs/DESIGN.md`) in Tailwind v4. |
| **M4: Content & Articulation** | ✅ Complete | Replaced template placeholder copy with clear engineering & POS capabilities. |
| **M5: Production Hardening & Audit** | ✅ Complete | Verified 0 anti-patterns with Impeccable, 0 ESLint errors, and clean Next.js build. |
| **M6: API Route & Lead Storage** | ⏳ Queued | Connect inquiry form to backend notification/database service. |
| **M7: Dedicated POS Product Page** | ⏳ Queued | Dedicated showcase for retail hardware, multi-store sync, and live demo requests. |

---

## 3. Architecture & Skillset Matrix

| Skill / Domain | Location | Primary Triggers | Description |
| :--- | :--- | :--- | :--- |
| **Impeccable** | `.agents/skills/impeccable` | `/impeccable`, `/audit`, `/polish`, `/bolder`, `/quieter` | Detects AI anti-patterns and elevates UI craftsmanship. |
| **Intent UX** | `.agents/skills/intent`, `strategize`, `wireframe`, etc. | `/strategize`, `/wireframe`, `/evaluate`, `/articulate` | Plans UX flows, structural layouts, and content models. |
| **Ponytail** | `.agents/skills/ponytail`, `ponytail-review`, etc. | `/ponytail`, `/ponytail-review`, `/ponytail-debt` | Enforces the 7-step Necessity Ladder ("no unnecessary code"). |
| **Graphify** | `.agents/skills/graphify` | `/graphify`, `/graphify update`, architecture questions | Queries AST dependency graph in `graphify-out/`. |
| **Track Changes** | `.agents/skills/track-changes` | `/track-changes`, post-feature completion | Audits git diffs, updates `CHANGELOG.md`, `PROJECT_STATE.md`, and ADRs. |

---

## 4. Current Technical Debt & Shortcuts (`ponytail-debt`)
*No active shortcuts recorded. When taking deliberate tactical shortcuts, prefix code comments with `shortcut:` or `ponytail:` so they can be indexed.*

---

## 5. Maintenance Checklist for Agents
When completing a task:
1. Run `npx impeccable detect app/` to verify no UI anti-patterns exist.
2. Run `/Users/apple/Library/Python/3.13/bin/graphify update .` if files or dependencies were modified.
3. Update `CHANGELOG.md` under `[Unreleased]` if features were added or changed.
4. Keep `PROJECT_STATE.md` synchronized with the latest milestone status.

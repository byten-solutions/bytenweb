# 1. Integration of Agent Skillsets, Code Discipline, and Change Tracking

- **Date**: 2026-10-25
- **Status**: Accepted
- **Deciders**: Byten Engineering Team & Antigravity Assistant

---

## Context
The Byten website was initialized with a temporary Next.js template that does not represent the company's brand, software engineering standards, or service offerings. To prevent AI coding agents from generating unconstrained code, bloated abstractions, and generic visual templates ("AI slop"), we require an institutionalized set of agent guidelines, design tooling, and change-tracking systems directly inside the project repository.

---

## Decision
1. **UI Craft & Quality Control**: Integrated **Impeccable** (`pbakaus/impeccable`) for deterministic UI anti-pattern scanning (`impeccable detect`) and design iteration commands (`/polish`, `/audit`, `/critique`, `/typeset`). Established `docs/DESIGN.md` and `docs/PRODUCT.md`.
2. **UX Architecture**: Integrated **Intent** (`ghaida/intent`) to govern experience design, user flows, content articulation, and system modeling before visual code is written (`/strategize`, `/wireframe`, `/articulate`, `/evaluate`).
3. **Engineering Minimalism**: Integrated **Ponytail** (`dietrichgebert/ponytail`) to enforce the 7-step Necessity Ladder ("Does this need to exist? Does stdlib do it? Can a native browser feature do it?"). Mandated that agents stop at the simplest working solution and track any technical shortcuts via `shortcut:` comments.
4. **Codebase Knowledge Graph**: Integrated **Graphify** (`graphify-labs/graphify` + `graphifyy`) for AST dependency extraction, generating interactive architecture graphs and summaries (`graphify-out/`).
5. **Change Tracking & Auditability**: Established a continuous change-tracking system including `CHANGELOG.md` (Keep a Changelog convention), `PROJECT_STATE.md` (living roadmap and milestone tracker), and ADRs in `docs/adr/`.

---

## Consequences
- **Positive**:
  - Agents operate with clear boundaries and cannot hallucinate unnecessary libraries or over-engineered components.
  - Design adheres to strict contrast, typographic rhythm, and brand voice.
  - Every major code change and architectural decision is transparently recorded and traceable.
  - AST knowledge graphs prevent token bloat during agent codebase queries.
- **Trade-offs**:
  - Agents must perform explicit change-logging checks when completing non-trivial tasks.
  - Contributors must heed Ponytail's ladder before adding third-party dependencies.

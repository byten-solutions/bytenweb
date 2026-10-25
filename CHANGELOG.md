# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- **shadcn/ui Integration & Logo Brand Theme**:
  - Integrated shadcn/ui component primitives (`Button`, `Card`, `Badge`, `Input`, `Textarea`, `Separator`) with Tailwind CSS v4.
  - Aligned the entire color system with the official Byten logo: vibrant teal (`#0097B2`) and deep teal (`#124854`) over obsidian slate (`#080E14`).
  - Added `lucide-react` icon system replacing raw SVGs.
  - Configured `components.json` and `lib/utils.ts` (`cn()` helper).
- **Official Brand Identity & Logo Integration**:
  - Extracted and processed official Byten brand mark and typography from master assets into high-resolution transparent assets: `public/byten-logo.png`, `public/byten-logo-dark.png`, `public/byten-mark.png`, and `public/byten-mark-dark.png`.
  - Replaced generic placeholder "B" letter boxes with the official Byten logo in the top Navigation Bar (`app/page.tsx`) and Footer (`app/page.tsx`).
  - Integrated the Byten mark badge into the Hero engineering badge and POS engine status card.
  - Configured multi-resolution browser tab icons: `app/favicon.ico` and `public/favicon.ico` (16, 32, 48px), `app/icon.png` and `public/icon.png` (512x512), and Apple touch icon `app/apple-icon.png` (180x180).
  - Configured `metadataBase`, `icons`, `openGraph.images`, and `twitter.images` metadata in `app/layout.tsx`.
- **Official Homepage Redesign (`app/page.tsx`)**:
  - Implemented 7-section engineering agency layout adhering to `docs/DESIGN.md` and `docs/PRODUCT.md`.
  - Showcased 4 core engineering capabilities: Web Platforms, Mobile Applications, Smart POS & Retail Systems, and Enterprise APIs.
  - Added specialized Point of Sale (POS) architecture deep dive detailing offline transaction queues, inventory sync, and hardware driver support.
  - Built accessible, interactive project inquiry form with scope selection and instant validation.
  - Switched font stack to modern geometric `DM Sans` (`app/layout.tsx`).
- **Tailwind CSS v4 Design Token Architecture (`app/globals.css`)**:
  - Integrated Tailwind v4 base styles with dark obsidian palette (`#090D16`), elevation panels (`#111726`), electric blue (`#2563EB`), and high-contrast text.

### Removed
- Removed 130 lines of bespoke glassmorphism CSS, decorative text gradients, and emoji placeholders flagged as AI anti-patterns by Impeccable.

---

## [0.1.0] - 2026-10-25

### Added
- **AI Agent & Skillset Infrastructure**:
  - **Impeccable** (`pbakaus/impeccable`): UI craft, anti-pattern detection, typography, and contrast enforcement.
  - **Intent** (`ghaida/intent`): 18 UX strategy skills including `/strategize`, `/wireframe`, `/articulate`, `/evaluate`, and `/fortify`.
  - **Ponytail** (`dietrichgebert/ponytail`): 6 code discipline skills enforcing the 7-step Necessity Ladder, debt tracking, and review workflows.
  - **Graphify** (`graphify-labs/graphify`): Codebase AST knowledge graph engine (`graph.html`, `GRAPH_REPORT.md`, `graph.json`).
- **Product & Design System Context**:
  - `docs/PRODUCT.md`: Byten company overview, core service offerings, brand voice, and audience.
  - `docs/DESIGN.md`: Obsidian dark theme tokens, typographic scale, component standards, and anti-pattern checklists.
- **Change Tracking System**:
  - `CHANGELOG.md`: Standard Keep-a-Changelog release log.
  - `PROJECT_STATE.md`: Living status ledger tracking roadmap, current features, and technical debt.
  - `docs/adr/`: Architectural Decision Records directory with `0001-agent-skillset-and-change-tracking.md`.
  - `.agents/skills/track-changes/`: Dedicated change-tracking skill for coding agents.
- **Agent Governance Rules**:
  - `.agents/rules/ui-craft.md`: Rules preventing AI slop and enforcing Impeccable & Intent guidelines.
  - `.agents/rules/code-discipline.md`: Rules enforcing Ponytail minimalism and zero over-engineering.
  - `.agents/rules/change-tracking.md`: Rules enforcing audit updates on meaningful code changes.
  - `.agents/rules/graphify.md`: Graphify AST graph navigation rules.

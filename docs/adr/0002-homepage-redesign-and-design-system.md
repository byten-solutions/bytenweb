# 2. Homepage Redesign & Obsidian Technical Design System

- **Date**: 2026-10-25
- **Status**: Superseded by ADR 0004
- **Deciders**: Byten Engineering Team & Antigravity Assistant

---

## Context
The initial website template exhibited severe UI anti-patterns:
- Decorative background gradients, floating animations, and emoji icons that lowered brand credibility.
- Generic, vague copy ("We Architect Digital Excellence") that failed to reflect Byten's specialized core competencies in retail Point of Sale systems and modern web engineering.
- Reliance on 130 lines of bespoke glassmorphism CSS while ignoring the installed Tailwind CSS v4 framework.

---

## Decision
1. **Redesigned Information Architecture**: Restructured the homepage into 7 high-signal sections:
   - Sticky Header & Navigation
   - Hero Section with concrete value propositions and metric proof strips
   - 4 Core Engineering Capabilities (Web Platforms, Mobile Apps, POS Systems, Enterprise Backends)
   - Specialized Retail & POS Architecture Deep Dive (offline queues, hardware drivers, inventory ledgers)
   - The Byten Engineering Principles (Performance, Typed Integrity, Minimalism)
   - Interactive Project Inquiry with Scope Filtering
   - System Footer with Live Status indicator
2. **Design System Migration**:
   - Replaced custom CSS with Tailwind CSS v4 utility classes and obsidian dark theme tokens (`#090D16`, `#111726`, `#2563EB`).
   - Replaced Inter with modern geometric `DM Sans`.
   - Replaced emoji indicators with crisp inline SVG technical vectors.
3. **Verification**:
   - Audited with `npx impeccable detect app/` yielding 0 anti-patterns.
   - Built with Next.js 16.2.1 Turbopack with 0 warnings or errors.

---

## Consequences
- **Positive**:
  - The website accurately represents Byten as a high-performance digital engineering company.
  - Zero dead CSS, fully responsive across mobile and desktop.
  - High contrast WCAG AA compliant interface.
- **Next Steps**:
  - Integrate backend API route for the inquiry form submissions (`POST /api/inquiries`).

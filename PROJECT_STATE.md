# Project State & Iteration Ledger

> **Notice for AI Agents**: Read this before a major task, and update it when
> features, routes, or the design system change.

---

## 1. Project Overview

- **Project**: Byten portfolio company website (`bytenweb`)
- **Branch**: `redesign-load-bearing`
- **Status**: Load-Bearing rebuild implemented, verified and documented.
- **Stack**: Next.js 16.2.1 (App Router, Turbopack), React 19.2.4, Tailwind CSS
  v4, TypeScript 5, `next-themes`. No UI library, icon package, animation
  library, or backend.
- **Design direction**: Load-Bearing — structural-engineering editorial. See
  `docs/DESIGN.md` and ADR 0004.
- **Primary contact**: bytensolution@gmail.com / +91 9633581368 /
  www.byten.in

---

## 2. Shipped Surface

| Route | Purpose | State |
| :--- | :--- | :--- |
| `/` | Hero + load rig, conveyor, work, capabilities, process, studio, contact | ✅ |
| `/work` | Representative engagement index with interactive previews | ✅ |
| `/work/counter` | Offline-first retail POS case study | ✅ |
| `/work/atlas` | B2B commerce case study | ✅ |
| `/work/relay` | Field operations mobile case study | ✅ |
| `/studio` | Company record, principles, boundaries | ✅ |
| `/contact` | Three-step expectation + project brief | ✅ |
| `/not-found` | Styled 404 | ✅ |
| `/sitemap.xml`, `/robots.txt` | Static metadata routes | ✅ |
| `/og.png` | 1200×630 social card | ✅ |

The contact form opens a populated `mailto:` draft and offers a copy-brief
fallback. There is deliberately no API route and no fake success state.

---

## 3. Milestones

| Milestone | Status | Description |
| :--- | :--- | :--- |
| **M1: Agent & skillset infrastructure** | ✅ Complete | Impeccable, Intent, Ponytail, Graphify, change tracking. |
| **M2: Visual direction & IA** | ✅ Complete | Load-Bearing direction, sitemap, content rules, plan. |
| **M3: Design tokens & type** | ✅ Complete | Concrete/ink/teal/vermilion tokens, Archivo/Hanken/Geist Mono. |
| **M4: Authored SVG system** | ✅ Complete | Load rig, four capability schematics, three case previews. |
| **M5: Home & shell** | ✅ Complete | Header, native mobile dialog, hero, work index, process, studio, contact, footer. |
| **M6: Case study pages** | ✅ Complete | Three full case studies with brief, structure, tradeoff and disclosure. |
| **M7: Metadata & brand** | ✅ Complete | Metadata, JSON-LD, sitemap, robots, OG image, supplied lockups. |
| **M8: Verification** | ✅ Complete | Build, lint, typecheck, overflow scan, visual/desktop/mobile/dark review. |
| **M9: Documentation** | ✅ Complete | DESIGN.md, PRODUCT proof rules, ADR 0004, changelog, state, README. |
| **M10: Real content pass** | ⏳ Next | Replace synthetic case briefs with approved client material and real proof. |

---

## 4. Architecture

```
app/
  layout.tsx          fonts, metadata, JSON-LD, theme provider, header/footer
  template.tsx        route fade (opacity only)
  page.tsx            home composition
  globals.css         tokens, components, motion, responsive
  work/page.tsx       work index
  work/[slug]/page.tsx
  studio/page.tsx
  contact/page.tsx
  not-found.tsx
  sitemap.ts / robots.ts
components/
  site-header.tsx     sticky nav, progress rule, native dialog menu
  site-footer.tsx     identity, nav, live IST, large lockup
  load-rig.tsx        interactive hero SVG (client)
  work-index.tsx      row list + portal preview (client)
  work-preview.tsx    three case schematics (SVG)
  diagrams.tsx        four capability schematics (SVG)
  capability-grid.tsx
  process-section.tsx
  studio-section.tsx
  contact-section.tsx
  contact-form.tsx    mailto/copy brief (client)
  conveyor.tsx
  icons.tsx           authored icon set
  logo.tsx            supplied lockup
  local-time.tsx
  theme-toggle.tsx
lib/
  site.ts             company facts and nav
  work.ts             case data + canonical disclosure
docs/
  DESIGN.md           shipped design system
  PRODUCT.md          product truth and claims rules
  adr/0004-load-bearing-portfolio-redesign.md
  plans/load-bearing-redesign.md
```

No unused `components/ui` primitives remain.

---

## 5. Verification Evidence

- `npm run build` — clean (Next.js 16.2.1, 14 static routes).
- `npm run lint` — clean (`.tmp`, `.npm-cache`, `.impeccable` ignored).
- `npx tsc --noEmit --incremental false` — clean.
- Automated overflow scan at 320, 390, 768, 1024, 1280, 1440, 1920 across `/`,
  `/work`, `/work/counter`, `/studio`, `/contact` — zero horizontal overflow.
- Desktop, mobile, dark, hover, menu, case, studio, contact and 404 screenshots
  captured under `.impeccable/review/` (ignored by git).
- Keyboard paths: skip link, nav, work rows, form controls, native menu dialog,
  theme toggle, back-to-top, and the load rig (arrow keys, `role="slider"`,
  live text readout).
- Mobile header verified at 320px: 132px logo, full 44px menu button, no
  horizontal overflow; H1 lines fit without clipping.
- Mobile menu verified at 320×800 and 390×844: dialog fills the viewport,
  theme row visible, no horizontal overflow, native Escape/focus trap intact.
- Wide screens verified at 1920×1080 and 2560×1440: header lockup 108px, footer
  lockup 128px, hero title clears the plate, no horizontal overflow.
- Form validation verified: `aria-invalid` on every invalid field, first field
  focused, error summary in the live region.
- Diagram and social-card review corrections applied: `fill="none"` on diagram
  groups, full OG rig/readout crop, teal-family case plates, mobile work note
  layout.
- Reduced-motion render inspected; content remains visible, auto-play is
  stopped, and the conveyor pause control is hidden when it is unnecessary.

---

## 6. Honest Debt & Content Notes

- **Synthetic case studies**: the three cases are representative briefs. Every
  presentation carries the canonical disclosure in `lib/work.ts`
  (`REPRESENTATIVE_NOTE`). Replace with approved client material before using
  the site as a live proof portfolio.
- **Load facts**: the numbers describe the brief or a target, never an audited
  result. The case page captions this explicitly.
- **No backend**: the form uses `mailto:`. If a real lead endpoint is added,
  keep the honest copy and add server-side validation and a privacy note.
- **No analytics**: do not add tracking without a visible privacy decision.
- **No team photography / client logos**: the design deliberately uses
  schematics and typography rather than stock portraits or logo walls.
- **Logo**: the wordmark is the supplied raster lockup; do not redraw it.
- **Impeccable engine**: the local detector engine was unavailable (network /
  cache permission). The craft floor, manual contrast checks and a three-agent
  review were used instead. Re-run `impeccable detect app/` when the engine is
  available.

---

## 7. Maintenance Checklist

1. `npm run lint`
2. `npx tsc --noEmit --incremental false`
3. `npm run build`
4. Check no horizontal overflow at 320 and 1440 on any changed route.
5. Recompute contrast if a token changes (`docs/DESIGN.md`).
6. Update `CHANGELOG.md` and this file.
7. If the site is deployed, replace `mailto:` with a real lead handler and add
   privacy copy.
8. Re-run `graphify update .` when the graphify CLI is available; the checked-in
   graph predates this rebuild.

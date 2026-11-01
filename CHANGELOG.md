# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Changed
- Nothing yet.

---

## [0.2.0] - 2026-11-01

The site was rebuilt from scratch as a portfolio company site under the
**Load-Bearing** direction. The previous shadcn/dark-SaaS presentation was
replaced rather than polished.

### Added
- **Load-Bearing visual system** (`docs/DESIGN.md`): concrete/ink/teal/vermilion
  palette, Archivo variable display, Hanken Grotesk reading face, Geist Mono
  measurements, 12-column editorial grid, hairline rules and one committed teal
  service plate.
- **New information architecture**:
  - `/` — hero, conveyor, selected work, capabilities, process, studio, contact.
  - `/work` — representative engagement index.
  - `/work/counter`, `/work/atlas`, `/work/relay` — full case studies with
    brief, structure, outcome, tradeoff, stack, disclosure and contact CTA.
  - `/studio` — company record, working principles and boundaries.
  - `/contact` — project brief with honest email behaviour.
  - Styled `404`.
- **Interactive load rig** (`components/load-rig.tsx`): authored SVG portal
  frame with four service labels, pointer-driven live load, deflection readout,
  dimension lines and a draw-in animation.
- **Authored schematic system** (`components/diagrams.tsx`,
  `components/work-preview.tsx`): web, mobile, retail and backend diagrams, plus
  three case-study UI schematics. No stock icons or fake dashboards.
- **Work index interaction**: colour-inverting rows, cursor-following project
  preview rendered through a React portal, keyboard focus preview, and inline
  mobile schematics.
- **Native mobile menu** (`<dialog>`): focus trapping, Escape, backdrop close,
  scroll lock, indexed links, CTA, direct contact and theme toggle.
- **Theme-aware inverted bands**: conveyor, process and contact invert with the
  theme; dark mode is a designed paper inversion, not a filter.
- **CSS scroll-driven reveals** and process-line fill, with visible-by-default
  fallbacks and a full reduced-motion path.
- **SEO and sharing**: metadata template, canonical URLs, Open Graph/Twitter
  tags, JSON-LD Organization, `sitemap.xml`, `robots.txt`, and a 1200×630
  font-accurate `public/og.png` captured from the built hero.
- **Live IST clock**, skip link, scroll progress rule, custom focus/selection/
  scrollbar styling, and `color-scheme`/theme-color metadata.
- **Content disclosure model**: all cases carry the canonical line
  “Representative engagement: synthetic brief, no client name, no audited
  results.” The work page no longer claims production systems.

### Changed
- Replaced fake SLA/metric strips, terminal status cards, generic icon-card
  grids, gradient/glass decoration and "production-grade" eyebrow copy with
  specific studio copy.
- Contact form now clearly opens a populated email draft; the button says
  “Send brief by email” and the helper sits above the action.
- Case pages now show a visible “Brief constraints, not measured results”
  caption, a “What we traded” section for each engagement, and a
  “Have a similar constraint? Send the brief” contact path before the next
  system.
- Case-study plates now stay in the teal family (`--plate`, `--plate-deep`,
  teal-ink); vermilion remains a live-load and selected-control accent rather
  than a full field.
- Work page now describes representative engagements, not systems in
  production.

### Removed
- Old shadcn/ui primitives (`Badge`, `Button`, `Card`, `Input`, `Separator`,
  `Textarea`) and the `components/ui` folder.
- Unused dependencies: `@radix-ui/react-slot`, `class-variance-authority`,
  `clsx`, `lucide-react`, `tailwind-merge`, `tw-animate-css`.
- Template SVG assets (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`,
  `window.svg`).
- `lib/utils.ts` (no longer needed after the dependency prune).
- Unused CSS utilities (`.display-tight`, `.h3`, `.draw-line`, `.hero__field`).

### Fixed
- Hover preview no longer breaks under a transformed page-transition ancestor;
  it renders in a body portal.
- Cross-theme contrast: darkened `--subtle`/`--primary`, set plate text to pure
  white, added a theme-aware `--band-accent` for inverted bands, scoped
  `--focus` on dark paper bands, raised the 55% band labels, and fixed the
  ghost button so it remains visible on a light band in dark mode.
- All authored SVG diagram groups now set `fill="none"`, removing black wedges
  and caption overlaps caused by open paths inheriting the default fill.
- Header logo now respects its 132px width (the mobile menu was off-screen at
  320px before); the hero H1 scales down below 900px instead of clipping.
- The hamburger is hidden on desktop; the desktop header has one navigation
  system again.
- Field focus rings are visible again; form validation now marks every invalid
  field with `aria-invalid`, links it to a status summary, and focuses the first
  error instead of relying on a browser bubble.
- The conveyor has a keyboard-operable Pause/Play control; the theme toggle
  exposes `aria-pressed`; the load rig is a keyboard/touch slider with a visible
  readout; the studio statement is an `h2`; the skip target can take focus;
  Back to top targets the header.
- Mobile work note no longer squeezes the contact link into a narrow column.
- Mobile menu email no longer breaks mid-word.
- The mobile menu now fills the dynamic viewport with its native
  `max-height` reset, so the theme row and contact block are not cut off at
  390×844 or 320×800. Footer links gained larger touch targets.
- 404 no longer uses a kicker above the heading.
- The social card now contains the full load rig and readout strip instead of
  cropping the base of the drawing.

### Documentation
- Replaced `docs/DESIGN.md` with the shipped Load-Bearing system.
- Added proof/claims rules and the engagement model to `docs/PRODUCT.md`.
- Added ADR 0004 (supersedes 0002/0003), the implementation plan, and updated
  `PROJECT_STATE.md`/`README.md`.

---

## [0.1.1] - 2026-10-31

### Added
- Official Byten logo assets and favicons.
- shadcn/ui primitives themed to the logo palette.
- Pure-white light mode, `next-themes` toggle, and a dark obsidian homepage.
- DM Sans typography, metric strips and an interactive inquiry form.
- Earlier engineering/POS copy and metadata.

### Removed
- Template glassmorphism, decorative text gradients and emoji placeholders.

---

## [0.1.0] - 2026-10-25

### Added
- **Agent and skillset infrastructure**: Impeccable, Intent, Ponytail, Graphify
  and track-changes skills.
- **Product and design context**: `docs/PRODUCT.md`, `docs/DESIGN.md`.
- **Change tracking**: this changelog, `PROJECT_STATE.md`, ADRs and
  `.agents/rules/`.
- **Governance rules** for UI craft, code discipline, change tracking and the
  knowledge graph.

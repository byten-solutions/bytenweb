# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- **Clean Route Architecture (Removed `#` Hash Fragments)**:
  - Converted `/#capabilities` and `/#process` anchor jumps into clean dedicated top-level routes: [`/capabilities`](/capabilities) and [`/process`](/process).
  - Updated primary navigation, mobile drawer menu, footer links, and XML sitemap to reference clean URLs without `#` hash fragments.
- **Production-Grade Micro-Animations & Universal Scroll-Reveal**:
  - Implemented client-side `ScrollReveal` component using native `IntersectionObserver` with smooth Apple/Stripe-calibrated cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`), unlocking universal scroll-triggered entrances across Safari, iOS, Firefox, and Chrome without depending solely on Chromium-only CSS scroll timelines.
  - Added live telemetry status beacon to hero specifications with pulsing emerald radar wave (`beacon-pulse`) for "Open for select projects".
  - Enhanced micro-interactions on capability cards, tech pills, process stages (`.process__step:hover`), studio principles, and case study screenshot frames (`.case-screenshot-frame:hover` elevation and subtle shadow).
  - Maintained strict `@media (prefers-reduced-motion: reduce)` compliance.
- **Comprehensive Enterprise SEO & Rich Structured Data (JSON-LD)**:
  - Added complete Schema.org `@graph` with `Organization`, `WebSite`, and `OfferCatalog` featuring all 4 Byten service pillars, contact details, geo-location, and verified platform references.
  - Added dedicated `SoftwareApplication` JSON-LD schemas and dynamic OpenGraph image previews to all 8 case study pages (`/work/[slug]`).
  - Added extended high-intent meta keywords (quarry ERP, school management fee engine, Flutter restaurant POS, Kerala engineering company).
  - Enabled Googlebot `max-image-preview: large` robot directives and enhanced XML sitemap priorities (`1.0` homepage, `0.9` work directory, `0.85` case studies).
- **Site-Wide Alignment to Byten Real Systems & Service Offerings**:
  - Replaced generic schematic labels on the interactive hero **Load Rig** with Byten's four real operating pillars: `ERP`, `MOBILE`, `WEB`, `SERVICES`.
  - Overhauled **Capability Grid** (`What we build`) to reflect actual client engagements:
    1. *Enterprise ERP & SaaS* (`byteSTRATA`, `EduByte`, `byteFlow`)
    2. *Mobile apps* (`bytePOS`, Flutter, offline-first)
    3. *Websites & client portals* (`Cuplana`, `KidsCove`, `Skyra`)
    4. *Services & integrations* (WhatsApp API, payment gateways, `byteBallot`)
  - Updated conveyor disciplines ticker tape, hero value proposition copy, disciplines list, and studio philosophy to center on enterprise platforms, mobile applications, client websites, and service-sector integrations.
- **Mobile-Only 3-Project Selected Work with Inline Toggle**:
  - In mobile view on the Home page, the Selected Work list shows exactly 3 projects (`byteSTRATA`, `EduByte`, `byteFlow`) to keep the page clean and concise.
  - Added a clean mobile-only `See all projects` button that expands and renders all 8 projects inline right on that page when tapped (with smooth `Show less` collapse).
  - Desktop view remains completely unchanged (displaying all 8 table rows with hover previews, and no mobile toggle button).
- **Cuplana case study** (`/work/cuplana`): Food consulting & culinary operations platform for modern restaurant brands, menu engineering, cost control, and consultation booking.
- **KidsCove case study** (`/work/kidscove`): School of Excellence early education web portal, admissions booking (2027-28), curriculum storytelling, and WhatsApp helpline integration in Ozhukur, Kerala.
- **Skyra case study** (`/work/skyra`): Global education & HR career consultancy portal, international study abroad lead capture, and overseas corporate placements.
- **100% Real Client Portfolio Transition**: Replaced synthetic placeholder case studies (`counter`, `atlas`, `relay`) with authentic client websites and enterprise platforms.
- **byteBallot case study** (`/work/byteballot`): Realistic miniature simulation of the Indian Electronic Voting Machine (EVM) and VVPAT printer educating citizens and first-time voters on the complete ballot procedure with 148,000+ anonymous simulated votes.
- **bytePOS case study** (`/work/bytepos`): Cross-platform Flutter tablet and mobile application (Android & iOS) for restaurants, instant ESC/POS kitchen order ticket (KOT) printing, table management, live raw material consumption, and cash drawer reconciliation. Cropped OS status and navigation bars to isolate the pure application interface.
- **byteFlow case study** (`/work/byteflow`): Real-time delivery orchestration Kanban platform featuring immutable mutation histories, multi-lane workflows, role governance, and sub-100ms WebSocket synchronization.
- **EduByte case study** (`/work/edubyte`): Modern school management, individualized student fee ledgers, automated WhatsApp receipt messaging, per-vehicle transport route profitability, and institutional double-entry accounting.
- **byteSTRATA case study** (`/work/bytestrata`): Enterprise quarry, stone crusher & mining ERP platform unifying weighbridge scale telemetry, heavy fleet logistics, double-entry commercial accounts, payroll slips, and executive DPR/P&L analytics.
- **Original dashboard interface display**: Replaced vector schematic in both the case-art hero section (`/work/bytestrata`) and the work index hover/mobile preview card (`WorkIndex`) with the original high-resolution live quarry workspace dashboard.
- **Production screenshot gallery** (`public/work/bytestrata/`): 5 high-resolution production interface captures embedded with architectural figure headers (`FIG. 01` to `FIG. 05`) and descriptive technical captions.
- Expanded Selected Work on home (`/`) and work index (`/work`) to feature byteSTRATA as the lead project.

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
- Reduced the header lockup to 108px and the footer lockup to 128px, and removed
  the oversized repeated footer wordmark so the identity appears twice, not
  three times. The hero display cap is now 8rem so “SOFTWARE” clears the teal
  plate at 1920px and above.
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
- The hero now fits a 1080p Chrome content viewport: tighter vertical padding,
  a capped load-rig stage height, and short-height rules at 880px and 700px.
  At the 1920×830 content viewport the hero ends at 740px, with the spec strip
  and conveyor visible. The dev-only Next badge is disabled in `next.config.ts`
  so it cannot overlap the page.

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

# Load-Bearing — Byten portfolio redesign

Status: implemented and verified · Branch: `redesign-load-bearing` · Nov 2026

## 1. Brief

Rebuild the Byten website from scratch as a **portfolio company site**, not a SaaS
marketing page. Remove every AI-template tell: fake dashboards, invented SLA
metrics, terminal status cards, generic icon-card grids, purple/teal glow
gradients, "production-grade" eyebrows, and placeholder microcopy.

Keep the company truth from `docs/PRODUCT.md`: Byten is a digital engineering
company building web platforms, mobile applications, retail/POS systems, and
enterprise software. Contact details are fixed (bytensolution@gmail.com,
+91 9633581368, byten.in).

## 2. Direction — "Load-Bearing"

A structural-engineering editorial world. The idea: **software is structure; it
has to carry weight.** The site behaves like a beautifully art-directed
engineering document, not a product brochure.

- **Ground**: cool mill-finish concrete (`#E7E9E4`), paper surfaces (`#F4F5F1`).
- **Ink**: near-black green (`#101512`), soft ink (`#4A514C`).
- **Structure**: Byten teal (`#007C8F` light / `#4CC9D9` dark).
- **Live load**: signal vermilion (`#E8451F` light / `#FF6B45` dark).
- **Type**: Archivo variable (width axis) — wide, structural display; Hanken
  Grotesk for reading; Geist Mono only for measurements, specs, and code-like
  data (never as a "technical" costume).
- **Signature**: an interactive **load rig** in the hero. An authored SVG portal
  frame carries four service nodes; the pointer moves the live load, the beam
  deflects, and a readout stays within tolerance. It is labelled as an
  illustrative model.
- **Composition**: 12-column drawing grid, hairline rules, asymmetric spans,
  large quiet passages, one committed teal plate. No cards as page structure.
- **Memorable moment**: the load rig + the work index where each row becomes a
  full-bleed colour field and a cursor-following system preview.

## 3. Information architecture

```
/                 Home
/work             All selected systems
/work/counter     Case study: offline-first retail POS
/work/atlas       Case study: B2B commerce platform
/work/relay       Case study: field operations mobile app
/studio           Company, principles, how we work
/contact          Contact + project brief
/404              Not found
```

Home composition:

1. Hero: "Software that holds." + load rig + studio meta strip.
2. Discipline marquee / conveyor.
3. Selected work index (3 rows + previews).
4. Capabilities (4 asymmetric blocks, each with an authored diagram).
5. Process (4 stages, dark band, drawing line).
6. Studio statement + four principles.
7. Contact (dark band, real mailto brief).
8. Footer with giant identity and local time.

## 4. Design system

Tokens live in `app/globals.css` as CSS custom properties with a `.dark`
override. Tailwind v4 maps them through `@theme inline`.

- Spacing rhythm: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Section padding: `clamp(5rem, 10vw, 9rem)`.
- Display: `clamp(3.6rem, 10vw, 9rem)`, line-height 0.86, tracking -0.035em.
- H2: `clamp(2.6rem, 6vw, 5rem)`.
- Body: 17–18px, measure 62–72ch.
- Borders: 1px `--line`; no shadows except the one plate elevation.
- Radii: 2px for controls, 0 for panels, 8–14px only where the object (tile,
  phone, key) demands it.
- Focus: 2px signal outline + 2px offset, never removed.
- Selection: teal ground, paper text.
- Scrollbar: thin ink/teal.
- Light and dark are both fully designed; light is the default because the
  audience reads this in office daylight.

## 5. Motion

One authored system, not scattered effects:

- Hero: clip-path line reveals on load, 700–1000ms exponential ease-out; SVG
  frame draws once; live load reacts to pointer (rAF-throttled).
- Scroll reveals: CSS scroll-driven animations (`animation-timeline: view()`)
  with a visible-by-default fallback. No JS reveal library.
- Work rows: colour inversion on hover/focus, cursor-following preview with
  rAF and `transform` only.
- Marquee: one continuous conveyor, pauses on hover/focus; duplicate track is
  `aria-hidden`.
- Process: section-scoped drawing line fills with scroll.
- Page transitions: `app/template.tsx` fade/rise, 320ms.
- Reduced motion: all transforms, marquees, draw animations, and pointer
  reactions stop; content stays visible and interactive.

## 6. Content rules

- Direct, specific, first-person plural. No "unlock", "empower", "revolutionize",
  "next-generation", "seamless", "cutting-edge", "AI-powered".
- No invented client logos, testimonials, awards, or audited metrics.
- Case studies are labelled **representative engagements**; client names are
  withheld; numbers describe the brief or a target, never a result.
- No fake dashboards or terminal output. Any diagram is labelled illustrative
  or is clearly a schematic.
- Every interactive element names its action. The contact form opens a populated
  email draft and says so; no fake "message sent" state.

## 7. Build order

1. Tokens, fonts, base CSS, brand primitives, icons.
2. Header (native `<dialog>` mobile menu), footer, page template.
3. Hero + load rig.
4. Work data, SVG previews, work index, work pages.
5. Capability blocks + SVG diagrams.
6. Process, studio, contact.
7. Metadata, sitemap, robots, 404, OG image.
8. Build, lint, keyboard/contrast/responsive checks.
9. Desktop + mobile screenshots; critique; fix.
10. Update DESIGN.md, CHANGELOG.md, PROJECT_STATE.md, ADR; commit.

## 8. Verification

- `npm run build` and `npm run lint` clean.
- No horizontal overflow at 320, 390, 768, 1024, 1280, 1440, 1920.
- Every interactive element reachable by keyboard; dialog focus trapped by the
  native `<dialog>`; Escape closes it.
- Contrast: body ≥ 4.5:1; large text ≥ 3:1; placeholders ≥ 4.5:1.
- Full-page screenshots with motion disabled, inspected at desktop and mobile.
- Reduced-motion render inspected.
- No unused shadcn/ui files, no Lucide dependency after the rebuild.

## 9. Risks / open truths

- Case study details are synthetic. They are labelled and must be replaced with
  real engagement facts before publishing.
- No team photography or client logos exist in the repo; the design avoids
  portrait-shaped holes rather than filling them with stock.
- The exact wordmark is a raster asset; it is used as supplied, not redrawn.

## 10. Outcome

Implemented on `redesign-load-bearing`:

- 14 static routes, including three case studies, studio, contact and 404.
- Authored load rig, four capability schematics, three case previews, icon set
  and 1200×630 social card.
- Native dialog mobile menu, portal hover preview, CSS scroll-driven reveals,
  registered process progress, theme-aware inverted bands and a full
  reduced-motion path.
- Dependencies reduced to Next, React and `next-themes`; old shadcn/ui files and
  template assets removed.
- Clean `npm run build`, `npm run lint` and `tsc --noEmit`.
- Zero horizontal overflow at 320–1920 across all primary routes.
- Independent accessibility, visual craft and content reviews; material findings
  addressed (disclosure wording, production claim, tradeoffs, constraints
  caption, case contact CTA, contact action clarity, mobile note layout,
  cross-theme contrast, hover-preview containing block).
- Decisions recorded in ADR 0004; design system, product proof rules, changelog,
  project state and README updated.

The remaining content task is the real case-study pass (M10 in
`PROJECT_STATE.md`).

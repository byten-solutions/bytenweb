# Design System: Byten — Load-Bearing

This document describes the visual world shipped on `redesign-load-bearing`.
It replaces the earlier obsidian/shadcn system (ADR 0002 and 0003, superseded
by ADR 0004).

---

## 1. Direction

**Load-Bearing** is a structural-engineering editorial world. The idea is
simple: software is structure, and structure has to carry weight. The site is
composed like a carefully art-directed engineering document, not a product
brochure: measured type, hairline rules, dimension lines, authored schematics,
a controlled teal plate family, and a live load model.

The world is not a blueprint cliché and not a dark SaaS theme. It is concrete,
ink, teal, and vermilion. It is allowed to be loud in type and quiet in
whitespace.

**Mode:** Persuade / Experience. The visitor should understand the studio,
believe the engineering claim, inspect the work, and start a project.

---

## 2. Colour

Light is the default because the audience reads the site in office daylight.
Dark mode is a fully designed inversion, not a filter.

| Token | Light | Dark | Use |
| :--- | :--- | :--- | :--- |
| `--background` | `#e7e9e4` | `#0a0f0c` | Mill-finish concrete ground |
| `--surface` | `#f4f5f1` | `#111713` | Paper panels, schematic grounds |
| `--surface-2` | `#dde1db` | `#18201b` | Secondary paper / inset |
| `--foreground` | `#101512` | `#ecefe8` | Ink / primary text |
| `--muted-foreground` | `#4c544e` | `#a7b1a9` | Body copy |
| `--subtle` | `#5c655f` | `#8b968e` | Captions, notes (AA on both) |
| `--line` | `#c3c8c1` | `#2a342d` | Hairline rules |
| `--line-strong` | `#9aa29b` | `#3d493f` | Drawing outlines |
| `--primary` | `#006e7e` | `#4cc9d9` | Structure, links, emphasis |
| `--primary-bright` | `#0097b2` | `#6ad8e4` | Logo-adjacent fills |
| `--signal` | `#bf3010` | `#ff6b45` | Live load, selected controls |
| `--signal-bright` | `#e8451f` | `#ff815f` | Large accents, arrow fills |
| `--plate` | `#007487` | `#075e6d` | The hero service frame / Counter plate |
| `--plate-deep` | `#005f6d` | `#064b57` | Atlas case plate / deeper teal |
| `--plate-foreground` | `#ffffff` | `#ecefe8` | Type on the plate |
| `--plate-muted` | `rgba(255,255,255,.88)` | `rgba(236,239,232,.84)` | Plate annotations |
| `--band-accent` | `#ff8a6b` | `#b52d0d` | Accents on inverted bands |

**Bands.** The conveyor, process, and contact sections use the foreground as
their ground (`ink` in light mode, `paper` in dark mode). They invert with the
theme. This is intentional: the page alternates documents and paper inserts.
Do not "fix" one band without the others.

**Contrast.** Body and captions pass 4.5:1. Large display text passes 3:1.
Placeholders pass 4.5:1. The plate annotations sit at 0.88 white on `#007487`.
Whenever a token changes, recompute the pair rather than trusting the hex.

---

## 3. Typography

| Role | Face | Notes |
| :--- | :--- | :--- |
| Display | **Archivo** variable, width axis `wdth` 106–112 | Uppercase, tracking -0.03 to -0.04em, line-height 0.84–0.92 |
| Reading | **Hanken Grotesk** variable | 16–18px body, measure 42–62ch, line-height 1.5–1.65 |
| Measurement | **Geist Mono** | Specs, stage numbers, dimensions, field labels; never as decoration |

Scale:

- Hero: `clamp(3.65rem, 8.6vw, 8rem)` desktop (and a smaller clamp below
  900px), 0.86 line-height, three intentional lines:
  `SOFTWARE / THAT / HOLDS.`. The cap keeps the longest word clear of the teal
  plate at 1920px and above.
- Section H2: `clamp(2.6rem, 5.6vw, 5.25rem)`, 0.9 line-height.
- H3: `clamp(1.35rem, 2vw, 1.9rem)`.
- Body: 1.0625rem, 1.62 line-height.
- Caption / mono: 0.625–0.75rem, 0.08–0.12em tracking.

No gradients on text. Emphasis comes from scale, weight, or the teal/vermilion
pair. Do not add a kicker or eyebrow above a heading; labels sit beside, below,
or in the margin, never as a small line introducing a heading.

---

## 4. Layout

- 12-column drawing grid, `max-width: 96rem`, gutters
  `clamp(1.25rem, 4.5vw, 4rem)`.
- Section rhythm: `clamp(5rem, 10vw, 9rem)`; page-hero + section-pad is tightened
  so inner pages do not start with a dead band.
- Hairline rules separate sections. Cards are not the default container.
- The capability grid is deliberately asymmetric: 7/5 then 5/7.
- Work rows are six-column index rows on desktop, three-column rows with an
  inline schematic on mobile.
- The hero is a two-zone composition: copy on concrete, a teal service-frame
  plate that bleeds to the right edge. The hero plate is the committed field;
  case-study plates stay in the same teal family (`--plate`, `--plate-deep`,
  teal-ink) so vermilion remains a live-load accent, never a field.
- Breakpoints: 1100, 900, 560. The 900 breakpoint is the layout change: nav
  collapses to the native dialog, hero stacks, work preview becomes inline,
  capability grid becomes one column, process becomes vertical.

---

## 5. Components

### Header
Solid background, sticky, hairline when scrolled. Logo is the supplied raster
lockup at 108px (112px in the mobile dialog); do not scale it to fill the bar.
Scroll progress is a 2px vermilion rule at the bottom edge. Theme toggle and
primary CTA sit right. Mobile: a native `<dialog>` menu with large
indexed links, the CTA, direct contact, and the theme toggle. The dialog fills
the dynamic viewport (with the native `max-height` reset) and scrolls only if
its content exceeds it. Native dialog provides the focus trap and Escape
behaviour.

### Buttons
Square-ish (2px radius), uppercase Archivo, 13px, 0.055em tracking, 48px
minimum height. Roles: `solid` (ink/paper), `line` (outline), `paper`
(light surface on a band), `ghost-paper` (outline that inherits the band's
current text colour). Hover shifts 1px and the arrow moves diagonally. Focus is
a 2px vermilion outline with offset.

### Load rig
A client SVG: portal frame, four service labels (WEB, MOBILE, RETAIL, API), a
live load that follows the pointer or touch, a deflection dimension, and a
readout. The stage is a focusable `role="slider"` with arrow-key control,
`aria-valuetext`, and a visible readout line under the plate; the drawing itself
stays `aria-hidden`. Pointer moves are rAF-throttled. Reduced motion leaves the
static frame and disables the draw animation. The helper copy changes from
“Move pointer or use arrow keys” to “Drag or use arrow keys” below 900px.

### Work index
A list of rows, not cards. Hover/focus inverts the row, turns the index
vermilion, rotates the arrow, and opens a fixed preview card from a portal
(outside the page-transition wrapper, so fixed positioning is not trapped).
Preview is disabled under 900px; the same SVG renders inline in the row. The
preview card is decorative (`aria-hidden`), the row link is the real control.

### Capability schematics
Four authored SVGs, all line geometry: web browser frame, phone + sync, POS +
receipt + stock node, service graph. They are `role="img"` with labels. No
stock icons, emoji, or fake dashboards.

### Case-study art
A larger version of the same schematic system on a teal-family plate. Each case
page uses a sticky spec column, a visible “Brief constraints, not measured
results” caption, structure steps, outcome, tradeoff, stack, and a
send-the-brief link before the next-system strip.

### Contact
Inverted band. Underlined fields, mono labels, segmented scope radio group, and
client-side validation with `aria-invalid`, `aria-describedby`, a visible error
summary in a `role="status"` region, and focus moved to the first invalid field.
Submit opens a populated `mailto:` draft; a copy button copies the same brief.
There is no fake success state, no backend, and no silent failure.

### Footer
A 128px supplied lockup, studio statement, navigation, direct contact, live IST
clock, status, copyright and back-to-top. There is no oversized repeated
wordmark at the bottom; the page ends on the footer rule.

---

## 6. Motion

One system, orchestrated:

- Page entry: 420ms opacity fade (no transform on the wrapper, so fixed and
  sticky descendants are not trapped by a containing block).
- Hero: three-line clip/rise reveal, staggered 80/180/280ms; lede and specs
  follow.
- Load rig: beam draw (1.4s) and pointer/touch/arrow-key deflection.
- Scroll reveals: CSS `animation-timeline: view()` with content visible by
  default; no reveal library.
- Process: registered `--process-progress` custom property animated on the
  scroll view timeline; the line fills horizontally on desktop, vertically on
  mobile.
- Work index: row inversion, arrow rotation, preview card follows the cursor
  (rAF, transform only).
- Marquee: CSS translate, 34s, pauses on hover/focus and through a visible
  Pause/Play button. The button is hidden when reduced motion has already
  stopped the belt.

Reduced motion disables all of the above and leaves the content visible and
interactive. Do not hide content behind an animation that JavaScript may not
run.

---

## 7. Browser surfaces

- Selection: teal ground, paper text.
- Caret: inherits text colour; form focus underline becomes vermilion.
- Focus ring: 2px vermilion, 3px offset.
- Scrollbar: 10px, line-strong thumb with background-coloured inset, teal on
  hover.
- `color-scheme` is set on `:root` and `.dark`.
- Theme colour metadata is provided for light and dark.
- `scroll-padding-top: 6rem` protects anchor targets from the sticky header.

---

## 8. Content rules

- Product truth comes from `docs/PRODUCT.md`; do not invent clients, logos,
  awards, testimonials, audited results, or infrastructure.
- The three case studies are **representative engagements**. Client names are
  withheld and the note says the figures describe the brief or a target, not an
  audited result. Keep that label visible wherever a case is presented.
- No "AI-powered", "seamless", "cutting-edge", "next-generation", "empower",
  "unlock", "revolutionize", or "production-grade" copy.
- No fake dashboards, terminal status, uptime SLAs, transaction benchmarks, or
  client logos. If a number is shown, it is a brief fact or a target and it is
  labelled.
- Controls name their action. Errors name the problem and the recovery. The
  contact form says it opens an email app, because that is what it does.

---

## 9. Assets

- `public/byten-logo.png` / `byten-logo-dark.png`: supplied brand lockups,
  used as supplied. Do not redraw the wordmark.
- `public/byten-mark.png`: supplied mark, used for icons/metadata.
- `public/og.png`: 1200×630 social card rendered from the live hero composition
  (font-accurate, captured from the built page).
- All other illustrations are authored inline SVG in `components/diagrams.tsx`,
  `components/work-preview.tsx`, and `components/load-rig.tsx`. They are
  geometry, not sketch scenes; keep strokes crisp and labels in Geist Mono.

---

## 10. Verification

- `npm run build` and `npm run lint` clean.
- No horizontal overflow at 320, 390, 768, 1024, 1280, 1440, 1920 on `/`,
  `/work`, `/work/[slug]`, `/studio`, `/contact`.
- Keyboard: skip link, nav, work rows, form, native menu dialog, theme toggle.
- Reduced-motion render inspected.
- Desktop, mobile, dark, hover, menu, case, studio, contact and 404 captured in
  `.impeccable/review/` (local evidence, ignored by git).

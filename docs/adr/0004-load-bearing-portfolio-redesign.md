# 4. Load-Bearing Portfolio Rebuild

- **Date**: 2026-11-01
- **Status**: Accepted
- **Supersedes**: ADR 0002 (obsidian homepage), ADR 0003 (shadcn/logo theme)
- **Deciders**: Byten Engineering Team & coding agents

---

## Context

The existing homepage had improved technically but still read like a SaaS
marketing template: metric strips with invented targets, terminal-status cards,
same-size icon cards, "production-grade" eyebrow copy, and a dark obsidian
shadcn theme. It did not present Byten as a portfolio company with work,
judgement, a point of view, or a credible engineering voice. The design system
also depended on shadcn primitives and generic component patterns that were
being used as page structure rather than as tools.

The brief was to rebuild from scratch, keep the company facts and contact
details, remove the AI content, and make a modern portfolio site with authored
SVG, motion, and a distinctive design — on a branch, without a SaaS frame.

## Decision

1. **Adopt the Load-Bearing direction.** A structural-engineering editorial
   world: concrete ground, ink, teal structure, vermilion live load, measured
   type, hairline rules, dimension lines, and a controlled teal plate family
   (`--plate`, `--plate-deep`, teal-ink) with vermilion reserved for live load
   and selected controls. This is a replacement visual world, not a polish of
   the old dark SaaS look.
2. **Rebuild the information architecture as a portfolio.** Home, a work
   index, three case-study routes, studio, contact and 404. Work is the
   argument; capabilities and process support it.
3. **Author the media.** The hero load rig, four capability schematics, three
   case previews, icon set and social card are authored geometry, not stock
   icons, fake dashboards, or generated scenes.
4. **Use the platform before dependencies.** Native `<dialog>` for the mobile
   menu, CSS scroll-driven animations, CSS custom properties, `mailto:` for the
   enquiry, `next/font`, `next/image`, and plain React. Remove shadcn/Radix,
   Lucide, CVA, clsx, tailwind-merge and tw-animate-css. The runtime
   dependencies are now Next, React and `next-themes`.
5. **Design both themes.** Light is the default; dark mode is a fully designed
   inversion. The conveyor, process and contact bands invert to paper in dark
   mode. The theme is not a filter or a class swap over an unfinished palette.
6. **Make honesty part of the system.** No invented client names, logos,
   testimonials, awards, SLAs or audited results. The three cases are labelled
   representative engagements with synthetic briefs, a single canonical
   disclosure, a visible "brief constraints, not measured results" caption, a
   named tradeoff, and an email action that does what it says.
7. **Verify by rendering.** Build, lint, typecheck, a multi-width overflow scan,
   full-page desktop/mobile/dark captures, interaction states, and independent
   accessibility/craft/content reviews. The review closed real defects before
   shipping: SVG paths painted as black wedges, a 256px logo that pushed the
   mobile menu off-screen at 320px, a desktop hamburger, a low-contrast process
   lead, invisible form focus rings, and a pointer-only load rig. The local
   Impeccable engine was unavailable, so the craft-floor checks and manual
   contrast calculations were used instead.

## Consequences

**Positive**

- The site now reads as a portfolio company with a specific engineering point of
  view, not a generic product landing page.
- The authored SVG system gives the brand a recognisable visual language that
  does not depend on stock assets or third-party UI kits.
- The runtime dependency surface is small; the site is static, fast and
  deployable without a backend.
- Honest disclosure and tradeoffs make the work more credible, not less.
- The design system, content rules and architecture are documented for the next
  agent or designer.

**Trade-offs**

- Synthetic case studies are not proof. They must be replaced with approved
  client material (or kept clearly labelled) before the site is used as a sales
  asset.
- `mailto:` depends on the visitor's email client. It is honest but less
  measurable than a form endpoint.
- The authored SVG set is bespoke; future changes need the same drawing
  discipline rather than a quick icon swap.
- The local Impeccable detector was not run; re-run it once the engine is
  installed.

**Next steps**

- Replace representative briefs with real, approved engagements.
- Add a lead endpoint and privacy copy if the form is moved off `mailto:`.
- Re-run `graphify update .` and the Impeccable detector when available.
- Add real team/company facts only when verified.

# Byten — Software that holds.

The portfolio company website for **Byten**, a digital engineering company
building web platforms, mobile apps, retail/POS systems, and enterprise
software.

The site is a static Next.js App Router build with authored SVG diagrams,
scroll-driven motion, a native mobile menu, and a light/dark system. It is not a
SaaS product and does not have a backend.

## Stack

- Next.js 16.2.1 (App Router, Turbopack)
- React 19.2.4
- Tailwind CSS v4
- TypeScript 5
- `next-themes`

Runtime dependencies are intentionally limited to Next, React and
`next-themes`. There is no UI kit, icon package, animation library, database or
API route.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build
npm run start
npm run lint
npx tsc --noEmit --incremental false
```

## Routes

| Route | What it is |
| :--- | :--- |
| `/` | Hero + interactive load rig, selected work, capabilities, process, studio, contact |
| `/work` | Representative engagement index with hover/focus previews |
| `/work/counter` | Offline-first retail POS case study |
| `/work/atlas` | B2B commerce case study |
| `/work/relay` | Field operations mobile case study |
| `/studio` | Company record, principles, boundaries |
| `/contact` | Project brief |
| `/sitemap.xml`, `/robots.txt` | Static metadata routes |

## Design

The direction is **Load-Bearing**: structural-engineering editorial, concrete
ground, ink, teal structure, vermilion live load. Archivo variable display,
Hanken Grotesk reading, Geist Mono measurements. The full system, tokens,
motion rules and anti-patterns are in [docs/DESIGN.md](docs/DESIGN.md). The
rebuild decision is [ADR 0004](docs/adr/0004-load-bearing-portfolio-redesign.md).

The supplied logo lockups in `public/` are used as supplied. Everything else —
the load rig, capability schematics, case previews, icon set and social card —
is authored for this site.

## Content and honesty

The three case studies are **representative engagements**. They use synthetic
briefs and are labelled with the canonical disclosure in
`lib/work.ts` (`REPRESENTATIVE_NOTE`). Figures describe the brief or a target,
not an audited result. Each case names a tradeoff.

Before using the site as a live sales asset, replace the synthetic briefs with
approved client material. Do not add client logos, testimonials, awards,
uptime claims, or measured results without the evidence to support them. See
[docs/PRODUCT.md](docs/PRODUCT.md).

The contact form opens a populated email draft (`mailto:`) and offers a
copy-brief fallback. It does not silently submit to a server.

## Docs

- [Product truth](docs/PRODUCT.md)
- [Design system](docs/DESIGN.md)
- [Architecture decisions](docs/adr/README.md)
- [Redesign plan](docs/plans/load-bearing-redesign.md)
- [Project state](PROJECT_STATE.md)
- [Changelog](CHANGELOG.md)

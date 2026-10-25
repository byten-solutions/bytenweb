# Design System: Byten

This design system governs the visual language, typography, color tokens, and interface behavior across Byten web properties.

---

## 1. Design Philosophy
- **Substance Over Slop**: Never rely on generic AI clichés (such as arbitrary purple-to-indigo gradient cards, blurred radial blobs without purpose, or uniform 12px rounded corners everywhere).
- **Typographic Hierarchy**: Distinct, readable contrast between display headings, section markers, and functional body copy.
- **Intentional Spacing**: Generous, rhythmic whitespace adhering to an 8pt grid system.
- **Purposeful Motion**: Micro-interactions should confirm user actions and guide attention, never distract or delay content consumption.

---

## 2. Color Palette & Tokens

### Core Neutral Palette
- **Canvas / Background**: `#090D16` (Deep technical obsidian)
- **Surface Elevation 1**: `#111726` (Subtle panel background)
- **Surface Elevation 2**: `#1B2338` (Active cards / interactive elements)
- **Border Subtle**: `rgba(255, 255, 255, 0.08)`
- **Border Focus / Accent**: `rgba(37, 99, 235, 0.5)`

### Typography Colors
- **Text Primary**: `#F8FAFC` (High contrast, crisp reading)
- **Text Secondary**: `#94A3B8` (Descriptions, labels, microcopy)
- **Text Muted**: `#64748B` (Placeholders, inactive timestamps)

### Accent & Brand Accents
- **Primary Brand**: `#2563EB` (Electric Blue - action, clarity)
- **Accent Glow**: `#38BDF8` (Cyan - data visualization, selective highlights)
- **Success**: `#10B981` (Emerald)
- **Warning**: `#F59E0B` (Amber)
- **Destructive**: `#EF4444` (Ruby)

---

## 3. Typography Scale
- **Display 1**: `font-size: 3.5rem` (56px), `line-height: 1.1`, `font-weight: 700`
- **Heading 1**: `font-size: 2.25rem` (36px), `line-height: 1.25`, `font-weight: 600`
- **Heading 2**: `font-size: 1.5rem` (24px), `line-height: 1.35`, `font-weight: 600`
- **Heading 3**: `font-size: 1.125rem` (18px), `line-height: 1.4`, `font-weight: 600`
- **Body Large**: `font-size: 1.125rem` (18px), `line-height: 1.6`, `font-weight: 400`
- **Body Regular**: `font-size: 1rem` (16px), `line-height: 1.5`, `font-weight: 400`
- **Caption / Label**: `font-size: 0.8125rem` (13px), `letter-spacing: 0.05em`, `font-weight: 500`, uppercase

---

## 4. Component Standards

### Buttons
- **Primary**: Bold contrast, solid `#2563EB` background with `#FFFFFF` text, subtle shadow, 6px border radius.
- **Secondary / Outline**: 1px border with `Border Subtle`, hover transition into `rgba(255, 255, 255, 0.04)`.
- **Text / Ghost**: Subtle transition with no background; clear focus rings for accessibility.

### Cards & Panels
- Must have explicit semantic structure (Header, Body, Actions).
- Avoid nested cards deeper than 1 level.
- Border-radius: `8px` or `12px` consistently across components.

---

## 5. Anti-Pattern Checklist (Impeccable & Intent Rules)
- ❌ **No AI Slop Gradients**: Do not wrap whole sections in arbitrary multi-stop rainbow gradients.
- ❌ **No Low-Contrast Text**: Text must pass WCAG AA contrast (minimum 4.5:1 ratio for regular text).
- ❌ **No Mystery Meat Navigation**: All navigation targets and buttons must state clearly what will occur upon click.
- ❌ **No Unused CSS Bloat**: Rely on Tailwind utility classes and native browser CSS features.

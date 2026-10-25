# Design System: Byten

This design system governs the visual language, typography, color tokens, and interface behavior across Byten web properties.

---

## 1. Design Philosophy & Component Framework
- **shadcn/ui Architecture**: Built on clean, accessible Tailwind CSS v4 and Radix UI primitives (`Button`, `Card`, `Badge`, `Input`, `Textarea`, `Separator`).
- **Logo Brand Harmony**: Rooted directly in the official Byten logo palette (`#0097B2` vibrant teal and `#124854` deep teal).
- **Substance Over Slop**: Never rely on generic AI clichés (such as arbitrary purple-to-indigo gradient cards, blurred radial blobs without purpose, or overused fonts).
- **Typographic Hierarchy**: Distinct, geometric contrast using `DM Sans` (`next/font/google`).

---

## 2. Color Palette & shadcn Theme Tokens

### Official Brand Logo Colors
- **Primary Brand (Vibrant Teal)**: `#0097B2` (`rgb(0, 151, 178)` / `hsl(189, 100%, 35%)`)
- **Secondary Brand (Deep Teal)**: `#124854` (`rgb(18, 72, 84)` / `hsl(191, 65%, 20%)`)

### shadcn CSS Theme Mapping (`app/globals.css`)
- **`--background`**: `#080E14` (Deep obsidian with subtle marine/teal depth)
- **`--foreground`**: `#F8FAFC` (Crisp technical white, WCAG AAA contrast)
- **`--card`**: `#0D1620` (Structured surface elevation)
- **`--card-foreground`**: `#F8FAFC`
- **`--primary`**: `#0097B2` (Action buttons, primary highlights)
- **`--primary-foreground`**: `#FFFFFF`
- **`--secondary`**: `#124854` (Deep teal badges and secondary actions)
- **`--secondary-foreground`**: `#E2F5F8`
- **`--muted`**: `#131E2B`
- **`--muted-foreground`**: `#94A3B8` (Descriptions, labels, microcopy)
- **`--border`**: `rgba(0, 151, 178, 0.2)` (Subtle brand border)
- **`--ring`**: `#0097B2` (Focus states)

---

## 3. Typography Scale (`DM Sans`)
- **Display 1**: `font-size: 3.75rem` (60px), `line-height: 1.1`, `font-weight: 700`
- **Heading 1**: `font-size: 2.25rem` (36px), `line-height: 1.25`, `font-weight: 700`
- **Heading 2**: `font-size: 1.5rem` (24px), `line-height: 1.35`, `font-weight: 600`
- **Heading 3**: `font-size: 1.125rem` (18px), `line-height: 1.4`, `font-weight: 600`
- **Body Large**: `font-size: 1.125rem` (18px), `line-height: 1.6`, `font-weight: 400`
- **Body Regular**: `font-size: 1rem` (16px), `line-height: 1.5`, `font-weight: 400`
- **Caption / Label**: `font-size: 0.8125rem` (13px), `letter-spacing: 0.05em`, `font-weight: 600`, uppercase

---

## 4. Anti-Pattern Checklist (Impeccable & Intent Rules)
- ❌ **No AI Slop Gradients**: Do not wrap headers or text in multi-stop rainbow gradients.
- ❌ **No Low-Contrast Text**: Text must pass WCAG AA contrast (minimum 4.5:1 ratio for regular text).
- ❌ **No Nested Card Spam**: Keep card hierarchy semantic and single-layered.
- ❌ **No Unused CSS Bloat**: Rely on Tailwind v4 utility classes and shadcn primitives.

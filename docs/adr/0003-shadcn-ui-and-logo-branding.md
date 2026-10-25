# 3. shadcn/ui Component Architecture & Logo Brand Theming

- **Date**: 2026-10-25
- **Status**: Accepted
- **Deciders**: Byten Engineering Team & Antigravity Assistant

---

## Context
Following the initial redesign, the user requested:
1. Universal adoption of **shadcn/ui** across the entire project.
2. Complete color theme alignment with the official Byten logo assets (`public/byten-logo.png` and `public/byten-mark.png`).

---

## Decision
1. **Logo Color Extraction & CSS Variables**:
   - Extracted primary colors: Vibrant Teal `#0097B2` (`rgb(0, 151, 178)`) and Deep Teal `#124854` (`rgb(18, 72, 84)`).
   - Configured shadcn theme tokens in `app/globals.css` using Tailwind CSS v4 `@theme inline`:
     - `--primary`: `#0097B2`
     - `--secondary`: `#124854`
     - `--background`: `#080E14` (Deep obsidian marine)
     - `--card`: `#0D1620`
     - `--border`: `rgba(0, 151, 178, 0.2)`
2. **Component Library (shadcn/ui)**:
   - Configured `components.json` and `lib/utils.ts` (`cn()` helper).
   - Installed core component primitives:
     - `Button` (`@/components/ui/button`)
     - `Card` (`@/components/ui/card`)
     - `Badge` (`@/components/ui/badge`)
     - `Input` (`@/components/ui/input`)
     - `Textarea` (`@/components/ui/textarea`)
     - `Separator` (`@/components/ui/separator`)
     - Integrated `lucide-react` for accessible icons.
3. **Website Refactor (`app/page.tsx`)**:
   - Replaced custom cards and buttons with shadcn components.
   - Embedded official Byten logo mark in navigation header and footer.

---

## Consequences
- **Positive**:
  - Consistent, accessible, and extensible design system adhering strictly to Byten's authentic brand colors.
  - Zero third-party runtime component lock-in (code resides directly in `@/components/ui`).
  - Passes Impeccable anti-pattern detector with 0 errors.

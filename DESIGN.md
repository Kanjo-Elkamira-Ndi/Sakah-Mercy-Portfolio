---
name: Sakah Vernyuy Mercy Portfolio
description: Product designer and UX researcher portfolio
colors:
  signal-red: "#e50914"
  pitch-black: "#0a0a0a"
  raisin: "#141414"
  silver-white: "#f5f5f5"
  steel: "#a3a3a3"
  charcoal-line: "#2a2a2a"
  figma-orange: "#F24E1E"
  whimsical-purple: "#A855F7"
  figjam-purple: "#9747FF"
  canva-teal: "#00C4CC"
  miro-yellow: "#FFD02B"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(0.875rem, 1vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.15em"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  section-y: "clamp(4rem, 8vw, 7rem)"
  grid-gap: "1.5rem"
  card-padding: "1.5rem"
  content-max: "1140px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.silver-white}"
    rounded: "{rounded.md}"
    padding: "0.75rem 2rem"
    fontFamily: "DM Mono, monospace"
    fontWeight: 500
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.signal-red}"
    rounded: "{rounded.md}"
    borderColor: "{colors.signal-red}"
    borderWidth: "1px"
    padding: "0.75rem 2rem"
    fontFamily: "DM Mono, monospace"
    fontWeight: 500
  card-surface:
    backgroundColor: "{colors.raisin}"
    textColor: "{colors.silver-white}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.charcoal-line}"
    borderWidth: "1px"
    padding: "{spacing.card-padding}"
  input-field:
    backgroundColor: "{colors.raisin}"
    textColor: "{colors.silver-white}"
    rounded: "{rounded.md}"
    borderColor: "{colors.charcoal-line}"
    borderWidth: "1px"
    padding: "0.75rem 1rem"
  nav-link:
    fontFamily: "DM Mono, monospace"
    fontWeight: 400
    textColor: "{colors.steel}"
    textTransform: "uppercase"
    letterSpacing: "0.1em"
---

# Design System: The Dark Gallery

## 1. Overview

**Creative North Star: "The Dark Gallery"**

A controlled, gallery-like space where the work takes focus. Warm off-black walls, precise lighting on each piece, generous sightlines. The visitor moves deliberately from piece to piece.

The system rejects the student-portfolio reflex — no gradient text, no glassmorphism, no decorative blurs, no skill-bar percentages. Every surface has intention. The dark background is not a trend; it's the gallery wall — it disappears so the work speaks. Signal Red appears sparingly, like a gallery label or a directional mark, never as decoration.

The palette is warm-off-black (Pitch Black `#0A0A0A`) with subtly lighter Raisin (`#141414`) surfaces. Charcoal Line (`#2A2A2A`) borders define edges without shouting. Steel (`#A3A3A3`) text recedes enough to keep Silver White (`#F5F5F5`) as the reader's true destination.

Motion is restrained: staggered entrances reveal content in sequence, hover states respond within 200ms, and nothing animates without purpose. The gallery does not pulse.

**Key Characteristics:**
- Gallery-quiet backgrounds; typography and content do the work
- One accent (Signal Red), used sparingly for interaction and wayfinding
- Flat surfaces at rest, soft warm-tinted shadows on interaction
- Monospace labels for metadata; Space Grotesk for display authority; Inter for readable body copy
- Generous whitespace between sections, tighter spacing within
- Responsive without breakpoint gymnastics: stack on mobile, two-column grid on md+

## 2. Colors

A restrained palette built around a single accent. The dark neutrals are warm off-blacks (tilted toward the red end of neutral), avoiding the cold blue-grey of many dark themes.

### Primary
- **Signal Red** (`#E50914` / `oklch(53% 0.23 30)`): The only accent. Used for CTAs, focus rings, selected states, category labels, hover indicators, and the hero status dot. Never decorative. Its rarity is the point.

### Neutral
- **Pitch Black** (`#0A0A0A` / `oklch(4% 0.005 30)`): Page background, navbar background, mobile overlay, lightbox scrim.
- **Raisin** (`#141414` / `oklch(10% 0.008 30)`): Surface color for cards, input backgrounds, badges, icon containers.
- **Silver White** (`#F5F5F5` / `oklch(94% 0.002 30)`): Primary text. Headings, body copy, button labels.
- **Steel** (`#A3A3A3` / `oklch(64% 0.005 30)`): Muted text. Labels, placeholders, secondary information, footnotes.
- **Charcoal Line** (`#2A2A2A` / `oklch(20% 0.01 30)`): Borders, dividers, input strokes, card outlines.

### Tool Accents (hero orbit only)
- **Figma Orange** (`#F24E1E`), **Whimsical Purple** (`#A855F7`), **FigJam Purple** (`#9747FF`), **Canva Teal** (`#00C4CC`), **Miro Yellow** (`#FFD02B`): Used exclusively in the hero orbiting tool ring. Do not extend into UI components.

### The Signal Red Rule
Signal Red covers ≤2% of any given screen. It labels, it indicates action, it marks the current state. If a section uses red on more than one element type (e.g. a red label AND a red icon AND a red border), the design is shouting. Pick one application per section.

## 3. Typography

**Display Font:** Space Grotesk (with Inter fallback)
**Body Font:** Inter (with system sans fallback)
**Label/Mono Font:** DM Mono (with monospace fallback)

**Character:** A display face with geometric authority (Space Grotesk) paired with a neutral, highly readable body (Inter). The contrast is on the axis of personality: the display has character without shouting; the body is invisible in the best sense. DM Mono provides technical precision for metadata, labels, and navigation — its upright, no-nonsense glyphs signal "this is structural information."

### Hierarchy
- **Display** (700, `clamp(2.5rem, 5vw, 3.75rem)`, 1.05, `-0.03em`): Hero headline only. Maximum 8 words. `text-wrap: balance`.
- **Headline** (800, `clamp(1.875rem, 3vw, 2.5rem)`, 1.1, `-0.02em`): Section titles. `text-wrap: balance`.
- **Title** (700, `clamp(1.125rem, 1.5vw, 1.25rem)`, 1.3): Card titles, process step names, project names.
- **Body** (400, `clamp(0.875rem, 1vw, 1rem)`, 1.65): All prose. Cap line length at 65-75ch. `text-wrap: pretty`.
- **Label** (400, `0.75rem`, 1.4, `0.15em`, uppercase): Metadata, section labels, nav links, input labels, metric descriptions. Short strings only (≤5 words).
- **Mono Body** (400, `0.75rem`, 1.4): Stats, percentages, copyright text.

### The Balance Rule
Every heading uses `text-wrap: balance`. Every body paragraph longer than 3 lines uses `text-wrap: pretty` to eliminate orphans. Never leave a heading with a single word wrapped onto its last line.

## 4. Elevation

The system uses soft ambient shadows over tonal layering. Surfaces sit on a dark-to-darker gradient (Pitch Black bg → Raisin surface → Charcoal Line edge), and interaction triggers a warm-tinted shadow lift. The effect is not a "floating card" look but a subtle assertion of depth — like stepping a framed piece forward from the gallery wall.

### Shadow Vocabulary
- **Surface Rest** (`box-shadow: 0 1px 3px rgba(0,0,0,0.3)`): Default state for cards, input fields, and containers. Barely perceptible; separates surface from background without floating.
- **Surface Hover** (`box-shadow: 0 4px 12px rgba(229,9,20,0.12), 0 2px 4px rgba(0,0,0,0.3)`): Interactive surfaces on hover/focus. The warm tint from Signal Red ties the shadow to the brand. Combined with the `1px solid #E50914` border glow for interactive elements.
- **Modal Overlay** (`box-shadow: 0 20px 60px rgba(0,0,0,0.5)`): Dialogs, drawers, lightbox backgrounds. Deep, wide shadow that floats the modal well above the surface.

### The Shallow Depth Rule
No surface should appear to float more than 8px from the background at rest. Hover states can lift to ~16px. If a shadow's blur exceeds 24px, the element reads as disconnected, not elevated.

## 5. Components

### Buttons

Two button systems serve different voice registers:

**Action Buttons (hero, CTAs, primary calls-to-action)**
- **Shape:** Pill-shaped (`rounded-md`), monospace labels (`DM Mono 14px/16px font-medium`), uppercase tracking.
- **Primary (`filled`):** Signal Red background, Silver White text. Hover inverts: transparent background, Signal Red text, Signal Red border.
- **Secondary (`outlined`):** Transparent background, Signal Red text, Signal Red border at rest. Hover inverts to filled.
- **Size:** `md` (44px height, 24px padding x), `lg` (52px height, 32px padding x).
- **Transition:** 200ms ease-out on background, color, border. `translate-y-px` on active press.

**UI Buttons (shadcn/ui internal actions, form submits, secondary UI)**
- **Shape:** Rounded (`rounded-lg`), Inter `14px font-medium`.
- **Default:** Raisin background, Silver White text.
- **Outline:** Charcoal Line border, transparent background.
- **Ghost:** No border or background, Signal Red text on hover.
- **Transition:** 200ms on all properties. Active press: `translate-y-px`.

### Cards / Containers

- **Corner Style:** Rounded (`rounded-lg`, 8px radius).
- **Background:** Raisin (`#141414`).
- **Border:** Charcoal Line (`#2A2A2A`), 1px solid.
- **Shadow at Rest:** Surface Rest (`0 1px 3px rgba(0,0,0,0.3)`).
- **Shadow on Hover (interactive cards only):** Surface Hover + 1px Signal Red border glow (`box-shadow: 0_0_0_1px_#E50914`).
- **Internal Padding:** `p-6` (24px).
- **Content Gap:** `gap-3` (12px).

### Inputs / Fields

- **Style:** 1px Charcoal Line stroke on Raisin background.
- **Radius:** `rounded-md` (6px).
- **Padding:** `px-4 py-3` (16px horizontal, 12px vertical).
- **Text:** Silver White, `text-sm` (14px).
- **Placeholder:** Steel (`#A3A3A3`).
- **Focus:** Transition to Signal Red border + 1px Signal Red ring.
- **Label:** DM Mono, 12px uppercase, Steel color.
- **Error:** Signal Red border, Signal Red accessible error text below input.
- **Disabled:** 50% opacity, no interactive states.

### Navigation

- **Style:** Fixed top bar, `h-16` (64px), `backdrop-blur-md`.
- **Background:** Pitch Black at 80% opacity when scrolled, 40% at top. Bottom border appears on scroll.
- **Logo:** DM Mono `18px font-medium`, Signal Red.
- **Links:** DM Mono `14px`, uppercase, `0.1em` tracking. Steel default, Silver White on hover. Active page gets a Signal Red underline indicator.
- **Mobile:** Full-screen Pitch Black drawer. Links set in Space Grotesk `36px font-bold`. Staggered entrance on open.

### Badges (status, floating labels, tags)

- **Shape:** Full pill (`rounded-full`).
- **Background:** Raisin.
- **Border:** Charcoal Line, 1px.
- **Text:** Steel, DM Mono, `12px` uppercase.
- **Padding:** `px-4 py-1.5`.

### Orbit Tool Icons (hero exclusive)

- **Container:** `w-12 h-12` (48px), `rounded-full`, Raisin background, Charcoal Line border, Surface Rest shadow.
- **Icon:** 28px, brand color per tool.
- **Only location on the page where color appears on dark surfaces outside Signal Red.**

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Red as a single focused accent. One application per section.
- **Do** let Pitch Black backgrounds disappear so content leads.
- **Do** use generous section whitespace (`py-20` to `py-28`) to give each piece breathing room.
- **Do** use monospace labels for metadata, structural information, and navigation. This is a design system signal, not a « technical » costume.
- **Do** stagger entrances (30-80ms delays) for lists and grids. Keep reveal animations under 500ms.
- **Do** use `text-wrap: balance` on headings and `text-wrap: pretty` on prose.
- **Do** honor `prefers-reduced-motion`: collapse transform-based motion, keep opacity fades at ≤200ms.

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradients). Single solid colors only.
- **Don't** use side-stripe borders (`border-left: 3px solid red` as decorative accent).
- **Don't** use glassmorphism (backdrop-blur as card surface).
- **Don't** use skill bars, percentages, or rating systems. Expertise is shown, not self-scored.
- **Don't** repeat the same layout family more than once on the page. Each section should have a distinct composition.
- **Don't** put tiny uppercase tracked eyebrows above every section heading. Maximum 1 eyebrow per 3 sections.
- **Don't** use numbered section markers (`01 / 02 / 03`) as default scaffolding.
- **Don't** use em dashes in copy. Use commas, colons, periods, or parentheses.
- **Don't** use marketing buzzwords (transform, empower, seamless, leverage, world-class).
- **Don't** use hard-coded `h-screen` for hero sections — use `min-h-[100dvh]` for mobile Safari compatibility.
- **Don't** let hero headlines exceed 2 lines on desktop or 3 on mobile. If they overflow, reduce font scale, not viewport assumption.

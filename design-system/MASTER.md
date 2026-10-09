# Design System — Akhil Bhardwaz Portfolio

Generated with ui-ux-pro-max (`"personal portfolio data analyst business intelligence minimal professional" --design-system --variance 3 --motion 3 --density 4`), then adapted. Tokens live in `src/index.css` (`@theme` + `.dark`).

## Style
Minimalism & Swiss Style: clean, spacious, grid-based, high contrast, sans-serif, one accent. No ornament, no gradients-for-decoration.

## Colour tokens
| Token | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F8FAFC` | `#0B1120` | page |
| `surface` | `#FFFFFF` | `#111827` | cards, nav |
| `fg` | `#0F172A` | `#E2E8F0` | body text |
| `muted` | `#475569` | `#94A3B8` | secondary text (≥4.5:1 both modes) |
| `line` | `#E2E8F0` | `#1F2937` | borders, dividers |
| `primary` | `#1E40AF` | `#60A5FA` | links, CTA, focus ring, timeline |
| `amber-fg / amber-bg` | `#92400E / #FEF3C7` | `#FBBF24 / #FBBF241A` | "In progress" badge |

The skill's suggested accent `#D97706` is 3.2:1 on white (fails AA for text), so it was darkened. Status badges always carry text, never colour alone.

## Typography
- Fira Sans (400/500/600/700): body and headings.
- Fira Code (400/500): small data accents only (section eyebrows, dates, tech tags). Mono headings were judged too technical for a business audience.
- Body 16px / 1.65. Heading wrap: `text-wrap: balance`.

## Layout
- Container `max-w-5xl`, gutters `px-5 sm:px-8`.
- Section spacing `py-20 sm:py-28`; 4/8px rhythm.
- Breakpoints 375 / 640 / 768 / 1024 / 1440.
- Sticky nav 64px; sections use `scroll-margin-top: 5rem`.

## Motion
- Library: `motion/react` via `LazyMotion` + `domAnimation` + `m`.
- Enter: opacity 0→1, y 16→0, 0.5s, ease `[0.22, 1, 0.36, 1]`; stagger 0.08s.
- Scroll reveal: once, viewport margin −80px.
- Hover: 200ms colour/shadow, cards lift −2px.
- `MotionConfig reducedMotion="user"`; scroll-linked timeline line is static when reduced motion is on; CSS smooth scroll is off under reduced motion.

## Accessibility checklist
- Skip link, visible `:focus-visible` ring (2px primary, offset 2px).
- Icon-only links have `aria-label`; decorative icons `aria-hidden`.
- Active nav link uses `aria-current`.
- Image has width/height + alt; hero image eager with high fetch priority.
- Touch targets ≥ 40px; no horizontal scroll at 375px.

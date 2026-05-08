# Design Brief — IT Fresher Hub Expansion

## Direction
Modern, structured tech-forward minimalism with approachable warmth. Major navigation expansion (7 sections) with gaming progression, course categorization, and content protection. Maintains teal/amber/slate foundation while introducing section-specific and skill-category accents.

## Tone
Confident learning environment for freshers. Teal drives learning energy; amber supports progress and encouragement; slate grounds corporate professionalism. Gamification accents (gold, colored skill categories) add engagement without compromising clarity. Confidential stamp conveys data protection and exclusivity.

## Color Palette — Core

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|------------|-----------|---------|
| Primary | 0.65 0.19 215 | 0.72 0.18 215 | Teal — learning, CTAs, active states |
| Secondary | 0.78 0.15 85 | 0.68 0.13 85 | Warm amber — progress, support, encouragement |
| Accent | 0.28 0.08 260 | 0.85 0.08 260 | Deep slate — corporate professionalism |
| Background | 0.98 0.01 260 | 0.12 0.02 260 | Breathing room |
| Card | 1.0 0.01 260 | 0.16 0.02 260 | Elevated content surfaces |
| Destructive | 0.58 0.22 25 | 0.68 0.22 25 | Errors, warnings, confidential stamps |

## Color Palette — Section Accents

| Section | Light OKLCH | Dark OKLCH | Navigation Icon Color |
|---------|------------|-----------|----------------------|
| Corporate World | 0.72 0.16 80 | 0.75 0.15 80 | Warm gold — distinct from teal courses |
| MNC Platforms | 0.62 0.18 275 | 0.68 0.16 275 | Enterprise indigo |
| ETL Tools | 0.58 0.18 305 | 0.65 0.17 305 | Technical purple |
| Capstone Project | 0.62 0.16 145 | 0.68 0.15 145 | Achievement green |

## Color Palette — Skill Categories

| Skill | Light OKLCH | Dark OKLCH | Purpose |
|-------|------------|-----------|---------|
| Python | 0.55 0.15 260 | 0.62 0.14 260 | Blue — foundational language |
| SQL | 0.68 0.17 35 | 0.72 0.16 35 | Orange — data focus |
| DevOps | 0.58 0.18 305 | 0.65 0.17 305 | Purple — infrastructure |
| Cloud | 0.68 0.14 200 | 0.72 0.13 200 | Sky blue — platform services |
| GitHub | 0.28 0.08 260 | 0.88 0.08 260 | Slate — version control |
| Networking | 0.65 0.17 165 | 0.72 0.16 165 | Teal-green — connectivity |
| DSA | 0.62 0.16 145 | 0.68 0.15 145 | Emerald — algorithms |
| AI/ML | 0.58 0.18 25 | 0.72 0.21 25 | Red-orange — innovation |

## Typography
- **Display**: General Sans (modern, geometric, tech-forward)
- **Body**: Figtree (warm geometric sans, excellent readability)
- **Mono**: Geist Mono (professional code aesthetics)
- **Scale**: 12/14/16/18/20/24/28/32 px

## Structural Zones

| Zone | Treatment | Purpose |
|------|-----------|---------|
| Header | `bg-card` border-b, teal accent | Navigation, auth |
| Sidebar Nav | `bg-sidebar`, 7 top-level sections (icons) | Dashboard, Courses, Corporate World, MNC Platforms, ETL Tools, Capstone, Glossary |
| Section Icons | Color-coded per section accent | Visual differentiation at scale |
| Course Cards | `bg-card`, category badge, difficulty, progress bar | Skill course previews |
| Status Badges | Free (amber), Locked (muted), Coming Soon (slate), Subscription (gold) | Content access indicators |
| Protection Notice | Confidential stamp (red border + uppercase label) | Copyright/screenshot protection |
| Subscription CTA | Gold badge "45 Days" | Countdown, value proposition |
| Main Content | Alternating `bg-background` / `bg-muted/20` | Section rhythm |
| Cards | Elevated `bg-card` with `border-border` | Content surfaces |

## Component Patterns
- **Course Cards**: category badge (colored), title, description, difficulty badge, progress bar, free/locked status, coming-soon overlay
- **Progress Bars**: amber fill on muted background, smooth transition
- **Section Headers**: accent color text, section icon, clear hierarchy
- **XP Display**: gold-tinted badge with count, appears inline on lesson completion
- **Level Indicator**: circular badge (10px) with level number, primary teal
- **CTAs**: btn-primary (teal) for enrollment, btn-secondary (amber) for support, never both on same row
- **Content Protection**: Red-bordered box with "CONFIDENTIAL" stamp, screenshot warning notice

## Motion
- Transition default: 0.3s ease-out on all interactive elements
- Card hover: -2px translate-y lift + shadow increase
- Badge entrance: subtle fade in (0.2s)
- Progress fill: animated width transition (0.3s)
- No bouncy animations; motion reinforces action clarity

## Signature Detail
Seven-section gaming progression platform with color-coded navigation (teal for courses, gold for corporate, indigo for platforms, purple for ETL, green for capstone). Two-color teal/amber interplay drives engagement throughout. Confidential stamp and subscription countdown create premium, time-sensitive urgency. Skill category colors enable rapid visual scanning of course library.

## Constraints
- No gradients; depth via elevation and borders only
- No animations > 0.3s duration
- Max 2 font weights (400, 700)
- Accessibility: all text AA+ contrast in both themes
- Badge density: max 3 per card header (category, difficulty, status)
- Skill category colors reserved for course categorization only, not navigation


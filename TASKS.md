# AkisunCreate non-hero polish

## Stable

### Services — 2026-08-19
- Reworked the section from generic centered cards into a vintage editorial three-panel composition.
- Added a small section folio, numbered panels, inked borders, asymmetric middle-panel offset, stamp-like service symbols, and stronger type hierarchy.
- Kept all Japanese copy and destinations unchanged.
- Added 44px minimum link targets and visible keyboard focus treatment.
- Mobile check by CSS review: one-column stack, controlled asymmetry, no intentional viewport overflow, readable 14px body copy, full-width links.
- Tablet/desktop check by CSS review: three-panel grid preserved above 900px; section-local selectors only.
- Hero lock check: no hero stylesheet, hero selector, hero asset, hero markup, hero typography, spacing, placement, or animation changed. `index.html` change is limited to loading `non-hero.css` in `<head>`.

### Selected Works — 2026-08-19
- Reworked the generic equal-card grid into an editorial case index with a dominant lead project and two supporting projects.
- Added case numbering, restrained inner keylines, category labels, stronger title hierarchy, and warm paper/teal/red tint variation using the existing palette.
- Desktop: asymmetric 1.35fr/.9fr composition with the first case spanning two rows; no generic rounded cards or shadows.
- Mobile/tablet: collapses cleanly to a single-column case list with consistent borders, 14px body copy, readable labels, and no intentional horizontal overflow.
- Kept all project copy intact and changed no business claims or destinations.
- Hero lock check: no hero stylesheet, hero selector, asset, markup, layout, typography, spacing, placement, or animation changed. `index.html` only received a non-hero stylesheet cache-key refresh.

## Next priority
1. About — create a stronger editorial composition while keeping the Japanese copy intact.
2. Contact/CTA — increase impact and polish without overpowering the page.
3. Footer/navigation details, then cross-section responsive/accessibility QA.

## Guardrail
The hero is locked. Do not modify `hero-mobile-refine.css`, `hero-fix.css`, `hero-small-desktop.css`, `hero-fluid-tablet.css`, hero assets, or `<section class="hero">...</section>`.

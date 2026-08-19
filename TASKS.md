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

## Next priority
1. Selected Works — improve presentation and scannability without generic SaaS cards.
2. About — create a stronger editorial composition after Works is stable.
3. Contact/CTA, footer/navigation, then cross-section responsive/accessibility QA.

## Guardrail
The hero is locked. Do not modify `hero-mobile-refine.css`, `hero-fix.css`, `hero-small-desktop.css`, `hero-fluid-tablet.css`, hero assets, or `<section class="hero">...</section>`.

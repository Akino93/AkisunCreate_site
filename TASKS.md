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

### About — 2026-08-19
- Reworked the plain stacked About block into an editorial profile spread while keeping all Japanese copy unchanged.
- Desktop/tablet: split statement and body into an asymmetric two-column composition, with a section folio, ink-rule structure, numbered body paragraphs, and restrained teal/gold paper tints from the existing palette.
- Mobile (~390px): collapses to a single readable flow with the headline first, then numbered body paragraphs; 14px body copy, no fixed widths, and no intentional horizontal overflow.
- Kept decorative treatment typographic/CSS-only; no images were generated or modified.
- Self-check: selectors are scoped to `#about`; existing Services/Works rules remain unchanged; the only `index.html` edit is the `non-hero.css` cache key.
- Hero lock check: verified the `index.html` commit changes only the non-hero stylesheet version; no hero stylesheet, selector, asset, markup, typography, spacing, placement, or animation changed.

### Contact / CTA — 2026-08-19
- Reworked the flat orange contact block into a high-impact editorial closing panel using the existing gold/orange/ink palette.
- Added section folio treatment, oversized restrained arrow motif, asymmetric headline/supporting-copy composition, stamped AkisunCreate label, and a full-width mail action framed by ink rules.
- Kept the Japanese headline, English supporting copy, email address, and mailto destination unchanged.
- Mobile (~390px): collapses to a single reading flow, preserves a 66px+ mail target, uses `overflow-wrap:anywhere` for the email address, and avoids fixed-width elements that would force viewport overflow.
- Tablet/desktop: two-column headline/supporting-copy composition with the mail action spanning the full section width.
- Accessibility polish: visible `:focus-visible` treatment and readable foreground/background contrast using the existing ink/paper colors.
- No images were generated or modified; all decoration is CSS-only.
- Hero lock check: no hero stylesheet, hero selector, hero asset, hero markup, hero typography, hero spacing, hero placement, or hero animation changed. `index.html` only received a `non-hero.css` cache-key refresh.

## Next priority
1. Footer/navigation details.
2. Cross-section responsive/accessibility QA.
3. Final section-to-section spacing/typography cleanup.

## Guardrail
The hero is locked. Do not modify `hero-mobile-refine.css`, `hero-fix.css`, `hero-small-desktop.css`, `hero-fluid-tablet.css`, hero assets, or `<section class="hero">...</section>`.

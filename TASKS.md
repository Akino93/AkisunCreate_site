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

### Footer / Navigation — 2026-08-19
- Added a dedicated `nav-footer.css` so navigation/footer polish remains isolated from hero styles and header geometry.
- Navigation: added editorial underline interaction on desktop, 44px+ tap targets, visible focus rings, and a clearer vintage panel treatment for the mobile menu.
- Menu button: kept its existing dimensions/placement while adding an expanded-state ink/orange treatment and a compact MENU label; no header padding or safe-area rules changed.
- Footer: replaced the plain centered line with a dark ink closing strip, gold folio text, restrained circular arrow stamp, and responsive two-row mobile composition.
- Accessibility: keyboard focus remains visible; motion transitions are disabled under `prefers-reduced-motion`.
- Mobile/tablet/desktop check by CSS review: no fixed content widths that should force viewport overflow; mobile navigation links remain 52px high.
- Hero lock check: no hero stylesheet, hero selector, hero asset, hero markup, hero typography, hero spacing, hero placement, or hero animation changed. `index.html` only loads the new non-hero stylesheet.

### Responsive / accessibility QA — mobile navigation — 2026-08-19
- Hardened the existing mobile menu behavior without changing header geometry, safe-area rules, menu styling, or hero code.
- Added dynamic accessible labels (`メニューを開く` / `メニューを閉じる`) synchronized with `aria-expanded`.
- Added Escape-to-close with focus restoration to the menu button for keyboard users.
- Added outside-tap/pointer close behavior on mobile so the sticky menu cannot remain stranded over page content.
- Added breakpoint-state cleanup: when the viewport crosses above 900px, stale mobile `is-open` / `aria-expanded` state is reset before a later return to mobile.
- Existing link-click close behavior remains intact.
- Self-check: the functional change is isolated to `script.js`; `index.html` changed only the script cache key. Hero markup and all hero stylesheets remain byte-for-byte untouched by this cycle.

### Final spacing / anchor navigation — 2026-08-19
- Added section-local `scroll-margin-top` to Services, Works, About, and Contact so sticky-header navigation lands with the section content visible instead of tucked under the header.
- Desktop/tablet target offset is 86px; small-mobile offset is 74px to match the shorter header footprint without changing header geometry or safe-area behavior.
- The change is isolated to `nav-footer.css`; no hero selector, hero stylesheet, asset, markup, typography, spacing, placement, animation, or global variable was changed.
- Refreshed only the `nav-footer.css` cache key in `index.html`; the hero markup remains unchanged.

## Next priority
1. Final no-regression pass across non-hero sections at mobile/tablet/desktop.
2. If no real regression is found, stop visual changes and mark the non-hero polish complete.

## Guardrail
The hero is locked. Do not modify `hero-mobile-refine.css`, `hero-fix.css`, `hero-small-desktop.css`, `hero-fluid-tablet.css`, hero assets, or `<section class="hero">...</section>`.

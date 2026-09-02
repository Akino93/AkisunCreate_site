# AkisunCreate — Corporate Site Content & Positioning Phase

## Owner direction — 2026-09-02
Akisun Create is evolving from a portfolio-like site into a credible corporate site for a small product/design business.

### Positioning
Akisun Create is a **product partner that supports companies in building products while also developing its own products**. It should not be positioned narrowly as a web/design production company or purely as an AI company. Its core value is helping move product work forward from an ambiguous starting point through problem definition, UX/product design, project/product management, implementation collaboration, and continuous improvement. UI/UX, PM/PdM, AI, and development are means to that end.

### Primary audiences / success criteria
1. Contractor/vendor evaluator: **信頼できそう / まともそう / 頼みやすそう**.
2. Company looking for an external PM/PdM or product partner: **一度問い合わせてみようかな**.
3. Any visitor: design has **originality and personality** without sacrificing clarity or professional credibility.

### Brand balance
- Preserve the vintage editorial / retro print theme.
- Content: clear, concrete, calm, credible, easy to understand.
- **見た目は個性的、中身は堅実。**
- Optimize for 話が通じそう / 相談しやすそう rather than vague すごそう claims.
- Avoid generic agency language, inflated claims, buzzword-heavy AI positioning, or generic freelancer-portfolio copy.

### Target information architecture
- **Services** — corporate product-development support.
- **Works** — evidence of how Akisun Create solved problems and moved projects forward.
- **Products** — own products; first product is **ぺぇジェント (AI SNS Auto)**.
- **About** — working philosophy, strengths, scope, and collaboration trust.
- **Contact** — low-friction early/ambiguous consultation.

Navigation target: **Services / Works / Products / About / Contact**.

### Product note
**ぺぇジェント = AI SNS Auto.** Do not treat them as separate products.

### Content principles
- Explain what Akisun Create does within the first meaningful reading sequence.
- Communicate: **課題を整理する → 体験を設計する → 形にする → 改善する**.
- Show that engagement can start before requirements are fully defined.
- Make PM/PdM/product-development support discoverable.
- Use supported facts only; never invent clients, metrics, outcomes, certifications, team size, or capabilities.
- Keep copy mobile-scannable and CTAs low-pressure.
- Products should strengthen the parent brand rather than turn the homepage into a single-product LP.

## Phase status
Previous non-hero stabilization is complete. **Content/positioning phase is active.**

## Guardrails
- Preserve current visual identity rather than replacing it with a generic SaaS/corporate template.
- Do not regress responsive/mobile fixes.
- No image generation/alteration unless owner explicitly requests it.
- No unsupported business claims.
- Hero visual composition/assets remain locked. **Hero copy is review scope.**

## Content Review / 修正ToDo

### Owner-approved requirements
- [ ] **High — Corporate positioning / whole site**: make Akisun Create read as a product partner supporting company product development while building its own products, not merely a design portfolio.
- [ ] **High — Information architecture**: evolve toward Services / Works / Products / About / Contact and ensure the narrative remains coherent.
- [ ] **High — PM/PdM discoverability and conversion**: external PM/PdM/product-support prospects should understand that they can consult Akisun Create and have a clear low-friction path to Contact.
- [x] **High — Products foundation**: create a natural Products presence ready for **ぺぇジェント (AI SNS Auto)** and future dedicated product pages.
  - **Review result 2026-09-03:** Verified in current site and successful `Mobile Visual QA` run `33663853258` for implementation SHA `12a5bc5`. Navigation now follows `Services / Works / Products / About / Contact`; `#products` is a first-class section between Works and About; `ぺぇジェント` is shown with `AI SNS Auto` as its subtitle, not as a second product. The product-index pattern is reusable for future products. 375/390/430/768/1280 all report `scrollWidth == clientWidth`, and 390/1280 screenshots show the section fits the established editorial identity without disrupting the prior mobile layout.
- [ ] **Medium — Corporate trust / vendor due diligence**: strengthen copy and evidence so a contractor/vendor evaluator gets “信頼できそう / まともそう / 頼みやすそう”.
- [ ] **Medium — Works storytelling**: improve problem/context/role/value storytelling using only supported facts.
  - **Review status 2026-09-03:** Partially improved, not yet closed. `Akky Design System` now communicates purpose + role, and `組織へのAI活用導入` communicates problem + role clearly. `社員食堂メニューアンケート` still uses `対象：社員食堂メニューアンケート`, which repeats the title rather than explaining the underlying context/problem. The owner-level requirement remains open until all visible cases meet the same evidence standard.
- [ ] **Medium — Copy hierarchy / CTA**: rewrite vague/generic text and CTAs so the site is easy to scan, concrete, and consultation-friendly.
- [x] **Medium — Brand consistency / Products addition**: preserve the distinctive current visual identity while adding Products.
  - **Review result 2026-09-03:** Current 390px and 1280px rendered screenshots show the new Products block uses the same paper, ink-rule, numbered editorial language as the rest of the site rather than introducing a generic SaaS card style.

### Independent review findings — 2026-09-03

- [x] **High — First-view visible copy still does not say “product partner / PM-PdM support”**
  - **Original problem:** The visible hero led with the old capability trio, requiring PM/PdM buyers to scroll before recognizing the offer.
  - **Review result:** Closed. Current hero says `企業のプロダクトづくりを、要件が固まる前の課題整理から支援。` and explicitly exposes `PM / PdM・UX設計・AI活用・実装連携` in the first view. The 390px and 1280px screenshots from successful `Mobile Visual QA` run `33663853258` confirm the copy is visibly present, readable, and integrated without changing the approved hero visual composition. It now communicates upstream product support before scrolling.

- [x] **High — Products is absent from page structure and navigation**
  - **Original problem:** Nav was `SERVICES / WORKS / ABOUT / CONTACT`; no Products section existed, so the site could not express the dual identity of client support + own-product development.
  - **Review result:** Closed. Current navigation and page include `PRODUCTS`, the section is first-class, and ぺぇジェント / AI SNS Auto is correctly represented as one product. Responsive QA passed with no document-level overflow at all workflow viewports.

- [ ] **Medium — Products establishes ownership but still does not explain the product’s value**
  - **Problem:** The new Products section successfully creates the structural home for ぺぇジェント, but its descriptive copy only says `Akisun Createが開発する自社プロダクト。今後のプロダクトも、このProductsから案内していきます。` A corporate visitor learns that the product exists, but not what problem it addresses or why they should care. `AI SNS Auto` is a subtitle rather than a plain-language value explanation.
  - **Expected:** The homepage gives a compact, truthful reason to understand or explore ぺぇジェント while remaining a corporate homepage rather than turning into a product LP.
  - **Recommended direction:** Add one short plain-language product description and, once an actual product page exists, a clear product-detail CTA. Source wording from verified ぺぇジェント / AI SNS Auto project facts; do not invent release status, supported SNS channels, automation behavior, pricing, adoption, or metrics unless verified.
  - **DoD:** A first-time visitor can state in plain language what category/problem ぺぇジェント addresses; copy stays concise and factual; `ぺぇジェント = AI SNS Auto` remains one product; no unsupported feature/release/pricing claim; mobile section remains scannable.

- [ ] **Medium — Works still reads as portfolio captions rather than procurement evidence**
  - **Problem:** The implementation at SHA `9c2de3817bbf8633cee47ff3c33077330f8e4a04` meaningfully improves the cards, but acceptance is incomplete. `Akky Design System` now states `目的：UIの一貫性と実装連携を支えること` + `担当：再利用可能なデザイン基盤として設計`, and `組織へのAI活用導入` now states a real `課題` + `担当`. By contrast, the lead case still says `対象：社員食堂メニューアンケート`, which is effectively the title repeated and does not explain what situation/problem prompted the redesign. Its `担当` sentence explains the action, but not enough context for a procurement evaluator to understand what was being solved.
  - **Expected:** Works demonstrates the positioning: Akisun Create can understand a messy problem and move it forward. Each featured case should communicate problem/context plus role/action; outcomes only where supported.
  - **Recommended direction:** Keep the current compact `目的/課題/担当` pattern, but replace the first case's title-repeating `対象` line with a verified problem/context statement from the underlying project facts. Do not invent users, client identity, metrics, or outcomes.
  - **DoD:** Every visible Work explains context/problem and Akisun Create's role/action; at least one demonstrates upstream/product/project thinking; no invented client/metric/outcome; summaries remain mobile-scannable.
  - **Independent visual check:** `Mobile Visual QA` run `33676305063` for the exact implementation SHA completed successfully. Fresh artifact inspection confirms `scrollWidth == clientWidth` at 375/390/430/768/1280. `full-390.png` and `full-1280.png` show the revised labels/copy are readable, unclipped, and retain the existing editorial hierarchy. No responsive regression was found in Works; the remaining issue is content completeness, not layout.

- [ ] **Medium — About still frames Akisun Create mainly as an individual capability inventory**
  - **Problem:** `UI/UXデザインを軸に、業務設計・要件定義・プロジェクト推進・AI活用支援を行う個人事業です` is transparent but reads as “freelancer with several skills.” The stronger differentiator—connecting sales, development and users—is present only afterward, and there is no explanation of how/when to involve Akisun Create.
  - **Expected:** Preserve truthful sole-proprietor disclosure while explaining collaboration value and working approach: ambiguity is acceptable, stakeholder perspectives are organized, and work moves toward an implementable product/operation.
  - **Recommended direction:** Shift the lead from capability inventory to approach/collaboration; retain factual business form and the supported `営業・開発・利用者` cross-functional concept. Do not imply a larger team.
  - **DoD:** About accurately identifies business form while making clear why/when to work with Akisun Create; reinforces product partnership/cross-functional coordination without duplicating Services; no team-size inflation.

- [x] **Medium — Contact does not yet remove enough consultation uncertainty**
  - **Original problem:** `その課題、一緒に整理しませんか。` was friendly, but the only action was a raw email address and the section did not explicitly say that pre-requirements/ambiguous product consultations or external PM/PdM/product support inquiries were welcome.
  - **Review result 2026-09-03:** Closed against implementation SHA `4c92d7e`. Current Contact explicitly says `要件が固まっていない段階のプロダクト相談や、PM / PdM・UX設計を含む外部支援のご相談も歓迎しています。まずは今の状況をお聞かせください。` and changes the visible mail action to `メールで相談する →` while preserving the existing `mailto:` channel. This directly satisfies the early-stage consultation and PM/PdM self-identification goals without adding response-time, availability, or other unsupported promises. Commit comparison from the previously reviewed content state shows the implementation changes only `index.html` (1 line replaced in the minified file), so there is no CSS/layout/hero change introduced by this pass; current main is only a TASKS.md documentation commit ahead of the implementation.

## Implementation evidence

### 2026-09-03 — Works storytelling pass — Reviewed / Partial
- Updated only the three existing Works summaries; no new client, metric, outcome, capability, image, layout, or hero claim was added.
- `Akky Design System` and `組織へのAI活用導入` now satisfy the intended compact evidence pattern by making purpose/problem and role/action explicit.
- `社員食堂メニューアンケート` is improved but not accepted yet because `対象：社員食堂メニューアンケート` repeats the case name rather than supplying context/problem. Keep the finding open and revise only from verified project facts.
- Product implementation commit: `9c2de3817bbf8633cee47ff3c33077330f8e4a04`.
- `Mobile Visual QA` run `33676305063` completed successfully for that exact SHA. Fresh review artifact: no horizontal overflow at 375/390/430/768/1280; 390/1280 rendered Works copy is readable and unclipped.

### 2026-09-03 — Contact consultation clarity pass — Reviewed / Closed
- Kept the low-pressure `その課題、一緒に整理しませんか。` headline and existing `mailto:` channel.
- Replaced the generic kicker/raw-address presentation with concrete copy that explicitly welcomes product consultation before requirements are fixed and names PM/PdM・UX design external support.
- Changed the visible mail CTA from the raw email address to `メールで相談する →`, so the action is clear without adding response-time or availability claims.
- Independent review verified current `index.html` and the implementation diff for SHA `4c92d7e`; the product change is isolated to the Contact HTML text/action and introduces no CSS, hero, asset, navigation, or layout change.

### 2026-09-03 — Products IA foundation pass — Reviewed / Closed
- Added PRODUCTS to primary navigation and a reusable `#products` section.
- Presented **ぺぇジェント** with **AI SNS Auto** as subtitle, correctly as one product.
- Independent responsive review completed against `Mobile Visual QA` run `33663853258`; no overflow regression at 375/390/430/768/1280.

### 2026-09-03 — About collaboration framing pass — Ready for Review
- Reframed the About lead from a capability inventory to the supported collaboration approach: AkisunCreate can join before requirements are fixed, organize the perspectives of `営業・開発・利用者`, and connect them to an implementable product/operation shape.
- Retained the factual `個人事業` disclosure and existing supported capabilities (`UI/UX設計・要件定義・プロジェクト推進・AI活用支援`) as means rather than the lead identity.
- No client, team-size, metric, outcome, certification, image, CSS, layout, navigation, Product, Contact, or Hero change was introduced.
- Product implementation commit: `903349bb0c183eaf6f64ec111de4d2516170b203`.
- Finding remains open for independent Review Agent acceptance; this implementation does not self-close it.

### 2026-09-03 — Hero first-view positioning pass — Reviewed / Closed
- Hero lead now states company product-development support from the pre-requirements problem-definition stage and explicitly exposes PM/PdM.
- Independent rendered review completed at 390px and 1280px from run `33663853258`; approved hero art remains visually intact.

### 2026-09-03 — Services positioning pass — Ready / direction accepted
- Services taxonomy is now **プロダクト・UX設計 / PM・PdM・プロジェクト推進 / AI・業務改善・実装連携**.
- PM/PdM CTA uses `相談してみる → Contact`.
- Direction aligns with owner positioning. Whole-site owner requirements remain open until Works/About complete the story.

## Review Log

### 2026-09-03 — Works storytelling acceptance review
- Reviewed current `index.html`, current `TASKS.md`, implementation SHA `9c2de3817bbf8633cee47ff3c33077330f8e4a04`, and fresh successful `Mobile Visual QA` artifact from run `33676305063`.
- Inspected `full-390.png` and `full-1280.png`; checked `layout-metrics.json` at 375/390/430/768/1280. All workflow widths have `scrollWidth == clientWidth`; revised Works copy is readable and unclipped.
- Accepted the second and third case-summary direction: both now expose purpose/problem and Akisun Create's role/action without unsupported outcome claims.
- Did not close the Works finding because the lead `社員食堂メニューアンケート` case still lacks an actual context/problem line: `対象` simply repeats the case title. This is a content gap rather than a visual defect.
- No new duplicate finding added. Next fix should be narrowly limited to replacing that first-case context line from verified project facts.

### 2026-09-03 — Contact consultation clarity acceptance review
- Reviewed current `index.html`, current `TASKS.md`, latest commits, and the implementation diff for `4c92d7e`.
- Closed the Contact finding: the section now explicitly welcomes pre-requirements product consultation and PM/PdM・UX external support, and the action is clearly labeled `メールで相談する →`.
- No unsupported availability/response-time claim was introduced.
- The implementation diff is isolated to `index.html`; no CSS or structural layout files changed, so this pass does not introduce a new visual-layout risk beyond the already stabilized Contact component.
- Next highest-value content gaps remain Works storytelling, About collaboration framing, and the practical value explanation for ぺぇジェント.

### 2026-09-03 — Hero + Products acceptance review
- Reviewed current `index.html`, `products.css`, and fresh successful `Mobile Visual QA` artifact from run `33663853258` (implementation SHA `12a5bc5`).
- Inspected `full-390.png` and `full-1280.png`; checked layout metrics for 375/390/430/768/1280.
- Closed the first-view positioning finding: the visible hero now communicates product-development support, pre-requirements engagement, and PM/PdM without scrolling.
- Closed the Products IA finding and owner Products foundation requirement: nav/section are present, ぺぇジェント and AI SNS Auto are correctly one product, and responsive layout remains stable.
- Added one new non-duplicate Products content finding: the section currently proves ownership/existence but does not yet explain the product's practical value in plain language.
- Existing Works/About/Contact findings remain valid and are higher-value next fixes than additional visual polish.

### 2026-09-03 — End-to-end positioning / IA review
- Accepted the direction of the new Services taxonomy and identified five initial content gaps: hero, Products, Works, About, Contact.
- Hero and Products gaps are now independently closed; Works/About remain open.

## Historical stabilization summary
Before this phase, Services, Selected Works, About, Contact/CTA, footer/navigation and mobile responsive behavior were stabilized and independently reviewed. Owner-reported mobile card offsets, unwanted Works inner keylines, and emoji-style service symbol were resolved. Treat those fixes as regression guardrails.
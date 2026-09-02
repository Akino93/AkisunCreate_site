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
**Services / Works / Products / About / Contact**

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

## Guardrails
- Preserve current visual identity rather than replacing it with a generic SaaS/corporate template.
- Do not regress responsive/mobile fixes.
- No image generation/alteration unless owner explicitly requests it.
- No unsupported business claims.
- Hero visual composition/assets remain locked. Hero copy is review scope.

## Content Review / 修正ToDo

### Owner-approved requirements
- [x] **High — Corporate positioning / whole site**
  - **Review result 2026-09-03:** Current first-view copy, Services taxonomy, About framing, Works evidence, Products presence, and Contact now consistently describe Akisun Create as a product partner rather than a generic design portfolio. The site clearly supports company product development while also showing own-product development.
- [x] **High — Information architecture**
  - **Review result 2026-09-03:** Navigation and page flow now follow `Services / Works / Products / About / Contact`, with Products as a first-class section between Works and About.
- [x] **High — PM/PdM discoverability and conversion**
  - **Review result 2026-09-03:** Hero explicitly includes `PM / PdM`; Services has a dedicated `PM / PdM・プロジェクト推進` card with `相談してみる →`; Contact explicitly welcomes PM/PdM・UX external-support inquiries before requirements are fixed.
- [x] **High — Products foundation**
  - **Review result:** `ぺぇジェント` is represented with `AI SNS Auto` as its subtitle, correctly as one product, and the section pattern is reusable for future products.
- [ ] **Medium — Corporate trust / vendor due diligence**
  - **Problem:** The content now demonstrates capability and collaboration style, but a procurement/vendor evaluator still has very little factual business-profile information. About says AkisunCreate is a sole proprietorship and Contact provides email, but the page has no compact business-profile block that helps a company quickly confirm what the entity is and what it formally offers.
  - **Expected:** Without turning the site into a legal-information dump, a company checking Akisun Create as a contractor can quickly verify the basic business identity and scope and feel that the site is maintained as a real business presence, not only a portfolio.
  - **Recommended direction:** Add a restrained business-profile / basic-information block in About or footer using only verified facts already available to the owner/repository. Suitable fields may include trade name, business form (`個人事業`), main service scope, contact method, and other owner-approved factual basics. Do not invent address, representative name, founding date, invoice registration, credentials, client list, availability, or legal status. If a field is not verified, omit it.
  - **DoD:** A procurement visitor can identify the business form, service scope, and contact route from one compact area; every field is verified; no privacy-sensitive or unsupported fact is introduced; visual treatment remains editorial and mobile-scannable.
- [x] **Medium — Works storytelling**
  - **Review result 2026-09-03:** All three visible cases now expose compact problem/purpose + role/action evidence. The lead case now states the actual information-design problem instead of repeating its title. No unsupported client, metric, or outcome was added.
- [x] **Medium — Copy hierarchy / CTA**
  - **Review result 2026-09-03:** Hero, Services, Contact and Products now use concrete headings/body copy and low-friction actions. The main path `理解 → 実績 → 自社製品 → 協業姿勢 → 相談` is scannable on desktop and mobile.
- [x] **Medium — Brand consistency**
  - **Review result:** The new corporate content and Products section retain the existing vintage editorial / retro-print visual language rather than introducing a generic SaaS template.

## Independent review findings — 2026-09-03

- [x] **First-view positioning**
  - Current hero says `企業のプロダクトづくりを、要件が固まる前の課題整理から支援。` and exposes `PM / PdM・UX設計・AI活用・実装連携` before scrolling.
- [x] **Products IA**
  - PRODUCTS is present in navigation and page structure; ぺぇジェント / AI SNS Auto is one product.
- [x] **Products value explanation**
  - **Review result 2026-09-03:** Closed against implementation SHA `43a8ffd5d6292d6111a3e9b954ffacaef2d66dfd` and successful exact-SHA `Mobile Visual QA` run `33692659324`. Current copy explains in plain language that AI prepares SNS post drafts and a human confirms and chooses `投稿・編集・スキップ`, making continued SNS operation easier. It adds no pricing, adoption, metrics, unsupported channel list, or release-status claim. Fresh 390px and 1280px screenshots show the paragraph remains readable and visually consistent; `layout-metrics.json` reports `scrollWidth == clientWidth` at 375/390/430/768/1280.
- [x] **Works procurement evidence**
  - **Review result:** Closed against SHA `e138339cb2c325fca4f7505555fce4dd918742bf` and successful run `33687878813`. Every visible Work now has purpose/problem + role/action context.
- [x] **About collaboration framing**
  - Current About leads with joining before requirements are fixed and organizing the perspectives of sales, development and users into an implementable product/operation shape while explicitly retaining `個人事業` disclosure.
- [x] **Contact consultation clarity**
  - Contact explicitly welcomes pre-requirements product consultation and PM/PdM・UX external support and uses the action `メールで相談する →`.

## Review Log

### 2026-09-03 — Products value + end-to-end acceptance
- Reviewed current `TASKS.md`, current `index.html`, latest implementation SHA `43a8ffd5d6292d6111a3e9b954ffacaef2d66dfd`, successful `Mobile Visual QA` run `33692659324`, fresh `full-390.png`, `full-1280.png`, and `layout-metrics.json`.
- Products value explanation is accepted. The revised paragraph is understandable without product-internal jargon, keeps Human-in-the-Loop visible, and remains concise enough for the corporate homepage.
- Responsive verification: 375/390/430/768/1280 all have `scrollWidth == clientWidth`; 390px and 1280px screenshots show no clipping or visual regression in Products, Works, About, Contact, or navigation.
- Re-ran the owner success tests end to end. Positioning, IA, PM/PdM discoverability, Works evidence, About framing, CTA clarity, and brand consistency now meet the approved direction.
- One non-duplicate high-value gap remains: **vendor due-diligence trust**. The page is persuasive about work style, but still light on basic factual business-profile information. Added a narrow Medium finding for a verified business-profile block rather than inventing more marketing copy.

### Prior accepted passes
- Hero first-view positioning: reviewed / closed.
- Services positioning: direction accepted.
- Works storytelling + lead-case context: reviewed / closed.
- Products IA foundation: reviewed / closed.
- Products value explanation: reviewed / closed.
- About collaboration framing: reviewed / closed.
- Contact consultation clarity: reviewed / closed.

## Historical stabilization summary
Before this phase, Services, Selected Works, About, Contact/CTA, footer/navigation and mobile responsive behavior were stabilized and independently reviewed. Owner-reported mobile card offsets, unwanted Works inner keylines, and emoji-style service symbol were resolved. Treat those fixes as regression guardrails.
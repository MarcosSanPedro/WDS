**World Detail Specialist — Final Website Requirements Document**
*(Scope: public-facing marketing site only.  No login/authentication, no blog or resource-library pages.  Objective is to launch a conversion-optimised, visually striking site that generates high-quality leads today while leaving hooks for future expansion.)*

---

## 1. Project Overview

| Item              | Requirement                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Primary Goals** | • Showcase craftsmanship & innovation  • Establish trust  • Convert visitors to qualified leads                               |
| **Target Users**  | 1) South-Florida homeowners planning renovations  2) Commercial property owners  3) Architects/designers looking for partners |
| **Success KPIs**  | Form-submissions, click-to-call taps, consultation bookings, page-speed (< 3 s), bounce < 45 %, mobile UX rating ≥ 90/100     |

---

## 2. Brand & Visual System

### 2.1 Colour Palette

| Role              | Hex       | Usage                       |
| ----------------- | --------- | --------------------------- |
| **Primary Navy**  | `#1A365D` | Header, footer, backgrounds |
| **Gold Accent**   | `#F6AD55` | CTAs, icons, active states  |
| **Pure White**    | `#FFFFFF` | Copy areas, negative space  |
| **Warm Grey**     | `#718096` | Body text, dividers         |
| **Success Green** | `#48BB78` | Confirmation states         |
| **Light Grey**    | `#F7FAFC` | Cards, alternating sections |

### 2.2 Typography

| Style    | Font (Fallback)  | Weight(s) | Usage                        |
| -------- | ---------------- | --------- | ---------------------------- |
| Headings | Inter            | 700 / 600 | H1-H3                        |
| Body     | Inter            | 400       | paragraphs                   |
| Accents  | Playfair Display | 500       | pull-quotes, luxury captions |

### 2.3 Imagery & Iconography

* 4 K real-project photography, no stock where possible
* Simple, line-based icons with gold accent
* Architectural line overlays as subtle section dividers

---

## 3. Interaction & Animation Guidelines

| Category          | Interaction                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Load**          | Logo fade-in (0.3 s) → nav slide-down (0.2 s) → hero headline typewriter (0.6 s)                                            |
| **Scroll-Reveal** | 15 % viewport trigger; fade-up & 8 px translate                                                                             |
| **Hover**         | Cards: gentle lift & shadow; Buttons: colour shift + 4 px scale                                                             |
| **Advanced**      | • Before/after slider (Portfolio)  • 3 D parallax wireframe in hero (desktop only)  • Animated number counters in stats-bar |

Performance budget: total JS for animations ≤ 120 KB gzipped; prefers‐reduced-motion respected.

---

## 4. Information Architecture

```
/             (Home)
|— /services
|    |— /kitchen-renovations
|    |— /bathroom-remodeling
|    |— /whole-home-renovations
|    |— /commercial-construction
|
|— /portfolio             (filterable grid)
|    |— /[project-slug]   (project detail)
|
|— /about
|
|— /contact
```

---

## 5. Mega-Menu Specification

| Top-Item      | Pattern                                                           | Notes                                             |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| **Services**  | 4-col grid (Residential, Commercial, Specialty, Featured Project) | Thumbnails + one CTA “Get Estimate” (gold button) |
| **Portfolio** | 3-col grid (Type, Style, Featured)                                | live project counts                               |
| **About**     | Simple dropdown (Story, Team, Awards)                             |                                                   |
| **Contact**   | CTA-styled link, no dropdown                                      |                                                   |

Mobile: hamburger → slide-in drawer with collapsible accordions; 44 px min tap-targets; sticky “Call Now” & “Get Estimate” buttons at bottom.

---

## 6. Page-by-Page Requirements

### 6.1 Home `/`

| Section           | Key Elements                                                         | CTA                            |
| ----------------- | -------------------------------------------------------------------- | ------------------------------ |
| Hero              | Full-screen 4 K loop, H1 “Building Dreams Into Reality”, two buttons | “Start Your Project” (primary) |
| Live Stats Bar    | four animated counters (Projects, Years, Clients, Avg Rating)        | —                              |
| Services Snapshot | 2 × 3 grid, custom icons, hover reveal                               | “Learn More” link per card     |
| Featured Projects | horizontal scroll, before/after thumb                                | “View Case Study”              |
| Process Timeline  | 6 steps with drawn connecting line                                   | “See Our Process” (to About)   |
| Testimonials      | rotating video + quote cards                                         | “Hear From Clients” (modal)    |
| Trust Bar         | scrolling logo strip                                                 | —                              |
| Contact Teaser    | split form  + map thumb                                              | “Get Free Estimate”            |

### 6.2 Services Landing `/services`

* Intro banner + quick-filter chips
* Cards for six core services; each links to its detail page

### 6.3 Service Detail (template) e.g. `/services/kitchen-renovations`

| Block                          | Detail                                           |
| ------------------------------ | ------------------------------------------------ |
| Hero                           | Service video/image, price-range badge           |
| Overview                       | Pain points → WDS solution (3 bullets)           |
| Process                        | 5-step accordion                                 |
| Style Gallery                  | tabs (Modern, Traditional…) with masonry gallery |
| Material Guide                 | comparative table, icon bullets                  |
| Pricing Calculator Widget      | real-time estimate; sends data to CRM            |
| FAQs                           | accordion                                        |
| “Schedule Consultation” banner | calendar embed                                   |

### 6.4 Portfolio `/portfolio`

* Filters: Type, Style, Budget, Year
* Views: Grid / Before-After / Virtual Tour toggle
* Infinite lazy-load (12 per batch)

#### Project Detail `/portfolio/[slug]`

Hero image + project meta → gallery (lightbox & before/after) → goals & solutions text → materials table → client video quote → “Request Similar Project” CTA

### 6.5 About `/about`

* Story timeline (SVG path scroll)
* Vision & mission (moon-house statement)
* Team grid (hover flip to bio)
* Values icons
* Awards masonry grid
* Behind-the-scenes video banner

### 6.6 Contact `/contact`

| Component       | Spec                                               |
| --------------- | -------------------------------------------------- |
| Multi-step Form | Type → Details → Contact; progress bar; validation |
| Alt Contacts    | click-to-call, mailto, WhatsApp link               |
| Map             | Google Map with service-area overlay               |
| Live Chat       | Intercom widget (lead-capture mode)                |

---

## 7. Advanced Components (Included in MVP)

| Component                    | Purpose                | Tech Notes                                   |
| ---------------------------- | ---------------------- | -------------------------------------------- |
| **Pricing Calculator**       | Engagement + lead data | React component; writes to hidden CRM form   |
| **Virtual Consult Booking**  | Instant scheduling     | Calendly embed with service pre-selection    |
| **Live Chat / AI Assistant** | 24/7 response          | Intercom; fallback form after hours          |
| **Before/After Slider**      | Visual proof           | Vanilla JS; touch-friendly                   |
| **3D Hero Blueprint**        | Wow-factor             | Three.js; served only on GPU-capable devices |

---

## 8. Technical & SEO Requirements

| Area              | Requirement                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Stack**         | WordPress + custom theme (ACF / Gutenberg) **or** Next.js + Headless WP; final choice pending dev resources |
| **Hosting**       | Managed (WP Engine/Kinsta) with CDN                                                                         |
| **Performance**   | < 3 s LCP; total JS < 350 KB; images WebP w/ lazy-load                                                      |
| **Accessibility** | WCAG 2.1 AA; focus outlines, aria-labels, prefers-reduced-motion                                            |
| **Schema**        | LocalBusiness, Service, Review, FAQ                                                                         |
| **URLs**          | kebab-case, no file-extensions                                                                              |
| **Security**      | SSL, WAF, daily backups                                                                                     |
| **Analytics**     | GA4, Tag Manager; events for CTA clicks, form steps, video plays                                            |

---

## 9. Content & Copy Guidelines

| Aspect        | Guideline                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| **Voice**     | Confident, expert, locally attuned, aspirational                                                       |
| **Headlines** | Benefit-driven, ≤ 60 chars                                                                             |
| **Body**      | Short paragraphs, scannable bullets                                                                    |
| **CTAs**      | Action verbs + outcome (“Get Free Estimate”)                                                           |
| **SEO**       | Natural integration of target keywords (e.g., “Miami kitchen renovation”) in H1, meta, first 100 words |

---

## 10. Implementation Timeline (10 Weeks)

| Phase                  | Weeks | Milestones                                        |
| ---------------------- | ----- | ------------------------------------------------- |
| Discovery & IA         | 1-2   | Final sitemap, wireframes                         |
| Design System          | 2-4   | High-fidelity comps, animation prototypes         |
| Development            | 4-8   | Theme build, component integration, responsive QA |
| Content Insertion      | 6-8   | Copy entry, imagery, alt-text, meta               |
| Testing & Optimisation | 8-9   | Cross-browser, accessibility, performance         |
| Launch & Handover      | 10    | DNS switch, XML sitemap submit, staff training    |

---

## 11. Out-of-Scope (Phase 2+)

* Client login / project portal
* Blog / resource centre
* Multi-language (i18n)
* E-commerce or payment processing

---

### Acceptance Checklist

* [ ] Colour & typography match brand guides
* [ ] All five public pages complete and responsive
* [ ] Mega-menu functions on desktop & mobile
* [ ] Animations respect `prefers-reduced-motion`
* [ ] Forms push to CRM and trigger email confirmation
* [ ] PageSpeed Insights mobile score ≥ 90
* [ ] WCAG 2.1 AA audit passes

---

**Deliver this document to all design, development and content stakeholders.  Sign-off on each section is required before moving to the next project phase.**

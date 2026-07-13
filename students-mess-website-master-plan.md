# Student's Mess – Home Style Meals
## Complete Website Architecture, SEO & Content Plan
### (Paste this into Antigravity to begin PHP development)

---

## 0. HOW TO USE THIS DOCUMENT

This is the full blueprint for the website — every page, every section, every piece of copy, every SEO tag, and every technical decision. Antigravity should build the site strictly following this structure. Where copy is marked `[FINAL COPY]` it is ready to use as-is. Where it's marked `[PLACEHOLDER – NEEDS PHOTO]` or `[PLACEHOLDER – NEEDS DATA]`, the layout should be built with that content slot ready for the client to fill in later.

---

## 1. FULL SITE ARCHITECTURE (SITEMAP)

```
/ (Homepage)
├── /about-us
├── /monthly-meal-plans
├── /bulk-orders
├── /takeaway
├── /todays-menu
├── /gallery
├── /reviews
├── /contact
│
├── /services/
│   ├── office-lunch-ranchi
│   ├── corporate-lunch-ranchi
│   ├── pg-food-supply-ranchi
│   ├── hostel-food-supply-ranchi
│   ├── student-tiffin-ranchi
│   ├── veg-meals-ranchi
│   ├── non-veg-meals-ranchi
│   ├── daily-lunch-ranchi
│   ├── daily-dinner-ranchi
│   ├── construction-site-meals-ranchi
│   ├── hospital-meal-supply-ranchi
│   ├── worker-meal-supply-ranchi
│   └── event-catering-ranchi
│
├── /areas/
│   ├── hindpiri
│   ├── upper-bazar
│   ├── lalpur
│   ├── doranda
│   ├── main-road
│   ├── kokar
│   ├── kanke
│   ├── morabadi
│   ├── ratu-road
│   ├── harmu
│   ├── bariatu
│   ├── kantatoli
│   ├── booty-more
│   ├── argora
│   └── lowadih
│
├── /blog/
│   ├── /blog (index, category filters)
│   └── /blog/[slug] (individual posts)
│
├── /thank-you (post-form-submission page, no-index)
├── /privacy-policy
└── /terms-of-service
```

**URL structure rule:** all lowercase, hyphenated, no trailing category noise. Example: `studentsmessranchi.com/services/office-lunch-ranchi` not `.../services/office-lunch-in-ranchi-jharkhand`.

---

## 2. GLOBAL ELEMENTS (appear on every page)

### 2.1 Header (sticky on scroll)
- Logo (left)
- Nav: Home · About · Monthly Plans · Bulk Orders · Takeaway · Today's Menu · Areas We Serve (dropdown) · Blog · Contact
- Right side: "Call Now" button (tel: link) + "WhatsApp Us" button (wa.me link) — both always visible, sticky on mobile as a bottom bar
- On scroll: header compresses, CTA buttons stay pinned

### 2.2 Footer
- Column 1: Logo + one-line brand statement + "Serving Ranchi Since 1999"
- Column 2: Quick Links (About, Monthly Plans, Bulk Orders, Takeaway, Contact)
- Column 3: Areas We Serve (list of 8 top localities + "View All Areas" link)
- Column 4: Contact block — phone, WhatsApp, email, address, Google Maps embed link, opening hours
- Column 5: Social icons (Instagram, Facebook, Google Business Profile)
- Bottom bar: © [Year] Student's Mess. Serving Ranchi Since 1999. | Privacy Policy | Terms

### 2.3 Floating Elements (all pages, mobile + desktop)
- Bottom-right: WhatsApp floating button (pulses gently, pre-filled message: "Hi, I'd like to know more about your meal plans")
- Bottom-left or bottom bar (mobile only): Call Now + Get Bulk Quote, two-button sticky strip

### 2.4 Schema markup (site-wide, in header via PHP include)
- `LocalBusiness` + `Restaurant` schema on every page (name, address, phone, hours, price range, cuisine, geo-coordinates)
- `BreadcrumbList` schema on every inner page
- `FAQPage` schema wherever an FAQ block exists
- `AggregateRating` + `Review` schema on Reviews page and Homepage

---

## 3. HOMEPAGE — FULL SECTION-BY-SECTION PLAN

**Meta Title:** `Home Style Meals in Ranchi Since 1999 | Student's Mess`
**Meta Description:** `Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi. Order today.`

### 3.1 Hero Section
Layout: two-column editorial (text left, large food photography right — full-bleed on mobile, stacked).

**[FINAL COPY]**
- Eyebrow tag: `Serving Ranchi Since 1999`
- Headline: `Home Style Meals, Made With Love.`
- Subheadline: `Fresh, hygienic, and affordable veg & non-veg meals — trusted by students, professionals, and families across Ranchi for over 26 years.`
- Primary CTA button: `Request Bulk Quote`
- Secondary CTA button: `View Monthly Plans`
- Small trust line under buttons: `26+ Years in Business · Family Owned · 500+ Meals Served Daily` *(update numbers with real data)*

**[PLACEHOLDER – NEEDS PHOTO]** Premium thali shot: rustic wooden table, natural window light, steam rising, rice/dal/veg curry/non-veg curry/chapati/salad, warm color grading, no on-image text.

### 3.2 Trust Bar (thin strip directly below hero)
Icons + short labels in a single row (stacks 2x2 on mobile):
`Since 1999` · `Family Owned` · `Fresh Daily` · `Hygienic Kitchen`

### 3.3 The 26-Year Legacy / Timeline Section
Horizontal (desktop) / vertical (mobile) timeline.

**[FINAL COPY – draft, confirm dates with family]**
- 1999 — `Started as a small home kitchen serving students in Ranchi.`
- Early 2000s — `Word of mouth grows — bachelors and working professionals join our family of regulars.`
- 2010s — `Expanded to bulk orders for offices, hostels, and PGs across the city.`
- Today — `A trusted name in Ranchi for home style meals, monthly plans, and bulk catering.`
- Closing line: `Two decades. One kitchen. Thousands of meals shared like family.`

### 3.4 Who We Serve
Grid of 8 cards, icon + label, each linking to relevant service/area page.
`Students` · `Working Professionals` · `Bachelors` · `PG & Hostel Owners` · `Offices & Companies` · `Hospitals & NGOs` · `Coaching Institutes` · `Construction Sites`

### 3.5 Monthly Meal Plans (teaser)
Left: short copy + 3 plan cards (Veg / Non-Veg / Combo) with starting price placeholders. Right or below: CTA `Explore Monthly Plans →` linking to `/monthly-meal-plans`.

**[FINAL COPY]**
Heading: `Never Worry About Meals Again.`
Body: `Our monthly meal plans bring home style cooking to your doorstep — every single day. Perfect for students, bachelors, and working professionals who miss home food.`
**[PLACEHOLDER – NEEDS DATA]** pricing per plan.

### 3.6 Bulk Orders (major section — largest on homepage)
Full-width section, dark or accent-colored background (#2E5E4E) to visually separate it as "the big one."

**[FINAL COPY]**
Heading: `Feeding Teams, Institutions & Events — At Scale.`
Body: `From daily office lunches to large events, we supply fresh, hygienic meals in bulk — reliably, on time, every time.`
Grid of who it's for: `Companies` · `PGs & Hostels` · `Offices` · `Hospitals` · `Schools & Coaching Institutes` · `NGOs` · `Factories & Warehouses` · `Construction Sites` · `Events & Meetings` · `Corporate Lunch Programs`
CTA button: `Get a Bulk Quote` → opens quote form / links to `/bulk-orders#quote-form`

### 3.7 Takeaway (teaser)
Short section: `Craving home food on the go? Order takeaway — fresh, packed, ready when you are.` CTA: `See Takeaway Options →`

### 3.8 Areas We Serve
Map graphic or grid of locality chips (all 15 areas), each a clickable link to its location page. Heading: `Serving Every Corner of Ranchi.`

### 3.9 Gallery (teaser)
Masonry grid of 6–8 food photos **[PLACEHOLDER – NEEDS PHOTOS]**, CTA `View Full Gallery →`

### 3.10 Testimonials
Carousel or 3-card grid of customer quotes. **[PLACEHOLDER – NEEDS DATA]** (collect real customer quotes; do not fabricate).
Layout note: each card = photo/avatar (optional), name, one-line role (e.g. "Hostel Resident, Kanke"), quote, star rating.

### 3.11 Google Reviews Embed
Live-pull or manually embedded Google Business Profile reviews widget + `AggregateRating` schema. Button: `Leave Us a Review` (deep link to GBP review page).

### 3.12 FAQs
Accordion, 6–8 questions, wrapped in `FAQPage` schema.

**[FINAL COPY – draft]**
1. `Do you deliver food or is it takeaway/dine-in only?` → `Currently we offer takeaway and bulk/institutional delivery. Individual home delivery is launching soon.`
2. `What is included in a monthly meal plan?` → *(detail once plans are finalized)*
3. `Can I customize veg/non-veg preference in a monthly plan?` → `Yes, plans are available in both veg and non-veg options.`
4. `Do you cater to bulk orders for offices and events?` → `Yes, bulk catering is one of our core services — for offices, PGs, hostels, hospitals, and events.`
5. `Is the food hygienically prepared?` → `Yes, our kitchen follows strict hygiene standards and all meals are freshly prepared daily.`
6. `Which areas in Ranchi do you serve?` → `We currently serve [list areas]; for bulk orders we can arrange delivery across Ranchi.`

### 3.13 Final CTA Section (before footer)
Full-width band. Heading: `Ready for Home Style Meals?` Two buttons: `Request Bulk Quote` / `Call Us Now`.

---

## 4. CORE PAGES — DETAILED CONTENT PLANS

### 4.1 About Us — `/about-us`
**Meta Title:** `About Us | Student's Mess – Home Style Meals in Ranchi Since 1999`
**Meta Description:** `Learn the story of Student's Mess — a family-run home style meal business serving Ranchi for over 26 years.`

Sections:
1. Hero: `Our Story` + short intro line
2. Full legacy story — expand the timeline from homepage into 3–4 paragraphs **[PLACEHOLDER – NEEDS DATA: family to provide founding story details, who started it, why, memorable milestones]**
3. Meet the Family — photo + short bio of father (head chef) and mother (operations) **[PLACEHOLDER – NEEDS PHOTO + DATA]**
4. Our Kitchen & Hygiene Standards — 4–6 bullet points on hygiene practices **[PLACEHOLDER – NEEDS DATA]**
5. Our Values grid: `Authenticity` · `Hygiene` · `Affordability` · `Consistency` · `Trust` · `Warmth`
6. CTA band: `Experience Home Style Cooking Yourself` → link to Menu/Bulk Orders

### 4.2 Monthly Meal Plans — `/monthly-meal-plans`
**Meta Title:** `Monthly Tiffin & Meal Plans in Ranchi | Student's Mess`
**Meta Description:** `Affordable monthly veg & non-veg meal plans in Ranchi. Home style lunch and dinner delivered fresh, every day. Perfect for students & professionals.`

Sections:
1. Hero: `Monthly Meal Plans — Home Food, Every Day.`
2. Why Choose a Monthly Plan (icons): `Saves Time` · `Saves Money` · `Consistent Home Food` · `No Cooking Stress`
3. Plan Comparison Table — Veg / Non-Veg / Combo, each with: meals/day, lunch-only vs lunch+dinner, weekly menu rotation note, price **[PLACEHOLDER – NEEDS DATA: exact pricing]**
4. Sample Weekly Menu (7-day table) **[PLACEHOLDER – NEEDS DATA]**
5. How It Works — 3-step process: `Choose Plan → Confirm on WhatsApp/Call → Meals Start Next Day`
6. Who Chooses Monthly Plans (student, bachelor, professional, PG resident cards)
7. FAQs specific to plans (pause/skip meal policy, delivery timing, payment cycle) **[PLACEHOLDER – NEEDS DATA]**
8. CTA: `Start Your Monthly Plan Today` → WhatsApp / Call / Contact form

### 4.3 Bulk Orders — `/bulk-orders`
**Meta Title:** `Bulk Food Orders & Catering in Ranchi | Offices, PGs, Hostels, Events`
**Meta Description:** `Reliable bulk meal supply in Ranchi for offices, PGs, hostels, hospitals, construction sites & events. Fresh, hygienic, on-time — since 1999.`

Sections:
1. Hero: `Feeding Teams, Institutions & Events — At Scale.`
2. Who We Supply — full grid of 10 segments (Companies, PGs, Hostels, Offices, Hospitals, Schools/Coaching, NGOs, Factories/Warehouses, Construction Sites, Events)
3. Why Organizations Choose Us — trust factors: `26+ Years Experience` · `Consistent Quality` · `Flexible Quantities` · `Timely Delivery` · `Hygienic Preparation` · `Competitive Pricing`
4. How Bulk Ordering Works — 4-step process: `Tell Us Your Requirement → Get a Custom Quote → Sample/Trial (optional) → Recurring or One-Time Order Begins`
5. **Bulk Quote Request Form** (anchor `#quote-form`) — Fields: Name, Organization Name, Phone, Email (optional), Type of Order (dropdown: Daily/Weekly/One-Time/Event), Approx. No. of Meals, Veg/Non-Veg/Both, Location, Message. Submit → `/thank-you`.
6. Case-study style mini section (once real clients agree to be named): `Trusted by [X] organizations across Ranchi` **[PLACEHOLDER – NEEDS DATA]**
7. FAQs (minimum order quantity, advance notice needed, payment terms, delivery radius)
8. CTA: `Get Your Custom Bulk Quote` (repeats form or scrolls to it)

### 4.4 Takeaway — `/takeaway`
**Meta Title:** `Takeaway Home Style Meals in Ranchi | Student's Mess`
**Meta Description:** `Order fresh home style veg & non-veg takeaway meals in Ranchi. Quick, hygienic, and ready when you are.`

Sections:
1. Hero: `Home Food, On the Go.`
2. How Takeaway Works — `Call/WhatsApp Your Order → We Prepare Fresh → Pick Up at Your Convenience`
3. Popular Takeaway Items (link to Today's Menu)
4. Timing & Location info **[PLACEHOLDER – NEEDS DATA: hours, address]**
5. CTA: `Call to Order Takeaway` / `WhatsApp Your Order`

### 4.5 Today's Menu — `/todays-menu`
**Meta Title:** `Today's Menu | Student's Mess Ranchi`
**Meta Description:** `Check today's fresh home style veg & non-veg menu at Student's Mess, Ranchi.`

Sections:
1. Hero: `What's Cooking Today.`
2. Menu display — dynamic table/cards pulled from a simple admin-editable source (CSV/DB — see Section 8 Future Admin Panel), grouped Veg / Non-Veg, each item with name + short description
3. Note: `Menu rotates daily/weekly based on seasonal availability.`
4. CTA: `Order for Takeaway` / `Ask About Monthly Plans`

*(Technical note for Antigravity: even in v1 without a full CMS, build this page to read from a single JSON/CSV file so the family can update it without touching code — this directly serves the "Future Admin Panel" roadmap item.)*

### 4.6 Gallery — `/gallery`
**Meta Title:** `Gallery | Student's Mess – Home Style Meals in Ranchi`
Sections:
1. Hero: `A Glimpse Into Our Kitchen.`
2. Filterable masonry grid: `Food` / `Kitchen` / `Events & Bulk Orders` / `Team` **[PLACEHOLDER – NEEDS PHOTOS across all categories]**
3. CTA: `Taste It Yourself — Order Today`

### 4.7 Reviews — `/reviews`
**Meta Title:** `Customer Reviews | Student's Mess Ranchi`
Sections:
1. Hero + aggregate star rating (schema-marked)
2. Google Reviews embed (full list, not just teaser)
3. Written testimonials grid **[PLACEHOLDER – NEEDS DATA]**
4. CTA: `Leave a Review` (GBP link) + `Become Our Next Happy Customer` (order CTA)

### 4.8 Contact — `/contact`
**Meta Title:** `Contact Us | Student's Mess Ranchi`
Sections:
1. Hero: `Get In Touch.`
2. Contact form: Name, Phone, Email (optional), Subject (dropdown: General / Monthly Plan / Bulk Order / Takeaway / Other), Message → `/thank-you`
3. Direct contact block: Phone (click-to-call), WhatsApp (click-to-chat), Email, Address
4. Embedded Google Map
5. Business hours table **[PLACEHOLDER – NEEDS DATA]**

---

## 5. SERVICE PAGES — TEMPLATE + ALL 12 PAGES

### 5.1 Universal Service Page Template
Every service page follows this exact structure so Antigravity can build one PHP template (`service-template.php`) and populate it per page via a data array/CMS entry.

1. Hero: `[Service Name] in Ranchi` + one-line value prop + CTA button
2. What This Service Includes (bullet list, service-specific)
3. Why Choose Student's Mess for [Service] (trust factors, reused across pages with light variation)
4. Who This Is For (relevant audience card(s))
5. How It Works (3–4 step process, service-specific)
6. Pricing note or "Get a Custom Quote" CTA (link to Bulk Orders quote form or Monthly Plans, depending on service type)
7. Related Areas We Serve (auto-linked list — internal linking engine, see Section 7)
8. FAQs (2–4, service-specific)
9. Final CTA band

**Meta Title pattern:** `[Service Name] in Ranchi | Student's Mess`
**Meta Description pattern:** `[One-line description of the service] in Ranchi by Student's Mess — trusted home style meal provider since 1999.`

### 5.2 Content per Service Page

| Slug | H1 | Core Angle | Primary CTA |
|---|---|---|---|
| office-lunch-ranchi | Office Lunch Delivery in Ranchi | Daily lunch programs for teams — consistent, affordable, on-time | Get Bulk Quote |
| corporate-lunch-ranchi | Corporate Lunch Catering in Ranchi | Recurring meal contracts for companies, HR-friendly billing | Get Bulk Quote |
| pg-food-supply-ranchi | PG Food Supply in Ranchi | Daily meal supply for PG accommodations, flexible quantities | Get Bulk Quote |
| hostel-food-supply-ranchi | Hostel Food Supply in Ranchi | Large-scale daily meals for hostels, consistent quality at volume | Get Bulk Quote |
| student-tiffin-ranchi | Student Tiffin Service in Ranchi | Affordable home style tiffin for students living away from home | Explore Monthly Plans |
| veg-meals-ranchi | Veg Meals in Ranchi | Pure vegetarian home style meals, daily or on-demand | View Menu / Order |
| non-veg-meals-ranchi | Non-Veg Meals in Ranchi | Fresh non-veg home style meals, hygienically prepared | View Menu / Order |
| daily-lunch-ranchi | Daily Lunch Service in Ranchi | Everyday lunch — individual or bulk | Explore Monthly Plans |
| daily-dinner-ranchi | Daily Dinner Service in Ranchi | Everyday dinner — individual or bulk | Explore Monthly Plans |
| construction-site-meals-ranchi | Construction Site Meal Supply in Ranchi | Bulk meals for labor sites, flexible timing and volume | Get Bulk Quote |
| hospital-meal-supply-ranchi | Hospital Meal Supply in Ranchi | Hygienic, timely meal supply for hospital staff/patients (non-medical diet) | Get Bulk Quote |
| worker-meal-supply-ranchi | Worker Meal Supply in Ranchi | Bulk daily meals for factories, warehouses, and worker canteens | Get Bulk Quote |
| event-catering-ranchi | Event Catering in Ranchi | Home style catering for gatherings, meetings, and small events | Get Bulk Quote |

**[PLACEHOLDER – NEEDS DATA]** for each page: 2–3 sentence expanded description in the "What This Includes" block once family confirms exact scope/capacity per segment.

---

## 6. LOCATION PAGES — TEMPLATE + ALL 15 PAGES

### 6.1 Universal Location Page Template (`location-template.php`)
This is the most important SEO structure on the site — it's what will let the business dominate hyperlocal search. Build it as one template driven by a data array (`area_name`, `nearby_landmarks`, `service_focus`) so all 15 (and 100+ future) pages stay consistent.

1. Hero: `Home Style Meals & Tiffin Service in [Area], Ranchi` + CTA
2. Local intro paragraph (unique per page, 80–120 words) — mentions the locality by name, nearby landmarks, and what's offered there **[PLACEHOLDER – NEEDS DATA: landmarks per area]**
3. Services Available in [Area] — checklist: Monthly Tiffin, Bulk Orders, Takeaway (grey out any not yet active in that area)
4. Why [Area] Residents Choose Student's Mess (reused trust content + locality-specific line)
5. Who We Serve in [Area] — relevant to that locality (e.g., near a college → students; near an industrial pocket → workers)
6. Mini Testimonial (from a customer in that area, once collected) **[PLACEHOLDER – NEEDS DATA]**
7. Nearby Areas We Also Serve (internal links to 3–4 adjacent location pages — this builds the internal linking web)
8. FAQ (1–2, hyperlocal: "Do you deliver monthly tiffin in [Area]?")
9. Final CTA: `Order in [Area] Today` → Call / WhatsApp

**Meta Title pattern:** `Home Style Meals & Tiffin in [Area], Ranchi | Student's Mess`
**Meta Description pattern:** `Fresh home style veg & non-veg meals, monthly tiffin & bulk orders in [Area], Ranchi. Trusted since 1999. Call or WhatsApp to order.`

Also add `LocalBusiness` schema per location page with the specific `areaServed` field set to that locality.

### 6.2 All 15 Location Pages (slug + H1)

| Slug | H1 |
|---|---|
| hindpiri | Home Style Meals & Tiffin Service in Hindpiri, Ranchi |
| upper-bazar | Home Style Meals & Tiffin Service in Upper Bazar, Ranchi |
| lalpur | Home Style Meals & Tiffin Service in Lalpur, Ranchi |
| doranda | Home Style Meals & Tiffin Service in Doranda, Ranchi |
| main-road | Home Style Meals & Tiffin Service on Main Road, Ranchi |
| kokar | Home Style Meals & Tiffin Service in Kokar, Ranchi |
| kanke | Home Style Meals & Tiffin Service in Kanke, Ranchi |
| morabadi | Home Style Meals & Tiffin Service in Morabadi, Ranchi |
| ratu-road | Home Style Meals & Tiffin Service on Ratu Road, Ranchi |
| harmu | Home Style Meals & Tiffin Service in Harmu, Ranchi |
| bariatu | Home Style Meals & Tiffin Service in Bariatu, Ranchi |
| kantatoli | Home Style Meals & Tiffin Service in Kantatoli, Ranchi |
| booty-more | Home Style Meals & Tiffin Service in Booty More, Ranchi |
| argora | Home Style Meals & Tiffin Service in Argora, Ranchi |
| lowadih | Home Style Meals & Tiffin Service in Lowadih, Ranchi |

**Note for scaling to 100+ pages later:** once this template + data-array pattern is built, adding a new locality is a one-row data addition — no new template code. Flag this explicitly to Antigravity as a requirement: *"Location pages must be generated from a single reusable template + structured data source, not hand-coded per page."*

---

## 7. INTERNAL LINKING STRATEGY (critical for SEO)

- Homepage → links to top 3–4 service pages, top 6–8 location pages, About, Monthly Plans, Bulk Orders
- Every Service page → links to 3–5 relevant Location pages ("Available in: Hindpiri, Kanke, Doranda...")
- Every Location page → links to 3–4 relevant Service pages + 3–4 neighboring Location pages
- Every Blog post → links to at least 1 Service page and 1 Location page (contextually, not forced)
- Breadcrumbs on every inner page: `Home > Services > Office Lunch Ranchi` or `Home > Areas > Kanke`
- Footer sitewide links to top service + location pages to reinforce crawl depth

This creates the hub-and-spoke structure: Homepage (hub) → Category hubs (Services, Areas) → individual pages (spokes), with cross-links binding spokes together — the standard architecture for dominating local SEO at scale.

---

## 8. BLOG ARCHITECTURE

**URL:** `/blog` (index with category filter chips), `/blog/[slug]` (post)

### 8.1 Categories (from master doc)
Healthy Meals · Monthly Meal Guides · Student Food · Office Lunch · Corporate Catering · Bulk Food · Affordable Meals · Home Style Food · Nutrition · Local Food Guides

### 8.2 Blog Post Template
1. Featured image
2. H1 title
3. Author + date + category tag
4. Intro (2–3 sentences, states what reader will learn)
5. Body with H2/H3 subheadings (scannable, 800–1200 words target)
6. Inline CTA block mid-article (e.g., "Looking for a monthly plan? See our plans →")
7. Related Service/Location page links (2–3, contextual)
8. Author bio / business blurb footer
9. Related posts grid (3 posts)

### 8.3 Starter Post Ideas (to seed the blog, one per category)
1. `5 Signs You Need a Monthly Tiffin Plan in Ranchi` (Monthly Meal Guides)
2. `Home Style Food vs Restaurant Food: What's the Real Difference?` (Home Style Food)
3. `How Bulk Meal Catering Works for Offices in Ranchi` (Corporate Catering / Office Lunch)
4. `A Student's Guide to Eating Well Away From Home` (Student Food)
5. `What Makes a Meal "Healthy" — A Home Cook's Perspective` (Healthy Meals / Nutrition)
6. `Affordable Meal Plans in Ranchi: What to Expect for Your Budget` (Affordable Meals)
7. `Bulk Food Orders in Ranchi: A Guide for PG & Hostel Owners` (Bulk Food)
8. `Best Areas in Ranchi for Home Style Tiffin Delivery` (Local Food Guides)

*(Write these once site launches — SEO content should roll out post-launch, roughly 2–4 posts/month, not all at once.)*

---

## 9. CONVERSION & LEAD CAPTURE SYSTEM

### 9.1 CTA Hierarchy (site-wide consistency)
- **Primary CTA (bulk-focused pages):** `Request Bulk Quote`
- **Primary CTA (individual-focused pages):** `Explore Monthly Plans` or `Order Takeaway`
- **Universal fallback CTA:** `WhatsApp Us` / `Call Now` — always available even if forms fail

### 9.2 Forms Required
1. Bulk Quote Request Form (`/bulk-orders#quote-form`) — highest priority, most detailed fields
2. General Contact Form (`/contact`)
3. Monthly Plan Enquiry (can be a simplified version of the contact form, pre-filled subject = "Monthly Plan")

All forms → submit to a lightweight PHP mail handler (or DB table for the future admin panel) → redirect to `/thank-you` → `/thank-you` should have a WhatsApp fallback ("Prefer instant reply? Message us on WhatsApp") in case email fails.

### 9.3 Lead Management (future roadmap item, flag for later phase)
Simple admin panel table logging: Name, Phone, Type of Enquiry, Source Page, Date, Status (New/Contacted/Converted). Not required for v1 launch but the form handler should write to a DB table from day one so this can be added without re-architecting.

---

## 10. TECHNICAL BUILD NOTES FOR ANTIGRAVITY

- **Stack:** PHP (no framework needed for v1 — plain PHP with includes/templates is fine; consider a micro-router only if page count grows past ~50), MySQL for menu/testimonials/leads data, shared-hosting compatible.
- **Templating:** Use PHP includes for header/footer/floating CTAs. Build `service-template.php` and `location-template.php` as described above, each driven by a PHP array or a small `services.json` / `areas.json` data file — do NOT hand-code 12 separate service files or 15 separate location files.
- **Today's Menu:** driven by an editable JSON/CSV or a simple `menu` DB table, not hardcoded HTML, so the family can update it easily even before a full admin panel exists.
- **Mobile-first:** build and test mobile layout first; sticky bottom CTA bar (Call + WhatsApp) is mandatory on mobile.
- **Performance:** compress all images (WebP with JPG fallback), lazy-load gallery/testimonial images, aim for Core Web Vitals pass (LCP < 2.5s, CLS < 0.1).
- **Schema:** implement `LocalBusiness`, `Restaurant`, `BreadcrumbList`, `FAQPage`, `AggregateRating`/`Review` as described in Section 2.4 and 6.1 — use JSON-LD in `<head>`, injected via the shared header include with page-specific overrides.
- **Forms:** server-side validation + honeypot field for spam protection (no CAPTCHA needed at this scale).
- **Analytics:** Google Analytics 4 + Google Search Console verified from day one; Google Tag Manager recommended so WhatsApp/Call click tracking can be added without code changes.
- **Sitemap:** auto-generated `sitemap.xml` that includes every service and location page — critical since this site is designed to scale to 100+ SEO pages.

---

## 11. WHAT'S STILL NEEDED FROM THE FAMILY (before/while Antigravity builds)

- [ ] Exact monthly plan pricing (veg/non-veg/combo)
- [ ] Sample weekly menu for monthly plans
- [ ] Business hours, exact address, Google Maps pin
- [ ] Founding story details for About page
- [ ] Photos: hero thali shot, kitchen, food items, team, past bulk orders/events
- [ ] Real customer testimonials (names + locality + quote, with permission)
- [ ] WhatsApp Business number
- [ ] Delivery radius / minimum bulk order quantity / advance notice policy
- [ ] Logo (per the brand identity brief in the master doc)

---

## 12. LAUNCH PAGE PRIORITY (build order for Antigravity)

1. Homepage
2. Header/Footer/floating CTA global components + schema base
3. Bulk Orders (highest revenue priority) + quote form
4. Monthly Meal Plans
5. Takeaway
6. About Us
7. Contact
8. Service page template → populate all 12
9. Location page template → populate all 15
10. Today's Menu, Gallery, Reviews
11. Blog (structure first, content rolls out post-launch)

# Implementation Plan — Mihir Chandratre Pharmaceutical Analysis Portfolio

> Source of truth: [`PRD.md`](./PRD.md)  
> Goal: Build a complete, PRD-aligned research portfolio with **zero missed sections**, then deploy free on GitHub Pages.  
> Status: **Phase F complete — live on GitHub Pages**  
> GitHub: **MihirChandratre08** → repo `MihirChandratre08.github.io` → https://MihirChandratre08.github.io/

---

## Locked Decisions (User Confirmed)

| # | Topic | Decision |
|---|--------|----------|
| 1 | Profile photo | Use [`photo/mihir.png`](./photo/mihir.png) → copy/optimize to `public/images/profile.webp` |
| 2 | CV PDF | Use [`Resume/MIHIR CHANDRATRE Resume.pdf`](./Resume/MIHIR%20CHANDRATRE%20Resume.pdf) → copy to `public/Mihir-Chandratre-CV.pdf` |
| 3 | LinkedIn | `https://www.linkedin.com/in/mihir-chandratre` |
| 4 | GitHub username / repo | **MihirChandratre08** / `MihirChandratre08.github.io` (`base: '/'`) |
| 5 | Research detail UX | **Full-screen page-like modal** (chosen for best look + GitHub Pages simplicity) |
| 6 | Accent color | **Scientific teal** on white/off-white + deep navy text (PRD §2) |
| 7 | Earlier education | **Collapsed “Earlier Education”** block for SSC / HSC (from resume) |
| 8 | Research Mode | **Keep** (PRD §25) |
| 9 | Featured research copy (8 parts) | **Draft from PRD + resume**; Mihir edits later if needed |
| 10 | Phone on site | **Show** `+91-8554094937` (as PRD §23) |
| — | Public location | **Latur, Maharashtra** (portfolio display; no full postal address) |

### Why full-screen modal (Decision 5)

- Feels immersive and research-focused (better than a small dialog)
- Fits all 8 numbered sections without leaving the SPA scroll context
- Avoids GitHub Pages `base` / client-router edge cases for v1
- Escape / close button / focus trap = strong a11y
- Can upgrade to a dedicated route later if shareable URLs are needed

### Accent tokens (Decision 6)

```css
--color-accent: #0b9b7a;      /* A+C hybrid teal-emerald */
--color-accent-soft: #d1fae5;
--color-text: #111827;        /* graphite */
--color-bg: #f4f7f6;
--color-deep: #0c1614;
```

---

## 0. Positioning & Product Definition (PRD §1, §39, §40)

| Item | Decision (from PRD) |
|------|---------------------|
| Product name | Mihir Chandratre — Pharmaceutical Analysis Portfolio |
| Identity | **Pharmaceutical Analysis Researcher** — not “Pharmacist / Student / generic Researcher” |
| Story arc | Who → Specialize → Research → Techniques → Publish/Achieve → Opportunity → Contact |
| Audience | Pharma R&D recruiters, Analytical R&D managers, QC/AD scientists, CRO/CDMO, PhD/JRF supervisors, collaborators |
| First 30–60s must communicate | Identity, specialization, R&D capabilities, featured research, HPLC expertise, computational skills, publication, education, contact, CV download |

**Success criteria:** A recruiter understands Mihir’s research identity without reading the PDF CV.

---

## 1. Technology Stack (PRD §3, §30, §31)

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | React + Vite | SPA, static build |
| Styling | Tailwind CSS | Design tokens via CSS variables |
| Motion | Framer Motion | Subtle only; respect `prefers-reduced-motion` |
| Icons | Lucide React | No emoji-heavy UI |
| Data | `src/data/portfolio.js` | Single source of content |
| Backend | None | Static site only |
| Hosting | GitHub Pages | Free; Actions deploy |
| Repo name | `MihirChandratre08.github.io` | Live URL: https://MihirChandratre08.github.io/ |

### Install / bootstrap

```bash
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install framer-motion lucide-react
```

### Vite + GitHub Pages config

- `base: '/'` for `username.github.io` user site  
- OR `base: '/repo-name/'` for project site  
- Build output: `dist/`  
- Deploy via GitHub Actions (workflow added: `.github/workflows/deploy.yml`)

---

## 2. Design System (PRD §2, §26)

### Visual direction

- Keywords: **Minimal · Scientific · Premium · Clean · Technical · Research-oriented**
- Background: soft off-white + subtle chromatography-inspired lines / soft gradient
- Typography: deep navy / charcoal
- Accent: **scientific teal** (locked)
- Thin borders, generous whitespace
- Glass/soft cards **sparingly**
- Motifs: HPLC chromatogram curves, molecular structures, thin diagram lines
- Photo: small circular/rounded portrait from `photo/mihir.png` (formal blazer headshot — complements clean scientific UI)

### Explicitly avoid

- Neon / gaming animations / spinning molecules / cursor trails / loading splash screens
- Huge skill % bars (“90% HPLC”)
- Generic stock lab photos
- Overloaded text blocks
- Excessive multi-layer gradients
- Purple-on-white / cream-terracotta AI-default looks

### Typography

- Expressive, non-default fonts (avoid Inter/Roboto/Arial/system as primary)
- Pair: **Source Serif 4** (display) + **IBM Plex Sans** (body) — finalized in Phase A
- Limit font families / weights for performance (PRD §30)

### Motion rules (PRD §26, §29)

| Interaction | Behavior |
|-------------|----------|
| Page load | Name fades / slides in |
| Scroll | Cards: opacity 0→1, translateY 20→0 |
| Project hover | Lift 3–5px, border highlight, arrow → |
| Navbar | Sticky + `backdrop-filter: blur()` |
| Research Mode | Subtle theme / accent shift |
| Reduced motion | Disable via `@media (prefers-reduced-motion: reduce)` |

Ship **at least 2–3 intentional motions** (hero entrance, scroll reveals, project hover / Research Mode transition).

---

## 3. Information Architecture & Page Flow (PRD §4, §38)

### Single-page scroll order (canonical)

1. Sticky Navbar (+ Download CV) + Research Mode control
2. Hero
3. Hero Micro-Statistics
4. About
5. What I Work With (Expertise — Analytical & Instrumental)
6. Regulatory & Quality
7. Computational & Research Tools
8. Featured Research (BSA Nanoparticles) → opens Research Detail modal
9. Analytical Projects (RP-HPLC + Polyherbal)
10. Research Timeline
11. Education (Academic Journey + collapsed Earlier Education)
12. Publication
13. Certifications (horizontal scroll)
14. Achievements (Milestones)
15. Conferences & Scientific Activities
16. Research Interests
17. Currently Exploring
18. Contact
19. Footer

### Nav labels (exact)

```
MIHIR CHANDRATRE | About | Research | Expertise | Education | Publication | Achievements | Contact | [Download CV]
```

Mobile: hamburger → slide-down menu.

---

## 4. Section Specs — Complete Checklist (PRD §5–§25, §38)

Every item below is **required**.

### 4.1 Navbar (PRD §4)

- [ ] Sticky top bar with brand `MIHIR CHANDRATRE`
- [ ] Desktop links: About, Research, Expertise, Education, Publication, Achievements, Contact
- [ ] Right CTA: Download CV → `/Mihir-Chandratre-CV.pdf`
- [ ] Mobile hamburger + slide-down nav
- [ ] Backdrop blur on scroll
- [ ] Keyboard accessible; visible focus states
- [ ] Active section highlight (scroll spy recommended)

### 4.2 Hero (PRD §5)

- [ ] H1: **Mihir Chandratre**
- [ ] Subtitle: **M.S. (Pharm.) Pharmaceutical Analysis**
- [ ] Positioning statement (PRD researcher copy)
- [ ] Tags: Analytical R&D · HPLC Method Development · Method Validation · Pharmaceutical Research · Drug Analysis
- [ ] CTAs: Explore My Research → · Download CV ↓ · LinkedIn ↗ (`https://www.linkedin.com/in/mihir-chandratre`)
- [ ] Scientific visual (HPLC chromatogram + molecular motif) — not photo-dominant
- [ ] Small circular portrait from `photo/mihir.png`

### 4.3 Hero Micro-Statistics (PRD §6)

| Stat | Label |
|------|-------|
| 9.48 | CGPA |
| M.S. Pharm. | Pharmaceutical Analysis |
| HPLC | Method Development |
| 1 | Published Research Paper |

### 4.4 About (PRD §7)

- [ ] Heading: **Analytical Science meets Research**
- [ ] Natural researcher profile (PRD copy; align tone with resume career objective, do not paste CV verbatim)

### 4.5 What I Work With — Analytical & Instrumental (PRD §8 + resume)

1. **HPLC** — RP-HPLC, Gradient optimization, Method validation, Stability-indicating methods, Analytical troubleshooting  
2. **Spectroscopy** — UV-Visible, FTIR, NMR, TLC (+ Column Chromatography from resume)  
3. **Protein & Peptide Analysis** — Protein/peptide analysis, SPPS, SPE  

### 4.6 Regulatory & Quality (PRD §9)

- [ ] Heading: **Analytical Science within a Quality Framework**
- [ ] Guidelines: ICH · USFDA · cGMP · GLP · GDP · 21 CFR
- [ ] Practices: SOP Drafting · CAPA · Deviation · Root Cause Analysis · Regulatory Compliance

### 4.7 Computational & Research Tools (PRD §10 + resume)

| Group | Tools |
|-------|-------|
| Molecular Modelling | AutoDock, MGL Tools, BIOVIA Discovery Studio, PyMOL, Open Babel |
| Chemical Drawing / Data | ChemDraw 16.0, GaussView 6.0.16, OriginPro |
| Chromatography | Chromeleon 7.3.2 |
| Productivity | MS Office |

### 4.8 Featured Research (PRD §11 + resume)

- [ ] Large featured card
- [ ] Title: Formulation and characterization of Niclosamide and Ribociclib dual-drug loaded BSA nanoparticles decorated with PD-L1 binding peptide for targeting overexpressed protein in breast cancer
- [ ] Scientific illustration (Niclosamide / Ribociclib → BSA NP → PD-L1 peptide)
- [ ] Tags: Nanoparticle Drug Delivery, Pharmaceutical Analysis, HPLC, Molecular Docking, Targeted Drug Delivery, Cancer Research, peptide synthesis
- [ ] CTA: **Explore Research →** opens full-screen modal

### 4.9 Project Detail — Full-Screen Modal (PRD §12) ✅ LOCKED

Structure (numbered):

| # | Section | Content source |
|---|--------|----------------|
| 01 | Research Question | Draft from PRD + resume project line (dual-drug BSA NP + PD-L1 targeting in breast cancer) |
| 02 | Scientific Rationale | Draft — combination therapy + targeted delivery rationale |
| 03 | Formulation Strategy | Draft — BSA NP, dual loading, peptide decoration |
| 04 | Analytical Method Development | Draft — HPLC / characterization methods (align with analysis skills) |
| 05 | Characterization | Draft — nanoparticle / pharmaceutical characterization |
| 06 | Computational Investigation | Draft — molecular docking / modelling tools from resume |
| 07 | Key Findings | Draft — placeholder honest framing if results not fully public; user can refine |
| 08 | Research Outcome | Draft — contribution to targeted breast cancer therapy research |

Modal UX:

- Full-viewport overlay, page-like reading layout
- Close (X), Escape, backdrop click (optional), focus trap
- Smooth open/close via Framer Motion
- Scrollable body for long scientific text

### 4.10 Analytical Method Development Project (PRD §13 + resume)

- [ ] Stability-indicating RP-HPLC method for degradation studies
- [ ] Chromatogram visual
- [ ] Tags: RP-HPLC, Method Development, Method Validation, Forced Degradation, Stability Indicating, Analytical R&D

### 4.11 Third Project (PRD §14 + resume)

- [ ] Polyherbal Anti-Acne Facewash (smaller card)
- [ ] Flow: Formulation → Evaluation → Characterization → Product Performance

### 4.12 Research Timeline (PRD §15)

- [ ] Horizontal desktop / vertical mobile
- [ ] 2021 B.Pharm → 2024 M.S. Pharmaceutical Analysis → 2025 Research / Workshop / Publication → 2026 M.S. final phase

### 4.13 Education (PRD §16 + resume) ✅ COLLAPSED EARLIER EDUCATION

**Primary (always visible)**

| Period | Degree | Institute | Result |
|--------|--------|-----------|--------|
| 2024–2026 | M.S. (Pharm.) Pharmaceutical Analysis | NIPER Kolkata | CGPA 9.48/10 |
| 2021–2024 | Bachelor of Pharmacy | Channabasweshwar Pharmacy College, Latur | 74.08% |
| 2019–2021 | Diploma in Pharmacy | Dayanand College of Pharmacy, Latur | 97.60% |

**Collapsed — “Earlier Education”** (from resume; expand/collapse)

| Period | Credential | Board / School | Result |
|--------|------------|----------------|--------|
| 2018–2019 | HSC | Maharashtra State Board / Shrikishan Somani School, Latur | Verify % from resume PDF at build |
| 2016–2017 | SSC | Maharashtra State Board | Verify % from resume PDF at build |

Do **not** show SSC/HSC in the primary Academic Journey list.

### 4.14 Publication (PRD §17 + resume)

- [ ] Title: Exploring lipidomics in biomarker discovery
- [ ] Authors: M. Malarvannan, S. Bhanu Teja Naik, Navratan Soni, Chandratre Mihir Mandar, David Paul
- [ ] Clinica Chimica Acta — 2025 · IF 2.9 · Article 120698
- [ ] DOI button → `https://doi.org/10.1016/j.cca.2025.120698`

### 4.15 Certifications (PRD §18 + resume)

Horizontal scroll:

1. ADMET Profiling and Drug-Likeness Analysis  
2. Docking, Homology Modelling and Active Site Prediction  
3. Drug Metabolism and Pharmacokinetics (DMPK)  
4. LC-MS/MS Techniques — Uyirgene International  

### 4.16 Achievements (PRD §19 + resume)

1. 1st in D.Pharm overall — Latur district  
2. GPAT 2024 Qualified  
3. NIPER 2024 Qualified + NIPER PG Fellowship (Ministry of Pharmaceuticals, GoI)

### 4.17 Conferences & Scientific Activities (PRD §20 + resume)

- International Workshop — Advanced Spectroscopic and Non-Spectroscopic Methods… (Oct 2025, 5-day)
- IPA Kerala — Novel Drug Delivery Systems Edition 2025 (Discussion Group)

### 4.18 Research Interests (PRD §21)

Analytical Method Development · Pharmaceutical Research · Computational Analysis (tree layout)

### 4.19 Currently Exploring (PRD §22)

Advanced HPLC → Analytical QbD → Green Analytical Chemistry → LC-MS/MS → Pharmaceutical Nanotechnology → Computational Drug Discovery

### 4.20 Contact (PRD §23) ✅ LOCKED

- Heading: Let’s discuss pharmaceutical research.
- Buttons: Email Me · LinkedIn · Download CV
- Email: `chandratremihir@gmail.com`
- Phone: `+91-8554094937` (**shown**)
- Location: **Latur, Maharashtra** (no full postal address)

### 4.21 Footer (PRD §24)

```
MIHIR CHANDRATRE
M.S. (Pharm.) Pharmaceutical Analysis
Analytical R&D · Pharmaceutical Research · HPLC
LinkedIn | Email | CV
© 2026 Mihir Chandratre
```

### 4.22 Research Mode (PRD §25) ✅ KEEP

- Toggle ON → subtle scientific mode highlighting:
  - HPLC — Method Development
  - Drug Discovery — Molecular Docking
  - Nanotechnology — BSA Nanoparticles
  - Analytical Chemistry — Validation
- Persist preference in `localStorage` (nice-to-have)

---

## 5. Data Architecture (PRD §31, §32)

**Rule:** Do not hard-code content inside presentational components.

### `src/data/portfolio.js` exports

```text
profile, hero, stats, about,
analyticalSkills, regulatory, computationalTools,
projects, researchDetailSections,
timeline, education, earlierEducation,
publication, certifications, achievements, conferences,
researchInterests, currentlyExploring,
contact, social, seo
```

---

## 6. Project File Structure (PRD §31)

```text
portfolio/
├── photo/
│   └── mihir.png                          # source photo (user provided)
├── Resume/
│   └── MIHIR CHANDRATRE Resume.pdf        # source CV (user provided)
├── public/
│   ├── images/
│   │   ├── profile.webp                   # from photo/mihir.png
│   │   ├── research/
│   │   │   ├── bsa-nanoparticle.svg
│   │   │   ├── chromatogram.svg
│   │   │   └── facewash-flow.svg
│   │   └── og-image.webp
│   ├── Mihir-Chandratre-CV.pdf            # from Resume/...
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Expertise.jsx
│   │   ├── Research.jsx
│   │   ├── ResearchDetailModal.jsx        # LOCKED: full-screen modal
│   │   ├── Timeline.jsx
│   │   ├── Education.jsx                  # includes collapsed Earlier Education
│   │   ├── Publication.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Conferences.jsx
│   │   ├── ResearchInterests.jsx
│   │   ├── CurrentlyExploring.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ResearchModeToggle.jsx
│   │   └── ui/
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   ├── context/                           # ResearchModeProvider
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml           # after GitHub username provided
├── package.json
├── vite.config.js
├── index.html
├── PRD.md
├── plan.md
└── README.md
```

---

## 7. SEO (PRD §28)

| Field | Value |
|-------|-------|
| `<title>` | Mihir Chandratre \| Pharmaceutical Analysis Researcher |
| Meta description | Mihir Chandratre — M.S. (Pharm.) Pharmaceutical Analysis researcher specializing in HPLC method development, analytical method validation, pharmaceutical research and computational drug discovery. |
| Keywords | Mihir Chandratre, Pharmaceutical Analysis, Analytical R&D, HPLC Method Development, HPLC Method Validation, Pharmaceutical Researcher, NIPER Kolkata, Analytical Scientist, Pharma R&D |
| Open Graph | Title + description + `og-image.webp` |
| Favicon | Scientific / monogram SVG |

---

## 8. Accessibility (PRD §29)

- [ ] Semantic HTML; one H1 in hero
- [ ] Keyboard nav for nav, modal, Research Mode, cert carousel
- [ ] Visible focus rings; sufficient contrast
- [ ] Alt text for profile + diagrams
- [ ] `prefers-reduced-motion`
- [ ] Modal: focus trap + Escape + return focus to trigger

---

## 9. Responsive Breakpoints (PRD §27)

| Device | Target |
|--------|--------|
| Desktop | 1440×900, 1920×1080 |
| Laptop | 1366×768 |
| Tablet | 768×1024 |
| Mobile | 390×844, 360×800 |

Mobile: single-column hero, stacked research cards, vertical timeline, hamburger nav, full-width CTAs.

---

## 10. Performance (PRD §30)

| Metric | Target |
|--------|--------|
| First load | < 2–3 s |
| Lighthouse Performance | > 90 |
| Images | WebP/SVG optimized (`mihir.png` → webp) |
| Fonts | Limited |
| Backend | None |

---

## 11. Assets Status

| Asset | Status | Path |
|-------|--------|------|
| Profile photo | ✅ Copied + WebP | `public/images/profile.webp` (+ `.png` fallback) |
| CV PDF | ✅ Copied | `public/Mihir-Chandratre-CV.pdf` |
| LinkedIn | ✅ Wired | `https://www.linkedin.com/in/mihir-chandratre` |
| GitHub username | ✅ Locked | `MihirChandratre08` |
| Deploy workflow | ✅ Added | `.github/workflows/deploy.yml` |
| Research SVGs | ✅ Phase C | `public/images/research/` + React diagrams |

| OG image | ⏳ Phase E | 1200×630 (temp: profile.webp in meta) |
| Favicon | ✅ Added | `public/favicon.svg` (HPLC motif + MC) |

---

## 12. Hosting & Cost (PRD §33–§37)

| Item | Cost |
|------|------|
| GitHub Pages | ₹0 |
| HTTPS | ₹0 |
| Custom domain | Phase 2 optional |

### Deploy (Phase F)

1. Create GitHub repo: `MihirChandratre08.github.io`
2. Vite `base` already set to `'/'`
3. Push `main` — Actions workflow deploys `dist/`
4. In repo Settings → Pages → Source: GitHub Actions
5. Verify https://MihirChandratre08.github.io/

---

## 13. Implementation Process (Updated)

### Process rules

1. Follow PRD + this plan — **do not skip sections**
2. Content lives in `portfolio.js`; UI stays presentational
3. Copy assets into `public/` before wiring Download CV / hero photo
4. Draft research modal text from PRD + resume; keep tone scientific and honest
5. GitHub username locked: **MihirChandratre08** — create repo + push in **Phase F**
6. After each phase: quick visual check on desktop + mobile width
7. Mark phase checkboxes in this file when complete

### Progress log

| Date | Phase | Result |
|------|-------|--------|
| 2026-08-11 | A | ✅ Foundation complete — build passes |
| 2026-08-11 | B | ✅ Hero, Stats, About, Expertise complete |
| 2026-08-11 | C | ✅ Research, modal, projects, timeline complete |
| 2026-08-11 | D | ✅ Education through Currently Exploring complete |
| 2026-08-11 | E | ✅ Contact, Research Mode, README complete |
| 2026-08-11 | F | ✅ Repo live + Pages deploy succeeded |

### Phase A — Foundation `[x]`

1. [x] Scaffold Vite + React + Tailwind + Framer Motion + Lucide  
2. [x] CSS variables (teal accent), fonts (Source Serif 4 + IBM Plex Sans), global layout  
3. [x] Create `src/data/portfolio.js` with locked profile/contact/social + section data  
4. [x] Copy photo → `public/images/profile.webp` (+ png fallback)  
5. [x] Copy CV → `public/Mihir-Chandratre-CV.pdf`  
6. [x] SEO tags in `index.html` (title, description, keywords, OG, Twitter, canonical)  
7. [x] Shell: `App.jsx` hero shell + section placeholders + `Navbar` + `Footer`  
8. [x] Vite `base: '/'` + GitHub Actions deploy workflow  
9. [x] `npm run build` verified

### Phase B — Core narrative `[x]`

1. [x] Hero (portrait + scientific HPLC visual + tags + CTAs + LinkedIn)  
2. [x] Micro-stats (9.48 CGPA · M.S. Pharm. · HPLC · 1 paper)  
3. [x] About — “Analytical Science meets Research”  
4. [x] Expertise: Analytical cards + Regulatory chips + Computational tool groups  
5. [x] Subtle Framer Motion entrance/scroll reveals + `prefers-reduced-motion`  
6. [x] `npm run build` verified

### Phase C — Research identity `[x]`

1. [x] Featured BSA nanoparticle card + SVG illustration  
2. [x] `ResearchDetailModal` — full-screen, 8 drafted sections, Escape/focus trap/return focus  
3. [x] RP-HPLC card + chromatogram SVG  
4. [x] Polyherbal smaller card + flow SVG  
5. [x] Research Timeline (vertical mobile / horizontal desktop)  
6. [x] Assets also saved under `public/images/research/`  
7. [x] `npm run build` verified

### Phase D — Credentials `[x]`

1. [x] Education + collapsed Earlier Education (SSC/HSC)  
2. [x] Publication + DOI link  
3. [x] Certifications horizontal scroll  
4. [x] Achievements milestones  
5. [x] Conferences — Beyond the Laboratory  
6. [x] Research Interests + Currently Exploring  
7. [x] `npm run build` verified

### Phase E — Convert & polish `[x]`

1. [x] Contact (email, phone shown, LinkedIn, CV, location Latur)  
2. [x] Research Mode toggle + subtle theme shift (`localStorage`)  
3. [x] Motion + reduced-motion already wired across sections  
4. [x] Responsive patterns (mobile CTAs, timeline, cert scroll)  
5. [x] Modal a11y (focus trap / Escape) from Phase C  
6. [ ] Lighthouse audit after deploy (Phase F)  
7. [x] README  

### Phase F — Deploy `[x]`

1. [x] Create GitHub repo `MihirChandratre08.github.io`  
2. [x] Vite `base: '/'` set  
3. [x] Actions workflow present  
4. [x] Push `main` and verify live site — https://MihirChandratre08.github.io/  
5. [ ] Optional custom domain later

---

## 14. Testing & Acceptance Checklist

### Content

- [ ] Every PRD §5–§25 present  
- [ ] Photo + CV wired  
- [ ] LinkedIn correct  
- [ ] Phone shown; location = Latur, Maharashtra; no full postal address  
- [ ] Earlier Education collapsed  
- [ ] Research Mode works  
- [ ] Research modal 8 sections drafted from PRD + resume  
- [ ] DOI + CV download work  

### Quality

- [ ] Scientific/premium look (not generic dev portfolio)  
- [ ] No skill % bars / neon / gaming motion  
- [ ] Featured research visually dominant  
- [ ] Data-driven architecture  
- [ ] Responsive + a11y + perf + SEO targets met  

### Story test (PRD §39)

Who → Specialize → Researched → Techniques → Published/Achieved → Opportunity → Contact.

---

## 15. Out of Scope (Phase 1)

- Backend / CMS / contact form server  
- Custom paid domain  
- Blog  
- Dedicated research URL route (modal first; route optional later)  
- Deploy before GitHub username is provided  

---

## 16. Remaining Blocker

| Item | Owner | When |
|------|-------|------|
| Optional custom domain | Mihir | Phase 2 (optional) |
| Lighthouse audit on live URL | Mihir / agent | Post-deploy polish |

**Live site:** https://MihirChandratre08.github.io/  
**Repo:** https://github.com/MihirChandratre08/MihirChandratre08.github.io

---

## 17. Traceability Matrix — PRD → Plan

| PRD § | Topic | Plan coverage |
|------:|-------|---------------|
| 1 | Product overview / audience | §0 |
| 2 | Design direction | §2 + Locked accent |
| 3 | Tech stack | §1 |
| 4 | Navigation IA | §3, §4.1 |
| 5 | Hero | §4.2 |
| 6 | Micro-stats | §4.3 |
| 7 | About | §4.4 |
| 8 | What I Work With | §4.5 |
| 9 | Regulatory & Quality | §4.6 |
| 10 | Computational tools | §4.7 |
| 11 | Featured research | §4.8 |
| 12 | Project detail | §4.9 (modal locked) |
| 13 | RP-HPLC project | §4.10 |
| 14 | Polyherbal project | §4.11 |
| 15 | Research timeline | §4.12 |
| 16 | Education | §4.13 (+ collapsed) |
| 17 | Publication | §4.14 |
| 18 | Certifications | §4.15 |
| 19 | Achievements | §4.16 |
| 20 | Conferences | §4.17 |
| 21 | Research interests | §4.18 |
| 22 | Currently exploring | §4.19 |
| 23 | Contact | §4.20 |
| 24 | Footer | §4.21 |
| 25 | Research Mode | §4.22 (keep) |
| 26 | Interaction design | §2 Motion |
| 27 | Responsive | §9 |
| 28 | SEO | §7 |
| 29 | Accessibility | §8 |
| 30 | Performance | §10 |
| 31 | Project structure | §6 |
| 32 | Data architecture | §5 |
| 33–37 | Hosting / cost / domain | §12 |
| 38 | Final website flow | §3 |
| 39–40 | Story & positioning | §0, §14 |

**Coverage: 40/40 PRD sections mapped — nothing omitted.**

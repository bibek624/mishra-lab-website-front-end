## Research Lab Website – Product & Design Plan

### Goals
- **Showcase** research areas, people, publications, news, and opportunities in a polished, modern way.
- **Attract** students, collaborators, and sponsors; increase visibility and trust.
- **Sustainability**: easy to update (content-driven), accessible, fast, and mobile-first.

### Audience
- Prospective students and postdocs
- Collaborators and industry partners
- Funding agencies and general academic audience

### Tech Stack
- **Framework**: Vue 3 (Vite)
- **Styling**: Tailwind CSS (with design tokens and dark mode)
- **Icons**: Heroicons
- **Fonts**: Google Fonts (high legibility + academic tone)
- **Optional**: Lightweight CMS later (e.g., Git-based JSON/Markdown, or headless)

---

## Information Architecture (IA) & Sitemap
- **Home** (`/`): Hero, mission highlight, research highlights, featured publication, sponsor logos.
- **About** (`/about`): Mission, story, values; optional PI bio + affiliations.
- **Research** (`/research`): Areas overview; detail pages (`/research/:slug`) per project/theme.
- **Publications** (`/publications`): Filterable/sortable by year/type; BibTeX/DOI/PDF; featured works.
- **People** (`/people`): PI and team (PhD, MS, UG, Alumni); filters and cards.
- **Contact** (`/contact`): Address, email, map, socials.

Global: Header (logo, nav, search, theme toggle), Footer (address, quick links, sponsors, copyright).

---

## Visual Direction

### Brand Personality
- **Modern, precise, approachable**; conveys credibility and cutting-edge research without feeling corporate.

### Typography
- **Headings (serif)**: "Spectral" (variable), fallbacks: "Source Serif 4", Georgia, serif.
- **Body/UI (sans)**: "Inter" (variable), fallbacks: "SF Pro Text", Roboto, Arial, sans-serif.
- **Monospace (optional)**: "JetBrains Mono" for code/data snippets.

Type scale (base 16px; comfortable reading):
- H1: 40–48px; H2: 32–36px; H3: 24–28px; body: 16–18px; small: 14px.
- Line-height: 1.35–1.5 for headings, 1.6–1.75 for body.

### Color System (Light/Dark)
Balanced, eye-pleasing, academic-forward neutrals with cool primary accents.

- **Neutrals (Slate)**
  - 50 #F8FAFC; 100 #F1F5F9; 200 #E2E8F0; 300 #CBD5E1; 400 #94A3B8; 500 #64748B; 600 #475569; 700 #334155; 800 #1E293B; 900 #0F172A
- **Primary (Indigo)**
  - 50 #EEF2FF; 100 #E0E7FF; 200 #C7D2FE; 300 #A5B4FC; 400 #818CF8; 500 #6366F1; 600 #4F46E5; 700 #4338CA; 800 #3730A3; 900 #312E81; 950 #1E1B4B
- **Secondary (Cyan)**
  - 50 #ECFEFF; 100 #CFFAFE; 200 #A5F3FC; 300 #67E8F9; 400 #22D3EE; 500 #06B6D4; 600 #0891B2; 700 #0E7490; 800 #155E75; 900 #164E63
- **Accent (Amber, for highlights)**
  - 50 #FFFBEB; 100 #FEF3C7; 200 #FDE68A; 300 #FCD34D; 400 #FBBF24; 500 #F59E0B; 600 #D97706; 700 #B45309; 800 #92400E; 900 #78350F

Semantic tokens (light):
- **Background**: Slate 50 (#F8FAFC)
- **Surface**: White (#FFFFFF) or Slate 50
- **Text Primary**: Slate 800 (#1E293B)
- **Text Secondary**: Slate 600 (#475569)
- **Border**: Slate 200 (#E2E8F0)
- **Brand**: Indigo 600 (#4F46E5)
- **Interactive Hover**: Indigo 700 (#4338CA)
- **Highlight**: Cyan 500 (#06B6D4)

Semantic tokens (dark):
- **Background**: Slate 900 (#0F172A)
- **Surface**: Slate 800 (#1E293B)
- **Text Primary**: Slate 100 (#F1F5F9)
- **Text Secondary**: Slate 300 (#CBD5E1)
- **Border**: Slate 700 (#334155)
- **Brand**: Indigo 400 (#818CF8)
- **Interactive Hover**: Indigo 300 (#A5B4FC)
- **Highlight**: Cyan 400 (#22D3EE)

### Spacing & Layout
- 4px base grid (Tailwind spacing scale). Generous white space.
- Card-based layouts for research areas, people, and publications.
- Max content width ~1120–1200px; side padding 16–24px on mobile, 32–40px on desktop.
- Max content width ~1152–1440px; generous gutters on desktop using a shared `page-container` utility.

### Motion & Interaction
- Subtle micro-interactions (200–250ms) on hover/focus.
- Reduced motion preference honored.

---

## Theming Strategy (Light/Dark)
- Use Tailwind `dark` variant with a **class strategy** (`html` carries `class="dark"`).
- Default to system preference (`prefers-color-scheme`), with a theme toggle that persists to `localStorage`.
- Expose theme tokens as CSS variables for flexibility.

Token sketch (for reference):
```css
:root {
  --bg: #F8FAFC; /* light background */
  --surface: #FFFFFF;
  --text: #1E293B;
  --text-muted: #475569;
  --border: #E2E8F0;
  --brand: #4F46E5; /* indigo-600 */
  --brand-hover: #4338CA; /* indigo-700 */
  --accent: #06B6D4; /* cyan-500 */
}
.dark {
  --bg: #0F172A; /* dark background */
  --surface: #1E293B;
  --text: #F1F5F9;
  --text-muted: #CBD5E1;
  --border: #334155;
  --brand: #818CF8; /* indigo-400 */
  --brand-hover: #A5B4FC; /* indigo-300 */
  --accent: #22D3EE; /* cyan-400 */
}
```

Tailwind usage example (conceptual):
```html
<div class="bg-[var(--bg)] text-[var(--text)] dark:bg-[var(--bg)] dark:text-[var(--text)]">
  <!-- content -->
  
</div>
```

Theme detection (conceptual):
```js
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = stored ?? (prefersDark ? 'dark' : 'light');
document.documentElement.classList.toggle('dark', theme === 'dark');
```

---

## Tailwind Configuration Blueprint
Add custom fonts, colors, and container defaults.

```js
// tailwind.config.js (sketch)
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Spectral', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#4F46E5',
          fg: '#FFFFFF',
          hover: '#4338CA',
        },
        accent: '#06B6D4',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
```

Fonts load (sketch):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..800&family=Spectral:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
```

---

## Page Templates & Components

### Global Components
- `AppHeader` (logo, nav, search, theme toggle)
- `AppFooter` (address, links, sponsors, social)
- `ThemeToggle`
- `SearchModal` (optional)
- `PageHero` (breadcrumbs, title, intro)

### Home
- `HeroPrimary` (headline, subhead, CTA)
- `ResearchHighlights` (cards)
- `FeaturedPublication` (with DOI/PDF)
- `SponsorStrip`

### About
- `PageHero` with subtitle
- Sections: Mission, Story, Values

### People
- `PersonCard` (photo, role, links)
- Filters by role/area
 - Groups: PI, Postdocs, Current Students (PhD/MSc), Alumni
 - Each person links to future `/people/:slug` profile detail

### People Profile (`/people/:slug`)
- Header: rounded photo, name, short bio, current affiliation (title, unit, organization)
- Sections:
  - Education (degree, field, institution, year)
  - Past affiliations (bulleted list)
  - Research involvement (links to research detail)
  - Publications authored (title, authors, venue, date, type, DOI)

### Research
- `ResearchCard` (image, title, short description, category chip, start date)
- `ResearchGrid` with filters and infinite scroll
- Top controls: Category filter (All, Materials, Railroad, Sustainability), Search, Sort (Newest/Oldest)
- `ResearchDetail` (`/research/:slug`):
  - Title, category chip, start date
  - Rich description sections (Overview, Methods, etc.)
  - Gallery slider (keyboard and touch-friendly)
  - Research Members (rounded photos, name, role: Lead Student, Contributor, PI, Co-PI)
  - Sponsors (logo + name)
  - Publications list (title, authors, venue, year, DOI/Link)

### Publications
- `PublicationFilters` (year, type, search)
- `PublicationList` (title, authors, date, venue, type; DOI link)
- `CiteMenu` (future: BibTeX, RIS, DOI)

### Contact
- Contact details block (address, email, phone)
- Map embed (optional)

---

## Accessibility (WCAG 2.2 AA)
- Color contrast ≥ 4.5:1 for text; ≥ 3:1 for large text and UI elements.
- Visible focus rings; keyboard navigable menus and modals.
- Semantic landmarks (`header`, `nav`, `main`, `footer`).
- Alt text for images; captions for media; ARIA where appropriate.
- Respect `prefers-reduced-motion`.

---

## Performance & SEO
- Optimize and lazy-load images (srcset, dimensions). Prefer modern formats (AVIF/WebP) with fallbacks.
- Preload key fonts; use `font-display: swap`.
- Split routes/components; prefetch on hover.
- Meta/OG/Twitter tags per page; JSON-LD for publications and events.
- Sitemap and robots; clean URLs.

---

## Content Model (initial JSON-based)
- `people.json`: { id, name, role, photo, email, site, github, scholar, area }
- `research.json`: { id, slug, title, summary, description, leads[], tags[], heroImage, gallery[], sections[], members[], sponsors[], publications[] }
- `publications.json`: { id, year, type, title, authors[], venue, doi, urlPdf, featured }
  - For page filtering: include `date` (ISO string), `type` in {Journal, Conference}
- `site.json` (optional): { address, email, phone, mapUrl, socials: { twitter?, linkedin?, github? } }

Research categories (initial): `Materials`, `Railroad`, `Sustainability`.

Later: migrate to Markdown collections or a headless CMS if needed.

---

## Implementation Plan (Phases)

### Phase 1 – Foundations
1. Add Tailwind CSS to Vite project; configure `darkMode: 'class'` and plugins.
2. Load Google Fonts (Inter, Spectral); set Tailwind `fontFamily`.
3. Establish CSS variables for theme tokens and connect to Tailwind utilities.
4. Implement theme detection + `ThemeToggle` with `localStorage`.
5. Create layout shell: `AppHeader`, `AppFooter`, `PageContainer`.

### Phase 2 – Structure & Content
6. Set up Vue Router with pages: Home, About, Research, Publications, People, Contact.
7. Implement page templates and key components listed above.
8. Create example JSON data files and render lists (people, publications, research).
9. Add filters/search for publications.
10. Add category filter + sort + infinite scrolling on Research; wire to API later.

### Phase 3 – Polish & QA
10. Add animations (reduced motion aware), micro-interactions, and hover states.
11. Accessibility QA (keyboard nav, screen reader checks, color contrast).
12. Performance pass (image optimization, code splitting, prefetch).
13. SEO metadata per route and structured data for publications/events.

### Phase 4 – Content & Launch
14. Replace sample data with real content; verify all links/assets.
15. Add analytics (privacy-friendly) and basic cookie notice if needed.
16. Deploy (Vercel/Netlify) with preview branches; set up CI for checks.

---

## Acceptance Criteria
- Consistent light/dark theming with a visible, persistent toggle and system default.
- Clear IA with responsive, accessible navigation.
- Pages load fast (LCP < 2.5s on 3G, CLS < 0.1). Images optimized.
- Publications are filterable and exportable (BibTeX/DOI links).
- People and research sections are easy to scan; modern card layouts with photos.
- Meets WCAG 2.2 AA.

---

## Open Questions (to refine with Professor)
- Preferred logo/wordmark and brand imagery?
- Specific research themes to highlight on Home?
- Publication style (APA/ACM/IEEE) preference?
- Required social/media channels and analytics policy?
- Hosting preference (Vercel/Netlify/University servers)?

---

## Quick Reference – Installation Sketch (Do Not Execute Yet)
```bash
pnpm add -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms @tailwindcss/line-clamp
pnpm dlx tailwindcss init -p
```

We will implement these steps after plan sign-off.



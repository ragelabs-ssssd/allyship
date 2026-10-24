# ALLYSHIP++ — Where Industry Meets Academia | SOA University

> **Institutional Vision:** *“Bridging corporate boardrooms and academic excellence through high-impact national conclaves, talent co-creation, and research partnerships.”*

**ALLYSHIP++** is the flagship industry-academia initiative by **Siksha 'O' Anusandhan (SOA) Deemed to be University**, Bhubaneswar, Odisha. The platform chronicles the multi-city national conclave series (Bengaluru, Hyderabad, Kolkata, Mumbai, Chennai), provides open educational resources and initiatives, and enables corporate leaders, HR heads, and researchers to partner directly with SOA University.

---

## 🌟 Key Highlights & Features

- **Dark-Luxury Editorial Aesthetic**: Tailored deep-canvas palette (`#0A0A0A`), signature champagne gold accents (`#C5A869`), elevated surfaces (`#121212`), high-contrast typography, and smooth micro-interactions.
- **National Conclave Archives (`/event`)**: City-by-city chronicle of editions across India with agenda timelines, dignitary rosters, convener addresses, and anchor navigation.
- **Corporate Collaboration Pathways (`/collaborate`)**: Four structured engagement tracks—Campus Recruitment, Centres of Excellence (CoE), Joint Applied R&D, and Executive Sabbaticals—with placement velocity tables and inquiry flows.
- **Impact & Press Coverage (`/impact`)**: Verified outcomes, academic transformation pillars, and an interactive media lightbox archive of national and regional press clippings.
- **Discover SOA University (`/discover-soa`)**: Highlights of SOA University's 127-acre campus, NIRF rankings (Top 15 University in India), NAAC 'A++' accreditation, state-of-the-art ITER engineering labs, and convention auditoriums.
- **Interactive Allyship Pledge Flow**: Multi-step declaration modal where advocates select focus pillars and receive a verified Certificate of Active Allyship with local browser persistence.
- **Advocate Dashboard (`/dashboard`)**: Personal hub tracking pledge status, saved open resources, and registered conclave sessions.
- **Initiatives Catalog (`/initiatives`)**: Curricula and structured cohorts with dedicated detail pages (`/initiatives/[slug]`) and enrollment forms.
- **Open Educational Repository (`/resources`)**: Filterable toolkits, reading guides, and actionable checklists (`/resources/[slug]`).
- **Accessible & Performance-Optimized**: Fully compliant semantic HTML, keyboard focus traps, `next/image` responsive delivery, and WCAG AA contrast compliance.

---

## 🧭 Routes & Information Architecture

| Route | Description |
|---|---|
| `/` | Cinematic hero, edition marquee, chapter bento grid, visionary address, testimonials |
| `/about` | Genesis story, dual-track vision, university leadership, and institutional model |
| `/event` | Multi-city conclave archives, edition milestones, and speaker panels |
| `/impact` | Institutional outcomes, press clippings archive, and corporate testimonials |
| `/discover-soa` | Campus overview, NIRF achievements, faculty infrastructure, and photo gallery |
| `/collaborate` | Corporate recruitment pathways, talent metrics, and institutional partnership forms |
| `/initiatives` | Curated cohort catalog with detailed curricula at `/initiatives/[slug]` |
| `/resources` | Open toolkits and guides with reader view at `/resources/[slug]` |
| `/community` | Working circles, regional chapters, and upcoming sessions calendar |
| `/dashboard` | Member credentials, stored pledge certificate, and bookmarked guides |
| `/contact` | Working contact endpoint (`/api/contact`) and administrative directory |
| `/privacy` & `/terms` | Platform governance, data privacy, and legal terms |

---

## 🎨 Design System & Color Tokens

| Token | Value | Usage |
|---|---|---|
| **Canvas** | `#0A0A0A` | Deep dark primary background |
| **Surface** | `#121212` / `#181818` | Card containers, modals, and elevated panels |
| **Accent Gold** | `#C5A869` | Primary buttons, active highlights, key metrics |
| **Accent Gold Light** | `#D4B97B` | Button hover states and interactive glows |
| **Muted Gold** | `#C5A869`/20 | Subtle badge fills and indicator rings |
| **Border Subtle** | `rgba(255, 255, 255, 0.10)` | Grid dividers, card borders, and header rules |
| **Text Primary** | `#FFFFFF` | Headings and primary copy |
| **Text Secondary** | `#A1A1AA` (`zinc-400`) | High-contrast muted metadata and reading paragraphs |

Typography is loaded via Google Fonts stylesheets (`Outfit`, `Cinzel`, `Inter`) for optimal delivery and zero-layout-shift rendering.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run ESLint validation (0 errors)
npm run lint

# TypeScript verification
npx tsc --noEmit

# Production build verification
npm run build
```

The application runs locally at `http://localhost:3000`.

---

## 📄 License
Content, documentation, and university media are copyright © Siksha 'O' Anusandhan (SOA) Deemed to be University. All rights reserved.

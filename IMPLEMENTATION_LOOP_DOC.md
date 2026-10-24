# ALLYSHIP++ — UI Implementation Loop Doc

> **Audience:** an implementation model (e.g., Gemini Flash) with no prior context of this repo.
> **Goal:** bring every page/component onto the site's **dark-luxury design system**, fix concrete UI bugs, and add basic modal accessibility.
> **How to use this doc:** work top-to-bottom, one task at a time. Each task is independently verifiable. Re-read the "Rules" section before every edit.

---

## 0. Rules (read first)

1. **Do NOT change business logic, data flow, or behavior.** Only change: styling classes, navigation links, and the accessibility additions explicitly described. Preserve all `"use client"` directives, all `useState`/`useEffect`, and all form handlers exactly as they are.
2. **Match the existing dark system precisely.** Do not invent new colors. Use only the tokens/hex values in §2.
3. **One file at a time.** After editing a file, note the acceptance check at the end of its task.
4. This is a **Next.js 16 App Router + Tailwind CSS v4** project. Tailwind arbitrary values (`bg-[#121212]`, `text-[var(--color-accent)]`) work. `font-display`, `font-sans`, `font-serif` are real utilities generated from `@theme` in `src/app/globals.css`.
5. Paths are relative to the repo root.

---

## 1. Project context (what the site is)

The repo is an **"ALLYSHIP++" industry–academia conclave site for Siksha 'O' Anusandhan (SOA) University**. It uses a **"Cinematic Dark Luxury"** aesthetic:

- Canvas `#0A0A0A`, surface `#121212`, elevated `#181818`, sunken `#0E0E0E`
- Accent champagne gold `#C5A869`, hover `#D4B97B`, light `#E8D5A7`, subtle `rgba(197,168,105,0.12)`
- Borders `#222222` (strong `#333333`, subtle `#161616`)
- Text: white / `#E4E4E7` / `#9CA3AF`
- Amber label color used widely: `text-amber-400/90`

**The core problem:** the site was redesigned from an older light "Allyship pledge" product, and several files were **not migrated** — they still render white/light inside the dark shell. This doc fixes that split plus a few real bugs.

---

## 2. Canonical design tokens (use exactly these)

| Purpose | Value / class |
|---|---|
| Page background | `bg-[var(--color-canvas)]` (= `#0A0A0A`) |
| Card surface | `bg-[#121212]` |
| Nested/inner surface | `bg-[#181818]` |
| Card border | `border-white/10` (hover `hover:border-white/20`) |
| Accent border (hover/active) | `border-[var(--color-accent)]` / `hover:border-[var(--color-accent)]` |
| Headings | `font-display ... text-white` |
| Body text | `font-sans ... text-zinc-300` |
| Muted text | `text-zinc-400` |
| Faint text | `text-zinc-500` |
| Eyebrow / label | `text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400/90` |
| Accent text | `text-[var(--color-accent)]` |
| Serif quote | `font-serif italic ... text-zinc-100` |
| Primary CTA (gold pill) | `inline-flex items-center gap-3 rounded-full bg-[#C5A869] hover:bg-[#D4B97B] text-zinc-950 font-sans text-sm font-medium px-6 py-3.5 transition-colors duration-200 shadow-sm` |
| Secondary CTA | `inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all duration-300` |
| Dark input | `w-full px-4 py-3 rounded-xl bg-[#181818] border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors` |
| Success badge | `text-emerald-400 bg-emerald-500/10 border-emerald-500/20` |
| Error box | `bg-red-950/50 border-red-800 text-red-200` |
| Small pill badge | `bg-[#181818] border border-white/10 text-[var(--color-accent)]` |

### Canonical light → dark translation table

Apply this mechanically wherever you find light classes inside the migrated files.

| Light class (old) | Dark replacement (new) |
|---|---|
| `bg-white` | `bg-[#121212]` |
| `bg-slate-50`, `bg-slate-100` | `bg-[#181818]` |
| `bg-slate-900`, `bg-slate-800` (solid fills) | `bg-[#181818]` |
| `bg-gradient-to-br/r from-slate-900 via-indigo-950 to-slate-900` | `bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A]` |
| `border-slate-100`, `border-slate-200`, `border-slate-200/80`, `border-slate-200/90` | `border-white/10` |
| `border-slate-300` | `border-white/15` |
| `border-indigo-900`, `border-indigo-200`, `border-indigo-100`, `border-indigo-400/30` | `border-white/10` |
| `text-slate-900` | `text-white` |
| `text-slate-800`, `text-slate-700` | `text-zinc-300` |
| `text-slate-600`, `text-slate-500` | `text-zinc-400` |
| `text-slate-400` | `text-zinc-500` |
| `text-indigo-950`, `text-indigo-900` | `text-white` |
| `text-indigo-700`, `text-indigo-600` | `text-[var(--color-accent)]` |
| `text-indigo-500`, `text-indigo-300`, `text-indigo-200` | `text-zinc-300` |
| `text-orange-950`, `text-orange-900` | `text-zinc-200` |
| `text-orange-600`, `text-orange-400` | `text-amber-400/90` |
| `text-orange-200` | `text-zinc-300` |
| `text-emerald-700`, `text-emerald-600` | `text-emerald-400` |
| `bg-indigo-50`, `bg-indigo-50/70`, `bg-indigo-50/40`, `bg-indigo-100` | `bg-[#181818]` |
| `bg-orange-50`, `bg-orange-50/70` | `bg-[#181818]` |
| `bg-emerald-50`, `bg-emerald-50/30`, `bg-emerald-100` | `bg-emerald-500/10` |
| `border-indigo-600`, `border-emerald-600` (selected state) | `border-[var(--color-accent)]` |
| `border-emerald-200` | `border-emerald-500/20` |
| `border-orange-200`, `border-orange-200/60` | `border-[var(--color-accent)]/30` |
| `bg-indigo-600`, `bg-indigo-600 hover:bg-indigo-700` (primary buttons) | `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]` |
| `bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600` (CTA gradient) | `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]` |
| `bg-emerald-600` (filled checkboxes) | `bg-emerald-500 text-[#0A0A0A]` |
| `border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100` (inputs) | `bg-[#181818] border-white/15 focus:outline-none focus:border-[var(--color-accent)]` |
| `shadow-sm` / `shadow-xs` on cards | `shadow-xl` |
| `text-indigo-200` / `text-orange-200` on dark already | `text-zinc-300` |

---

## PHASE 1 — Global quick fixes (small, precise edits)

### 1.1 Fix the broken partner logo marquee
**File:** `src/components/home/LogoTicker.tsx` (line ~37)

The component animates with `animate-[marquee_45s_linear_infinite]`, but no `@keyframes marquee` exists. Use the already-defined `.logo-ticker-track` animation instead.

**Find:**
```tsx
<div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] items-center gap-10 sm:gap-14">
```
**Replace with:**
```tsx
<div className="logo-ticker-track flex w-max items-center gap-10 sm:gap-14">
```

✅ **Accept:** the partner names scroll continuously leftward and pause on hover.

---

### 1.2 Fix the misleading `--color-navy*` tokens (invisible-text bug)
The `globals.css` defines `--color-navy: #FFFFFF` and `--color-navy-light: #161616`. Some headings use these, and one subtitle renders **#161616 on a #0A0A0A background = invisible**. Replace all usages with explicit colors, then delete the tokens.

#### 1.2a — replace usages

1. `src/app/discover-soa/page.tsx` (line ~143): in the `<h1>`, change `text-[var(--color-navy)]` → `text-white`.
2. `src/app/discover-soa/page.tsx` (line ~148): in the italic subtitle `<p>`, change `text-[var(--color-navy-light)]` → `text-zinc-400`. **This is the invisible text.**
3. `src/app/about/page.tsx` (line ~233): change `text-[var(--color-navy)]` → `text-white`.
4. `src/app/contact/page.tsx` (line ~332): change `text-[var(--color-navy)]` → `text-white`.
5. `src/app/layout.tsx` (line ~91): the skip link currently has `bg-[var(--color-navy)] text-white` (white on white). Change `bg-[var(--color-navy)]` → `bg-[#0F172A]`.
6. `src/app/event/page.tsx` (line ~760): change `text-[var(--color-navy)]` → `text-white` (Suspense fallback; harmless cleanup).

#### 1.2b — delete the tokens and dead `.section-dark` rule

In `src/app/globals.css`:
- **Delete** this block (lines ~40-44):
```css
    /* Navy / Contrast Surfaces */
    --color-navy: #FFFFFF;
    --color-navy-dark: #0A0A0A;
    --color-navy-light: #161616;
    --color-navy-muted: #222222;
```
- **Delete** this block (lines ~267-274):
```css
.section-dark {
  background-color: var(--color-navy);
  color: #F5F0E8;
}

.section-dark .text-muted {
  color: #8A9BB0;
}
```

✅ **Accept:** `grep -rn "color-navy" src` returns **no matches**; the `/discover-soa` subtitle is visibly legible.

---

### 1.3 Fix the navigation map (orphaned routes)
Several routes exist but are unreachable from primary nav: `/about`, `/community`, `/dashboard`, `/initiatives`, `/resources`. Fix the "About" mislink and surface the rest in the footer.

#### 1.3a — Navbar
**File:** `src/components/Navbar.tsx` (line ~41)

Change:
```ts
{ name: "About", href: "/" },
```
to:
```ts
{ name: "About", href: "/about" },
```

(Leave the other four nav entries as-is. The logo remains the home link.)

#### 1.3b — Footer
**File:** `src/components/Footer.tsx` (lines ~23-29)

Replace the entire `navLinks` array with:
```ts
const navLinks = [
  { name: "About & Leadership", href: "/about" },
  { name: "Conclave Chapters", href: "/event" },
  { name: "Impact & Outcomes", href: "/impact" },
  { name: "Discover SOA University", href: "/discover-soa" },
  { name: "Collaborate With Us", href: "/collaborate" },
  { name: "Community Circles", href: "/community" },
  { name: "Resource Library", href: "/resources" },
  { name: "Member Dashboard", href: "/dashboard" },
];
```

✅ **Accept:** clicking "About" in the navbar opens `/about`; the footer lists 8 dossiers including Community, Resources, and Dashboard.

---

## PHASE 2 — Dark-theme migration (the big visual fix)

Apply the §2 translation table to the files below. **Do not touch logic.**

### 2.1 `src/app/dashboard/page.tsx` (fully light → dark)
Mechanically translate every class using the table. Specific notes:

- Header card (`bg-white ... border-slate-200/90`) → `bg-[#121212] ... border-white/10`.
- Avatar `bg-gradient-to-br from-indigo-900 to-slate-900` → `bg-gradient-to-br from-[#181818] to-[#0A0A0A] border border-white/10`.
- "Verified Advocate" badge → `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`.
- "Take the Allyship Pledge" button (`from-orange-500 to-amber-500`) → gold pill (`bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]`).
- "Print / Save Certificate" button (`bg-slate-900 text-white`) → `bg-[#181818] text-white border border-white/10`.
- Tab bar: active `bg-slate-900 text-white` → `bg-[var(--color-accent)] text-[#0A0A0A]`; inactive `text-slate-600 hover:bg-slate-100` → `text-zinc-400 hover:bg-white/5`. The count pill `bg-white/20 text-white` / `bg-slate-200 text-slate-700` → `bg-black/20 text-white` / `bg-white/10 text-zinc-300`.
- Certificate card (`bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 ... border-indigo-900`) → `bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] ... border-white/10`. Its glow blob `bg-orange-500/10` → `bg-[var(--color-accent-subtle)]`.
- **Branding string fix:** in the certificate card, replace `ALLYSHIP FOUNDATION • VERIFIED CREDENTIAL` with `ALLYSHIP++ • SOA UNIVERSITY`. The `text-indigo-300` on that line → `text-[var(--color-accent-light)]`. The `text-orange-400` "Official Recognition" label → `text-amber-400/90`.
- Stat cards (`bg-white ... border-slate-200/90`) → `bg-[#121212] ... border-white/10`; numbers `text-slate-900` → `text-white`; the inline links `text-indigo-600` → `text-[var(--color-accent)]`.
- Saved-resources cards (`bg-white border-slate-200`) → `bg-[#181818] border-white/10`; category `text-indigo-600` → `text-[var(--color-accent)]`; title `text-slate-900 hover:text-indigo-600` → `text-white hover:text-[var(--color-accent)]`.
- Event cards: same treatment; `text-indigo-600` → `text-[var(--color-accent)]`; "✓ Confirmed RSVP" `text-emerald-700 bg-emerald-50` → `text-emerald-400 bg-emerald-500/10`.
- Empty states (`bg-white ... text-slate-500`) → `bg-[#121212] border-white/10 text-zinc-400`, and their `text-indigo-600` links → `text-[var(--color-accent)]`.

✅ **Accept:** `/dashboard` renders dark with gold/emerald accents; no white panels remain.

---

### 2.2 `src/app/initiatives/[slug]/page.tsx` (light → dark)
Translate using the table. Specific notes:

- Back link `text-slate-500 hover:text-indigo-600` → `text-zinc-400 hover:text-[var(--color-accent)]`.
- Hero (`bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 ... border-indigo-900`) → `bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] ... border-white/10`; glow `bg-orange-500/10` → `bg-[var(--color-accent-subtle)]`.
- Category badge `bg-indigo-500/30 text-indigo-200 border-indigo-400/30` → `bg-[#181818] text-[var(--color-accent)] border-white/10`. Status badge `bg-emerald-500/20 text-emerald-300 border-emerald-400/30` → `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`.
- Tagline `text-orange-200` → `text-amber-400/90`.
- Quick-spec icons `text-orange-400` / `text-indigo-400` / `text-emerald-400` → `text-[var(--color-accent)]` (all three).
- "What You Will Achieve" card (`bg-white ... border-slate-200/90`) → `bg-[#121212] border-white/10`; checkmarks `bg-emerald-50 text-emerald-700 border-emerald-200` → `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`.
- Section eyebrow `text-orange-600` → `text-amber-400/90`.
- Curriculum cards (`bg-white ... border-slate-200/90`) → `bg-[#121212] border-white/10`; "Step" text `text-indigo-600` → `text-[var(--color-accent)]`.
- "Target audience" (`bg-slate-50 border-slate-200`) → `bg-[#181818] border-white/10`; bullets `text-orange-500` → `text-[var(--color-accent)]`.
- Right column card (`bg-white ... border-slate-200/90`) → `bg-[#121212] border-white/10`.
- Related section: heading `text-slate-900` → `text-white`; divider `border-slate-200/80` → `border-white/10`. (The `InitiativeCard` used here is already dark.)

✅ **Accept:** `/initiatives/[slug]` detail page is dark and matches its dark listing page.

---

### 2.3 `src/app/resources/[slug]/page.tsx` (light → dark)
Translate using the table. Specific notes:

- Back link → same as 2.2 back link.
- Category badge `bg-indigo-50 text-indigo-700 border-indigo-200` → `bg-[#181818] text-[var(--color-accent)] border-white/10`.
- Title `text-slate-900` → `text-white`; description `text-slate-600` → `text-zinc-400`.
- Metadata bar `border-slate-200 text-slate-500` → `border-white/10 text-zinc-400`.
- Key-takeaways box `bg-indigo-50/70 border-indigo-200/80` → `bg-[#181818] border-white/10`; header `text-indigo-900` → `text-white`; item `text-indigo-950` → `text-zinc-200`; icons `text-indigo-600` → `text-[var(--color-accent)]`; the `text-orange-500` Sparkles icon → `text-amber-400/90`.
- Body `text-slate-800` → `text-zinc-300`; headings `text-slate-900` → `text-white`; paragraphs `text-slate-700` → `text-zinc-300`.
- "Ally In Action Tip" box `bg-orange-50/70 border-orange-200/80` → `bg-[#181818] border-[var(--color-accent)]/30`; header `text-orange-900` → `text-amber-400/90`; list `text-orange-950` → `text-zinc-200`; bullets `text-orange-600` → `text-[var(--color-accent)]`.
- Tags section divider `border-slate-200` → `border-white/10`; tag pills `text-slate-700 bg-slate-100 border-slate-200` → `text-zinc-300 bg-[#181818] border-white/10`.
- Related section heading `text-slate-900` → `text-white`; divider `border-slate-200` → `border-white/10`. (The `ResourceCard` used here is already dark.)

✅ **Accept:** `/resources/[slug]` is dark and matches its dark listing page.

---

### 2.4 `src/components/PledgeModal.tsx` (light → dark + branding)
This modal is the worst offender (white panel, indigo/orange/emerald). Translate every class using the table, with these specific mappings:

- Overlay `bg-slate-950/70 backdrop-blur-sm` → `bg-black/85 backdrop-blur-md`.
- Container `bg-white ... border-slate-100` → `bg-[#121212] ... border-white/10`.
- Header `bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900` → `bg-[#181818]`. Icon box `bg-orange-500/20 border-orange-400/40 text-orange-400` → `bg-[var(--color-accent-subtle)] border-[var(--color-accent)]/30 text-[var(--color-accent)]`. "Official Declaration" `text-orange-400` → `text-amber-400/90`.
- Progress tracker `bg-slate-50 border-b border-slate-200/80 text-slate-500` → `bg-[#0E0E0E] border-b border-white/10 text-zinc-400`. Step circles: active `bg-indigo-600 text-white` → `bg-[var(--color-accent)] text-[#0A0A0A]`; inactive `bg-slate-200 text-slate-600` → `bg-white/10 text-zinc-400`. Connector `bg-slate-200` → `bg-white/10`. Active label `text-indigo-900` → `text-white`.
- Step 1 / Step 2 option cards: selected `border-indigo-600 bg-indigo-50/50` → `border-[var(--color-accent)] bg-[var(--color-accent-subtle)]`; unselected `border-slate-200 hover:border-slate-300 bg-white` → `border-white/10 hover:border-white/25 bg-[#181818]`. Checkboxes: selected `bg-indigo-600 text-white` → `bg-[var(--color-accent)] text-[#0A0A0A]`; unselected `border-slate-300 bg-white` → `border-white/30 bg-transparent`. Card title `text-slate-900` → `text-white`; desc `text-slate-500` → `text-zinc-400`.
- Step 2 commitments: selected `border-emerald-600 bg-emerald-50/40` → `border-emerald-500/40 bg-emerald-500/10`; checkbox selected `bg-emerald-600 text-white` → `bg-emerald-500 text-[#0A0A0A]`.
- Continue/primary buttons `bg-slate-900 hover:bg-slate-800 text-white` → `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]`. Back links `text-slate-500 hover:text-slate-800` → `text-zinc-400 hover:text-white`.
- Step 3 inputs: `border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900` → the canonical dark input from §2. Labels `text-slate-700` → `text-zinc-300`; help text `text-slate-400` → `text-zinc-500`.
- Orange info box `bg-orange-50/70 border-orange-200/60 text-orange-950` → `bg-[#181818] border-[var(--color-accent)]/30 text-zinc-300`; its icon `text-orange-600` → `text-[var(--color-accent)]`.
- Submit button `from-orange-500 to-amber-500 ...` → `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]`.
- Step 4 success icon `bg-emerald-100 text-emerald-600` → `bg-emerald-500/10 text-emerald-400`; "Pledge Confirmed" `text-emerald-600` → `text-emerald-400`; title `text-slate-900` → `text-white`.
- Certificate card `bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 ... border-indigo-900` → `bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] ... border-white/10`; glow `bg-orange-500/10` → `bg-[var(--color-accent-subtle)]`.
  - **Branding string fix:** `ALLYSHIP FOUNDATION` → `ALLYSHIP++ · SOA UNIVERSITY` (keep `text-indigo-300`→`text-[var(--color-accent-light)]`).
  - "Certificate of Active Allyship" `text-orange-400` → `text-amber-400/90`.
- "Go to Ally Dashboard" button `bg-indigo-600 hover:bg-indigo-700 text-white` → `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]`. "Return to Website" `bg-slate-100 hover:bg-slate-200 text-slate-700` → `bg-white/10 hover:bg-white/15 text-zinc-300`.

✅ **Accept:** the pledge modal is fully dark with gold/emerald accents and reads "ALLYSHIP++ · SOA UNIVERSITY".

---

### 2.5 `src/components/InteractiveChecklist.tsx` (light → dark)
Translate using the table. Key mappings:

- Container `bg-white ... border-slate-200/90 shadow-sm` → `bg-[#121212] ... border-white/10 shadow-xl`.
- "Interactive Tool" label `text-orange-600` → `text-amber-400/90`; title `text-slate-900` → `text-white`; subtitle `text-slate-500` → `text-zinc-400`.
- Progress % `text-indigo-700` → `text-[var(--color-accent)]`; ring `bg-indigo-50 border-indigo-200` → `bg-white/5 border-white/10`.
- Progress bar `bg-slate-100` → `bg-white/10`; fill `from-orange-500 via-indigo-500 to-emerald-500` → `from-[#C5A869] via-amber-400 to-emerald-400`.
- Items: done `border-emerald-200 bg-emerald-50/30` → `border-emerald-500/30 bg-emerald-500/10`; undone `border-slate-200 bg-white hover:border-slate-300` → `border-white/10 bg-[#181818] hover:border-white/25`.
- Checkbox: done `bg-emerald-600 text-white` → `bg-emerald-500 text-[#0A0A0A]`; undone `border-slate-300 bg-white hover:border-indigo-400` → `border-white/30 bg-transparent hover:border-[var(--color-accent)]`.
- Category label `text-slate-400` → `text-zinc-500`; task `text-slate-900` → `text-white` (done state keeps `line-through opacity-80`); impact `text-slate-500` → `text-zinc-400`.
- 100% banner `bg-emerald-50 border-emerald-200 text-emerald-800` → `bg-emerald-500/10 border-emerald-500/20 text-emerald-300`.

✅ **Accept:** the checklist renders dark on the dashboard.

---

### 2.6 `src/components/ImpactCounter.tsx` (fix the light banner only)
The metric cards are already dark; only the transparency banner is light.

**Find** (lines ~64):
```tsx
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900">
```
**Replace with:**
```tsx
<div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 p-4 rounded-2xl bg-[#181818] border border-white/10 text-xs text-zinc-300">
```
Also inside the banner: `text-indigo-700` (ShieldCheck icon + the "View Verification Criteria" button) → `text-[var(--color-accent)]`, and `hover:text-indigo-900` → `hover:text-white`.

✅ **Accept:** the impact dashboard transparency banner is dark.

---

### 2.7 `src/app/initiatives/[slug]/EnrollmentForm.tsx` (light → dark)
Translate using the table. Key mappings:

- Success state `bg-emerald-50 border-emerald-200` → `bg-emerald-500/10 border-emerald-500/20`; icon `bg-emerald-100 text-emerald-600` → `bg-emerald-500/10 text-emerald-400`; title `text-slate-900` → `text-white`; body `text-slate-600` → `text-zinc-400`; reference `text-emerald-800` → `text-emerald-400`; reset link `text-emerald-700 hover:text-emerald-900` → `text-emerald-400 hover:text-emerald-300`.
- Form title `text-slate-900` → `text-white`; subtitle `text-slate-500` → `text-zinc-400`.
- Inputs `border-slate-300 text-slate-900 focus:border-indigo-600` → the canonical dark input from §2. Labels `text-slate-700` → `text-zinc-300`.
- Submit button `from-orange-500 to-amber-500 ...` → `bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A]`.
- Footer `text-slate-400` → `text-zinc-500`; ShieldCheck `text-emerald-600` → `text-emerald-400`.

✅ **Accept:** enrollment form is dark and matches its parent card.

---

### 2.8 `src/app/resources/[slug]/ResourceActions.tsx` (light → dark)
Translate using the table. Key mappings:

- Save button: saved `bg-indigo-600 text-white border-indigo-600` → `bg-[var(--color-accent)] text-[#0A0A0A] border-[var(--color-accent)]`; unsaved `bg-white border-slate-300 text-slate-700 hover:bg-slate-50` → `bg-[#181818] border-white/10 text-zinc-300 hover:bg-white/10`.
- Share button: `bg-white border-slate-300 text-slate-700 hover:bg-slate-50` → `bg-[#181818] border-white/10 text-zinc-300 hover:bg-white/10`. Copied state `text-emerald-600` → `text-emerald-400`.
- Print button: `bg-white border-slate-300 text-slate-600` → `bg-[#181818] border-white/10 text-zinc-400`.

✅ **Accept:** action buttons are dark and match the dark resource page.

---

## PHASE 3 — Modal accessibility (focus trap + reduced-motion)

### 3.1 Create a shared focus-trap hook
**New file:** `src/lib/useFocusTrap.ts`

```ts
"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus within a modal dialog while it is open and
 * restores focus to the previously focused element on close.
 * Attach the returned ref to the dialog's outermost container.
 */
export function useFocusTrap(isOpen: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );

    const focusables = getFocusable();
    (focusables[0] ?? container).focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  return containerRef;
}
```

### 3.2 Wire it into the three modals

For each modal below: (a) add the import, (b) call the hook **before** the `if (!isOpen) return null;` early-return, (c) attach `ref={dialogRef}` to the outermost `role="dialog"` div.

#### `src/components/GetInvitedModal.tsx`
1. Add import near the top:
```ts
import { useFocusTrap } from "@/lib/useFocusTrap";
```
2. Add the hook call right after the state declarations (after `const [errorMsg, setErrorMsg] = useState("");`):
```ts
const dialogRef = useFocusTrap(isOpen);
```
3. On the overlay `<div role="dialog" aria-modal="true" ...>` (line ~82), add `ref={dialogRef}`.

#### `src/components/PledgeModal.tsx`
1. Add the same import.
2. Add `const dialogRef = useFocusTrap(isOpen);` after `const [issuedDate, setIssuedDate] = useState("October 2026");` (before the first `useEffect`).
3. Attach `ref={dialogRef}` to the overlay `<div role="dialog" ...>` (line ~151).

#### `src/components/ChapterModal.tsx`
1. Add the same import.
2. Add `const dialogRef = useFocusTrap(isOpen);` just before the existing `useEffect` (line ~27).
3. Attach `ref={dialogRef}` to the overlay `<div ... role="dialog" aria-modal="true">` (line ~44).

✅ **Accept:** tabbing cycles inside the modal; focus returns to the trigger after close; `Escape` still closes.

---

### 3.3 Respect `prefers-reduced-motion` for confetti
Confetti should not fire when the user prefers reduced motion. Wrap each confetti call.

The three call sites currently look like:
```ts
try {
  confetti({ ... });
} catch (err) { }
```

Replace each with:
```ts
if (typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  try {
    confetti({ ... });
  } catch (err) { }
}
```

Files/lines:
1. `src/components/GetInvitedModal.tsx` (inside `handleSubmit`, ~line 68)
2. `src/components/PledgeModal.tsx` (inside `handleCompletePledge`, ~line 138)
3. `src/app/initiatives/[slug]/EnrollmentForm.tsx` (inside `handleSubmit`, ~line 43)

✅ **Accept:** with "Reduce Motion" enabled in the OS, no confetti renders; forms still succeed.

---

## PHASE 4 — Optional cleanup (do only if asked / time permits)

1. **Remove stray prototype files** from repo root: `index.html` and `allyship_demo.html` are standalone Tailwind-CDN prototypes, not part of the Next.js app.
2. **Delete duplicate button class** `.btn-accent` in `src/app/globals.css` (lines ~355-376) — it is identical to `.btn-primary`.
3. **`tailwind.config.ts`**: the project uses Tailwind v4 (`@theme` in `globals.css`); the v3-style config is not loaded unless an `@config` directive is added. Leave it untouched unless fonts misbehave — it is harmless dead config.
4. **Native `<select>` styling**: dark `<select>` elements may render OS-styled (light) dropdown lists. Optional hardening: add `[&>option]:bg-[#181818] [&>option]:text-white` to each `<select>` class list (applies in Chromium).

---

## PHASE 5 — Verification checklist

Run these and confirm each item before declaring done.

1. `npm run dev` (or `pnpm dev`), then open `http://localhost:3000`.
2. **Homepage** `/` — partner marquee scrolls leftward; pauses on hover.
3. **Navbar** — "About" goes to `/about`; logo goes home; mobile drawer works.
4. **Footer** — 8 dossier links present; all resolve (no 404).
5. `/discover-soa` — the italic subtitle under the H1 is clearly legible (was invisible).
6. `/about`, `/contact` — headings render white (not dark-on-dark).
7. `/dashboard` — fully dark, no white panels; certificate shows "ALLYSHIP++ • SOA UNIVERSITY".
8. `/initiatives/[slug]` and `/resources/[slug]` — dark; match their dark listing pages.
9. Open the **Request Invitation** modal and the **Pledge** modal — both dark; keyboard focus is trapped; `Escape` closes; focus returns to the trigger.
10. Enable OS "Reduce Motion" — no confetti; hero reveal/carousel animations disabled.
11. `npm run build` completes without errors.
12. `npm run lint` passes.

---

## Appendix — files touched, by phase

| Phase | Files |
|---|---|
| 1 | `src/components/home/LogoTicker.tsx`, `src/app/globals.css`, `src/app/discover-soa/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/layout.tsx`, `src/app/event/page.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx` |
| 2 | `src/app/dashboard/page.tsx`, `src/app/initiatives/[slug]/page.tsx`, `src/app/resources/[slug]/page.tsx`, `src/components/PledgeModal.tsx`, `src/components/InteractiveChecklist.tsx`, `src/components/ImpactCounter.tsx`, `src/app/initiatives/[slug]/EnrollmentForm.tsx`, `src/app/resources/[slug]/ResourceActions.tsx` |
| 3 | `src/lib/useFocusTrap.ts` (new), `src/components/GetInvitedModal.tsx`, `src/components/PledgeModal.tsx`, `src/components/ChapterModal.tsx`, `src/app/initiatives/[slug]/EnrollmentForm.tsx` |
| 4 | `index.html`, `allyship_demo.html`, `src/app/globals.css`, `tailwind.config.ts` (all optional) |

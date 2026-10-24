# ALLYSHIP++ — Loop Sheet 2: Space Management & UI Polish

> **Audience:** an implementation model (e.g., Gemini Flash) with no prior context of this repo.
> **Scope:** layout spacing/alignment + remaining UI polish. **Styling and spacing only** — do not touch data, logic, or copy.
> **Baseline:** the dark-theme migration (Loop Sheet 1) is already complete and `tsc` passes. This sheet does **not** repeat it.
> **How to use:** execute Phase A → G in order. Every edit below is an exact find/replace. Re-read §0 before each phase.

---

## 0. Rules

1. **No logic changes.** Only className strings, new presentational files, and the documented attribute additions.
2. **One phase at a time.** After each phase, run the acceptance check.
3. Match strings **exactly** (including quotes and `border-[...]` vs `border-white/10` variants). Where a string appears more than once, the note says so — replace all occurrences.
4. Repo root is the working directory. Paths below are repo-relative.
5. Stack: Next.js 16 App Router + Tailwind CSS v4. `shadow-xs` and `h-22` are **valid** v4 utilities — do not "fix" them.

### Canonical targets (the whole point of this sheet)

| Thing | Target value |
|---|---|
| Content shell (all full-width pages, navbar, footer) | `max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12` |
| Standard section vertical padding | `py-20 lg:py-28` (112px desktop) |
| Cinematic/home section padding | `py-24 lg:py-32` (128px) — leave as-is |
| Reading measure for long prose | `max-w-[68ch]` |
| Sticky sub-bar offset | `top-0` (navbar auto-hides on scroll-down) |
| Anchor scroll offset | `scroll-mt-24` (96px) |

**Intentionally excluded** from shell unification (do not change): `src/app/resources/[slug]/page.tsx` and `src/app/privacy|terms` use a centered `max-w-4xl` reading column — that is correct for article/legal pages. `/dashboard` keeps its own `pt-10 sm:pt-14` top because it has no hero.

---

## PHASE A — Unify the page shell (P0)

Goal: navbar logo, footer, marketing sections, and listing pages all share the same left edge.

### A1. Navbar container — `src/components/Navbar.tsx` (line 64)

**Find:**
```tsx
<div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
```
**Replace with:**
```tsx
<div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
```

### A2. Listing / portal wrappers

Each of these files starts its page body with a single wrapper `<div>`. Replace the **whole className**.

**`src/app/community/page.tsx` (line 87)**
- Find: `<div className="flex flex-col gap-16 sm:gap-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">`
- Replace: `<div className="flex flex-col gap-16 sm:gap-24 pb-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32">`

**`src/app/initiatives/page.tsx` (line 42)**
- Find: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">`
- Replace: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32">`

**`src/app/resources/page.tsx` (line 55)**
- Find: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">`
- Replace: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-32">`

**`src/app/dashboard/page.tsx` (line 74)** — keep its own top padding
- Find: `<div className="flex flex-col gap-10 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">`
- Replace: `<div className="flex flex-col gap-10 pb-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14">`

**`src/app/initiatives/[slug]/page.tsx` (line 56)**
- Find: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">`
- Replace: `<div className="flex flex-col gap-12 sm:gap-16 pb-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">`

### A3. Legal page top padding — `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` (line 13, both)

**Find (both files):**
```tsx
<div className="bg-[var(--color-canvas)] min-h-screen pt-32 pb-24">
```
**Replace (both files):**
```tsx
<div className="bg-[var(--color-canvas)] min-h-screen pt-24 sm:pt-32 pb-24">
```

✅ **Accept for Phase A:** At ≥1440px wide, the navbar logo's left edge aligns with the hero heading's left edge; navigating `/` → `/resources` → `/dashboard` no longer shifts the content column.

---

## PHASE B — Fix the `/event` sticky bar collision (P0)

The tab bar pins at `top-16` (64px) but the navbar is 96px tall on desktop (`z-50`), so the navbar covers the tab bar when it reappears on scroll-up. Pin the tab bar to the very top instead, and reduce anchor offsets to match.

### B1. `src/app/event/page.tsx` (line 389)

**Find:**
```tsx
<div className="sticky top-16 z-30 bg-gradient-to-b from-[#09090b] via-[#09090b]/95 to-transparent pt-4 pb-6 backdrop-blur-md">
```
**Replace:**
```tsx
<div className="sticky top-0 z-30 bg-gradient-to-b from-[#09090b] via-[#09090b]/95 to-transparent pt-4 pb-6 backdrop-blur-md">
```

### B2. Same file — reduce anchor offset

Replace **all** occurrences of `scroll-mt-48` with `scroll-mt-24` in `src/app/event/page.tsx` (there are ~16; a find-all/replace-all in that file is safe).

> **Why:** the tab bar is ~80px tall once pinned; `scroll-mt-24` (96px) clears it without leaving a large blank band above anchor targets. `scroll-mt-48` (192px) now over-offsets.

✅ **Accept for Phase B:** On `/event`, scroll down — the tab bar pins flush to the viewport top with no content peeking above it. Scroll up — the navbar slides over it (expected). Clicking "All 6 Chapters" / the hero "Explore Archives" anchor lands the target just below the pinned bar, not far down the page.

---

## PHASE C — Normalise the section vertical rhythm (P1)

Six sections use bare `py-20` (80px) and two use `py-16` (64px), while their neighbours use `py-20 lg:py-28`. Bring them all to the standard `py-20 lg:py-28`. Perform edits in this order.

### C1. `py-16` → `py-20 lg:py-28` (2 occurrences, identical string)

In `src/app/about/page.tsx` (line 301) **and** `src/app/discover-soa/page.tsx` (line 385), find all:
```tsx
<section className="py-16 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">
```
Replace with:
```tsx
<section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">
```

### C2. Bare `py-20` with `border-[var(--color-border)]` (3 occurrences)

In `src/app/about/page.tsx` (lines 228 and 274) and `src/app/impact/page.tsx` (line 261 — this one has `id="press-coverage"`; edit it separately so the other two match exactly).

- For **about:228 / about:274** (identical, replace both):
  - Find: `<section className="py-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-[var(--color-border)]">`
  - Replace: `<section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-[var(--color-border)]">`
- For **impact:261**:
  - Find: `<section id="press-coverage" className="py-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-[var(--color-border)]">`
  - Replace: `<section id="press-coverage" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-[var(--color-border)]">`

### C3. Bare `py-20` with `border-white/10` (2 occurrences, identical)

In `src/app/collaborate/page.tsx` (line 279) and `src/app/discover-soa/page.tsx` (line 292):
- Find: `<section className="py-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-white/10">`
- Replace: `<section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-white/10">`

### C4. Bare `py-20`, no border (1 occurrence)

In `src/app/contact/page.tsx` (line 113):
- Find: `<section className="py-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">`
- Replace: `<section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">`

> Do **not** touch the home-page components (`py-24 lg:py-32` / `py-24 lg:py-36`) — that cinematic scale is intentional.

✅ **Accept for Phase C:** `/about` now reads as evenly spaced sections top-to-bottom (no visible 112→80 step-downs); `/impact`, `/collaborate`, `/discover-soa`, `/contact` match.

---

## PHASE D — Cap reading measure on long prose (P1)

Only **one** cluster genuinely needs this. (Other long-looking paragraphs you may spot are already inside `max-w-3xl` wrappers — leave them.)

### D1. `src/app/about/page.tsx` (lines 151, 155, 159 — identical string, replace all 3)

**Find:**
```tsx
<p className="text-base text-slate-300 leading-relaxed">
```
**Replace:**
```tsx
<p className="max-w-[68ch] text-base text-slate-300 leading-relaxed">
```

These three paragraphs sit in the `lg:col-span-7` narrative column (~723px), which currently produces ~90-character lines.

✅ **Accept for Phase D:** the "Genesis of Allyship++" paragraphs wrap at a comfortable ~68 characters instead of running nearly the full column.

---

## PHASE E — Add branded 404 + loading states (P2)

The app has no `not-found.tsx`, `error.tsx`, or `loading.tsx`, so Next renders default white/gray screens that break the dark brand.

### E1. New file: `src/app/not-found.tsx`

```tsx
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--color-canvas)] px-6 py-24">
      <div className="text-center max-w-lg space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400/90">
          <Sparkles className="w-3.5 h-3.5" />
          Page Not Found
        </span>

        <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          404
        </h1>

        <p className="text-base text-zinc-400 leading-relaxed">
          The page you are looking for does not exist or has moved. Return to the
          conclave to continue exploring the chapters.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A] font-sans text-sm font-medium px-6 py-3.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
```

### E2. New file: `src/app/loading.tsx`

```tsx
export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--color-canvas)]">
      <div className="flex items-center gap-3 text-zinc-400">
        <span className="h-5 w-5 rounded-full border-2 border-white/15 border-t-[var(--color-accent)] animate-spin" />
        <span className="font-sans text-sm">Loading…</span>
      </div>
    </div>
  );
}
```

✅ **Accept for Phase E:** visiting `/does-not-exist` shows the dark branded 404 with a working gold button; route transitions show a dark spinner instead of a white flash.

---

## PHASE F — Remaining UI nits (P2/P3)

### F1. Fix the legacy empty-state button — `src/app/resources/page.tsx` (line 196)

**Find:**
```tsx
className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold"
```
**Replace:**
```tsx
className="px-5 py-2 rounded-full bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A] text-xs font-semibold transition-colors"
```

### F2. Raise low-contrast muted labels (`text-zinc-500` ≈ 4.1:1 → fails AA at small sizes)

Do a per-file replace-all of `text-zinc-500` → `text-zinc-400` in:
- `src/components/home/TestimonialCarousel.tsx`
- `src/components/InteractiveChecklist.tsx`
- `src/app/dashboard/page.tsx`

(Only these three files. `zinc-400` ≈ 7.7:1 on the dark canvas.)

### F3. Lazy-load below-fold images

Add `loading="lazy" decoding="async"` to every `<img>` in these files:
- `src/components/home/ChapterBentoGrid.tsx`
- `src/components/home/ChairmanVision.tsx`
- `src/app/event/page.tsx`
- `src/app/impact/page.tsx`
- `src/app/discover-soa/page.tsx`
- `src/app/collaborate/page.tsx`

**Do NOT** add `loading="lazy"` to `src/components/home/CinematicHero.tsx` (its slideshow is the LCP element) or to the logos in `src/components/Navbar.tsx` / `src/components/Footer.tsx`.

Example transform:
```tsx
<img src={x} alt={y} className="..." />
```
→
```tsx
<img src={x} alt={y} loading="lazy" decoding="async" className="..." />
```

### F4. (Optional, P3) Trim bottom whitespace

On inner pages the pattern `pb-24` + footer `pt-20` leaves 176px before the footer brand. If you want tighter pages, change the page-wrapper `pb-24` → `pb-16` in `community`, `dashboard`, `initiatives`, `resources`, `initiatives/[slug]` (the wrappers already edited in Phase A). Skip if unsure — it is cosmetic only.

✅ **Accept for Phase F:** no `bg-slate-900` button remains; muted 10–12px labels are legible; DevTools Network shows below-fold images deferred (no `loading="lazy"` on the hero).

---

## PHASE G — Verification checklist

1. `npx tsc --noEmit` → exit 0.
2. `npm run build` → completes without errors.
3. `npm run lint` → passes.
4. **Shell alignment (≥1440px):** open `/`, `/resources`, `/dashboard`, `/about`; the left content edge is identical on all four, and the navbar logo aligns with it.
5. **Section rhythm:** on `/about`, `/impact`, `/collaborate`, `/discover-soa`, `/contact`, every section has even vertical breathing room (no 80px "tight" bands between 112px sections).
6. **`/event` sticky:** tab bar pins flush at the top when scrolled; anchors land just below it.
7. **404:** `/nope` renders the branded dark page.
8. **Images:** no `loading="lazy"` on the home hero; below-fold images carry `loading="lazy" decoding="async"`.
9. **Regression sweep:** modals still open/close and trap focus; forms still submit; carousel still autoplays; no horizontal scrollbar on 1440px or 375px.

---

## Appendix — files touched by phase

| Phase | Files |
|---|---|
| A | `src/components/Navbar.tsx`, `src/app/community/page.tsx`, `src/app/initiatives/page.tsx`, `src/app/resources/page.tsx`, `src/app/dashboard/page.tsx`, `src/app/initiatives/[slug]/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |
| B | `src/app/event/page.tsx` |
| C | `src/app/about/page.tsx`, `src/app/impact/page.tsx`, `src/app/collaborate/page.tsx`, `src/app/discover-soa/page.tsx`, `src/app/contact/page.tsx` |
| D | `src/app/about/page.tsx` |
| E | `src/app/not-found.tsx` (new), `src/app/loading.tsx` (new) |
| F | `src/app/resources/page.tsx`, `src/components/home/TestimonialCarousel.tsx`, `src/components/InteractiveChecklist.tsx`, `src/app/dashboard/page.tsx`, `src/components/home/ChapterBentoGrid.tsx`, `src/components/home/ChairmanVision.tsx`, `src/app/event/page.tsx`, `src/app/impact/page.tsx`, `src/app/discover-soa/page.tsx`, `src/app/collaborate/page.tsx` |

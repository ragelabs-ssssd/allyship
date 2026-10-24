# ALLYSHIP++ — Loop Sheet 3: Cleanup & Finishing Detail

> **Audience:** an implementation model (e.g., Gemini Flash) with no prior context of this repo.
> **Scope:** bottom-spacing fix, dead-code removal, error state, image optimisation, and small consistency nits.
> **Baseline:** Loop Sheets 1 & 2 are complete (`tsc` passes; shell unified at `max-w-[1400px]`; sections normalised to `py-20 lg:py-28`). This sheet does **not** repeat them.
> **Order:** A → F. Phases A–C are low-risk. **Phase D (images) is the only one that can affect layout** — it is isolated so it can be reverted alone.

---

## 0. Rules

1. **Styling / presentational only.** Do not change data, copy, handlers, or component APIs.
2. Execute one phase at a time and run the acceptance check.
3. Match strings exactly. Several strings are **identical across files but need different replacements** — read the per-file instruction before replacing (especially Phase A).
4. Stack: Next.js 16 App Router + Tailwind v4. `pb-0`, `shadow-xs`, `h-22` are valid.

### Canonical values used here

| Thing | Value |
|---|---|
| Content shell | `max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12` |
| Standard section padding | `py-20 lg:py-28` |
| Footer top padding | `pt-20` (unchanged) |
| Page bottom padding — ends in a padded section | `pb-0` |
| Page bottom padding — ends in an unpadded block | `pb-12` |

---

## PHASE A — Remove the bottom dead zone (P1)

**Problem:** pages with a final `py-20 lg:py-28` section stack **112 (section) + 96 (`pb-24`) + 80 (footer `pt-20`) = 288px** of empty space before the footer brand. The `pb-24` is now redundant.

Two buckets:

- **Bucket 1 → `pb-24` becomes `pb-0`** (last child section already pads 112px):
  `impact`, `collaborate`, `contact`, `discover-soa`, `event`
- **Bucket 2 → `pb-24` becomes `pb-12`** (page ends in an unpadded card/grid/CTA):
  `about`, `community`, `dashboard`, `initiatives`, `resources`, `initiatives/[slug]`, `privacy`, `terms`

> ⚠️ The six Bucket-1/Bucket-2 marketing wrappers below are **byte-identical strings**. Edit **one file at a time**; do not run a project-wide replace-all.

### A1. Bucket 1 — set `pb-0`

The exact line in each file (currently identical) is:
```tsx
<div className="flex flex-col w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] pb-24">
```

| File | Line | Replace `pb-24` with |
|---|---|---|
| `src/app/impact/page.tsx` | 153 | `pb-0` |
| `src/app/collaborate/page.tsx` | 160 | `pb-0` |
| `src/app/contact/page.tsx` | 92 | `pb-0` |
| `src/app/discover-soa/page.tsx` | 132 | `pb-0` |
| `src/app/event/page.tsx` | 105 | `pb-0` |

### A2. Bucket 2 — set `pb-12`

| File | Line | Find | Replace |
|---|---|---|---|
| `src/app/about/page.tsx` | 114 | `...text-[var(--color-text-primary)] pb-24">` | `...pb-12">` |
| `src/app/community/page.tsx` | 87 | `...gap-16 sm:gap-24 pb-24 max-w-[1400px]...` | `...gap-16 sm:gap-24 pb-12 max-w-[1400px]...` |
| `src/app/dashboard/page.tsx` | 74 | `...gap-10 pb-24 max-w-[1400px]...` | `...gap-10 pb-12 max-w-[1400px]...` |
| `src/app/initiatives/page.tsx` | 42 | `...gap-12 sm:gap-16 pb-24 max-w-[1400px]...` | `...pb-12...` |
| `src/app/resources/page.tsx` | 55 | `...gap-12 sm:gap-16 pb-24 max-w-[1400px]...` | `...pb-12...` |
| `src/app/initiatives/[slug]/page.tsx` | 56 | `...gap-12 sm:gap-16 pb-24 max-w-[1400px]...` | `...pb-12...` |
| `src/app/privacy/page.tsx` | 13 | `...min-h-screen pt-24 sm:pt-32 pb-24">` | `...pb-12">` |
| `src/app/terms/page.tsx` | 13 | `...min-h-screen pt-24 sm:pt-32 pb-24">` | `...pb-12">` |

> Home page: **do not change** — its CTA banner's 144px bottom padding is intentional.

✅ **Accept for Phase A:** on `/impact` (and the other Bucket-1 pages) the gap between the last paragraph and the footer's top border is roughly **192px** (was ~288px); on listing pages ~**128px** (was ~176px). No section loses its internal padding.

---

## PHASE B — Delete dead code (P2)

### B1. Remove two orphaned components

Both have **zero imports** (verified). Delete the files:

```bash
rm src/components/ImpactCounter.tsx
rm src/components/ChapterModal.tsx
```

Before deleting, confirm no references exist:
```bash
grep -rn "ImpactCounter\|ChapterModal" src --include=*.tsx
```
Expected output: only the file definitions themselves (which you are deleting). If any page imports them, **stop and report** instead of deleting.

### B2. Remove root prototype files (optional, confirm with owner first)

```bash
rm index.html allyship_demo.html
```
These are standalone Tailwind-CDN prototypes (~217 KB total) not referenced by the Next.js app.

✅ **Accept for Phase B:** `npx tsc --noEmit` still exits 0; `npm run build` succeeds.

---

## PHASE C — Add a branded error boundary (P2)

### C1. New file: `src/app/error.tsx`

```tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--color-canvas)] px-6 py-24">
      <div className="text-center max-w-lg space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-400/90">
          <AlertTriangle className="w-3.5 h-3.5" />
          Something Went Wrong
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          An unexpected error occurred
        </h1>

        <p className="text-base text-zinc-400 leading-relaxed">
          We could not complete that request. Please try again, or return to the
          home page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A869] hover:bg-[#D4B97B] text-[#0A0A0A] font-sans text-sm font-medium px-6 py-3 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

✅ **Accept for Phase C:** `error.tsx` must be a client component (the `"use client"` line above is required). Temporarily throwing in a page shows the dark error card with a working "Try again".

---

## PHASE D — Image optimisation with `next/image` (P2)

⚠️ **This is the only layout-sensitive phase.** If anything regresses, revert **Phase D only** (git checkout of the listed files).

### Why

17 `<img>` tags ship full-resolution originals, have no intrinsic dimensions, and bypass Next's optimiser. The layout already wraps every content image in a fixed-aspect container, so the clean migration is `next/image` + `fill` (no need to know intrinsic dimensions).

### Rules for every conversion

1. Add `import Image from "next/image";` to the file (only once).
2. Replace `<img … />` with `<Image … />`.
3. **Remove** `loading="lazy"` and `decoding="async"` — `next/image` lazy-loads by default.
4. **Remove** `w-full h-full` from `className` — `fill` supplies sizing. Keep `object-cover`, `object-top`, `group-hover:*`, `contrast-105`, `grayscale`, opacity, transitions.
5. Add `fill` and `sizes`.
6. The **nearest parent must be positioned** (`relative`, `absolute`, or `fixed`). All containers qualify except one (noted in D5).
7. Leave the **navbar and footer logos as plain `<img>`** (tiny, above-the-fold). Do not convert them.

### D1. `src/components/home/CinematicHero.tsx` (the LCP hero)

Add `import Image from "next/image";`.

**Find (lines 283–289):**
```tsx
<img
  src={slide.image}
  alt={slide.chapter}
  className={`w-full h-full object-cover object-center filter contrast-105 transition-transform duration-1000 ease-out ${
    isActive ? "scale-105" : "scale-100"
  }`}
/>
```
**Replace with:**
```tsx
<Image
  src={slide.image}
  alt={slide.chapter}
  fill
  priority={idx === 0}
  sizes="(max-width: 1024px) 100vw, 45vw"
  className={`object-cover object-center contrast-105 transition-transform duration-1000 ease-out ${
    isActive ? "scale-105" : "scale-100"
  }`}
/>
```
> `idx` is already in scope from the surrounding `HERO_SLIDES.map((slide, idx) => …)`.

### D2. `src/components/home/ChapterBentoGrid.tsx` (3 images)

Add `import Image from "next/image";`.

**Featured card (lines 89–95)** — replace:
```tsx
<img
  src={featured.image}
  alt={featured.title}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 filter contrast-105"
/>
```
with:
```tsx
<Image
  src={featured.image}
  alt={featured.title}
  fill
  sizes="(max-width: 1024px) 100vw, 58vw"
  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 contrast-105"
/>
```

**Side card (lines 148–154) and bottom-strip card (lines 198–204)** — both are identical:
```tsx
<img
  src={chapter.image}
  alt={chapter.city}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
/>
```
Replace **both** with:
```tsx
<Image
  src={chapter.image}
  alt={chapter.city}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
```

### D3. `src/components/home/ChairmanVision.tsx` (1 image)

Add `import Image from "next/image";`.

**Find (lines 19–25):**
```tsx
<img
  src="/chairman-manojranjan-nayak.png"
  alt="Prof. (Dr.) Manojranjan Nayak, Founder President & Chairman, SOA University"
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
/>
```
**Replace with:**
```tsx
<Image
  src="/chairman-manojranjan-nayak.png"
  alt="Prof. (Dr.) Manojranjan Nayak, Founder President & Chairman, SOA University"
  fill
  sizes="(max-width: 1024px) 100vw, 40vw"
  className="object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
/>
```

### D4. `src/app/event/page.tsx` (1 convener photo)

Add `import Image from "next/image";`.

**Find (lines 346–352):**
```tsx
<img
  src="/IMG_7364.jpg"
  alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover object-top"
/>
```
**Replace with:**
```tsx
<Image
  src="/IMG_7364.jpg"
  alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
  fill
  sizes="(max-width: 768px) 100vw, 40vw"
  className="object-cover object-top"
/>
```

### D5. `src/app/impact/page.tsx` (3 images + one container fix)

Add `import Image from "next/image";`.

1. **Hero (lines 198–204)** → replace the `<img …>` with:
```tsx
<Image
  src="/IMG_7873.jpg"
  alt="Allyship++ National Conclave Live Delegation and Leadership"
  fill
  sizes="(max-width: 1024px) 100vw, 40vw"
  className="object-cover"
/>
```
2. **Press card (lines 287–293)** → replace with:
```tsx
<Image
  src={c.image}
  alt={c.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
/>
```
3. **Modal image (lines 353–359)** → replace with:
```tsx
<Image
  src={selectedClipping.image}
  alt={selectedClipping.title}
  fill
  sizes="(max-width: 1024px) 100vw, 60vw"
  className="object-cover"
/>
```
4. **Container fix — same modal:** its wrapper currently lacks `relative`. Change:
```tsx
<div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
```
to:
```tsx
<div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
```

### D6. `src/app/discover-soa/page.tsx` (4 campus images)

Add `import Image from "next/image";`.

Each of the four `<img>` blocks (lines 308, 329, 350, 371) has this shape:
```tsx
<img
  src="/soa-<name>.jpg"
  alt="<alt>"
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>
```
Replace each with:
```tsx
<Image
  src="/soa-<name>.jpg"
  alt="<alt>"
  fill
  sizes="(max-width: 768px) 100vw, 25vw"
  className="object-cover group-hover:scale-105 transition-transform duration-700"
/>
```
Keep each file's own `src` and `alt` values exactly:
| src | alt |
|---|---|
| `/soa-campus-aerial.jpg` | `SOA University Main Campus Aerial View` |
| `/soa-iter-building.jpg` | `ITER Engineering Campus Building` |
| `/soa-auditorium.jpg` | `SOA Convention Auditorium` |
| `/soa-campus-grounds.jpg` | `SOA Academic Grounds and Labs` |

> The discover-soa **hero** uses `style={{ backgroundImage: … }}`, not `<img>`. Leave it as-is in this phase.

### D7. `src/app/collaborate/page.tsx` (1 image)

Add `import Image from "next/image";`.

**Find (lines 206–212):**
```tsx
<img
  src="/soa-auditorium.jpg"
  alt="SOA University Auditorium and Corporate Partner Gathering"
  loading="lazy"
  decoding="async"
  className="w-full h-full object-cover"
/>
```
**Replace with:**
```tsx
<Image
  src="/soa-auditorium.jpg"
  alt="SOA University Auditorium and Corporate Partner Gathering"
  fill
  sizes="(max-width: 1024px) 100vw, 40vw"
  className="object-cover"
/>
```

### D8. Explicitly out of scope

- `src/components/Navbar.tsx` logo and `src/components/Footer.tsx` logo → **leave as `<img>`**.
- `src/app/discover-soa/page.tsx` hero `backgroundImage` slides → leave.

✅ **Accept for Phase D:** `npm run build` succeeds; every converted image still fills its card and keeps `object-cover`/`object-top` cropping; DevTools shows `/_next/image?url=…` URLs; the home hero is not lazy-loaded (`priority` present); no horizontal overflow.

---

## PHASE E — Small consistency nits (P3)

### E1. Raise four low-contrast 11px labels (`zinc-500` ≈ 4.1:1 → fails AA)

Change `text-zinc-500` → `text-zinc-400` on these exact lines only (leave any `text-zinc-500` **icons** alone):

| File | Line | Current |
|---|---|---|
| `src/components/PledgeModal.tsx` | 361 | `<p className="text-[11px] text-zinc-500 mt-1">` |
| `src/app/initiatives/[slug]/EnrollmentForm.tsx` | 174 | `<div className="flex items-center gap-2 text-[11px] text-zinc-500 justify-center pt-1">` |
| `src/app/initiatives/[slug]/page.tsx` | 159 | `<span className="text-zinc-500">Step 0{idx + 1}</span>` |
| `src/app/resources/[slug]/page.tsx` | 158 | `<span className="text-xs font-bold text-zinc-500 mr-1 flex items-center gap-1">` |

### E2. Unify the credential separator

`PledgeModal` uses `·` (middot); the dashboard uses `•` (bullet). Standardise on the middot.

**`src/app/dashboard/page.tsx` (line 164):**
- Find: `<span>ALLYSHIP++ • SOA UNIVERSITY</span>`
- Replace: `<span>ALLYSHIP++ · SOA UNIVERSITY</span>`

### E3. Normalise section-header margins to `mb-16`

| File | Line | Find | Replace |
|---|---|---|---|
| `src/app/collaborate/page.tsx` | 282 | `<div className="max-w-3xl space-y-3 mb-12">` | `…mb-16">` |
| `src/app/impact/page.tsx` | 264 | `<div className="max-w-3xl space-y-3 mb-14">` | `…mb-16">` |
| `src/components/home/ChapterBentoGrid.tsx` | 25 | `className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10"` | `…gap-6 mb-16 pb-6 border-b border-white/10` |

> Do not touch `mb-8` inside `ImpactCounter.tsx` — that file is deleted in Phase B.

✅ **Accept for Phase E:** no `text-zinc-500` remains on 11px labels; both credential lines read `ALLYSHIP++ · SOA UNIVERSITY`; section headers share one bottom margin.

---

## PHASE F — Verification checklist

1. `npx tsc --noEmit` → exit 0.
2. `npm run build` → succeeds (most important after Phase D).
3. `npm run dev`, then:
   - `/impact`, `/collaborate`, `/contact`, `/discover-soa`, `/event` → bottom gap reduced, no clipped section padding.
   - `/about`, `/community`, `/dashboard`, `/initiatives`, `/resources`, `/privacy`, `/terms` → comfortable bottom spacing before footer.
   - `/` → hero image visible & sharp, no layout shift; carousel and chapter cards still crop correctly.
   - `/resources/[slug]` and `/initiatives/[slug]` → images/related cards render (Phase D files) and the impact press lightbox opens with a filled image.
   - Temporarily throw an error in a page (or visit a route that errors) → branded `error.tsx` appears; "Try again" resets.
   - `/nope` → branded 404 still works.
4. Responsive sweep at 375px, 768px, 1440px: no horizontal scrollbar, no squashed cards.
5. Confirm no `ImpactCounter` / `ChapterModal` references remain: `grep -rn "ImpactCounter\|ChapterModal" src` → empty.

---

## Appendix — files touched by phase

| Phase | Files |
|---|---|
| A | `src/app/impact/page.tsx`, `src/app/collaborate/page.tsx`, `src/app/contact/page.tsx`, `src/app/discover-soa/page.tsx`, `src/app/event/page.tsx`, `src/app/about/page.tsx`, `src/app/community/page.tsx`, `src/app/dashboard/page.tsx`, `src/app/initiatives/page.tsx`, `src/app/resources/page.tsx`, `src/app/initiatives/[slug]/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |
| B | delete `src/components/ImpactCounter.tsx`, `src/components/ChapterModal.tsx`; (optional) `index.html`, `allyship_demo.html` |
| C | new `src/app/error.tsx` |
| D | `src/components/home/CinematicHero.tsx`, `src/components/home/ChapterBentoGrid.tsx`, `src/components/home/ChairmanVision.tsx`, `src/app/event/page.tsx`, `src/app/impact/page.tsx`, `src/app/discover-soa/page.tsx`, `src/app/collaborate/page.tsx` |
| E | `src/components/PledgeModal.tsx`, `src/app/initiatives/[slug]/EnrollmentForm.tsx`, `src/app/initiatives/[slug]/page.tsx`, `src/app/resources/[slug]/page.tsx`, `src/app/dashboard/page.tsx`, `src/app/collaborate/page.tsx`, `src/app/impact/page.tsx`, `src/components/home/ChapterBentoGrid.tsx` |

### Optional (not required) — `/community` spacing engine

`community/page.tsx` spaces its blocks with a parent `gap-16 sm:gap-24` instead of section padding. If you want it to match every other page, remove `gap-16 sm:gap-24` from the wrapper and add `py-20 lg:py-28` to each of its `<section>` children. This is cosmetic and safe to skip.

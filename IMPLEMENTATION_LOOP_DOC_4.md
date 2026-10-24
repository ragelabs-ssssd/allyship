# ALLYSHIP++ — Loop Sheet 4: Lint, Assets & Final Polish

> **Audience:** an implementation model (e.g., Gemini Flash) with no prior context of this repo.
> **Scope:** make `npm run lint` pass, prune unreachable assets, remove dead code, and close the remaining a11y nits.
> **Baseline already done (do NOT redo):**
> - `npm run build` is green (`BUILD_ID` present).
> - Fonts load via stylesheet `<link>` (no `next/font`), font tokens are concrete in `globals.css`.
> - Per-route metadata exists via `layout.tsx` files in `about/ collaborate/ community/ contact/ dashboard/ discover-soa/ event/ impact/ initiatives/ resources/`.
> - `robots.ts` uses `https://allyship.soa.ac.in/sitemap.xml`; `sitemap.ts` emits 24 URLs including slugs.
> **Order:** A → G. Phase A is the only one that requires code understanding; B–E are mechanical.

---

## 0. Rules

1. Do not change copy, data, handlers, or layout. Only the edits below.
2. Re-run `npx eslint` after Phase A edits; line numbers shift as you edit, so always confirm the flagged line before inserting a disable comment.
3. `npm run lint` must end with **exit 0**. Remaining _warnings_ are acceptable (do not chase them).
4. Deleting files: verify the reference check first, then delete.

---

## PHASE A — Make `npm run lint` pass (15 errors)

Run `npx eslint` first to confirm the current list. It is exactly:

| # | File:line | Rule |
|---|---|---|
| 1–2 | `scripts/generate-index-html.js:1,2` | `@typescript-eslint/no-require-imports` |
| 3–5 | `src/app/about/page.tsx:181,191,197` | `react/jsx-no-comment-textnodes` |
| 6 | `src/app/contact/page.tsx:81` | `@typescript-eslint/no-explicit-any` |
| 7 | `src/app/dashboard/page.tsx:47` | `react-hooks/set-state-in-effect` |
| 8 | `src/app/dashboard/page.tsx:134` | `@typescript-eslint/no-explicit-any` |
| 9 | `src/app/dashboard/page.tsx:298` | `react/no-unescaped-entities` |
| 10 | `src/app/event/page.tsx:70` | `react-hooks/set-state-in-effect` |
| 11 | `src/app/impact/page.tsx:28` | `@typescript-eslint/no-explicit-any` |
| 12 | `src/components/Navbar.tsx:18` | `react-hooks/set-state-in-effect` |
| 13 | `src/components/PledgeModal.tsx:55` | `react-hooks/set-state-in-effect` |
| 14 | `src/components/home/ImpactSection.tsx:24` | `react-hooks/set-state-in-effect` |
| 15 | `src/components/home/TestimonialCarousel.tsx:95` | `react-hooks/set-state-in-effect` |

### A1. `set-state-in-effect` (6 errors)

These are all **client-only hydration** effects (reading `localStorage`, syncing from the URL, or matching `prefers-reduced-motion`) — the pattern is intentional and refactoring to `useSyncExternalStore` is out of scope. Add a **line-level disable with a rationale** immediately above the flagged `setState` call:

```tsx
// eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
```

Apply at these sites (confirm the exact line with `npx eslint <file>`):

| File | Flagged call |
|---|---|
| `src/app/dashboard/page.tsx` | `loadData();` inside the mount `useEffect` |
| `src/app/event/page.tsx` | `setSelectedChapter(idx);` (and `setActiveTab("Chapters")` if also flagged) inside the `searchParams` effect |
| `src/components/Navbar.tsx` | `setIsMobileMenuOpen(false);` inside the `pathname` effect |
| `src/components/PledgeModal.tsx` | the `setFullName(...)` / `setEmail(...)` block inside the `isOpen` effect |
| `src/components/home/ImpactSection.tsx` | `setCount(end);` inside the reduced-motion effect |
| `src/components/home/TestimonialCarousel.tsx` | `onSelect();` inside the `emblaApi` effect |

> Optional clean win: in `TestimonialCarousel`, `useState(0)` already matches the first slide, so you can simply **delete** the `onSelect();` line instead of disabling. Either is acceptable.

### A2. `no-explicit-any` (3 errors)

**(a) `src/app/impact/page.tsx:28`** — add an interface above `export default function ImpactPage()` and use it:

```tsx
interface PressClipping {
  id: string;
  outlet: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  quote: string;
  link: string;
  image: string;
}
```

Change:
```tsx
const [selectedClipping, setSelectedClipping] = useState<any | null>(null);
```
to:
```tsx
const [selectedClipping, setSelectedClipping] = useState<PressClipping | null>(null);
```

**(b) `src/app/contact/page.tsx:81`** — replace the `any` catch:

Find:
```tsx
} catch (err: any) {
  setStatusMessage({
    type: "error",
    text: err.message || "An unexpected error occurred. Please try again.",
  });
}
```
Replace with:
```tsx
} catch (err) {
  setStatusMessage({
    type: "error",
    text: err instanceof Error ? err.message : "An unexpected error occurred. Please try again.",
  });
}
```

**(c) `src/app/dashboard/page.tsx:134`** — introduce a tab union and use it.

Add above the component:
```tsx
type DashboardTab = "overview" | "resources" | "events" | "checklist";
```

Change the state declaration:
```tsx
const [activeTab, setActiveTab] = useState<"overview" | "resources" | "events" | "checklist">(
  "overview"
);
```
to:
```tsx
const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
```

Change:
```tsx
onClick={() => setActiveTab(tab.id as any)}
```
to:
```tsx
onClick={() => setActiveTab(tab.id as DashboardTab)}
```

### A3. `jsx-no-comment-textnodes` — `src/app/about/page.tsx` (3)

The "code visual block" renders `//` comments as JSX text. Wrap each in braces.

Line ~181:
```tsx
<div className="text-slate-500 italic">
  {"// Legacy Industry-Academia Model (Transactional)"}
</div>
```
Line ~191:
```tsx
<div className="pt-3 text-slate-500 italic">
  {"// The SOA Allyship++ Upgrade (Co-Created & Continuous)"}
</div>
```
Line ~197:
```tsx
<span className="text-slate-500 italic">{"// Daily increment"}</span>
```

### A4. `no-unescaped-entities` — `src/app/dashboard/page.tsx:298`

Find:
```tsx
You haven't saved any resources yet. Explore the{" "}
```
Replace with:
```tsx
You haven&apos;t saved any resources yet. Explore the{" "}
```

### A5. `no-require-imports` — `scripts/generate-index-html.js` (2)

The script is CommonJS (`require`) and is correct as-is. Add a file-level disable as the **first line**:

```js
/* eslint-disable @typescript-eslint/no-require-imports */
```

✅ **Accept for Phase A:** `npm run lint` exits **0** (warnings may remain).

---

## PHASE B — Prune unreachable assets (~67 MB)

These files are not referenced anywhere in `src/`. Delete them.

```bash
# Verify first (expect no hit inside src/)
grep -rn "CON01405\|CON01619\|IMG_7376\|IMG_7610\|vc-pradipta" src || echo "no references"

rm public/CON01405.JPG
rm public/CON01619.JPG
rm public/IMG_7376.jpg
rm public/IMG_7610.jpg
rm public/vc-pradipta-kumar-nanda.jpg
rm "public/soa-allyship ++ 2.0_hyd-4.mp4"

# Next.js boilerplate SVGs
rm public/file.svg public/globe.svg public/next.svg public/vercel.svg public/window.svg
```

Do **not** delete: `public/slides/*`, `public/soa-*.jpg`, `public/news-*.jpg|webp`, `public/CON01638.JPG`, `public/CON01670.JPG`, `public/IMG_7492.jpg`, `public/IMG_7364.jpg`, `public/IMG_7577.jpg`, `public/IMG_7849.jpg`, `public/IMG_7873.jpg`, `public/chairman-manojranjan-nayak.png`, `public/soa-logo.png`, `public/favicon.ico`.

✅ **Accept:** `du -sh public` drops from ~171 MB to **~104 MB**; `npm run build` still succeeds.

---

## PHASE C — Remove dead CSS

These selectors have **zero** usages in `src/**/*.tsx`. Delete each rule block (and its `:hover` / `::after` variants) from `src/app/globals.css`:

| Selector | Approx. line |
|---|---|
| `.editorial-card`, `.editorial-card:hover` | 143–153 |
| `.editorial-card-interactive`, `.editorial-card-interactive:hover` | 155–163 |
| `.nav-hidden`, `.nav-visible` | 176–184 |
| `.counter-number` | 239 |
| `.section-divider` | 248 |
| `.text-display-serif` | 271 |
| `.text-editorial-body` | 279 |
| `.btn-ghost`, `.btn-ghost:hover` | 339–360 |
| `.img-editorial`, `.img-editorial:hover`, `.grain-overlay::after` | 385–404 |

> **Keep** `.btn-primary`, `.btn-secondary`, `.logo-ticker-track`, and every `.animate-*` / `@keyframes`.

Because edit line numbers shift, work **top-to-bottom** or re-grep after each deletion:
```bash
grep -n "^\.\(editorial-card\|nav-hidden\|nav-visible\|section-divider\|text-display-serif\|text-editorial-body\|img-editorial\|grain-overlay\|counter-number\|btn-ghost\)" src/app/globals.css
```

✅ **Accept:** `grep -rn "editorial-card\|nav-hidden\|text-display-serif\|btn-ghost" src` returns nothing; build still succeeds; no visual change.

---

## PHASE D — Remove root prototype files

```bash
rm index.html allyship_demo.html
```
Both are standalone Tailwind-CDN prototypes (~217 KB) not part of the Next.js app.

✅ **Accept:** `ls index.html allyship_demo.html` → "No such file".

---

## PHASE E — Accessibility nits

### E1. Mobile menu `aria-controls` — `src/components/Navbar.tsx`

Add `aria-controls` to the toggle button (next to the existing `aria-expanded`):
```tsx
aria-expanded={isMobileMenuOpen}
aria-controls="mobile-navigation"
```

Give the drawer an `id`:
```tsx
<div id="mobile-navigation" className="lg:hidden border-t border-[var(--color-border)] bg-[#0A0A0A]/98 backdrop-blur-2xl shadow-2xl">
```

### E2. Loading spinner semantics — `src/app/loading.tsx`

Add `role="status"` and a screen-reader label:
```tsx
<div role="status" aria-live="polite" className="flex items-center gap-3 text-zinc-400">
  <span className="h-5 w-5 rounded-full border-2 border-white/15 border-t-[var(--color-accent)] animate-spin" />
  <span className="font-sans text-sm">Loading…</span>
  <span className="sr-only">Loading content</span>
</div>
```

✅ **Accept:** `aria-controls="mobile-navigation"` resolves to the drawer id; the loading state announces itself.

---

## PHASE F — Optional: refresh the README

`README.md` still describes the old light "Allyship DEI platform" (navy `#0F172A` + coral `#F97316`, pledge-flow product). Update it to describe:
- **ALLYSHIP++** — SOA University industry-academia conclave site,
- dark-luxury palette (`#0A0A0A` canvas, `#C5A869` gold),
- routes: `/`, `/about`, `/event`, `/impact`, `/discover-soa`, `/collaborate`, `/contact`, `/community`, `/resources`, `/initiatives`, `/dashboard`,
- fonts loaded via Google Fonts stylesheet (not `next/font`).

Low priority; skip if not requested.

---

## PHASE G — Verification checklist

1. `npm run lint` → **exit 0** (warnings allowed).
2. `npm run build` → **exit 0**; `cat .next/BUILD_ID` returns a value.
3. `du -sh public` → ~104 MB.
4. `grep -rn "editorial-card\|nav-hidden\|nav-visible\|section-divider\|text-display-serif\|text-editorial-body\|img-editorial\|grain-overlay\|counter-number\|btn-ghost" src` → no matches.
5. `ls index.html allyship_demo.html` → not found.
6. Spot-check in dev: mobile menu still opens/closes; dashboard tabs still switch; about code block still renders the `//` comments as visible text.
7. `/robots.txt` still shows `Sitemap: https://allyship.soa.ac.in/sitemap.xml`.

---

## Appendix — files touched by phase

| Phase | Files |
|---|---|
| A | `scripts/generate-index-html.js`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/dashboard/page.tsx`, `src/app/event/page.tsx`, `src/app/impact/page.tsx`, `src/components/Navbar.tsx`, `src/components/PledgeModal.tsx`, `src/components/home/ImpactSection.tsx`, `src/components/home/TestimonialCarousel.tsx` |
| B | delete 11 files under `public/` |
| C | `src/app/globals.css` |
| D | delete `index.html`, `allyship_demo.html` |
| E | `src/components/Navbar.tsx`, `src/app/loading.tsx` |
| F | `README.md` (optional) |

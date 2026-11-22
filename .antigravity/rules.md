# Visual & Structural Integrity Guardrail (ALLYSHIP++)

This rule is always active for every prompt, file edit, and build check in this workspace.

## 1. Zero Content Alteration
- Never modify, delete, summarize, or rewrite any existing text, headings, speaker bios, dates, links, or brand copy unless explicitly instructed.

## 2. Strict Modular Type Scale
- Use the standardized CSS typography tokens in `src/app/globals.css`:
  - `--font-heading` / `--font-display` for headings, KPIs, and display titles
  - `--font-body` / `--font-sans` for body copy (`>= 16px` desktop baseline) and UI labels (`>= 11px` floor)
  - `--font-accent` / `--font-serif` for editorial pull-quotes and italic subtitles
- Apply `text-wrap: balance` on headings (`h1`, `h2`) and keep standalone reading paragraphs at comfortable measure (`~60–75ch`).

## 3. Color & WCAG 2.1 AA Contrast Lock
- Preserve WCAG 2.1 AA (`>= 4.5:1` normal text, `>= 3:1` large text) across both dark (`:root`) and light (`[data-theme="light"]`) themes, plus `.on-media` and `.force-dark` scopes.
- Use semantic color tokens (`--t-canvas`, `--t-surface`, `--t-content`, `--t-accent`, `--bg-primary`, `--bg-surface`, `--text-primary`, `--text-muted`, `--accent-primary`) rather than off-brand inline hex values.

## 4. Grid, Alignment & Positioning Precision
- Enforce consistent section rhythm (`py-20 lg:py-28`), aligned vertical axes (`items-stretch` on multi-column editorial splits), and clean responsive behavior at `390px`, `768px`, and `1440px` with zero horizontal overflow (`overflow-x: hidden`).
- Never apply `whitespace-nowrap` to multi-word headings or body paragraphs that can overflow on `390px` mobile or `1024px–1280px` laptop viewports.

## 5. 60fps Motion & Accessibility
- Restrict animations to GPU-composited properties (`transform`, `opacity`, `clip-path`, `backdrop-filter`).
- Maintain `prefers-reduced-motion: reduce` fallbacks and zero layout shift (`CLS = 0`).

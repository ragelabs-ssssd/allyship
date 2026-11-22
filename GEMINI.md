# GEMINI.md — Visual & Structural Integrity Guardrail

Always enforce the rules in `.antigravity/rules.md` on every edit and build in the **ALLYSHIP++** repository:

1. **Zero Content Alteration:** Never rewrite, delete, or alter existing text, headings, bios, dates, or copy unless explicitly requested.
2. **Modular Typography:** Use `--font-heading`, `--font-body`, `--font-accent`, and CSS `clamp()` scales from `src/app/globals.css`. Keep UI micro-copy `>= 11px` and headings balanced (`text-wrap: balance`).
3. **WCAG 2.1 AA Contrast Lock:** Never introduce low-contrast hex values below `4.5:1`; always use theme-aware tokens (`text-content`, `text-content-secondary`, `text-content-muted`, `text-accent`, `bg-surface`, `bg-canvas`).
4. **Responsive Precision (`390px` / `768px` / `1440px`):** Prevent horizontal clipping (`whitespace-nowrap` only on short single-token badges/buttons), balance 12-column editorial splits with `items-stretch`, and maintain consistent section padding.
5. **60fps Motion & Reduced Motion:** Animate only `transform`, `opacity`, `clip-path`, and `backdrop-filter`, with `prefers-reduced-motion` respected.

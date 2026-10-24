export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas">
      <div role="status" aria-live="polite" className="flex items-center gap-3 text-content-muted">
        <span className="h-5 w-5 rounded-full border-2 border-line border-t-accent animate-spin" />
        <span className="font-sans text-sm">Loading…</span>
        <span className="sr-only">Loading content</span>
      </div>
    </div>
  );
}

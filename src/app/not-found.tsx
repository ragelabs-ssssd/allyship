import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas px-6 py-24">
      <div className="text-center max-w-lg space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-line text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          <Sparkles className="w-3.5 h-3.5" />
          Page Not Found
        </span>

        <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-content">
          404
        </h1>

        <p className="text-base text-content-muted leading-relaxed">
          The page you are looking for does not exist or has moved. Return to the
          conclave to continue exploring the chapters.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans text-sm font-medium px-6 py-3.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

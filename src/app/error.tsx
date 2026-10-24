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
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas px-6 py-24">
      <div className="text-center max-w-lg space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-line text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          <AlertTriangle className="w-3.5 h-3.5" />
          Something Went Wrong
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-content">
          An unexpected error occurred
        </h1>

        <p className="text-base text-content-muted leading-relaxed">
          We could not complete that request. Please try again, or return to the
          home page.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans text-sm font-medium px-6 py-3 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-content-secondary hover:text-content bg-surface-3 hover:bg-surface-3 border border-line hover:border-line-strong transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

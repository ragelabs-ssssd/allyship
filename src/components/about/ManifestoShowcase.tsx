"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Building2 } from "lucide-react";

export function ManifestoShowcase() {
  return (
    <section
      id="manifesto"
      className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Monumental Typographic Sculpture (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent block">
            04 // THE DOCTRINE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content uppercase tracking-tight leading-[1.02]">
            NOT A SUMMIT.<br />
            <span className="text-accent italic font-serif font-light">A LIVING</span><br />
            COVENANT.
          </h2>
          <div className="w-16 h-0.5 bg-accent" />
          <p className="font-serif italic text-base sm:text-lg text-content-secondary leading-relaxed">
            &ldquo;Where academic integrity and executive foresight converge to eliminate career friction for India&apos;s next generation.&rdquo;
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary text-[11px] font-medium">
              NIRF #15 in Universities
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary text-[11px] font-medium">
              NAAC A++ Grade
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-accent text-[11px] font-medium">
              Category-1 Autonomy
            </span>
          </div>
        </div>

        {/* 3 Hairline Rows (7 cols) */}
        <div className="lg:col-span-7 divide-y divide-line">
          <div className="py-7 first:pt-0 group flex items-start gap-6">
            <span className="font-mono text-xl sm:text-2xl text-accent font-bold shrink-0 pt-0.5">
              01
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-content font-heading group-hover:text-accent transition-colors">
                Personal Capital over Safe Branding
              </h3>
              <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                Senior executives spend political and institutional capital to open career doors—not performative public statements or generic brand pledges.
              </p>
            </div>
          </div>

          <div className="py-7 group flex items-start gap-6">
            <span className="font-mono text-xl sm:text-2xl text-accent font-bold shrink-0 pt-0.5">
              02
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-content font-heading group-hover:text-accent transition-colors">
                Syllabi Co-Created Every Semester
              </h3>
              <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                Zero academic lag. Courses, campus labs, and evaluation frameworks updated directly in consultation with tier-1 engineering and corporate leadership.
              </p>
            </div>
          </div>

          <div className="py-7 last:pb-0 group flex items-start gap-6">
            <span className="font-mono text-xl sm:text-2xl text-accent font-bold shrink-0 pt-0.5">
              03
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold text-content font-heading group-hover:text-accent transition-colors">
                Audited 94.54% Career Trajectory
              </h3>
              <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                Verified compensation parity, zero-day production deployment, and sustained high-growth trajectories across India&apos;s primary commercial corridors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

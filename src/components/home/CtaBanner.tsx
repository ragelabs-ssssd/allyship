"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionReveal } from "../animations/SectionReveal";

interface CtaBannerProps {
  onOpenInvite: () => void;
}

export function CtaBanner({ onOpenInvite }: CtaBannerProps) {
  return (
    <section className="py-24 lg:py-36 bg-canvas text-content relative overflow-hidden border-t border-line">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(201,169,110,0.12)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center space-y-8">
        <SectionReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent bg-surface-3 border border-accent/30 shadow-sm">
            Executive Participation
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] max-w-5xl mx-auto text-content">
            Join the Next Chapter of Industry–Academia Leadership.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="font-sans text-base sm:text-lg font-normal tracking-[0.01em] leading-relaxed text-content-secondary max-w-xl mx-auto">
            Curated delegations for CHROs, GCC Managing Directors, and Corporate Strategists
            seeking collaborative partnerships, applied research, and top-tier talent.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenInvite}
            className="inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans font-medium text-sm px-6 py-3.5 transition-colors duration-200 shadow-sm"
          >
            <span>Request Executive Invitation</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-white text-xs">
              →
            </span>
          </button>
        </SectionReveal>

        <SectionReveal delay={0.4} className="pt-4">
          <div className="inline-flex items-center gap-2 text-xs text-content-muted tracking-wider font-medium">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Strictly curated guest list • Zero commercial registration fees</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

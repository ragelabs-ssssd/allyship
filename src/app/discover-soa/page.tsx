"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Trophy,
  X,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop, SOA_VIDEO_SRC } from "@/components/HeroBackdrop";
import { NirfRankingsShowcase } from "@/components/discover/NirfRankingsShowcase";
import { AccreditationsShowcase } from "@/components/discover/AccreditationsShowcase";
import { TimelineShowcase } from "@/components/discover/TimelineShowcase";
import { GlobalRankingsShowcase } from "@/components/discover/GlobalRankingsShowcase";

export default function DiscoverSoaPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-line overflow-hidden">
        <HeroBackdrop videoSrc={SOA_VIDEO_SRC} />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-[11px] font-bold font-heading tracking-[0.14em] uppercase">
              <span>Deemed to be University · Bhubaneswar, India</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              Discover <br />
              <span className="italic font-normal sm:whitespace-nowrap">Siksha &lsquo;O&rsquo; Anusandhan</span>
            </h1>

            <p className="text-lg sm:text-xl font-display text-content-muted italic">
              Ranked 15th Nationally · NAAC A++ · UGC Category-I Autonomy
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl font-normal">
              Siksha &lsquo;O&rsquo; Anusandhan (SOA) is eastern India&apos;s preeminent multi-disciplinary research university—bridging regional talent with global industry through 13 constituent faculties, 18 specialized research centres, 30,000+ scholars, and 38 Stanford-indexed Top 2% scientists across a unified 127-acre academic biome.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsTourOpen(true)}
                className="btn-primary"
              >
                <span>Take Virtual Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="btn-secondary"
              >
                <span>Request Executive Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NIRF INDIA RANKINGS - 2025 SECTION (Screenshot 1) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px] font-bold font-heading tracking-[0.14em] uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Ministry of Education · Govt. of India</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            NIRF India Rankings — 2025
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Consistently ranked among India&apos;s Top 25 Universities across every edition of the National Institutional Ranking Framework.
          </p>
        </div>

        {/* NIRF Showcase with Proper Presentable Hierarchy */}
        <NirfRankingsShowcase onOpenSlide={() => setSelectedSlide("/discover/nirf-rankings-2025.jpg")} />
      </section>

      {/* 3. OTHER RANKINGS SECTION: QS & THE + SWACHHATA (Screenshot 2) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Global Benchmarking &amp; Accolades
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            International Rankings &amp; Global Standing
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Ranked among the premier institutions in the world by Quacquarelli Symonds (QS) and Times Higher Education (THE).
          </p>
        </div>

        <GlobalRankingsShowcase />
      </section>

      {/* 4. ACCREDITATIONS & MAJOR RECOGNITIONS (Screenshots 3 & 4) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            National &amp; International Certifications
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Accreditations &amp; Major Recognitions
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Validated by national statutory authorities, healthcare boards, laboratory accreditors, and global standards bodies.
          </p>
        </div>

        {/* Dynamic Showcase with 5 Out-of-the-Box Layouts */}
        <AccreditationsShowcase onOpenSlide={(url) => setSelectedSlide(url)} />
      </section>

      {/* 5. EVOLUTION & GROWTH (Screenshot 5) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Three Decades of Institutional Nation-Building
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Evolution &amp; Growth Timeline
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            From the founding of ITER in 1996 to modern pharmaceutical super-centres, advanced medical campuses, and sovereign AI labs in 2026.
          </p>
        </div>

        <TimelineShowcase />
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      {/* Presentation Slide Lightbox Modal */}
      {selectedSlide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedSlide(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-surface-2 rounded-3xl overflow-hidden border border-line shadow-2xl p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-line text-content">
              <span className="font-bold text-sm font-heading">Institutional Verification Slide</span>
              <button
                type="button"
                onClick={() => setSelectedSlide(null)}
                className="p-2 rounded-full hover:bg-glass-strong text-content-muted hover:text-content transition-colors"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black mt-3">
              <Image
                src={selectedSlide}
                alt="Official Institutional Ranking and Accreditation Slide"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tour Modal */}
      {isTourOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl bg-surface rounded-3xl overflow-hidden border border-line shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-line text-content">
              <span className="font-bold text-sm font-heading">SOA University Campus &amp; Research Labs Virtual Tour</span>
              <button
                type="button"
                onClick={() => setIsTourOpen(false)}
                className="p-2 rounded-full hover:bg-glass-strong text-content-muted hover:text-content transition-colors"
                aria-label="Close virtual tour"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/8wSGKsWyQwk?autoplay=1"
                title="SOA University Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

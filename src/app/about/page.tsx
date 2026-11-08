"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  Medal,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { BentoGridConcept } from "@/components/about/BentoGridConcept";

export default function AboutPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Sports Legends Regional Conclaves
  const sportsAnchors = [
    {
      city: "Bengaluru Chapter",
      legend: "Anju Bobby George",
      role: "World Athletics Medalist & Olympian",
      domain: "Resilience, grit, and creating psychological safety in high-performance squads.",
    },
    {
      city: "Hyderabad Chapter",
      legend: "Arshad Ayub",
      role: "Former Test Cricketer & National Selector",
      domain: "Patience in talent development and long-range institutional succession planning.",
    },
    {
      city: "Kolkata Chapter",
      legend: "Gurbux Singh & Gautam Sarkar",
      role: "Olympic Gold Medalist (Hockey) & Football Legend",
      domain: "Cross-generational cohesion, humility, and trust under championship pressure.",
    },
    {
      city: "Mumbai Chapter",
      legend: "Nilesh Kulkarni & Anand Menezes",
      role: "Test Cricketer & Olympian Sprinter",
      domain: "Translating athletic rigor into enterprise culture and corporate leadership.",
    },
    {
      city: "Chennai Chapter",
      legend: "Premanand J.",
      role: "Paris Olympics 2024 National Sprint Coach",
      domain: "Micro-coaching, high-precision feedback loops, and compounding incremental gains.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-12">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[640px] lg:min-h-[720px] flex items-center justify-center border-b border-line overflow-hidden">
        <HeroBackdrop />
        {/* Ambient gold background glow */}
        <div className="absolute top-[calc(50%+36px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,105,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-[11px] font-bold font-heading tracking-[0.14em] uppercase shadow-sm">
              <span>Institutional Philosophy &amp; Mandate</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              Why &ldquo;Allyship<span className="text-accent">++</span>&rdquo;?
            </h1>

            <p className="text-lg sm:text-xl font-display text-content-muted max-w-2xl mx-auto italic">
              Bridging Corporate Corridors with Regional Talent Through Active Leadership and Mutual Trust.
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-4xl mx-auto font-normal">
              Allyship is the deliberate discipline where leaders with institutional power open doors, absorb political risk, and sponsor emerging talent.
            </p>

          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL NARRATIVE & THE CODE VISUAL BLOCK */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Column: 3-Paragraph Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                The Genesis of Allyship++
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
                Industry and Academia, in the Same Room
              </h2>
            </div>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              For decades, university placement in India operated as a yearly, one-way transaction: institutions waited on campus for recruiters to arrive. Allyship++ reverses that equation. Siksha &lsquo;O&rsquo; Anusandhan travels directly to the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai to listen first. While a diversity policy states what an organisation intends on paper, allyship determines what happens on an ordinary Tuesday—who receives credit in a meeting, who is sponsored for a stretch project, and who speaks up when a boundary is crossed.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              The &ldquo;++&rdquo; carries a dual meaning rooted in engineering and organizational leadership: in programming, the <code className="text-accent bg-glass-strong px-2 py-0.5 rounded border border-line font-mono font-semibold">++</code> operator increments a value by one step at a time, and marks the historic leap from procedural C to object-oriented C++. Applied to corporate-academic leadership, Allyship++ represents a continuous, compounding upgrade—expanding traditional DEI to encompass generational allyship for Gen-Z professionals, psychological safety for junior analysts, and co-created curricula between universities and employers.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Uniquely, every ALLYSHIP++ conclave pairs corporate talent strategists with Olympic and national athletic coaches. This cross-domain synthesis demonstrates that the radical psychological safety, high-stakes feedback loops, and coach-athlete sponsorship required to reach world podiums are the exact leadership disciplines needed to build resilient enterprise teams.
            </p>

            <div className="pt-2">
              <a
                href="#journey-pillars"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-content transition-colors"
              >
                <span>Explore the Institutional Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: The Conclave Mandate Banner Visual */}
          <div id="manifesto" className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end scroll-mt-28">
            <div className="w-full max-w-xl lg:max-w-none xl:max-w-[680px] 2xl:max-w-[720px]">
              <div className="relative rounded-3xl bg-surface border border-line shadow-2xl overflow-hidden force-dark group hover:border-accent/50 transition-all duration-300 aspect-[1024/414] min-h-[260px] sm:min-h-[300px]">
                <Image
                  src="/conclave-mandate-delegation.jpg"
                  alt="The Conclave Mandate — We Do Not Sign Pledges. We Alter Trajectories."
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                />

                {/* Letterbox Gold Accent Hairlines */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent pointer-events-none" />

                {/* Corner Gold Accent Brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent pointer-events-none rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent pointer-events-none rounded-br-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RE-IMAGINED INSTITUTIONAL ARCHITECTURE (5 INTERACTIVE CONCEPTS) */}
      <section
        id="journey-pillars"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <BentoGridConcept />
      </section>

      {/* 6. THE BOARDROOM-TO-ARENA SYNTHESIS */}
      <section
        id="sports-synthesis"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <div className="bg-gradient-to-br from-surface-2 via-surface to-surface-sunken text-content rounded-3xl p-8 sm:p-12 lg:p-16 border border-line shadow-2xl space-y-12">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Championship Psychology in the Boardroom
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
                Why Olympic Champions Anchor Allyship++
              </h2>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                High-performance athletics represents the ultimate meritocratic arena in which psychological safety, coach-athlete allyship, discipline, and mutual trust under extreme pressure directly dictate collective triumph.
              </p>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                From Olympic podiums to global corporate boardrooms, SOA conclaves demonstrate that nurturing young talent requires the exact blend of discipline, empathy, and transformative mentorship practiced by elite national coaches.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-3 border border-accent/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Medal className="w-4 h-4" />
                <span>The Core Athletic Parallel</span>
              </div>
              <p className="text-sm text-content-secondary leading-relaxed italic">
                &ldquo;An Olympic coach doesn&apos;t run the anchor leg; they eliminate friction, absorb external pressure, and build unshakeable psychological safety so emerging talent can execute without fear under championship stakes. That is the definition of executive allyship.&rdquo;
              </p>
            </div>
          </div>

          {/* 5 City Regional Chapters Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-content-muted font-heading">
              National Conclave Sports Anchors &amp; Mentorship Themes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {sportsAnchors.map((sa) => (
                <div
                  key={sa.city}
                  className="p-5 rounded-2xl bg-surface-3 border border-line hover:border-accent/50 transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-glass text-accent border border-line block w-fit">
                      {sa.city}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-content group-hover:text-accent transition-colors">
                      {sa.legend}
                    </h4>
                    <p className="text-[11px] font-medium text-content-muted">
                      {sa.role}
                    </p>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-relaxed pt-2 border-t border-line font-normal">
                    {sa.domain}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTITUTIONAL CALL TO ACTION */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 text-center border border-line shadow-2xl max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-surface-2 to-surface overflow-hidden">
          {/* Subtle gold glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,105,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-accent bg-surface-3 border border-accent/30 shadow-sm">
              Executive Conclave Participation
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-content tracking-tight">
              Connect with SOA Leadership
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-xl mx-auto leading-relaxed font-normal">
              Corporate directors, talent strategists, and engineering leaders are invited to join our closed-door conclaves, co-author live curricula, and co-establish dedicated campus Centres of Excellence.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsInviteOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans font-semibold text-sm px-8 py-3.5 transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(201,169,110,0.3)] hover:-translate-y-0.5"
            >
              <span>Get Invited</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/80 text-white text-xs">
                →
              </span>
            </button>

            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 rounded-full bg-surface-2 hover:bg-surface-3 text-content border border-line hover:border-line-strong font-sans font-semibold text-sm px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Collaboration Tracks</span>
              <ArrowRight className="w-4 h-4 text-content-muted" />
            </Link>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-center gap-2 text-xs text-content-muted">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Strictly curated guest list • Zero commercial registration fees</span>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

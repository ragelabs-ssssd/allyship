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
      city: "Bengaluru",
      legend: "Anju Bobby George",
      role: "World Athletics Medalist & Olympian",
      domain: "Resilience, grit, and creating psychological safety in high-performance squads.",
    },
    {
      city: "Hyderabad",
      legend: "Arshad Ayub",
      role: "Former Test Cricketer & National Selector",
      domain: "Patience in talent development and long-range institutional succession planning.",
    },
    {
      city: "Kolkata",
      legend: "Gurbux Singh & Gautam Sarkar",
      role: "Olympic Gold Medalist (Hockey) & Football Legend",
      domain: "Cross-generational cohesion, humility, and trust under championship pressure.",
    },
    {
      city: "Mumbai",
      legend: "Nilesh Kulkarni & Anand Menezes",
      role: "Test Cricketer & Olympian Sprinter",
      domain: "Translating athletic rigor into enterprise culture and corporate leadership.",
    },
    {
      city: "Chennai",
      legend: "Premanand J.",
      role: "Paris Olympics 2024 National Sprint Coach",
      domain: "Micro-coaching, high-precision feedback loops, and compounding incremental gains.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-12">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[720px] sm:min-h-[780px] lg:min-h-[820px] xl:min-h-[840px] flex items-center justify-center border-b border-line overflow-hidden">
        <HeroBackdrop align="center" />
        {/* Ambient gold background glow */}
        <div className="absolute top-[calc(50%+36px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,105,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              <span>Institutional Philosophy &amp; Mandate</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              The ALLYSHIP<span className="text-accent">++</span> Thesis
            </h1>

            <p className="text-lg sm:text-xl font-display text-content-muted max-w-3xl mx-auto italic">
              Where Relationships Precede Recruitment — Bridging Three Decades of Academic Inquiry with the Leaders Shaping India&rsquo;s Future.
            </p>

          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL NARRATIVE & THE CODE VISUAL BLOCK */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        {/* Section Heading - Single Line */}
        <div className="space-y-2 text-left mb-8 lg:mb-12">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            The Origin &amp; Mandate
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-bold text-content tracking-tight md:whitespace-nowrap">
            Bridging Two Worlds: The Genesis of ALLYSHIP<span className="text-accent">++</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Column: 4-Paragraph Relatable Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              For too long, university-industry ties were limited to annual campus visits. ALLYSHIP was founded on a simple truth: preparing future talent requires continuous dialogue, not periodic transactions.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Instead of waiting behind gates, Siksha &lsquo;O&rsquo; Anusandhan stepped directly into metropolitan boardrooms across India to listen. We asked: <em>How do we build workplaces where young talent genuinely thrives?</em>
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              The <code className="text-accent bg-glass-strong px-2 py-0.5 rounded border border-line font-mono font-semibold">++</code> signifies compounding impact—moving beyond hiring metrics toward psychological safety, executive mentorship, and curricula co-designed with corporate practitioners.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Uniting Olympic mentors with boardroom chairs, we draw on a timeless athletic truth: potential turns into excellence only when trusted mentors guide talent through setbacks.
            </p>

            {/* Living Standard Callout Card */}
            <div className="p-5 rounded-2xl bg-surface-2 border border-accent/25 space-y-2 mt-4">
              <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent block">
                The Living Standard · Practicing Allyship
              </span>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed italic">
                &ldquo;A diversity policy says what an organization intends on paper. Allyship is what happens on an ordinary Friday—who is heard in a meeting, who is trusted with a challenging project, and who speaks up when an early-career colleague is overlooked.&rdquo;
              </p>
            </div>

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

          {/* Right Column: The Conclave Mandate Banner Visual (Chennai Conclave high-res background with blur & razor-sharp typography) */}
          <div id="manifesto" className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end scroll-mt-28">
            <div className="w-full max-w-xl lg:max-w-none xl:max-w-[640px] 2xl:max-w-[700px]">
              <div className="relative rounded-3xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden force-dark group hover:border-accent/40 transition-all duration-500 h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] xl:h-[520px] 2xl:h-[540px] flex items-center justify-center p-6 sm:p-10 lg:p-12 text-center select-none">
                {/* Background Image: High-Resolution Chennai Conclave Delegation with Cinematic Blur */}
                <div className="absolute inset-0">
                  <Image
                    src="/slides/CON01670.jpg"
                    alt="Allyship++ Chennai Conclave Delegation"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    priority
                  />
                  {/* Subtle blur overlay + dark cinematic grade */}
                  <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_15%,_rgba(0,0,0,0.85)_100%)]" />
                </div>

                {/* Razor-Sharp Vector Typography (Exact Conclave Mandate Concept) */}
                <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-5">
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-accent block">
                    The Conclave Mandate
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black text-white uppercase tracking-tight leading-[1.08] drop-shadow-lg">
                    We Do Not<br />
                    Sign Pledges.<br />
                    <span className="text-accent italic font-serif font-light lowercase capitalize">We Alter</span><br />
                    Trajectories.
                  </h3>

                  <p className="text-[10px] sm:text-[11px] md:text-xs font-mono text-content-secondary uppercase tracking-[0.18em] pt-1 sm:pt-2 text-white/80 max-w-md leading-relaxed">
                    7 National Conclaves &middot; 500+ Boardroom CXOs
                  </p>
                </div>
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
              Engage with SOA Leadership
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

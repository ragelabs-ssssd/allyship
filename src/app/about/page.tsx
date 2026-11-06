"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Volume2,
  ShieldCheck,
  Compass,
  Building2,
  GraduationCap,
  Target,
  ArrowRight,
  Award,
  Terminal,
  Scale,
  CheckCircle2,
  Trophy,
  Medal,
  Users,
  ExternalLink,
  ChevronRight,
  Layers,
  HelpCircle,
  Cpu,
  Sparkles,
  Globe,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { BentoGridConcept } from "@/components/about/BentoGridConcept";

export default function AboutPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // The 3-Question Litmus Test Rubric
  const litmusTestQuestions = [
    {
      id: "cost",
      number: "01",
      title: "Personal Cost Test",
      question: "Does it cost the leader comfort, time, or political capital?",
      rubric:
        "If an action requires zero personal vulnerability or expenditure of political capital, it is brand management, not allyship. Authentic allies spend reputational currency to advocate for emerging talent when stakes are high.",
    },
    {
      id: "outcome",
      number: "02",
      title: "Outcome Shift Test",
      question: "Does it tangibly change what happens to the colleague?",
      rubric:
        "Sympathetic intentions do not alter career trajectories; verifiable institutional outcomes do. Authentic allyship manifests in compensation parity, stretch assignments, and accelerated promotion velocity.",
    },
    {
      id: "integrity",
      number: "03",
      title: "Unobserved Integrity Test",
      question: "Would it still happen behind closed doors if no one were watching?",
      rubric:
        "Public statements on LinkedIn mean nothing if a leader remains silent during closed-door talent calibration reviews. Authentic advocacy thrives in private boardrooms where there are zero applause points to gain.",
    },
  ];

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
      <section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-36 min-h-[660px] lg:min-h-[760px] flex items-center justify-center border-b border-line overflow-hidden">
        <HeroBackdrop />
        {/* Ambient gold background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,105,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase shadow-sm">
              <span>About the Movement · Continuous Compounding Inclusion</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              Why &ldquo;Allyship<span className="text-accent">++</span>&rdquo;?
            </h1>

            <p className="text-xl sm:text-2xl font-heading text-content-secondary max-w-2xl mx-auto italic">
              Continuous, compounding inclusion — moving from passive statements to daily leadership practice.
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl mx-auto font-normal">
              Allyship is the deliberate, ongoing practice in which leaders with institutional power work in active solidarity with emerging and underrepresented talent. The &ldquo;++&rdquo; signifies continuous evolution—incrementing inclusion day after day through observable action.
            </p>

          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL NARRATIVE & THE CODE VISUAL BLOCK */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Column: 3-Paragraph Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              The Genesis of Allyship++
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
              Industry and Academia, in the Same Room
            </h2>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              For decades, university placement in India operated as a yearly, one-way transaction: institutions waited on campus for recruiters to arrive. Allyship++ reverses that equation. Siksha &lsquo;O&rsquo; Anusandhan travels directly to the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai to listen first. While a diversity policy states what an organisation intends on paper, allyship determines what happens on an ordinary Tuesday—who receives credit in a meeting, who is sponsored for a stretch project, and who speaks up when a boundary is crossed.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              The &ldquo;++&rdquo; carries a dual meaning rooted in engineering and organizational leadership: in programming, the <code className="text-accent bg-glass-strong px-2 py-0.5 rounded border border-line font-mono font-semibold">++</code> operator increments a value by one step at a time, and marks the historic leap from procedural C to object-oriented C++. Applied to corporate-academic leadership, Allyship++ represents a continuous, compounding upgrade—expanding traditional DEI to encompass generational allyship for Gen-Z professionals, psychological safety for junior analysts, and co-created curricula between universities and employers.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Uniquely, every Allyship++ chapter pairs corporate HR and technology panels with India&apos;s sporting legends—from Olympic gold medalist Gurbux Singh and athletics pioneer Anju Bobby George to Test cricketers Arshad Ayub and Nilesh Kulkarni, and Paris Olympics sprint coach Premanand J.—proving that the mentorship, discipline, and trust that win medals in the arena are identical to the allyship that builds high-performing teams in the boardroom.
            </p>

            <div className="pt-2">
              <a
                href="#roles-framework"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-content transition-colors"
              >
                <span>Explore the 7 Leadership Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Code visual block */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-none xl:max-w-[640px] 2xl:max-w-[700px]">
            <div className="relative rounded-3xl bg-surface border border-line shadow-2xl overflow-hidden force-dark group hover:border-accent/40 transition-colors duration-300">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-line">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-content-muted font-mono">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span>AllyshipIncrement.ts</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-glass text-content-muted border border-white/5">
                  TypeScript
                </span>
              </div>

              {/* Code Editor Body with Line Numbers */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-6 bg-[#0D0D0D] overflow-x-auto">
                <div className="table w-full">
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">01</span>
                    <span className="table-cell text-content-faint italic">{"// Legacy Placement Model (Annual & Transactional)"}</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">02</span>
                    <span className="table-cell"><span className="text-danger">placement</span>.<span className="text-accent-light">mode</span> = <span className="text-success">&quot;annual_recruitment&quot;</span>;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">03</span>
                    <span className="table-cell"><span className="text-danger">inclusion</span>.<span className="text-accent-light">scope</span> = <span className="text-success">&quot;paper_policy_only&quot;</span>;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">04</span>
                    <span className="table-cell">&nbsp;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">05</span>
                    <span className="table-cell text-content-faint italic">{"// The SOA Allyship++ Upgrade (Continuous & Co-Created)"}</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">06</span>
                    <span className="table-cell"><span className="text-purple-400">while</span> (<span className="text-sky-400">workplace</span>.<span className="text-accent-light">evolves</span>()) &#123;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">07</span>
                    <span className="table-cell pl-4"><span className="text-accent font-bold">allyship++</span>; <span className="text-content-faint italic">{"// Daily compounding increment"}</span></span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">08</span>
                    <span className="table-cell pl-4"><span className="text-sky-400">boardroom</span>.<span className="text-accent-light">listenFirst</span>([</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">09</span>
                    <span className="table-cell pl-8 text-success">&quot;BLR&quot;, &quot;HYD&quot;, &quot;CCU&quot;, &quot;BOM&quot;, &quot;MAA&quot;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">10</span>
                    <span className="table-cell pl-4">]);</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">11</span>
                    <span className="table-cell pl-4"><span className="text-sky-400">leadership</span>.<span className="text-accent-light">embed</span>([</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">12</span>
                    <span className="table-cell pl-8 text-success">&quot;PsychSafety&quot;, &quot;GenZ&quot;, &quot;Sponsorship&quot;</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">13</span>
                    <span className="table-cell pl-4">]);</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">14</span>
                    <span className="table-cell pl-4"><span className="text-sky-400">curriculum</span>.<span className="text-accent-light">sync</span>(<span className="text-sky-400">industry</span>.<span className="text-accent-light">liveChallenges</span>);</span>
                  </div>
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-content-faint select-none text-[11px] w-8">15</span>
                    <span className="table-cell">&#125;</span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="px-5 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-content-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Compiled cleanly · Compounding inclusion active
                </span>
                <span className="text-accent font-semibold">100% Type-Safe</span>
              </div>

              {/* Corner Gold Accent Brackets — directly anchored to the card */}
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

      {/* 4. THE 3-QUESTION AUTHENTICITY LITMUS TEST */}
      <section
        id="litmus-test"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authenticity Guardrail</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            The 3-Question Authenticity Litmus Test
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Separating genuine institutional advocacy from performative optics. Grounded in research from 40+ CXO panels across India, every allyship initiative must satisfy three mandatory criteria.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {litmusTestQuestions.map((q) => (
            <div
              key={q.id}
              className="relative rounded-3xl p-8 bg-surface border border-line shadow-xl hover:border-accent/60 transition-all flex flex-col justify-between group"
            >
              {/* Large watermark number */}
              <span className="absolute top-6 right-8 text-5xl font-heading font-black text-content/5 pointer-events-none group-hover:text-accent/10 transition-colors">
                {q.number}
              </span>

              <div className="space-y-4 relative z-10">
                <span className="text-[11px] font-bold font-heading text-accent bg-glass border border-line px-3 py-1 rounded-full inline-block">
                  Criterion {q.number}
                </span>

                <h3 className="font-heading text-xl font-bold text-content">
                  {q.title}
                </h3>

                <p className="text-sm font-semibold text-accent-light italic">
                  &ldquo;{q.question}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal pt-2 border-t border-white/5">
                  {q.rubric}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-line flex items-center gap-2 text-xs text-content-muted font-medium">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Mandatory Leadership Benchmark</span>
              </div>
            </div>
          ))}
        </div>
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
                The Sports-Corporate-Academia Triad
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
                Why Sports Legends Anchor Allyship++
              </h2>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                High-performance athletics represents the ultimate meritocratic arena in which psychological safety, coach-athlete allyship, discipline, and mutual trust under extreme pressure directly dictate collective triumph.
              </p>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                From Olympic podiums to global corporate boardrooms, SOA conclaves demonstrate that nurturing young talent requires the exact blend of discipline, empathy, and transformative mentorship practiced by elite national coaches.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-line space-y-3 on-media">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Medal className="w-4 h-4" />
                <span>The Core Athletic Parallel</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                &ldquo;A national coach does not run the sprint or bat the over; they eliminate barriers, build unshakeable confidence, and absorb external heat so the athlete can execute with complete focus. That is authentic corporate allyship.&rdquo;
              </p>
            </div>
          </div>

          {/* 5 City Regional Chapters Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-content-muted font-heading">
              National Conclave Sports Anchors &amp; Mentorship Themes
            </h4>
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
                    <h5 className="font-heading text-sm font-bold text-content group-hover:text-accent transition-colors">
                      {sa.legend}
                    </h5>
                    <p className="text-[11px] font-medium text-content-muted">
                      {sa.role}
                    </p>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-relaxed pt-2 border-t border-white/5 font-normal">
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

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              Connect with SOA University Leadership
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-xl mx-auto leading-relaxed font-normal">
              Corporate leaders, CHROs, and industrial partners are warmly invited to engage in our high-level roundtables, curriculum co-creation, and joint Centre of Excellence initiatives.
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

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

export default function AboutPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // The 7 principles Allyship++ stands for
  const soaJourneyPillars = [
    {
      role: "01. Responsible Leadership",
      badge: "Leadership",
      action: "Leadership is measured by the people it lifts.",
      practice:
        "We explore how leaders use their position to open doors, share credit and create room for others to grow. Allyship is treated as part of the job, not an extra.",
      icon: GraduationCap,
    },
    {
      role: "02. Going to Industry",
      badge: "Partnership",
      action: "SOA goes to industry instead of waiting for it.",
      practice:
        "Each chapter takes the conversation to a different city, so the university listens to leaders where they work. The aim is a relationship that lasts beyond a single day.",
      icon: Compass,
    },
    {
      role: "03. Lessons From Sport",
      badge: "Mentorship",
      action: "The field has much to teach the boardroom.",
      practice:
        "Athletes and coaches share what they know about discipline, resilience and trust. Their stories make abstract ideas about leadership easy to see and remember.",
      icon: Trophy,
    },
    {
      role: "04. Knowledge Exchange",
      badge: "Academia & Industry",
      action: "Classrooms and workplaces learn from each other.",
      practice:
        "Industry brings real challenges into the room. Academia brings research and fresh questions. Both leave with a clearer view of what the next generation needs.",
      icon: Layers,
    },
    {
      role: "05. Mentorship",
      badge: "Emerging Talent",
      action: "Experience is most valuable when it is shared.",
      practice:
        "We encourage senior leaders to guide young professionals and students directly. A single honest conversation can shape how someone sees their career.",
      icon: Users,
    },
    {
      role: "06. Inclusion",
      badge: "Workplace Culture",
      action: "People do their best work when they feel safe and valued.",
      practice:
        "We ask how workplaces can welcome different backgrounds, generations and ways of thinking. Supportive cultures are built through everyday choices, not policies alone.",
      icon: ShieldCheck,
    },
    {
      role: "07. Future-Ready Workplaces",
      badge: "Looking Ahead",
      action: "Preparing people for work that is still taking shape.",
      practice:
        "The way we work keeps changing. We bring industry and academia together to think about the skills, values and leadership that tomorrow's workplaces will need.",
      icon: Cpu,
    },
  ];

  // The 3-Question Litmus Test Rubric
  const litmusTestQuestions = [
    {
      id: "cost",
      number: "01",
      title: "Shared Responsibility",
      question: "Do leaders invest their own time and attention in developing others?",
      rubric:
        "Real allyship asks something of the leader. It means making time to mentor, sharing credit fairly, and backing emerging talent when important opportunities arise.",
    },
    {
      id: "outcome",
      number: "02",
      title: "Visible Growth",
      question: "Does it create real opportunities for colleagues to learn and advance?",
      rubric:
        "Good intentions matter, but progress is measured by what changes for people at work—clearer feedback, meaningful projects, and fair access to growth.",
    },
    {
      id: "integrity",
      number: "03",
      title: "Everyday Consistency",
      question: "Is the same standard practiced in everyday team decisions?",
      rubric:
        "Culture is built in ordinary moments: how meetings are run, how credit is given, and how people are supported when challenges arise.",
    },
  ];

  // Six-Step HR Implementation Blueprint
  const hrBlueprint = [
    {
      step: "01",
      title: "Set Clear Expectations",
      desc: "Translate allyship into everyday habits—such as crediting ideas in meetings, recommending talent for stretch roles, and listening across perspectives.",
    },
    {
      step: "02",
      title: "Equip Line Managers",
      desc: "Support managers first, because they shape daily feedback, project visibility, and team culture. Focus on fair evaluation and constructive guidance.",
    },
    {
      step: "03",
      title: "Build Psychological Trust",
      desc: "Create an environment where people can ask questions, share new ideas, and raise concerns openly with confidence that they will be heard.",
    },
    {
      step: "04",
      title: "Listen Across Generations",
      desc: "Encourage senior leaders to spend time listening to early-career professionals and students, turning generational differences into mutual learning.",
    },
    {
      step: "05",
      title: "Recognize Mentorship",
      desc: "Value mentorship and collaborative leadership as core parts of how senior professionals contribute to the organisation's long-term strength.",
    },
    {
      step: "06",
      title: "Keep Learning Together",
      desc: "Treat workplace culture as ongoing work—reviewing what helps teams succeed, staying open to feedback, and strengthening ties between campus and industry.",
    },
  ];

  // Sports Legends Regional Conclaves
  const sportsAnchors = [
    {
      city: "Bengaluru Chapter",
      legend: "Anju Bobby George",
      role: "World Athletics Medalist & Olympian",
      domain: "Leadership in sports, resilience, and the trust between coach and athlete.",
    },
    {
      city: "Hyderabad Chapter",
      legend: "Arshad Ayub",
      role: "Former Indian Test Cricketer",
      domain: "Composure, patience in nurturing talent, and trust in high-pressure environments.",
    },
    {
      city: "Kolkata Chapter",
      legend: "Gurbux Singh & Gautam Sarkar",
      role: "1964 Olympic Gold Medalist & Football Icon",
      domain: "Teamwork across generations, humility, and shared purpose under pressure.",
    },
    {
      city: "Mumbai Chapter",
      legend: "Nilesh Kulkarni & Anand Menezes",
      role: "Former Test Cricketer & Olympian",
      domain: "Sports education, perseverance, and bringing athletic discipline into workplace leadership.",
    },
    {
      city: "Chennai Chapter",
      legend: "Premanand J.",
      role: "Paris Olympics National Sprint Coach",
      domain: "Resilience, discipline, and how dedicated coaching helps talent reach its potential.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-12">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-line overflow-hidden">
        <HeroBackdrop />
        {/* Ambient gold background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,105,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase shadow-sm">
              <span>An SOA Leadership Initiative</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              Beyond Dialogue. <br />
              <span className="text-accent whitespace-nowrap">Collective Progress.</span>
            </h1>

            <p className="text-xl sm:text-2xl font-heading text-content-secondary max-w-2xl mx-auto italic">
              Bringing academia and industry closer together to shape inclusive, future-ready leadership.
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
              Initiated by Siksha &lsquo;O&rsquo; Anusandhan (SOA), Allyship++ is a national leadership platform connecting corporate executives, HR leaders, academicians, and emerging talent to share knowledge, strengthen mentorship, and build inclusive workplaces where everyone can thrive.
            </p>

            {/* Quick-Nav Framework Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#journey-pillars"
                className="px-4 py-2 rounded-full bg-surface-3 hover:bg-surface-3 border border-line hover:border-accent/50 text-xs font-medium text-content-secondary hover:text-content transition-all flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>7 Core Principles</span>
              </a>
              <a
                href="#litmus-test"
                className="px-4 py-2 rounded-full bg-surface-3 hover:bg-surface-3 border border-line hover:border-accent/50 text-xs font-medium text-content-secondary hover:text-content transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>Leadership Responsibility</span>
              </a>
              <a
                href="#hr-blueprint"
                className="px-4 py-2 rounded-full bg-surface-3 hover:bg-surface-3 border border-line hover:border-accent/50 text-xs font-medium text-content-secondary hover:text-content transition-all flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-accent" />
                <span>Practical Workplace Habits</span>
              </a>
              <a
                href="#sports-synthesis"
                className="px-4 py-2 rounded-full bg-surface-3 hover:bg-surface-3 border border-line hover:border-accent/50 text-xs font-medium text-content-secondary hover:text-content transition-all flex items-center gap-1.5"
              >
                <Trophy className="w-3.5 h-3.5 text-accent" />
                <span>Lessons From Sport</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL NARRATIVE & THE CODE VISUAL BLOCK */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Column: 3-Paragraph Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              Why Allyship++ Exists
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
              Industry and Academia, in the Same Room
            </h2>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Workplaces are changing rapidly, and universities cannot prepare students in isolation from the organisations they will join. Siksha &lsquo;O&rsquo; Anusandhan initiated Allyship++ to take the university directly into India&apos;s major business centres—Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai—to listen to industry leaders and build lasting relationships.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              The <code className="text-accent bg-glass-strong px-2 py-0.5 rounded border border-line font-mono font-semibold">++</code> borrows from the increment operator in programming: a step-by-step commitment to improvement. In the workplace, allyship is not a single policy document; it is practiced in everyday leadership choices—how teams collaborate, how young professionals are guided, and how organisations create room for every voice.
            </p>

            <p className="max-w-[68ch] text-base text-content-secondary leading-relaxed font-normal">
              Each chapter brings corporate executives, HR leaders, and academicians together with accomplished sporting figures—including Olympian Anju Bobby George, 1964 Olympic hockey gold medalist Gurbux Singh, footballer Gautam Sarkar, former Test cricketers Arshad Ayub and Nilesh Kulkarni, and Paris Olympics sprint coach Premanand J.—connecting lessons from the field with leadership in the workplace.
            </p>

            <div className="pt-2">
              <a
                href="#journey-pillars"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-content transition-colors"
              >
                <span>Explore What Allyship++ Stands For</span>
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

      {/* 3. THE 7 PILLARS OF THE SOA ALLYSHIP JOURNEY */}
      <section
        id="journey-pillars"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Core Principles
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            What Allyship++ Stands For
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-3xl mx-auto">
            Seven principles guide the platform—from bringing universities and employers closer together to encouraging responsible leadership, mentorship, and future-ready workplaces.
          </p>
        </div>

        {/* 7 Pillars Grid — Exactly 7 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {soaJourneyPillars.map((r, index) => {
            const IconComponent = r.icon;
            const isLastPillar = index === soaJourneyPillars.length - 1;
            return (
              <div
                key={r.role}
                className={`rounded-3xl p-7 bg-surface text-content border border-line shadow-lg hover:border-accent/80 hover:shadow-[0_0_24px_rgba(201,169,110,0.15)] transition-all duration-300 flex flex-col justify-between group ${
                  isLastPillar ? "md:col-span-2 lg:col-span-3 xl:col-span-2" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full bg-glass text-accent border border-accent/20">
                      {r.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-content group-hover:text-accent-light transition-colors">
                      {r.role}
                    </h3>
                    <p className="text-xs font-semibold text-accent mt-1">
                      {r.action}
                    </p>
                  </div>

                  {/* Practice Description */}
                  <p className="text-xs leading-relaxed text-content-secondary font-normal">
                    {r.practice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Measurable Outcome Milestone Banner */}
        <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-surface border border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-accent/40 transition-colors shadow-lg">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/30 text-accent text-[11px] font-bold font-heading uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sustained Institutional Commitment</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-content">
              Translating Conversations Into Lasting Relationships
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Supported by SOA&apos;s national academic standing and long-term corporate relationships, Allyship++ creates a continuous bridge between university classrooms and industry boardrooms.
            </p>
          </div>
          <Link
            href="/event"
            className="btn-primary self-start lg:self-center whitespace-nowrap"
          >
            <span>Explore Conclave Chapters</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. THE 3-QUESTION AUTHENTICITY LITMUS TEST */}
      <section
        id="litmus-test"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Practicing Allyship</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Allyship as a Leadership Responsibility
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            As discussions at the Chennai 2.0 chapter highlighted, allyship is a leadership responsibility that fosters trust, innovation, and sustainable success. Three questions help turn that commitment into daily practice.
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

      {/* 5. SIX-STEP HR IMPLEMENTATION BLUEPRINT */}
      <section
        id="hr-blueprint"
        className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line"
      >
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            From Principle to Practice
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Putting Allyship to Work
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Six practical habits for HR leaders, team heads, and line managers looking to build supportive, future-ready workplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hrBlueprint.map((b) => (
            <div
              key={b.step}
              className="relative bg-surface p-8 rounded-3xl border border-line shadow-lg hover:border-accent/50 transition-all space-y-4 text-content group"
            >
              {/* Step number watermark */}
              <span className="absolute top-6 right-7 text-4xl font-heading font-extrabold text-content/5 group-hover:text-accent/15 transition-colors">
                {b.step}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold font-heading text-accent bg-accent-subtle border border-accent/30 px-3 py-1 rounded-full">
                  Step {b.step}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-content group-hover:text-accent-light transition-colors">
                {b.title}
              </h3>

              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
                {b.desc}
              </p>
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
                Sport, Business &amp; Academia
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
                What the Field Teaches the Boardroom
              </h2>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                Competitive sport is a clear test of leadership under pressure—where preparation, mutual trust, and the bond between coach and athlete shape every result.
              </p>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                Across every Allyship++ chapter, accomplished athletes and national coaches join corporate and academic leaders to share practical lessons on resilience, mentorship, and guiding young talent.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-line space-y-3 on-media">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Medal className="w-4 h-4" />
                <span>The Coaching Parallel</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                &ldquo;A coach does not run the race or play the innings; they prepare the athlete, remove obstacles, and build the confidence needed to perform when it matters most. Great workplace leadership works the same way.&rdquo;
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
              Join the Platform
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              Start a Conversation With SOA
            </h2>

            <p className="text-base sm:text-lg text-content-secondary max-w-xl mx-auto leading-relaxed font-normal">
              Corporate leaders, HR professionals, academicians, and industry partners are welcome to join upcoming chapters, mentor students, or explore collaboration with Siksha &lsquo;O&rsquo; Anusandhan.
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

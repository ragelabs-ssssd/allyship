"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  CheckCircle2,
  Building,
  HelpCircle,
  Play,
  Award,
  Medal,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Video,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { conclavesData } from "@/data/conclaves";

const eventHeroImages = [
  {
    src: "/IMG_7492.jpg",
    title: "Hyderabad Chapter Ballroom & Delegates",
    subtitle: "Strategic Industry-Academia Leadership Conclave",
  },
  {
    src: "/CON01670.JPG",
    title: "Chennai Chapter 2.0 Delegation Group",
    subtitle: "Senior HR Directors, CHROs & Corporate Partners",
  },
  {
    src: "/CON01638.JPG",
    title: "Chennai Chapter 2.0 Keynote & Stage Dignitaries",
    subtitle: "Panels on Practicing Allyship & Talent Readiness",
  },
];

function EventContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"Chapters" | "Speakers" | "Themes" | "Videos">("Chapters");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % eventHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const conclaves = conclavesData;

  useEffect(() => {
    const chapterParam = searchParams.get("chapter");
    if (chapterParam) {
      const idx = conclaves.findIndex(
        (c) =>
          c.id.toLowerCase() === chapterParam.toLowerCase() ||
          c.city.toLowerCase().includes(chapterParam.toLowerCase())
      );
      if (idx !== -1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
        setSelectedChapter(idx);
        setActiveTab("Chapters");
        const el = document.getElementById("chapter-details");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [searchParams, conclaves]);

  const videos = [
    {
      title: "Chennai Chapter 2.0 | Panel Discussion on Practicing Allyship",
      desc: "Moderated by Standard Chartered's Global Head Archana Grover with talent heads from Rocket India, Foodhub, KaarTech, and Mphasis.",
      youtubeId: "yD0eEo0oh7A",
      tag: "Chennai 2.0",
    },
    {
      title: "Chennai Chapter | Fireside Chat with National Coach J. Premanand",
      desc: "High-performance athletics coach for the Paris Olympics sprint team on connecting athletic resilience with Gen-Z mentorship.",
      youtubeId: "0vOCqqE4zbI",
      tag: "Olympics & Leadership",
    },
    {
      title: "Hyderabad Chapter | Allyship++ Conclave Film",
      desc: "Official highlights from the Hyderabad conclave deliberating Gen-Z workforce expectations, learning agility, and industry-academia CoEs.",
      youtubeId: "8wSGKsWyQwk",
      tag: "Hyderabad Conclave",
    },
  ];

  const currentConclave = conclaves[selectedChapter];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
                <span>Master Conclave Series · 2024–2026</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                The Metro <br />
                <span className="italic font-normal">Conclaves</span>
              </h1>

              <p className="text-lg sm:text-xl font-display text-content-muted italic">
                7 Conclaves Across 5 Metropolitan Capitals
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl font-normal">
                From Bengaluru and Hyderabad to Kolkata, Mumbai, and Chennai, Siksha &lsquo;O&rsquo; Anusandhan has built a continuous national bridge uniting over 500 corporate CXOs, Olympic champions, and visionary scholars to co-create agile curricula and future-ready talent pipelines across India.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-primary"
                >
                  <span>Request Executive Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#chapter-details"
                  className="btn-secondary"
                >
                  <span>Explore Archives</span>
                </a>
              </div>
            </div>

            {/* Right Column: Curated Photo Frame */}
            <div className="lg:col-span-5 relative lg:-translate-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-surface p-1.5 border border-line shadow-xl">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 on-media">
                  {eventHeroImages.map((slide, idx) => (
                    <div
                      key={slide.src}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === heroSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-content">
                    <span className="text-[11px] font-bold font-heading text-[#E8D5A7] uppercase tracking-wider">
                      Edition 1.0 & 2.0 Live Archive
                    </span>
                    <span className="text-sm font-bold text-content mt-0.5">
                      {eventHeroImages[heroSlide].title}
                    </span>
                    <span className="text-[11px] text-content-secondary mt-0.5">
                      5 Metropolitan Capitals · 500+ Corporate CXOs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL PHILOSOPHY & MANDATE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            The Institutional Mandate
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Why Allyship<span className="text-accent">++</span>?
          </h2>

          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            In an era of rapid disruption, transactional placement is no longer sufficient. Siksha &lsquo;O&rsquo; Anusandhan moves academic leadership directly into corporate boardrooms—co-creating empathetic, resilient, and future-ready talent ecosystems.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-accent uppercase block">
                  Beyond Campus Recruitment
                </span>
                <h3 className="font-display text-lg font-semibold tracking-normal text-content mt-1">
                  Ending Transactional Hiring
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Conventional universities wait for annual placement cycles. Allyship++ engages Fortune 500 CHROs year-round to co-create academic curricula and practical skill benchmarks before students graduate.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Curriculum aligned with CXO benchmarks</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Medal className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-accent uppercase block">
                  The Athletic Crucible
                </span>
                <h3 className="font-display text-lg font-semibold tracking-normal text-content mt-1">
                  Why Sports Anchors Allyship
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Olympic medalists and national coaches headline our stages because elite sports embodies unconditional trust, grit under pressure, and mental resilience—the exact attributes needed to prevent workplace burnout.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Mentorship tested under Olympic pressure</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-accent uppercase block">
                  Workplace Cultural Shift
                </span>
                <h3 className="font-display text-lg font-semibold tracking-normal text-content mt-1">
                  Everyday Duty Over Slogans
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Allyship is not a once-a-year compliance checkbox. In our Hyderabad and Chennai conclaves, leaders established that practicing allyship is an everyday duty—creating psychological safety for Gen-Z talent.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Psychological safety in high-stress teams</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-accent uppercase block">
                  Two-Way Enterprise Bridge
                </span>
                <h3 className="font-display text-lg font-semibold tracking-normal text-content mt-1">
                  Co-Innovation & Living Labs
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Allyship is reciprocal. Industry partners gain direct access to SOA’s NIRF Top-15 research faculty and labs—co-creating enterprise Centres of Excellence (like Tech Mahindra&apos;s ServiceNow & AI Labs).
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Campus Centres of Excellence established</span>
            </div>
          </div>
        </div>

        {/* Leadership Vision Callout Box */}
        <div className="mt-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-surface-2 via-surface to-canvas text-content shadow-2xl relative overflow-hidden border border-line">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                The Institutional Commitment
              </span>
              <blockquote className="font-display italic font-normal tracking-normal text-2xl sm:text-3xl lg:text-4xl text-content leading-[1.35]">
                &ldquo;We do not wait for industry to knock on our doors; we bring academic rigor directly into corporate boardrooms across India.&rdquo;
              </blockquote>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Allyship++ is our pledge that every SOA graduate enters a modern enterprise where they are actively championed, psychologically protected, and empowered to lead India&apos;s knowledge-driven economy.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 font-sans text-xs text-content-muted">
                <span className="font-semibold text-content">Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University)</span>
                <span>•</span>
                <span className="text-accent">NIRF Rank 15 · NAAC A++ (3.88 CGPA)</span>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-glass border border-line text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-accent">500+</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Corporate CXOs Engaged</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-content">7</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Metro Conclaves</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-content">10+</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Olympic & Sports Icons</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-accent">100%</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Reciprocal Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 MESSAGE FROM CONCLAVE CONVENER */}
      <section className="pb-20 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="md:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-surface-3 border border-line">
            <Image
              src="/IMG_7364.jpg"
              alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-surface-2 text-content border border-line font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
                Conclave Convener
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                Convener&apos;s Perspective
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.025em] leading-[1.1] text-content">
                Message from Prof. (Dr.) Raj Kumar Hota
              </h2>
            </div>

            <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
              As Convener of every Allyship++ chapter across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai, Prof. Hota has spearheaded the movement to bridge corporate leadership with academic research and youth development.
            </p>

            <blockquote className="font-display italic font-normal tracking-normal text-base sm:text-lg text-content leading-relaxed border-l-2 border-accent pl-5 py-3 bg-surface-2 rounded-r-xl">
              &ldquo;Allyship is not a transactional corporate gesture; it is the intentional, everyday commitment to guide, mentor, and sponsor young talent. When academia and corporate leadership unite with empathy and athletic grit, we create an environment where every graduate feels trusted, valued, and empowered to excel.&rdquo;
            </blockquote>

            <div className="pt-2 border-t border-line">
              <h4 className="font-display text-base font-semibold tracking-normal text-content">
                Prof. (Dr.) Raj Kumar Hota
              </h4>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Dean of Corporate Relations and Placement, Career Development and Industry Collaboration, SOA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY EDITORIAL TAB SWITCHER */}
      <div className="sticky top-0 z-30 bg-gradient-to-b from-canvas via-canvas/95 to-transparent pt-4 pb-6 backdrop-blur-md">
        <nav
          aria-label="Conclave sections"
          className="py-2.5 px-4 mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full bg-canvas/90 border border-line shadow-2xl flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto"
        >
          {(["Chapters", "Speakers", "Themes", "Videos"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setActiveTab(t);
                const el = document.getElementById("tab-content");
                if (el && typeof window !== "undefined" && window.scrollY > el.offsetTop) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                activeTab === t
                  ? "bg-accent text-on-accent shadow-md font-semibold"
                  : "bg-glass border border-line text-content-muted hover:text-content hover:bg-glass-strong"
              }`}
            >
              {t === "Chapters" && "All 7 Chapters (1.0 & 2.0)"}
              {t === "Speakers" && "Marquee Speakers Roster"}
              {t === "Themes" && "Strategic Themes & Evolution"}
              {t === "Videos" && "Official Conclave Videos"}
            </button>
          ))}
        </nav>
      </div>

      {/* 4. MAIN TAB CONTENT */}
      <div id="tab-content" className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 w-full scroll-mt-24 pt-8">
        {/* TAB 1: ALL 7 CHAPTERS */}
        {activeTab === "Chapters" && (
          <div id="chapter-details" className="space-y-10 scroll-mt-24 pt-4">
            {/* City Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 scroll-mt-24">
              {conclaves.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedChapter === idx
                      ? "bg-surface-2 border-accent ring-2 ring-accent/30 shadow-md text-content"
                      : "bg-surface border border-line hover:border-line-strong text-content-muted hover:text-content"
                  }`}
                >
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block">
                    {c.date}
                  </span>
                  <span className="font-display text-sm font-semibold tracking-normal text-content block truncate mt-0.5">
                    {c.city}
                  </span>
                  <span className="font-sans text-xs text-content-muted block truncate mt-0.5">
                    {c.editionCycle === "2.0" ? "Chapter 2.0" : "Chapter 1.0"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Conclave Detail Card */}
            <div id="selected-conclave" className="bg-surface rounded-3xl p-8 sm:p-12 space-y-10 border border-line shadow-xl scroll-mt-24">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-line">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-accent text-on-accent font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
                      {currentConclave.edition}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-sans text-xs font-medium">
                      {currentConclave.date}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.025em] leading-[1.1] text-content scroll-mt-24">
                    {currentConclave.city}: {currentConclave.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-5 font-sans text-xs text-content-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {currentConclave.venue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      {currentConclave.turnout}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent font-sans text-xs font-semibold tracking-normal py-2.5 px-5 rounded-full transition-colors duration-200 shadow-sm shrink-0 active:scale-95"
                >
                  Join Future Conclaves
                </button>
              </div>

              {/* Narrative Description */}
              <div className="space-y-3">
                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Conclave Overview & Strategic Dialogue
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed font-normal tracking-[0.01em]">
                  {currentConclave.desc}
                </p>
                <div className="pt-2">
                  <span className="inline-block font-sans text-xs font-medium text-content-secondary bg-surface-2 px-3.5 py-2 rounded-xl border border-line">
                    Key Focus: {currentConclave.focus}
                  </span>
                </div>
              </div>

              {/* Sports Legends & Special Chief Guests */}
              <div id="sports-guests" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2 text-accent">
                  <Medal className="w-4 h-4" />
                  <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary">
                    Sports Icons & Keynote Guests
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.sportsGuests.map((sg) => (
                    <div key={sg.name} className="p-5 rounded-2xl bg-surface-2 border border-line space-y-1">
                      <h4 className="font-display text-base font-semibold tracking-normal text-content">{sg.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] text-accent">{sg.role}</div>
                      <div className="font-sans text-xs text-content-muted italic">{sg.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moderators & Corporate Panelists */}
              <div id="chapter-panelists" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary">
                    Moderator & Corporate Panelists
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.moderators.map((m) => (
                    <div key={m.name} className="p-5 rounded-2xl bg-surface-2 border border-line">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Moderator</span>
                      <h4 className="font-display text-base font-semibold tracking-normal text-content mt-1">{m.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{m.role}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {currentConclave.panelists.map((p) => (
                    <div key={p.name} className="p-4 rounded-xl bg-surface-2 border border-line hover:border-accent transition-colors">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-muted">Panelist</span>
                      <h4 className="font-display text-base font-semibold tracking-normal text-content mt-1">{p.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{p.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOA Leadership Delegation */}
              <div id="leadership-delegation" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-accent" />
                  <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary">
                    SOA University Institutional Delegation
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.leadership.map((l) => (
                    <div key={l.name} className="p-4 rounded-xl bg-surface-2 border border-line">
                      <h4 className="font-display text-base font-semibold tracking-normal text-content">{l.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{l.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE SPEAKERS ROSTER */}
        {activeTab === "Speakers" && (
          <div id="speakers-section" className="space-y-10 scroll-mt-24 pt-8">
            <div className="max-w-5xl space-y-3 mb-8">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Luminary Roster
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap scroll-mt-24">
                Marquee Speakers &amp; Leaders
              </h2>
              <p className="text-base text-content-muted max-w-2xl leading-relaxed">
                Over 40 distinguished corporate leaders, Olympic champions, and academic dignitaries across all seven Allyship++ conclaves.
              </p>
            </div>

            {/* Sports & Keynote Icons */}
            <div className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-accent" />
                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary">
                  Olympic Champions & Indian Sports Legends
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Anju Bobby George", chapter: "Bengaluru 1.0", role: "Olympian & World Athletics Medalist", note: "Keynote on Leadership in Sports" },
                  { name: "Arshad Ayub", chapter: "Hyderabad 1.0", role: "Former Indian Test & ODI Cricketer", note: "Chief Guest on Collaborative Leadership" },
                  { name: "Gurbux Singh", chapter: "Kolkata 1.0", role: "1964 Olympic Hockey Gold Medalist", note: "Sports Legend Tribute" },
                  { name: "Gautam Sarkar", chapter: "Kolkata 1.0", role: "Former Indian Footballer ('Indian Beckenbauer')", note: "Sports Legend Tribute" },
                  { name: "Satyaprakash Krishna", chapter: "Kolkata 1.0", role: "Mentor to Former Indian Cricket Captain M.S. Dhoni", note: "Sponsorship & Talent Spotting" },
                  { name: "Nilesh Kulkarni", chapter: "Mumbai 1.0", role: "Former Indian Test Cricketer", note: "Fireside Chat on Resilience & Education" },
                  { name: "Anand Menezes", chapter: "Mumbai 1.0", role: "Olympian & Senior Consultant, AFI", note: "Keynote on Athletic High-Performance" },
                  { name: "Dr. G. Srinivas Patnaik", chapter: "Hyderabad 2.0", role: "Secretary, Athletics Federation of India", note: "Mentorship & Resilience in Young Talent" },
                  { name: "Premanand J.", chapter: "Chennai 2.0", role: "Paris Olympics National Sprint Coach", note: "Discipline, Mentorship & Gen-Z Leadership" },
                ].map((s) => (
                  <div key={s.name} className="p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-md hover:border-accent transition-all">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent bg-surface-2 border border-line px-2.5 py-1 rounded-full">
                      {s.chapter}
                    </span>
                    <h4 className="font-display text-base font-semibold tracking-normal text-content mt-3">{s.name}</h4>
                    <div className="font-sans text-sm font-normal tracking-[0.01em] text-accent mt-0.5">{s.role}</div>
                    <div className="font-sans text-xs text-content-muted mt-1.5 italic">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate & CXO Leaders */}
            <div className="space-y-4 pt-8 border-t border-line scroll-mt-24">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary">
                  Corporate CXOs, CHROs & Capability Heads
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, LTTS", chapter: "Bengaluru & Mumbai" },
                  { name: "Archana Grover", role: "Global Head – Capabilities, Standard Chartered", chapter: "Chennai 2.0" },
                  { name: "Prof. Sanjay Dhir", role: "Professor, IIT Delhi", chapter: "Hyderabad 2.0" },
                  { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions", chapter: "Bengaluru 1.0" },
                  { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon", chapter: "Bengaluru 1.0" },
                  { name: "Pushkala Balasubramanian", role: "VP – Engineering, Kloudgin", chapter: "Hyderabad 1.0" },
                  { name: "Rohit Adlakha", role: "CXO Advisor, Human Edge Enterprises", chapter: "Hyderabad 1.0" },
                  { name: "Kiranmal Pendyala", role: "Former Strategic Thought Leader, UPS", chapter: "Hyderabad 1.0" },
                  { name: "Sudipto Ray", role: "MD – Cloud & Digital, PwC", chapter: "Kolkata 1.0" },
                  { name: "Brishti Mondal", role: "Vice President, NRI FinTech", chapter: "Kolkata 1.0" },
                  { name: "Sumit Agarwal", role: "DEI Advisor to Fortune 500 Companies", chapter: "Kolkata 1.0" },
                  { name: "Dr. Brillian S.K.", role: "EVP & Head HR, Times Professional Learning", chapter: "Mumbai 1.0" },
                  { name: "Rachita Mahadev", role: "Emerging Talent Lead – APJ, Akamai Technologies", chapter: "Hyderabad 2.0" },
                  { name: "Dr. Reena Das", role: "CHRO, Keolis Hyderabad", chapter: "Hyderabad 2.0" },
                  { name: "Suganya Veeraraghavan", role: "AVP, Rocket India", chapter: "Chennai 2.0" },
                  { name: "Suresh Aade", role: "Head HR, Foodhub", chapter: "Chennai 2.0" },
                  { name: "R.K. Ramachandran", role: "Global Talent Head, KaarTech", chapter: "Chennai 2.0" },
                  { name: "M.D. Joshua David", role: "India Campus Head, Mphasis", chapter: "Chennai 2.0" },
                ].map((c) => (
                  <div key={c.name} className="p-5 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-md hover:border-accent transition-all">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-muted bg-surface-2 border border-line px-2.5 py-1 rounded-full">
                      {c.chapter}
                    </span>
                    <h4 className="font-display text-base font-semibold tracking-normal text-content mt-3">{c.name}</h4>
                    <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THEMES & STRATEGIC EVOLUTION */}
        {activeTab === "Themes" && (
          <div id="themes-section" className="space-y-10 scroll-mt-24 pt-8">
            <div className="max-w-5xl space-y-3 mb-8">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Curricular Continuity
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap scroll-mt-24">
                The Strategic Arc: Allyship++
              </h2>
              <p className="text-base text-content-muted max-w-2xl leading-relaxed">
                How the conclave series evolved from establishing foundational corporate-academic trust to operationalizing daily allyship for Gen-Z talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-line shadow-xl space-y-4">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full bg-surface-2 text-content-secondary border border-line">
                  Phase I: Allyship++ 1.0 (2024–2025)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-normal text-content mt-2">
                  Dismantling Geographical & Institutional Distance
                </h3>
                <p className="font-sans text-sm font-normal tracking-[0.01em] text-content-muted leading-relaxed">
                  SOA University systematically brought an academic hub in Bhubaneswar directly into the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, and Mumbai. Engaging 60 to 70 leaders per city, Phase I demonstrated that academic institutions must collaborate continuously with industry to navigate cloud engineering burnout, hybrid team dynamics, and Fortune 500 DEI mandates.
                </p>
                <div className="pt-4 border-t border-line font-sans text-xs text-content-muted tracking-[0.01em]">
                  Chapters: Bengaluru · Hyderabad · Kolkata · Mumbai
                </div>
              </div>

              <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-line shadow-xl space-y-4">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full bg-surface-2 text-accent border border-accent/30">
                  Phase II: Allyship++ 2.0 (2026)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-normal text-content mt-2">
                  Practicing Allyship: Gen-Z Mentorship & Daily Responsibility
                </h3>
                <p className="font-sans text-sm font-normal tracking-[0.01em] text-content-muted leading-relaxed">
                  Pivoting from <i>why</i> inclusion matters to <i>how</i> enterprises operationalize it daily. Moderated by IIT Delhi&apos;s Prof. Sanjay Dhir in Hyderabad and Standard Chartered&apos;s Global Head Archana Grover in Chennai, leaders addressed the expectations of Gen-Z digital natives—codifying allyship not as an isolated HR program, but as a core leadership responsibility driving psychological safety and innovation.
                </p>
                <div className="pt-4 border-t border-line font-sans text-xs text-content-muted tracking-[0.01em]">
                  Chapters: Bengaluru · Hyderabad · Chennai
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: OFFICIAL CONCLAVE VIDEOS */}
        {activeTab === "Videos" && (
          <div id="videos-section" className="space-y-10 scroll-mt-24 pt-8">
            <div className="max-w-5xl space-y-3 mb-8">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Digital Archives
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap scroll-mt-24">
                Official Conclave Video Recordings
              </h2>
              <p className="text-base text-content-muted max-w-2xl leading-relaxed">
                Watch full panel deliberations and keynote fireside chats from the Chennai, Hyderabad, and national chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((v) => (
                <div
                  key={v.youtubeId}
                  className="bg-surface rounded-3xl overflow-hidden border border-line shadow-xl hover:border-line-strong transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-video w-full bg-canvas overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block mb-1">
                        {v.tag}
                      </span>
                      <h3 className="font-display text-base font-semibold tracking-normal text-content leading-snug">
                        {v.title}
                      </h3>
                      <p className="font-sans text-xs font-normal tracking-[0.01em] text-content-muted mt-2 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

export default function EventPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas text-content p-20 text-center">Loading Conclave Directory...</div>}>
      <EventContent />
    </Suspense>
  );
}

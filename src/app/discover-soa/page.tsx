"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  ArrowRight,
  GraduationCap,
  Award,
  Globe,
  Building2,
  Trophy,
  CheckCircle2,
  X,
  Stethoscope,
  Cpu,
  Scale,
  Briefcase,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
  Maximize2,
  Check,
  FileCheck2,
  Landmark,
  HeartPulse,
  Heart,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop, SOA_VIDEO_SRC } from "@/components/HeroBackdrop";

// 1. NIRF Rankings 2025 Data
const nirfRankings2025 = [
  {
    rank: "15th",
    category: "University Category",
    subtext: "Ranked #1 in Odisha",
    highlight: "Top 15 Nationally",
  },
  {
    rank: "22nd",
    category: "Engineering Category",
    subtext: "ITER Faculty of Engineering",
    highlight: "Ahead of Top IITs/NITs",
  },
  {
    rank: "15th",
    category: "Medical Category",
    subtext: "IMS & SUM Hospital",
    highlight: "Climbed 6 Ranks",
  },
  {
    rank: "9th",
    category: "Dental Category",
    subtext: "Institute of Dental Sciences",
    highlight: "Top 10 in India",
  },
  {
    rank: "10th",
    category: "Law Category",
    subtext: "SOA National Institute of Law",
    highlight: "Top 10 Nationally",
  },
  {
    rank: "66th",
    category: "Management Category",
    subtext: "IBCS Faculty of Management",
    highlight: "#1 in Odisha (Business)",
  },
  {
    rank: "25th",
    category: "Overall Category",
    subtext: "Across All Indian Institutions",
    highlight: "Consistently in Top 25",
  },
];

// 2. Global QS & THE Rankings Data
const qsRankings = [
  { metric: "QS World Rankings", value: "1201–1400" },
  { metric: "QS Asia Rankings", value: "332" },
  { metric: "QS Southern Asia Rankings", value: "80" },
  { metric: "Computer Science & Info Systems", value: "751–850" },
  { metric: "Engineering & Technology", value: "401–450" },
  { metric: "Medicine", value: "701–850" },
  { metric: "Social Sciences & Management", value: "451–500" },
];

const theRankings = [
  { metric: "THE World University Rankings", value: "801–1000" },
  { metric: "THE World Reputational Rankings", value: "201–300" },
  { metric: "THE Asia University Rankings", value: "251–300" },
  { metric: "Engineering & Technology", value: "501–600" },
  { metric: "Computer Science", value: "801–1000" },
  { metric: "Medical & Health Sciences", value: "601–800" },
  { metric: "Young University", value: "201–250" },
];

// 3. Accreditations
const accreditationsList = [
  {
    title: "NAAC Accredited with Grade ‘A++’",
    sub: "3rd Cycle · CGPA 3.88",
    body: "Highest possible grade awarded by the National Assessment and Accreditation Council for institutional excellence.",
    tag: "NAAC A++",
  },
  {
    title: "NBA Accredited Programmes",
    sub: "National Board of Accreditation",
    body: "Engineering, Hospitality Management, Management & Pharmacy Programmes rigorously accredited for quality.",
    tag: "NBA Tier-1",
  },
  {
    title: "Accredited by ICAR",
    sub: "Indian Council of Agricultural Research",
    body: "Recognized agricultural programs fostering regional crop resilience, modern agronomy, and rural livelihoods.",
    tag: "ICAR Approved",
  },
  {
    title: "NABH Accredited Hospital",
    sub: "IMS & SUM Hospital",
    body: "National Accreditation Board for Hospitals & Healthcare Providers certification for patient safety and clinical excellence.",
    tag: "NABH Hospital",
  },
  {
    title: "International Accreditation Organisation",
    sub: "IAO Global Certification",
    body: "Global verification ensuring curriculum delivery meets international quality, pedagogy, and faculty standards.",
    tag: "IAO Certified",
  },
  {
    title: "NABL Accredited Medical Laboratories",
    sub: "National Accreditation Board for Testing Labs",
    body: "Certified diagnostic testing and clinical reference laboratories upholding gold-standard precision.",
    tag: "NABL Laboratories",
  },
];

// 4. Other Major Recognitions
const majorRecognitionsList = [
  {
    title: "Category-I Graded Autonomy Status",
    authority: "UGC (University Grants Commission)",
    desc: "Granted highest level of academic and operational freedom by Ministry of Education, Govt. of India.",
    pill: "UGC Category-I",
  },
  {
    title: "UGC 12(B) Status",
    authority: "University Grants Commission",
    desc: "Declared fit to receive central assistance and research grants under Section 12(B) of the UGC Act.",
    pill: "UGC 12(B)",
  },
  {
    title: "DSIR (SIRO) Recognized",
    authority: "Dept. of Science & Technology, Govt. of India",
    desc: "Formally recognized as a Scientific and Industrial Research Organization (SIRO) driving indigenous innovation.",
    pill: "DSIR / SIRO",
  },
  {
    title: "QS I-GAUGE E-LEAD Certified",
    authority: "QS I-GAUGE",
    desc: "E-Learning Excellence for Academic Digitization certified for world-class hybrid digital infrastructure.",
    pill: "E-LEAD Certified",
  },
  {
    title: "COCHRANE (UK) Affiliated Centre",
    authority: "Cochrane Global Network",
    desc: "International network producing high-quality systematic medical evidence and clinical health syntheses.",
    pill: "Cochrane Centre",
  },
  {
    title: "ISO 9001 : 2015 Certified",
    authority: "United Registrar of Systems (URS)",
    desc: "Certified Quality Management System across higher education, healthcare delivery, and administrative services.",
    pill: "ISO 9001:2015",
  },
];

// 5. Evolution & Growth Timeline
const growthTimeline = [
  {
    year: "1996–97",
    title: "Engineering & Technology",
    faculty: "ITER (Institute of Technical Education and Research)",
    desc: "Founding faculty that pioneered technical education in Eastern India; now NIRF #22 nationally.",
    side: "left",
  },
  {
    year: "1997–98",
    title: "Management Sciences",
    faculty: "IBCS (Institute of Business and Computer Studies)",
    desc: "Established premier corporate management and business analytics education in Odisha.",
    side: "left",
  },
  {
    year: "2004–05",
    title: "Nursing | Hotel Management | Pharmacy",
    faculty: "SNC · SHM · SPS",
    desc: "Triple expansion into professional healthcare, hospitality management, and pharmaceutical chemistry.",
    side: "left",
  },
  {
    year: "2006–07",
    title: "Dental Sciences",
    faculty: "IDS (Institute of Dental Sciences)",
    desc: "Ranked #9 in India by NIRF 2025; premier multi-chair dental surgery and maxillofacial center.",
    side: "left",
  },
  {
    year: "2007–08",
    title: "Medical Sciences",
    faculty: "IMS & SUM Hospital",
    desc: "Super-specialty medical college and hospital ranked #15 nationally with 2,000+ clinical beds.",
    side: "left",
  },
  {
    year: "2011–12",
    title: "Legal Studies",
    faculty: "SNIL (SOA National Institute of Law)",
    desc: "Consistently ranked in India's Top 10 Law Schools (#10 in NIRF 2025) with high court judicial clerkships.",
    side: "right",
  },
  {
    year: "2013–14",
    title: "Agricultural Sciences",
    faculty: "Institute of Agricultural Sciences (IAS)",
    desc: "ICAR-accredited agricultural research training next-generation agronomists and climate scientists.",
    side: "right",
  },
  {
    year: "2022–23",
    title: "Veterinary Sciences",
    faculty: "Institute of Veterinary Sciences & Animal Husbandry",
    desc: "Modern clinical animal hospital and research facility serving veterinary care and livestock science.",
    side: "right",
  },
  {
    year: "2024–25",
    title: "Medical Sciences - II | Nursing Sciences - II",
    faculty: "SUM Hospital Campus 2 & College of Nursing 2",
    desc: "Major healthcare expansion adding specialized regional referral capacity and advanced patient wings.",
    side: "right",
  },
  {
    year: "2025–26",
    title: "Pharmaceutical Sciences - II",
    faculty: "School of Pharmaceutical Sciences (Phase II)",
    desc: "Cutting-edge biopharmaceutical R&D facility focusing on drug discovery, genomics, and clinical pharmacology.",
    side: "right",
  },
];

export default function DiscoverSoaPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[640px] lg:min-h-[720px] flex items-center border-b border-line overflow-hidden">
        <HeroBackdrop videoSrc={SOA_VIDEO_SRC} />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <span>Deemed to be University · Bhubaneswar, India</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
              Discover <br />
              <span className="italic font-normal whitespace-nowrap">Siksha &lsquo;O&rsquo; Anusandhan</span>
            </h1>

            <p className="text-lg sm:text-xl font-display text-content-muted italic">
              Ranked 15th Nationally · NAAC A++ · UGC Category-I Autonomy
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl font-normal">
              Siksha &lsquo;O&rsquo; Anusandhan (SOA) is one of eastern India&apos;s preeminent multi-disciplinary research universities—bridging regional talent with global industry through 13 constituent faculties, 18 specialized research centres, 30,000+ scholars, and 38 Stanford-indexed Top 2% world scientists across a unified 127-acre academic biome.
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Ministry of Education · Govt. of India</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            NIRF India Rankings — 2025
          </h2>
          <p className="text-base sm:text-lg text-accent font-semibold tracking-wide max-w-2xl mx-auto">
            Consistently ranked among India&apos;s Top 25 Universities across every edition of the National Institutional Ranking Framework.
          </p>
        </div>

        {/* 7 Clean Uniform Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {nirfRankings2025.map((item, idx) => (
            <div
              key={item.category}
              className={`relative rounded-2xl p-5 sm:p-6 bg-surface-2 border border-line hover:border-accent/80 transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-2xl flex flex-col items-center justify-between text-center group ${
                idx === 6 ? "col-span-2 md:col-span-4 lg:col-span-1" : ""
              }`}
            >
              <div className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-content-muted">
                <span>Rank</span>
                <span className="text-accent font-mono font-bold">2025</span>
              </div>

              {/* Prominent Gold Ranking Number */}
              <div className="my-4 space-y-1">
                <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-content group-hover:text-accent transition-colors drop-shadow-sm inline-block">
                  {item.rank}
                </span>
                <span className="block text-[11px] font-semibold text-accent uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>

              {/* Category Label */}
              <div className="pt-3 border-t border-line/60 w-full space-y-1">
                <h3 className="font-heading text-xs sm:text-sm font-bold text-content leading-snug">
                  {item.category}
                </h3>
                <p className="text-[10px] text-content-muted line-clamp-1">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NIRF Benchmark Callout */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-surface-2 border border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/40 text-accent flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-content">
                National Institutional Ranking Framework (NIRF)
              </p>
              <p className="text-xs text-content-muted">
                Evaluated across Teaching, Learning & Resources, Research, Graduation Outcomes, Outreach, and Perception.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSelectedSlide("/discover/nirf-rankings-2025.jpg")}
            className="text-xs font-semibold text-accent hover:text-content inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface border border-line hover:border-accent transition-all shrink-0"
          >
            <span>View Official NIRF Slide</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. OTHER RANKINGS SECTION: QS & THE + SWACHHATA (Screenshot 2) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line bg-surface/50">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Global Benchmarking &amp; Accolades
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            International Rankings &amp; Global Standing
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Ranked among the premier institutions in the world by Quacquarelli Symonds (QS) and Times Higher Education (THE).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* QS World University Rankings Card */}
          <div className="rounded-3xl p-8 bg-surface-2 border border-line hover:border-accent/60 transition-all shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-line">
                <div>
                  <span className="text-[11px] font-bold font-heading uppercase tracking-widest text-[#E8D5A7]">
                    Quacquarelli Symonds
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-content mt-0.5">
                    QS World University Rankings
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold text-xs">
                  Global
                </span>
              </div>

              <div className="divide-y divide-line/60">
                {qsRankings.map((r) => (
                  <div key={r.metric} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-content-secondary font-medium">{r.metric}</span>
                    <span className="text-accent font-mono font-bold text-sm sm:text-base">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between text-xs text-content-muted">
              <span>Verified QS Intelligence Unit Data</span>
              <span className="text-accent font-semibold">Ranked #80 in Southern Asia</span>
            </div>
          </div>

          {/* THE World University Rankings Card */}
          <div className="rounded-3xl p-8 bg-surface-2 border border-line hover:border-accent/60 transition-all shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-line">
                <div>
                  <span className="text-[11px] font-bold font-heading uppercase tracking-widest text-[#E8D5A7]">
                    Times Higher Education
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-content mt-0.5">
                    THE World University Rankings
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold text-xs">
                  Global
                </span>
              </div>

              <div className="divide-y divide-line/60">
                {theRankings.map((r) => (
                  <div key={r.metric} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-content-secondary font-medium">{r.metric}</span>
                    <span className="text-accent font-mono font-bold text-sm sm:text-base">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between text-xs text-content-muted">
              <span>Top 4 in India in World Reputation Rankings</span>
              <span className="text-accent font-semibold">201–300 Reputational</span>
            </div>
          </div>
        </div>

        {/* Bottom Swachhata & QS I-GAUGE Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-2xl bg-surface-2 border border-line flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-accent-subtle border border-accent/40 text-accent flex items-center justify-center shrink-0">
              <Landmark className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold font-heading uppercase tracking-wider text-accent">
                MHRD · Government of India
              </span>
              <h4 className="font-heading text-base font-bold text-content">
                Swachhata India Rankings
              </h4>
              <p className="text-xs text-content-secondary">
                Ranked <strong>3rd in 2018</strong> (Technical Institution category) &amp; <strong>5th in 2019</strong> (Residential University category).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-2 border border-line flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-accent-subtle border border-accent/40 text-accent flex items-center justify-center shrink-0 font-bold text-xl">
              💎
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold font-heading uppercase tracking-wider text-accent">
                QS I-GAUGE Indian University Rating
              </span>
              <h4 className="font-heading text-base font-bold text-content">
                Diamond Rated University
              </h4>
              <p className="text-xs text-content-secondary">
                Conferred the prestigious <strong>Diamond Rating</strong> for excellence across teaching, facilities, governance, and graduate employability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCREDITATIONS & MAJOR RECOGNITIONS (Screenshots 3 & 4) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            National &amp; International Certifications
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Accreditations &amp; Major Recognitions
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Validated by national statutory authorities, healthcare boards, laboratory accreditors, and global standards bodies.
          </p>
        </div>

        {/* Group A: Accreditations (6 Cards) */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h3 className="font-heading text-xl font-bold text-content">
                Premier Accreditations
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSlide("/discover/accreditations.jpg")}
              className="text-xs font-semibold text-accent hover:text-content inline-flex items-center gap-1"
            >
              <span>View Accreditations Slide</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditationsList.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-surface-2 border border-line hover:border-accent transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 text-accent">
                    {item.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-accent/80" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-content group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-accent/90 font-medium mt-0.5">
                    {item.sub}
                  </p>
                </div>
                <p className="text-xs text-content-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Group B: Other Major Recognitions (6 Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-line">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-heading text-xl font-bold text-content">
                Other Major Recognitions & Status
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSlide("/discover/major-recognitions.jpg")}
              className="text-xs font-semibold text-accent hover:text-content inline-flex items-center gap-1"
            >
              <span>View Recognitions Slide</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorRecognitionsList.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-surface-2 border border-line hover:border-accent transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-surface border border-line text-content-secondary">
                    {item.pill}
                  </span>
                  <FileCheck2 className="w-4 h-4 text-accent/80" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-content group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#E8D5A7] font-medium mt-0.5">
                    {item.authority}
                  </p>
                </div>
                <p className="text-xs text-content-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVOLUTION & GROWTH (Screenshot 5) */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line bg-surface/40">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Three Decades of Institutional Nation-Building
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Evolution &amp; Growth Timeline
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            From the founding of ITER in 1996 to modern pharmaceutical super-centres, advanced medical campuses, and sovereign AI labs in 2026.
          </p>
        </div>

        {/* 2 Key Metric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14 text-center">
          <div className="p-6 rounded-3xl bg-surface-2 border border-line flex flex-col items-center justify-center">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-accent">
              13
            </span>
            <span className="font-heading text-sm font-bold text-content mt-2 uppercase tracking-wider">
              Constituent Institutes
            </span>
            <span className="text-xs text-content-muted mt-1">
              Engineering, Medicine, Dental, Law, Management, Nursing, Pharmacy &amp; Agriculture
            </span>
          </div>

          <div className="p-6 rounded-3xl bg-surface-2 border border-line flex flex-col items-center justify-center">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-content">
              18
            </span>
            <span className="font-heading text-sm font-bold text-content mt-2 uppercase tracking-wider">
              State-of-the-Art Research Centres
            </span>
            <span className="text-xs text-content-muted mt-1">
              Nanotechnology, Renewable Energy, Climate Studies, Biomechanics &amp; AI
            </span>
          </div>
        </div>

        {/* Chronological Milestone Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column (1996 to 2008) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent pb-2 border-b border-line">
              Phase 1: Foundational Academics (1996 – 2008)
            </h4>
            {growthTimeline
              .filter((t) => t.side === "left")
              .map((item) => (
                <div
                  key={item.year}
                  className="p-5 rounded-2xl bg-surface-2 border border-line hover:border-accent transition-all flex items-start gap-4"
                >
                  <div className="px-3 py-1.5 rounded-xl bg-accent/15 border border-accent/40 font-mono text-xs font-bold text-accent shrink-0 text-center">
                    {item.year}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-heading text-sm font-bold text-content">
                      {item.title}
                    </h5>
                    <p className="text-xs text-[#E8D5A7] font-medium">
                      {item.faculty}
                    </p>
                    <p className="text-xs text-content-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column (2011 to 2026) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent pb-2 border-b border-line">
              Phase 2: Advanced Sciences &amp; Expansions (2011 – 2026)
            </h4>
            {growthTimeline
              .filter((t) => t.side === "right")
              .map((item) => (
                <div
                  key={item.year}
                  className="p-5 rounded-2xl bg-surface-2 border border-line hover:border-accent transition-all flex items-start gap-4"
                >
                  <div className="px-3 py-1.5 rounded-xl bg-accent/15 border border-accent/40 font-mono text-xs font-bold text-accent shrink-0 text-center">
                    {item.year}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-heading text-sm font-bold text-content">
                      {item.title}
                    </h5>
                    <p className="text-xs text-[#E8D5A7] font-medium">
                      {item.faculty}
                    </p>
                    <p className="text-xs text-content-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>


      </section>

      {/* 6. OFFICIAL CAMPUS INFRASTRUCTURE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line bg-surface/30">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            127-Acre Campus Infrastructure
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Infrastructure &amp; Research Facilities
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            A state-of-the-art academic biome in Bhubaneswar encompassing enterprise-anchored engineering labs, 2,000+ bed teaching hospitals, solar micro-grids, and high-performance sovereign computing hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-surface-3 relative">
              <Image
                src="/soa-campus-aerial.jpg"
                alt="SOA University Main Campus Aerial View"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-2 text-content border border-line text-[10px] font-bold font-heading uppercase tracking-wider">
                Main Campus
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-base text-content">Main University Campus</h4>
              <p className="text-xs text-content-muted leading-relaxed">
                127-acre campus in Khandagiri Square with academic complexes, libraries, and central administrative headquarters.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-surface-3 relative">
              <Image
                src="/soa-iter-building.jpg"
                alt="ITER Engineering Campus Building"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-2 text-content border border-line text-[10px] font-bold font-heading uppercase tracking-wider">
                ITER Engineering
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-base text-content">ITER Engineering Faculty</h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Ranked 22nd in India (NIRF 2025) featuring enterprise Centres of Excellence with Tech Mahindra, LTTS, and the Blue Star HVAC Skill Development Centre with 94.54% placement.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-surface-3 relative">
              <Image
                src="/soa-auditorium.jpg"
                alt="SOA Convention Auditorium"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-2 text-content border border-line text-[10px] font-bold font-heading uppercase tracking-wider">
                Convention Hall
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-base text-content">University Auditorium</h4>
              <p className="text-xs text-content-muted leading-relaxed">
                A 1,400+ seat civic and intellectual auditorium anchoring ALLYSHIP++ national executive roundtables, convocation ceremonies, and international scientific symposia.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
            <div className="aspect-[4/3] overflow-hidden bg-surface-3 relative">
              <Image
                src="/soa-campus-grounds.jpg"
                alt="SOA Academic Grounds and Labs"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-2 text-content border border-line text-[10px] font-bold font-heading uppercase tracking-wider">
                Innovation Labs
              </span>
            </div>
            <div className="p-6 space-y-2">
              <h4 className="font-bold text-base text-content">Academic Quads &amp; R&amp;D</h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Ranked 3rd nationally in Swachh Campus with eco-friendly quads, solar grids, and high-performance labs.
              </p>
            </div>
          </div>
        </div>
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

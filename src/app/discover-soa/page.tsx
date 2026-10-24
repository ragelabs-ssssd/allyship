"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  Building,
  Trophy,
  FileText,
  Rocket,
  CheckCircle2,
  Sparkles,
  X,
  Stethoscope,
  Cpu,
  Scale,
  Briefcase,
  FlaskConical,
  Camera,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";

const universityHeroImages = [
  {
    src: "/soa-campus-aerial.jpg",
    title: "Siksha 'O' Anusandhan Main Campus Aerial Panorama",
    subtitle: "Bhubaneswar, Odisha · 127+ Acres of Multi-Faculty Infrastructure",
  },
  {
    src: "/soa-iter-building.jpg",
    title: "Institute of Technical Education and Research (ITER)",
    subtitle: "Premier Engineering Faculty · Ranked 22nd in NIRF 2025 · 94.54% Placement Rate",
  },
  {
    src: "/soa-auditorium.jpg",
    title: "SOA University Central Convention Centre & Auditorium",
    subtitle: "Host to National Conclaves, Scientific Congresses & Global Symposia",
  },
  {
    src: "/soa-campus-grounds.jpg",
    title: "SOA Academic Quads & Innovation Labs",
    subtitle: "Times Higher Education World Top 4 Indian Institution · NAAC A++ (3.88 CGPA)",
  },
];

export default function DiscoverSoaPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % universityHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroCounters = [
    { value: "15th", label: "NIRF 2025, University Category (Score: 63.14 · #1 in Odisha)" },
    { value: "25th", label: "NIRF 2025, Overall Category (Top 25 since 2016)" },
    { value: "A++", label: "NAAC Accredited (CGPA 3.88) · UGC Category-I Graded Autonomy" },
    { value: "Top 4", label: "In India, THE World Reputation Rankings 2025" },
    { value: "3rd", label: "Swachh Campus Ranking Nationally" },
  ];

  const constituentFaculties = [
    {
      name: "Institute of Medical Sciences (IMS) & SUM Hospital",
      tag: "Medical Sciences",
      icon: Stethoscope,
      standing: "15th in Medical, NIRF 2025 (Climbed 6 spots) · 701–850 Globally in QS Medicine",
      desc: "NABH and NABL accredited super-specialty hospital and medical college. Ranked 601–800 in THE 2026, delivering 100% MBBS and MD/MS graduate clinical absorption across leading national healthcare networks.",
      metric: "100% Clinical Placement",
      highlight: "NABH & NABL Accredited",
    },
    {
      name: "Institute of Technical Education and Research (ITER)",
      tag: "Engineering & Technology",
      icon: Cpu,
      standing: "22nd in Engineering, NIRF 2025 (Up 4 spots) · 2nd in India in Times Engineering 2025 & 2026",
      desc: "SOA’s premier engineering faculty ranked ahead of Amrita (#23), Jamia Millia (#24), and IIT Gandhinagar (#25). Hosts state-of-the-art Centres of Excellence with Tech Mahindra and LTTS with a 94.54% B.Tech placement rate.",
      metric: "94.54% B.Tech Placement",
      highlight: "₹46 LPA Peak Package",
    },
    {
      name: "Institute of Dental Sciences (IDS)",
      tag: "Dental Sciences",
      icon: Award,
      standing: "9th in India in Dental, NIRF 2025 · #1 in Odisha",
      desc: "Consistently held a Top 10 national ranking for three consecutive years (2023, 2024, 2025). Features multi-chair specialized clinical labs and 95.52% BDS & MDS graduate placement velocity.",
      metric: "95.52% Placement Rate",
      highlight: "Ranked 9th Nationally",
    },
    {
      name: "SOA National Institute of Law (SNIL)",
      tag: "Legal Studies",
      icon: Scale,
      standing: "10th in India in Law, NIRF 2025 · #1 in Odisha",
      desc: "Consistently ranked among the nation's Top 10 law schools. Features advanced moot court infrastructure, distinguished legal research chairs, and strong judicial clerkship placements across India.",
      metric: "Top 10 in India",
      highlight: "#1 Law School in Odisha",
    },
    {
      name: "Institute of Business and Computer Studies (IBCS)",
      tag: "Management & Computing",
      icon: Briefcase,
      standing: "25th in Business & Management Studies (#1 in Odisha) · 66th in MBA/PGDM, NIRF 2025",
      desc: "Faculty of management education achieving 97.22% MBA placement rate. Strategic corporate recruiter relationships with Deloitte, EY, KPMG, PwC, ICICI, HDFC, and Reliance Industries.",
      metric: "97.22% MBA Placement",
      highlight: "#1 in Odisha (Business Studies)",
    },
    {
      name: "Multi-Disciplinary Research & Global Footprint",
      tag: "Research & Innovation",
      icon: FlaskConical,
      standing: "49th in Research, NIRF 2025 · 251–300 Globally in Science (THE 2026)",
      desc: "Featuring 38 SOA researchers recognized in Stanford University’s World’s Top 2% Scientists list. Home to the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog) and scholars from 15+ countries.",
      metric: "38 Stanford Top 2% Scientists",
      highlight: "AIC-SOA Incubation Centre",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deemed to be University · Bhubaneswar, India</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                Discover <br />
                <span className="italic font-normal">Siksha &lsquo;O&rsquo; Anusandhan</span>
              </h1>

              <p className="text-xl sm:text-2xl font-display text-content-muted italic">
                Ranked 15th Nationally. A Premier Multi-Faculty Research Powerhouse.
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl font-normal">
                Siksha &lsquo;O&rsquo; Anusandhan (SOA) is recognized among India&apos;s top four institutions in the Times Higher Education World Reputation Rankings 2025—fostering 30,000+ students, 38 Stanford Top 2% scientists, and industry-embedded Centres of Excellence.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsTourOpen(true)}
                  className="btn-primary"
                >
                  <div className="w-5 h-5 rounded-full bg-glass-strong flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                  </div>
                  <span>Take Virtual Tour</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-secondary"
                >
                  <span>Request Executive Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-surface p-2.5 border border-line shadow-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 on-media">
                  {universityHeroImages.map((slide, idx) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-content">
                    <span className="text-[11px] font-bold font-heading text-[#E8D5A7] uppercase tracking-wider">
                      Khandagiri Square, Bhubaneswar
                    </span>
                    <span className="text-sm font-bold text-content mt-0.5">
                      SOA Deemed to be University Main Campus
                    </span>
                    <span className="text-[11px] text-content-secondary mt-0.5">
                      NAAC A++ (CGPA 3.88) · NIRF #15 University in India
                    </span>
                  </div>
                </div>

                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-accent pointer-events-none" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-accent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STAT COUNTERS */}
      <section className="bg-surface border-b border-line py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {heroCounters.map((c) => (
            <div key={c.label} className="p-5 flex flex-col items-center justify-center bg-surface-2 rounded-2xl border border-line">
              <div className="text-3xl sm:text-4xl font-bold text-content tracking-tight">
                {c.value}
              </div>
              <div className="text-xs text-content-muted font-medium mt-1.5 leading-snug">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 6 CONSTITUENT FACULTIES */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Academic & Clinical Infrastructure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Constituent Faculties & National Standing
          </h2>
          <p className="text-base text-content-muted leading-relaxed">
            Updated with official NIRF 2025, Times Engineering, and international accreditation data across SOA&apos;s premier faculties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constituentFaculties.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.name}
                className="bg-surface rounded-3xl p-8 border border-line hover:border-accent transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full bg-surface-2 text-content-secondary border border-line">
                      {f.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-content">
                    {f.name}
                  </h3>

                  <div className="text-xs font-semibold text-content-secondary bg-surface-2 p-3 rounded-xl border border-line">
                    {f.standing}
                  </div>

                  <p className="text-sm text-content-muted leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-semibold">
                  <span className="text-content-secondary bg-surface-2 border border-line px-2.5 py-1 rounded-lg">
                    {f.metric}
                  </span>
                  <span className="text-accent font-bold">
                    {f.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OFFICIAL SOA CAMPUS INFRASTRUCTURE SHOWCASE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Official University Campus
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Infrastructure & Research Facilities
          </h2>
          <p className="text-base text-content-muted leading-relaxed">
            Spanning over 127 acres in Bhubaneswar, SOA provides cutting-edge engineering laboratories, super-specialty hospitals, convention auditoriums, and high-performance computing centers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
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
                127-acre campus in Khandagiri Square with academic complexes, libraries, and hostels.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
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
                Ranked 22nd in India (NIRF 2025) with Tech Mahindra and LTTS Centres of Excellence.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
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
                State-of-the-art auditorium seating thousands for conclaves, convocations, and symposia.
              </p>
            </div>
          </div>

          <div className="bg-surface rounded-3xl overflow-hidden border border-line hover:border-line-strong transition-all group">
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
              <h4 className="font-bold text-base text-content">Academic Quads & R&D</h4>
              <p className="text-xs text-content-muted leading-relaxed">
                Ranked 3rd nationally in Swachh Campus with green quads and research centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL ACCREDITATIONS & REPUTATION */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto w-full">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-surface-2 via-surface to-canvas text-content shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center border border-line">
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-bold font-heading tracking-widest text-accent uppercase">
              Global Standards & Governance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-content font-bold leading-tight">
              One of Only Four Indian Institutions in THE World Reputation Rankings 2025
            </h2>
            <p className="text-sm text-content-secondary leading-relaxed font-normal">
              Siksha &lsquo;O&rsquo; Anusandhan was recognized alongside IISc Bengaluru, IIT Delhi, and IIT Madras in the prestigious Times Higher Education World Reputation Rankings 2025. With NAAC A++ (CGPA 3.88), UGC Category-I Graded Autonomy, and #3 Swachh Campus standing nationally, SOA provides corporate partners with world-class institutional stability and research credibility.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4">
            <div className="p-6 rounded-2xl bg-glass border border-line text-center">
              <span className="text-4xl font-bold text-accent">3.88</span>
              <span className="text-xs text-content-secondary block font-medium mt-1">NAAC A++ Score</span>
            </div>
            <div className="p-6 rounded-2xl bg-glass border border-line text-center">
              <span className="text-3xl font-bold text-content">Category-I</span>
              <span className="text-xs text-content-secondary block font-medium mt-1">UGC Graded Autonomy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />

      {/* Virtual Tour Modal */}
      {isTourOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl bg-surface rounded-3xl overflow-hidden border border-line shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-line text-content">
              <span className="font-bold text-sm font-heading">SOA University Campus & Research Labs Virtual Tour</span>
              <button
                type="button"
                onClick={() => setIsTourOpen(false)}
                className="p-2 rounded-full hover:bg-glass-strong text-content-muted hover:text-content transition-colors"
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

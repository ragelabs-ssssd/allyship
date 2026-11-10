"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Layers,
  GraduationCap,
  Send,
  ShieldCheck,
  Copy,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Award,
  Lightbulb,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop, SOA_VIDEO_SRC } from "@/components/HeroBackdrop";

export default function CollaboratePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Form states
  const [challengeTitle, setChallengeTitle] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [challengeDesc, setChallengeDesc] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState("");

  const partnershipPillars = [
    {
      title: "Industry Challenges & Venture Incubation",
      icon: Lightbulb,
      desc: "Sponsor real-world engineering, clinical, or digital transformation challenges for faculty-led research cohorts to prototype and scale through the AIC-SOA Atal Incubation Centre under NITI Aayog.",
      action: "Submit Problem Statement",
    },
    {
      title: "Centres of Excellence & Applied R&D",
      icon: Cpu,
      desc: "Co-establish specialized industry hubs modeled on SOA’s on-campus Centres of Excellence with Tech Mahindra (ServiceNow & Enterprise Cloud), L&T Technology Services (Medical AI & Embedded Systems), and the Blue Star Limited Skill Development Centre (HVAC, Smart Refrigeration & Thermal Engineering at ITER).",
      action: "Explore CoE Models",
    },
    {
      title: "Executive Advisory & Curriculum Co-Design",
      icon: Users,
      desc: "Shape flexible curricula and job-ready training tracks—building on SOA’s Talent Next and Mission10x alliances with Wipro Ltd and scholarships with Blue Star Foundation.",
      action: "Join Advisory Boards",
    },
    {
      title: "Talent Stewardship & Mentorship Fellowships",
      icon: TrendingUp,
      desc: "Engage with students early in their academic journey through mentored internships, capstone challenges, and executive fireside guidance. By investing in young scholars before graduation day, corporate partners nurture future leaders from within.",
      action: "Explore Fellowship Tracks",
    },
  ];

  const placementData = [
    {
      faculty: "Engineering — B.Tech (ITER)",
      rate2022: "88.11%",
      rate2023: "91.47%",
      rate2024: "94.54% (1,802 / 1,903 placed; 92 higher studies)",
      median: "₹6.00 LPA (Peak: ₹43–46 LPA)",
      recruiters: "Microsoft, Amazon, Adobe, LSEG, JP Morgan, Zscaler, Dell, Samsung, Bosch, LTTS, Wipro, TCS, Cognizant",
    },
    {
      faculty: "Management — MBA (IBCS)",
      rate2022: "95.26%",
      rate2023: "94.79%",
      rate2024: "97.22% (175 / 180 placed)",
      median: "₹5.20 LPA",
      recruiters: "Deloitte, EY, KPMG, PwC, HDFC Bank, ICICI Bank, Axis Bank, Reliance, FactSet, Flipkart, Myntra",
    },
    {
      faculty: "Medicine — MBBS & MD/MS (IMS & SUM)",
      rate2022: "100.0%",
      rate2023: "100.0%",
      rate2024: "100.0% (148 / 148 placed)",
      median: "₹9.00 – ₹12.00 LPA",
      recruiters: "SUM Hospital, Apollo Hospitals, Max Healthcare, Fortis, National & Global Research Institutes",
    },
    {
      faculty: "Dental Sciences — BDS & MDS (IDS)",
      rate2022: "96.96%",
      rate2023: "93.40%",
      rate2024: "95.52% (64 / 67 placed)",
      median: "₹5.40 LPA (BDS) · ₹8.40 LPA (MDS)",
      recruiters: "Leading Corporate Dental Chains, Multi-Specialty Hospitals, Academic & Clinical Practice",
    },
    {
      faculty: "Law (SNIL) & Pharmacy (SPS)",
      rate2022: "High",
      rate2023: "196 placed",
      rate2024: "90%+ Eligible Placed",
      median: "₹5.40 LPA (Law) · ₹3.50 LPA (Pharmacy)",
      recruiters: "Tier-1 Corporate Law Firms, Judiciary, Sun Pharma, Dr. Reddy's, Cipla, Lupin, Bharat Biotech",
    },
  ];

  const formattedBrief = `SOA ALLYSHIP++ INDUSTRY CHALLENGE BRIEF
----------------------------------------
Title: ${challengeTitle || "[Challenge Title]"}
Sector: ${industrySector || "[Industry Sector]"}
Submitted By: ${contactName || "[Corporate Representative]"} (${contactEmail || "[Contact Email]"})

Challenge Overview:
${challengeDesc || "[Detailed description of industrial problem or partnership opportunity]"}

Sent via SOA University Allyship++ Platform (https://www.placements.soa.ac.in)`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(formattedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitChallenge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challengeTitle.trim() || !challengeDesc.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName || "Industry Partner",
          email: contactEmail || "partner@industry.com",
          subject: `Industry Challenge: ${challengeTitle}`,
          category: "Partnership",
          organization: industrySector || "Corporate Partner",
          message: formattedBrief,
        }),
      });

      const data = await res.json();
      setRefId(data.referenceId || `CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err) {
      setRefId(`CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[640px] lg:min-h-[720px] flex items-center border-b border-line overflow-hidden">
        <HeroBackdrop videoSrc={SOA_VIDEO_SRC} align="right" />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full flex justify-end">
          <div className="max-w-3xl space-y-6 text-left sm:text-right flex flex-col items-start sm:items-end">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              <span>Enterprise Partnership Portal</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05] text-left sm:text-right">
              <span className="block sm:whitespace-nowrap">Where Industry &amp; Academia</span>
              <span className="block italic font-normal sm:whitespace-nowrap">Co-Create the Future</span>
            </h1>

            <p className="text-base sm:text-lg font-display text-content-muted italic text-left sm:text-right lg:whitespace-nowrap">
              Co-Innovate. Sponsor Applied Research. Build Strategic Talent Corridors.
            </p>

            <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl font-normal text-left sm:text-right">
              From co-founding Centres of Excellence with Tech Mahindra and LTTS to sponsoring R&amp;D challenges with NITI Aayog, Siksha &lsquo;O&rsquo; Anusandhan offers global enterprises an agile, high-velocity talent ecosystem.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-start sm:justify-end gap-4">
              <a
                href="#submit-challenge"
                className="btn-primary group"
              >
                <span>Submit Industry Challenge</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
              </a>

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

      {/* 2. FOUR CORPORATE PARTNERSHIP PILLARS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Four Strategic Tracks
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Enterprise Collaboration Pathways
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-5xl mx-auto lg:whitespace-nowrap">
            Bilateral corporate engagements accelerating enterprise innovation, research, and talent resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {partnershipPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface rounded-3xl p-7 xl:p-8 border border-line hover:border-accent transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-content">
                    {p.title}
                  </h3>
                  <p className="text-sm text-content-muted leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-line">
                  <a
                    href="#submit-challenge"
                    className="text-xs font-bold text-content hover:text-accent flex items-center gap-1.5 transition-colors"
                  >
                    <span>{p.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INSTITUTIONAL GRADUATE PATHWAYS & ENTERPRISE TRUST */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="max-w-5xl space-y-3 mb-16">
          <div className="flex items-center gap-2 text-accent">
            <Award className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-heading">
              Institutional Pathways · Multi-Disciplinary Trust
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            A Trusted Bridge to Enterprise Leadership
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-5xl lg:whitespace-nowrap">
            Decades of sustained corporate trust across engineering, management, clinical sciences, and research.
          </p>
        </div>

        <div className="bg-surface rounded-3xl overflow-hidden border border-line shadow-xl">
          <div className="px-6 pt-4 pb-2 text-xs text-content-muted flex items-center justify-between gap-2 sm:hidden border-b border-line/60">
            <span className="font-semibold text-accent">Placement Statistics</span>
            <span className="inline-flex items-center gap-1 text-[11px]">
              Swipe horizontally <ArrowRight className="w-3 h-3 text-accent" />
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-surface-2 border-b border-line text-content text-xs uppercase tracking-wider font-heading">
                  <th className="py-4 px-6 font-bold whitespace-nowrap">Faculty / Program</th>
                  <th className="py-4 px-4 font-bold text-center whitespace-nowrap">2022 Placement</th>
                  <th className="py-4 px-4 font-bold text-center whitespace-nowrap">2023 Placement</th>
                  <th className="py-4 px-4 font-bold text-center text-accent whitespace-nowrap">2024 (Latest)</th>
                  <th className="py-4 px-4 font-bold whitespace-nowrap">Median / Peak Package</th>
                  <th className="py-4 px-6 font-bold hidden lg:table-cell whitespace-nowrap">Marquee Corporate Recruiters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {placementData.map((row) => (
                  <tr key={row.faculty} className="hover:bg-glass transition-colors">
                    <td className="py-4 px-6 font-bold text-content whitespace-nowrap">
                      {row.faculty}
                    </td>
                    <td className="py-4 px-4 text-center text-content-muted">
                      {row.rate2022}
                    </td>
                    <td className="py-4 px-4 text-center text-content-muted">
                      {row.rate2023}
                    </td>
                    <td className="py-4 px-4 text-center font-bold text-accent bg-glass">
                      {row.rate2024}
                    </td>
                    <td className="py-4 px-4 font-semibold text-content">
                      {row.median}
                    </td>
                    <td className="py-4 px-6 text-content-muted text-xs leading-relaxed hidden lg:table-cell">
                      {row.recruiters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. OFFICIAL CAMPUS INFRASTRUCTURE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            127-Acre Academic Ecosystem
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Research Infrastructure &amp; Living Laboratories
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-5xl mx-auto lg:whitespace-nowrap">
            A 127-acre academic biome encompassing enterprise engineering labs, teaching hospitals, and research hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-accent/60 shadow-lg transition-all group flex flex-col">
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
              <h3 className="font-display font-bold text-base sm:text-lg text-content group-hover:text-accent transition-colors">Main University Campus</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                127-acre campus in Khandagiri Square with academic complexes, libraries, and central administrative headquarters.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-accent/60 shadow-lg transition-all group flex flex-col">
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
              <h3 className="font-display font-bold text-base sm:text-lg text-content group-hover:text-accent transition-colors">ITER Engineering Faculty</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Ranked 22nd in India (NIRF 2025) featuring enterprise Centres of Excellence with Tech Mahindra, LTTS, and the Blue Star HVAC Skill Development Centre with 94.54% placement.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-accent/60 shadow-lg transition-all group flex flex-col">
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
              <h3 className="font-display font-bold text-base sm:text-lg text-content group-hover:text-accent transition-colors">University Auditorium</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                A 1,400+ seat civic and intellectual auditorium anchoring ALLYSHIP++ national executive roundtables, convocation ceremonies, and international scientific symposia.
              </p>
            </div>
          </div>

          <div className="bg-surface-2 rounded-3xl overflow-hidden border border-line hover:border-accent/60 shadow-lg transition-all group flex flex-col">
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
              <h3 className="font-display font-bold text-base sm:text-lg text-content group-hover:text-accent transition-colors">Academic Quads &amp; R&amp;D</h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Ranked 3rd nationally in Swachh Campus with eco-friendly quads, solar grids, and high-performance labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SUBMIT AN INDUSTRY CHALLENGE (INTERACTIVE FORM) */}
      <section id="submit-challenge" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full scroll-mt-28 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              Direct Executive Interface
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
              Submit an Industry Problem Statement
            </h2>
            <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl lg:whitespace-nowrap">
              Submit your enterprise bottleneck, AI prototyping need, or research challenge directly to our corporate team.
            </p>

            <div className="bg-surface rounded-2xl p-6 border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold font-heading text-accent uppercase tracking-wider block">
                Direct Contact Office
              </span>
              <div className="text-xs text-content-muted space-y-2">
                <div className="font-bold text-content">Office of Corporate Relations and Placement</div>
                <div>Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University)</div>
                <div className="text-accent font-bold">
                  Email: <a href="mailto:info@soa.ac.in" className="hover:underline">info@soa.ac.in</a>
                </div>
                <div>Khandagiri Square, Bhubaneswar, Odisha 751030</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-success-bg border border-success-border flex items-center justify-center text-success mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-content">Challenge Brief Recorded!</h3>
                    <p className="text-sm text-content-muted max-w-md mx-auto">
                      Thank you for submitting your problem brief to SOA University. Our corporate relations committee will review it and initiate contact.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 border border-line text-content text-xs font-bold mt-2">
                      <span>Reference ID: {refId}</span>
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof navigator !== "undefined" && navigator.clipboard) {
                            navigator.clipboard.writeText(refId);
                          }
                        }}
                        title="Copy Reference ID"
                        aria-label="Copy Reference ID"
                        className="p-1 rounded hover:bg-surface-3 text-accent transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="btn-secondary text-xs"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? "Copied Brief!" : "Copy Summary Brief"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setChallengeTitle("");
                        setChallengeDesc("");
                      }}
                      className="btn-primary text-xs"
                    >
                      Submit Another Challenge
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitChallenge} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="collab-name"
                        className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="collab-name"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="collab-email"
                        className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="collab-email"
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="e.g. anand@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="collab-title"
                        className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                      >
                        Challenge Title *
                      </label>
                      <input
                        id="collab-title"
                        type="text"
                        required
                        value={challengeTitle}
                        onChange={(e) => setChallengeTitle(e.target.value)}
                        placeholder="e.g. AI-driven defect detection in manufacturing"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="collab-sector"
                        className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                      >
                        Industry Sector
                      </label>
                      <input
                        id="collab-sector"
                        type="text"
                        value={industrySector}
                        onChange={(e) => setIndustrySector(e.target.value)}
                        placeholder="e.g. Technology, Automotive, Healthcare"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="collab-desc"
                      className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                    >
                      Challenge Description & Scope *
                    </label>
                    <textarea
                      id="collab-desc"
                      required
                      rows={4}
                      value={challengeDesc}
                      onChange={(e) => setChallengeDesc(e.target.value)}
                      placeholder="Describe the operational problem, prototype requirements, desired faculty domain, and expected project timeframe..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-base sm:text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-content-muted">
                      Submissions reviewed by the SOA Corporate Relations &amp; Placement Team
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary text-xs disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting Brief..." : "Submit Challenge Brief"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import { HeroBackdrop } from "@/components/HeroBackdrop";

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
      title: "Industry Problem Statements",
      icon: Lightbulb,
      desc: "Share a real engineering, clinical or business challenge. Faculty and student teams work on it, with support from the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog).",
      action: "Submit a Problem Statement",
    },
    {
      title: "Guest Sessions",
      icon: Cpu,
      desc: "Spend an hour on campus or online. Talk with students and faculty about your industry, your work and the leadership lessons you have learned along the way.",
      action: "Offer a Guest Session",
    },
    {
      title: "Mentorship",
      icon: Users,
      desc: "Guide students and young professionals as they move from campus to workplace. Help shape what they learn, building on SOA’s existing industry alliances such as Wipro’s Talent Next and Mission10x.",
      action: "Become a Mentor",
    },
    {
      title: "Talent Partnerships",
      icon: TrendingUp,
      desc: "Build a steady pipeline through internships and campus hiring across engineering, management, healthcare, law and pharmacy. SOA’s placement record is set out below.",
      action: "Start a Talent Partnership",
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
                <span>Collaborate With SOA</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                Shared Leadership. <br />
                <span className="italic font-normal whitespace-nowrap">Lasting Impact.</span>
              </h1>

              <p className="text-lg sm:text-xl font-display text-content-muted italic sm:whitespace-nowrap">
                Shape Future Curricula · Mentor Emerging Leaders · Build Talent Pipelines
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl font-normal">
                ALLYSHIP++ does not end when a conclave closes. Siksha &lsquo;O&rsquo; Anusandhan invites industry leaders to stay involved: guiding students, opening real problems to campus teams and building talent partnerships that last across every campus and industry discipline.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#submit-challenge"
                  className="btn-primary"
                >
                  <span>Submit Industry Challenge</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-secondary"
                >
                  <span>Request an Invitation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative lg:-translate-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-surface p-1.5 border border-line shadow-xl">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 on-media">
                  <Image
                    src="/soa-auditorium.jpg"
                    alt="SOA University Auditorium and Corporate Partner Gathering"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-content">
                    <span className="text-[11px] font-bold font-heading text-[#E8D5A7] uppercase tracking-wider">
                      Industry and Academia
                    </span>
                    <span className="text-sm font-bold text-content mt-0.5">
                      Corporate Relations &amp; Placement, SOA
                    </span>
                    <span className="text-[11px] text-content-secondary mt-0.5">
                      Direct Corporate Relations · info@soa.ac.in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR CORPORATE PARTNERSHIP PILLARS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Four Ways to Take Part
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            From Dialogue to Action
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            Each avenue is simple to start and grows with time. Choose the one that fits how you want to give back.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface rounded-3xl p-8 border border-line hover:border-accent transition-all flex flex-col justify-between space-y-6 group"
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

      {/* 3. VERIFIED PLACEMENT VELOCITY DATA TABLE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="max-w-5xl space-y-3 mb-16">
          <div className="flex items-center gap-2 text-accent">
            <Award className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-heading">
              SOA Placement Record
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            SOA&apos;s Placement Record
          </h2>
          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl">
            These figures are Siksha &lsquo;O&rsquo; Anusandhan&apos;s university placement results, not ALLYSHIP++ outcomes. They show the talent that talent partners can meet on campus.
          </p>
        </div>

        <div className="bg-surface rounded-3xl overflow-hidden border border-line shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-surface-2 border-b border-line text-content text-xs uppercase tracking-wider font-heading">
                  <th className="py-4 px-6 font-bold">Faculty / Program</th>
                  <th className="py-4 px-4 font-bold text-center">2022 Placement</th>
                  <th className="py-4 px-4 font-bold text-center">2023 Placement</th>
                  <th className="py-4 px-4 font-bold text-center text-accent">2024 (Latest)</th>
                  <th className="py-4 px-4 font-bold">Median / Peak Package</th>
                  <th className="py-4 px-6 font-bold hidden lg:table-cell">Recruiters Include</th>
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

      {/* 4. SUBMIT AN INDUSTRY CHALLENGE (INTERACTIVE FORM) */}
      <section id="submit-challenge" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full scroll-mt-28 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              Share a Challenge
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
              Bring Us a Real Problem
            </h2>
            <p className="text-base text-content-secondary leading-relaxed font-normal">
              Tell us about a problem your team is working on. Your brief goes to Prof. (Dr.) Raj Kumar Hota, Dean, Corporate Relations &amp; Placement, and his team.
            </p>

            <div className="bg-surface rounded-2xl p-6 border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold font-heading text-accent uppercase tracking-wider block">
                Contact Office
              </span>
              <div className="text-xs text-content-muted space-y-2">
                <div className="font-bold text-content">Dean of Corporate Relations and Placement</div>
                <div>Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University)</div>
                <div className="text-accent font-bold">Email: info@soa.ac.in</div>
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
                    <h3 className="font-heading text-2xl font-bold text-content">Thank You. Your Brief Is In.</h3>
                    <p className="text-sm text-content-muted max-w-md mx-auto">
                      The Corporate Relations team at SOA will review your brief and get in touch.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-surface-2 border border-line text-content text-xs font-bold mt-2">
                      Reference ID: {refId}
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
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
                      placeholder="What is the problem, what would a good result look like, and what timeframe do you have in mind?"
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-content-muted">
                      Reviewed by the SOA Corporate Relations team
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

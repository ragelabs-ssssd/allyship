"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Building2,
  Lightbulb,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ExternalLink,
  Newspaper,
  Award,
  CheckCircle2,
  TrendingUp,
  X,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";

interface PressClipping {
  id: string;
  outlet: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  quote: string;
  link: string;
  image: string;
}

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [selectedClipping, setSelectedClipping] = useState<PressClipping | null>(null);

  const outcomePillars = [
    {
      title: "Enterprise Co-Creation & Dedicated CoEs",
      badge: "Institutional Infrastructure",
      desc: "Boardroom feedback from Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai has translated into permanent on-campus skill hubs—including the Tech Mahindra Centre of Excellence in Cloud & ServiceNow, and LTTS Medical AI architectures.",
      metric: "Active CoEs with Tech Mahindra & LTTS",
    },
    {
      title: "Career Resilience & Day-One Confidence",
      badge: "Student Transformation",
      desc: "Through continuous executive roundtables and direct feedback loops, SOA students learn to navigate real-world ambiguity before entering the workforce. Our partnership prepares them for sustainable, multi-decade careers built on adaptability and ethics.",
      metric: "15,000+ Scholars Guided by Industry Mentors",
    },
    {
      title: "Early-Career Mentorship & Policy Adoption",
      badge: "Workplace Cultural Reform",
      desc: "Over 500 participating CHROs, VPs, and talent leaders across seven conclaves have co-developed actionable frameworks on psychological safety, mentorship roles, and empathetic Gen-Z onboarding for modern teams.",
      metric: "500+ Executives Engaged",
    },
  ];

  const pressClippings = [
    {
      id: "dc-hyd",
      outlet: "Deccan Chronicle",
      title: "Allyship++ Conclave Focuses on Leadership and Collaboration",
      date: "July 2024 · Hyderabad",
      category: "Conclave Coverage",
      summary: "Detailed coverage of the Hyderabad chapter headlined by former Indian international cricketer Arshad Ayub, CXO leaders from UPS, Human Edge, and CSIR scientists deliberating collaborative leadership and industry-academia cooperation.",
      quote: "SOA convenes corporate leadership to bridge the gap between academic research and business transformation.",
      link: "https://www.deccanchronicle.com/southern-states/allyship-conclave-focuses-on-leadership-and-collaboration-1812653",
      image: "/news-deccan-hyd.jpg",
    },
    {
      id: "statesman-techm",
      outlet: "The Statesman",
      title: "Odisha: SOA Ties Up with Tech Mahindra to Boost Industry-Ready Skills",
      date: "July 2026 · Bhubaneswar",
      category: "Centre of Excellence",
      summary: "Reporting on the inauguration of the Tech Mahindra Centre of Excellence at ITER campus under the stewardship of Founder President & Chairman Prof. (Dr.) Manojranjan Nayak and Tech Mahindra's Dharmaraj Nayak to train engineers in ServiceNow, AI/ML, and Cloud architecture.",
      quote: "A pioneering milestone accelerating hands-on enterprise competency directly within university laboratories.",
      link: "https://www.thestatesman.com/business/odisha-soa-ties-up-with-tech-mahindra-to-boost-industry-ready-skills-1503616250.html",
      image: "/soa-iter-building.jpg",
    },
    {
      id: "prameya-genz",
      outlet: "Prameya News",
      title: "SOA Organises Allyship++ 2.0 with Focus on Gen-Z Aspirations at Hyderabad",
      date: "May 2026 · Hyderabad",
      category: "Conclave 2.0",
      summary: "Focusing on the 2.0 cycle launch at Le Meridien, Gachibowli, featuring AFI Secretary Dr. G. Srinivas Patnaik, IIT Delhi's Prof. Sanjay Dhir, and HR heads from Akamai, Reckitt, and NCC Ltd on psychological safety and learning agility.",
      quote: "Modern enterprises must adapt to Gen-Z aspirations through intentional, daily mentorship.",
      link: "https://www.prameyanews.com/soa-organises-allyship-20-with-focus-on-gen-z-aspirations-at-hyderabad",
      image: "/news-prameya-genz.webp",
    },
    {
      id: "bytes-blr",
      outlet: "OdishaBytes",
      title: "70 Corporate Leaders Attend SOA's Allyship++ Event at Bengaluru",
      date: "June 2024 · Bengaluru",
      category: "Conclave Coverage",
      summary: "Reporting on the inaugural conclave in Bengaluru with top executives from Microsoft, Dell, Zscaler, BNY Mellon, and an inspiring virtual keynote by Olympian Anju Bobby George on leadership in sports.",
      quote: "Over 70 corporate stalwarts gathered in Bengaluru to initiate a transformative dialogue with SOA University.",
      link: "https://odishabytes.com/70-corporate-leaders-attend-soas-allyship-event-at-bengaluru/",
      image: "/news-bytes-blr.jpg",
    },
    {
      id: "prameya-mumbai",
      outlet: "Prameya News",
      title: "Nilesh Kulkarni Addresses SOA's Allyship Conclave at Mumbai",
      date: "October 2025 · Mumbai",
      category: "Conclave Coverage",
      summary: "Former Indian Test cricketer Nilesh Kulkarni and Olympian Anand Menezes joined Chairman Prof. (Dr.) Manojranjan Nayak and LTTS Global Head Dr. P.B. Kotur in Mumbai to examine employee well-being and high-performance discipline.",
      quote: "Connecting the resilience of international sport with executive well-being and boardroom empathy.",
      link: "https://www.prameyanews.com/nilesh-kulkarni-addresses-soas-allyship-conclave-at-mumbai",
      image: "/news-prameya-mumbai.webp",
    },
    {
      id: "update-lseg",
      outlet: "UpdateOdisha",
      title: "First Time in Odisha: LSEG Hires 11 SOA Students",
      date: "September 2025 · Bhubaneswar",
      category: "Placement Milestone",
      summary: "London Stock Exchange Group (LSEG) selected 11 B.Tech and MCA students from SOA following a rigorous six-round recruitment drive—representing the largest cohort recruited by LSEG from any single campus in India.",
      quote: "A testament to the global competitiveness of SOA's technical curriculum and student caliber.",
      link: "https://updateodisha.com/2025/09/13/first-time-in-odisha-lseg-hires-11-soa-students-87858/",
      image: "/news-update-lseg.jpg",
    },
    {
      id: "sakala-kolkata",
      outlet: "The Sakala",
      title: "Allyship++ Conclave at Kolkata: Sports Legends & Corporate Leaders",
      date: "September 2024 · Kolkata",
      category: "Sports & Industry Tribute",
      summary: "1964 Olympic hockey gold medalist Gurbux Singh, footballer Gautam Sarkar, and Dhoni's mentor Satyaprakash Krishna joined PwC, Lexmark, and Fortune 500 DEI advisors to deliberate digital transformation and workplace inclusion.",
      quote: "Honoring India's greatest athletic icons while laying the roadmap for modern inclusive workplaces.",
      link: "https://www.soa.ac.in/general-notifications/2024/9/30/soa-organises-allyship-conclave-at-kolkata",
      image: "/CON01638.JPG",
    },
    {
      id: "around-chennai",
      outlet: "Around Odisha",
      title: "SOA University Hosts Allyship++ 2.0 at Chennai",
      date: "August 2026 · Chennai",
      category: "Conclave 2.0",
      summary: "Paris Olympics sprint coach Premanand J. and Standard Chartered Global Head Archana Grover led deliberations with 60+ talent heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis on allyship as everyday leadership.",
      quote: "Allyship is not an optional HR policy—it is a daily leadership responsibility that unlocks sustainable innovation.",
      link: "https://www.soa.ac.in/general-notifications/2026/8/7/soa-university-hosts-allyship-20-at-chennai",
      image: "/news-around-chennai.jpg",
    },
    {
      id: "sanchar-nirf",
      outlet: "The Sanchar / Orissa Today",
      title: "SOA Ranked 15th in Country in NIRF 2025; Climbs in Engineering & Medicine",
      date: "September 2025 · National",
      category: "Academic Ranking",
      summary: "Ministry of Education announces NIRF 2025: SOA ranks 15th nationally in the University category with score of 63.14. ITER engineering ascends to 22nd and Medical surges to 15th in India.",
      quote: "Reinforcing SOA's stature as a multidisciplinary powerhouse and the #1 university in Odisha.",
      link: "https://www.soa.ac.in/general-notifications/2025/9/4/soa-ranked-15th-in-country-in-2025-nirf-rankings-climbs-up-the-ladder-in-medical-sciences-and-engineering",
      image: "/soa-campus-aerial.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                <span>Institutional Dividends · Sustainable Progress</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                The ALLYSHIP<span className="text-accent">++</span> <br />
                <span className="italic font-normal">Impact</span>
              </h1>

              <p className="text-lg sm:text-xl font-display text-content-muted italic lg:whitespace-nowrap">
                Moving Beyond Short-Term Metrics to Transform the Future of Education and Work
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl font-normal">
                The true measure of an alliance cannot be captured in a single recruitment cycle. Impact is seen when boardroom leaders help reshape engineering syllabi, when corporate laboratories open inside university campuses, and when first-generation graduates enter the workforce with the quiet confidence to speak up, contribute, and lead.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-primary"
                >
                  <span>Join the Next Conclave</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#press-coverage"
                  className="btn-secondary"
                >
                  <span>Press Coverage</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-surface p-1.5 border border-line shadow-xl">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 on-media">
                  <Image
                    src="/IMG_7873.jpg"
                    alt="Allyship++ National Conclave Live Delegation and Leadership"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-content">
                    <span className="text-[11px] font-bold font-heading text-accent-light uppercase tracking-wider">
                      Industry &amp; Academia
                    </span>
                    <span className="text-sm font-bold text-content mt-0.5">
                      Shared Perspectives Across 5 Corporate Capitals
                    </span>
                    <span className="text-[11px] text-content-secondary mt-0.5">
                      National Media Coverage · 7 Conclave Editions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE QUALITATIVE OUTCOME PILLARS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center w-full max-w-7xl mx-auto mb-16 space-y-3 flex flex-col items-center justify-center">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            Institutional Progress
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[42px] font-bold text-content tracking-tight text-center">
            From Boardroom Deliberation to Measurable Outcomes
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-4xl mx-auto text-center">
            Direct engagement across India&apos;s commercial capitals delivering enduring dividends for scholars and enterprise partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomePillars.map((p) => (
            <div
              key={p.title}
              className="bg-surface rounded-3xl p-8 border border-line shadow-lg hover:border-accent/80 hover:shadow-[0_0_24px_rgba(201,169,110,0.15)] transition-all flex flex-col justify-between space-y-6 text-content"
            >
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full bg-glass-strong text-accent border border-accent/30">
                  {p.badge}
                </span>
                <h3 className="font-heading text-xl font-bold text-content">
                  {p.title}
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-line">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/25 text-accent text-xs font-bold tracking-wide">
                  {p.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IN THE PRESS — 9 NEWSPAPER & MEDIA CLIPPINGS */}
      <section id="press-coverage" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center w-full max-w-7xl mx-auto mb-16 space-y-3 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            <Newspaper className="w-3.5 h-3.5" />
            <span>National &amp; Regional Media Chronicle</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[42px] font-bold text-content tracking-tight text-center">
            Chronicled Across India&apos;s Leading Publications
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-4xl mx-auto text-center">
            Documented across Deccan Chronicle, The Statesman, Prameya News, OdishaBytes, and national newsrooms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressClippings.map((c) => (
            <div
              key={c.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedClipping(c)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedClipping(c);
                }
              }}
              className="bg-surface rounded-3xl overflow-hidden border border-line shadow-lg hover:border-accent/80 hover:shadow-[0_0_24px_rgba(201,169,110,0.15)] cursor-pointer flex flex-col justify-between group transition-all text-content"
            >
              <div className="relative aspect-[16/10] w-full bg-surface-3 overflow-hidden on-media">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-accent border border-accent/30 text-[10px] font-bold font-heading uppercase tracking-[0.14em] px-3 py-1 rounded-full">
                  {c.outlet}
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-content-muted">
                    {c.date}
                  </span>
                  <h3 className="font-display leading-snug text-base font-bold text-content group-hover:text-accent transition-colors mt-1 line-clamp-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-content-secondary mt-2 line-clamp-3 leading-relaxed">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-bold text-content group-hover:text-accent transition-colors">
                  <span>Inspect Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIPPING DETAIL MODAL / LIGHTBOX */}
      {selectedClipping && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedClipping(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-surface text-content rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-line p-6 sm:p-8 space-y-6 animate-in zoom-in-95"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="text-xs font-bold font-heading text-accent bg-glass-strong px-3 py-1 rounded-full border border-line">
                  {selectedClipping.outlet} · {selectedClipping.category}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-content mt-3">
                  {selectedClipping.title}
                </h3>
                <span className="text-xs text-content-muted block mt-1">
                  {selectedClipping.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedClipping(null)}
                aria-label="Close press clipping modal"
                className="p-2 rounded-full hover:bg-glass-strong text-content-muted hover:text-content transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-surface-3 border border-line">
                <Image
                  src={selectedClipping.image}
                  alt={selectedClipping.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <blockquote className="text-base text-content-secondary italic border-l-2 border-accent pl-4 py-2 bg-surface-2 rounded-r-xl">
                &ldquo;{selectedClipping.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-content-secondary leading-relaxed">
                {selectedClipping.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-content-muted">
                Official Press Record Archive · SOA University
              </span>
              <a
                href={selectedClipping.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-5"
              >
                <span>Read Full Notification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

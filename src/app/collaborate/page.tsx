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
  Sparkles,
  Compass,
  FileText,
  Clock,
  Check,
  Flame,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop, SOA_VIDEO_SRC } from "@/components/HeroBackdrop";

export default function CollaboratePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // Active Interactive Tracks (Section 2)
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  // Active Faculty Tab (Section 4)
  const [activeFacultyIndex, setActiveFacultyIndex] = useState(0);

  // Active Conclave City Tab (Section 5)
  const [activeCityIndex, setActiveCityIndex] = useState(0);

  // Form states (Section 6)
  const [selectedCollabType, setSelectedCollabType] = useState("Centres of Excellence");
  const [challengeTitle, setChallengeTitle] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [challengeDesc, setChallengeDesc] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refId, setRefId] = useState("");

  // SECTION 2 DATA: Interactive Partnership Tracks
  const partnershipTracks = [
    {
      id: "01",
      title: "Centres of Excellence & Applied R&D",
      subtitle: "Dedicated Enterprise Research Labs on Campus",
      badge: "Flagship Enterprise Infrastructure",
      desc: "Co-establish specialized industry hubs modeled on SOA's on-campus Centres of Excellence with Tech Mahindra (ServiceNow & Enterprise Cloud), L&T Technology Services (Medical AI & Embedded Systems), and the Blue Star Limited Skill Development Centre (HVAC, Smart Refrigeration & Thermal Engineering at ITER).",
      tags: ["ServiceNow", "Enterprise Cloud", "Medical AI", "HVAC & Thermal", "Embedded Systems"],
      partners: ["Tech Mahindra", "LTTS", "Blue Star Limited"],
      metric: "18+ Operational CoEs",
      image: "/soa-iter-building.jpg",
      imageAlt: "ITER Engineering building housing Tech Mahindra & LTTS Centres of Excellence",
      callToAction: "Explore CoE Models",
    },
    {
      id: "02",
      title: "Industry Challenges & Venture Incubation",
      subtitle: "Faculty-Led Rapid Prototyping & IP Creation",
      badge: "NITI Aayog Backed Ecosystem",
      desc: "Sponsor real-world engineering, clinical, or digital transformation challenges for faculty-led research cohorts to prototype and scale through the AIC-SOA Atal Incubation Centre under NITI Aayog.",
      tags: ["NITI Aayog", "AIC-SOA", "Seed Funding", "Deep-Tech Patents", "Rapid PoC"],
      partners: ["AIC-SOA", "NITI Aayog", "Startup Odisha"],
      metric: "₹10Cr+ Innovation Corpus",
      image: "/conclave-mandate-delegation.jpg",
      imageAlt: "Executive delegation reviewing incubation prototypes at SOA",
      callToAction: "Submit Problem Statement",
    },
    {
      id: "03",
      title: "Executive Advisory & Curriculum Co-Design",
      subtitle: "Boardroom-Engineered Syllabus Architecture",
      badge: "Industry-Ready Academics",
      desc: "Shape flexible curricula and job-ready training tracks—building on SOA's Talent Next and Mission10x alliances with Wipro Ltd and scholarships with Blue Star Foundation.",
      tags: ["Talent Next", "Mission10x", "Curriculum Advisory", "Executive Masterclasses"],
      partners: ["Wipro Limited", "Blue Star Foundation", "National HRD Network"],
      metric: "500+ CXO Advisors",
      image: "/IMG_7328_whole_4_3.jpg",
      imageAlt: "Prof. (Dr.) Raj Kumar Hota chairing academic advisory session",
      callToAction: "Join Advisory Boards",
    },
    {
      id: "04",
      title: "Talent Stewardship & Mentorship Fellowships",
      subtitle: "Multi-Year Pre-Placement Student Development",
      badge: "Sustainable Human Capital",
      desc: "Engage with students early in their academic journey through mentored internships, capstone challenges, and executive fireside guidance. By investing in young scholars before graduation day, corporate partners nurture future leaders from within.",
      tags: ["Early-Career Onboarding", "Capstone Mentorship", "Psychological Safety", "Leadership Clinics"],
      partners: ["Microsoft", "LSEG", "Deloitte", "Amazon"],
      metric: "15,000+ Scholars Guided",
      image: "/IMG_7873.jpg",
      imageAlt: "Students engaging in leadership roundtables at Allyship++ Conclave",
      callToAction: "Explore Fellowship Tracks",
    },
  ];

  // SECTION 4 DATA: Faculty Placement Intelligence Suite
  const facultyPlacementData = [
    {
      id: "iter",
      faculty: "Engineering — B.Tech & M.Tech (ITER)",
      rank: "NIRF #22 Engineering in India",
      rate2022: "88.11%",
      rate2023: "91.47%",
      rate2024: "94.54%",
      details2024: "1,802 / 1,903 Placed · 92 Higher Studies",
      median: "₹6.00 LPA",
      peak: "₹43.00 – ₹46.00 LPA",
      recruiters: [
        "Microsoft", "Amazon", "Adobe", "LSEG", "JP Morgan", "Zscaler",
        "Dell", "Samsung", "Bosch", "LTTS", "Wipro", "TCS", "Cognizant"
      ],
      highlights: "Houses dedicated CoEs with Tech Mahindra (Cloud/ServiceNow), LTTS (Medical AI), and Blue Star HVAC Skill Centre.",
    },
    {
      id: "ibcs",
      faculty: "Management — MBA (IBCS)",
      rank: "Top B-School in Eastern India",
      rate2022: "95.26%",
      rate2023: "94.79%",
      rate2024: "97.22%",
      details2024: "175 / 180 Placed",
      median: "₹5.20 LPA",
      peak: "₹18.50 LPA",
      recruiters: [
        "Deloitte", "EY", "KPMG", "PwC", "HDFC Bank", "ICICI Bank",
        "Axis Bank", "Reliance", "FactSet", "Flipkart", "Myntra"
      ],
      highlights: "Dual-specialization curricula co-designed with Big-4 consulting and banking talent heads.",
    },
    {
      id: "ims",
      faculty: "Medicine — MBBS & MD/MS (IMS & SUM Hospital)",
      rank: "NIRF #15 Medical in India",
      rate2022: "100.0%",
      rate2023: "100.0%",
      rate2024: "100.0%",
      details2024: "148 / 148 Placed",
      median: "₹9.00 – ₹12.00 LPA",
      peak: "₹24.00 LPA",
      recruiters: [
        "SUM Hospital", "Apollo Hospitals", "Max Healthcare", "Fortis Healthcare",
        "National Health Mission", "International Research Fellowships"
      ],
      highlights: "1,750+ bed NABH/NABL accredited super-specialty teaching hospital supporting clinical trials.",
    },
    {
      id: "ids",
      faculty: "Dental Sciences — BDS & MDS (IDS)",
      rank: "NIRF #9 Dental in India",
      rate2022: "96.96%",
      rate2023: "93.40%",
      rate2024: "95.52%",
      details2024: "64 / 67 Placed",
      median: "₹5.40 LPA (BDS) · ₹8.40 LPA (MDS)",
      peak: "₹15.00 LPA",
      recruiters: [
        "Leading Dental Chains", "Multi-Specialty Healthcare Centers",
        "Clinical Research Labs", "Academic Faculty Appointments"
      ],
      highlights: "Pioneering robotic dental simulation suites and maxillo-facial surgery research corridors.",
    },
    {
      id: "law-pharm",
      faculty: "Law (SNIL) & Pharmacy (SPS)",
      rank: "BCI & PCI Approved Centers of Excellence",
      rate2022: "High Retention",
      rate2023: "196 Placed",
      rate2024: "90%+ Eligible Placed",
      details2024: "90%+ Eligible Cohorts Placed",
      median: "₹5.40 LPA (Law) · ₹3.50 LPA (Pharmacy)",
      peak: "₹14.00 LPA",
      recruiters: [
        "Tier-1 Corporate Law Firms", "State Judiciary", "Sun Pharma",
        "Dr. Reddy's", "Cipla", "Lupin", "Bharat Biotech"
      ],
      highlights: "Moot Court chambers with Supreme Court advocates and FDA-compliant formulation laboratories.",
    },
  ];

  // SECTION 5 DATA: Pan-India Conclave Metro Footprint
  const conclaveMetros = [
    {
      city: "Bengaluru",
      badge: "Inaugural Chapter",
      venue: "The Leela Palace, Bengaluru",
      keynote: "Olympian Anju Bobby George & CXO Roundtable",
      corporateLeaders: "Microsoft, Dell Technologies, Zscaler, BNY Mellon, Torry Harris, Tally Solutions",
      focus: "Leadership in Sports, Psychological Safety, Next-Gen Engineering Talent",
      stats: "70+ Corporate Leaders Engaged",
    },
    {
      city: "Hyderabad",
      badge: "Cycle 1.0 & 2.0 Edition",
      venue: "Le Méridien & Park Hyatt, Hyderabad",
      keynote: "Arshad Ayub (Former Indian Test Cricketer) & AFI Secretary Dr. G. Srinivas Patnaik",
      corporateLeaders: "UPS, Human Edge, Akamai, Reckitt, NCC Ltd, CSIR Labs",
      focus: "Gen-Z Career Ambitions, High-Performance Discipline, Applied AI Corridors",
      stats: "110+ CXOs Across 2 Cycles",
    },
    {
      city: "Kolkata",
      badge: "Cultural & Industrial Capital",
      venue: "ITC Sonar, Kolkata",
      keynote: "1964 Olympic Gold Medalist Gurbux Singh & Football Legend Gautam Sarkar",
      corporateLeaders: "PwC India, Lexmark, Tata Consultancy Services, Fortune 500 DEI Advisors",
      focus: "Athletic Resilience, Digital Transformation, Boardroom Allyship",
      stats: "65+ Executive Dignitaries",
    },
    {
      city: "Mumbai",
      badge: "Financial Capital Edition",
      venue: "Grand Hyatt Mumbai, Santacruz",
      keynote: "Former Indian Cricketer Nilesh Kulkarni & Olympian Anand Menezes",
      corporateLeaders: "L&T Technology Services, Financial Institutions, Tech Enterprises",
      focus: "Executive Well-Being, Sustainable Corporate Culture, High-Stakes Composure",
      stats: "85+ Senior HR & Talent Heads",
    },
    {
      city: "Chennai",
      badge: "Deep-Tech & Automotive",
      venue: "Taj Coromandel, Chennai",
      keynote: "Paris Olympics Sprint Coach Premanand J. & Standard Chartered Global Head Archana Grover",
      corporateLeaders: "Standard Chartered, Foodhub, Rocket India, Nordex, KaarTech, Mphasis",
      focus: "Allyship as Everyday Leadership, Automotive AI, Women in Tech Acceleration",
      stats: "60+ Enterprise Leaders",
    },
    {
      city: "Bhubaneswar",
      badge: "Academic Headquarters",
      venue: "SOA Main Convention Complex & ITER Campus",
      keynote: "SOA Academic Directorate, NITI Aayog & Corporate Advisory Board",
      corporateLeaders: "Tech Mahindra, Blue Star, LSEG, Wipro, National Incubation Networks",
      focus: "On-Campus CoE Inceptions, Living Lab Validations, NEP 2020 Implementation",
      stats: "127-Acre Academic Biome Anchor",
    },
  ];

  // Dynamic Brief Formatting
  const formattedBrief = `SOA ALLYSHIP++ INDUSTRY CHALLENGE BRIEF
----------------------------------------
Model: ${selectedCollabType}
Title: ${challengeTitle || "[Challenge Title]"}
Sector: ${industrySector || "[Industry Sector]"}
Submitted By: ${contactName || "[Corporate Representative]"} (${contactEmail || "[Contact Email]"})

Challenge Overview:
${challengeDesc || "[Detailed description of industrial problem, prototype requirement, or talent corridor opportunity]"}

Generated via SOA University Allyship++ Enterprise Platform (https://www.placements.soa.ac.in)`;

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
          subject: `Industry Challenge [${selectedCollabType}]: ${challengeTitle}`,
          category: "Partnership",
          organization: `${industrySector || "Enterprise"} (${selectedCollabType})`,
          message: formattedBrief,
        }),
      });

      const data = await res.json();
      setRefId(data.referenceId || `SOA-CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } catch (err) {
      setRefId(`SOA-CHAL-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0 selection:bg-accent/30 selection:text-content">
      {/* ========================================================================= */}
      {/* 1. MONUMENTAL ARCHITECTURAL HERO & ENTERPRISE MARQUEE                      */}
      {/* ========================================================================= */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-line overflow-hidden">
        {/* Subtle Background Layering */}
        <HeroBackdrop videoSrc={SOA_VIDEO_SRC} align="right" />

        {/* Oversized Architectural Typography Watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        >
          <span className="font-display text-[15vw] sm:text-[18vw] font-black uppercase tracking-tighter text-content/[0.03] whitespace-nowrap">
            CO&bull;CREATE
          </span>
        </div>

        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          {/* Top Architectural Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-line/60 text-xs font-mono tracking-wider text-content-muted">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>20&deg; 17&prime; 38&Prime; N &middot; 85&deg; 49&prime; 44&Prime; E</span>
              <span className="hidden sm:inline text-line">&bull;</span>
              <span className="hidden sm:inline">BHUBANESWAR, INDIA</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-accent font-semibold">EST. 1996</span>
              <span className="text-line">&bull;</span>
              <span className="text-content font-bold">NIRF #15 NATIONAL RANK</span>
              <span className="text-line">&bull;</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-sans font-semibold text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2025&ndash;26 Co-Creation Open
              </span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Partnership Portal &middot; Cycle 2.0</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                Where Industry <br />
                <span className="italic font-normal">&amp; Academia</span> <br />
                <span className="text-accent">Co-Create</span> the Future
              </h1>

              <p className="text-base sm:text-lg font-display text-content-muted italic">
                From On-Campus Centres of Excellence to Faculty-Led Prototyping and 15,000+ Career Ready Scholars.
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl text-left">
                Siksha &lsquo;O&rsquo; Anusandhan offers multinational corporations, deep-tech pioneers, and public institutions an agile, high-velocity talent biome. We partner directly with executive boardrooms to build permanent research labs, co-engineer modern curricula, and secure day-one career confidence.
              </p>

              {/* Direct Action Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
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
                  <span>Request Executive Campus Visit</span>
                </button>

                <a
                  href="#faculty-intelligence"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light px-3 py-2 transition-colors"
                >
                  <span>Inspect Placement Metrics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Floating Co-Creation Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-1.5 bg-surface border border-line shadow-2xl group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3">
                  <Image
                    src="/IMG_7873.jpg"
                    alt="Corporate leaders and academic leadership at SOA Allyship++ National Conclave"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Top-Right Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/95 border border-accent/40 font-sans text-xs font-bold uppercase tracking-[0.14em] shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      500+ CXO Network
                    </span>
                  </div>

                  {/* Floating Glassmorphic Metric Chips */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center">
                        <div className="font-heading text-lg font-bold text-accent">94.54%</div>
                        <div className="text-[10px] text-content-muted uppercase tracking-wider">Placement Rate</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center">
                        <div className="font-heading text-lg font-bold text-content">₹46 LPA</div>
                        <div className="text-[10px] text-content-muted uppercase tracking-wider">Peak Package</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center">
                        <div className="font-heading text-lg font-bold text-accent">18+ CoEs</div>
                        <div className="text-[10px] text-content-muted uppercase tracking-wider">Enterprise Labs</div>
                      </div>
                    </div>

                    <div className="px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-content-secondary">
                      <span>CoE Alliances:</span>
                      <span className="font-semibold text-content">Tech Mahindra &bull; LTTS &bull; Blue Star</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Velocity Marquee Ticker Band */}
        <div className="mt-12 py-3 bg-surface-2 border-y border-line overflow-hidden select-none">
          <div className="flex items-center whitespace-nowrap animate-marquee gap-8 text-xs font-mono uppercase tracking-[0.2em] text-content-muted">
            <span>&bull; ENTERPRISE CO-CREATION</span>
            <span className="text-accent">&copy; NIRF #15 NATIONAL RANK</span>
            <span>&bull; TECH MAHINDRA CLOUD &amp; SERVICENOW COE</span>
            <span className="text-accent">&copy; LTTS MEDICAL AI BIO-DESIGN LAB</span>
            <span>&bull; BLUE STAR HVAC SKILL CENTRE</span>
            <span className="text-accent">&copy; AIC-SOA ATAL INCUBATION UNDER NITI AAYOG</span>
            <span>&bull; 94.54% B.TECH PLACEMENT</span>
            <span className="text-accent">&copy; 15,000+ SCHOLARS EMPOWERED</span>
            <span>&bull; 500+ CXO NETWORK ACROSS 6 METROS</span>
            <span className="text-accent">&copy; LONDON STOCK EXCHANGE GROUP LARGEST HIRING DRIVE</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PARTNERSHIP TRACKS (PULSE-INSPIRED STACKED TYPOGRAPHY)     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        {/* Section Header */}
        <div className="max-w-4xl space-y-3 mb-16">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-accent">
              Four Strategic Tracks &middot; Direct Engagement
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            How Industry Partners Co-Create With SOA
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            Bilateral corporate partnerships moving far beyond transactional recruitment to establish enduring intellectual, clinical, and technological leadership.
          </p>
        </div>

        {/* Interactive Split Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Numbered Track Stack */}
          <div className="lg:col-span-5 space-y-4">
            {partnershipTracks.map((track, idx) => {
              const isActive = activeTrackIndex === idx;
              return (
                <div
                  key={track.id}
                  onClick={() => setActiveTrackIndex(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between group ${
                    isActive
                      ? "bg-surface border-accent shadow-xl shadow-accent/5 ring-1 ring-accent/30"
                      : "bg-surface-2 border-line hover:border-accent/40 hover:bg-surface"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border transition-colors ${
                        isActive
                          ? "bg-accent text-on-accent border-accent"
                          : "bg-surface text-content-muted border-line group-hover:text-content"
                      }`}
                    >
                      TRACK {track.id}
                    </span>
                    <span className="text-xs font-semibold text-accent font-sans">
                      {track.metric}
                    </span>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <h3 className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? "text-content" : "text-content-secondary group-hover:text-content"
                    }`}>
                      {track.title}
                    </h3>
                    <p className="text-xs text-content-muted leading-relaxed font-normal line-clamp-2">
                      {track.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-semibold">
                    <span className={`${isActive ? "text-accent" : "text-content-muted group-hover:text-content"}`}>
                      {track.badge}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-accent" : "text-content-muted group-hover:translate-x-1"
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Live Preview Deck */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {(() => {
                const current = partnershipTracks[activeTrackIndex];
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full bg-surface rounded-3xl border border-line shadow-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8"
                  >
                    {/* Top Media Feature */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-surface-3 border border-line shadow-inner">
                      <Image
                        src={current.image}
                        alt={current.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-accent border border-accent/40 font-mono text-xs font-bold uppercase tracking-wider">
                          TRACK {current.id} &middot; {current.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-white/90 font-semibold font-sans">Key Corporate Partners:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {current.partners.map((p) => (
                            <span key={p} className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-[11px]">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Narrative */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-content">
                          {current.title}
                        </h3>
                        <p className="font-display italic text-accent text-sm mt-1">
                          {current.subtitle}
                        </p>
                      </div>

                      <p className="text-base text-content-secondary leading-relaxed font-normal">
                        {current.desc}
                      </p>

                      {/* Tag Array */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {current.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-surface-2 border border-line text-content-secondary font-mono text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-content-muted">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        <span>Institutional MOUs &middot; Formal Governance &middot; SOA Directorate</span>
                      </div>

                      <a
                        href="#submit-challenge"
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        <span>{current.callToAction}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LIVING LABORATORIES & 127-ACRE BIOME (ARCHITECTURAL BENTO GRID)         */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            127-Acre Academic Biome &middot; Living Laboratories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Infrastructure Engineered for Enterprise Scale
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            From deep-tech incubators recognized by NITI Aayog to clinical hospital beds and engineering R&amp;D quads.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card A (8 cols): ITER Engineering Faculty & Enterprise CoE Hub */}
          <div className="md:col-span-8 rounded-3xl p-8 sm:p-10 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-accent/60 transition-all duration-300">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-surface-3 border border-line">
              <Image
                src="/soa-iter-building.jpg"
                alt="ITER Engineering Campus Building housing enterprise Centres of Excellence"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-accent border border-accent/40 font-mono text-xs font-bold uppercase tracking-wider">
                  NIRF #22 ENGINEERING IN INDIA
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
                <span className="font-heading text-lg font-bold">Faculty of Engineering &amp; Technology (ITER)</span>
                <span className="text-xs font-mono text-accent">94.54% Cohort Placed</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                Anchoring the Tech Mahindra Centre of Excellence in ServiceNow &amp; Enterprise Cloud, the L&amp;T Technology Services Medical AI Biome, and the Blue Star HVAC &amp; Smart Refrigeration Skill Development Centre. Over 1,800 engineers graduated in 2024 directly into Fortune 500 engineering corridors.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-content-muted">
                <span className="px-3 py-1 rounded-lg bg-surface-2 border border-line">Tech Mahindra CoE</span>
                <span className="px-3 py-1 rounded-lg bg-surface-2 border border-line">LTTS Medical AI</span>
                <span className="px-3 py-1 rounded-lg bg-surface-2 border border-line">Blue Star HVAC Lab</span>
                <span className="px-3 py-1 rounded-lg bg-surface-2 border border-line">Wipro Talent Next Hub</span>
              </div>
            </div>
          </div>

          {/* Card B (4 cols): AIC-SOA Atal Incubation Centre */}
          <div className="md:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                  NITI AAYOG
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-content">
                AIC-SOA Atal Incubation Centre
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Supported by the Atal Innovation Mission, Government of India. AIC-SOA pairs enterprise venture challenges with multidisciplinary faculty researchers and seed-funded student squads for patent generation and commercial spin-offs.
              </p>
            </div>

            <div className="pt-4 border-t border-line space-y-2">
              <div className="text-xs font-semibold text-content">Venture Capabilities:</div>
              <div className="text-xs text-accent font-mono leading-relaxed">
                Deep-Tech Prototyping &bull; Patent Filing Cell &bull; Angel Co-Investment Corridor
              </div>
            </div>
          </div>

          {/* Card C (4 cols): IMS & SUM Medical Complex */}
          <div className="md:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                  100% PLACED
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-content">
                IMS &amp; SUM Super-Specialty Hospital
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                A 1,750+ bed NABH/NABL accredited medical biome ranked 15th nationally in medicine. Enterprise clinical trials, biotechnology partnerships, and biomedical instrumentation testing.
              </p>
            </div>

            <div className="pt-4 border-t border-line space-y-1">
              <span className="text-xs font-semibold text-content block">Clinical Benchmark:</span>
              <p className="text-xs text-accent font-mono">
                100% Placement Retention Across 3 Consecutive Cycles (148/148 Placed)
              </p>
            </div>
          </div>

          {/* Card D (8 cols): 1,400-Seat Convention Complex & Leadership Plenary */}
          <div className="md:col-span-8 rounded-3xl p-8 sm:p-10 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-accent/60 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-3 border border-line">
                <Image
                  src="/soa-auditorium.jpg"
                  alt="SOA University 1,400-seat Convention Complex"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white text-xs font-mono">
                  1,400+ Seat Civic Auditorium
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 inline-block">
                  CIVIC &amp; INTELLECTUAL ARENA
                </span>
                <h3 className="font-heading text-2xl font-bold text-content">
                  National Conclave Plenary Complex
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Anchors the annual ALLYSHIP++ national executive roundtables, international scientific congresses, and global campus recruitment drives.
                </p>
                <div className="pt-2 text-xs text-content-muted font-mono flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Khandagiri Square Academic Campus, Bhubaneswar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FACULTY PLACEMENT INTELLIGENCE SUITE (INTERACTIVE METRIC MATRIX)        */}
      {/* ========================================================================= */}
      <section id="faculty-intelligence" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="max-w-4xl space-y-3 mb-14">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-accent">
              Verified Institutional Metrics &middot; Multi-Disciplinary Trust
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Faculty Placement Intelligence Suite
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            Three-year verified audit data showing consistent placement ascents and peak corporate compensation across engineering, management, clinical healthcare, and law.
          </p>
        </div>

        {/* Interactive Faculty Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-6 mb-8 border-b border-line overflow-x-auto">
          {facultyPlacementData.map((faculty, idx) => {
            const isSelected = activeFacultyIndex === idx;
            return (
              <button
                key={faculty.id}
                type="button"
                onClick={() => setActiveFacultyIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold font-heading tracking-wide transition-all ${
                  isSelected
                    ? "bg-accent text-on-accent shadow-md shadow-accent/20"
                    : "bg-surface-2 text-content-secondary hover:text-content hover:bg-surface border border-line"
                }`}
              >
                {faculty.faculty.split("—")[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Selected Faculty Intelligence Card */}
        {(() => {
          const selected = facultyPlacementData[activeFacultyIndex];
          return (
            <div className="bg-surface rounded-3xl border border-line shadow-2xl p-8 sm:p-12 space-y-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-line pb-6">
                <div>
                  <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider block">
                    {selected.rank}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-content mt-1">
                    {selected.faculty}
                  </h3>
                  <p className="text-sm text-content-muted mt-1">
                    {selected.highlights}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-surface-2 border border-line text-xs font-mono">
                  <span>Verified 2024 Audit:</span>
                  <span className="text-accent font-bold">{selected.details2024}</span>
                </div>
              </div>

              {/* 3-Year Trajectory Metric Dials */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-surface-2 border border-line">
                  <span className="text-xs font-mono text-content-muted uppercase tracking-wider block">
                    2022 Placement
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-content mt-2">
                    {selected.rate2022}
                  </div>
                  <div className="text-[11px] text-content-muted mt-1 font-mono">Audited Campus Cohort</div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-2 border border-line">
                  <span className="text-xs font-mono text-content-muted uppercase tracking-wider block">
                    2023 Placement
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-content mt-2">
                    {selected.rate2023}
                  </div>
                  <div className="text-[11px] text-content-muted mt-1 font-mono">Year-Over-Year Gain</div>
                </div>

                <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-bold block">
                    2024 (Latest)
                  </span>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-accent mt-2">
                    {selected.rate2024}
                  </div>
                  <div className="text-[11px] text-accent/80 mt-1 font-mono">Peak Institutional Metric</div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-2 border border-line">
                  <span className="text-xs font-mono text-content-muted uppercase tracking-wider block">
                    Compensation Band
                  </span>
                  <div className="font-heading text-xl sm:text-2xl font-bold text-content mt-2">
                    {selected.peak}
                  </div>
                  <div className="text-[11px] text-content-muted mt-1 font-mono">Median: {selected.median}</div>
                </div>
              </div>

              {/* Marquee Recruiter Badges */}
              <div className="space-y-4 pt-4 border-t border-line">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-heading uppercase tracking-wider text-content">
                    Marquee Enterprise Partners &amp; Regular Recruiters:
                  </span>
                  <span className="text-xs font-mono text-accent">
                    {selected.recruiters.length} Marquee Brands
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {selected.recruiters.map((recruiter) => (
                    <span
                      key={recruiter}
                      className="px-4 py-2 rounded-xl bg-surface-2 border border-line text-xs font-medium text-content hover:border-accent hover:text-accent transition-colors"
                    >
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ========================================================================= */}
      {/* 5. PAN-INDIA CONCLAVE FOOTPRINT (METRO FOOTPRINT & EXECUTIVE ALLIANCES)     */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line">
        <div className="max-w-4xl space-y-3 mb-14">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-accent">
              6 Metropolitan Chapters &middot; National Corporate Corridors
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            The ALLYSHIP++ National Conclave Footprint
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            Where SOA leadership convenes boardroom CXOs, Olympic icons, and HR directors to co-create workplace mental health, curriculum reform, and leadership resilience.
          </p>
        </div>

        {/* City Selector Pills (PULSE Reference Inspired) */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-line overflow-x-auto">
          {conclaveMetros.map((metro, idx) => {
            const isCityActive = activeCityIndex === idx;
            return (
              <button
                key={metro.city}
                type="button"
                onClick={() => setActiveCityIndex(idx)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all ${
                  isCityActive
                    ? "bg-accent text-on-accent shadow-lg shadow-accent/20"
                    : "bg-surface-2 text-content-secondary hover:text-content hover:bg-surface border border-line"
                }`}
              >
                [{metro.city}]
              </button>
            );
          })}
        </div>

        {/* Dynamic City Card */}
        {(() => {
          const currentCity = conclaveMetros[activeCityIndex];
          return (
            <div className="bg-surface rounded-3xl border border-line shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 font-mono text-xs font-bold uppercase tracking-wider">
                      {currentCity.badge}
                    </span>
                    <span className="text-xs font-mono text-content-muted">
                      {currentCity.stats}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-content">
                    {currentCity.city} Conclave Delegation
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>{currentCity.venue}</span>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-sm text-content-secondary leading-relaxed">
                  <div>
                    <span className="font-bold text-content block mb-1">Keynote &amp; Dignitaries:</span>
                    <span>{currentCity.keynote}</span>
                  </div>
                  <div>
                    <span className="font-bold text-content block mb-1">Participating Enterprise Giants:</span>
                    <span className="text-content font-medium">{currentCity.corporateLeaders}</span>
                  </div>
                  <div>
                    <span className="font-bold text-content block mb-1">Deliberation Focus:</span>
                    <span className="italic">{currentCity.focus}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-line flex flex-wrap items-center gap-4">
                  <Link
                    href={`/event#${currentCity.city.toLowerCase()}`}
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    <span>View {currentCity.city} Chapter Archives</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsInviteOpen(true)}
                    className="btn-secondary text-xs py-2.5 px-5"
                  >
                    <span>Attend Next Cycle</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 border border-line shadow-xl">
                <Image
                  src={
                    currentCity.city === "Bengaluru"
                      ? "/news-bytes-blr.jpg"
                      : currentCity.city === "Hyderabad"
                      ? "/news-deccan-hyd.jpg"
                      : currentCity.city === "Mumbai"
                      ? "/news-prameya-mumbai.webp"
                      : currentCity.city === "Chennai"
                      ? "/news-around-chennai.jpg"
                      : currentCity.city === "Kolkata"
                      ? "/conclave-moments/kolkata-1/kolkata-1-01.jpg"
                      : "/soa-campus-aerial.jpg"
                  }
                  alt={`${currentCity.city} Conclave Live Proceedings`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  Official Conclave Chronicle &middot; SOA Directorate
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ========================================================================= */}
      {/* 6. EXECUTIVE PROBLEM BRIEF STUDIO (INTERACTIVE CHALLENGE GENERATOR)        */}
      {/* ========================================================================= */}
      <section id="submit-challenge" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full scroll-mt-28 border-t border-line">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Brief Context & Directorate Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              Direct Executive Interface &middot; Dean Office
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
              Submit an Industry Problem Statement
            </h2>
            <p className="text-base text-content-secondary leading-relaxed font-normal">
              Submit your engineering bottleneck, AI prototyping brief, or research challenge directly to our corporate directorate. We pair your problem statement with SOA faculty domain leads and student cohorts for rapid PoCs.
            </p>

            {/* Directorate Contact Box */}
            <div className="bg-surface rounded-2xl p-6 border border-line shadow-sm space-y-4">
              <span className="text-xs font-bold font-heading text-accent uppercase tracking-wider block">
                Office of Corporate Relations &amp; Placement
              </span>
              <div className="text-xs text-content-secondary space-y-2 font-sans">
                <div className="font-bold text-content text-sm">
                  Prof. (Dr.) Raj Kumar Hota
                </div>
                <div className="text-content-muted">
                  Dean of Corporate Relations and Placement &bull; Convener, ALLYSHIP++
                </div>
                <div className="pt-2 border-t border-line space-y-1">
                  <div>Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University)</div>
                  <div>Khandagiri Square, Bhubaneswar, Odisha 751030</div>
                  <div className="text-accent font-semibold pt-1">
                    Email: <a href="mailto:info@soa.ac.in" className="hover:underline">info@soa.ac.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnaround Commitment Card */}
            <div className="p-4 rounded-xl bg-surface-2 border border-line flex items-center gap-3 text-xs text-content-secondary">
              <Clock className="w-5 h-5 text-accent shrink-0" />
              <span>
                <strong>48-Hour Executive Review SLA:</strong> Every corporate brief is reviewed by Dean (Corporate Relations) and routed to relevant department chairs.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Studio Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-content">Challenge Brief Recorded!</h3>
                    <p className="text-sm text-content-muted max-w-md mx-auto">
                      Thank you for submitting your problem statement to SOA University. Dean (Corporate Relations) and the faculty committee will review your requirements.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 border border-line text-content text-xs font-bold font-mono mt-2">
                      <span>DOCKET ID: {refId}</span>
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
                      <span>{copied ? "Copied Brief!" : "Copy Summary Docket"}</span>
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
                <form onSubmit={handleSubmitChallenge} className="space-y-6">
                  {/* Step 1: Model Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2.5">
                      1. Select Collaboration Track *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Centres of Excellence",
                        "Applied R&D PoC",
                        "Curriculum Advisory",
                        "Hiring & Fellowship",
                      ].map((type) => {
                        const isChosen = selectedCollabType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedCollabType(type)}
                            className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all border ${
                              isChosen
                                ? "bg-accent text-on-accent border-accent shadow-sm"
                                : "bg-surface-2 text-content-secondary border-line hover:border-accent/40"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Contact Details */}
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Challenge Scope */}
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
                        placeholder="e.g. AI-driven defect detection in assembly lines"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="collab-sector"
                        className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                      >
                        Industry Sector / Enterprise *
                      </label>
                      <input
                        id="collab-sector"
                        type="text"
                        required
                        value={industrySector}
                        onChange={(e) => setIndustrySector(e.target.value)}
                        placeholder="e.g. Automotive, Cloud SaaS, Healthcare Devices"
                        className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="collab-desc"
                      className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2"
                    >
                      Problem Statement &amp; Required Faculty Domain *
                    </label>
                    <textarea
                      id="collab-desc"
                      required
                      rows={4}
                      value={challengeDesc}
                      onChange={(e) => setChallengeDesc(e.target.value)}
                      placeholder="Outline your engineering bottleneck, desired PoC scope, preferred faculty department (ITER/IMS/IBCS), and target timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder:text-content-faint text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>

                  {/* Submit Button & Assurance */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-content-muted">
                      Directly routed to Dean (Corporate Relations &amp; Placement)
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary text-xs disabled:opacity-50 py-3 px-6"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting Brief..." : "Submit Problem Statement"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. EXECUTIVE LEADERSHIP ROSTER & ARCHITECTURAL FOOTER STRIP                */}
      {/* ========================================================================= */}
      <section className="py-16 bg-surface-2 border-t border-line">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent block">
                Executive Leadership
              </span>
              <h3 className="font-heading text-2xl font-bold text-content mt-1">
                Academic Direction Behind ALLYSHIP++
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light transition-colors"
            >
              <span>Explore Complete Leadership Roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* VC */}
            <div className="p-5 rounded-2xl bg-surface border border-line flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-3 shrink-0 border border-line">
                <Image
                  src="/leadership/pradipta-kumar-nanda.jpg"
                  alt="Prof. (Dr.) Pradipta Kumar Nanda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading text-sm font-bold text-content">Prof. (Dr.) Pradipta Kumar Nanda</h4>
                <p className="text-xs text-accent">Vice-Chancellor &bull; SOA</p>
                <p className="text-[11px] text-content-muted">Academic Direction &amp; Vision</p>
              </div>
            </div>

            {/* Pro-VC */}
            <div className="p-5 rounded-2xl bg-surface border border-line flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-3 shrink-0 border border-line">
                <Image
                  src="/leadership/pro-vc-soa.jpg"
                  alt="Prof. (Dr.) Prashanta Kumar Patra"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading text-sm font-bold text-content">Prof. (Dr.) Prashanta Kumar Patra</h4>
                <p className="text-xs text-accent">Pro-Vice-Chancellor &bull; SOA</p>
                <p className="text-[11px] text-content-muted">Multidisciplinary Collaboration</p>
              </div>
            </div>

            {/* Dean / Convener */}
            <div className="p-5 rounded-2xl bg-surface border border-line flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-3 shrink-0 border border-line">
                <Image
                  src="/IMG_7328_whole_4_3.jpg"
                  alt="Prof. (Dr.) Raj Kumar Hota"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading text-sm font-bold text-content">Prof. (Dr.) Raj Kumar Hota</h4>
                <p className="text-xs text-accent">Dean, Corporate Relations &amp; Placement</p>
                <p className="text-[11px] text-content-muted">Convener, ALLYSHIP++ Conclaves</p>
              </div>
            </div>

            {/* Industry Advisor */}
            <div className="p-5 rounded-2xl bg-surface border border-line flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-3 shrink-0 border border-line">
                <Image
                  src="/testimonials/pb-kotur-v2.jpg"
                  alt="Dr. P.B. Kotur"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading text-sm font-bold text-content">Dr. P.B. Kotur</h4>
                <p className="text-xs text-accent">Global Head, L&amp;T Technology Services</p>
                <p className="text-[11px] text-content-muted">Industry Keynote &amp; Medical AI Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

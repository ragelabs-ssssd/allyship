"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, LayoutGrid, List } from "lucide-react";

const SNC_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (SNC Facade)",
    caption: "Official SUM Nursing College (SNC) Building with Red Rooftop Sign (soa.ac.in/snc)",
    src: "/snc-options/snc-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (SNC Campus)",
    caption: "SNC Campus Quadrangle & Athletic Courts (soa.ac.in/snc)",
    src: "/snc-options/snc-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (SNC Block)",
    caption: "SNC Nursing Sciences Academic Block (soa.ac.in/academics-at-soa)",
    src: "/snc-options/snc-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Clinical Ward)",
    caption: "SNC Clinical Simulation & Practical Training Facility (soa.ac.in)",
    src: "/snc-options/snc-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (SNAI Delegation)",
    caption: "State Biennial Student Nurses Association (SNAI) Delegation (soa.ac.in)",
    src: "/snc-options/snc-option-5.jpg",
  },
];

const SHM_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (SHM Entrance)",
    caption: "Official School of Hotel Management (SHM) Red Portal Entrance (soa.ac.in/shm)",
    src: "/shm-options/shm-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Culinary Suite)",
    caption: "School of Hotel Management (SHM) Chef Uniform Cohort (soa.ac.in/shm)",
    src: "/shm-options/shm-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (SHM Building)",
    caption: "SHM Hospitality Campus Wing (soa.ac.in/academics-at-soa)",
    src: "/shm-options/shm-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Patisserie Event)",
    caption: "SHM Annual Artisanal Hospitality Ceremony (soa.ac.in)",
    src: "/shm-options/shm-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Hospitality Seminar)",
    caption: "SHM National Hospitality & Tourism Symposium (soa.ac.in)",
    src: "/shm-options/shm-option-5.jpg",
  },
];

const SPS_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (Pharma Research Biome)",
    caption: "Official SOA Advanced Pharmaceutical Research & Academic Biome (DJI Drone Aerial)",
    src: "/sps-options/sps-new-drone.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Campus Architecture)",
    caption: "SPS Pharmaceutical Sciences Campus Complex & Quadrangle Lawn",
    src: "/sps-options/sps-new-campus2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (Faculty Complex)",
    caption: "Modern SOA Academic & Research Faculty High-Rise",
    src: "/sps-options/sps-candidate-univ.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Colonnade Quad)",
    caption: "SPS Modern Academic Wing & Courtyard Architecture",
    src: "/sps-options/sps-new-entrance.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Original SPS High-Rise)",
    caption: "School of Pharmaceutical Sciences (SPS) Multi-Story Building with Red Rooftop Crest",
    src: "/sps-options/sps-option-1.jpg",
  },
];

const IDS_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (IDS High-Rise)",
    caption: "Official Institute of Dental Sciences (IDS) High-Rise Hospital (soa.ac.in/ids)",
    src: "/ids-options/ids-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (IDS Campus)",
    caption: "IDS Dental Sciences Hospital Complex & Quadrangle (soa.ac.in)",
    src: "/ids-options/ids-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (Clinical Suite)",
    caption: "IDS Advanced Digital Prosthodontics & Operatory Suite (soa.ac.in/ids-gallery)",
    src: "/ids-options/ids-option-4.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Surgical Ward)",
    caption: "IDS Maxillofacial Surgical & Clinical Training Centre (soa.ac.in/ids-gallery)",
    src: "/ids-options/ids-option-5.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (IDS Facade)",
    caption: "IDS Academic & Hospital Wing (soa.ac.in/academics-at-soa)",
    src: "/ids-options/ids-option-3.jpg",
  },
];

const IMS_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (SUM High-Rise)",
    caption: "IMS & SUM Hospital Super-Specialty Medical High-Rise (soa.ac.in/healthcare-at-soa)",
    src: "/ims-options/ims-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Hospital Aerial)",
    caption: "IMS & SUM Hospital Quaternary Care Medical Complex (soa.ac.in)",
    src: "/ims-options/ims-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (Medical Block)",
    caption: "Institute of Medical Sciences Academic & Research Wing (soa.ac.in)",
    src: "/ims-options/ims-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Clinical Center)",
    caption: "IMS & SUM 2,000+ Bed Quaternary Hospital Center (soa.ac.in)",
    src: "/ims-options/ims-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Medical Citadel)",
    caption: "SUM Hospital Medical Campus & Emergency Wing (soa.ac.in)",
    src: "/ims-options/ims-option-5.jpg",
  },
];

const SNIL_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (SNIL Court Hall)",
    caption: "SNIL High Court Style Ceremonial Moot Court Hall (soa.ac.in/snil)",
    src: "/snil-options/snil-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (SNIL Building)",
    caption: "SOA National Institute of Law (SNIL) Academic High-Rise (soa.ac.in/snil)",
    src: "/snil-options/snil-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (SNIL Facade)",
    caption: "SNIL Law School Main Entrance & Faculty Wing (soa.ac.in)",
    src: "/snil-options/snil-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Apex Lecture)",
    caption: "Supreme Court & High Court Jurists Addressing SNIL Law Students (soa.ac.in)",
    src: "/snil-options/snil-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Law Quadrangle)",
    caption: "SNIL Law Campus Quadrangle & Research Library (soa.ac.in)",
    src: "/snil-options/snil-option-5.jpg",
  },
];

const IAS_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (IAS Building)",
    caption: "Institute of Agricultural Sciences (IAS) Main Academic Building (soa.ac.in/ias)",
    src: "/ias-options/ias-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Agronomy Drone)",
    caption: "IAS Agricultural Research Biome & Experimental Farms (soa.ac.in/ias)",
    src: "/ias-options/ias-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (IAS Block)",
    caption: "IAS Crop Sciences & Agronomy Laboratory Complex (soa.ac.in)",
    src: "/ias-options/ias-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (IAS Convocation)",
    caption: "IAS Agricultural Science Graduation Ceremony (soa.ac.in)",
    src: "/ias-options/ias-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Agritech Outreach)",
    caption: "IAS Farmers Scientific Agriculture & Outreach Program (soa.ac.in)",
    src: "/ias-options/ias-option-5.jpg",
  },
];

const IVS_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (IVS Campus Facade)",
    caption: "Official Institute of Veterinary Sciences & Animal Husbandry (IVS-AH) Modern Facade",
    src: "/ivs-options/ivs-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Clinical Complex Portal)",
    caption: "IVS-AH Veterinary Clinical Complex Entrance Portal (soa.ac.in/ivsah)",
    src: "/ivs-options/ivs-option-clinical.png",
  },
  {
    id: 3,
    label: "Photo 3 (Drone Campus Aerial)",
    caption: "IVS-AH Clinical Veterinary Complex & Campus Drone Aerial (soa.ac.in/ivsah)",
    src: "/ivs-options/ivs-option-2.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Pet Care & Surgery)",
    caption: "IVS-AH Clinical Veterinary Surgery & Pet Grooming Services (soa.ac.in)",
    src: "/ivs-options/ivs-option-petspa.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Veterinary Biome)",
    caption: "IVS-AH Veterinary Hospital & Regional Animal Healthcare Wing (soa.ac.in)",
    src: "/ivs-options/ivs-option-3.jpg",
  },
];

const CAMPUS2_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (Phulnakhara)",
    caption: "SUM Hospital Campus 2 Mega Quaternary Hospital High-Rise (Phulnakhara, Bhubaneswar)",
    src: "/campus2-options/campus2-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Sitalapalli)",
    caption: "SUM Hospital Multi-Tower Quaternary Expansion (Sitalapalli, Ganjam)",
    src: "/campus2-options/campus2-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (Kalinga Nagar)",
    caption: "SUM Hospital & Oncology Citadel (Kalinga Nagar, Bhubaneswar)",
    src: "/campus2-options/campus2-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Hospital Towers)",
    caption: "SUM Hospital Quaternary Oncology & Critical Care Towers (soa.ac.in)",
    src: "/campus2-options/campus2-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Medical Expansion)",
    caption: "IMS & SUM Hospital Quaternary Infrastructure & Wings (soa.ac.in)",
    src: "/campus2-options/campus2-option-5.jpg",
  },
];

const PHARMA2_PHOTO_OPTIONS = [
  {
    id: 1,
    label: "Photo 1 (Pharma Towers)",
    caption: "SPS Phase-II Advanced High-Throughput Drug Discovery Complex (soa.ac.in/sps)",
    src: "/pharma2-options/pharma2-option-1.jpg",
  },
  {
    id: 2,
    label: "Photo 2 (Drone Aerial)",
    caption: "SPS Phase-II Pharmaceutical & Sovereign AI Research Campus (soa.ac.in/sps)",
    src: "/pharma2-options/pharma2-option-2.jpg",
  },
  {
    id: 3,
    label: "Photo 3 (Molecular Labs)",
    caption: "SPS Phase-II High-Throughput Screening & Bio-Pharma Labs (soa.ac.in)",
    src: "/pharma2-options/pharma2-option-3.jpg",
  },
  {
    id: 4,
    label: "Photo 4 (Analytical Wing)",
    caption: "SPS Advanced Pharmacology & Molecular Discovery Facility (soa.ac.in)",
    src: "/pharma2-options/pharma2-option-4.jpg",
  },
  {
    id: 5,
    label: "Photo 5 (Pharma Conclave)",
    caption: "SPS Biopharmaceutical & Computational Biology Research Apex (soa.ac.in)",
    src: "/pharma2-options/pharma2-option-5.jpg",
  },
];

export interface InstitutionNode {
  id: string;
  year: string;
  yearNum: number;
  title: string;
  faculty: string;
  acronym: string;
  desc: string;
  category: string;
  image: string;
  imageAlt: string;
  badge: string;
  achievement: string;
  exitNumber: string;
  stationCode: string;
  laneColor: string;
  laneName: string;
}

export const INSTITUTION_NODES: InstitutionNode[] = [
  {
    id: "iter-1996",
    year: "1996–97",
    yearNum: 1996,
    title: "Engineering & Technology",
    faculty: "Institute of Technical Education and Research",
    acronym: "ITER",
    desc: "Founding flagship faculty that pioneered modern technical and computational education in Eastern India; today ranked NIRF #22 nationally.",
    category: "Engineering & Tech",
    image: "/soa-iter-building.jpg",
    imageAlt: "ITER Campus Building",
    badge: "NIRF #22 Engineering",
    achievement: "Founding Faculty & Sovereign Tech Seed",
    exitNumber: "EXIT 01 · MILE 0",
    stationCode: "STN-ITER",
    laneColor: "#F59E0B",
    laneName: "Tech & AI Trunk Line",
  },
  {
    id: "ibcs-1997",
    year: "1997–98",
    yearNum: 1997,
    title: "Management Sciences",
    faculty: "Institute of Business and Computer Studies",
    acronym: "IBCS",
    desc: "Established premier corporate management, finance, and business analytics education in Odisha, bridging regional talent with national boardrooms.",
    category: "Management",
    image: "/ibcs-options/ibcs-option-1.jpg",
    imageAlt: "IBCS Campus Building",
    badge: "Premier B-School",
    achievement: "Corporate & Analytics Leadership",
    exitNumber: "EXIT 02 · MILE 2",
    stationCode: "STN-IBCS",
    laneColor: "#EC4899",
    laneName: "Commerce & Policy Line",
  },
  {
    id: "snc-2004",
    year: "2004–05",
    yearNum: 2004,
    title: "Nursing Sciences",
    faculty: "School of Nursing / SUM Nursing College",
    acronym: "SNC",
    desc: "Pioneered professional bedside clinical nursing, critical care patient management, and advanced healthcare pedagogy in Eastern India with extensive hospital residency training.",
    category: "Nursing Sciences",
    image: "/snc-options/snc-option-1.jpg",
    imageAlt: "SUM Nursing College Building",
    badge: "INC Accredited",
    achievement: "Bedside Clinical & Intensive Nursing Citadel",
    exitNumber: "EXIT 03 · MILE 6",
    stationCode: "STN-SNC",
    laneColor: "#10B981",
    laneName: "Healthcare & Life Sciences Line",
  },
  {
    id: "shm-2004",
    year: "2004–05",
    yearNum: 2004,
    title: "Hospitality Management",
    faculty: "School of Hotel Management",
    acronym: "SHM",
    desc: "Premier institution for five-star hotel operations, international culinary arts, luxury hospitality, and tourism leadership with state-of-the-art training suites.",
    category: "Hospitality & Tourism",
    image: "/shm-options/shm-option-1.jpg",
    imageAlt: "School of Hotel Management Entrance",
    badge: "NCHMCT Aligned",
    achievement: "Five-Star Culinary & Hospitality Center",
    exitNumber: "EXIT 04 · MILE 7",
    stationCode: "STN-SHM",
    laneColor: "#F59E0B",
    laneName: "Commerce & Policy Line",
  },
  {
    id: "sps-2004",
    year: "2004–05",
    yearNum: 2004,
    title: "Pharmaceutical Sciences",
    faculty: "School of Pharmaceutical Sciences",
    acronym: "SPS",
    desc: "Consistently ranked among India's elite pharmacy faculties (NIRF #13 in Pharmacy); advances drug design, novel formulation technologies, and pharmacological synthesis.",
    category: "Pharmaceutical Sciences",
    image: "/sps-options/sps-option-1.jpg",
    imageAlt: "School of Pharmaceutical Sciences Building",
    badge: "NIRF #13 Pharmacy",
    achievement: "Drug Discovery & Novel Formulation Hub",
    exitNumber: "EXIT 05 · MILE 8",
    stationCode: "STN-SPS",
    laneColor: "#06B6D4",
    laneName: "Healthcare & Life Sciences Line",
  },
  {
    id: "ids-2006",
    year: "2006–07",
    yearNum: 2006,
    title: "Dental Sciences",
    faculty: "Institute of Dental Sciences",
    acronym: "IDS",
    desc: "Ranked #9 in India by NIRF 2025; premier multi-chair maxillofacial surgical hospital, digital prosthodontics suites, and regional oral oncology centre.",
    category: "Dental Surgery",
    image: "/ids-options/ids-option-1.jpg",
    imageAlt: "Official Institute of Dental Sciences High-Rise Hospital",
    badge: "NIRF #9 in India",
    achievement: "Oral & Maxillofacial Super-Center",
    exitNumber: "EXIT 04 · MILE 10",
    stationCode: "STN-IDS",
    laneColor: "#06B6D4",
    laneName: "Healthcare & Life Sciences Line",
  },
  {
    id: "ims-2007",
    year: "2007–08",
    yearNum: 2007,
    title: "Medical Sciences & Quaternary Hospital",
    faculty: "Institute of Medical Sciences & SUM Hospital",
    acronym: "IMS & SUM Hospital",
    desc: "Super-specialty medical college and quaternary healthcare hospital ranked #15 nationally with 2,000+ clinical beds serving Eastern India.",
    category: "Quaternary Medicine",
    image: "/ims-options/ims-option-1.jpg",
    imageAlt: "IMS & SUM Hospital Super-Specialty Medical High-Rise",
    badge: "NIRF #15 Medical · 2000+ Beds",
    achievement: "NABH & NABL Quaternary Anchor",
    exitNumber: "EXIT 05 · MILE 12",
    stationCode: "STN-IMS",
    laneColor: "#EF4444",
    laneName: "Healthcare & Life Sciences Line",
  },
  {
    id: "snil-2011",
    year: "2011–12",
    yearNum: 2011,
    title: "Legal Studies",
    faculty: "SOA National Institute of Law",
    acronym: "SNIL",
    desc: "Consistently ranked among India's Top 10 Law Schools (#10 in NIRF 2025) featuring ceremonial moot court halls and high court judicial clerkships.",
    category: "Jurisprudence",
    image: "/snil-options/snil-option-2.jpg",
    imageAlt: "SNIL Law School High-Rise",
    badge: "NIRF #10 Law School",
    achievement: "Apex Court & Constitutional Law Moot",
    exitNumber: "EXIT 06 · MILE 16",
    stationCode: "STN-SNIL",
    laneColor: "#8B5CF6",
    laneName: "Commerce & Policy Line",
  },
  {
    id: "ias-2013",
    year: "2013–14",
    yearNum: 2013,
    title: "Agricultural Sciences",
    faculty: "Institute of Agricultural Sciences",
    acronym: "IAS",
    desc: "ICAR-accredited agricultural research faculty with agronomy farms, precision soil testing labs, and climate-resilient crop breeding facilities.",
    category: "Agronomy",
    image: "/ias-options/ias-option-1.jpg",
    imageAlt: "IAS Agricultural Sciences Main Building",
    badge: "ICAR Accredited",
    achievement: "Agronomy & Climate Resilience Hub",
    exitNumber: "EXIT 07 · MILE 18",
    stationCode: "STN-IAS",
    laneColor: "#84CC16",
    laneName: "Agro-Bio & Veterinary Line",
  },
  {
    id: "ivs-2022",
    year: "2022–23",
    yearNum: 2022,
    title: "Veterinary Sciences",
    faculty: "Institute of Veterinary Sciences & Animal Husbandry",
    acronym: "IVS-AH",
    desc: "State-of-the-art clinical veterinary hospital, surgical suites, and animal research biome serving eastern regional livestock genomics.",
    category: "Veterinary Care",
    image: "/ivs-options/ivs-option-1.jpg",
    imageAlt: "Institute of Veterinary Sciences & Animal Husbandry Modern Facade",
    badge: "Clinical Animal Hospital",
    achievement: "Livestock Genomics & Regional Surgery",
    exitNumber: "EXIT 08 · MILE 26",
    stationCode: "STN-IVS",
    laneColor: "#14B8A6",
    laneName: "Agro-Bio & Veterinary Line",
  },
  {
    id: "campus2-2024",
    year: "2024–25",
    yearNum: 2024,
    title: "Medical Sciences - II · Nursing - II",
    faculty: "SUM Hospital Campus 2 & College of Nursing 2",
    acronym: "SUM Campus 2",
    desc: "Mega quaternary healthcare expansion adding specialized oncology towers, organ transplant suites, and advanced critical care wings.",
    category: "Mega Quaternary Hospital",
    image: "/campus2-options/campus2-option-2.jpg",
    imageAlt: "SUM Hospital Multi-Tower Quaternary Expansion",
    badge: "Campus-2 Expansion",
    achievement: "Oncology & Organ Transplant Citadel",
    exitNumber: "EXIT 09 · MILE 28",
    stationCode: "STN-SUM2",
    laneColor: "#EF4444",
    laneName: "Healthcare & Life Sciences Line",
  },
  {
    id: "pharma2-2025",
    year: "2025–26",
    yearNum: 2025,
    title: "Pharmaceutical Sciences - II",
    faculty: "School of Pharmaceutical Sciences (Phase II)",
    acronym: "SPS Phase-II",
    desc: "Cutting-edge biopharmaceutical research centre equipped with high-throughput drug screening, computational molecular biology, and sovereign AI labs.",
    category: "Bio-Pharma & AI",
    image: "/pharma2-options/pharma2-option-1.jpg",
    imageAlt: "SPS Phase-II Advanced High-Throughput Drug Discovery Complex",
    badge: "Sovereign AI Discovery",
    achievement: "High-Throughput Molecular R&D Apex",
    exitNumber: "EXIT 10 · MILE 30",
    stationCode: "STN-SPS2",
    laneColor: "#F59E0B",
    laneName: "Tech & AI Trunk Line",
  },
];

export function TimelineShowcase() {
  const [viewMode, setViewMode] = useState<"grid" | "expressway">("grid");

  return (
    <div id="timeline" className="space-y-12 scroll-mt-28">
      {/* 4 Key Metric Pillars (4-in-1) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto text-center">
        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-accent">
            30+
          </span>
          <span className="font-heading text-xs sm:text-sm font-bold text-content mt-2 uppercase tracking-wider">
            Years of Excellence
          </span>
          <span className="text-[11px] text-content-muted mt-1 font-sans">
            1996 ITER to 2026 Sovereign AI
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-accent">
            13
          </span>
          <span className="font-heading text-xs sm:text-sm font-bold text-content mt-2 uppercase tracking-wider">
            Constituent Institutes
          </span>
          <span className="text-[11px] text-content-muted mt-1 font-sans">
            Engineering, Medicine, Law &amp; Sciences
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-accent">
            18
          </span>
          <span className="font-heading text-xs sm:text-sm font-bold text-content mt-2 uppercase tracking-wider">
            Research Centres
          </span>
          <span className="text-[11px] text-content-muted mt-1 font-sans">
            Nanotech, Renewable Energy &amp; AI
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-accent">
            127
          </span>
          <span className="font-heading text-xs sm:text-sm font-bold text-content mt-2 uppercase tracking-wider">
            Acres of Campuses
          </span>
          <span className="text-[11px] text-content-muted mt-1 font-sans">
            Smart Multi-Biome Infrastructure
          </span>
        </div>
      </div>

      {/* Gantry Expressway Roadmap Header Bar with View Toggle */}
      <div className="p-6 rounded-3xl bg-surface-2 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
            Three Decades of Institutional Evolution
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-content mt-0.5">
            The 30-Mile Academic Expressway (Mile 0 → Mile 30)
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
          {/* View Mode Switcher */}
          <div className="inline-flex rounded-xl bg-surface-3 p-1 border border-line shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-accent text-on-accent shadow-sm"
                  : "text-content-muted hover:text-content"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>4-in-1 Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("expressway")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                viewMode === "expressway"
                  ? "bg-accent text-on-accent shadow-sm"
                  : "text-content-muted hover:text-content"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Expressway Timeline</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-content-muted">
            <span className="px-2.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold text-[10px]">
              1996 ITER
            </span>
            <ArrowRight className="w-3 h-3 text-accent shrink-0" />
            <span className="px-2.5 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold text-[10px]">
              2026 AI
            </span>
          </div>
        </div>
      </div>

      {/* 4-in-1 Matrix View */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTION_NODES.map((node, idx) => {
            return (
              <div
                key={node.id}
                className="rounded-3xl bg-surface-2 border border-line hover:border-accent overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Billboard */}
                  <div className="relative aspect-[16/10] bg-surface-3 overflow-hidden">
                    <Image
                      src={node.image}
                      alt={node.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                      <span className="font-mono text-[10px] font-bold text-accent px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-accent/40 shadow-sm">
                        {node.year}
                      </span>
                      <span className="text-[10px] font-mono text-[#F4E8C1] font-bold px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-md border border-white/10">
                        {node.acronym}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase text-content-muted font-bold tracking-wider truncate">
                        {node.badge}
                      </span>
                      <span className="text-[10px] font-mono text-accent font-bold shrink-0">
                        Exit 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-content group-hover:text-accent transition-colors leading-snug">
                        {node.title}
                      </h4>
                      <p className="text-xs font-sans text-accent font-semibold mt-0.5 line-clamp-1" title={node.faculty}>
                        {node.faculty}
                      </p>
                    </div>

                    <p className="text-xs text-content-secondary leading-relaxed font-sans line-clamp-3">
                      {node.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 pt-3 border-t border-line/60 bg-surface-1/40 flex flex-col gap-1 text-[11px] font-mono">
                  <span className="text-content-muted text-[10px] truncate">{node.laneName}</span>
                  <span className="text-accent font-semibold text-[10px] truncate">{node.achievement}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Expressway Roadway with Cantilever Gantry Billboards */
        <div className="space-y-8 relative pl-6 sm:pl-12 border-l-4 border-dashed border-accent/40">
        {INSTITUTION_NODES.map((node, idx) => {
          return (
            <div key={node.id} className="relative group">
              {/* Highway Milepost Marker Pin */}
              <div className="absolute -left-[42px] sm:-left-[68px] top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-canvas border-2 border-accent text-accent font-mono text-xs font-black flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-on-accent transition-colors">
                {idx + 1}
              </div>

              {/* Gantry Billboard Card */}
              <div className="rounded-3xl bg-surface-2 border border-line hover:border-accent overflow-hidden transition-all duration-300 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Photo Billboard */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-surface-3 overflow-hidden">
                  <Image
                    src={node.image}
                    alt={node.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-sm font-mono text-[#F4E8C1] font-bold block">
                      {node.acronym}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-wider">
                      {node.badge}
                    </span>
                  </div>
                </div>

                {/* Highway Dossier Information */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/15 border border-accent/40">
                        {node.year}
                      </span>
                      <span className="text-xs font-mono uppercase text-content-muted font-bold">
                        {node.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold text-content group-hover:text-accent transition-colors leading-snug">
                        {node.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-sans text-accent font-semibold mt-1">
                        {node.faculty}
                      </p>
                    </div>

                    <p className="text-sm text-content-secondary leading-relaxed font-sans pt-1">
                      {node.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-content-muted">
                    <span>Expressway Corridor: {node.laneName}</span>
                    <span className="text-accent font-bold">{node.achievement}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
}

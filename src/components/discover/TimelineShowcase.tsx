"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    image: "/soa-auditorium.jpg",
    imageAlt: "IBCS Management Convention Center",
    badge: "Premier B-School",
    achievement: "Corporate & Analytics Leadership",
    exitNumber: "EXIT 02 · MILE 2",
    stationCode: "STN-IBCS",
    laneColor: "#EC4899",
    laneName: "Commerce & Policy Line",
  },
  {
    id: "triple-2004",
    year: "2004–05",
    yearNum: 2004,
    title: "Nursing · Hotel Mgmt · Pharmacy",
    faculty: "School of Nursing (SNC) · Hotel Mgmt (SHM) · Pharmacy (SPS)",
    acronym: "SNC · SHM · SPS",
    desc: "Simultaneous triple expansion into professional bedside clinical healthcare, five-star hospitality operations, and pharmaceutical formulation chemistry.",
    category: "Clinical & Hospitality",
    image: "/slides/IMG_7849.jpg",
    imageAlt: "Multidisciplinary Campus Complex",
    badge: "Triple Sector Expansion",
    achievement: "Clinical & Hospitality Tri-Center",
    exitNumber: "EXIT 03 · MILE 8",
    stationCode: "STN-TRI",
    laneColor: "#10B981",
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
    image: "/slides/IMG_7873.jpg",
    imageAlt: "Institute of Dental Sciences Hospital",
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
    image: "/soa-campus-grounds.jpg",
    imageAlt: "IMS & SUM Hospital Quaternary Grounds",
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
    image: "/slides/CON01670.jpg",
    imageAlt: "SNIL Law School Courtrooms",
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
    image: "/soa-campus-aerial.jpg",
    imageAlt: "IAS Agricultural Research Biome",
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
    image: "/slides/IMG_7577.jpg",
    imageAlt: "IVS-AH Veterinary Surgery Hospital",
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
    image: "/slides/CON01638.jpg",
    imageAlt: "SUM Hospital Campus 2 High-Rise",
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
    image: "/discover/evolution-growth.jpg",
    imageAlt: "SPS Phase II Molecular Labs",
    badge: "Sovereign AI Discovery",
    achievement: "High-Throughput Molecular R&D Apex",
    exitNumber: "EXIT 10 · MILE 30",
    stationCode: "STN-SPS2",
    laneColor: "#F59E0B",
    laneName: "Tech & AI Trunk Line",
  },
];

export function TimelineShowcase() {
  return (
    <div id="timeline" className="space-y-12 scroll-mt-28">
      {/* 2 Key Metric Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-center">
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-5xl sm:text-6xl font-extrabold text-accent">
            13
          </span>
          <span className="font-heading text-sm font-bold text-content mt-2 uppercase tracking-wider">
            Constituent Institutes
          </span>
          <span className="text-xs text-content-muted mt-1 font-mono">
            Engineering, Medicine, Dental, Law, Management, Nursing, Pharmacy &amp; Agriculture
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex flex-col items-center justify-center">
          <span className="font-display text-5xl sm:text-6xl font-extrabold text-content">
            18
          </span>
          <span className="font-heading text-sm font-bold text-content mt-2 uppercase tracking-wider">
            State-of-the-Art Research Centres
          </span>
          <span className="text-xs text-content-muted mt-1 font-mono">
            Nanotechnology, Renewable Energy, Climate Studies, Biomechanics &amp; AI
          </span>
        </div>
      </div>

      {/* Gantry Expressway Roadmap Header Bar */}
      <div className="p-6 rounded-3xl bg-surface-2 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
            Three Decades of Institutional Evolution
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-content mt-0.5">
            The 30-Mile Academic Expressway (Mile 0 → Mile 30)
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-content-muted self-start sm:self-auto">
          <span className="px-3 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold">
            ORIGIN: 1996 ITER
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="px-3 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent font-bold">
            HORIZON: 2026 SOVEREIGN AI
          </span>
        </div>
      </div>

      {/* Expressway Roadway with Cantilever Gantry Billboards */}
      <div className="space-y-8 relative pl-6 sm:pl-12 border-l-4 border-dashed border-accent/40">
        {INSTITUTION_NODES.map((node, idx) => (
          <div key={node.id} className="relative group">
            {/* Highway Milepost Marker Pin */}
            <div className="absolute -left-[37px] sm:-left-[61px] top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-dark border-2 border-accent text-accent font-mono text-xs font-black flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-surface-dark transition-colors">
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
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/20 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-sm font-mono text-[#F4E8C1] font-bold block">
                    {node.acronym}
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
                    <p className="text-xs sm:text-sm font-mono text-accent font-semibold mt-1">
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
        ))}
      </div>
    </div>
  );
}

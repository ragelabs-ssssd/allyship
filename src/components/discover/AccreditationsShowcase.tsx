"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  Star,
} from "lucide-react";

export interface RecognitionItem {
  id: string;
  title: string;
  authority: string;
  category: "statutory" | "academic" | "healthcare" | "global";
  categoryLabel: string;
  tag: string;
  badgeType: "gold" | "accent" | "surface";
  body: string;
  stat?: string;
  statLabel?: string;
  slideUrl: string;
}

export const ALL_RECOGNITIONS: RecognitionItem[] = [
  // Apex Statutory & Autonomy
  {
    id: "ugc-cat1",
    title: "Category-I Graded Autonomy Status",
    authority: "UGC (University Grants Commission) · Ministry of Education",
    category: "statutory",
    categoryLabel: "Apex Statutory Autonomy",
    tag: "UGC Category-I",
    badgeType: "gold",
    body: "Highest possible level of academic, administrative, and operational freedom granted by the Govt. of India to top-tier universities.",
    stat: "Apex",
    statLabel: "Sovereign Autonomy",
    slideUrl: "/discover/major-recognitions.jpg",
  },
  {
    id: "naac-app",
    title: "NAAC Accredited with Grade 'A++'",
    authority: "National Assessment and Accreditation Council",
    category: "academic",
    categoryLabel: "National Academic Gold Standard",
    tag: "NAAC A++ (CGPA 3.88)",
    badgeType: "gold",
    body: "Awarded Grade A++ in the 3rd Cycle with an outstanding CGPA of 3.88 out of 4.0—placing SOA in the top tier of Indian higher education.",
    stat: "3.88",
    statLabel: "CGPA (3rd Cycle)",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "nba-tier1",
    title: "NBA Tier-1 Accredited Programmes",
    authority: "National Board of Accreditation",
    category: "academic",
    categoryLabel: "Engineering & Professional",
    tag: "NBA Tier-1",
    badgeType: "accent",
    body: "Rigorous Washington Accord-aligned accreditation across engineering, management, pharmacy, and hospitality faculties.",
    stat: "Tier-1",
    statLabel: "Global Equivalency",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "ugc-12b",
    title: "UGC 12(B) Status",
    authority: "University Grants Commission",
    category: "statutory",
    categoryLabel: "Apex Statutory Autonomy",
    tag: "UGC 12(B)",
    badgeType: "accent",
    body: "Declared fit to receive direct central developmental assistance and research funding under Section 12(B) of the UGC Act, 1956.",
    stat: "Sec 12(B)",
    statLabel: "Central Funding Fit",
    slideUrl: "/discover/major-recognitions.jpg",
  },
  {
    id: "nabh-hospital",
    title: "NABH Accredited Teaching Hospital",
    authority: "National Accreditation Board for Hospitals & Healthcare Providers",
    category: "healthcare",
    categoryLabel: "Clinical & Healthcare",
    tag: "NABH Hospital",
    badgeType: "accent",
    body: "IMS & SUM Hospital validated for highest national patient safety standards, clinical protocols, and healthcare quality.",
    stat: "2,000+",
    statLabel: "Clinical Beds",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "nabl-labs",
    title: "NABL Accredited Medical Laboratories",
    authority: "National Accreditation Board for Testing & Calibration Labs",
    category: "healthcare",
    categoryLabel: "Clinical & Healthcare",
    tag: "NABL Certified",
    badgeType: "accent",
    body: "Gold-standard ISO 15189 diagnostic testing and clinical reference laboratories upholding world-class precision.",
    stat: "ISO 15189",
    statLabel: "Diagnostic Standard",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "dsir-siro",
    title: "DSIR (SIRO) Recognized Organization",
    authority: "Department of Scientific & Industrial Research · Govt. of India",
    category: "statutory",
    categoryLabel: "Apex Statutory Autonomy",
    tag: "DSIR / SIRO",
    badgeType: "surface",
    body: "Recognized as a dedicated Scientific and Industrial Research Organization pioneering indigenous deep-tech and clinical innovation.",
    stat: "SIRO",
    statLabel: "Govt of India R&D",
    slideUrl: "/discover/major-recognitions.jpg",
  },
  {
    id: "icar-agri",
    title: "Accredited by ICAR",
    authority: "Indian Council of Agricultural Research",
    category: "academic",
    categoryLabel: "Engineering & Professional",
    tag: "ICAR Approved",
    badgeType: "surface",
    body: "Pioneering agricultural education and agro-climatic research programs fostering crop resilience and rural livelihoods.",
    stat: "ICAR",
    statLabel: "National Standard",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "cochrane-uk",
    title: "COCHRANE (UK) Affiliated Centre",
    authority: "Cochrane Global Health Network",
    category: "healthcare",
    categoryLabel: "Clinical & Healthcare",
    tag: "Cochrane UK",
    badgeType: "accent",
    body: "International network producing systematic evidence reviews, randomized control trial syntheses, and global health guidelines.",
    stat: "Global",
    statLabel: "Evidence Network",
    slideUrl: "/discover/major-recognitions.jpg",
  },
  {
    id: "qs-elead",
    title: "QS I-GAUGE E-LEAD Certified",
    authority: "QS Quacquarelli Symonds I-GAUGE",
    category: "global",
    categoryLabel: "Global & Digital Standards",
    tag: "E-LEAD Certified",
    badgeType: "surface",
    body: "E-Learning Excellence for Academic Digitization certified for world-class hybrid cloud learning environments.",
    stat: "E-LEAD",
    statLabel: "Digital Excellence",
    slideUrl: "/discover/major-recognitions.jpg",
  },
  {
    id: "iao-global",
    title: "International Accreditation Organisation",
    authority: "IAO International Quality Assurance",
    category: "global",
    categoryLabel: "Global & Digital Standards",
    tag: "IAO Certified",
    badgeType: "surface",
    body: "Global verification ensuring curriculum delivery meets international quality, pedagogy, and faculty excellence benchmarks.",
    stat: "IAO",
    statLabel: "Global QA",
    slideUrl: "/discover/accreditations.jpg",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Certified",
    authority: "United Registrar of Systems (URS) · UKAS Accredited",
    category: "global",
    categoryLabel: "Global & Digital Standards",
    tag: "ISO 9001:2015",
    badgeType: "surface",
    body: "Certified Quality Management System across multi-disciplinary higher education, hospital management, and campus operations.",
    stat: "9001:2015",
    statLabel: "Quality Management",
    slideUrl: "/discover/major-recognitions.jpg",
  },
];

interface AccreditationsShowcaseProps {
  onOpenSlide?: (url: string) => void;
}

export function AccreditationsShowcase({ onOpenSlide }: AccreditationsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all"
      ? ALL_RECOGNITIONS
      : ALL_RECOGNITIONS.filter((item) => item.category === activeFilter);

  return (
    <div id="accreditations" className="space-y-8 scroll-mt-28">
      {/* Top Row: Two Sovereign Crown Seals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Crown Seal 1: UGC Category-I Graded Autonomy */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border-2 border-accent shadow-2xl relative overflow-hidden group flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all duration-700" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/40 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-accent" />
                <span>APEX STATUTORY AUTONOMY</span>
              </span>
              <span className="text-xs font-mono text-content-muted font-bold">GOVT. OF INDIA</span>
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content uppercase tracking-tight leading-tight">
                Category-I Graded Autonomy Status
              </h3>
              <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider block mt-1">
                University Grants Commission (UGC) · Ministry of Education
              </span>
            </div>

            <p className="text-sm text-content-secondary leading-relaxed font-sans">
              The highest level of operational, curriculum, and academic freedom conferred by the Government of India upon premier universities maintaining continuous excellence.
            </p>
          </div>

          <div className="pt-4 border-t border-line/80 relative z-10 flex items-center justify-between text-xs font-mono">
            <span className="text-content-muted">Section 12(B) Central Assistance Fit</span>
            <span className="text-accent font-semibold">UGC Act 1956 Validated</span>
          </div>
        </div>

        {/* Crown Seal 2: NAAC A++ (CGPA 3.88) */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border-2 border-accent shadow-2xl relative overflow-hidden group flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all duration-700" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NATIONAL ACCREDITATION COUNCIL</span>
              </span>
              <span className="text-xs font-mono text-accent font-bold px-2.5 py-1 rounded-lg bg-surface-3 border border-line">
                GRADE A++ · CGPA 3.88
              </span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="font-heading text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F4E8C1] to-accent-light leading-none">
                A++
              </span>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-content leading-tight">
                  NAAC Accredited (3rd Cycle)
                </h3>
                <span className="text-xs font-mono text-content-muted block mt-0.5">
                  National Assessment &amp; Accreditation Council
                </span>
              </div>
            </div>

            <p className="text-sm text-content-secondary leading-relaxed font-sans">
              Validated with an extraordinary CGPA of 3.88 on a 4.0 scale—the highest accreditation bracket reflecting gold-standard pedagogy, research, and infrastructure.
            </p>
          </div>

          <div className="pt-4 border-t border-line/80 relative z-10 flex items-center justify-between text-xs font-mono">
            <span className="text-content-muted">Top Tier in Indian Higher Education</span>
            <span className="text-accent font-semibold">CGPA 3.88 Validated</span>
          </div>
        </div>
      </div>

      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: "all", label: "All 12 Certifications" },
            { key: "statutory", label: "Statutory & Autonomy" },
            { key: "academic", label: "Academic Accreditations" },
            { key: "healthcare", label: "Hospital & Clinical" },
            { key: "global", label: "Global Standards" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === f.key
                  ? "bg-accent text-surface-dark font-bold shadow-sm"
                  : "bg-surface-2 hover:bg-surface-3 text-content-secondary border border-line"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-content-muted">
          SHOWING {filteredItems.length} OF 12 RECOGNITIONS
        </div>
      </div>

      {/* Remaining Certifications in Dynamic Responsive Mosaic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-6 bg-surface-2 border border-line hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                    item.badgeType === "gold"
                      ? "bg-accent/15 border-accent/40 text-accent"
                      : "bg-surface-3 border-line text-content-secondary"
                  }`}
                >
                  {item.tag}
                </span>
                <CheckCircle2 className="w-4 h-4 text-accent/80" />
              </div>

              <div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-content group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-accent/90 font-medium mt-0.5 font-mono">
                  {item.authority}
                </p>
              </div>

              <p className="text-xs text-content-muted leading-relaxed font-sans">
                {item.body}
              </p>
            </div>

            <div className="pt-3 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-content-muted">
              <span className="uppercase text-[9px] tracking-wider text-accent/90">
                {item.categoryLabel}
              </span>
              {item.stat && (
                <span className="font-bold text-content">{item.stat}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

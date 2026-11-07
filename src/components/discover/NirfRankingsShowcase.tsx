"use client";

import React from "react";
import {
  Trophy,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  Stethoscope,
  Scale,
  Briefcase,
  Smile,
  GraduationCap,
} from "lucide-react";

interface NirfItem {
  id: string;
  rank: string;
  category: string;
  faculty: string;
  subtext: string;
  highlight: string;
  tag?: string;
  icon?: any;
}

const nirfData: NirfItem[] = [
  {
    id: "university",
    rank: "15th",
    category: "University Category",
    faculty: "Siksha 'O' Anusandhan",
    subtext: "Ranked #1 University in Odisha",
    highlight: "Top 15 Nationally",
    icon: GraduationCap,
  },
  {
    id: "overall",
    rank: "25th",
    category: "Overall Category",
    faculty: "Composite Across All Institutions",
    subtext: "Across All Indian Higher Education",
    highlight: "Consistently in Top 25",
    icon: Trophy,
  },
  {
    id: "dental",
    rank: "9th",
    category: "Dental Category",
    faculty: "Institute of Dental Sciences (IDS)",
    subtext: "Premier multi-chair clinical hospital",
    highlight: "Top 10 in India",
    icon: Smile,
  },
  {
    id: "law",
    rank: "10th",
    category: "Law Category",
    faculty: "SOA National Institute of Law (SNIL)",
    subtext: "High Court & Supreme Court clerkships",
    highlight: "Top 10 Nationally",
    icon: Scale,
  },
  {
    id: "medical",
    rank: "15th",
    category: "Medical Category",
    faculty: "IMS & SUM Hospital",
    subtext: "2,000+ bed super-specialty hospital",
    highlight: "Climbed 6 Ranks",
    icon: Stethoscope,
  },
  {
    id: "engineering",
    rank: "22nd",
    category: "Engineering Category",
    faculty: "ITER Faculty of Engineering",
    subtext: "Ahead of Top IITs & NITs",
    highlight: "Ahead of Top IITs/NITs",
    icon: Cpu,
  },
  {
    id: "management",
    rank: "66th",
    category: "Management Category",
    faculty: "IBCS Faculty of Management",
    subtext: "Ranked #1 Business School in Odisha",
    highlight: "#1 in Odisha (Business)",
    icon: Briefcase,
  },
];

interface NirfRankingsShowcaseProps {
  onOpenSlide?: () => void;
}

export function NirfRankingsShowcase({ onOpenSlide }: NirfRankingsShowcaseProps) {
  return (
    <div className="space-y-8">
      {/* Asymmetric Flagship Monolith Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Towering Flagship Crown Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border-2 border-accent shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/40">
                NATIONAL FLAGSHIP
              </span>
              <span className="text-xs font-mono text-content-muted font-bold">NIRF 2025</span>
            </div>

            <div>
              <span className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black text-accent block leading-none tracking-tight">
                15th
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-content mt-2">
                University Category
              </h3>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider block mt-1">
                Ranked #1 University in Odisha
              </span>
            </div>

            <p className="text-sm text-content-secondary leading-relaxed font-sans">
              Consistently ranked in India&apos;s Top 15 Universities across teaching resources, peer research impact, and graduate career outcomes.
            </p>

            <div className="p-5 rounded-2xl bg-surface-3/80 border border-line space-y-2 text-xs font-mono">
              <div className="flex flex-wrap gap-2 justify-between py-1 border-b border-line/60">
                <span className="text-content-muted">Overall National Composite:</span>
                <span className="text-content font-bold">25th in India</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-between py-1 border-b border-line/60">
                <span className="text-content-muted">Top 10 Disciplines:</span>
                <span className="text-accent font-bold">Dental (#9) &amp; Law (#10)</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-between py-1">
                <span className="text-content-muted">Engineering Standing:</span>
                <span className="text-content font-bold">22nd Nationally</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-line text-xs font-mono text-content-muted relative z-10 flex items-center justify-between">
            <span>Ministry of Education · NIRF</span>
            <span className="text-accent font-semibold">Category-1 Autonomy</span>
          </div>
        </div>

        {/* Right Column: 6 Categories in High-Density Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {nirfData.slice(1).map((item) => (
            <div
              key={item.category}
              className="rounded-2xl p-6 bg-surface-2 border border-line hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-accent uppercase font-bold">
                  {item.highlight}
                </span>
                <span className="text-[10px] font-mono text-content-muted">2025</span>
              </div>

              <div>
                <span className="font-heading text-4xl sm:text-5xl font-extrabold text-content group-hover:text-accent transition-colors block leading-none">
                  {item.rank}
                </span>
                <h4 className="font-heading text-base font-bold text-content mt-1.5">
                  {item.category}
                </h4>
              </div>

              <div className="pt-2 border-t border-line/60 text-xs text-content-muted">
                <span className="text-content font-semibold block">{item.faculty}</span>
                <span>{item.subtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Trophy, Gem } from "lucide-react";

export interface RankingMetric {
  id: string;
  agency: "QS" | "THE";
  metric: string;
  value: string;
  category: "overall" | "regional" | "subject";
  subject?: string;
  highlight?: string;
}

export const QS_METRICS: RankingMetric[] = [
  { id: "qs-world", agency: "QS", metric: "QS World University Rankings", value: "1201–1400", category: "overall", highlight: "Global League" },
  { id: "qs-asia", agency: "QS", metric: "QS Asia University Rankings", value: "332", category: "regional", highlight: "Top 350 in Asia" },
  { id: "qs-south-asia", agency: "QS", metric: "QS Southern Asia Rankings", value: "#80", category: "regional", highlight: "Top 80 in Southern Asia" },
  { id: "qs-eng", agency: "QS", metric: "Engineering & Technology", value: "401–450", category: "subject", subject: "Engineering", highlight: "Top 450 Worldwide" },
  { id: "qs-cs", agency: "QS", metric: "Computer Science & Info Systems", value: "751–800", category: "subject", subject: "Computer Science" },
  { id: "qs-med", agency: "QS", metric: "Medicine & Clinical Sciences", value: "701–850", category: "subject", subject: "Medicine" },
  { id: "qs-mgmt", agency: "QS", metric: "Social Sciences & Management", value: "451–500", category: "subject", subject: "Management", highlight: "Top 500 Worldwide" },
];

export const THE_METRICS: RankingMetric[] = [
  { id: "the-world", agency: "THE", metric: "THE World University Rankings", value: "801–1000", category: "overall", highlight: "Global League" },
  { id: "the-rep", agency: "THE", metric: "THE World Reputation Rankings", value: "201–300", category: "overall", highlight: "Top 4 in India" },
  { id: "the-asia", agency: "THE", metric: "THE Asia University Rankings", value: "251–300", category: "regional", highlight: "Top 300 in Asia" },
  { id: "the-young", agency: "THE", metric: "Young University Rankings", value: "201–250", category: "regional", highlight: "Top 250 Worldwide" },
  { id: "the-eng", agency: "THE", metric: "Engineering & Technology", value: "501–600", category: "subject", subject: "Engineering" },
  { id: "the-cs", agency: "THE", metric: "Computer Science", value: "801–1000", category: "subject", subject: "Computer Science" },
  { id: "the-med", agency: "THE", metric: "Medical & Health Sciences", value: "601–800", category: "subject", subject: "Medicine" },
];

export function GlobalRankingsShowcase() {
  return (
    <div id="global-rankings" className="space-y-8 scroll-mt-28">
      {/* Dual Sovereignty Monoliths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* QS Titan Monolith */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border-2 border-accent/80 shadow-2xl relative overflow-hidden group flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all duration-700" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/40">
                QUACQUARELLI SYMONDS
              </span>
              <span className="text-xs font-mono text-content-muted font-bold">
                LONDON · UK
              </span>
            </div>

            {/* Hero Accolade */}
            <div className="p-5 rounded-2xl bg-surface-3 border border-accent/40 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted block">
                  Apex Regional Standing
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-content mt-0.5">
                  Ranked #80 in Southern Asia
                </h3>
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F4E8C1] to-accent-light shrink-0">
                #80
              </div>
            </div>

            {/* Metric Gauges Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-content-muted font-bold block">
                Global Subject &amp; World Benchmarks
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QS_METRICS.filter((m) => m.id !== "qs-south-asia").map((m) => (
                  <div
                    key={m.id}
                    className="p-3.5 rounded-xl bg-surface-3/80 border border-line hover:border-accent/60 transition-all flex flex-col justify-between space-y-1"
                  >
                    <span className="text-xs text-content-secondary font-medium">
                      {m.metric}
                    </span>
                    <div className="flex items-baseline justify-between pt-1">
                      <span className="font-mono text-base font-bold text-accent">
                        {m.value}
                      </span>
                      {m.highlight && (
                        <span className="text-[9px] font-mono text-content-muted uppercase">
                          {m.highlight}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-line/80 relative z-10 flex items-center justify-between text-xs font-mono text-content-muted">
            <span>Verified QS Intelligence Unit Data</span>
            <span className="text-accent font-semibold">Asia Band: 332</span>
          </div>
        </div>

        {/* THE Titan Monolith */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border-2 border-accent/80 shadow-2xl relative overflow-hidden group flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all duration-700" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/40">
                TIMES HIGHER EDUCATION
              </span>
              <span className="text-xs font-mono text-content-muted font-bold">
                OXFORD · UK
              </span>
            </div>

            {/* Hero Accolade */}
            <div className="p-5 rounded-2xl bg-surface-3 border border-accent/40 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted block">
                  Reputational Benchmark
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-content mt-0.5">
                  Top 4 in India · World Reputation
                </h3>
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F4E8C1] to-accent-light shrink-0">
                Top 4
              </div>
            </div>

            {/* Metric Gauges Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-content-muted font-bold block">
                Global Subject &amp; World Benchmarks
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {THE_METRICS.filter((m) => m.id !== "the-rep").map((m) => (
                  <div
                    key={m.id}
                    className="p-3.5 rounded-xl bg-surface-3/80 border border-line hover:border-accent/60 transition-all flex flex-col justify-between space-y-1"
                  >
                    <span className="text-xs text-content-secondary font-medium">
                      {m.metric}
                    </span>
                    <div className="flex items-baseline justify-between pt-1">
                      <span className="font-mono text-base font-bold text-accent">
                        {m.value}
                      </span>
                      {m.highlight && (
                        <span className="text-[9px] font-mono text-content-muted uppercase">
                          {m.highlight}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-line/80 relative z-10 flex items-center justify-between text-xs font-mono text-content-muted">
            <span>World Reputation Band: 201–300</span>
            <span className="text-accent font-semibold">Young University: 201–250</span>
          </div>
        </div>
      </div>

      {/* Bottom Dual Honorary Accolades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/40 text-accent flex items-center justify-center shrink-0">
            <Trophy className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold text-accent tracking-wider">
              MHRD · Government of India
            </span>
            <h4 className="font-heading text-lg font-bold text-content">
              Swachhata India Rankings
            </h4>
            <p className="text-xs text-content-secondary leading-relaxed">
              Ranked <strong className="text-content">3rd in India</strong> (Technical Category) &amp; <strong className="text-content">5th in India</strong> (Residential University Category) for sustainable, green campus excellence.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/40 text-accent flex items-center justify-center shrink-0">
            <Gem className="w-7 h-7 text-accent" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold text-accent tracking-wider">
              QS I-GAUGE Indian University Rating
            </span>
            <h4 className="font-heading text-lg font-bold text-content">
              Diamond Rated University
            </h4>
            <p className="text-xs text-content-secondary leading-relaxed">
              Conferred the apex <strong className="text-content">Diamond Rating</strong> for excellence across teaching pedagogy, advanced research facilities, institutional governance, and graduate employability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

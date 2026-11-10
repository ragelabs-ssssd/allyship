"use client";

import React from "react";
import {
  Cpu,
  Trophy,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function BentoGridConcept() {

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-[11px] font-bold font-heading tracking-[0.14em] uppercase">
          <span>The Long-Horizon Vision · Co-Engineered with 500+ CXOs</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
          The Architecture of <span className="text-accent">Generational Impact</span>
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-4xl mx-auto [text-wrap:balance]">
          A proven corporate-academic framework designed for immediate workplace readiness,<br className="hidden md:inline" />{" "}
          pan-India dialogue, and high-performance mentorship.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Card 1: Large Featured Card (8 cols) - Placement Velocity & NIRF Dividend */}
        <div className="md:col-span-2 lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-accent/60 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap gap-2 items-center justify-between">
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                Primary Measurable Dividend
              </span>
              <span className="text-xs font-semibold text-accent">NIRF 2025 #15 Overall</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-content tracking-tight">
              94.54% Placement with Day-One Readiness
            </h3>
            <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal max-w-2xl">
              By replacing archaic placement weeks with year-round capability co-creation, SOA graduates enter global workforces with immediate production readiness. Over 150+ multinational partners anchor their talent pipelines here.
            </p>
          </div>

          {/* Metric Bar Visualizer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-line relative z-10">
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-accent">94.54%</div>
              <div className="text-[11px] text-content-secondary mt-1">Placement Rate</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-content">500+</div>
              <div className="text-[11px] text-content-secondary mt-1">Corporate CXOs</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-content">150+</div>
              <div className="text-[11px] text-content-secondary mt-1">Global Employers</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-accent">18 CoEs</div>
              <div className="text-[11px] text-content-secondary mt-1">Research Centers</div>
            </div>
          </div>
        </div>

        {/* Card 2: The Olympic Crucible (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                Championship Psychology
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-content">
              Championship Discipline for Corporate Leadership
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Technical brilliance gets graduates hired; emotional stamina creates CXOs. Olympic medalists and sporting legends mentor students in the psychology of catastrophic setbacks and enduring high-stakes boardroom pressure.
            </p>
          </div>

          <div className="pt-4 border-t border-line space-y-1">
            <span className="font-sans text-[11px] font-semibold text-content block">
              Executive Takeaway:
            </span>
            <p className="font-sans text-xs text-accent font-medium leading-relaxed">
              Championship grit, setback recovery protocols, and high-pressure psychological safety embedded into student mentorship.
            </p>
          </div>
        </div>

        {/* Card 3: Pan-India Executive Diplomacy (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                7 Standing Conclaves
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-content">
              Direct Dialogue Across Five Indian Metros
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Dismantling campus isolation: SOA projects talent directly into corporate boardrooms across 5 commercial capitals, converting hiring into continuous policy co-authorship.
            </p>
          </div>

          {/* Pan-India Metro Corridor Cities */}
          <div className="pt-4 border-t border-line space-y-1">
            <span className="font-sans text-[11px] font-semibold text-content block">
              Regional Chapter Corridors:
            </span>
            <p className="font-sans text-xs font-medium text-accent leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Bengaluru</span>
              <span className="text-content-faint select-none font-light">/</span>
              <span>Hyderabad</span>
              <span className="text-content-faint select-none font-light">/</span>
              <span>Mumbai</span>
              <span className="text-content-faint select-none font-light">/</span>
              <span>Chennai</span>
              <span className="text-content-faint select-none font-light">/</span>
              <span>Kolkata</span>
            </p>
          </div>
        </div>

        {/* Card 4: Industry-Powered Centres of Excellence (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                Enterprise-Anchored Labs
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-content">
              18 Industry-Powered Centres of Excellence
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Dedicated on-campus innovation hubs co-established with Tech Mahindra, LTTS, Blue Star, and Wipro immerse students in live ServiceNow workflows, smart HVAC climatech systems, and medical AI architectures starting in their second year.
            </p>
          </div>

          <div className="pt-4 border-t border-line space-y-1">
            <span className="font-sans text-[11px] font-semibold text-content block">
              Enterprise Research Hubs:
            </span>
            <p className="font-sans text-xs text-accent font-medium leading-relaxed">
              18 specialized innovation laboratories supported by AIC-SOA Foundation under NITI Aayog to tackle real-world industrial challenges.
            </p>
          </div>
        </div>

        {/* Card 5: The Radical Psychological Safety Pact (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                Generational Power Shift
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-content">
              Generational Mentorship &amp; Psychological Safety
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              De-weaponizing workplace hierarchy for emerging talent: coaching Gen-Z professionals to challenge assumptions with integrity, speak truth to power, and eliminate imposter syndrome before Day 1.
            </p>
          </div>

          <div className="pt-4 border-t border-line space-y-1">
            <span className="font-sans text-[11px] font-semibold text-content block">
              Anti-Performative Thesis:
            </span>
            <Link
              href="#manifesto"
              className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-accent hover:text-accent-hover transition-colors group"
            >
              <span>Explore The Institutional Framework</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

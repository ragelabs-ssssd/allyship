"use client";

import React, { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Cpu,
  Trophy,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Building2,
  Layers,
} from "lucide-react";
import Link from "next/link";

const METRO_CITIES = [
  { name: "Bengaluru", edition: "1.0 & 2.0", focus: "Cloud & AI Innovation" },
  { name: "Hyderabad", edition: "2.0 Conclave", focus: "GCCs & Capability Centers" },
  { name: "Mumbai", edition: "1.0 Conclave", focus: "BFSI & High-Empathy Culture" },
  { name: "Chennai", edition: "2.0 Conclave", focus: "Deep Tech & Automotive" },
  { name: "Kolkata", edition: "1.0 Conclave", focus: "Enterprise Digital Growth" },
];

export function BentoGridConcept() {
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Institutional Value Architecture · Co-Engineered with 500+ CXOs</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-content tracking-tight">
          The Enterprise Value <span className="text-accent">Bento Matrix</span>
        </h2>
        <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
          A multi-dimensional breakdown of tangible institutional value: placement velocity, national executive corridors, curriculum co-authoring, athletic grit, and psychological safety.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Card 1: Large Featured Card (8 cols) - Placement Velocity & NIRF Dividend */}
        <div className="lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-accent/60 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient from-accent/15 via-transparent to-transparent pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30">
                Primary Measurable Dividend
              </span>
              <span className="text-xs font-semibold text-accent">NIRF 2025 #15 Overall</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-content tracking-tight">
              94.54% Placement Velocity with Zero-Day Ramp-Up
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

        {/* Card 2: Boardroom & Arena Triad (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent block">
              High-Performance Mindset
            </span>
            <h3 className="font-heading text-xl font-bold text-content">
              Boardroom &amp; Arena Triad
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Olympic medalists and sporting icons train engineering students in the psychology of handling failure, high-stakes pressure, and relentless resilience.
            </p>
          </div>

          <div className="pt-4 border-t border-line">
            <div className="text-[11px] font-semibold text-content">
              Featured Sporting Luminaries:
            </div>
            <p className="text-xs text-accent mt-0.5">
              Anju Bobby George · Nilesh Kulkarni · Arshad Ayub
            </p>
          </div>
        </div>

        {/* Card 3: 5-City Executive Corridors (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent">
                7 Conclave Editions
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-content">
              Pan-India Metro Corridors
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Instead of expecting corporate leaders to travel to Bhubaneswar, SOA takes the movement directly into India&apos;s 5 commercial capitals.
            </p>
          </div>

          {/* Interactive City Selector */}
          <div className="space-y-2 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {METRO_CITIES.map((city, idx) => (
                <button
                  key={city.name}
                  type="button"
                  onClick={() => setSelectedCity(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedCity === idx
                      ? "bg-accent text-canvas font-bold"
                      : "bg-surface-2 text-content-secondary hover:text-content"
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-surface-2 border border-line text-xs">
              <span className="font-bold text-content block">{METRO_CITIES[selectedCity].name} {METRO_CITIES[selectedCity].edition}</span>
              <span className="text-content-secondary">{METRO_CITIES[selectedCity].focus}</span>
            </div>
          </div>
        </div>

        {/* Card 4: Curriculum Co-Engineering (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent block">
              Pedagogical Agility
            </span>
            <h3 className="font-heading text-xl font-bold text-content">
              Bi-Annual Curriculum Sprints
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Corporate CTOs and engineering directors co-sign and refresh engineering syllabi every 6 months to match live generative AI, cloud, and cyber stacks.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
            <div className="text-xs font-bold text-content">No Simulated Labs</div>
            <div className="text-[11px] text-content-secondary">
              Students build on live enterprise production tooling and sandboxes.
            </div>
          </div>
        </div>

        {/* Card 5: Psychological Safety & Litmus Test (4 cols) */}
        <div className="lg:col-span-4 rounded-3xl p-8 bg-surface border border-line shadow-xl flex flex-col justify-between space-y-6 group hover:border-accent/60 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent block">
              Gen-Z Workplace Culture
            </span>
            <h3 className="font-heading text-xl font-bold text-content">
              Psychological Safety Protocol
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
              Bridging academic theory with corporate pressure: teaching young talent to speak up, challenge assumptions, and lead without imposter syndrome.
            </p>
          </div>

          <Link
            href="#litmus-test"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline pt-2"
          >
            <span>Explore 3-Question Litmus Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

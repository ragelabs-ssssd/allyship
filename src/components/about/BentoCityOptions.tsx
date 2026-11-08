"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Trophy,
  Users,
  Building2,
  ArrowRight,
  Sparkles,
  Plane,
  ChevronRight,
  ShieldCheck,
  Medal,
} from "lucide-react";

export interface MetroCityData {
  id: string;
  name: string;
  code: string;
  edition: string;
  focus: string;
  tagline: string;
  legend: string;
  legendRole: string;
  partners: string[];
  cxoTurnout: string;
  image: string;
}

export const CITIES_DATA: MetroCityData[] = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    code: "BLR",
    edition: "1.0 & 2.0 Conclaves",
    focus: "Cloud & Sovereign AI Innovation",
    tagline: "Engineering culture, AI capabilities & applied research labs",
    legend: "Anju Bobby George",
    legendRole: "World Athletics Medalist & Olympian",
    partners: ["Microsoft", "Dell", "Zscaler", "L&T TS", "BNY Mellon"],
    cxoTurnout: "70+ Boardroom CXOs",
    image: "/bengaluru-1.jpg",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    code: "HYD",
    edition: "1.0 & 2.0 Conclaves",
    focus: "Strategic GCCs & Applied R&D",
    tagline: "Global Capability Centers & bilateral innovation corridors",
    legend: "Arshad Ayub",
    legendRole: "Former Test Cricketer & National Selector",
    partners: ["Deloitte", "Salesforce", "Qualcomm", "Wells Fargo", "Synchrony"],
    cxoTurnout: "80+ Boardroom CXOs",
    image: "/hyderabad-1.jpg",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    code: "BOM",
    edition: "1.0 Conclave",
    focus: "BFSI & High-Empathy Governance",
    tagline: "Workplace empathy, high-stakes finance & mental wellness",
    legend: "Nilesh Kulkarni & Anand Menezes",
    legendRole: "Test Cricketer & Olympic Sprinter",
    partners: ["Morgan Stanley", "JP Morgan", "Tata Motors", "LTIMindtree", "HDFC"],
    cxoTurnout: "75+ Boardroom CXOs",
    image: "/mumbai-1.jpg",
  },
  {
    id: "chennai",
    name: "Chennai",
    code: "MAA",
    edition: "2.0 Conclave",
    focus: "Deep Tech, MedTech & Systems",
    tagline: "High-precision feedback loops, sprint discipline & product engineering",
    legend: "Premanand J.",
    legendRole: "Paris Olympics National Sprint Coach",
    partners: ["Standard Chartered", "Mphasis", "KaarTech", "Foodhub", "Rocket India"],
    cxoTurnout: "65+ Boardroom CXOs",
    image: "/slides/CON01670.jpg",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    code: "CCU",
    edition: "1.0 Conclave",
    focus: "Enterprise Digital Scale",
    tagline: "Legacy enterprise transformation & cross-generational trust",
    legend: "Gurbux Singh & Gautam Sarkar",
    legendRole: "Olympic Gold Medalist & Football Legend",
    partners: ["PwC", "Cognizant", "IBM", "ITC", "Tata Steel"],
    cxoTurnout: "60+ Boardroom CXOs",
    image: "/kolkata-1.jpg",
  },
];

/* =========================================================================
   OPTION 1: Command Matrix (Telemetry Glass Card with Live Badge & CXO Metric)
   ========================================================================= */
export function Option1CommandMatrix({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: number;
  setSelectedCity: (idx: number) => void;
}) {
  const city = CITIES_DATA[selectedCity];

  return (
    <div className="space-y-3 pt-2">
      {/* Segmented City Track */}
      <div className="grid grid-cols-5 gap-1 p-1 rounded-xl bg-surface-2 border border-line">
        {CITIES_DATA.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCity(idx)}
            className={`py-1.5 px-1 rounded-lg text-xs font-mono font-medium transition-all text-center truncate ${
              selectedCity === idx
                ? "bg-accent text-on-accent font-bold shadow-sm"
                : "text-content-secondary hover:text-content hover:bg-surface-3"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Telemetry Glass Display Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 border border-accent/30 shadow-lg space-y-3 relative overflow-hidden group">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-wider">
              {city.edition}
            </span>
          </div>
          <span className="font-mono text-[10px] text-content-muted uppercase tracking-wider px-2 py-0.5 rounded bg-surface-3 border border-line">
            {city.cxoTurnout}
          </span>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold text-content leading-snug">
            {city.focus}
          </h4>
          <p className="text-xs text-content-secondary mt-1 leading-relaxed">
            {city.tagline}
          </p>
        </div>

        <div className="pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-content-secondary">
            <Medal className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate max-w-[200px] font-medium">
              {city.legend}
            </span>
          </div>
          <Link
            href={`/event?chapter=${city.id}-2`}
            className="text-accent hover:underline font-semibold flex items-center gap-1 shrink-0 text-[11px]"
          >
            <span>Brief</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   OPTION 2: Executive Diplomatic Corridor (Route Track & Boarding Pass)
   ========================================================================= */
export function Option2DiplomaticCorridor({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: number;
  setSelectedCity: (idx: number) => void;
}) {
  const city = CITIES_DATA[selectedCity];

  return (
    <div className="space-y-3 pt-2">
      {/* Flightline Route Header */}
      <div className="flex items-center justify-between px-2 py-1.5 rounded-xl bg-surface-2/60 border border-line">
        {CITIES_DATA.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCity(idx)}
            className="group flex flex-col items-center focus:outline-none"
          >
            <span
              className={`text-[11px] font-mono tracking-wider transition-colors ${
                selectedCity === idx
                  ? "text-accent font-bold"
                  : "text-content-muted group-hover:text-content"
              }`}
            >
              {c.code}
            </span>
            <span
              className={`w-1.5 h-1.5 rounded-full mt-0.5 transition-all ${
                selectedCity === idx
                  ? "bg-accent scale-125"
                  : "bg-line group-hover:bg-accent/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Diplomatic Corridor Pass */}
      <div className="relative p-4 rounded-2xl bg-surface-2 border border-line hover:border-accent/40 transition-colors space-y-3 overflow-hidden">
        {/* Subtle Watermark Code */}
        <span className="absolute -right-2 -bottom-3 text-5xl font-mono font-black text-content/5 pointer-events-none select-none">
          {city.code}
        </span>

        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold block">
              {city.name} Corridor · {city.edition}
            </span>
            <h4 className="font-heading text-sm font-bold text-content mt-0.5">
              {city.focus}
            </h4>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-subtle text-accent border border-accent/30 font-bold shrink-0">
            {city.code}
          </span>
        </div>

        <p className="text-xs text-content-secondary leading-relaxed">
          {city.tagline}
        </p>

        {/* Corporate Cohort Pills */}
        <div className="pt-2 border-t border-line/60 flex flex-wrap gap-1.5 items-center">
          <span className="text-[10px] font-mono uppercase text-content-muted mr-1">
            Cohort:
          </span>
          {city.partners.slice(0, 3).map((p) => (
            <span
              key={p}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-3 text-content-secondary border border-line"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   OPTION 3: Cinematic Photo Deck (Photo Thumbnail Backdrop with Dark Scrim)
   ========================================================================= */
export function Option3CinematicDeck({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: number;
  setSelectedCity: (idx: number) => void;
}) {
  const city = CITIES_DATA[selectedCity];

  return (
    <div className="space-y-3 pt-2">
      {/* City Chips */}
      <div className="flex flex-wrap gap-1.5">
        {CITIES_DATA.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCity(idx)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedCity === idx
                ? "bg-accent text-on-accent font-bold shadow-sm"
                : "bg-surface-2 text-content-secondary hover:text-content border border-line"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Cinematic Preview Card */}
      <div className="relative rounded-2xl overflow-hidden border border-line h-[150px] flex flex-col justify-end p-4 group">
        <Image
          src={city.image}
          alt={city.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        {/* Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

        <div className="relative z-10 space-y-1">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-accent font-bold">
            <span>
              {city.name} · {city.edition}
            </span>
            <span className="text-white/70">{city.cxoTurnout}</span>
          </div>
          <h4 className="font-heading text-sm font-bold text-white leading-snug">
            {city.focus}
          </h4>
          <p className="text-[11px] text-white/80 line-clamp-1">
            {city.legend} ({city.legendRole})
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   OPTION 4: Executive Accordion Stack (All 5 Cities Simultaneously Visible)
   ========================================================================= */
export function Option4AccordionStack({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: number;
  setSelectedCity: (idx: number) => void;
}) {
  return (
    <div className="space-y-1.5 pt-2">
      {CITIES_DATA.map((c, idx) => {
        const isActive = selectedCity === idx;
        return (
          <div
            key={c.id}
            className={`rounded-xl transition-all overflow-hidden border ${
              isActive
                ? "bg-surface-2 border-accent/40 shadow-md"
                : "bg-surface-2/50 border-line hover:border-line-strong"
            }`}
          >
            <button
              type="button"
              onClick={() => setSelectedCity(idx)}
              className="w-full px-3 py-2 flex items-center justify-between text-left text-xs"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-accent text-on-accent"
                      : "bg-surface-3 text-content-muted"
                  }`}
                >
                  {c.code}
                </span>
                <span
                  className={`font-semibold ${
                    isActive ? "text-content font-bold" : "text-content-secondary"
                  }`}
                >
                  {c.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-content-muted">
                {c.edition.replace(" Conclaves", "").replace(" Conclave", "")}
              </span>
            </button>

            {isActive && (
              <div className="px-3 pb-3 pt-1 text-xs space-y-2 border-t border-line/40">
                <p className="font-medium text-accent leading-snug">
                  {c.focus}
                </p>
                <div className="flex items-center justify-between text-[11px] text-content-secondary font-mono">
                  <span>{c.legend}</span>
                  <span className="text-accent font-bold">{c.cxoTurnout}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================================
   OPTION 5: Split Bilateral Dashboard (Dual-Column Micro Telemetry Widget)
   ========================================================================= */
export function Option5SplitDashboard({
  selectedCity,
  setSelectedCity,
}: {
  selectedCity: number;
  setSelectedCity: (idx: number) => void;
}) {
  const city = CITIES_DATA[selectedCity];

  return (
    <div className="pt-2">
      <div className="rounded-2xl bg-surface-2 border border-line p-3 grid grid-cols-12 gap-3 items-center">
        {/* Left Column: Vertical City List */}
        <div className="col-span-5 space-y-1 border-r border-line/60 pr-2">
          {CITIES_DATA.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCity(idx)}
              className={`w-full px-2 py-1.5 rounded-lg text-left text-xs font-mono transition-all flex items-center justify-between ${
                selectedCity === idx
                  ? "bg-accent text-on-accent font-bold"
                  : "text-content-secondary hover:text-content hover:bg-surface-3"
              }`}
            >
              <span>{c.name}</span>
              <span className="text-[10px] opacity-75">{c.code}</span>
            </button>
          ))}
        </div>

        {/* Right Column: High-Density Dossier */}
        <div className="col-span-7 space-y-2 pl-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold">
              {city.edition}
            </span>
            <span className="text-[10px] font-mono text-content-muted">
              {city.cxoTurnout}
            </span>
          </div>

          <h4 className="font-heading text-xs font-bold text-content leading-snug">
            {city.focus}
          </h4>

          <div className="text-[11px] text-content-secondary leading-snug">
            <span className="text-content font-semibold">Mentor:</span> {city.legend}
          </div>

          <div className="pt-1.5 border-t border-line/60 flex flex-wrap gap-1">
            {city.partners.slice(0, 3).map((p) => (
              <span
                key={p}
                className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-3 text-content-muted border border-line"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

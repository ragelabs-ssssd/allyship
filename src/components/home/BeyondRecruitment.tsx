"use client";

import React from "react";
import { MessageSquare, HeartHandshake, Compass } from "lucide-react";
import { SectionReveal } from "../animations/SectionReveal";

export function BeyondRecruitment() {
  const pillars = [
    {
      icon: MessageSquare,
      title: "Listening Before Leading",
      description:
        "Higher education must step outside its walls to listen first. We convene senior executives and academic deans to understand the evolving demands of modern industry—not as a one-time check, but as a continuous dialogue.",
    },
    {
      icon: HeartHandshake,
      title: "Mentoring the Whole Person",
      description:
        "True talent development looks beyond immediate test scores. By pairing corporate leaders with Olympic sports mentors, we champion psychological safety, resilience in the face of setbacks, and unshakeable self-belief.",
    },
    {
      icon: Compass,
      title: "Co-Creating Possibilities",
      description:
        "Bridging classroom inquiry with boardroom realities. When industry challenges directly shape academic curricula and research laboratories, young scholars step into their careers prepared to innovate from day one.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-2 relative border-b border-line overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center w-full max-w-7xl mx-auto space-y-4 mb-16 flex flex-col items-center justify-center">
          <SectionReveal className="w-full flex flex-col items-center text-center">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              The Deeper Purpose
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[40px] font-bold text-content tracking-tight mt-2 text-center lg:whitespace-nowrap">
              Why Industry and Academia Need a New Covenant
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-4xl mx-auto mt-3 text-center">
              Moving beyond one-off recruitment into an enduring partnership where ideas, mentorship, and opportunities flow freely.
            </p>
          </SectionReveal>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <SectionReveal
                key={pillar.title}
                delay={idx * 0.1}
                className="p-8 rounded-3xl bg-surface border border-line shadow-lg hover:border-accent/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-content">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


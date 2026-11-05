"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";
import { conclavesData, ConclaveChapter } from "@/data/conclaves";
import { SectionReveal } from "../animations/SectionReveal";

export function ChapterBentoGrid() {
  const [activeCycle, setActiveCycle] = useState<"all" | "2.0" | "1.0">("all");

  const filteredChapters = conclavesData.filter((ch) => {
    if (activeCycle === "all") return true;
    return ch.editionCycle === activeCycle;
  });

  // Pick first one as primary featured hero card
  const featured = filteredChapters[0];
  const remaining = filteredChapters.slice(1);

  return (
    <section id="chapters" className="py-24 lg:py-32 bg-canvas relative">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-line">
          <SectionReveal>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              The Conclave Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.025em] leading-[1.1] text-content mt-2">
              Metro Chapter Archives
            </h2>
          </SectionReveal>

          {/* Underline Tabs */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setActiveCycle("all")}
              className={`pb-2 relative transition-colors ${
                activeCycle === "all"
                  ? "text-content font-semibold"
                  : "text-content-muted hover:text-content"
              }`}
            >
              All Chapters ({conclavesData.length})
              {activeCycle === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveCycle("2.0")}
              className={`pb-2 relative transition-colors ${
                activeCycle === "2.0"
                  ? "text-content font-semibold"
                  : "text-content-muted hover:text-content"
              }`}
            >
              Chapter 2.0
              {activeCycle === "2.0" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveCycle("1.0")}
              className={`pb-2 relative transition-colors ${
                activeCycle === "1.0"
                  ? "text-content font-semibold"
                  : "text-content-muted hover:text-content"
              }`}
            >
              Chapter 1.0
              {activeCycle === "1.0" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Chapter Card — 7 Columns Wide */}
          {featured && (
            <SectionReveal className="lg:col-span-7">
              <Link
                href={`/event#${featured.id}`}
                className="group block relative h-full bg-surface-3 rounded-2xl overflow-hidden border border-line shadow-xl hover:border-accent/60 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-3 on-media">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-[0.14em] uppercase bg-black/70 backdrop-blur-md text-white border border-line">
                      {featured.edition}
                    </span>
                    <span className="px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-[0.14em] uppercase bg-accent text-on-accent">
                      Featured
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-content">
                    <p className="font-sans text-xs tracking-normal text-[#E8D5A7] mb-1 font-medium">
                      {featured.date} • {featured.venue}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-normal text-content leading-snug">
                      {featured.city}: {featured.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary line-clamp-3">
                    {featured.desc}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-line">
                    <div className="flex items-center gap-2 text-xs font-medium text-content-muted">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span>{featured.turnout}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content group-hover:text-accent transition-colors">
                      <span>Full Chapter Briefing</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          )}

          {/* Remaining Chapters in Column/Grid — 5 Columns Wide */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {remaining.slice(0, 2).map((chapter, idx) => (
              <SectionReveal key={chapter.id} delay={0.15 * (idx + 1)}>
                <Link
                  href={`/event#${chapter.id}`}
                  className="group block bg-surface-3 rounded-2xl overflow-hidden border border-line shadow-lg hover:border-accent/60 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                    <div className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-surface-3">
                      <Image
                        src={chapter.image}
                        alt={chapter.city}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {chapter.id === "bengaluru-2" && (
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-black/80 backdrop-blur-md text-accent border border-accent/40 block text-center truncate">
                            Photos Updating Soon
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="sm:col-span-7 p-5 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                            {chapter.edition}
                          </span>
                          <span className="font-sans text-xs text-content-muted font-medium">
                            {chapter.date}
                          </span>
                        </div>
                        <h4 className="font-display text-base font-semibold tracking-normal text-content group-hover:text-accent transition-colors line-clamp-1">
                          {chapter.city} Chapter
                        </h4>
                        <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-1 line-clamp-2">
                          {chapter.title}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-line text-[11px]">
                        <span className="font-sans text-xs text-content-muted truncate max-w-[160px]">
                          {chapter.venue}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-content-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Bottom Strip: Additional Chapters */}
        {remaining.length > 2 && (
          <div className={`grid grid-cols-1 ${remaining.slice(2).length === 1 ? "md:grid-cols-3" : remaining.slice(2).length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-6 mt-8`}>
            {remaining.slice(2).map((chapter, idx) => (
              <SectionReveal key={chapter.id} delay={0.1 * (idx + 1)}>
                <Link
                  href={`/event#${chapter.id}`}
                  className="group block h-full bg-surface-3 rounded-2xl overflow-hidden border border-line shadow-lg hover:border-accent/60 transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-surface-3 on-media">
                    <Image
                      src={chapter.image}
                      alt={chapter.city}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full font-sans text-[11px] uppercase tracking-[0.14em] bg-black/70 backdrop-blur-md text-white font-semibold border border-line">
                        {chapter.city}
                      </span>
                    </div>
                    {chapter.id === "bengaluru-2" && (
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full font-sans text-[10px] uppercase tracking-[0.12em] bg-black/80 backdrop-blur-md text-accent font-semibold border border-accent/40">
                          Photos Updating Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="font-sans text-[11px] text-content-muted uppercase tracking-[0.14em] block font-medium">
                      {chapter.date} • {chapter.edition}
                    </span>
                    <h4 className="font-display text-base font-semibold tracking-normal text-content line-clamp-1 group-hover:text-accent transition-colors">
                      {chapter.title}
                    </h4>
                    <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted line-clamp-2">
                      {chapter.focus}
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        )}

        {/* View All Chapters Link */}
        <div className="mt-12 text-center">
          <Link
            href="/event"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans text-sm font-medium transition-colors duration-200 shadow-sm"
          >
            <span>Explore All Chapter Agendas, Panels &amp; Summaries</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-white text-xs">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

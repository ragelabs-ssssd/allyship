"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionReveal } from "../animations/SectionReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ChairmanVision() {
  return (
    <section className="py-20 lg:py-28 bg-surface-2 relative border-y border-line overflow-hidden">
      {/* Subtle luxury ambient pattern */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          {/* Left Column: Portrait */}
          <SectionReveal className="lg:col-span-5 xl:col-span-5 relative" direction="left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-surface-3 shadow-2xl border border-line aspect-[4/5] on-media">
                <Image
                  src="/chairman-manojranjan-nayak.png"
                  alt="Prof. (Dr.) Manojranjan Nayak, Founder President & Chairman, SOA University"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-4 left-4 right-4 text-content">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Founding Visionary
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold tracking-normal text-content leading-snug">
                    Prof. (Dr.) Manojranjan Nayak
                  </h4>
                  <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.02em] leading-relaxed text-content-secondary mt-1">
                    Founder President &amp; Chairman, Siksha &lsquo;O&rsquo; Anusandhan
                  </p>
                </div>
              </div>

              {/* Gold border accent accentuating editorial frame */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-accent rounded-br-2xl pointer-events-none opacity-50 hidden sm:block" />
            </div>
          </SectionReveal>

          {/* Right Column: Editorial Quote & Philosophy */}
          <SectionReveal className="lg:col-span-7 xl:col-span-7 space-y-8" direction="right">
            <div className="space-y-4">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent block">Institutional Stewardship</span>
              <Quote className="w-12 h-12 text-accent opacity-80" />
              <blockquote className="font-serif italic font-normal tracking-normal text-2xl sm:text-3xl lg:text-4xl leading-[1.4] text-content">
                &ldquo;Allyship is not a transactional summit. It is an enduring covenant between
                corporate boardrooms and academic halls — an obligation to sculpt talent that leads
                with intellect, empathy, and technological resilience.&rdquo;
              </blockquote>
              <div className="pt-2">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-content tracking-tight">
                  Prof. (Dr.) Manojranjan Nayak
                </p>
                <p className="font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.12em] text-accent mt-1">
                  Founder President &amp; Chairman, Siksha &lsquo;O&rsquo; Anusandhan
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-line text-sm sm:text-base text-content-secondary leading-relaxed">
              <p className="font-sans text-sm sm:text-base font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Over three decades, Prof. (Dr.) Manojranjan Nayak has guided Siksha &lsquo;O&rsquo; Anusandhan from an ambitious educational venture into one of India’s top 15 national universities (NIRF #15). His foundational conviction remains unchanged: true education does not end with academic honors—it begins when young scholars find leaders who believe in their potential, listen to their ideas, and open doors for them to lead with dignity.


              </p>
              <p className="font-sans text-xs text-content-muted uppercase tracking-[0.14em] font-medium">
                Inaugural addresses delivered across Bengaluru, Mumbai, Hyderabad &amp; Chennai Conclaves
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/discover-soa"
                className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary hover:text-accent transition-colors group"
              >
                <span>Explore the Institutional Legacy of SOA</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

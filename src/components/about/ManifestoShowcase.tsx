"use client";

import React from "react";
import Image from "next/image";

export function ManifestoShowcase() {
  return (
    <section
      id="manifesto"
      className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-t border-line scroll-mt-24"
    >
      <div className="relative rounded-3xl overflow-hidden border border-line aspect-[21/9] min-h-[420px] flex items-center justify-center text-center p-6 sm:p-14 group force-dark">
        {/* Background Image with Cinematic Grading */}
        <div className="absolute inset-0">
          <Image
            src="/conclave-mandate-delegation.jpg"
            alt="Allyship++ National Conclave Delegation"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
        </div>

        {/* Letterbox Gold Accent Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-5 sr-only">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent font-bold block">
            THE CONCLAVE MANDATE
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-content uppercase tracking-tight leading-[0.98]">
            We Do Not Sign Pledges.<br />
            <span className="text-accent italic font-serif font-light">We Alter</span> Trajectories.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-content-secondary uppercase tracking-widest pt-2">
            7 National Conclaves · 500+ Boardroom CXOs · Zero Commercial Sponsorship
          </p>
        </div>
      </div>
    </section>
  );
}

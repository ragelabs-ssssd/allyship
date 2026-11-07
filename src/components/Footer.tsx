"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 500);
  };

  const navLinks = [
    { name: "About & Leadership", href: "/about" },
    { name: "Conclave Chapters", href: "/event" },
    { name: "Impact & Outcomes", href: "/impact" },
    { name: "Discover SOA University", href: "/discover-soa" },
    { name: "Collaborate With Us", href: "/collaborate" },
    { name: "Contact Secretariat", href: "/contact" },
  ];

  const corridors = [
    "Bhubaneswar",
    "Bengaluru",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Chennai",
  ];

  return (
    <footer className="bg-canvas text-content-secondary border-t border-line mt-auto relative overflow-hidden">
      {/* ══════════════════════════════════════════════════════════════
          MAIN EDITORIAL GRID
          ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 border-b border-line">
          {/* Col 1: Institutional Essence (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative flex items-center justify-center rounded-full bg-glass-strong p-2 border border-line-strong group-hover:border-accent transition-colors shadow-md shrink-0 -mt-1">
                <img
                  src="/soa-logo.png"
                  alt="Siksha 'O' Anusandhan (SOA) Crest"
                  className="w-full h-full object-contain filter brightness-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-xl font-extrabold tracking-tight text-content leading-none inline-flex items-start">
                  ALLYSHIP
                  <span className="text-accent text-[0.62em] font-bold ml-1 -mt-0.5">
                    ++
                  </span>
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mt-1">
                  Siksha &lsquo;O&rsquo; Anusandhan
                </span>
                <span className="font-sans text-[9px] font-medium tracking-[0.04em] text-content-muted mt-0.5">
                  Deemed to be University · Category-1 Autonomy
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm sm:text-base font-normal tracking-[0.01em] text-content-secondary leading-relaxed max-w-lg border-l-2 border-accent/40 pl-4">
              Where academic rigour meets executive foresight, nurturing industry-ready talent through sustained corporate allyship.
            </p>



            <div className="flex flex-wrap gap-2 pt-1 text-xs font-sans">
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-medium text-[11px]">
                NIRF #15 in Universities
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-medium text-[11px]">
                NAAC A++ Grade
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-medium text-[11px]">
                Top 27 Overall India
              </span>
            </div>
          </div>

          {/* Col 2: Dossier Index (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="pb-2 border-b border-line">
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                Explore Dossiers
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-content-secondary hover:text-accent transition-colors py-1 border-b border-line/30 hover:border-accent inline-flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Executive Briefing & Direct Secretariat Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Executive Briefings
            </h4>
            <p className="font-sans text-xs text-content-muted leading-relaxed">
              Curated conclave executive summaries, policy digests, and Centre of Excellence opportunities.
            </p>

            {subscribed ? (
              <div className="p-3 bg-accent-subtle/40 border border-accent/40 rounded-xl flex items-center gap-2.5 text-xs text-content">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Subscribed to ALLYSHIP++ executive briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <div className="border-b border-line focus-within:border-accent transition-colors pb-2 flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full bg-transparent text-xs text-content placeholder-content-faint focus:outline-none py-1"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    aria-label="Subscribe"
                    className="text-accent hover:text-accent-hover text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    Join
                  </button>
                </div>

              </form>
            )}

            <div className="pt-4">
              <div className="text-[10px] font-sans uppercase tracking-wider text-content-faint mb-1.5">
                Secretariat Direct
              </div>
              <Link
                href="/contact"
                className="font-sans text-xs text-content-secondary hover:text-accent transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Contact Secretariat Desk</span>
                <ArrowRight className="w-3 h-3 text-content-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all ml-auto" />
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            CORRIDOR RIBBON (6 ECONOMIC HUBS)
            ══════════════════════════════════════════════════════════════ */}
        <div className="py-6 border-b border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-sans text-[11px] uppercase font-bold tracking-widest text-accent">
              Active Chapter Footprint
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs text-content-muted">
            {corridors.map((city, i) => (
              <span key={city} className="flex items-center gap-2.5 sm:gap-3.5">
                <span className="font-medium text-content">{city}</span>
                {i < corridors.length - 1 && (
                  <span className="text-content-faint select-none font-light">/</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM BAR (LEGAL & GOVERNANCE)
            ══════════════════════════════════════════════════════════════ */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-muted">
          <p>© 2026 Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-content transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-content transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-accent font-medium transition-colors">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
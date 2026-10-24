"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
    { name: "Community Circles", href: "/community" },
    { name: "Resource Library", href: "/resources" },
    { name: "Member Dashboard", href: "/dashboard" },
  ];

  return (
    <footer className="bg-canvas text-content-secondary pt-20 pb-12 border-t border-line mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-line">
          {/* Brand Column — 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 relative flex items-center justify-center rounded-full bg-glass-strong p-1.5 shadow-md border border-line-strong group-hover:border-accent transition-colors">
                <img
                  src="/soa-logo.png"
                  alt="Siksha 'O' Anusandhan (SOA) University Logo"
                  className="w-full h-full object-contain filter brightness-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-extrabold tracking-tight text-content leading-none">
                  ALLYSHIP<span className="text-accent">++</span>
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent mt-1">
                  Siksha &lsquo;O&rsquo; Anusandhan (SOA)
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted max-w-md">
              An invitation-only national conclave series bridging corporate leadership,
              emerging industry demands, and higher education excellence across India&apos;s
              major economic centers.
            </p>

            <div className="font-sans text-xs font-normal tracking-[0.01em] text-content-muted space-y-1">
              <p>NIRF Category: Top 15 in Universities • Top 27 Overall India</p>
              <p>Bhubaneswar • Bengaluru • Hyderabad • Kolkata • Mumbai • Chennai</p>
            </div>
          </div>

          {/* Navigation Links — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Explore Dossiers
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-content-secondary hover:text-content transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column — 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Executive Briefings
            </h4>
            <p className="font-sans text-xs font-normal tracking-[0.01em] text-content-muted leading-relaxed">
              Receive periodic policy digests, conclave executive summaries, and research
              collaboration opportunities directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 bg-glass border border-accent/30 rounded-xl flex items-center gap-3 text-xs text-content-secondary">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>You are subscribed to ALLYSHIP++ executive briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email"
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-glass border border-line text-xs text-content placeholder-slate-400 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-2 rounded-lg bg-accent text-on-accent hover:bg-accent-hover transition-colors disabled:opacity-50"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-muted">
          <p>© 2026 Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-content-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-content-secondary transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-content-secondary transition-colors">
              Contact Secretariat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

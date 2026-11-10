"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface PressHeadline {
  outlet: string;
  headline: string;
  conclaveTag: string;
  date: string;
  link: string;
}

const pressHeadlines: PressHeadline[] = [
  {
    outlet: "DECCAN CHRONICLE",
    headline: "Arshad Ayub & CXOs Deliberate on Organizational Allyship at Hyderabad",
    conclaveTag: "Hyderabad Conclave",
    date: "July 2024",
    link: "https://www.deccanchronicle.com/southern-states/allyship-conclave-focuses-on-leadership-and-collaboration-1812653",
  },
  {
    outlet: "THE HINDU / AROUND ODISHA",
    headline: "Siksha 'O' Anusandhan Convenes Industry-Academia Leadership Conclave in Chennai",
    conclaveTag: "Chennai Conclave",
    date: "August 2026",
    link: "/impact#press-archive",
  },
  {
    outlet: "ODISHA BYTES",
    headline: "70 Corporate Leaders Attend SOA's Inaugural Allyship++ Conclave at Bengaluru",
    conclaveTag: "Bengaluru Conclave",
    date: "June 2024",
    link: "https://odishabytes.com/70-corporate-leaders-attend-soas-allyship-event-at-bengaluru/",
  },
  {
    outlet: "PRAMEYA NEWS",
    headline: "Nilesh Kulkarni & Olympian Anand Menezes Address Allyship Conclave at Mumbai",
    conclaveTag: "Mumbai Conclave",
    date: "October 2025",
    link: "https://www.prameyanews.com/nilesh-kulkarni-addresses-soas-allyship-conclave-at-mumbai",
  },
  {
    outlet: "THE SAKALA",
    headline: "Olympic Gold Medalist Gurbux Singh & Corporate Leaders Deliberate Inclusion in Kolkata",
    conclaveTag: "Kolkata Conclave",
    date: "September 2024",
    link: "https://www.soa.ac.in/general-notifications/2024/9/30/soa-organises-allyship-conclave-at-kolkata",
  },
  {
    outlet: "THE STATESMAN",
    headline: "SOA Steps Directly into India's Metropolitan Boardrooms to Co-Create Talent Corridors",
    conclaveTag: "National Series",
    date: "2024–2026",
    link: "https://www.thestatesman.com/business/odisha-soa-ties-up-with-tech-mahindra-to-boost-industry-ready-skills-1503616250.html",
  },
];

export function PressTicker() {
  const repeatedHeadlines = [...pressHeadlines, ...pressHeadlines];

  return (
    <section className="border-y border-line bg-surface-2 py-5 sm:py-6 overflow-hidden select-none">
      {/* Top Header / Kicker */}
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 mb-3 sm:mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
            National Press &amp; Media Verification
          </span>
        </div>
        <Link
          href="/impact"
          className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-content-muted hover:text-accent transition-colors group"
        >
          <span>View All Press Archives</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Scrolling Ticker Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="press-ticker-track flex w-max items-center gap-5 sm:gap-6">
          {repeatedHeadlines.map((item, index) => (
            <a
              key={`${item.outlet}-${index}`}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-surface border border-line hover:border-accent/60 hover:shadow-md transition-all group shrink-0"
            >
              {/* Outlet Pill */}
              <span className="px-2.5 py-1 rounded-lg bg-surface-3 text-content font-mono font-bold text-[10px] tracking-wider border border-line/50 group-hover:border-accent/40 group-hover:text-accent transition-colors">
                {item.outlet}
              </span>

              {/* Headline */}
              <span className="font-sans text-xs sm:text-[13px] text-content-secondary group-hover:text-content font-medium transition-colors">
                &ldquo;{item.headline}&rdquo;
              </span>

              {/* Conclave Tag Badge */}
              <span className="font-mono text-[10px] font-semibold text-accent/90 bg-accent/10 px-2 py-0.5 rounded-md border border-accent/25 shrink-0 hidden md:inline-flex items-center gap-1">
                <span>{item.conclaveTag}</span>
                {item.link.startsWith("http") && <ExternalLink className="w-2.5 h-2.5 opacity-60" />}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Re-export as LogoTicker for zero-friction backwards compatibility
export const LogoTicker = PressTicker;

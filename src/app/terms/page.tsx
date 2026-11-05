import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Engagement | ALLYSHIP++",
  description: "Terms governing executive participation in ALLYSHIP++ conclaves and partnership platforms.",
};

export default function TermsPage() {
  return (
    <div className="bg-canvas min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-content-muted hover:text-accent transition-colors uppercase tracking-wider font-heading"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase shadow-sm">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Governance &amp; Engagement Charter</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-content tracking-tight leading-[1.05]">
            Terms of Engagement
          </h1>
          <p className="text-xs text-content-muted">
            Effective Date: January 1, 2026 • Siksha &lsquo;O&rsquo; Anusandhan Conclave Secretariat
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl space-y-8 text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-content">
              1. Executive Conclave Participation
            </h2>
            <p>
              Participation in ALLYSHIP++ conclaves across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai is strictly by invitation or verified executive delegation. Siksha &lsquo;O&rsquo; Anusandhan reserves the right to review and confirm delegation seats based on senior leadership capacity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              2. Centre of Excellence & Incubation Terms
            </h2>
            <p>
              Industry problem statements and proposals for campus Centres of Excellence (such as those established with Tech Mahindra and LTTS at ITER) are governed by bilateral Memoranda of Understanding (MoU) executed between SOA University and the sponsoring corporation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              3. Intellectual Property & Research Output
            </h2>
            <p>
              Collaborative research, patent filings, and prototype development conducted through the AIC-SOA Foundation (Atal Incubation Centre under NITI Aayog) adhere to established institutional intellectual property governance, ensuring shared ownership and fair commercialization frameworks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              4. Code of Conclave Conduct
            </h2>
            <p>
              All delegates, keynote speakers, and panelists commit to maintaining professional respect, constructive dialogue, and genuine allyship, fostering psychological safety for participating young researchers and students.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

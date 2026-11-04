import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ALLYSHIP++",
  description: "Our commitment to data privacy, non-commercialization, and user protection.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-canvas min-h-screen pt-24 sm:pt-32 pb-12">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 text-accent text-xs font-semibold border border-accent/30 font-heading">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Privacy & Institutional Data Ethics</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-content tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-content-muted">
            Effective Date: January 1, 2026 • Last Reviewed: Quarterly by Secretariat
          </p>
        </div>

        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl space-y-8 text-sm text-content-secondary leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              1. Our Core Privacy Philosophy
            </h2>
            <p>
              At ALLYSHIP++ and Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University), we believe that discussing leadership, strategic partnerships, and institutional data requires unconditional data safety. We do not sell, rent, monetize, or broker corporate or member data under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              2. Information We Collect
            </h2>
            <p>
              <strong className="text-content">Local Browser Storage:</strong> Your preferences and saved resources are saved directly on your local device (via browser localStorage). You retain full control to clear this data at any time.
            </p>
            <p>
              <strong className="text-content">Inquiries & Invitation Requests:</strong> When you request an executive conclave invitation or submit an industry problem statement, we collect your name, corporate email, designation, and organization details solely to process your request and coordinate with the Secretariat.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              3. Chatham House Rules & Conclave Deliberations
            </h2>
            <p>
              Executive roundtables at ALLYSHIP++ conclaves operate under Chatham House principles unless explicit prior authorization for media broadcast is established. Delegates are free to utilize the insights gained, but the identity or affiliation of speakers who voice confidential organizational hurdles is kept confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-content">
              4. Data Security & Storage
            </h2>
            <p>
              All submissions made via our platform are transmitted over encrypted TLS connections and stored securely in monitored infrastructure. Access is restricted to authorized personnel from the Office of Corporate Relations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { FAQS } from "@/data/faqs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroBackdrop } from "@/components/HeroBackdrop";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("General");
  const [organization, setOrganization] = useState("");
  const [preferredContact, setPreferredContact] = useState("Email");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
    ref?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please fill out all required fields (Name, Email, and Message).",
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subject || `${category} Inquiry`,
          category,
          organization,
          preferredContact,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatusMessage({
        type: "success",
        text: data.message,
        ref: data.referenceId,
      });

      setName("");
      setEmail("");
      setSubject("");
      setOrganization("");
      setMessage("");
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: err instanceof Error ? err.message : "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Secretariat & Executive Desk</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
            Contact the <br />
            <span className="text-accent">Conclave Secretariat</span>
          </h1>

          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Have an inquiry regarding upcoming Allyship++ conclave invitations, industry problem statements, Centre of Excellence partnerships, or campus talent collaborations with Siksha &lsquo;O&rsquo; Anusandhan? Connect directly with our Office of Corporate Relations and Placement in Bhubaneswar.
          </p>
        </div>
      </section>

      {/* 2. MAIN GRID: FORM & DETAILS */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-2xl space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-content tracking-tight">
                Send an Executive Message
              </h2>
              <p className="text-xs text-content-muted mt-1">
                Messages are directly received by the Office of Corporate Relations.
              </p>
            </div>

            {statusMessage && (
              <div
                role="alert"
                className={`p-4 rounded-2xl text-xs flex items-start gap-3 ${
                  statusMessage.type === "success"
                    ? "bg-success-bg border border-success-border text-success"
                    : "bg-danger-bg border border-danger-border text-danger-text"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-semibold">{statusMessage.text}</p>
                  {statusMessage.ref && (
                    <p className="text-[11px] text-success">
                      Reference ID: {statusMessage.ref}
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Jordan Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                    Corporate Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@enterprise.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-category" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                    Inquiry Category *
                  </label>
                  <select
                    id="contact-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content text-xs focus:outline-none focus:border-accent font-medium"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Partnership">Corporate / CoE Partnership</option>
                    <option value="Conclave">Conclave Delegation & Speaking</option>
                    <option value="Recruitment">Campus Recruitment & Hiring</option>
                    <option value="Media">Press & Media Relations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-org" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                    Organization / Company
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Global Tech Enterprise"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Summary of inquiry or proposal..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold font-heading text-content-secondary uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please include details regarding your proposal, chapter preferences, or timeline..."
                  className="w-full p-4 rounded-xl bg-surface-2 border border-line text-content placeholder-slate-500 text-xs focus:outline-none focus:border-accent resize-none leading-relaxed transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    "Dispatching Message..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-on-accent" />
                      <span>Send Message to Secretariat</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 bg-surface-2 rounded-xl text-xs text-content-muted flex items-center gap-2 border border-line">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>
                  Official SOA University Corporate Communications Channel. Response SLA: 48h.
                </span>
              </div>
            </form>
          </div>

          {/* Organizational Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-line shadow-2xl space-y-6">
              <h3 className="font-heading text-xl font-bold text-content tracking-tight">
                Secretariat Coordinates
              </h3>

              <div className="space-y-5 text-xs text-content-secondary">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line text-content flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-content block text-sm">Direct Email:</span>
                    <a href="mailto:info@soa.ac.in" className="hover:text-accent text-content-secondary">
                      info@soa.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line text-content flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-content block text-sm">Executive Response:</span>
                    <span className="text-content-secondary">Within 48 business hours (Mon – Fri)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line text-content flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold text-content block text-sm">Main Campus Headquarters:</span>
                    <span className="text-content-secondary">Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University), Khandagiri Square, Bhubaneswar, Odisha 751030</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-line">
                <span className="text-[11px] font-bold font-heading uppercase tracking-wider text-accent block mb-2">
                  Institutional Mandate
                </span>
                <p className="text-xs text-content-secondary leading-relaxed">
                  We convene Fortune 500 corporate leaders, Chief Human Resource Officers, technology VPs, and sporting legends to advance strategic talent readiness across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-20 pt-16 border-t border-line space-y-10">
          <div className="text-center max-w-5xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
              Instant Answers
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion faqs={FAQS} allowFilter={true} />
        </div>
      </section>
    </div>
  );
}

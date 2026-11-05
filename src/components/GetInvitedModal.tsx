"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Mail, Building2, User, Briefcase, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface GetInvitedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetInvitedModal({ isOpen, onClose }: GetInvitedModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [industry, setIndustry] = useState("Technology & Software");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !company.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Please provide a valid corporate email.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const ref = `ALLYSHIP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceId(ref);
      setSubmitted(true);

      if (typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ["#C9A96E", "#0C1426", "#E8D5A8", "#ffffff"],
          });
        } catch (err) {
          // Fallback
        }
      }
    }, 600);
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="invite-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-surface text-content rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-line">
        {/* Header */}
        <div className="bg-surface-2 p-6 sm:p-7 text-content flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-glass-strong border border-accent/30 flex items-center justify-center text-accent">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block">
                Executive Delegation
              </span>
              <h2 id="invite-modal-title" className="font-display text-xl sm:text-2xl font-bold tracking-[-0.025em] leading-[1.1] text-content">
                Request Executive Invitation
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full text-content-muted hover:text-content hover:bg-glass-strong transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent-subtle border border-accent/40 flex items-center justify-center text-accent mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-normal text-content">
                Delegation Request Received
              </h3>
              <p className="font-sans text-sm text-content-secondary max-w-md mx-auto leading-relaxed font-normal tracking-[0.01em]">
                Thank you for your interest in ALLYSHIP++. Our Conclave Secretariat will review your credentials and dispatch formal itinerary details.
              </p>
              <div className="p-4 bg-surface-2 rounded-xl border border-line max-w-xs mx-auto">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-muted block">
                  Reference Dossier Number
                </span>
                <span className="font-display text-base font-bold tracking-normal text-accent mt-1 block">
                  {referenceId}
                </span>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="font-display text-xs font-semibold tracking-normal px-8 py-3 rounded-full bg-accent text-on-accent hover:bg-accent-hover transition-colors shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div
                  id="invite-error"
                  role="alert"
                  className="p-3 bg-danger-bg border border-danger-border rounded-xl font-sans text-xs text-danger-text"
                >
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="invite-full-name"
                    className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="invite-full-name"
                      type="text"
                      required
                      aria-invalid={errorMsg ? true : undefined}
                      aria-describedby={errorMsg ? "invite-error" : undefined}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Mahindra"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2 placeholder-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="invite-email"
                    className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                  >
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="invite-email"
                      type="email"
                      required
                      aria-invalid={errorMsg ? true : undefined}
                      aria-describedby={errorMsg ? "invite-error" : undefined}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="executive@organization.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2 placeholder-zinc-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="invite-company"
                    className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                  >
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="invite-company"
                      type="text"
                      required
                      aria-invalid={errorMsg ? true : undefined}
                      aria-describedby={errorMsg ? "invite-error" : undefined}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Microsoft India"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2 placeholder-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="invite-designation"
                    className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                  >
                    Designation / Title
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="invite-designation"
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="e.g. Chief People Officer"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2 placeholder-zinc-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="invite-industry"
                  className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                >
                  Industry Vertical
                </label>
                <select
                  id="invite-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2"
                >
                  <option value="Technology & Software">Technology &amp; Software / IT Services</option>
                  <option value="Global Capability Center (GCC)">Global Capability Center (GCC)</option>
                  <option value="Banking & Financial Services">Banking, Financial Services &amp; Insurance</option>
                  <option value="Manufacturing & Core Engineering">Manufacturing, Auto &amp; Engineering</option>
                  <option value="Healthcare & Life Sciences">Healthcare, Biotech &amp; Life Sciences</option>
                  <option value="Consulting & Professional Services">Consulting &amp; Professional Services</option>
                  <option value="Public Policy & Sports Administration">Public Policy, Sports &amp; Governance</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="invite-message"
                  className="block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary mb-1.5"
                >
                  Specific Collaboration Interest (Optional)
                </label>
                <textarea
                  id="invite-message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Executive panel participation, sponsored research labs, student hiring..."
                  className="w-full p-3 rounded-xl border border-line font-sans text-sm focus:outline-none focus:border-accent text-content bg-surface-2 placeholder-zinc-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 font-sans text-[11px] text-content-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Complimentary • By Invitation Only</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-display text-xs font-semibold uppercase tracking-wider shadow-sm transition-all disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Submit Request"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-on-accent" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

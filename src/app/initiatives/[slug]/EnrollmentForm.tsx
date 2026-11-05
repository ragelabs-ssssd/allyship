"use client";

import React, { useState } from "react";
import { Initiative } from "@/lib/types";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface EnrollmentFormProps {
  initiative: Initiative;
}

export function InitiativeEnrollmentForm({ initiative }: EnrollmentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [motivation, setMotivation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const code = `INIT-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmationCode(code);
      setSubmitted(true);

      if (typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#C5A869", "#D4B97B", "#10b981", "#fbbf24"],
          });
        } catch (err) {
          // Fallback
        }
      }
    }, 500);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-success-bg rounded-2xl border border-success-border text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-success-bg text-success mx-auto flex items-center justify-center border border-success-border">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-content">Application Recorded!</h3>
        <p className="text-xs text-content-muted">
          Thank you, <strong className="text-content">{name}</strong>. Your enrollment inquiry for{" "}
          <strong className="text-content">{initiative.title}</strong> has been logged under reference{" "}
          <span className="font-bold font-heading text-success">{confirmationCode}</span>.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-success hover:text-success underline transition-colors"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-base font-bold text-content">Enroll or Inquire for Next Cohort</h3>
        <p className="text-xs text-content-muted mt-0.5">
          Reserve a seat in this upcoming learning track. All core materials are free.
        </p>
      </div>

      {errorMsg && (
        <div className="p-2.5 bg-danger-bg text-danger-text text-xs rounded-xl border border-danger-border">
          {errorMsg}
        </div>
      )}

      <div>
        <label htmlFor="enroll-name" className="block text-xs font-semibold text-content-secondary mb-1">
          Full Name *
        </label>
        <input
          id="enroll-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Maya Chen"
          className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="enroll-email" className="block text-xs font-semibold text-content-secondary mb-1">
          Email Address *
        </label>
        <input
          id="enroll-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="maya@example.com"
          className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="enroll-role" className="block text-xs font-semibold text-content-secondary mb-1">
          Current Role / Organization (Optional)
        </label>
        <input
          id="enroll-role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. Software Engineer / Student"
          className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="enroll-motivation" className="block text-xs font-semibold text-content-secondary mb-1">
          What do you hope to learn or apply? (Optional)
        </label>
        <textarea
          id="enroll-motivation"
          rows={3}
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Share your goals or challenges..."
          className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              <span>Submit Enrollment Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-content-muted justify-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-success" />
        <span>Strict privacy. We never share attendee lists.</span>
      </div>
    </form>
  );
}

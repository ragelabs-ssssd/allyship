"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Heart, ArrowRight, Download, Check } from "lucide-react";
import { savePledge, getStoredPledge } from "@/lib/storage";
import confetti from "canvas-confetti";
import Link from "next/link";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FOCUS_OPTIONS = [
  { id: "workplace", label: "Workplace & Professional Teams", desc: "Interrupt meeting bias & sponsor underrepresented talent." },
  { id: "community", label: "Public Spaces & Neighborhoods", desc: "Practice active bystander intervention & crisis de-escalation." },
  { id: "digital", label: "Digital & Online Communities", desc: "Moderate harmful rhetoric & amplify silenced perspectives." },
  { id: "education", label: "Education & Youth Pipelines", desc: "Mentor first-generation students & eliminate barriers." },
  { id: "policy", label: "Institutional & Policy Reform", desc: "Advocate for fair compensation, parental care, and access." },
];

const COMMITMENTS = [
  {
    id: "c1",
    title: "Listen with Curiosity, Not Defense",
    text: "I commit to receiving feedback regarding bias with humility, avoiding defensiveness, and centering the impact over my intention.",
  },
  {
    id: "c2",
    title: "Interrupt Exclusion in Real Time",
    text: "I commit to speaking up or intervening using the 5Ds framework whenever I witness discrimination, microaggressions, or unfair treatment.",
  },
  {
    id: "c3",
    title: "Share Power & Amplify Voices",
    text: "I commit to spending my social and professional capital to sponsor peers, share credit, and ensure diverse representation in decision-making.",
  },
];

export function PledgeModal({ isOpen, onClose }: PledgeModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedFocus, setSelectedFocus] = useState<string[]>(["workplace", "community"]);
  const [agreedCommitments, setAgreedCommitments] = useState<string[]>(["c1", "c2", "c3"]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issuedDate, setIssuedDate] = useState("October 2026");
  const dialogRef = useFocusTrap(isOpen);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
      setIssuedDate(new Date().toLocaleDateString());
      document.body.style.overflow = "hidden";
      const existing = getStoredPledge();
      if (existing) {
        setFullName(existing.name);
        setEmail(existing.email);
        setSelectedFocus(existing.focusAreas);
        setAgreedCommitments(existing.commitments);
        setCertificateId(existing.certificateNumber);
        if (existing.createdAt) {
          setIssuedDate(new Date(existing.createdAt).toLocaleDateString());
        }
      }
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

  const toggleFocus = (id: string) => {
    if (selectedFocus.includes(id)) {
      if (selectedFocus.length > 1) {
        setSelectedFocus(selectedFocus.filter((item) => item !== id));
      }
    } else {
      setSelectedFocus([...selectedFocus, id]);
    }
  };

  const toggleCommitment = (id: string) => {
    if (agreedCommitments.includes(id)) {
      setAgreedCommitments(agreedCommitments.filter((item) => item !== id));
    } else {
      setAgreedCommitments([...agreedCommitments, id]);
    }
  };

  const handleCompletePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg("Please enter your name for the certificate.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }
    if (agreedCommitments.length < 2) {
      setErrorMsg("Please affirm at least two core commitments.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    const generatedId = `ALLY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const pledgeData = {
      id: "pledge-" + Date.now(),
      name: fullName.trim(),
      email: email.trim(),
      focusAreas: selectedFocus,
      commitments: agreedCommitments,
      createdAt: new Date().toISOString(),
      certificateNumber: generatedId,
    };

    savePledge(pledgeData);
    setCertificateId(generatedId);
    setIsSubmitting(false);
    setStep(4);

    if (typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A869", "#D4B97B", "#10b981", "#fbbf24"],
        });
      } catch (err) {
        // Confetti fallback
      }
    }
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pledge-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl border border-line overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-surface-2 text-content p-6 sm:p-8 flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-accent">
                Official Declaration
              </span>
              <h2 id="pledge-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-content">
                The Allyship Pledge
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-glass-strong hover:bg-glass-strong text-content-muted hover:text-content flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="bg-surface-sunken px-6 py-3 border-b border-line flex items-center justify-between text-xs text-content-muted font-medium">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 1 ? 'bg-accent text-on-accent' : 'bg-glass-strong text-content-muted'}`}>1</span>
            <span className={step === 1 ? 'text-content font-semibold' : ''}>Focus Areas</span>
          </div>
          <div className="w-8 h-[2px] bg-glass-strong" />
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 2 ? 'bg-accent text-on-accent' : 'bg-glass-strong text-content-muted'}`}>2</span>
            <span className={step === 2 ? 'text-content font-semibold' : ''}>Commitments</span>
          </div>
          <div className="w-8 h-[2px] bg-glass-strong" />
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step >= 3 ? 'bg-accent text-on-accent' : 'bg-glass-strong text-content-muted'}`}>3</span>
            <span className={step === 3 ? 'text-content font-semibold' : ''}>Affirmation</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-content">Where do you want to practice active allyship?</h3>
                <p className="text-sm text-content-muted mt-1">
                  Choose one or more areas where you hold influence or wish to deepen your everyday solidarity.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {FOCUS_OPTIONS.map((opt) => {
                  const selected = selectedFocus.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleFocus(opt.id)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex items-start gap-3.5 ${
                        selected
                          ? "border-accent bg-accent-subtle shadow-xl"
                          : "border-line hover:border-line-strong bg-surface-2"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center text-xs transition-colors ${
                          selected ? "bg-accent text-on-accent" : "border border-line-strong bg-transparent"
                        }`}
                      >
                        {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-content">{opt.label}</div>
                        <div className="text-xs text-content-muted mt-0.5">{opt.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  Continue to Commitments
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-content">Affirm Your Core Commitments</h3>
                <p className="text-sm text-content-muted mt-1">
                  Allyship is defined by consistent habits, not passive agreement. Affirm these principles:
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {COMMITMENTS.map((item) => {
                  const agreed = agreedCommitments.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCommitment(item.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        agreed
                          ? "border-success-border bg-success-bg shadow-xl"
                          : "border-line hover:border-line-strong bg-surface-2"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full mt-0.5 flex items-center justify-center text-xs transition-colors ${
                          agreed ? "bg-success text-on-success" : "border border-line-strong bg-transparent"
                        }`}
                      >
                        {agreed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-content">{item.title}</div>
                        <p className="text-xs text-content-muted mt-1 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-content-muted hover:text-content font-semibold transition-colors"
                >
                  ← Back to Focus Areas
                </button>
                <button
                  type="button"
                  disabled={agreedCommitments.length < 2}
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent disabled:opacity-50 text-sm font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  Continue to Confirmation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleCompletePledge} className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-content">Personalize Your Allyship Declaration</h3>
                <p className="text-sm text-content-muted mt-1">
                  We generate your personalized Allyship Certificate and add your participation to your local device dashboard.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-danger-bg text-danger-text text-xs rounded-xl border border-danger-border">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3 pt-2">
                <div>
                  <label htmlFor="pledge-name" className="block text-xs font-semibold text-content-secondary mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="pledge-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Jordan Bennett"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="pledge-email" className="block text-xs font-semibold text-content-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    id="pledge-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-content placeholder-zinc-500 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <p className="text-[11px] text-content-muted mt-1">
                    Used strictly to store your certificate in your browser. We never sell or spam your data.
                  </p>
                </div>

                <div className="p-3.5 bg-surface-2 border border-accent/30 rounded-2xl flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <p className="text-xs text-content-secondary leading-relaxed">
                    By taking this pledge, you commit to practicing empathy, continuous learning, and active solidarity in your spheres of influence.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-content-muted hover:text-content font-semibold transition-colors"
                >
                  ← Back to Commitments
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold flex items-center gap-2 transition-all shadow-md"
                >
                  {isSubmitting ? "Generating..." : "Affirm & Take Pledge"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="space-y-5 text-center py-2">
              <div className="w-14 h-14 rounded-full bg-success-bg text-success mx-auto flex items-center justify-center border border-success-border">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-success">
                  Pledge Confirmed
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-content mt-1">
                  Thank You for Standing with Us, {fullName}!
                </h3>
                <p className="text-xs text-content-muted max-w-md mx-auto mt-1.5">
                  You are now recognized as an active Allyship advocate. Your declaration has been registered.
                </p>
              </div>

              {/* Certificate Preview Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-canvas text-content text-left relative overflow-hidden border border-line shadow-xl">
                <div className="absolute top-0 right-0 w-36 h-36 bg-accent-subtle rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between text-xs text-[#E8D5A7]">
                  <span>ALLYSHIP++ · SOA UNIVERSITY</span>
                  <span>{certificateId}</span>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                    Certificate of Active Allyship
                  </div>
                  <div className="text-xl font-bold text-content mt-1 tracking-tight">
                    {fullName}
                  </div>
                  <p className="text-xs text-content-secondary mt-2 italic leading-relaxed">
                    “Has made a solemn commitment to listen with curiosity, interrupt discrimination, and actively empower underrepresented communities.”
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-line flex items-center justify-between text-[11px] text-content-muted">
                  <span>Issued: {issuedDate}</span>
                  <span className="text-success flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Advocate
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  Go to Ally Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-glass-strong hover:bg-glass-strong text-content-secondary text-xs font-semibold transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

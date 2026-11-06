"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  Sliders,
  Scale,
  Building2,
  Zap,
} from "lucide-react";

export interface LitmusQuestion {
  id: string;
  number: string;
  title: string;
  question: string;
  rubric: string;
}

interface LitmusConceptSwitcherProps {
  questions: LitmusQuestion[];
}

export function LitmusConceptSwitcher({ questions }: LitmusConceptSwitcherProps) {
  const [selectedConcept, setSelectedConcept] = useState<number>(1);

  // States for Concept 1 (Interactive Simulator)
  const [activeScenario, setActiveScenario] = useState<number>(0);

  // States for Concept 2 (The Three Gateways)
  const [activeGateway, setActiveGateway] = useState<number>(0);

  // States for Concept 3 (Comparison Matrix View)
  const [matrixFilter, setMatrixFilter] = useState<"all" | "performative" | "authentic">("all");

  // States for Concept 4 (3-Tier Stepping Stack)
  const [activeStep, setActiveStep] = useState<number>(0);

  // States for Concept 5 (Live Scorecard)
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    cost: true,
    outcome: true,
    integrity: false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scoreCount = Object.values(checkedItems).filter(Boolean).length;

  const conceptOptions = [
    { id: 1, name: "Option 1: Executive Diagnostic Simulator", tag: "Interactive" },
    { id: 2, name: "Option 2: The Three Sovereign Gateways", tag: "Monolithic" },
    { id: 3, name: "Option 3: Authentic vs. Performative Matrix", tag: "High-Contrast" },
    { id: 4, name: "Option 4: 3-Tier Sovereign Audit Stack", tag: "Progressive" },
    { id: 5, name: "Option 5: Executive Bento & Live Scorecard", tag: "Gamified" },
  ];

  const scenarios = [
    {
      title: "Closed-Door Talent Calibration Review",
      context: "A high-performing junior engineer from an underrepresented background is passed over for lead architect in a private calibration committee.",
      criterion: "Criterion 01 · Personal Cost Test",
      question: "Does it cost the leader comfort, time, or political capital?",
      performative: "Remaining silent during the calibration to preserve peer alignment, then sending a private sympathetic email later.",
      authentic: "Intervening directly in the room, citing production deliverables, and spending political capital to contest the rating.",
      dividend: "Direct elevation into stretch project leadership with documented P&L visibility.",
    },
    {
      title: "High-Stakes Multi-Million Enterprise Pitch",
      context: "Selecting the technical presenter for a marquee Fortune 500 partnership renewal.",
      criterion: "Criterion 02 · Outcome Shift Test",
      question: "Does it tangibly change what happens to the colleague?",
      performative: "Assigning the junior colleague to build backend pitch slides without client-facing presentation credit.",
      authentic: "Stepping back from the podium to sponsor the emerging engineer to co-deliver the keynote before global CXOs.",
      dividend: "Verified promotion trajectory acceleration and external institutional recognition.",
    },
    {
      title: "Informal Hallway Slighting & Credit Theft",
      context: "During an executive steering session, a senior stakeholder takes unearned credit for an architecture developed by a junior team member.",
      criterion: "Criterion 03 · Unobserved Integrity Test",
      question: "Would it still happen behind closed doors if no one were watching?",
      performative: "Laughing along politely in the room to avoid awkward tension, then quietly offering comfort off the record.",
      authentic: "Calmly and publicly clarifying attribution immediately: 'Actually, that architecture was designed and validated by Priya.'",
      dividend: "Zero-tolerance psychological safety embedded as a daily operational standard.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* LOCAL SWITCHER BAR - Floating control bar for quick selection */}
      <div className="p-4 rounded-3xl bg-surface-2 border border-accent/30 shadow-2xl space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
          <div className="flex items-center gap-2 text-xs font-bold font-heading uppercase tracking-widest text-accent">
            <Sliders className="w-4 h-4" />
            <span>Interactive Concept Selector (Choose Your Favorite)</span>
          </div>
          <span className="text-[11px] text-content-secondary font-mono">
            Active: <strong className="text-content">{conceptOptions[selectedConcept - 1].name}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {conceptOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedConcept(opt.id)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                selectedConcept === opt.id
                  ? "bg-accent text-canvas border-accent shadow-lg font-bold"
                  : "bg-surface text-content-secondary border-line hover:border-accent/40 hover:text-content"
              }`}
            >
              <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                {opt.tag}
              </div>
              <div className="text-xs font-heading font-semibold mt-0.5 line-clamp-1">
                {opt.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          OPTION 1: THE INTERACTIVE EXECUTIVE DIAGNOSTIC SIMULATOR
          ========================================================================= */}
      {selectedConcept === 1 && (
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Diagnostic Simulator · Real Corporate Calibrations</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              The Authenticity <span className="text-accent">Litmus Simulator</span>
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
              Real leadership isn&apos;t judged by corporate HR slogans. Toggle live enterprise calibration scenarios to see how authentic allyship separates from performative optics.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {scenarios.map((sc, idx) => (
              <button
                key={sc.title}
                type="button"
                onClick={() => setActiveScenario(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-heading transition-all ${
                  activeScenario === idx
                    ? "bg-accent text-canvas shadow-lg"
                    : "bg-surface border border-line text-content-secondary hover:text-content hover:border-accent/40"
                }`}
              >
                Case 0{idx + 1}: {sc.title.split(" ")[0]} {sc.title.split(" ")[1]}
              </button>
            ))}
          </div>

          {/* Active Diagnostic Simulation Card */}
          <div className="rounded-3xl p-8 sm:p-12 bg-surface border border-line shadow-2xl relative overflow-hidden space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-bold font-heading uppercase tracking-widest text-accent block">
                {scenarios[activeScenario].criterion}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-content">
                {scenarios[activeScenario].title}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary italic">
                &ldquo;{scenarios[activeScenario].context}&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Performative Path */}
              <div className="rounded-2xl p-6 bg-red-950/20 border border-red-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-heading uppercase tracking-widest text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    Performative Reaction
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                    Fails Litmus Test
                  </span>
                </div>
                <p className="text-sm text-content-secondary leading-relaxed font-normal">
                  {scenarios[activeScenario].performative}
                </p>
                <div className="pt-2 text-xs text-red-400/80 font-mono">
                  Result: Zero career trajectory shift · Institutional silence
                </div>
              </div>

              {/* Authentic Allyship Path */}
              <div className="rounded-2xl p-6 bg-accent-subtle/40 border border-accent/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-heading uppercase tracking-widest text-accent flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Authentic Allyship Action
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/30 font-bold">
                    Passes Litmus Test
                  </span>
                </div>
                <p className="text-sm text-content leading-relaxed font-normal">
                  {scenarios[activeScenario].authentic}
                </p>
                <div className="pt-2 text-xs text-accent font-mono flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Dividend: {scenarios[activeScenario].dividend}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          OPTION 2: THE THREE SOVEREIGN GATEWAYS (MONOLITHIC FOCUS)
          ========================================================================= */}
      {selectedConcept === 2 && (
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tripartite Executive Guardrail</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              The Three Sovereign Gateways of <span className="text-accent">Authenticity</span>
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
              Synthesized from 40+ CXO regional conclaves across India. Select any gateway to inspect the non-negotiable benchmark.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gateway Nav Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setActiveGateway(idx)}
                  className={`w-full text-left p-6 rounded-3xl transition-all border flex items-center justify-between group ${
                    activeGateway === idx
                      ? "bg-surface border-accent shadow-xl ring-1 ring-accent"
                      : "bg-surface/50 border-line hover:border-accent/40"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold font-heading text-accent block">
                      Gateway 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-content">
                      {q.title}
                    </h3>
                    <p className="text-xs text-content-secondary line-clamp-1">
                      {q.question}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeGateway === idx ? "text-accent translate-x-1" : "text-content-faint"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Gateway Detail Monolith */}
            <div className="lg:col-span-7 rounded-3xl p-8 sm:p-12 bg-surface border border-accent/30 shadow-2xl space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <span className="text-xs font-bold font-heading uppercase tracking-widest text-accent">
                  Mandatory Leadership Benchmark · Gateway 0{activeGateway + 1}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-content">
                  {questions[activeGateway].title}
                </h3>
                <blockquote className="p-4 rounded-2xl bg-surface-2 border-l-4 border-accent text-base sm:text-lg text-content italic font-heading">
                  &ldquo;{questions[activeGateway].question}&rdquo;
                </blockquote>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
                  {questions[activeGateway].rubric}
                </p>
              </div>

              <div className="pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <span className="font-bold text-content block">Audit Standard</span>
                  <span className="text-content-secondary">
                    Non-negotiable evaluation metric in annual leadership calibrations.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <span className="font-bold text-accent block">Institutional Dividend</span>
                  <span className="text-content-secondary">
                    Sustained 94.54% placement velocity and zero-day executive readiness.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          OPTION 3: AUTHENTIC VS. PERFORMATIVE MATRIX (HIGH-CONTRAST)
          ========================================================================= */}
      {selectedConcept === 3 && (
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>Comparative Integrity Audit</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              The Performative vs. <span className="text-accent">Authentic Matrix</span>
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
              How CXOs across 5 commercial conclaves draw the hard dividing line between superficial brand optics and genuine institutional power.
            </p>
          </div>

          {/* 3 Comparative Rows */}
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-3xl p-8 bg-surface border border-line shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-[11px] font-bold font-heading text-accent uppercase tracking-widest">
                    Criterion 0{idx + 1}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-content">
                    {q.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary italic">
                    &ldquo;{q.question}&rdquo;
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Performative Side */}
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" />
                      Performative (Optics)
                    </span>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {idx === 0 && "Statements of solidarity on LinkedIn with zero personal risk or expenditure of political currency."}
                      {idx === 1 && "Occasional coffee mentorship chats that provide sympathetic advice without ever altering project assignments."}
                      {idx === 2 && "Vocal advocacy during all-hands townhalls that disappears during closed-door promotion reviews."}
                    </p>
                  </div>

                  {/* Authentic Side */}
                  <div className="p-5 rounded-2xl bg-accent-subtle/50 border border-accent/40 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Authentic Allyship
                    </span>
                    <p className="text-xs text-content leading-relaxed font-normal">
                      {idx === 0 && "Spending reputational capital to nominate underrepresented talent for high-stakes P&L roles."}
                      {idx === 1 && "Verifiable outcomes: compensation parity, promotion velocity, and formal executive sponsorship."}
                      {idx === 2 && "Unyielding defense of colleagues behind closed doors when zero public applause points exist."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          OPTION 4: 3-TIER SOVEREIGN AUDIT STACK (PROGRESSIVE STEPPING)
          ========================================================================= */}
      {selectedConcept === 4 && (
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>Progressive Audit Pipeline</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              The 3-Tier Sovereign <span className="text-accent">Audit Stack</span>
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
              A sequential leadership filter. Every initiative must sequentially clear all three verification gates to qualify as authentic Allyship++.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-3xl p-8 bg-surface border border-line shadow-xl space-y-6 flex flex-col justify-between relative group hover:border-accent/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-accent-subtle border border-accent/30 text-accent font-mono font-bold text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-surface-2 border border-line text-content-secondary">
                      Tier 0{idx + 1} Gate
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-content">
                    {q.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-heading italic text-accent-light">
                    &ldquo;{q.question}&rdquo;
                  </p>

                  <p className="text-xs text-content-secondary leading-relaxed font-normal pt-2 border-t border-line">
                    {q.rubric}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between text-xs">
                  <span className="text-content-secondary">Gate Status</span>
                  <span className="text-accent font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    Mandatory
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          OPTION 5: EXECUTIVE BENTO & LIVE SCORECARD (GAMIFIED EVALUATION)
          ========================================================================= */}
      {selectedConcept === 5 && (
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>60-Second Leadership Self-Assessment</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              The Authenticity <span className="text-accent">Scorecard &amp; Bento</span>
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
              Evaluate your enterprise allyship practices in 60 seconds against the three benchmarks co-engineered with 500+ Indian CXOs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Interactive Checklist (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-surface border border-line shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold font-heading uppercase tracking-widest text-accent">
                  Interactive Evaluation Rubric
                </span>
                <h3 className="font-heading text-2xl font-bold text-content">
                  Self-Assess Your Institutional Impact
                </h3>
              </div>

              <div className="space-y-4">
                {questions.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => toggleCheck(q.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                      checkedItems[q.id]
                        ? "bg-accent-subtle/40 border-accent/50 text-content"
                        : "bg-surface-2 border-line text-content-secondary hover:border-accent/30"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                        checkedItems[q.id]
                          ? "bg-accent text-canvas border-accent"
                          : "border-line bg-surface"
                      }`}
                    >
                      {checkedItems[q.id] && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <div className="space-y-1">
                      <span className="font-heading text-sm font-bold text-content block">
                        {q.title}
                      </span>
                      <p className="text-xs text-content-secondary italic">
                        &ldquo;{q.question}&rdquo;
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Scorecard Status (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-surface border border-accent/40 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="space-y-4">
                <span className="text-[11px] font-bold font-heading uppercase tracking-widest text-accent">
                  Real-Time Calibration
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-5xl sm:text-6xl font-bold text-accent">
                    {Math.round((scoreCount / 3) * 100)}%
                  </span>
                  <span className="text-xs text-content-secondary">
                    Authenticity Compliance Index
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-surface-2 border border-line space-y-2">
                  <span className="text-xs font-bold text-content block">
                    {scoreCount === 3
                      ? "Tier 1: Authentic Institutional Ally"
                      : scoreCount === 2
                      ? "Tier 2: Developing Ally (Action Gap Detected)"
                      : "Performative Zone: High Optics, Low Outcome"}
                  </span>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {scoreCount === 3
                      ? "Your organization satisfies all 3 mandatory criteria: leaders invest personal capital, deliver verifiable career shifts, and defend talent behind closed doors."
                      : "Authentic allyship requires unobserved closed-door advocacy and tangible outcome shifts rather than symbolic solidarity."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-accent-subtle/50 border border-accent/30 text-xs space-y-1">
                <span className="font-bold text-accent block">The Tuesday Afternoon Rule</span>
                <span className="text-content-secondary">
                  Culture is defined not by your website mission statement, but by what happens on an ordinary Tuesday in confidential calibration rooms.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
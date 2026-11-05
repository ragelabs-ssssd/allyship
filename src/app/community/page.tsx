"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  ShieldCheck,
  Heart,
  MessageSquare,
  CheckCircle2,
  Lock,
  ArrowRight,
  Send,
} from "lucide-react";
import { COMMUNITY_EVENTS } from "@/data/communityEvents";
import { EventCard } from "@/components/EventCard";
import { PledgeModal } from "@/components/PledgeModal";

export default function CommunityPage() {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [reflectionInput, setReflectionInput] = useState("");
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  const workingCircles = [
    {
      title: "Workplace & Technology Allies",
      desc: "For engineers, managers, and designers tackling meeting equity, sponsorship pipelines, and hiring algorithms.",
      cadence: "Bi-weekly Thursdays",
      memberBadge: "Open Membership",
    },
    {
      title: "Neurodiversity & Universal Design Circle",
      desc: "Autistic, ADHD, and neurotypical professionals collaborating on sensory-friendly hybrid work norms.",
      cadence: "1st & 3rd Wednesday",
      memberBadge: "Safe Space",
    },
    {
      title: "First-Generation Scholars & Allies",
      desc: "Pairing first-gen university scholars with industry mentors to navigate career advancement and financial equity.",
      cadence: "Monthly Weekends",
      memberBadge: "Mentorship Hub",
    },
    {
      title: "Healthcare & Patient Advocacy Guild",
      desc: "Clinicians and patient advocates examining disparities in clinical trials, maternal health, and diagnosis bias.",
      cadence: "Monthly Roundtables",
      memberBadge: "Specialized Guild",
    },
  ];

  const guidelines = [
    {
      title: "1. The Chatham House Rule",
      text: "Participants are free to use the information received, but neither the identity nor the affiliation of the speaker may be revealed.",
    },
    {
      title: "2. Impact Over Intent",
      text: "When called in on harmful language or assumptions, we listen with curiosity rather than prioritizing our good intentions.",
    },
    {
      title: "3. Equal Airtime & No Dominance",
      text: "Facilitators actively balance speaking time so that louder voices make room for quieter or marginalized participants.",
    },
    {
      title: "4. Zero Tolerance for Harassment",
      text: "Hate speech, personal attacks, doxxing, or tone policing result in immediate removal without appeal.",
    },
  ];

  const handleReflectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reflectionInput.trim().length > 5) {
      setReflectionSubmitted(true);
      setReflectionInput("");
    }
  };

  const filteredEvents =
    selectedFormat === "All"
      ? COMMUNITY_EVENTS
      : COMMUNITY_EVENTS.filter((e) => e.format.includes(selectedFormat));

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-12 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-line text-accent text-xs font-semibold font-heading uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-accent" />
          <span>A Welcoming, Inclusive Community</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-content tracking-tight font-heading">
          Where Allies Connect, Learn & Act
        </h1>

        <p className="text-base text-content-muted leading-relaxed font-normal">
          Welcome to the Allyship community space. Here, learners, advocates, and organizers assemble to share unvarnished experiences, practice bystander intervention, and foster mutual accountability.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsPledgeModalOpen(true)}
            className="btn-primary"
          >
            <span>Join the Community (Take Pledge)</span>
          </button>
          <a
            href="#events"
            className="btn-secondary"
          >
            Explore Upcoming Events
          </a>
        </div>
      </section>

      {/* 2. Community Working Circles */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1 font-heading">
            Peer Learning Groups
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-content tracking-tight font-heading">
            Active Community Circles
          </h2>
          <p className="text-sm text-content-muted mt-1 max-w-xl">
            Bi-weekly and monthly dialogue cohorts organized around specific domains of practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingCircles.map((circle) => (
            <div
              key={circle.title}
              className="bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl hover:border-accent transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full bg-surface-2 text-accent border border-line">
                    {circle.memberBadge}
                  </span>
                  <span className="text-xs text-content-muted font-medium">{circle.cadence}</span>
                </div>

                <h3 className="text-lg font-bold text-content font-heading">{circle.title}</h3>
                <p className="text-xs sm:text-sm text-content-muted mt-2 leading-relaxed font-normal">
                  {circle.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-line flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsPledgeModalOpen(true)}
                  className="text-xs font-bold text-accent hover:text-content inline-flex items-center gap-1 font-heading transition-colors"
                >
                  <span>Request to Join Circle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Upcoming Events Calendar */}
      <section id="events" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1 font-heading">
              Interactive Gatherings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-content tracking-tight font-heading">
              Upcoming Events & Workshops
            </h2>
            <p className="text-sm text-content-muted mt-1">
              RSVP to participate in live, moderated workshops. Free and open to registered allies.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {["All", "Workshop", "Circle", "Discussion"].map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all font-heading ${
                  selectedFormat === fmt
                    ? "bg-accent text-on-accent shadow-xs font-bold"
                    : "bg-surface-2 text-content-secondary hover:bg-glass-strong border border-line"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </section>

      {/* 4. Safety, Moderation & Guidelines Charter */}
      <section className="bg-gradient-to-br from-surface-2 via-surface to-canvas text-content rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-line">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent font-heading">
            <Lock className="w-4 h-4" />
            Safety, Moderation & Privacy Charter
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-content tracking-tight font-heading">
            How We Protect Vulnerability and Safety
          </h2>

          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-normal">
            Meaningful discussion about systemic bias requires emotional vulnerability. We safeguard this space through strict, non-negotiable community norms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {guidelines.map((g) => (
              <div key={g.title} className="p-4 rounded-2xl bg-glass border border-line space-y-1.5">
                <h4 className="text-sm font-bold text-accent font-heading">{g.title}</h4>
                <p className="text-xs text-content-secondary leading-relaxed font-normal">{g.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between text-xs text-content-muted gap-4">
            <span>Moderated by trained restorative justice facilitators.</span>
            <Link href="/contact" className="text-accent hover:underline">
              Report a Safety or Conduct Concern
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reflection of the Month */}
      <section className="bg-surface rounded-3xl p-8 border border-line shadow-xl max-w-3xl mx-auto w-full space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-content-muted font-heading">
            Monthly Community Reflection Prompt
          </span>
        </div>

        <h3 className="text-lg font-bold text-content font-heading">
          “What is one unwritten rule in your industry that advantages people from certain backgrounds?”
        </h3>

        <p className="text-xs text-content-muted leading-relaxed font-normal">
          Take a moment to reflect. Responses are submitted anonymously to our internal learning team for quarterly case study synthesis.
        </p>

        {reflectionSubmitted ? (
          <div className="p-4 rounded-2xl bg-success-bg border border-success-border text-xs text-success flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
            <span>Thank you for sharing your reflection. Your insight helps refine our curriculum.</span>
          </div>
        ) : (
          <form onSubmit={handleReflectionSubmit} className="space-y-3 pt-2">
            <textarea
              rows={3}
              value={reflectionInput}
              onChange={(e) => setReflectionInput(e.target.value)}
              placeholder="Share an anonymous observation or lived reflection..."
              className="w-full p-4 rounded-2xl border border-line text-xs text-content focus:outline-none focus:border-accent resize-none bg-surface-2 placeholder-slate-500"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={reflectionInput.trim().length < 5}
                className="btn-primary text-xs disabled:opacity-40"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Anonymous Reflection</span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Pledge Modal */}
      <PledgeModal isOpen={isPledgeModalOpen} onClose={() => setIsPledgeModalOpen(false)} />
    </div>
  );
}

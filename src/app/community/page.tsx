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
      title: "Engineering & Technology Leadership Circle",
      desc: "Bringing together engineering leaders, architects, and faculty to discuss AI readiness, cloud skills, and mentoring young technologists.",
      cadence: "Bi-weekly Thursdays",
      memberBadge: "Industry–Academia",
    },
    {
      title: "Inclusive Workplace & People Leadership",
      desc: "HR heads, talent leaders, and people managers sharing practical approaches to psychological safety, workplace well-being, and everyday allyship.",
      cadence: "1st & 3rd Wednesday",
      memberBadge: "HR & Culture",
    },
    {
      title: "Emerging Talent & Campus Mentorship",
      desc: "Connecting graduating students and early-career professionals with industry mentors for career guidance, domain readiness, and workplace confidence.",
      cadence: "Monthly Weekends",
      memberBadge: "Mentorship Hub",
    },
    {
      title: "Healthcare, Research & Multidisciplinary Dialogue",
      desc: "Clinicians, researchers, and industry specialists exploring collaborative innovation across medical sciences, biotechnology, and public health.",
      cadence: "Monthly Roundtables",
      memberBadge: "Research & Practice",
    },
  ];

  const guidelines = [
    {
      title: "1. Candid & Respectful Dialogue",
      text: "Participants share insights openly so that industry leaders, faculty, and emerging professionals can learn from real workplace experiences.",
    },
    {
      title: "2. Mentorship Over Hierarchy",
      text: "Whether you are a senior executive, an academician, or a young professional, every conversation is grounded in mutual respect and curiosity.",
    },
    {
      title: "3. Space for Every Voice",
      text: "Sessions are moderated to ensure balanced participation and welcoming dialogue across industries, generations, and backgrounds.",
    },
    {
      title: "4. Commitment to Constructive Action",
      text: "Discussions focus on practical takeaways—turning shared ideas into stronger mentorship, inclusive teams, and meaningful collaboration.",
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
    <div className="flex flex-col gap-16 sm:gap-24 pb-16 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-36 lg:pt-40">
      {/* 1. Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase shadow-sm">
          <Users className="w-3.5 h-3.5 text-accent" />
          <span>The Allyship++ Network</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
          The People Behind the Conversation
        </h1>

        <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
          Allyship++ brings together corporate executives, HR leaders, academicians, alumni, and emerging professionals who believe that stronger relationships between industry and academia build better workplaces.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsPledgeModalOpen(true)}
            className="btn-primary"
          >
            <span>Join the Network (Take the Pledge)</span>
          </button>
          <a
            href="#events"
            className="btn-secondary"
          >
            Explore Upcoming Sessions
          </a>
        </div>
      </section>

      {/* 2. Community Working Circles */}
      <section className="space-y-8">
        <div>
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block mb-2">
            Ongoing Dialogue
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
            Leadership &amp; Mentorship Circles
          </h2>
          <p className="text-sm sm:text-base text-content-muted mt-2 max-w-xl leading-relaxed">
            Focused discussion groups connecting corporate practitioners, SOA faculty, and emerging talent between conclave editions.
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
            <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block mb-2">
              Interactive Gatherings
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap">
              Upcoming Events &amp; Workshops
            </h2>
            <p className="text-sm sm:text-base text-content-muted mt-2 max-w-xl leading-relaxed">
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
            <span>Principles of Engagement</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            How We Foster Open, Trusting Dialogue
          </h2>

          <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-normal">
            Meaningful exchange between industry leaders, educators, and young professionals relies on trust, openness, and shared respect.
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
            <span>Facilitated by SOA Office of Corporate Relations &amp; Industry Collaboration.</span>
            <Link href="/contact" className="text-accent hover:underline">
              Connect With the Conclave Secretariat
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Reflection of the Month */}
      <section className="bg-surface rounded-3xl p-8 border border-line shadow-xl max-w-3xl mx-auto w-full space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-content-muted font-heading">
            Leadership Reflection Prompt
          </span>
        </div>

        <h3 className="text-lg font-bold text-content font-heading">
          “What is one leadership or mentorship practice that helped you most when transitioning into a new role or team?”
        </h3>

        <p className="text-xs text-content-muted leading-relaxed font-normal">
          Share a brief perspective. Selected insights help shape upcoming panel themes across future Allyship++ chapters.
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

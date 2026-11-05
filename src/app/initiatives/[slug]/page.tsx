import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  Video,
  CheckCircle2,
  Calendar,
  Users,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  BookOpen,
} from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";
import { InitiativeCard } from "@/components/InitiativeCard";
import { InitiativeEnrollmentForm } from "./EnrollmentForm";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INITIATIVES.map((init) => ({
    slug: init.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const initiative = INITIATIVES.find((i) => i.slug === slug);
  if (!initiative) return { title: "Initiative Not Found" };

  return {
    title: initiative.title,
    description: initiative.description,
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = INITIATIVES.find((i) => i.slug === slug);

  if (!initiative) {
    notFound();
  }

  const relatedInitiatives = INITIATIVES.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-12 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12">
      {/* Back button */}
      <div>
        <Link
          href="/initiatives"
          className="inline-flex items-center gap-2 text-xs font-bold text-content-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-surface-2 via-surface to-canvas text-content rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-line">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-subtle rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-2 text-accent border border-line">
              {initiative.categoryLabel}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-success-bg text-success border border-success-border">
              {initiative.status}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-content leading-[1.1]">
            {initiative.title}
          </h1>

          <p className="text-base sm:text-lg text-accent font-medium italic">
            “{initiative.tagline}”
          </p>

          <p className="text-sm sm:text-base text-content-secondary leading-relaxed pt-2">
            {initiative.fullDescription}
          </p>

          {/* Quick specs */}
          <div className="pt-6 border-t border-line flex flex-wrap items-center gap-6 text-xs text-content-secondary">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>
                <strong>Duration:</strong> {initiative.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-accent" />
              <span>
                <strong>Format:</strong> {initiative.format}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>
                <strong>Experience Level:</strong> {initiative.level}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-24 items-start">
        {/* Left Column: Syllabus, Outcomes, Audience */}
        <div className="lg:col-span-7 space-y-12">
          {/* Key Learning Outcomes */}
          <section className="bg-surface rounded-3xl p-7 sm:p-8 border border-line shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-content tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              What You Will Achieve
            </h2>
            <div className="space-y-3 pt-2">
              {initiative.keyOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-content-secondary">
                  <div className="w-5 h-5 rounded-full bg-success-bg text-success font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-success-border">
                    ✓
                  </div>
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Curriculum & Syllabus */}
          <section className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                Structured Pedagogy
              </span>
              <h2 className="text-2xl font-bold text-content tracking-tight">
                Curriculum & Cohort Syllabus
              </h2>
            </div>

            <div className="space-y-4">
              {initiative.curriculum.map((phase, idx) => (
                <div
                  key={phase.phase}
                  className="bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-accent font-bold font-heading">
                    <span>{phase.phase}</span>
                    <span className="text-content-muted">Step 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-content">{phase.title}</h3>
                  <p className="text-xs sm:text-sm text-content-muted leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Target Audience */}
          <section className="bg-surface-2 rounded-3xl p-7 border border-line space-y-4">
            <h2 className="text-lg font-bold text-content">Who This Initiative Is Designed For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {initiative.targetAudience.map((aud, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-content-secondary">
                  <span className="text-accent font-bold">•</span>
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Meeting Schedule & Interactive Enrollment Form */}
        <div className="lg:col-span-5 space-y-6 sticky top-28">
          <div className="bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl space-y-6">
            <div className="border-b border-line pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-content-muted block mb-1">
                Meeting Logistics
              </span>
              <div className="flex items-start gap-2.5 text-xs text-content-secondary">
                <Calendar className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="font-semibold">{initiative.meetingSchedule}</span>
              </div>
            </div>

            {/* Interactive Registration / Application form component */}
            <InitiativeEnrollmentForm initiative={initiative} />
          </div>
        </div>
      </div>

      {/* Related Initiatives */}
      {relatedInitiatives.length > 0 && (
        <div className="pt-12 border-t border-line space-y-6">
          <h2 className="text-2xl font-bold text-content">Other Active Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedInitiatives.map((rel) => (
              <InitiativeCard key={rel.id} initiative={rel} variant="compact" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

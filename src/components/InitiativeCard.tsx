"use client";

import React from "react";
import Link from "next/link";
import { Initiative } from "@/lib/types";
import {
  Briefcase,
  ShieldAlert,
  Lightbulb,
  GraduationCap,
  Compass,
  FileCheck2,
  Clock,
  Video,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface InitiativeCardProps {
  initiative: Initiative;
  variant?: "compact" | "detailed";
}

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  ShieldAlert,
  Lightbulb,
  GraduationCap,
  Compass,
  FileCheck2,
};

export function InitiativeCard({ initiative, variant = "detailed" }: InitiativeCardProps) {
  const IconComponent = ICON_MAP[initiative.iconName] || Compass;

  const categoryColor: Record<string, string> = {
    workplace: "bg-surface-2 text-accent border-line",
    education: "bg-surface-2 text-[#E8D5A7] border-line",
    community: "bg-surface-2 text-success border-line",
    advocacy: "bg-surface-2 text-purple-400 border-line",
    mentorship: "bg-surface-2 text-rose-400 border-line",
  };

  return (
    <div className="group relative flex flex-col justify-between bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl hover:border-accent transition-all duration-300">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-all shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-wrap gap-1.5 justify-end">
            <span
              className={`text-[11px] font-bold font-heading px-3 py-1 rounded-full border uppercase tracking-wider ${
                categoryColor[initiative.category] || "bg-surface-2 text-content-secondary border-line"
              }`}
            >
              {initiative.categoryLabel}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-content group-hover:text-accent transition-colors tracking-tight font-heading">
          {initiative.title}
        </h3>
        <p className="text-xs font-medium text-accent mt-1 italic">
          {initiative.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-content-muted mt-3 line-clamp-3 leading-relaxed font-normal">
          {initiative.description}
        </p>

        {/* Meta Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-5 text-xs text-content-muted">
          <span className="inline-flex items-center gap-1 bg-surface-2 border border-line px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {initiative.duration}
          </span>
          <span className="inline-flex items-center gap-1 bg-surface-2 border border-line px-2.5 py-1 rounded-lg">
            <Video className="w-3.5 h-3.5 text-accent" />
            {initiative.format}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-success bg-success-bg px-2.5 py-1 rounded-lg border border-success-border">
            {initiative.status}
          </span>
        </div>

        {/* Key outcomes snippet if detailed */}
        {variant === "detailed" && initiative.keyOutcomes.length > 0 && (
          <div className="mt-5 pt-4 border-t border-line space-y-1.5">
            <div className="text-[11px] font-bold font-heading uppercase tracking-wider text-content-muted">
              Key Focus:
            </div>
            <div className="flex items-start gap-1.5 text-xs text-content-secondary">
              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
              <span className="line-clamp-2">{initiative.keyOutcomes[0]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer link */}
      <div className="pt-6 mt-4 flex items-center justify-between border-t border-line">
        <Link
          href={`/initiatives/${initiative.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-content group-hover:translate-x-0.5 transition-all font-heading"
        >
          <span>Explore Syllabus & Enroll</span>
          <ArrowRight className="w-4 h-4 text-accent" />
        </Link>
      </div>
    </div>
  );
}

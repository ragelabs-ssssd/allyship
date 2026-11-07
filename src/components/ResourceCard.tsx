"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Resource } from "@/lib/types";
import { Clock, Bookmark, ArrowRight, BookOpen, Tag } from "lucide-react";
import { getSavedResourceIds, toggleSavedResourceId } from "@/lib/storage";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkSaved = () => {
      const ids = getSavedResourceIds();
      setIsSaved(ids.includes(resource.id));
    };
    checkSaved();

    window.addEventListener("allyship-saved-resources-updated", checkSaved);
    return () => {
      window.removeEventListener("allyship-saved-resources-updated", checkSaved);
    };
  }, [resource.id]);

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updatedStatus = toggleSavedResourceId(resource.id);
    setIsSaved(updatedStatus);
  };

  const categoryColor: Record<string, string> = {
    guides: "bg-surface-2 text-accent border-line",
    toolkits: "bg-surface-2 text-accent-light border-line",
    frameworks: "bg-surface-2 text-indigo-700 dark:text-indigo-300 border-line",
    research: "bg-surface-2 text-purple-700 dark:text-purple-300 border-line",
    checklists: "bg-surface-2 text-success border-line",
  };

  return (
    <div className="group relative flex flex-col justify-between bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl hover:border-accent transition-all duration-300">
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[11px] font-bold font-heading px-3 py-1 rounded-full border uppercase tracking-wider ${
              categoryColor[resource.category] || "bg-surface-2 text-content-secondary border-line"
            }`}
          >
            {resource.categoryLabel}
          </span>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] text-content-muted font-medium">
              <Clock className="w-3 h-3 text-accent" />
              {resource.readTime}
            </span>

            <button
              type="button"
              onClick={handleToggleSave}
              title={isSaved ? "Remove from saved resources" : "Save resource for later"}
              aria-label={isSaved ? "Saved" : "Save"}
              className={`p-1.5 rounded-full transition-colors ${
                isSaved
                  ? "bg-accent text-on-accent"
                  : "bg-surface-2 text-content-muted hover:text-content hover:bg-glass-strong border border-line"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-current" : ""}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <Link href={`/resources/${resource.slug}`} className="block">
          <h3 className="text-lg font-bold text-content group-hover:text-accent transition-colors tracking-tight line-clamp-2 font-heading">
            {resource.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-content-muted mt-2.5 line-clamp-3 leading-relaxed font-normal">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-content-secondary bg-surface-2 px-2 py-0.5 rounded-md border border-line"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-5 mt-4 border-t border-line flex items-center justify-between">
        <span className="text-[11px] text-content-muted">
          By {resource.author.name}
        </span>
        <Link
          href={`/resources/${resource.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-content group-hover:translate-x-0.5 transition-all font-heading"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5 text-accent" />
        </Link>
      </div>
    </div>
  );
}

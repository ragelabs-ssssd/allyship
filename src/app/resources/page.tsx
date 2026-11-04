"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bookmark, Tag, BookOpen, Sparkles, Filter, X } from "lucide-react";
import { RESOURCES } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";
import { getSavedResourceIds } from "@/lib/storage";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const updateSaved = () => {
      setSavedIds(getSavedResourceIds());
    };
    updateSaved();
    window.addEventListener("allyship-saved-resources-updated", updateSaved);
    return () => window.removeEventListener("allyship-saved-resources-updated", updateSaved);
  }, []);

  const categories = [
    { id: "all", label: "All Formats" },
    { id: "guides", label: "Practical Guides" },
    { id: "toolkits", label: "Action Toolkits" },
    { id: "frameworks", label: "Strategic Frameworks" },
    { id: "checklists", label: "Quick Checklists" },
    { id: "research", label: "Research Briefings" },
  ];

  // Extract all unique tags
  const allTags = Array.from(new Set(RESOURCES.flatMap((r) => r.tags)));

  const filteredResources = RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || res.category === selectedCategory;

    const matchesTag = !selectedTag || res.tags.includes(selectedTag);

    const matchesSaved = !showSavedOnly || savedIds.includes(res.id);

    return matchesSearch && matchesCategory && matchesTag && matchesSaved;
  });

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-12 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-line text-accent text-xs font-semibold font-heading uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          <span>Open Educational Repository</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-content tracking-tight font-heading">
          Resource Library & Toolkits
        </h1>

        <p className="text-sm sm:text-base text-content-muted leading-relaxed font-normal">
          Peer-reviewed guides, real-time intervention scripts, meeting checklists, and research briefings. Free to read, download, and share.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-content-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, topics (e.g. microaggressions, listening, meetings)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-surface-2 border border-line text-sm text-content placeholder-slate-500 focus:outline-none focus:border-accent transition-all"
            />
          </div>

          {/* Saved Toggle Button */}
          <button
            type="button"
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 border font-heading ${
              showSavedOnly
                ? "bg-accent text-on-accent border-accent shadow-xs"
                : "bg-surface-2 border-line text-content-secondary hover:bg-glass-strong"
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? "fill-[#0A0A0A]" : ""}`} />
            <span>Saved ({savedIds.length})</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line">
          <span className="text-[11px] font-bold uppercase tracking-wider text-content-muted mr-1 font-heading">
            Format:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all font-heading ${
                selectedCategory === cat.id
                  ? "bg-accent text-on-accent shadow-xs font-bold"
                  : "bg-surface-2 text-content-secondary hover:bg-glass-strong border border-line"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-content-muted mr-1 font-heading">
            Tags:
          </span>
          {allTags.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(isTagActive ? null : tag)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all ${
                  isTagActive
                    ? "bg-accent text-on-accent shadow-xs font-bold"
                    : "bg-surface-2 text-content-muted hover:text-content border border-line"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicators */}
      <div className="flex items-center justify-between text-xs text-content-muted font-medium">
        <span>
          Showing <strong className="text-content">{filteredResources.length}</strong> resources
        </span>
        {(searchQuery || selectedCategory !== "all" || selectedTag || showSavedOnly) && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedTag(null);
              setShowSavedOnly(false);
            }}
            className="text-accent hover:underline font-semibold flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            Reset all filters
          </button>
        )}
      </div>

      {/* Grid of Resources */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      ) : (
        <div className="bg-surface rounded-3xl p-12 text-center border border-line max-w-lg mx-auto space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-surface-2 border border-line flex items-center justify-center text-accent mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-content font-heading">No resources found</h3>
          <p className="text-xs text-content-muted">
            {showSavedOnly
              ? "You haven't bookmarked any guides yet. Click the bookmark icon on any guide card to save it here."
              : "No guides or toolkits matched your current filter. Try adjusting your query."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedTag(null);
              setShowSavedOnly(false);
            }}
            className="px-5 py-2 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

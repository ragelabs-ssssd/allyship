"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { INITIATIVES } from "@/data/initiatives";
import { InitiativeCard } from "@/components/InitiativeCard";
import { InitiativeCategory } from "@/lib/types";

export default function InitiativesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");

  const categories: { id: string; label: string }[] = [
    { id: "all", label: "All Categories" },
    { id: "workplace", label: "Workplace & Culture" },
    { id: "community", label: "Community Action" },
    { id: "education", label: "Neurodiversity & Education" },
    { id: "advocacy", label: "Policy & Advocacy" },
    { id: "mentorship", label: "Mentorship & Youth" },
  ];

  const formats = ["all", "Virtual", "Hybrid", "In-Person", "Self-Paced"];

  const filteredInitiatives = INITIATIVES.filter((init) => {
    const matchesSearch =
      init.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      init.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      init.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || init.category === selectedCategory;

    const matchesFormat =
      selectedFormat === "all" || init.format === selectedFormat;

    return matchesSearch && matchesCategory && matchesFormat;
  });

  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-16 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 sm:pt-36 lg:pt-40">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-bold font-heading tracking-widest uppercase shadow-sm">
          <span>Active Programs &amp; Cohorts</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
          Initiatives &amp; Learning Labs
        </h1>

        <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto font-normal">
          Actionable, curriculum-embedded programs designed for corporate leaders, engineering cohorts, and community practitioners to dismantle structural barriers and institutionalize measurable inclusion.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-surface rounded-3xl p-6 border border-line shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 text-content-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives by keyword, topic, or role..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-surface-2 border border-line text-sm text-content placeholder-slate-500 focus:outline-none focus:border-accent transition-all"
            />
          </div>

          {/* Format Select */}
          <div className="md:col-span-4 flex items-center gap-2">
            <Filter className="w-4 h-4 text-accent shrink-0 ml-1" />
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full py-2.5 px-3.5 rounded-full bg-surface-2 border border-line text-xs text-content-secondary focus:outline-none focus:border-accent font-semibold"
            >
              <option value="all" className="bg-surface-2 text-content">All Formats (Virtual / Hybrid)</option>
              <option value="Virtual" className="bg-surface-2 text-content">Virtual Interactive</option>
              <option value="Hybrid" className="bg-surface-2 text-content">Hybrid Cohort</option>
              <option value="In-Person" className="bg-surface-2 text-content">In-Person Intensive</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line">
          <span className="text-[11px] font-bold uppercase tracking-wider text-content-muted mr-1 font-heading">
            Category:
          </span>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all font-heading ${
                selectedCategory === c.id
                  ? "bg-accent text-on-accent shadow-xs font-bold"
                  : "bg-surface-2 text-content-secondary hover:bg-glass-strong border border-line"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-content-muted font-medium">
        <span>
          Showing <strong className="text-content">{filteredInitiatives.length}</strong> active initiatives
        </span>
        {(searchQuery || selectedCategory !== "all" || selectedFormat !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedFormat("all");
            }}
            className="text-accent hover:underline font-semibold"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Initiatives Grid */}
      {filteredInitiatives.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredInitiatives.map((init) => (
            <InitiativeCard key={init.id} initiative={init} />
          ))}
        </div>
      ) : (
        <div className="bg-surface rounded-3xl p-12 text-center border border-line max-w-lg mx-auto space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-surface-2 border border-line flex items-center justify-center text-accent mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-content font-heading">No initiatives found</h3>
          <p className="text-xs text-content-muted">
            No active programs matched your current search and filter settings. Try adjusting your query or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
              setSelectedFormat("all");
            }}
            className="btn-primary text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

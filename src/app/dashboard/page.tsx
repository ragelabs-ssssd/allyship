"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  Sparkles,
  Bookmark,
  Calendar,
  CheckCircle2,
  Award,
  Download,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Trash2,
  Printer,
} from "lucide-react";
import {
  getStoredPledge,
  getSavedResourceIds,
  getRegisteredEventIds,
  toggleSavedResourceId,
} from "@/lib/storage";
import { RESOURCES } from "@/data/resources";
import { COMMUNITY_EVENTS } from "@/data/communityEvents";
import { PledgeSubmission } from "@/lib/types";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { PledgeModal } from "@/components/PledgeModal";

type DashboardTab = "overview" | "resources" | "events" | "checklist";

export default function DashboardPage() {
  const [pledge, setPledge] = useState<PledgeSubmission | null>(null);
  const [savedResourceIds, setSavedResourceIds] = useState<string[]>([]);
  const [registeredEventIds, setRegisteredEventIds] = useState<string[]>([]);
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");

  const loadData = () => {
    setPledge(getStoredPledge());
    setSavedResourceIds(getSavedResourceIds());
    setRegisteredEventIds(getRegisteredEventIds());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
    loadData();
    window.addEventListener("allyship-pledge-updated", loadData);
    window.addEventListener("allyship-saved-resources-updated", loadData);
    window.addEventListener("allyship-events-updated", loadData);

    return () => {
      window.removeEventListener("allyship-pledge-updated", loadData);
      window.removeEventListener("allyship-saved-resources-updated", loadData);
      window.removeEventListener("allyship-events-updated", loadData);
    };
  }, []);

  const savedResources = RESOURCES.filter((r) => savedResourceIds.includes(r.id));
  const registeredEvents = COMMUNITY_EVENTS.filter((e) => registeredEventIds.includes(e.id));

  const handleRemoveSaved = (id: string) => {
    toggleSavedResourceId(id);
    setSavedResourceIds(getSavedResourceIds());
  };

  const handlePrintCertificate = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-col gap-10 pb-12 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-10 sm:pt-14">
      {/* Top Profile / Welcome Header */}
      <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-line shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-2 to-canvas border border-line text-content flex items-center justify-center font-bold text-xl shadow-md">
            {pledge ? pledge.name.charAt(0).toUpperCase() : <User className="w-7 h-7" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-content tracking-tight">
                {pledge ? `Welcome back, ${pledge.name}` : "Ally Member Portal"}
              </h1>
              {pledge && (
                <span className="px-2.5 py-0.5 rounded-full bg-success-bg text-success text-xs font-bold border border-success-border flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Advocate
                </span>
              )}
            </div>
            <p className="text-xs text-content-muted mt-1">
              {pledge
                ? `Certificate ID: ${pledge.certificateNumber} • Registered ${new Date(pledge.createdAt).toLocaleDateString()}`
                : "Take the pledge to receive your official certificate and unlock personalized tracking."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!pledge ? (
            <button
              type="button"
              onClick={() => setIsPledgeModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-bold text-xs shadow-md flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Take the Allyship Pledge</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePrintCertificate}
              className="px-5 py-2.5 rounded-full bg-surface-2 text-content border border-line font-bold text-xs flex items-center gap-2 hover:bg-glass-strong transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Certificate</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-line pb-2 overflow-x-auto text-xs font-bold">
        {[
          { id: "overview", label: "Overview & Certificate", count: pledge ? "1" : "0" },
          { id: "resources", label: "Saved Resources", count: String(savedResources.length) },
          { id: "events", label: "Registered Sessions", count: String(registeredEvents.length) },
          { id: "checklist", label: "Everyday Habits Checklist", count: "" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as DashboardTab)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-accent text-on-accent shadow-xs"
                : "text-content-muted hover:bg-glass"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeTab === tab.id ? "bg-black/20 text-content" : "bg-glass-strong text-content-secondary"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview & Certificate */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {pledge ? (
            <div className="bg-gradient-to-br from-surface-2 via-surface to-canvas text-content rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-line shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent-subtle rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl space-y-6">
                <div className="flex items-center justify-between text-xs text-[#E8D5A7]">
                  <span>ALLYSHIP++ · SOA UNIVERSITY</span>
                  <span className="font-bold">{pledge.certificateNumber}</span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    Official Recognition
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-content mt-1">
                    {pledge.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-content-secondary mt-2 italic leading-relaxed">
                    “Has made a solemn commitment to listen actively, interrupt systemic bias, and empower underrepresented individuals.”
                  </p>
                </div>

                <div className="pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-content-muted block text-[11px]">Registered Focus Areas:</span>
                    <span className="font-semibold text-content capitalize">
                      {pledge.focusAreas.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-content-muted block text-[11px]">Credential Date:</span>
                    <span className="font-semibold text-content">
                      {new Date(pledge.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-surface rounded-3xl p-10 border border-line text-center max-w-xl mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-surface-2 text-accent flex items-center justify-center mx-auto border border-line">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-content">No Active Pledge Yet</h3>
              <p className="text-xs text-content-muted leading-relaxed">
                Affirm your commitment to active solidarity, receive your personalized Certificate of Active Allyship, and unlock member recommendations.
              </p>
              <button
                type="button"
                onClick={() => setIsPledgeModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-bold text-xs transition-colors"
              >
                Take the Pledge (2 Minutes)
              </button>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-3xl border border-line shadow-xl">
              <span className="text-xs font-bold text-content-muted uppercase tracking-wider block">
                Saved Resources
              </span>
              <div className="text-2xl font-extrabold text-content mt-1">
                {savedResources.length}
              </div>
              <Link href="/resources" className="text-xs text-accent font-semibold mt-2 inline-block hover:underline">
                Browse Library →
              </Link>
            </div>

            <div className="bg-surface p-6 rounded-3xl border border-line shadow-xl">
              <span className="text-xs font-bold text-content-muted uppercase tracking-wider block">
                Registered Sessions
              </span>
              <div className="text-2xl font-extrabold text-content mt-1">
                {registeredEvents.length}
              </div>
              <Link href="/community" className="text-xs text-accent font-semibold mt-2 inline-block hover:underline">
                View Calendar →
              </Link>
            </div>

            <div className="bg-surface p-6 rounded-3xl border border-line shadow-xl">
              <span className="text-xs font-bold text-content-muted uppercase tracking-wider block">
                Pledge Status
              </span>
              <div className="text-2xl font-extrabold text-content mt-1">
                {pledge ? "Active" : "Guest"}
              </div>
              <span className="text-xs text-content-muted mt-2 block">
                {pledge ? "Verified Advocate" : "Unverified"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Saved Resources */}
      {activeTab === "resources" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-content">Your Saved Reading List</h2>
            <Link href="/resources" className="text-xs font-bold text-accent hover:underline">
              + Discover more resources
            </Link>
          </div>

          {savedResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedResources.map((res) => (
                <div
                  key={res.id}
                  className="p-5 bg-surface-2 rounded-2xl border border-line flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      {res.categoryLabel}
                    </span>
                    <Link
                      href={`/resources/${res.slug}`}
                      className="block text-sm font-bold text-content hover:text-accent transition-colors"
                    >
                      {res.title}
                    </Link>
                    <p className="text-xs text-content-muted line-clamp-1">{res.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSaved(res.id)}
                    title="Remove from saved"
                    className="p-2 text-content-muted hover:text-danger transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-surface rounded-3xl border border-line text-xs text-content-muted">
              You haven&apos;t saved any resources yet. Explore the{" "}
              <Link href="/resources" className="text-accent font-bold underline">
                Resource Library
              </Link>{" "}
              and click the bookmark button on any guide.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Registered Events */}
      {activeTab === "events" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-content">Your Upcoming Registered Gatherings</h2>
            <Link href="/community" className="text-xs font-bold text-accent hover:underline">
              + Explore Community Calendar
            </Link>
          </div>

          {registeredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {registeredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-5 bg-surface-2 rounded-2xl border border-line space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-accent">{evt.format}</span>
                    <span className="text-success bg-success-bg px-2 py-0.5 rounded-full font-bold">
                      ✓ Confirmed RSVP
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-content">{evt.title}</h3>
                  <p className="text-xs text-content-muted">{evt.date} • {evt.time} ({evt.timezone})</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-surface rounded-3xl border border-line text-xs text-content-muted">
              You have not registered for any upcoming sessions yet. Visit the{" "}
              <Link href="/community" className="text-accent font-bold underline">
                Community Page
              </Link>{" "}
              to RSVP for free circles and masterclasses.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Habits Checklist */}
      {activeTab === "checklist" && (
        <div className="max-w-3xl mx-auto w-full">
          <InteractiveChecklist />
        </div>
      )}

      {/* Pledge Modal */}
      <PledgeModal isOpen={isPledgeModalOpen} onClose={() => setIsPledgeModalOpen(false)} />
    </div>
  );
}

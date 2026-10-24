"use client";

import React, { useState, useEffect } from "react";
import { Check, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { getChecklistState, toggleChecklistItem } from "@/lib/storage";

interface ChecklistItem {
  id: string;
  category: string;
  task: string;
  impact: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "check-1",
    category: "Meetings & Airtime",
    task: "Check in or redirect if a peer is interrupted during a discussion.",
    impact: "Normalizes conversational equity and stops airtime dominance.",
  },
  {
    id: "check-2",
    category: "Attribution",
    task: "Explicitly credit the originator when reiterating a valuable idea.",
    impact: "Prevents idea appropriation and validates quiet contributors.",
  },
  {
    id: "check-3",
    category: "Language",
    task: "Replace casual ableist or gendered idioms ('hey guys', 'that's crazy') with intentional phrases.",
    impact: "Builds psychological safety and avoids triggering historical stigmas.",
  },
  {
    id: "check-4",
    category: "Empathy & Learning",
    task: "Read one resource or article authored by a community different from your own this week.",
    impact: "Broadens your intersectional lens without placing emotional labor on peers.",
  },
  {
    id: "check-5",
    category: "Sponsorship",
    task: "Recommend a junior or underrepresented colleague for a high-visibility project or speaking slot.",
    impact: "Converts passive mentorship into career-accelerating sponsorship.",
  },
  {
    id: "check-6",
    category: "Feedback & Humility",
    task: "When corrected on language or bias, say 'Thank you for pointing that out' without explaining your intent.",
    impact: "De-escalates defensiveness and centers the person affected.",
  },
];

export function InteractiveChecklist() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const syncState = () => {
      setCheckedState(getChecklistState());
    };
    syncState();

    window.addEventListener("allyship-checklist-updated", syncState);
    return () => {
      window.removeEventListener("allyship-checklist-updated", syncState);
    };
  }, []);

  const handleToggle = (id: string) => {
    const updated = toggleChecklistItem(id);
    setCheckedState(updated);
  };

  const completedCount = CHECKLIST_ITEMS.filter((item) => !!checkedState[item.id]).length;
  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-line shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
            Interactive Tool
          </span>
          <h3 className="text-xl font-bold text-content mt-0.5">
            Everyday Ally Action Checklist
          </h3>
          <p className="text-xs text-content-muted mt-1">
            Track your everyday habits. Progress is saved locally in your browser.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-lg font-bold text-accent">{progressPercent}%</span>
            <span className="block text-[10px] text-content-muted font-medium">
              {completedCount} of {CHECKLIST_ITEMS.length} completed
            </span>
          </div>
          <div className="w-16 h-16 rounded-full bg-glass border-4 border-line flex items-center justify-center">
            {progressPercent === 100 ? (
              <CheckCircle2 className="w-8 h-8 text-success" />
            ) : (
              <Sparkles className="w-6 h-6 text-accent" />
            )}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-glass-strong h-2.5 rounded-full overflow-hidden my-6">
        <div
          className="bg-gradient-to-r from-accent via-accent-hover to-success h-full transition-all duration-500 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item) => {
          const isDone = !!checkedState[item.id];
          return (
            <div
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                isDone
                  ? "border-success-border bg-success-bg text-content-secondary"
                  : "border-line bg-surface-2 hover:border-line-strong"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center text-xs transition-colors shrink-0 ${
                  isDone
                    ? "bg-success text-on-success"
                    : "border border-line-strong bg-transparent hover:border-accent"
                }`}
              >
                {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-content-muted">
                    {item.category}
                  </span>
                </div>
                <div
                  className={`text-sm font-semibold mt-0.5 leading-snug ${
                    isDone ? "text-content line-through opacity-80" : "text-content"
                  }`}
                >
                  {item.task}
                </div>
                <div className="text-xs text-content-muted mt-1 italic">
                  💡 Why: {item.impact}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {progressPercent === 100 && (
        <div className="mt-6 p-4 rounded-2xl bg-success-bg border border-success-border text-success text-xs flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
          <span>
            Outstanding commitment! You have completed all six everyday allyship actions. Keep practicing them consistently!
          </span>
        </div>
      )}
    </div>
  );
}

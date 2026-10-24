"use client";

import React, { useState } from "react";
import { FaqItem } from "@/lib/types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqAccordionProps {
  faqs: FaqItem[];
  allowFilter?: boolean;
}

export function FaqAccordion({ faqs, allowFilter = true }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-6">
      {allowFilter && categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-accent text-on-accent shadow-md font-bold"
                  : "bg-surface-2 border border-line text-content-secondary hover:text-content"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-surface ${
                isOpen
                  ? "border-accent/80 shadow-[0_0_20px_rgba(201,169,110,0.15)]"
                  : "border-line hover:border-line-strong"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleOpen(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
              >
                <span className="text-base font-bold text-content leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-accent text-on-accent" : "bg-glass-strong text-content-secondary"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 pb-6 pt-1 text-sm text-content-secondary leading-relaxed border-t border-line animate-in fade-in duration-200"
                >
                  <p>{faq.answer}</p>
                  <div className="mt-4">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      Category: {faq.category}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  Option1CommandMatrix,
  Option2DiplomaticCorridor,
  Option3CinematicDeck,
  Option4AccordionStack,
  Option5SplitDashboard,
} from "@/components/about/BentoCityOptions";

export default function BentoCitiesReviewPage() {
  const [city1, setCity1] = useState(0);
  const [city2, setCity2] = useState(0);
  const [city3, setCity3] = useState(0);
  const [city4, setCity4] = useState(0);
  const [city5, setCity5] = useState(0);

  const options = [
    {
      num: 1,
      name: "Command Matrix",
      badge: "Telemetry & CXO Metrics",
      desc: "Sleek segmented pill track at the top with glowing live status, bold thematic focus, Olympic/cricketer mentor badge, and CXO attendance metrics.",
      render: <Option1CommandMatrix selectedCity={city1} setSelectedCity={setCity1} />,
    },
    {
      num: 2,
      name: "Diplomatic Corridor",
      badge: "Route Track & Boarding Pass",
      desc: "Flightline / corridor header (BLR · HYD · BOM · MAA · CCU) connected by tracking dots, with an executive diplomatic pass displaying cohort enterprise partners.",
      render: <Option2DiplomaticCorridor selectedCity={city2} setSelectedCity={setCity2} />,
    },
    {
      num: 3,
      name: "Cinematic Photo Deck",
      badge: "Photo Backdrop with Dark Scrim",
      desc: "Visual photographic thumbnail card featuring actual conclave delegation imagery for each city with a dark gradient scrim and crisp vector typography.",
      render: <Option3CinematicDeck selectedCity={city3} setSelectedCity={setCity3} />,
    },
    {
      num: 4,
      name: "Executive Accordion Stack",
      badge: "All 5 Cities Simultaneously Visible",
      desc: "Vertical compact stack where all 5 metro capitals remain visible at once. The active city expands smoothly into a gold-bordered drawer with mentor and CXO details.",
      render: <Option4AccordionStack selectedCity={city4} setSelectedCity={setCity4} />,
    },
    {
      num: 5,
      name: "Split Bilateral Dashboard",
      badge: "Dual-Column Micro Widget",
      desc: "Two-column executive dashboard with a vertical city list on the left and a high-density dossier on the right showing thematic focus, mentor, and employer cohort.",
      render: <Option5SplitDashboard selectedCity={city5} setSelectedCity={setCity5} />,
    },
  ];

  return (
    <div className="min-h-screen bg-canvas text-content py-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-line pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about#journey-pillars"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent hover:text-content transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to About Page</span>
          </Link>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-subtle text-accent border border-accent/30 font-bold">
            Interactive Design Lab
          </span>
        </div>

        <div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-content">
            5 Design Options: <span className="text-accent">Pan-India Conclaves Widget</span>
          </h1>
          <p className="text-base text-content-secondary mt-2 max-w-3xl leading-relaxed">
            Review and test all 5 interactive concepts for Card 3 of the Bento Grid in real-time. Click on the city tabs inside each option to see their responsive states and live interactions.
          </p>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {options.map((opt) => (
          <div
            key={opt.num}
            className="rounded-3xl p-6 sm:p-8 bg-surface border border-line hover:border-accent/50 shadow-xl space-y-6 transition-all relative flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  Option {opt.num} · {opt.badge}
                </span>
                <span className="font-heading text-lg font-bold text-content">
                  {opt.name}
                </span>
              </div>

              <p className="text-xs text-content-secondary leading-relaxed">
                {opt.desc}
              </p>

              {/* The Live Interactive Component */}
              <div className="pt-2">{opt.render}</div>
            </div>

            <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-content-muted">
              <span>Test by clicking cities above</span>
              <span className="text-accent font-semibold">Ready to Lock</span>
            </div>
          </div>
        ))}
      </div>

      {/* Decision Guide */}
      <div className="p-8 rounded-3xl bg-surface-2 border border-accent/40 shadow-xl space-y-4 text-center max-w-2xl mx-auto">
        <Sparkles className="w-6 h-6 text-accent mx-auto" />
        <h3 className="font-heading text-xl font-bold text-content">
          Ready to Choose?
        </h3>
        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
          Reply in chat with your preferred option number (e.g. <strong>&ldquo;Option 1&rdquo;</strong>, <strong>&ldquo;Option 2&rdquo;</strong>, <strong>&ldquo;Option 3&rdquo;</strong>, <strong>&ldquo;Option 4&rdquo;</strong>, or <strong>&ldquo;Option 5&rdquo;</strong>) and it will be permanently locked into the About page Bento Grid!
        </p>
      </div>
    </div>
  );
}

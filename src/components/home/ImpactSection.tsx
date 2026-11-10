"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionReveal } from "../animations/SectionReveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function AnimatedNumber({ end, suffix = "", decimals = 0, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    // Immediate fallback if user prefers reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
      setCount(end);
    }
  }, [end]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  const metrics = [
    {
      value: 500,
      suffix: "+",
      decimals: 0,
      title: "Boardroom Leaders & CXOs",
      description:
        "Enterprise directors, vice presidents, and talent heads from Microsoft, Amazon, Dell, Deloitte, and 150+ organizations engaged in enduring dialogue.",
    },
    {
      value: 7,
      suffix: "",
      decimals: 0,
      title: "Metropolitan Conclaves",
      description:
        "In-depth leadership conclaves convened across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai—linking classroom learning with boardroom realities.",
    },
    {
      value: 30,
      suffix: "+ Yrs",
      decimals: 0,
      title: "Academic Stewardship",
      description:
        "Three decades of educational excellence from Siksha 'O' Anusandhan (NIRF #15), advancing research, human values, and generational leadership.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-canvas relative border-b border-line">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-line">
          <div>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              The Reach of Our Alliance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight mt-2">
              A National Network Built on Real Relationships
            </h2>
          </div>
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-secondary hover:text-accent transition-colors group shrink-0"
          >
            <span>View Full Impact Dossier</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </SectionReveal>

        {/* 3 Monumental Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {metrics.map((metric, index) => (
            <SectionReveal
              key={metric.title}
              delay={index * 0.15}
              className="flex flex-col justify-between space-y-4 p-8 sm:p-10 rounded-2xl bg-surface-3 border border-line hover:border-accent/50 transition-all duration-500 group"
            >
              <div>
                <p className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content tracking-tight leading-none mb-4 group-hover:text-accent transition-colors">
                  <AnimatedNumber
                    end={metric.value}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </p>
                <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-content">
                  {metric.title}
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                {metric.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

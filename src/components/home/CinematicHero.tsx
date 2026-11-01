"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroBackdrop } from "@/components/HeroBackdrop";

interface CinematicHeroProps {
  onOpenInvite: () => void;
}

const ROTATING_WORDS = [
  { text: "ACADEMIA", color: "text-accent" },    // Signature Champagne Gold
  { text: "INNOVATION", color: "text-[#E8D5A7]" },  // Warm Platinum Champagne
  { text: "RESEARCH", color: "text-accent" },    // Rich Metallic Gold
  { text: "LEADERSHIP", color: "text-[#D4B97B]" },  // Muted Warm Bronze
  { text: "FORESIGHT", color: "text-[#E8D5A7]" },   // Soft Sunlit Brass
];

const HERO_SLIDES = [
  {
    chapter: "Hyderabad Chapter 2.0",
    description:
      "Over 80+ CXOs, Capability Center Heads, and academic leadership deliberate workforce transformation and applied research.",
    image: "/slides/IMG_7873.jpg",
  },
  {
    chapter: "Chennai Chapter 2.0",
    description:
      "Embedding allyship as an everyday leadership responsibility, establishing psychological trust, and expanding talent pipelines.",
    image: "/slides/CON01670.jpg",
  },
  {
    chapter: "Mumbai Chapter 1.0",
    description:
      "Building inclusive, high-empathy workplaces, balancing quarterly targets with mental wellness and psychological safety.",
    image: "/slides/IMG_7577.jpg",
  },
  {
    chapter: "Bengaluru Chapter 1.0",
    description:
      "Senior engineering and people leaders from Microsoft, Dell, and Zscaler deliberate on engineering cultures and hybrid teams.",
    image: "/slides/IMG_7849.jpg",
  },
  {
    chapter: "Kolkata Chapter 1.0",
    description:
      "Bridging legacy enterprise leadership, digital transformation, and inclusive organizational growth across Eastern India.",
    image: "/slides/CON01638.jpg",
  },
];

/** YouTube film used as the subtle hero backdrop (muted, looping, no controls). */
const BACKGROUND_VIDEO_ID = "Bjp-vCBHB0E";

export function CinematicHero({ onOpenInvite }: CinematicHeroProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [heroSlide, setHeroSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstRender(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance slideshow every 4.5s; resets timer cleanly whenever user changes slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [heroSlide, isPaused]);

  const handleNextSlide = () => {
    setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeWord = ROTATING_WORDS[activeWordIndex];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-32 pb-16 sm:pt-36 lg:pt-40 xl:pt-44 lg:pb-24 overflow-hidden bg-canvas">
      {/* Decorative background film (muted, looping, non-interactive) */}
      <HeroBackdrop />

      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-accent-subtle rounded-full blur-3xl pointer-events-none -z-10 opacity-70" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[rgba(12,20,38,0.02)] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monumental Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            {/* Dateline & Institutional Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                <span>Siksha &lsquo;O&rsquo; Anusandhan Leadership Series</span>
              </span>
            </motion.div>

            {/* Monumental Headline with Rotating Metallic Words */}
            <div className="space-y-4">
              <h1
                aria-label={`WHERE INDUSTRY MEETS ${activeWord.text}`}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.1] text-content uppercase select-none"
              >
                {/* Accessible text for crawlers & screen readers */}
                <span className="sr-only">
                  WHERE INDUSTRY MEETS {activeWord.text}
                </span>

                {/* Visual kinetic letter splitting container */}
                <span aria-hidden="true" className="block">
                  {/* Line 1: WHERE INDUSTRY */}
                  <span className="block">
                    <span className="inline-block overflow-hidden pt-2 -mt-2 align-bottom mr-[0.28em]">
                      {"WHERE".split("").map((char, i) => (
                        <span
                          key={i}
                          className="inline-block animate-char-reveal"
                          style={{ animationDelay: `${i * 25}ms` }}
                        >
                          <span className="inline-block hover:-translate-y-1.5 transition-transform duration-300 cursor-default text-content">
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                    <span className="inline-block overflow-hidden pt-2 -mt-2 align-bottom">
                      {"INDUSTRY".split("").map((char, i) => (
                        <span
                          key={i}
                          className="inline-block animate-char-reveal"
                          style={{ animationDelay: `${(5 + i) * 25}ms` }}
                        >
                          <span className="inline-block hover:-translate-y-1.5 transition-transform duration-300 cursor-default text-content">
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>

                  {/* Line 2: MEETS [ROTATING_WORD] */}
                  <span className="block">
                    <span className="inline-block overflow-hidden pt-2 -mt-2 align-bottom mr-[0.28em]">
                      {"MEETS".split("").map((char, i) => (
                        <span
                          key={i}
                          className="inline-block animate-char-reveal"
                          style={{ animationDelay: `${(13 + i) * 25}ms` }}
                        >
                          <span className="inline-block hover:-translate-y-1.5 transition-transform duration-300 cursor-default text-content">
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                    <span
                      key={activeWord.text}
                      className="inline-block overflow-hidden pt-2 -mt-2 align-bottom whitespace-nowrap"
                    >
                      {activeWord.text.split("").map((char, i) => (
                        <span
                          key={`${activeWord.text}-${i}`}
                          className="inline-block animate-char-reveal"
                          style={{ animationDelay: `${(isFirstRender ? 18 + i : i) * 25}ms` }}
                        >
                          <span
                            className={`inline-block ${activeWord.color} hover:-translate-y-1.5 transition-transform duration-300 cursor-default`}
                          >
                            {char}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base sm:text-lg font-normal tracking-[0.01em] leading-relaxed text-content-secondary max-w-xl"
              >
                Where Boardroom Vision Meets Academic Foresight. An invitation-only national conclave series convening CHROs, GCC Managing Directors, and research visionaries across India&apos;s primary technology capitals.
              </motion.p>
            </div>

            {/* Chapter Footprint Cities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1 flex items-center gap-2 text-xs font-medium text-content-muted flex-wrap"
            >
              <span className="inline-flex items-center gap-1.5 text-content font-semibold uppercase tracking-wider text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Metro Footprint:
              </span>
              <span>Bengaluru</span>
              <span className="text-content-faint">•</span>
              <span>Hyderabad</span>
              <span className="text-content-faint">•</span>
              <span>Kolkata</span>
              <span className="text-content-faint">•</span>
              <span>Mumbai</span>
              <span className="text-content-faint">•</span>
              <span>Chennai</span>
              <span className="text-content-faint">•</span>
              <span>Bhubaneswar</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 pt-2 flex-wrap"
            >
              <button
                onClick={onOpenInvite}
                className="inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans font-medium text-sm px-6 py-3.5 transition-colors duration-200 shadow-sm"
              >
                <span>Request Executive Invitation</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-white text-xs">
                  →
                </span>
              </button>

              <a
                href="#chapters"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-content-secondary hover:text-content bg-surface-3 hover:bg-surface-3 border border-line hover:border-line-strong transition-all duration-300"
              >
                <span>Explore Metro Chapters</span>
                <ChevronDown className="w-4 h-4 text-accent" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Full Cinematic Photography Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Photo Frame Container with Dynamic Slideshow */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-line bg-surface-3 group on-media"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden bg-black/80">
                  {HERO_SLIDES.map((slide, idx) => {
                    const isActive = idx === heroSlide;
                    return (
                      <div
                        key={slide.chapter}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.chapter}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className={`object-cover object-center contrast-105 transition-transform duration-1000 ease-out ${
                            isActive ? "scale-105" : "scale-100"
                          }`}
                        />
                      </div>
                    );
                  })}

                  {/* Subtle Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20 pointer-events-none" />

                  {/* Accessible Minimalist Progress Bars / Dots */}
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-line shadow-xl">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHeroSlide(idx);
                        }}
                        aria-label={`Switch to ${HERO_SLIDES[idx].chapter}`}
                        className="p-1.5 group/dot cursor-pointer focus:outline-none"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            idx === heroSlide
                              ? "w-6 bg-accent shadow-[0_0_8px_rgba(197,168,105,0.6)]"
                              : "w-2 bg-content/30 group-hover/dot:bg-content/60"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Previous / Next Arrow Controls */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevSlide();
                    }}
                    aria-label="Previous chapter slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-line-strong flex items-center justify-center text-content/90 hover:text-content transition-all shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5 -ml-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextSlide();
                    }}
                    aria-label="Next chapter slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-line-strong flex items-center justify-center text-content/90 hover:text-content transition-all shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 -mr-0.5" />
                  </button>
                </div>

                {/* Editorial Photo Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-content space-y-2 z-30 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      Live Conclave Archives
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-1.5"
                    >
                      <h3 className="font-display text-2xl font-bold text-content tracking-normal leading-snug">
                        {HERO_SLIDES[heroSlide].chapter}
                      </h3>
                      <p className="font-sans text-sm text-content-secondary leading-relaxed line-clamp-3">
                        {HERO_SLIDES[heroSlide].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative Luxury Gold Borders */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent rounded-tr-xl pointer-events-none opacity-60 hidden sm:block" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent rounded-bl-xl pointer-events-none opacity-60 hidden sm:block" />

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -right-3 sm:-right-6 bg-surface-2/95 backdrop-blur-md px-5 py-3.5 rounded-xl border border-line shadow-2xl hidden sm:flex items-center gap-3.5 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-accent-subtle border border-accent/30 flex items-center justify-center font-display font-bold text-base text-accent">
                  6+
                </div>
                <div>
                  <p className="font-display text-xs font-semibold text-content leading-tight">
                    Metro Chapters
                  </p>
                  <p className="font-sans text-[11px] text-content-muted">
                    Across 5 Tech Hubs
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none text-content-faint">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-line-strong flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
}

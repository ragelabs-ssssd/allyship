"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  CheckCircle2,
  Building,
  HelpCircle,
  Play,
  Award,
  Medal,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Video,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { conclavesData } from "@/data/conclaves";

const eventHeroImages = [
  {
    src: "/photos-1/IMG_7448.jpg",
    title: "Executive Panel Discussion: Practicing Allyship",
    subtitle: "Industry Leaders & Academic Leadership on Stage",
    objectPosition: "50% 28%",
    kbOrigin: "center 30%",
    kbMotion: { scale: [1.02, 1.09], x: ["0%", "-1.5%"], y: ["0%", "-1%"] },
  },
  {
    src: "/photos-1/CON01524.jpg",
    title: "Honouring Sporting Excellence",
    subtitle: "Indian Olympic Sprint Coach Premanand J. & SOA Leadership",
    objectPosition: "52% 20%",
    kbOrigin: "center 20%",
    kbMotion: { scale: [1.02, 1.08], x: ["0%", "1.2%"], y: ["0%", "-1%"] },
  },
  {
    src: "/photos-1/IMG_7536.jpg",
    title: "Executive Fireside Conversation",
    subtitle: "Boardroom Foresight & Talent Transformation",
    objectPosition: "58% 24%",
    kbOrigin: "60% 25%",
    kbMotion: { scale: [1.03, 1.1], x: ["0%", "-1.5%"], y: ["0%", "1%"] },
  },
  {
    src: "/photos-1/IMG_7502.jpg",
    title: "Executive Guest Felicitation",
    subtitle: "Strengthening Bilateral Industry-Academia Ties",
    objectPosition: "48% 18%",
    kbOrigin: "center 20%",
    kbMotion: { scale: [1.02, 1.08], x: ["0%", "1%"], y: ["0%", "-1.2%"] },
  },
  {
    src: "/photos-1/IE_04142.jpg",
    title: "Leadership Conclave Delegation",
    subtitle: "Senior Delegates & University Leadership",
    objectPosition: "48% 36%",
    kbOrigin: "center 35%",
    kbMotion: { scale: [1.08, 1.01], x: ["-1%", "0%"], y: ["-1%", "0%"] },
  },
  {
    src: "/photos-1/IMG_7431.jpg",
    title: "Conclave Panel: Future-Ready Talent Ecosystems",
    subtitle: "CXOs & Capability Heads in Deliberation",
    objectPosition: "58% 22%",
    kbOrigin: "60% 25%",
    kbMotion: { scale: [1.02, 1.09], x: ["0%", "-1.5%"], y: ["0%", "-0.8%"] },
  },
  {
    src: "/photos-1/IMG_7330.jpg",
    title: "Distinguished Speaker Felicitation",
    subtitle: "Siksha 'O' Anusandhan Leadership Conclave",
    objectPosition: "50% 16%",
    kbOrigin: "center 18%",
    kbMotion: { scale: [1.02, 1.08], x: ["0%", "1%"], y: ["0%", "-1%"] },
  },
  {
    src: "/photos-1/IMG_7133.jpg",
    title: "Executive Networking & Peer Dialogue",
    subtitle: "CHROs, Engineering Heads & Academic Leaders",
    objectPosition: "50% 22%",
    kbOrigin: "center 22%",
    kbMotion: { scale: [1.02, 1.08], x: ["-1%", "1%"], y: ["0%", "-0.8%"] },
  },
  {
    src: "/photos-1/IMG_7129.jpg",
    title: "Pre-Session Executive Deliberations",
    subtitle: "Building Long-Term Institutional Pipelines",
    objectPosition: "52% 24%",
    kbOrigin: "center 24%",
    kbMotion: { scale: [1.02, 1.08], x: ["1%", "-1%"], y: ["0%", "-1%"] },
  },
  {
    src: "/photos-1/IE_04027.jpg",
    title: "Conclave Delegates & Industry Partners",
    subtitle: "Collaborative Dialogue Across Commercial Hubs",
    objectPosition: "50% 20%",
    kbOrigin: "center 20%",
    kbMotion: { scale: [1.02, 1.09], x: ["0%", "-1.2%"], y: ["0%", "-1%"] },
  },
  {
    src: "/photos-1/IMG_7900.jpg",
    title: "Executive Community & Camaraderie",
    subtitle: "Moments from the Leadership Conclave Floor",
    objectPosition: "48% 18%",
    kbOrigin: "center 20%",
    kbMotion: { scale: [1.02, 1.08], x: ["0%", "1.4%"], y: ["0%", "-0.8%"] },
  },
  {
    src: "/photos-1/IMG_5580.jpg",
    title: "Executive Dialogue & Peer Networking",
    subtitle: "Corporate & Academic Leaders in Conversation",
    objectPosition: "50% 22%",
    kbOrigin: "center 22%",
    kbMotion: { scale: [1.02, 1.08], x: ["-1.2%", "0.8%"], y: ["0%", "-0.8%"] },
  },
];

interface ChapterMediaArchive {
  id: string;
  city: string;
  date: string;
  editionBadge: string;
  coverImage: string;
  coverPosition?: string;
  subtitle: string;
  videos: {
    title: string;
    desc: string;
    youtubeId?: string;
    videoSrc?: string;
    tag: string;
  }[];
  photos: {
    src: string;
    caption: string;
    objectPosition?: string;
  }[];
}

function create24PhotoSlots(
  chapterLabel: string,
  uploadedPhotos: { src: string; caption: string; objectPosition?: string }[] = []
): { src: string; caption: string; objectPosition?: string }[] {
  return Array.from({ length: 24 }, (_, idx) => {
    const existing = uploadedPhotos[idx];
    if (existing && existing.src) {
      return existing;
    }
    return {
      src: "",
      caption: `${chapterLabel} — Conclave Moment ${String(idx + 1).padStart(2, "0")}`,
      objectPosition: "50% 25%",
    };
  });
}

const CHAPTER_ARCHIVES: Record<string, ChapterMediaArchive> = {
  "bengaluru-1": {
    id: "bengaluru-1",
    city: "Bengaluru (1.0)",
    date: "June 2024",
    editionBadge: "Allyship++ 1.0 — 1st Edition",
    coverImage: "/bengaluru-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Leadership and Collaboration Across Disciplines — Official chapter video space and 24 conclave photo slots.",
    videos: [],
    photos: create24PhotoSlots("Bengaluru 1.0"),
  },
  "hyderabad-1": {
    id: "hyderabad-1",
    city: "Hyderabad (1.0)",
    date: "July 2024",
    editionBadge: "Allyship++ 1.0 — 2nd Edition",
    coverImage: "/hyderabad-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Practicing Allyship at the Organizational Level — Official chapter video and 24 conclave photo slots.",
    videos: [
      {
        title: "Hyderabad Chapter | Official Conclave Film",
        desc: "Highlights from the Hyderabad conclave: conversations on leadership, young talent, and industry–academia collaboration.",
        youtubeId: "8wSGKsWyQwk",
        tag: "Hyderabad 1.0",
      },
    ],
    photos: create24PhotoSlots("Hyderabad 1.0"),
  },
  "kolkata-1": {
    id: "kolkata-1",
    city: "Kolkata (1.0)",
    date: "September 2024",
    editionBadge: "Allyship++ 1.0 — 3rd Edition",
    coverImage: "/kolkata-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Leadership, Collaboration, and Workplace Inclusion — Official chapter video space and 24 conclave photo slots.",
    videos: [],
    photos: create24PhotoSlots("Kolkata 1.0"),
  },
  "mumbai-1": {
    id: "mumbai-1",
    city: "Mumbai (1.0)",
    date: "October 2025",
    editionBadge: "Allyship++ 1.0 — 4th Edition",
    coverImage: "/mumbai-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Building Inclusive and Empowered Workplaces — Official chapter video space and 24 conclave photo slots.",
    videos: [],
    photos: create24PhotoSlots("Mumbai 1.0"),
  },
  "bengaluru-2": {
    id: "bengaluru-2",
    city: "Bengaluru (2.0)",
    date: "March 2026",
    editionBadge: "Allyship++ 2.0 — 1st Edition",
    coverImage: "/bengaluru-2.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Next-Gen Talent & Industry–Academia Collaboration — Official chapter video space and 24 conclave photo slots.",
    videos: [],
    photos: create24PhotoSlots("Bengaluru 2.0"),
  },
  "hyderabad-2": {
    id: "hyderabad-2",
    city: "Hyderabad (2.0)",
    date: "May 2026",
    editionBadge: "Allyship++ 2.0 — 2nd Edition",
    coverImage: "/slides/IMG_7873.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Practicing Allyship for Emerging Talent — Official chapter video and 24 conclave photo slots.",
    videos: [
      {
        title: "Hyderabad 2.0 Chapter | Conclave Film",
        desc: "Conversations on guiding early-career professionals, campus-to-workplace transition, and empathetic leadership.",
        youtubeId: "8wSGKsWyQwk",
        tag: "Hyderabad 2.0",
      },
    ],
    photos: create24PhotoSlots("Hyderabad 2.0"),
  },
  "chennai-2": {
    id: "chennai-2",
    city: "Chennai (2.0)",
    date: "July 2026",
    editionBadge: "Allyship++ 2.0 — 3rd Edition",
    coverImage: "/slides/CON01670.jpg",
    coverPosition: "50% 28%",
    subtitle:
      "Practicing Allyship as a Leadership Responsibility — Official panel & fireside videos and 24 conclave photo slots.",
    videos: [
      {
        title: "Chennai 2.0 | Panel: Practicing Allyship",
        desc: "Moderated by Archana Grover of Standard Chartered, with leaders from Rocket India, Foodhub, Nordex, KaarTech and Mphasis.",
        youtubeId: "yD0eEo0oh7A",
        tag: "Chennai 2.0 Panel",
      },
      {
        title: "Chennai 2.0 | Fireside Chat with Premanand J.",
        desc: "Former international sprinter and Indian sprint coach for the Paris Olympics, on what sport teaches about leadership and mentorship.",
        youtubeId: "0vOCqqE4zbI",
        tag: "Sport & Leadership",
      },
    ],
    photos: create24PhotoSlots("Chennai 2.0"),
  },
};

function buildShuffledDeck(length: number, avoidFirst?: number): number[] {
  const deck = Array.from({ length }, (_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  if (length > 1 && avoidFirst !== undefined && deck[0] === avoidFirst) {
    const swapIdx = 1 + Math.floor(Math.random() * (length - 1));
    [deck[0], deck[swapIdx]] = [deck[swapIdx], deck[0]];
  }
  return deck;
}

function EventContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"Chapters" | "Speakers" | "Videos">("Chapters");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedMediaCity, setSelectedMediaCity] = useState<string | null>(null);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [slideDeck, setSlideDeck] = useState<number[]>(() =>
    Array.from({ length: eventHeroImages.length }, (_, i) => i)
  );
  const [deckPos, setDeckPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlide = slideDeck[deckPos] ?? 0;

  const advanceDeckSlide = useCallback(() => {
    if (deckPos + 1 < slideDeck.length) {
      setDeckPos(deckPos + 1);
    } else {
      const lastShown = slideDeck[slideDeck.length - 1];
      setSlideDeck(buildShuffledDeck(eventHeroImages.length, lastShown));
      setDeckPos(0);
    }
  }, [deckPos, slideDeck]);

  const previousDeckSlide = useCallback(() => {
    setDeckPos((prev) => (prev - 1 + slideDeck.length) % slideDeck.length);
  }, [slideDeck.length]);

  useEffect(() => {
    // Shuffle full deck on client hydration so all 11 photos play in random order before repeating
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only random deck shuffle on mount
    setSlideDeck(buildShuffledDeck(eventHeroImages.length));
    setDeckPos(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      advanceDeckSlide();
    }, 5200);
    return () => clearInterval(timer);
  }, [isPaused, advanceDeckSlide]);

  const conclaves = conclavesData;

  useEffect(() => {
    const chapterParam = searchParams.get("chapter");
    if (chapterParam) {
      const idx = conclaves.findIndex(
        (c) =>
          c.id.toLowerCase() === chapterParam.toLowerCase() ||
          c.city.toLowerCase().includes(chapterParam.toLowerCase())
      );
      if (idx !== -1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
        setSelectedChapter(idx);
        setActiveTab("Chapters");
        const el = document.getElementById("chapter-details");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [searchParams, conclaves]);

  const currentConclave = conclaves[selectedChapter];
  const currentMediaArchive = selectedMediaCity ? CHAPTER_ARCHIVES[selectedMediaCity] : null;

  return (
    <div className="flex flex-col w-full bg-canvas text-content pb-0">
      {/* 1. EDITORIAL LUXE HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line overflow-hidden">
        <HeroBackdrop />
        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/30 text-accent text-[11px] font-bold font-heading tracking-[0.14em] uppercase">
                <span>Conversations That Outlive the Room</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                The Metro <br />
                <span className="italic font-normal">Conclaves</span>
              </h1>

              <p className="text-lg sm:text-xl font-display text-content-muted italic">
                Where Corporate Vision Meets Sporting Grit &amp; Academic Leadership
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl font-normal">
                Siksha &lsquo;O&rsquo; Anusandhan anchors ALLYSHIP++ across India&apos;s premier commercial corridors. Each standing chapter convenes enterprise CXOs, talent strategists, Olympic coaches, and university leadership to co-author institutional pipelines, de-bias hiring, and accelerate regional talent into national leadership.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-primary"
                >
                  <span>Request an Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#chapter-details"
                  className="btn-secondary"
                >
                  <span>Explore the Chapters</span>
                </a>
              </div>
            </div>

            {/* Right Column: Curated Cinematic Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group relative rounded-3xl overflow-hidden bg-surface p-1.5 border border-line shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
              >
                <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 on-media">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={eventHeroImages[heroSlide].src}
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <motion.div
                        initial={{
                          scale: eventHeroImages[heroSlide].kbMotion.scale[0],
                          x: eventHeroImages[heroSlide].kbMotion.x[0],
                          y: eventHeroImages[heroSlide].kbMotion.y[0],
                        }}
                        animate={{
                          scale: eventHeroImages[heroSlide].kbMotion.scale[1],
                          x: eventHeroImages[heroSlide].kbMotion.x[1],
                          y: eventHeroImages[heroSlide].kbMotion.y[1],
                        }}
                        transition={{ duration: 6.2, ease: "easeOut" }}
                        style={{ transformOrigin: eventHeroImages[heroSlide].kbOrigin }}
                        className="relative w-full h-full will-change-transform"
                      >
                        <Image
                          src={eventHeroImages[heroSlide].src}
                          alt={eventHeroImages[heroSlide].title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          style={{ objectPosition: eventHeroImages[heroSlide].objectPosition }}
                          className="object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Top-Right Manual Shuffle / Navigation Controls */}
                  <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      onClick={previousDeckSlide}
                      aria-label="Previous slide"
                      className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={advanceDeckSlide}
                      aria-label="Next slide in shuffled sequence"
                      className="w-8 h-8 rounded-full bg-black/55 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Cinematic Vignette & Animated Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 flex flex-col justify-end p-5 sm:p-6 text-content pointer-events-none">
                    <span className="text-[11px] font-bold font-heading text-accent-light uppercase tracking-[0.16em]">
                      Editions 1.0 &amp; 2.0
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={eventHeroImages[heroSlide].title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      >
                        <p className="text-sm sm:text-base font-bold text-content mt-0.5 leading-snug">
                          {eventHeroImages[heroSlide].title}
                        </p>
                        <p className="text-[11px] text-content-secondary mt-0.5">
                          {eventHeroImages[heroSlide].subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL PHILOSOPHY & MANDATE */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            The Institutional Mandate
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Why Allyship<span className="text-accent">++</span>?
          </h2>

          <p className="text-base text-content-secondary leading-relaxed font-normal max-w-2xl mx-auto">
            In an era of rapid disruption, transactional placement is no longer sufficient. Siksha &lsquo;O&rsquo; Anusandhan moves academic leadership directly into corporate boardrooms—co-creating empathetic, resilient, and future-ready talent ecosystems.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-[11px] font-bold tracking-[0.14em] text-accent uppercase block">
                  Beyond Campus Recruitment
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  Ending Transactional Hiring
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Conventional higher education relies on short placement drives. ALLYSHIP++ integrates Fortune 500 enterprise directors and capability heads year-round to co-design curricula, validate hands-on lab competencies, and co-establish technical standards before graduation.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Curriculum aligned with CXO benchmarks</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Medal className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-[11px] font-bold tracking-[0.14em] text-accent uppercase block">
                  The Athletic Crucible
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  How Athletics Anchors Allyship
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Olympic medalists and national sprint coaches anchor our conclaves because elite championship sports embody radical accountability, mentorship under pressure, and emotional fortitude.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Mentorship tested under Olympic pressure</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-[11px] font-bold tracking-[0.14em] text-accent uppercase block">
                  Workplace Cultural Shift
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  Everyday Duty Over Slogans
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Allyship is not performative compliance. Across our national conclaves, corporate leaders establish that genuine executive allyship is an operational duty dismantling hierarchical barriers and safeguarding psychological safety for early-career professionals.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Psychological safety in high-stress teams</span>
            </div>
          </div>

          <div className="bg-surface rounded-2xl p-7 border border-line hover:border-accent transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-on-accent transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display text-[11px] font-bold tracking-[0.14em] text-accent uppercase block">
                  Two-Way Enterprise Bridge
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  Co-Innovation &amp; Living Labs
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Allyship is reciprocal. Industry partners gain direct access to SOA’s NIRF Top-15 research faculty and labs—co-creating enterprise Centres of Excellence (like Tech Mahindra&apos;s ServiceNow &amp; AI Labs).
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-line flex items-center gap-2 font-sans text-xs font-semibold text-content-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Campus Centres of Excellence established</span>
            </div>
          </div>
        </div>

        {/* Leadership Vision Callout Box */}
        <div className="mt-14 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-surface-2 via-surface to-canvas text-content shadow-2xl relative overflow-hidden border border-line">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                Our Purpose
              </span>
              <blockquote className="font-display italic font-normal tracking-normal text-2xl sm:text-3xl lg:text-4xl text-content leading-[1.35]">
                &ldquo;Rather than waiting for industry to visit our campus, we bring academic dialogue directly to the cities where corporate leadership shapes the future of work.&rdquo;
              </blockquote>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                Through Allyship++, Siksha &lsquo;O&rsquo; Anusandhan works alongside corporate leaders to ensure young professionals enter workplaces that value mentorship, collaboration, and shared success.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 font-sans text-xs text-content-muted">
                <span className="font-semibold text-content">Siksha &lsquo;O&rsquo; Anusandhan (Deemed to be University)</span>
                <span>•</span>
                <span className="text-accent">NIRF Rank 15 · NAAC A++ (3.88 CGPA)</span>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-glass border border-line text-center flex flex-col items-center justify-center h-full">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-accent">500+</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Leaders &amp; Delegates</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center flex flex-col items-center justify-center h-full">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-content">7</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Metro Conclaves</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center flex flex-col items-center justify-center h-full">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-content">9+</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Sports Icons &amp; Coaches</div>
              </div>
              <div className="p-5 rounded-2xl bg-glass border border-line text-center flex flex-col items-center justify-center h-full">
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-accent">5</div>
                <div className="font-sans text-xs text-content-secondary mt-1 font-medium">Major Indian Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 MESSAGE FROM CONCLAVE CONVENER */}
      <section className="pb-20 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="md:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-surface-3 border border-line">
            <Image
              src="/IMG_7364.jpg"
              alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-surface-2 text-content border border-line font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
                Conclave Convener
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent block">
                Convener&apos;s Note
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-content">
                Message from Prof. (Dr.) Raj Kumar Hota
              </h2>
            </div>

            <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted">
              As Convener of the Allyship++ conclaves across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai, Prof. (Dr.) Raj Kumar Hota leads SOA’s ongoing dialogue with corporate executives, HR leaders, and industry mentors.
            </p>

            <blockquote className="font-display italic font-normal tracking-normal text-base sm:text-lg text-content leading-relaxed border-l-2 border-accent pl-5 py-3 bg-surface-2 rounded-r-xl">
              &ldquo;True allyship bridges the gap between campus and career. By grounding corporate-academic partnerships in discipline and shared purpose, we create environments where young professionals thrive from day one.&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-line">
              <h4 className="font-display text-base font-semibold tracking-normal text-content">
                Prof. (Dr.) Raj Kumar Hota
              </h4>
              <p className="font-sans text-xs font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                Dean of Corporate Relations and Placement · Convener, ALLYSHIP++ National Conclaves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STICKY EDITORIAL TAB SWITCHER */}
      <div className="sticky top-20 lg:top-24 z-30 bg-gradient-to-b from-canvas via-canvas/95 to-transparent pt-4 pb-6">
        <nav
          aria-label="Conclave sections"
          className="py-2.5 px-4 mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full bg-canvas/90 backdrop-blur-md border border-line shadow-2xl flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto"
        >
          {(["Chapters", "Speakers", "Videos"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setActiveTab(t);
                if (t === "Videos") {
                  setSelectedMediaCity(null);
                }
                const el = document.getElementById("tab-content");
                if (el && typeof window !== "undefined" && window.scrollY > el.offsetTop) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                activeTab === t
                  ? "bg-accent text-on-accent shadow-md font-semibold"
                  : "bg-glass border border-line text-content-muted hover:text-content hover:bg-glass-strong"
              }`}
            >
              {t === "Chapters" && "All 7 Chapters (1.0 & 2.0)"}
              {t === "Speakers" && "Marquee Speakers Roster"}
              {t === "Videos" && "Conclave Moments"}
            </button>
          ))}
        </nav>
      </div>

      {/* 4. MAIN TAB CONTENT */}
      <div id="tab-content" className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 w-full scroll-mt-24">
        {/* TAB 1: ALL 7 CHAPTERS */}
        {activeTab === "Chapters" && (
          <div id="chapter-details" className="space-y-10 scroll-mt-24 pt-4">
            {/* City Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 scroll-mt-24">
              {conclaves.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedChapter === idx
                      ? "bg-surface-2 border-accent ring-2 ring-accent/30 shadow-md text-content"
                      : "bg-surface border border-line hover:border-line-strong text-content-muted hover:text-content"
                  }`}
                >
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block">
                    {c.date}
                  </span>
                  <span className="font-display text-sm font-semibold tracking-normal text-content block truncate mt-0.5">
                    {c.city}
                  </span>
                  <span className="font-sans text-xs text-content-muted block truncate mt-0.5">
                    {c.editionCycle === "2.0" ? "Chapter 2.0" : "Chapter 1.0"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Conclave Detail Card */}
            <div id="selected-conclave" className="bg-surface rounded-3xl p-8 sm:p-12 space-y-10 border border-line shadow-xl scroll-mt-24">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-line">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-accent text-on-accent font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
                      {currentConclave.edition}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-sans text-xs font-medium">
                      {currentConclave.date}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.025em] leading-[1.1] text-content scroll-mt-24">
                    {currentConclave.city}: {currentConclave.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-5 font-sans text-xs text-content-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {currentConclave.venue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      {currentConclave.turnout}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent font-sans text-xs font-semibold tracking-normal py-2.5 px-5 rounded-full transition-colors duration-200 shadow-sm shrink-0 active:scale-95"
                >
                  Join Future Conclaves
                </button>
              </div>

              {/* Narrative Description */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Conclave Overview & Strategic Dialogue
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed font-normal tracking-[0.01em]">
                  {currentConclave.desc}
                </p>
                <div className="pt-2">
                  <span className="inline-block font-sans text-xs font-medium text-content-secondary bg-surface-2 px-3.5 py-2 rounded-xl border border-line">
                    Key Focus: {currentConclave.focus}
                  </span>
                </div>
              </div>

              {/* Sports Legends & Special Chief Guests */}
              <div id="sports-guests" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2 text-accent">
                  <Medal className="w-4 h-4" />
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-content-secondary">
                    Sports Icons & Keynote Guests
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.sportsGuests.map((sg) => (
                    <div key={sg.name} className="p-5 rounded-2xl bg-surface-2 border border-line space-y-1">
                      <h4 className="font-display text-base font-semibold tracking-normal text-content">{sg.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] text-accent">{sg.role}</div>
                      <div className="font-sans text-xs text-content-muted italic">{sg.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moderators & Corporate Panelists */}
              <div id="chapter-panelists" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-content-secondary">
                    Moderator & Corporate Panelists
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.moderators.map((m) => (
                    <div key={m.name} className="p-5 rounded-2xl bg-surface-2 border border-line hover:border-accent/60 transition-colors">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">Moderator</span>
                      <h4 className="font-display text-base font-semibold tracking-normal text-content mt-1">{m.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{m.role}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {currentConclave.panelists.map((p) => (
                    <div key={p.name} className="p-5 rounded-2xl bg-surface-2 border border-line hover:border-accent/60 transition-colors">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-muted">Panelist</span>
                      <h4 className="font-display text-base font-semibold tracking-normal text-content mt-1">{p.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{p.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOA Leadership Delegation */}
              <div id="leadership-delegation" className="space-y-4 pt-6 border-t border-line scroll-mt-24">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-accent" />
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-content-secondary">
                    SOA University Institutional Delegation
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentConclave.leadership.map((l) => (
                    <div key={l.name} className="p-4 rounded-xl bg-surface-2 border border-line">
                      <h4 className="font-display text-base font-semibold tracking-normal text-content">{l.name}</h4>
                      <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{l.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE SPEAKERS ROSTER */}
        {activeTab === "Speakers" && (
          <div id="speakers-section" className="space-y-10 scroll-mt-24 pt-4">
            <div className="max-w-5xl space-y-3 mb-8">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Luminary Roster
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight scroll-mt-24">
                Marquee Speakers &amp; Leaders
              </h2>
              <p className="text-base text-content-secondary max-w-2xl leading-relaxed">
                Over 40 distinguished corporate leaders, Olympic champions, and academic dignitaries across all seven Allyship++ conclaves.
              </p>
            </div>

            {/* Sports & Keynote Icons */}
            <div className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-content-secondary">
                  Olympic Champions & Indian Sports Legends
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Anju Bobby George", chapter: "Bengaluru 1.0", role: "Olympian & World Athletics Medalist", note: "Keynote on Leadership in Sports" },
                  { name: "Arshad Ayub", chapter: "Hyderabad 1.0", role: "Former Indian Test & ODI Cricketer", note: "Chief Guest on Collaborative Leadership" },
                  { name: "Gurbux Singh", chapter: "Kolkata 1.0", role: "1964 Olympic Hockey Gold Medalist", note: "Sports Legend Tribute" },
                  { name: "Gautam Sarkar", chapter: "Kolkata 1.0", role: "Former Indian Footballer ('Indian Beckenbauer')", note: "Sports Legend Tribute" },
                  { name: "Satyaprakash Krishna", chapter: "Kolkata 1.0", role: "Mentor to Former Indian Cricket Captain M.S. Dhoni", note: "Sponsorship & Talent Spotting" },
                  { name: "Nilesh Kulkarni", chapter: "Mumbai 1.0", role: "Former Indian Test Cricketer", note: "Fireside Chat on Resilience & Education" },
                  { name: "Anand Menezes", chapter: "Mumbai 1.0", role: "Olympian & Senior Consultant, AFI", note: "Keynote on Athletic High-Performance" },
                  { name: "Dr. G. Srinivas Patnaik", chapter: "Hyderabad 2.0", role: "Secretary, Athletics Federation of India", note: "Mentorship & Resilience in Young Talent" },
                  { name: "Premanand J.", chapter: "Chennai 2.0", role: "Paris Olympics National Sprint Coach", note: "Discipline, Mentorship & Gen-Z Leadership" },
                ].map((s) => (
                  <div key={s.name} className="p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-md hover:border-accent transition-all flex flex-col justify-between h-full">
                    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent bg-surface-2 border border-line px-2.5 py-1 rounded-full w-fit">
                      {s.chapter}
                    </span>
                    <h4 className="font-display text-base font-semibold tracking-normal text-content mt-3">{s.name}</h4>
                    <div className="font-sans text-sm font-normal tracking-[0.01em] text-accent mt-0.5">{s.role}</div>
                    <div className="font-sans text-xs text-content-muted mt-1.5 italic">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate & CXO Leaders */}
            <div className="space-y-4 pt-8 border-t border-line scroll-mt-24">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-content-secondary">
                  Corporate CXOs, CHROs & Capability Heads
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, LTTS", chapter: "Bengaluru & Mumbai" },
                  { name: "Archana Grover", role: "Global Head – Capabilities, Standard Chartered", chapter: "Chennai 2.0" },
                  { name: "Prof. Sanjay Dhir", role: "Professor, IIT Delhi", chapter: "Hyderabad 2.0" },
                  { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions", chapter: "Bengaluru 1.0" },
                  { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon", chapter: "Bengaluru 1.0" },
                  { name: "Pushkala Balasubramanian", role: "VP – Engineering, Kloudgin", chapter: "Hyderabad 1.0" },
                  { name: "Rohit Adlakha", role: "CXO Advisor, Human Edge Enterprises", chapter: "Hyderabad 1.0" },
                  { name: "Kiranmal Pendyala", role: "Former Strategic Thought Leader, UPS", chapter: "Hyderabad 1.0" },
                  { name: "Sudipto Ray", role: "MD – Cloud & Digital, PwC", chapter: "Kolkata 1.0" },
                  { name: "Brishti Mondal", role: "Vice President, NRI FinTech", chapter: "Kolkata 1.0" },
                  { name: "Sumit Agarwal", role: "DEI Advisor to Fortune 500 Companies", chapter: "Kolkata 1.0" },
                  { name: "Dr. Brillian S.K.", role: "EVP & Head HR, Times Professional Learning", chapter: "Mumbai 1.0" },
                  { name: "Rachita Mahadev", role: "Emerging Talent Lead – APJ, Akamai Technologies", chapter: "Hyderabad 2.0" },
                  { name: "Dr. Reena Das", role: "CHRO, Keolis Hyderabad", chapter: "Hyderabad 2.0" },
                  { name: "Suganya Veeraraghavan", role: "AVP, Rocket India", chapter: "Chennai 2.0" },
                  { name: "Suresh Aade", role: "Head HR, Foodhub", chapter: "Chennai 2.0" },
                  { name: "R.K. Ramachandran", role: "Global Talent Head, KaarTech", chapter: "Chennai 2.0" },
                  { name: "M.D. Joshua David", role: "India Campus Head, Mphasis", chapter: "Chennai 2.0" },
                ].map((c) => (
                  <div key={c.name} className="p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-md hover:border-accent transition-all flex flex-col justify-between h-full">
                    <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-content-muted bg-surface-2 border border-line px-2.5 py-1 rounded-full w-fit">
                      {c.chapter}
                    </span>
                    <h4 className="font-display text-base font-semibold tracking-normal text-content mt-3">{c.name}</h4>
                    <div className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONCLAVE MOMENTS (ALL 7 CHAPTER CARDS -> INSIDE CARD: VIDEO FIRST + 24 PHOTO SLOTS IN 6 ROWS) */}
        {activeTab === "Videos" && (
          <div id="videos-section" className="space-y-10 scroll-mt-24 pt-4">
            <div className="max-w-5xl space-y-3">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Conclave Moments · All 7 Editions
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight scroll-mt-24">
                Chapter-Wise Conclave Moments (7 Chapters)
              </h2>
              <p className="text-base text-content-secondary max-w-2xl leading-relaxed">
                Select any of the 7 chapter cards below to open its official conclave video space and 24 chapter photo slots inside.
              </p>
            </div>

            {!currentMediaArchive ? (
              /* INITIAL VIEW: 7 CHAPTER CARDS GRID (NO LOOSE VIDEO OR PHOTOS OUTSIDE) */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(CHAPTER_ARCHIVES).map((chapterKey, index) => {
                  const archive = CHAPTER_ARCHIVES[chapterKey];
                  return (
                    <button
                      key={chapterKey}
                      type="button"
                      onClick={() => {
                        setSelectedMediaCity(chapterKey);
                        const el = document.getElementById("videos-section");
                        if (el) {
                          setTimeout(() => {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }, 50);
                        }
                      }}
                      className="bg-surface rounded-3xl overflow-hidden border border-line shadow-xl hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                    >
                      {/* Card Cover Thumbnail */}
                      <div className="relative aspect-video w-full bg-canvas overflow-hidden">
                        <Image
                          src={archive.coverImage}
                          alt={`${archive.city} Chapter Cover`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          style={{ objectPosition: archive.coverPosition || "50% 25%" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 group-hover:from-black/70 transition-colors" />

                        {/* Top-left Edition Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#C5A880]">
                          Chapter {String(index + 1).padStart(2, "0")} · {archive.date}
                        </div>

                        {/* Top-right Count Pill */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-white/90">
                          {archive.videos.length > 0 ? `${archive.videos.length} Video${archive.videos.length > 1 ? "s" : ""}` : "1 Video Space"} · 24 Photos
                        </div>

                        {/* Center Play / Open Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-accent/90 text-on-accent flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block mb-1">
                            {archive.editionBadge}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-bold tracking-normal text-content leading-snug group-hover:text-accent transition-colors">
                            {archive.city} | Conclave Moments
                          </h3>
                          <p className="font-sans text-xs sm:text-sm font-normal tracking-[0.01em] text-content-muted mt-2 leading-relaxed">
                            {archive.subtitle}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-semibold text-accent">
                          <span>Open Chapter Card (Video + 24 Photos)</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* OPENED CHAPTER CARD: EVERYTHING (VIDEO SPACE FIRST + 24 PHOTO SLOTS IN 6 ROWS) INSIDE THE CARD */
              <div className="bg-surface rounded-3xl p-6 sm:p-10 lg:p-12 border border-line shadow-2xl space-y-10">
                {/* Card Top Navigation & 7-Chapter Quick Switcher */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-line">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedMediaCity(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 hover:bg-accent hover:text-on-accent text-content font-sans text-xs font-semibold border border-line transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      All 7 Chapter Cards
                    </button>
                    <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
                      {currentMediaArchive.editionBadge} · {currentMediaArchive.date}
                    </span>
                  </div>

                  {/* Quick Switcher Between All 7 Chapter Cards */}
                  <div className="flex flex-wrap items-center gap-2">
                    {Object.keys(CHAPTER_ARCHIVES).map((chapterKey) => {
                      const item = CHAPTER_ARCHIVES[chapterKey];
                      const isSelected = selectedMediaCity === chapterKey;
                      return (
                        <button
                          key={chapterKey}
                          type="button"
                          onClick={() => setSelectedMediaCity(chapterKey)}
                          className={`px-3 py-1.5 rounded-full font-sans text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? "bg-accent text-on-accent font-semibold shadow-sm"
                              : "bg-surface-2 border border-line text-content-muted hover:text-content"
                          }`}
                        >
                          {item.city}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Opened Card Title */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold font-heading uppercase tracking-[0.18em] text-accent block">
                    {currentMediaArchive.editionBadge}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content tracking-tight">
                    {currentMediaArchive.city} — Official Video &amp; 24 Conclave Moments
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-content-secondary max-w-3xl leading-relaxed">
                    {currentMediaArchive.subtitle}
                  </p>
                </div>

                {/* INSIDE CARD PART 1: OFFICIAL CHAPTER VIDEO SPACE FIRST */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-accent" />
                      <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-content">
                        1. {currentMediaArchive.city} Conclave Video
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-content-muted">
                      Folder: public/conclave-moments/{currentMediaArchive.id}/
                    </span>
                  </div>

                  {currentMediaArchive.videos.length === 0 ? (
                    /* Dedicated 16:9 Video Upload Space */
                    <div className="bg-surface-2/70 rounded-2xl overflow-hidden border-2 border-dashed border-accent/35 grid grid-cols-1 lg:grid-cols-12">
                      <div className="lg:col-span-8 relative aspect-video w-full bg-canvas/60 flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/40 text-accent flex items-center justify-center shadow-inner">
                          <Video className="w-7 h-7" />
                        </div>
                        <div className="space-y-1.5 max-w-md">
                          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-accent block">
                            Official Video Space · 16:9 Frame
                          </span>
                          <h5 className="font-display text-lg sm:text-xl font-bold text-content">
                            {currentMediaArchive.city} Conclave Video Slot
                          </h5>
                          <p className="font-sans text-xs text-content-muted leading-relaxed">
                            Drop your chapter video or YouTube link into{" "}
                            <code className="px-1.5 py-0.5 rounded bg-surface border border-line text-accent font-mono">
                              public/conclave-moments/{currentMediaArchive.id}/
                            </code>
                          </p>
                        </div>
                      </div>
                      <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-center space-y-3 border-t lg:border-t-0 lg:border-l border-line">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-semibold uppercase tracking-[0.14em] w-fit">
                          {currentMediaArchive.city}
                        </span>
                        <h5 className="font-display text-lg sm:text-xl font-bold text-content leading-snug">
                          {currentMediaArchive.city} | Official Conclave Film
                        </h5>
                        <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
                          Reserved top showcase space for the {currentMediaArchive.city} conclave video recording.
                        </p>
                      </div>
                    </div>
                  ) : currentMediaArchive.videos.length === 1 ? (
                    <div className="bg-surface-2 rounded-2xl overflow-hidden border border-line grid grid-cols-1 lg:grid-cols-12">
                      <div className="lg:col-span-8 relative aspect-video w-full bg-canvas overflow-hidden">
                        {currentMediaArchive.videos[0].videoSrc ? (
                          <video
                            src={currentMediaArchive.videos[0].videoSrc}
                            controls
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube-nocookie.com/embed/${currentMediaArchive.videos[0].youtubeId}`}
                            title={currentMediaArchive.videos[0].title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </div>
                      <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-center space-y-3 border-t lg:border-t-0 lg:border-l border-line">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-semibold uppercase tracking-[0.14em] w-fit">
                          {currentMediaArchive.videos[0].tag}
                        </span>
                        <h5 className="font-display text-lg sm:text-xl font-bold text-content leading-snug">
                          {currentMediaArchive.videos[0].title}
                        </h5>
                        <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed">
                          {currentMediaArchive.videos[0].desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {currentMediaArchive.videos.map((v, vIdx) => (
                        <div
                          key={v.youtubeId || v.videoSrc || vIdx}
                          className="bg-surface-2 rounded-2xl overflow-hidden border border-line flex flex-col justify-between"
                        >
                          <div className="relative aspect-video w-full bg-canvas overflow-hidden">
                            {v.videoSrc ? (
                              <video src={v.videoSrc} controls className="w-full h-full object-cover" />
                            ) : (
                              <iframe
                                className="w-full h-full"
                                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                                title={v.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            )}
                          </div>
                          <div className="p-5 space-y-1.5">
                            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-accent block">
                              {v.tag}
                            </span>
                            <h5 className="font-display text-base sm:text-lg font-semibold text-content leading-snug">
                              {v.title}
                            </h5>
                            <p className="font-sans text-xs text-content-muted leading-relaxed">
                              {v.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* INSIDE CARD PART 2: 24 CHAPTER PHOTO SPACES IN 6 ROWS BELOW THE VIDEO */}
                <div className="space-y-5 pt-6 border-t border-line">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-content">
                        2. {currentMediaArchive.city} Chapter Photographs (24 Photo Spaces · 6 Rows)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-content-muted">
                      4 columns × 6 rows = 24 photos · public/conclave-moments/{currentMediaArchive.id}/
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {currentMediaArchive.photos.map((photo, idx) => {
                      const slotNumber = String(idx + 1).padStart(2, "0");
                      const rowNumber = Math.floor(idx / 4) + 1;
                      return (
                        <div
                          key={`${currentMediaArchive.id}-photo-${idx}`}
                          className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 ${
                            photo.src
                              ? "bg-surface-2 border border-line shadow-sm hover:border-accent/50 hover:shadow-lg"
                              : "bg-surface-2/60 border-2 border-dashed border-line hover:border-accent/45 flex flex-col items-center justify-center p-4 text-center"
                          }`}
                        >
                          {photo.src ? (
                            <>
                              <Image
                                src={photo.src}
                                alt={`${currentMediaArchive.city} — ${photo.caption}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                style={{ objectPosition: photo.objectPosition || "50% 25%" }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                              {/* Top-right Frame Index Badge (01 to 24) */}
                              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold text-white/85">
                                {slotNumber} / 24
                              </div>

                              {/* Bottom Caption Overlay */}
                              <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end text-left">
                                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.16em] text-[#C5A880] mb-0.5">
                                  {currentMediaArchive.city}
                                </span>
                                <p className="font-sans text-xs sm:text-sm font-medium text-white leading-snug line-clamp-2">
                                  {photo.caption}
                                </p>
                              </div>
                            </>
                          ) : (
                            /* Clean Dedicated 4:3 Photo Slot Space Ready for Upload */
                            <>
                              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-surface border border-line text-[10px] font-mono text-content-muted">
                                Row {rowNumber}
                              </div>
                              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-accent/15 border border-accent/30 text-[10px] font-mono font-semibold text-accent">
                                {slotNumber} / 24
                              </div>
                              <div className="space-y-1.5 mt-2">
                                <div className="text-xs font-heading font-bold uppercase tracking-[0.14em] text-content">
                                  Photo Slot {slotNumber}
                                </div>
                                <div className="text-[11px] font-sans text-content-muted">
                                  {currentMediaArchive.city}
                                </div>
                                <div className="text-[10px] font-mono text-accent/80 pt-1">
                                  photo-{slotNumber}.jpg
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}

export default function EventPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas text-content p-20 text-center">Loading Conclave Directory...</div>}>
      <EventContent />
    </Suspense>
  );
}

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
import { getCityLandmarkMeta } from "@/components/event/CityLandmarks";

const CHAPTER_THEMES: Record<string, string> = {
  "bengaluru-1": "Cross-Discipline Leadership",
  "hyderabad-1": "Organizational Trust",
  "kolkata-1": "Workplace Inclusion",
  "mumbai-1": "Empowered Teams",
  "bengaluru-2": "Tech-Academia Ties",
  "hyderabad-2": "Emerging Talent",
  "chennai-2": "Executive Mentorship",
};

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
  cycle: "1.0" | "2.0";
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
  "bengaluru-2": {
    id: "bengaluru-2",
    cycle: "2.0",
    city: "Bengaluru",
    date: "March 2026",
    editionBadge: "Allyship++ — 1st Edition",
    coverImage: "/bengaluru-2.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Next-Gen Talent & Industry–Academia Collaboration — Executive roundtable insights, mentorship dialogues, and chapter moments from Bengaluru.",
    videos: [],
    photos: create24PhotoSlots("Bengaluru"),
  },
  "hyderabad-2": {
    id: "hyderabad-2",
    cycle: "2.0",
    city: "Hyderabad",
    date: "May 2026",
    editionBadge: "Allyship++ — 2nd Edition",
    coverImage: "/slides/IMG_7873.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Practicing Allyship for Emerging Talent — Keynote deliberations, campus-to-corporate transitions, and curated moments from Gachibowli.",
    videos: [
      {
        title: "Hyderabad Chapter | Conclave Film",
        desc: "Conversations on guiding early-career professionals, campus-to-workplace transition, and empathetic leadership.",
        youtubeId: "8wSGKsWyQwk",
        tag: "Hyderabad",
      },
    ],
    photos: create24PhotoSlots("Hyderabad"),
  },
  "chennai-2": {
    id: "chennai-2",
    cycle: "2.0",
    city: "Chennai",
    date: "July 2026",
    editionBadge: "Allyship++ — 3rd Edition",
    coverImage: "/slides/CON01670.jpg",
    coverPosition: "50% 28%",
    subtitle:
      "Practicing Allyship as a Leadership Responsibility — Full panel deliberations, Olympic fireside conversation, and chapter gallery from Chennai.",
    videos: [
      {
        title: "Chennai | Panel: Practicing Allyship",
        desc: "Moderated by Archana Grover of Standard Chartered, with leaders from Rocket India, Foodhub, Nordex, KaarTech and Mphasis.",
        youtubeId: "yD0eEo0oh7A",
        tag: "Chennai Panel",
      },
      {
        title: "Chennai | Fireside Chat with Premanand J.",
        desc: "Former international sprinter and Indian sprint coach for the Paris Olympics, on what sport teaches about leadership and mentorship.",
        youtubeId: "0vOCqqE4zbI",
        tag: "Sport & Leadership",
      },
    ],
    photos: create24PhotoSlots("Chennai"),
  },
  "bengaluru-1": {
    id: "bengaluru-1",
    cycle: "1.0",
    city: "Bengaluru",
    date: "June 2024",
    editionBadge: "Allyship++ — 1st Edition",
    coverImage: "/bengaluru-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Leadership and Collaboration Across Disciplines — Inaugural conclave dialogues with corporate and engineering leaders in Bengaluru.",
    videos: [],
    photos: create24PhotoSlots("Bengaluru", [
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-01.jpg",
        caption: "Executive Panel Discussion on Practicing Allyship & Talent Strategy",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-02.jpg",
        caption: "Inaugural Dignitaries & Academic Leadership with Allyship++ Installation",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-03.jpg",
        caption: "Boardroom CXOs & Capability Heads in Conclave Deliberations",
        objectPosition: "50% 35%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-04.jpg",
        caption: "Grand Conclave Stage Recognition & Institutional Partnership Honor",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-05.jpg",
        caption: "Interactive Session Dialogue & Q&A with Industry Delegates",
        objectPosition: "50% 35%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-06.jpg",
        caption: "Panel Discourse on Building Future-Ready Talent Ecosystems",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-07.jpg",
        caption: "Executive Camaraderie & Informal Exchanges at Bengaluru Conclave",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-08.jpg",
        caption: "Felicitation of Distinguished Guests with Traditional Uttariya & Memento",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-09.jpg",
        caption: "Leadership Alignment & Conclave Overview from the Dais",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-10.jpg",
        caption: "Commemorative Memento Presentation to Industry Dignitaries",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-11.jpg",
        caption: "Workforce Readiness & Curriculum Agility Panel Session",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-12.jpg",
        caption: "Executive Peer Dialogue & Industry-Academia Networking",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-13.jpg",
        caption: "Inaugural Address by Vice-Chancellor Prof. Pradipta Kumar Nanda",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-14.jpg",
        caption: "Conclave Delegates & Engineering Leaders Engaged in Deliberation",
        objectPosition: "50% 35%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-15.jpg",
        caption: "Distinguished Guest Felicitation on Stage by University Leadership",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-16.jpg",
        caption: "Strategic Collaboration Dialogue Between Corporate Leaders & Faculty",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-17.jpg",
        caption: "Cross-Industry Panel Deliberations on Engineering & Leadership",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-18.jpg",
        caption: "Keynote Address by Dr. P.B. Kotur, Head, L&T Global Engineering Academy",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-19.jpg",
        caption: "Academic & Industry Leadership Synthesis on the Dais",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-20.jpg",
        caption: "Keynote Perspectives: Aligning Corporate Corridors with Campus Talent",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-21.jpg",
        caption: "Industry Address by Dr. S.J. Naganagouda, Chief People Officer, Tally Solutions",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-22.jpg",
        caption: "Welcome & Conclave Framing Address by Prof. (Dr.) Raj Kumar Hota",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-23.jpg",
        caption: "Applied Innovation & Emerging Tech Skills Dialogue",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/bengaluru-1/bengaluru-1-24.jpg",
        caption: "Corporate Foresight Address on Evolving Tech Corridors",
        objectPosition: "50% 25%",
      },
    ]),
  },
  "hyderabad-1": {
    id: "hyderabad-1",
    cycle: "1.0",
    city: "Hyderabad",
    date: "July 2024",
    editionBadge: "Allyship++ — 2nd Edition",
    coverImage: "/hyderabad-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Practicing Allyship at the Organizational Level — CXO and scientific leadership conversations from the Hyderabad Tech Corridor.",
    videos: [
      {
        title: "Hyderabad Chapter | Official Conclave Film",
        desc: "Highlights from the Hyderabad conclave: conversations on leadership, young talent, and industry–academia collaboration.",
        videoSrc: "/discover/soa-allyship-hyd-compressed.mp4",
        youtubeId: "8wSGKsWyQwk",
        tag: "Hyderabad",
      },
    ],
    photos: create24PhotoSlots("Hyderabad", [
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-09.jpg",
        caption: "Executive Roundtable on Curriculum Agility & Industry Co-Design",
        objectPosition: "50% 35%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-06.jpg",
        caption: "Multi-Sector Leadership Panel Deliberation on the Main Stage",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-foyer-selfie.jpg",
        caption: "Conclave Delegates & Executive Foyer Moments in Hyderabad",
        objectPosition: "50% 25%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-photobooth-charminar.jpg",
        caption: "Commemorative Charminar Installation & Conclave Delegation Frame",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-05.jpg",
        caption: "Executive Roundtable: Campus-to-Corporate Transition Strategies",
        objectPosition: "50% 35%",
      },
      {
        src: "",
        caption: "Hyderabad — Conclave Moment 06",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-07.jpg",
        caption: "Senior Academic Leadership & Industry Leaders in Dialogue",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-08.jpg",
        caption: "Engaged Conclave Audience Across Banquet Seating",
        objectPosition: "50% 30%",
      },
      {
        src: "",
        caption: "Hyderabad — Conclave Moment 09",
        objectPosition: "50% 35%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-10.jpg",
        caption: "Executive Dais Synthesis & Panel Deliberation on Stage",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-11.jpg",
        caption: "CXOs & Technology Leaders Exchanging Strategic Perspectives",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-12.jpg",
        caption: "Stage Felicitation Ceremony with University Dignitaries",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-13.jpg",
        caption: "Roundtable Engagement on Talent Retention & Mentorship",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-14.jpg",
        caption: "Dais Leadership & Executive Panel in Collaborative Discussion",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-15.jpg",
        caption: "Corporate Leadership Exchange During Executive High Tea",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-16.jpg",
        caption: "Grand Conclave Hall Overview & Seated Executive Delegation",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-17.jpg",
        caption: "Institutional Partnerships & Engineering Pipeline Dialogue",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-18.jpg",
        caption: "University Leadership & Corporate Dignitaries on the Dais",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-19.jpg",
        caption: "Distinguished Guest Felicitation with Traditional Memento",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-20.jpg",
        caption: "Executive Peer Networking in the Conclave Reception Foyer",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-21.jpg",
        caption: "Industry Panel in Collaborative Deliberations on Stage",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-22.jpg",
        caption: "Enterprise Leaders in Bilateral Academic Collaboration Exchange",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-23.jpg",
        caption: "Commemorative Stage Honor Presentation to Industry Partners",
        objectPosition: "50% 30%",
      },
      {
        src: "/conclave-moments/hyderabad-1/hyderabad-1-24.jpg",
        caption: "Concluding Grand Dais Alignment & Academic Leadership Ensemble",
        objectPosition: "50% 30%",
      },
    ]),
  },
  "kolkata-1": {
    id: "kolkata-1",
    cycle: "1.0",
    city: "Kolkata",
    date: "September 2024",
    editionBadge: "Allyship++ — 3rd Edition",
    coverImage: "/kolkata-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Leadership, Collaboration, and Workplace Inclusion — Dual-panel deliberations and sports legends tribute from the Kolkata chapter.",
    videos: [],
    photos: create24PhotoSlots("Kolkata"),
  },
  "mumbai-1": {
    id: "mumbai-1",
    cycle: "1.0",
    city: "Mumbai",
    date: "October 2025",
    editionBadge: "Allyship++ — 4th Edition",
    coverImage: "/mumbai-1.jpg",
    coverPosition: "50% 25%",
    subtitle:
      "Building Inclusive and Empowered Workplaces — High-performance culture and talent transformation insights from Mumbai.",
    videos: [],
    photos: create24PhotoSlots("Mumbai"),
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
  const [activeTab, setActiveTab] = useState<"Chapters" | "Videos">("Chapters");
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
            <div className="lg:col-span-7 space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 border border-accent/30 shadow-sm font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                <span>A Continuing National Dialogue · 7 Editions</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-content leading-[1.05]">
                The ALLYSHIP<span className="text-accent">++</span> <br />
                <span className="italic font-normal">Conclaves</span>
              </h1>

              <p className="text-base sm:text-lg font-display text-content-muted italic lg:whitespace-nowrap">
                Where Corporate Chairs, Olympians, and Thinkers Connect
              </p>

              <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl font-normal">
                From Bhubaneswar to India&apos;s key economic hubs, Siksha &lsquo;O&rsquo; Anusandhan brings academic leadership directly to industry—listening to corporate demands, guiding young talent, and building alliances beyond hiring cycles.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="btn-primary group"
                >
                  <span>Request an Invitation</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
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
                className="group relative rounded-3xl overflow-hidden bg-surface p-1.5 border border-line shadow-xl"
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
                      National Conclave Series
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
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-b border-line">
        <div className="text-center max-w-6xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
            The Institutional Mandate
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight">
            Why Allyship<span className="text-accent">++</span>?
          </h2>

          <p className="text-base sm:text-[17px] text-content-secondary leading-relaxed font-normal max-w-6xl mx-auto">
            In an era of rapid disruption, transactional recruitment is obsolete. <span className="whitespace-nowrap">Siksha &lsquo;O&rsquo; Anusandhan moves</span><br className="hidden lg:inline" />{" "}
            academic leadership directly into corporate boardrooms—co-creating empathetic, resilient, and future-ready talent ecosystems.
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
                  Year-Round Capability Co-Creation
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  Ending Transactional Recruitment
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
                  Championship Psychology
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  How Athletics Anchors Executive Mentorship
                </h3>
              </div>
              <p className="font-sans text-sm font-normal tracking-[0.01em] leading-relaxed text-content-secondary">
                In corporate life, talent is often evaluated through spreadsheets. In elite sport, a coach provides daily guidance, absorbs external pressure, and stands by their athlete through setbacks. By pairing sports icons with boardroom chairs, ALLYSHIP grounds leadership in the ultimate truth of sport: potential only becomes excellence when someone believes in you enough to guide you through the fire.
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
                  Workplace Culture &amp; Psychological Safety
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-content mt-1">
                  Everyday Duty Over Symbolic Compliance
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
                  Enterprise Research Hubs
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
      </section>

      {/* 2.5 MESSAGE FROM CONCLAVE CONVENER (UNDER WHY ALLYSHIP) */}
      <section id="institutional-mandate" className="py-16 lg:py-20 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full border-b border-line">
        <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-line shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center group">
          {/* Text on Left */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent block">
                  Academic Direction &amp; Leadership
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] text-content">
                  Message from Prof. (Dr.) Raj Kumar Hota
                </h2>
              </div>

              <p className="font-sans text-sm sm:text-base font-normal tracking-[0.01em] leading-relaxed text-content-muted">
                As Convener of the Allyship++ conclaves across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai, Prof. (Dr.) Raj Kumar Hota leads SOA’s ongoing dialogue with corporate executives, HR leaders, and industry mentors.
              </p>

              <blockquote className="font-display italic font-normal tracking-normal text-base sm:text-lg text-content leading-relaxed border-l-2 border-accent pl-5 py-3.5 bg-surface-2 rounded-r-xl shadow-inner">
                &ldquo;True allyship bridges the gap between campus and career. By grounding corporate-academic partnerships in discipline and shared purpose, we create environments where young professionals thrive from day one.&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 border-t border-line">
              <h4 className="font-display text-base font-semibold tracking-normal text-content">
                Prof. (Dr.) Raj Kumar Hota
              </h4>
              <p className="font-sans text-xs font-normal tracking-[0.01em] leading-relaxed text-content-muted mt-0.5">
                Dean of Corporate Relations and Placement · Convener, ALLYSHIP++ National Conclaves
              </p>
            </div>
          </div>

          {/* Photo on Right: Proper Uncropped Whole Figure Framing */}
          <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-3 border border-line shadow-2xl">
            <Image
              src="/IMG_7328_whole_4_3.jpg"
              alt="Prof. (Dr.) Raj Kumar Hota addressing Allyship++ Conclave at podium"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />
            {/* Subtle Gradient Scrim & Rim Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

            {/* Glassmorphic Convener Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/95 border border-accent/40 font-sans text-[10px] font-bold uppercase tracking-[0.16em] shadow-lg shadow-black/40">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Conclave Convener
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL TAB SWITCHER (CONSTANT POSITION) */}
      <div className="pt-10 pb-2">
        <nav
          aria-label="Conclave sections"
          className="py-2.5 px-4 mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full bg-surface border border-line shadow-lg flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto"
        >
          {(["Chapters", "Videos"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setActiveTab(t);
                if (t === "Videos") {
                  setSelectedMediaCity(null);
                }
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${activeTab === t
                  ? "bg-accent text-on-accent shadow-md font-semibold"
                  : "bg-glass border border-line text-content-muted hover:text-content hover:bg-glass-strong"
                }`}
            >
              {t === "Chapters" && "Conclave Chapters"}
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
            {/* Creative Dual-Cycle Structure with Keycard Dossier Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 scroll-mt-24">
              {/* Deck 1: Allyship 1.0 · Inaugural Series */}
              <div className="lg:col-span-7 p-4 sm:p-5 rounded-3xl bg-surface border border-line space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-content-muted" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-content-secondary">
                    Allyship 1.0 · Inaugural Series
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {conclaves.slice(0, 4).map((c, sliceIdx) => {
                    const idx = sliceIdx;
                    const isSelected = selectedChapter === idx;
                    const editionNum = String(sliceIdx + 1).padStart(2, "0");
                    const cleanCity = c.city.replace(/\s*\([12]\.0\)/, "");
                    const cityMeta = getCityLandmarkMeta(cleanCity);
                    const LandmarkIcon = cityMeta.Icon;

                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedChapter(idx)}
                        className={`relative group p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-visible ${isSelected
                            ? "bg-accent/10 border-2 border-accent ring-4 ring-accent/20 shadow-xl text-content -translate-y-0.5"
                            : "bg-surface-2 border-line hover:border-accent/60 text-content-muted hover:text-content hover:-translate-y-1 hover:shadow-md"
                          }`}
                      >
                        {/* Top Row: Edition Badge + Place Landmark Symbol Badge */}
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span
                            className={`font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5 ${isSelected ? "text-accent" : "text-content-secondary group-hover:text-accent"
                              }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                            Edition {editionNum}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${isSelected
                                ? "bg-accent/20 text-accent border border-accent/40 shadow-sm"
                                : "bg-surface-3/80 text-content-muted border border-line group-hover:border-accent/40 group-hover:text-accent group-hover:bg-accent/10"
                              }`}
                            title={`${cleanCity} · ${cityMeta.landmark}`}
                          >
                            <LandmarkIcon className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Middle Row: Clean City & Date */}
                        <div className="space-y-0.5">
                          <h4
                            className={`font-display text-sm font-bold tracking-normal truncate transition-colors ${isSelected ? "text-accent" : "text-content group-hover:text-accent"
                              }`}
                          >
                            {cleanCity}
                          </h4>
                          <p className="font-sans text-[11px] text-content-muted truncate">
                            {c.date}
                          </p>
                        </div>

                        {/* Bottom Row: Thematic Focus / Active State indicator */}
                        <div
                          className={`mt-2.5 pt-2 border-t flex items-center justify-between font-sans text-[10px] ${isSelected
                              ? "border-accent/30 text-accent font-semibold"
                              : "border-line text-content-muted"
                            }`}
                        >
                          <span className="truncate">
                            {isSelected ? "Active Conclave" : (CHAPTER_THEMES[c.id] || c.focus.split(",")[0])}
                          </span>
                          {isSelected && <span className="text-xs">▾</span>}
                        </div>

                        {/* Downward pointer arrow connecting active card to the detail box below */}
                        {isSelected && (
                          <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent z-20 pointer-events-none" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Deck 2: Allyship 2.0 · National Series */}
              <div className="lg:col-span-5 p-4 sm:p-5 rounded-3xl bg-surface border border-accent/30 space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    Allyship 2.0 · National Series
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {conclaves.slice(4).map((c, sliceIdx) => {
                    const idx = sliceIdx + 4;
                    const isSelected = selectedChapter === idx;
                    const editionNum = String(sliceIdx + 1).padStart(2, "0");
                    const cleanCity = c.city.replace(/\s*\([12]\.0\)/, "");
                    const cityMeta = getCityLandmarkMeta(cleanCity);
                    const LandmarkIcon = cityMeta.Icon;

                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedChapter(idx)}
                        className={`relative group p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-visible ${isSelected
                            ? "bg-accent/10 border-2 border-accent ring-4 ring-accent/20 shadow-xl text-content -translate-y-0.5"
                            : "bg-surface-2 border-line hover:border-accent/60 text-content-muted hover:text-content hover:-translate-y-1 hover:shadow-md"
                          }`}
                      >
                        {/* Top Row: Edition Badge + Place Landmark Symbol Badge */}
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span
                            className={`font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5 ${isSelected ? "text-accent" : "text-content-secondary group-hover:text-accent"
                              }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                            Edition {editionNum}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${isSelected
                                ? "bg-accent/20 text-accent border border-accent/40 shadow-sm"
                                : "bg-surface-3/80 text-content-muted border border-line group-hover:border-accent/40 group-hover:text-accent group-hover:bg-accent/10"
                              }`}
                            title={`${cleanCity} · ${cityMeta.landmark}`}
                          >
                            <LandmarkIcon className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Middle Row: Clean City & Date */}
                        <div className="space-y-0.5">
                          <h4
                            className={`font-display text-sm font-bold tracking-normal truncate transition-colors ${isSelected ? "text-accent" : "text-content group-hover:text-accent"
                              }`}
                          >
                            {cleanCity}
                          </h4>
                          <p className="font-sans text-[11px] text-content-muted truncate">
                            {c.date}
                          </p>
                        </div>

                        {/* Bottom Row: Thematic Focus / Active State indicator */}
                        <div
                          className={`mt-2.5 pt-2 border-t flex items-center justify-between font-sans text-[10px] ${isSelected
                              ? "border-accent/30 text-accent font-semibold"
                              : "border-line text-content-muted"
                            }`}
                        >
                          <span className="truncate">
                            {isSelected ? "Active Conclave" : (CHAPTER_THEMES[c.id] || c.focus.split(",")[0])}
                          </span>
                          {isSelected && <span className="text-xs">▾</span>}
                        </div>

                        {/* Downward pointer arrow connecting active card to the detail box below */}
                        {isSelected && (
                          <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent z-20 pointer-events-none" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Selected Conclave Detail Card — Executive Editorial Bento Grid */}
            <div
              id="selected-conclave"
              className="bg-surface rounded-3xl p-6 sm:p-10 lg:p-12 space-y-10 border border-line shadow-2xl scroll-mt-24"
            >
              {/* Card Hero Header */}
              <div className="pb-8 border-b border-line">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1 rounded-full bg-accent text-on-accent font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                        {currentConclave.edition}
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-surface-2 border border-line text-accent font-mono text-xs flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {currentConclave.turnout}
                      </span>
                    </div>

                    <span className="px-3.5 py-1 rounded-full bg-surface-2 border border-line text-content-secondary font-mono text-xs ml-auto">
                      {currentConclave.date}
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.25rem] 2xl:text-4xl font-black tracking-tight leading-tight text-content scroll-mt-24 md:whitespace-nowrap overflow-hidden text-ellipsis">
                    {currentConclave.city}: {currentConclave.title}
                  </h2>
                  <div className="flex items-center gap-2 font-sans text-xs text-content-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{currentConclave.venue}</span>
                  </div>
                </div>
              </div>

              {/* Asymmetrical 2-Column Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Context, Narrative, Sports Keynote & Institutional Delegation (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Strategic Dialogue Mandate Card */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-surface-2 border border-line space-y-4 shadow-sm">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block">
                      Strategic Dialogue Mandate
                    </span>
                    <p className="font-sans text-sm leading-relaxed text-content-secondary font-normal">
                      {currentConclave.desc}
                    </p>
                    <div className="p-4 rounded-2xl bg-surface border border-line text-xs font-medium text-accent">
                      <strong className="font-bold">Key Focus:</strong> {currentConclave.focus}
                    </div>
                  </div>

                  {/* Sports Icons & Keynote Guests Spotlight (Rendered if exists) */}
                  {currentConclave.sportsGuests && currentConclave.sportsGuests.length > 0 && (
                    <div className="space-y-4">
                      {currentConclave.sportsGuests.map((sg) => (
                        <div
                          key={sg.name}
                          className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-accent/15 via-surface-2 to-surface-2 border border-accent/40 shadow-xl space-y-3 relative overflow-hidden group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent font-bold px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
                              <Medal className="w-3.5 h-3.5" />
                              Sports Keynote Spotlight
                            </span>
                            <span className="text-xs text-content-muted font-mono">Special Guest</span>
                          </div>
                          <div>
                            <h4 className="font-display text-xl font-bold text-content mt-1 group-hover:text-accent transition-colors">
                              {sg.name}
                            </h4>
                            <div className="text-xs font-semibold text-accent mt-0.5">
                              {sg.role}
                            </div>
                          </div>
                          <p className="text-xs text-content-muted leading-relaxed italic pt-1 border-t border-line/60">
                            &ldquo;{sg.note}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SOA University Institutional Delegation Card */}
                  {currentConclave.leadership && currentConclave.leadership.length > 0 && (
                    <div className="p-6 rounded-3xl bg-surface-2 border border-line space-y-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-accent" />
                        <h4 className="font-mono text-xs uppercase tracking-widest text-content font-bold">
                          SOA University Leadership Delegation
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {currentConclave.leadership.map((l, lIdx) => (
                          <div key={l.name} className={`${lIdx > 0 ? "pt-3 border-t border-line" : ""} space-y-0.5`}>
                            <div className="font-display text-sm font-bold text-content">
                              {l.name}
                            </div>
                            <div className="font-sans text-xs text-content-muted leading-relaxed">
                              {l.role}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Moderator & Corporate Panelists Roster (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Moderator Spotlight */}
                  {currentConclave.moderators && currentConclave.moderators.length > 0 && (
                    <div className="space-y-3">
                      {currentConclave.moderators.map((m) => (
                        <div
                          key={m.name}
                          className="p-6 rounded-3xl bg-surface-2 border border-line hover:border-accent transition-all shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="space-y-1">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold block">
                              Conclave Discussion Moderator
                            </span>
                            <h4 className="font-display text-lg font-bold text-content">
                              {m.name}
                            </h4>
                            <p className="font-sans text-xs text-content-muted leading-relaxed">
                              {m.role}
                            </p>
                          </div>
                          <span className="px-3.5 py-1.5 rounded-xl bg-surface border border-line text-xs font-mono text-accent font-bold shrink-0 self-start sm:self-center">
                            Session Chair
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Corporate Panelists Roster Grid */}
                  {currentConclave.panelists && currentConclave.panelists.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-2 border-b border-line">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          <h4 className="font-mono text-xs uppercase tracking-widest text-content font-bold">
                            Corporate Panelists Roster ({currentConclave.panelists.length} Leaders)
                          </h4>
                        </div>
                        <span className="text-xs text-accent font-mono font-medium">
                          Industry Deliberation
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentConclave.panelists.map((p) => (
                          <div
                            key={p.name}
                            className="p-5 rounded-2xl bg-surface-2 border border-line hover:border-accent/60 transition-all hover:-translate-y-0.5 space-y-1.5 shadow-sm"
                          >
                            <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                              Panelist
                            </span>
                            <h5 className="font-display text-sm font-bold text-content leading-snug">
                              {p.name}
                            </h5>
                            <p className="font-sans text-xs text-content-muted leading-relaxed">
                              {p.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONCLAVE MOMENTS (PARTITIONED: 2.0 AT TOP, 1.0 AT BOTTOM) */}
        {activeTab === "Videos" && (
          <div id="videos-section" className="space-y-12 scroll-mt-24 pt-4">
            <div className="max-w-5xl space-y-3">
              <span className="text-[11px] font-bold font-heading uppercase tracking-[0.2em] text-accent block">
                Conclave Moments
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight sm:whitespace-nowrap scroll-mt-24">
                Chapter-Wise Conclave Moments
              </h2>
              <p className="text-base text-content-secondary max-w-2xl leading-relaxed">
                Explore official conclave films, keynote conversations, and curated chapter photography across India&apos;s premier corporate hubs.
              </p>
            </div>

            {!currentMediaArchive ? (
              /* INITIAL VIEW: PARTITIONED CHAPTER CARDS (ALLYSHIP++ 2.0 AT TOP, ALLYSHIP++ 1.0 AT BOTTOM) */
              <div className="space-y-14">
                {/* TOP PARTITION: ALLYSHIP++ 2.0 CHAPTERS */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-line">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-content tracking-tight">
                        Allyship 2.0 · National Series
                      </h3>
                    </div>
                    <span className="text-xs font-sans text-content-muted">
                      Bengaluru / Hyderabad / Chennai
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(["bengaluru-2", "hyderabad-2", "chennai-2"] as const).map((chapterKey) => {
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
                          <div className="relative aspect-video w-full bg-canvas overflow-hidden">
                            <Image
                              src={archive.coverImage}
                              alt={`${archive.city} Chapter Cover`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu will-change-transform"
                              style={{ objectPosition: archive.coverPosition || "50% 25%" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent group-hover:from-black/50 transition-colors" />

                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#C5A880]">
                              {archive.date}
                            </div>
                          </div>

                          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block mb-1">
                                {archive.editionBadge}
                              </span>
                              <h4 className="font-display text-lg sm:text-xl font-bold tracking-normal text-content leading-snug group-hover:text-accent transition-colors">
                                {archive.city} | Conclave Moments
                              </h4>
                              <p className="font-sans text-xs sm:text-sm font-normal tracking-[0.01em] text-content-muted mt-2 leading-relaxed">
                                {archive.subtitle}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-semibold text-accent">
                              <span>Explore Chapter Moments</span>
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* BOTTOM PARTITION: ALLYSHIP++ 1.0 CHAPTERS */}
                <div className="space-y-6 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-line">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-content tracking-tight">
                        Allyship 1.0 · Inaugural Series
                      </h3>
                    </div>
                    <span className="text-xs font-sans text-content-muted">
                      Bengaluru / Hyderabad / Kolkata / Mumbai
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {(["bengaluru-1", "hyderabad-1", "kolkata-1", "mumbai-1"] as const).map((chapterKey) => {
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
                          <div className="relative aspect-video w-full bg-canvas overflow-hidden">
                            <Image
                              src={archive.coverImage}
                              alt={`${archive.city} Chapter Cover`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu will-change-transform"
                              style={{ objectPosition: archive.coverPosition || "50% 25%" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent group-hover:from-black/50 transition-colors" />

                            <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-heading font-bold uppercase tracking-[0.14em] text-[#C5A880]">
                              {archive.date}
                            </div>
                          </div>

                          <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent block mb-1">
                                {archive.editionBadge}
                              </span>
                              <h4 className="font-display text-base sm:text-lg font-bold tracking-normal text-content leading-snug group-hover:text-accent transition-colors">
                                {archive.city} | Conclave Moments
                              </h4>
                              <p className="font-sans text-xs font-normal tracking-[0.01em] text-content-muted mt-2 leading-relaxed">
                                {archive.subtitle}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-semibold text-accent">
                              <span>Explore Chapter Moments</span>
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
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
                      All Chapter Cards
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
                          className={`px-3 py-1.5 rounded-full font-sans text-xs font-medium transition-all cursor-pointer ${isSelected
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
                    {currentMediaArchive.city} — Conclave Moments
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-content-secondary max-w-3xl leading-relaxed">
                    {currentMediaArchive.subtitle}
                  </p>
                </div>

                {/* INSIDE CARD PART 1: OFFICIAL CHAPTER VIDEO SPACE FIRST */}
                {currentMediaArchive.videos.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Video className="w-4 h-4 text-accent" />
                        <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-content">
                          {currentMediaArchive.city} Conclave Film
                        </h4>
                      </div>
                      <span className="text-xs font-sans text-content-muted">
                        Official Video Archive
                      </span>
                    </div>

                    {currentMediaArchive.videos.length === 1 ? (
                      <div className="bg-surface-2 rounded-2xl overflow-hidden border border-line grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-8 relative aspect-video w-full bg-canvas overflow-hidden">
                          {currentMediaArchive.videos[0].videoSrc ? (
                            <video
                              src={currentMediaArchive.videos[0].videoSrc}
                              controls
                              playsInline
                              preload="metadata"
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
                                <video
                                  src={v.videoSrc}
                                  controls
                                  playsInline
                                  preload="metadata"
                                  className="w-full h-full object-cover"
                                />
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
                )}

                {/* INSIDE CARD PART 2: 24 CHAPTER PHOTO SPACES IN 6 ROWS BELOW THE VIDEO */}
                <div className={`space-y-5 ${currentMediaArchive.videos.length > 0 ? "pt-6 border-t border-line" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-content">
                      {currentMediaArchive.city} Chapter Photo Gallery
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {currentMediaArchive.photos.map((photo, idx) => {
                      const slotNumber = String(idx + 1).padStart(2, "0");
                      return (
                        <div
                          key={`${currentMediaArchive.id}-photo-${idx}`}
                          className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 ${photo.src
                              ? "bg-surface-2 border border-line shadow-sm hover:border-accent/50 hover:shadow-lg"
                              : "bg-surface-2/60 border border-line hover:border-accent/40 flex flex-col items-center justify-center p-4 text-center"
                            }`}
                        >
                          {photo.src ? (
                            <Image
                              src={photo.src}
                              alt={`${currentMediaArchive.city} — ${photo.caption}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu will-change-transform"
                              style={{ objectPosition: photo.objectPosition || "50% 25%" }}
                            />
                          ) : (
                            /* Clean Dedicated 4:3 Photo Frame Space */
                            <div className="space-y-1">
                              <div className="text-xs font-heading font-bold uppercase tracking-[0.14em] text-content">
                                Conclave Moment {slotNumber}
                              </div>
                              <div className="text-[11px] font-sans text-content-muted">
                                {currentMediaArchive.city}
                              </div>
                            </div>
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

      {/* 4. LEADERSHIP VISION & PURPOSE CALLOUT (NEXT TO LAST SECTION) */}
      <section className="pt-8 pb-16 px-6 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-surface-2 via-surface to-canvas text-content shadow-2xl relative overflow-hidden border border-line">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                The Conclave Mission
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

      {/* Global Invitation Modal */}
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

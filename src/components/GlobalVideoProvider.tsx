"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

const CONCLAVE_VIDEO = "/discover/soa-allyship-hyd-compressed.mp4";
const CAMPUS_VIDEO = "/logos/mono/soa-video-background/soa-campus-compressed.mp4";

type VideoGroup = "conclave" | "campus" | "none";

interface GlobalVideoContextType {
  activeGroup: VideoGroup;
}

const GlobalVideoContext = createContext<GlobalVideoContextType>({
  activeGroup: "none",
});

export function useGlobalVideo() {
  return useContext(GlobalVideoContext);
}

export function GlobalVideoProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const conclaveVideoRef = useRef<HTMLVideoElement>(null);
  const campusVideoRef = useRef<HTMLVideoElement>(null);

  // Group 1: Landing (/), About (/about), Impact (/impact), Chapters/Event (/event)
  // Group 2: Discover (/discover-soa), Collaborate (/collaborate), Contact (/contact)
  const isConclaveGroup =
    pathname === "/" ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/impact") ||
    pathname.startsWith("/event");

  const isCampusGroup =
    pathname.startsWith("/discover-soa") ||
    pathname.startsWith("/collaborate") ||
    pathname.startsWith("/contact");

  const activeGroup: VideoGroup = isConclaveGroup
    ? "conclave"
    : isCampusGroup
      ? "campus"
      : "none";

  // Control playback based on active route
  useEffect(() => {
    if (prefersReducedMotion) return;

    if (activeGroup === "conclave") {
      conclaveVideoRef.current?.play().catch(() => { });
      campusVideoRef.current?.pause();
    } else if (activeGroup === "campus") {
      campusVideoRef.current?.play().catch(() => { });
      conclaveVideoRef.current?.pause();
    } else {
      conclaveVideoRef.current?.pause();
      campusVideoRef.current?.pause();
    }
  }, [activeGroup, prefersReducedMotion]);

  return (
    <GlobalVideoContext.Provider value={{ activeGroup }}>
      {/* Persistent global video layers across route transitions */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {!prefersReducedMotion && (
          <>
            {/* Conclave Video (Landing, About, Impact, Event) */}
            <video
              ref={conclaveVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 brightness-[1.03] saturate-105 transition-opacity duration-700 ease-in-out ${activeGroup === "conclave" ? "opacity-100" : "opacity-0"
                }`}
            >
              <source src={CONCLAVE_VIDEO} type="video/mp4" />
            </video>

            {/* Campus Video (Discover SOA, Collaborate, Contact) */}
            <video
              ref={campusVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 brightness-[1.03] saturate-105 transition-opacity duration-700 ease-in-out ${activeGroup === "campus" ? "opacity-100" : "opacity-0"
                }`}
            >
              <source src={CAMPUS_VIDEO} type="video/mp4" />
            </video>
          </>
        )}
      </div>

      {children}
    </GlobalVideoContext.Provider>
  );
}


"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const VIDEO_SRC = "/logos/mono/soa-video-background/SOA-University-Campus-SnapYT.App.mp4";
/** Slower-than-normal playback rate for an ambient cinematic feel */
const PLAYBACK_RATE = 0.75;

export function HeroBackdrop({ scrimClassName = "" }: { scrimClassName?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || !videoRef.current) return;
    try {
      videoRef.current.playbackRate = PLAYBACK_RATE;
    } catch {
      /* ignore */
    }
  }, [prefersReducedMotion, isLoaded]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          className={`absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 brightness-[1.03] saturate-105 transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* Theme-aware scrims: gentle ambient overlay ensuring readability of copy */}
      <div className={`absolute inset-0 bg-canvas/40 ${scrimClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/50 to-canvas/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas/75 via-transparent to-canvas/25" />
    </div>
  );
}

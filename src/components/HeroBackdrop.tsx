"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const VIDEO_SRC = "/logos/mono/soa-video-background/soa-campus-compressed.mp4";
const PLAYBACK_RATE = 0.85;

export function HeroBackdrop({ scrimClassName = "" }: { scrimClassName?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    try {
      video.playbackRate = PLAYBACK_RATE;
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* Autoplay policy fallback */
        });
      }
    } catch {
      /* ignore */
    }
  }, [prefersReducedMotion]);

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
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 brightness-[1.03] saturate-105"
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

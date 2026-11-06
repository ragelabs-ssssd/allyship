"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

export const HYD_VIDEO_SRC = "/discover/soa-allyship-hyd-compressed.mp4";
export const SOA_VIDEO_SRC = "/logos/mono/soa-video-background/soa-campus-compressed.mp4";

export function HeroBackdrop({
  scrimClassName = "",
  videoSrc,
  playbackRate,
  align = "left",
}: {
  scrimClassName?: string;
  videoSrc?: string;
  playbackRate?: number;
  align?: "left" | "right";
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatically select SOA video for discover and collaborate if not explicitly provided
  const activeVideoSrc =
    videoSrc ??
    (pathname && (pathname.startsWith("/discover") || pathname.startsWith("/collaborate"))
      ? SOA_VIDEO_SRC
      : HYD_VIDEO_SRC);

  const activePlaybackRate =
    playbackRate ?? (activeVideoSrc === SOA_VIDEO_SRC ? 0.85 : 1.0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    try {
      video.playbackRate = activePlaybackRate;
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
  }, [prefersReducedMotion, activeVideoSrc, activePlaybackRate]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {!prefersReducedMotion && (
        <video
          key={activeVideoSrc}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 brightness-[1.03] saturate-105"
        >
          <source src={activeVideoSrc} type="video/mp4" />
        </video>
      )}

      {/* Theme-aware scrims: gentle ambient overlay ensuring readability of copy */}
      <div className={`absolute inset-0 bg-canvas/40 ${scrimClassName}`} />
      <div
        className={`absolute inset-0 ${
          align === "right"
            ? "bg-gradient-to-l from-canvas/90 via-canvas/60 to-canvas/10"
            : "bg-gradient-to-r from-canvas/90 via-canvas/50 to-canvas/10"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas/75 via-transparent to-canvas/25" />
    </div>
  );
}

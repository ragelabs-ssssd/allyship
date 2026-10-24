"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const BACKGROUND_VIDEO_ID = "Bjp-vCBHB0E";
/** Skip the first 3s (title/lead-in) and loop 2s before the end (no end screen). */
const START_SECONDS = 3;
const END_TRIM_SECONDS = 2;
/** Slower-than-normal playback for an ambient feel. */
const PLAYBACK_RATE = 0.75;

interface YouTubePlayer {
  playVideo: () => void;
  mute: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  setPlaybackRate: (rate: number) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          width?: string | number;
          height?: string | number;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (event: { target: YouTubePlayer }) => void;
          };
        }
      ) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.head.appendChild(script);
  });

  return apiPromise;
}

/**
 * Decorative, muted, looping YouTube film used behind page heroes.
 * Uses the IFrame API so it can skip the intro, loop before the end screen
 * (which removes the pause/replay overlay) and play at a slower rate.
 */
export function HeroBackdrop({ scrimClassName = "" }: { scrimClassName?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const mountRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setTimeout(() => setShowVideo(true), 900);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!showVideo || !mountRef.current) return;

    let cancelled = false;
    let host: HTMLDivElement | null = null;
    let player: YouTubePlayer | null = null;
    let loopTimer: number | undefined;
    let revealTimer: number | undefined;
    let revealFallback: number | undefined;

    loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current || !window.YT) return;

      host = document.createElement("div");
      host.style.width = "100%";
      host.style.height = "100%";
      mountRef.current.appendChild(host);

      player = new window.YT.Player(host, {
        videoId: BACKGROUND_VIDEO_ID,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: BACKGROUND_VIDEO_ID,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          start: START_SECONDS,
        },
        events: {
          onReady: ({ target }) => {
            target.mute();
            target.seekTo(START_SECONDS, true);
            target.playVideo();
            target.setPlaybackRate(PLAYBACK_RATE);
            // Some browsers apply the rate only once playback has started.
            window.setTimeout(() => {
              try {
                target.setPlaybackRate(PLAYBACK_RATE);
              } catch {
                /* player torn down */
              }
            }, 1000);

            // Reveal only once playback has reached the 3s mark, so the
            // pre-seek frame / YouTube title never flashes on screen.
            const revealFrom = START_SECONDS - 0.25;
            revealTimer = window.setInterval(() => {
              try {
                if (target.getCurrentTime() >= revealFrom) {
                  if (mountRef.current) mountRef.current.style.opacity = "1";
                  if (revealTimer) window.clearInterval(revealTimer);
                  revealTimer = undefined;
                }
              } catch {
                /* player not ready yet */
              }
            }, 120);

            revealFallback = window.setTimeout(() => {
              if (mountRef.current) mountRef.current.style.opacity = "1";
              if (revealTimer) window.clearInterval(revealTimer);
              revealTimer = undefined;
            }, 2600);

            loopTimer = window.setInterval(() => {
              const duration = target.getDuration();
              if (!duration) return;
              const current = target.getCurrentTime();
              if (
                current >= duration - END_TRIM_SECONDS ||
                current < START_SECONDS - 0.5
              ) {
                target.seekTo(START_SECONDS, true);
                target.playVideo();
              }
            }, 400);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (loopTimer) window.clearInterval(loopTimer);
      if (revealTimer) window.clearInterval(revealTimer);
      if (revealFallback) window.clearTimeout(revealFallback);
      try {
        player?.destroy();
      } catch {
        /* player may not be ready yet */
      }
      host?.remove();
      player = null;
    };
  }, [showVideo]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={mountRef}
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0 brightness-110 saturate-105 opacity-0 transition-opacity duration-700 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0"
      />

      {/* Theme-aware scrims: light overall, darker only where the copy sits */}
      <div className={`absolute inset-0 bg-canvas/40 ${scrimClassName}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/45 to-canvas/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-canvas/20" />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { CommunityEvent } from "@/lib/types";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getRegisteredEventIds, registerForEvent } from "@/lib/storage";

interface EventCardProps {
  event: CommunityEvent;
}

export function EventCard({ event }: EventCardProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const checkRegistered = () => {
      const ids = getRegisteredEventIds();
      setIsRegistered(ids.includes(event.id));
    };
    checkRegistered();

    window.addEventListener("allyship-events-updated", checkRegistered);
    return () => {
      window.removeEventListener("allyship-events-updated", checkRegistered);
    };
  }, [event.id]);

  const handleRegister = () => {
    registerForEvent(event.id);
    setIsRegistered(true);
    setShowConfirmation(true);
  };

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-surface rounded-3xl p-6 sm:p-7 border border-line shadow-xl hover:border-accent transition-all flex flex-col justify-between">
      <div>
        {/* Header Tags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full bg-surface-2 text-accent border border-line">
            {event.format}
          </span>
          <div className="flex items-center gap-1.5 font-sans text-xs text-content-muted font-medium">
            <Users className="w-3.5 h-3.5 text-accent" />
            <span>
              {event.enrolledCount} / {event.capacity} seats filled
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-base sm:text-lg font-semibold tracking-normal text-content leading-snug">
          {event.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-content-muted mt-2.5 leading-relaxed line-clamp-3 font-normal tracking-[0.01em]">
          {event.description}
        </p>

        {/* Date & Location Details */}
        <div className="space-y-2 mt-5 p-3.5 bg-surface-2 border border-line rounded-2xl font-sans text-xs text-content-secondary">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent shrink-0" />
            <span className="font-display text-xs font-semibold tracking-normal text-content">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent shrink-0" />
            <span>
              {event.time} ({event.timezone})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* Facilitator */}
        <div className="mt-4 flex items-center gap-2.5 text-xs">
          <div className="w-7 h-7 rounded-full bg-surface-2 border border-line flex items-center justify-center text-accent">
            <User className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display text-sm font-semibold tracking-normal text-content block">{event.facilitator}</span>
            <span className="font-sans text-xs text-content-muted">{event.facilitatorRole}</span>
          </div>
        </div>
      </div>

      {/* RSVP Action */}
      <div className="pt-6 mt-4 border-t border-line">
        {isRegistered ? (
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-success bg-success-bg px-3 py-1.5 rounded-full border border-success-border">
              <CheckCircle2 className="w-4 h-4 text-success" />
              RSVP Confirmed
            </span>
            <span className="font-sans text-xs text-content-muted">Calendar link sent</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleRegister}
            className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-on-accent font-sans text-xs font-medium tracking-normal py-2.5 px-4 rounded-full transition-colors duration-200 shadow-sm active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-on-accent" />
            <span>Register for This Session (Free)</span>
          </button>
        )}

        {showConfirmation && (
          <p className="font-sans text-xs text-success font-medium text-center mt-2 animate-in fade-in">
            ✓ Registration saved to your local Ally Dashboard.
          </p>
        )}
      </div>
    </div>
  );
}

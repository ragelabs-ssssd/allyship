"use client";

import React, { useState } from "react";
import { CinematicHero } from "@/components/home/CinematicHero";
import { PressTicker } from "@/components/home/LogoTicker";
import { ImpactSection } from "@/components/home/ImpactSection";
import { BeyondRecruitment } from "@/components/home/BeyondRecruitment";
import { ChapterBentoGrid } from "@/components/home/ChapterBentoGrid";
import { ChairmanVision } from "@/components/home/ChairmanVision";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CtaBanner } from "@/components/home/CtaBanner";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function HomePage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-canvas">
      {/* 1. Cinematic Hero — Editorial Split */}
      <CinematicHero onOpenInvite={() => setIsInviteOpen(true)} />

      {/* 2. National Press & Media Headlines Marquee */}
      <PressTicker />

      {/* 3. Impact Numbers — Giant Animated Metrics */}
      <ImpactSection />

      {/* 3.5. Beyond Recruitment — The Deeper Purpose & Institutional Covenant */}
      <BeyondRecruitment />

      {/* 4. Conclave Chapters — Asymmetrical Bento Grid */}
      <ChapterBentoGrid />

      {/* 5. Chairman Vision — Full-Width Editorial Portrait & Philosophy */}
      <ChairmanVision />

      {/* 6. CXO & Olympian Voices — Fluid Carousel */}
      <TestimonialCarousel />

      {/* 7. Executive CTA Banner — Deep Navy & Gold Impact */}
      <CtaBanner onOpenInvite={() => setIsInviteOpen(true)} />

      {/* Modal */}
      <GetInvitedModal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </div>
  );
}

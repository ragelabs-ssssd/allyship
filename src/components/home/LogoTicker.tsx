"use client";

import React, { useState } from "react";

interface Partner {
  name: string;
  logo: string;
  /** Optically balanced height in px: compact marks larger, wide wordmarks smaller. */
  h: number;
}

const corporatePartners: Partner[] = [
  { name: "Microsoft", logo: "/logos/color/microsoft.png", h: 38 },
  { name: "Dell Technologies", logo: "/logos/color/dell.png", h: 38 },
  { name: "Zscaler", logo: "/logos/color/zscaler.png", h: 38 },
  { name: "BNY Mellon", logo: "/logos/color/bny-mellon.png", h: 30 },
  { name: "L&T Technology Services", logo: "/logos/color/ltts.png", h: 38 },
  { name: "Deloitte", logo: "/logos/color/deloitte.png", h: 26 },
  { name: "PricewaterhouseCoopers", logo: "/logos/color/pwc.png", h: 34 },
  { name: "Tata Steel", logo: "/logos/color/tata-steel.png", h: 27 },
  { name: "Cognizant", logo: "/logos/color/cognizant.png", h: 26 },
  { name: "Persistent Systems", logo: "/logos/color/persistent.png", h: 34 },
  { name: "Virtusa", logo: "/logos/color/virtusa.png", h: 27 },
  { name: "HCLTech", logo: "/logos/color/hcltech.png", h: 26 },
  { name: "Schneider Electric", logo: "/logos/color/schneider.png", h: 27 },
  { name: "Incture", logo: "/logos/color/incture.png", h: 27 },
  { name: "KPMG", logo: "/logos/color/kpmg.png", h: 30 },
  { name: "LTIMindtree", logo: "/logos/color/ltimindtree.png", h: 38 },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter((word) => /[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

function PartnerMark({ partner }: { partner: Partner }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex h-12 items-center justify-center">
      {failed ? (
        <span className="font-display text-lg font-bold text-content">
          {initials(partner.name)}
        </span>
      ) : (
        <img
          src={partner.logo}
          alt={partner.name}
          draggable={false}
          style={{ height: partner.h }}
          className="w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function LogoTicker() {
  const repeatedPartners = [...corporatePartners, ...corporatePartners];

  return (
    <section className="border-y border-black/10 bg-[#F1EEE7] py-8 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-6">
        <p className="text-center font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5B6472]">
          Engaged by Executive Leaders From
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="logo-ticker-track flex w-max items-center gap-12 sm:gap-16">
          {repeatedPartners.map((partner, index) => (
            <PartnerMark key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

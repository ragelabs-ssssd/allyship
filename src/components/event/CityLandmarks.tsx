import React from "react";

export interface CityLandmarkMeta {
  landmark: string;
  tagline: string;
  Icon: React.FC<{ className?: string }>;
  Watermark: React.FC<{ className?: string }>;
}

/**
 * Bengaluru: Vidhana Soudha
 * Neo-Dravidian state palace with grand central dome, Ashoka lion finial, and classical colonnade.
 */
export function VidhanaSoudhaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2m-2-1h4" />
      <path d="M12 4a3.5 3.5 0 0 0-3.5 3.5v2h7v-2A3.5 3.5 0 0 0 12 4Z" />
      <path d="M3 9.5h18" />
      <path d="M5 9.5v8m3.5-8v8m3.5-8v8m3.5-8v8m3.5-8v8" />
      <path d="M3 17.5h18" />
      <path d="M8 17.5l-2 3.5h12l-2-3.5" />
      <path d="M2 21h20" />
    </svg>
  );
}

export function VidhanaSoudhaWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 3v3m-3-1.5h6" />
      <path d="M32 6a7 7 0 0 0-7 7v5h14v-5a7 7 0 0 0-7-7Z" />
      <path d="M6 18h52" />
      <path d="M10 13a2.5 2.5 0 0 0-2.5 2.5v2.5h5v-2.5a2.5 2.5 0 0 0-2.5-2.5Z" />
      <path d="M54 13a2.5 2.5 0 0 0-2.5 2.5v2.5h5v-2.5a2.5 2.5 0 0 0-2.5-2.5Z" />
      <path d="M10 18v22m7-22v22m7.5-22v22m7.5-22v22m7.5-22v22m7.5-22v22m7-22v22" />
      <path d="M6 40h52" />
      <path d="M22 40v-8a4 4 0 0 1 8 0v8" />
      <path d="M34 40v-8a4 4 0 0 1 8 0v8" />
      <path d="M14 40l-4 12h44l-4-12" />
      <path d="M4 52h56" />
    </svg>
  );
}

/**
 * Hyderabad: Charminar
 * Iconic four minarets with grand central arch, gallery balconies, and pointed Mughal silhouette.
 */
export function CharminarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v18M20 3v18" />
      <path d="M3 4h2M19 4h2" />
      <path d="M3 8h2M19 8h2" />
      <path d="M3 13h2M19 13h2" />
      <path d="M5 9h14M5 14h14" />
      <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
      <path d="M9 11.5a1 1 0 0 1 2 0m2 0a1 1 0 0 1 2 0" />
      <path d="M4 2v1M20 2v1" />
    </svg>
  );
}

export function CharminarWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5h4v50h-4z" />
      <path d="M12 2v3m-3 0h6" />
      <path d="M8 15h8m-8 12h8m-8 12h8" />
      <path d="M50 5h4v50h-4z" />
      <path d="M52 2v3m-3 0h6" />
      <path d="M48 15h8m-8 12h8m-8 12h8" />
      <path d="M14 20h36" />
      <path d="M14 28h36" />
      <path d="M18 14h28v6H18z" />
      <path d="M22 10h20v4H22z" />
      <path d="M21 55V38a11 11 0 0 1 22 0v17" />
      <path d="M23 25a2.5 2.5 0 0 1 5 0m4 0a2.5 2.5 0 0 1 5 0m4 0a2.5 2.5 0 0 1 5 0" />
    </svg>
  );
}

/**
 * Kolkata: Howrah Bridge (Rabindra Setu)
 * Cantilever suspension truss bridge over the Hooghly with cross-girders and suspender stays.
 */
export function HowrahBridgeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19h20" />
      <path d="M4 19L8 5h2l3 14" />
      <path d="M11 19l3-14h2l4 14" />
      <path d="M8 5h8" />
      <path d="M10 11h4" />
      <path d="M8 14l8-4m-8 0l8 4" />
    </svg>
  );
}

export function HowrahBridgeWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 48h56" />
      <path d="M12 48L17 10h5l5 38" />
      <path d="M17 10h5m-7 12h9m-7 12h9" />
      <path d="M15 34l8-12m-8 0l8 12" />
      <path d="M37 48L42 10h5l5 38" />
      <path d="M42 10h5m-7 12h9m-7 12h9" />
      <path d="M40 34l8-12m-8 0l8 12" />
      <path d="M22 10l10 16 10-16" />
      <path d="M26 48v-8m6 8v-8m6 8v-8" />
      <path d="M8 54c4 0 6 2 10 2s6-2 10-2 6 2 10 2 6-2 10-2 6 2 10 2" />
    </svg>
  );
}

/**
 * Mumbai: Gateway of India
 * Indo-Saracenic triumphal basalt arch with 4 corner turrets, central archway, and seaside dome.
 */
export function GatewayOfIndiaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21h20" />
      <path d="M4 21V9h16v12" />
      <path d="M8.5 21v-7a3.5 3.5 0 0 1 7 0v7" />
      <path d="M5.5 21v-5a1.5 1.5 0 0 1 3 0v5" />
      <path d="M15.5 21v-5a1.5 1.5 0 0 1 3 0v5" />
      <path d="M10 5a2 2 0 0 1 4 0v4h-4z" />
      <path d="M3 9h18" />
      <path d="M4 6h2v3H4zm14 0h2v3h-2z" />
    </svg>
  );
}

export function GatewayOfIndiaWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 54h52" />
      <path d="M22 54V30a10 10 0 0 1 20 0v24" />
      <path d="M11 54V38a4 4 0 0 1 8 0v16" />
      <path d="M45 54V38a4 4 0 0 1 8 0v16" />
      <path d="M7 24h50v6H7z" />
      <path d="M10 18h44v6H10z" />
      <path d="M26 18a6 6 0 0 1 12 0" />
      <path d="M32 8v4" />
      <path d="M8 12h4v12H8zm44 0h4v12h-4z" />
      <path d="M10 8a2 2 0 0 1 2 2v2H8v-2a2 2 0 0 1 2-2zm44 0a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2z" />
    </svg>
  );
}

/**
 * Chennai: Kapaleeshwarar Gopuram / Dravidian Heritage Gateway
 * Stepped pyramidal temple tower with barrel-vaulted crown, kalasam pinnacles, and sacred gateway.
 */
export function ChennaiHeritageIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21v-4h14v4" />
      <path d="M9 21v-3.5a1.5 1.5 0 0 1 3 0V21" />
      <path d="M6 17l1.5-4.5h9L18 17" />
      <path d="M7.5 12.5l1.5-4h6l1.5 4" />
      <path d="M9 8.5a3 3 0 0 1 6 0" />
      <path d="M10 5.5v1.5m2-1.5v1.5m2-1.5v1.5" />
    </svg>
  );
}

export function ChennaiHeritageWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 54h48" />
      <path d="M12 54V42h40v12" />
      <path d="M25 54V46a7 7 0 0 1 14 0v8" />
      <path d="M14 42l2.5-9h31l2.5 9" />
      <path d="M16.5 33h31" />
      <path d="M18.5 33l2.5-8h22l2.5 8" />
      <path d="M21 25h22" />
      <path d="M23 25l2-7h14l2 7" />
      <path d="M25 18a7 7 0 0 1 14 0" />
      <path d="M27 10v3m5-3v3m5-3v3" />
    </svg>
  );
}

export const CITY_LANDMARKS: Record<string, CityLandmarkMeta> = {
  bengaluru: {
    landmark: "Vidhana Soudha",
    tagline: "Silicon Valley Hub",
    Icon: VidhanaSoudhaIcon,
    Watermark: VidhanaSoudhaWatermark,
  },
  hyderabad: {
    landmark: "Charminar",
    tagline: "Deccan Capital",
    Icon: CharminarIcon,
    Watermark: CharminarWatermark,
  },
  kolkata: {
    landmark: "Howrah Bridge",
    tagline: "Eastern Gateway",
    Icon: HowrahBridgeIcon,
    Watermark: HowrahBridgeWatermark,
  },
  mumbai: {
    landmark: "Gateway of India",
    tagline: "Commercial Capital",
    Icon: GatewayOfIndiaIcon,
    Watermark: GatewayOfIndiaWatermark,
  },
  chennai: {
    landmark: "Heritage Gopuram",
    tagline: "Southern Frontier",
    Icon: ChennaiHeritageIcon,
    Watermark: ChennaiHeritageWatermark,
  },
};

export function getCityLandmarkMeta(city: string): CityLandmarkMeta {
  const normalized = city.toLowerCase().replace(/[^a-z]/g, "");
  for (const [key, meta] of Object.entries(CITY_LANDMARKS)) {
    if (normalized.includes(key)) {
      return meta;
    }
  }
  // Fallback
  return {
    landmark: city,
    tagline: "Regional Hub",
    Icon: VidhanaSoudhaIcon,
    Watermark: VidhanaSoudhaWatermark,
  };
}

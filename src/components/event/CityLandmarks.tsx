import React from "react";

export interface CityLandmarkMeta {
  code: string;
  landmark: string;
  tagline: string;
  Icon: React.FC<{ className?: string }>;
  Watermark: React.FC<{ className?: string }>;
}

export function VidhanaSoudhaIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v3m-3-1h6" />
      <path d="M12 5a4 4 0 0 0-4 4v2h8V9a4 4 0 0 0-4-4Z" />
      <path d="M3 11h18v2H3z" />
      <path d="M5 13v6m3-6v6m4-6v6m4-6v6m3-6v6" />
      <path d="M2 19h20v3H2z" />
    </svg>
  );
}

export function VidhanaSoudhaWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 4v4m-5-2h10" />
      <path d="M32 8a7 7 0 0 0-7 7v4h14v-4a7 7 0 0 0-7-7Z" />
      <path d="M6 19h52v4H6z" />
      <path d="M10 12a3 3 0 0 0-3 3v4h6v-4a3 3 0 0 0-3-3Z" />
      <path d="M54 12a3 3 0 0 0-3 3v4h6v-4a3 3 0 0 0-3-3Z" />
      <path d="M11 23v23m6-23v23m6-23v23m6-23v23m6-23v23m6-23v23m6-23v23m6-23v23" />
      <path d="M4 46h56v4H4z" />
      <path d="M22 50h20v10H22z" />
      <path d="M2 54h60v6H2z" />
    </svg>
  );
}

export function CharminarIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v18M20 3v18M3 3h2M19 3h2" />
      <path d="M4 8h16M4 13h16" />
      <path d="M8 21v-5a4 4 0 0 1 8 0v5" />
      <path d="M4 5a1 1 0 0 1 1-1h1M18 4h1a1 1 0 0 1 1 1" />
    </svg>
  );
}

export function CharminarWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6h4v52H9z" />
      <path d="M11 2v4m-3 0h6" />
      <path d="M7 16h8m-8 12h8m-8 12h8" />
      <path d="M51 6h4v52h-4z" />
      <path d="M53 2v4m-3 0h6" />
      <path d="M49 16h8m-8 12h8m-8 12h8" />
      <path d="M13 22h38v8H13z" />
      <path d="M13 30h38v4H13z" />
      <path d="M17 18h30v4H17z" />
      <path d="M19 14h26v4H19z" />
      <path d="M22 58v-14a10 10 0 0 1 20 0v14" />
      <path d="M22 26a3 3 0 0 1 6 0m4 0a3 3 0 0 1 6 0m4 0a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function HowrahBridgeIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 19h20" />
      <path d="M5 19L8 6h2l3 13" />
      <path d="M11 19l3-13h2l3 13" />
      <path d="M8 6h8" />
      <path d="M9 11l6 4m0-4l-6 4" />
    </svg>
  );
}

export function HowrahBridgeWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 48h56v3H4z" />
      <path d="M12 48L17 12h5l5 36" />
      <path d="M17 12h5m-8 12h11m-9 12h11" />
      <path d="M14 36l8-12m-8 0l8 12" />
      <path d="M37 48L42 12h5l5 36" />
      <path d="M42 12h5m-8 12h11m-9 12h11" />
      <path d="M39 36l8-12m-8 0l8 12" />
      <path d="M22 12l10 16 10-16" />
      <path d="M27 48v-8m5 8v-8m5 8v-8" />
      <path d="M8 55c4 0 6 2 10 2s6-2 10-2 6 2 10 2 6-2 10-2 6 2 10 2" />
    </svg>
  );
}

export function GatewayOfIndiaIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V9h14v12" />
      <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
      <path d="M10 5a2 2 0 0 1 4 0v4h-4z" />
      <path d="M4 9h16" />
    </svg>
  );
}

export function GatewayOfIndiaWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 56h52v4H6z" />
      <path d="M22 56V32a10 10 0 0 1 20 0v24" />
      <path d="M12 56V40a4 4 0 0 1 8 0v16" />
      <path d="M44 56V40a4 4 0 0 1 8 0v16" />
      <path d="M8 26h48v6H8z" />
      <path d="M10 20h44v6H10z" />
      <path d="M26 20a6 6 0 0 1 12 0" />
      <path d="M32 10v4" />
      <path d="M8 12h4v14H8zm44 0h4v14h-4z" />
      <path d="M10 8a2 2 0 0 1 2 2v2H8v-2a2 2 0 0 1 2-2zm44 0a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function ChennaiHeritageIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21h16" />
      <path d="M6 21v-4h12v4" />
      <path d="M9 21v-3h6v3" />
      <path d="M7 17l1-5h8l1 5" />
      <path d="M9 12l1-4h4l1 4" />
      <path d="M10 8h4" />
      <path d="M11 5h2v3h-2z" />
    </svg>
  );
}

export function ChennaiHeritageWatermark({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 56h48v4H8z" />
      <path d="M12 56V44h40v12" />
      <path d="M24 56V48a8 8 0 0 1 16 0v8" />
      <path d="M14 44l2-8h32l2 8" />
      <path d="M16 36h32" />
      <path d="M18 36l2-8h24l2 8" />
      <path d="M20 28h24" />
      <path d="M22 28l2-8h16l2 8" />
      <path d="M24 20h16" />
      <path d="M25 20a7 7 0 0 1 14 0" />
      <path d="M27 12v3m5-3v3m5-3v3" />
    </svg>
  );
}

export const CITY_LANDMARKS: Record<string, CityLandmarkMeta> = {
  bengaluru: {
    code: "BLR",
    landmark: "Vidhana Soudha",
    tagline: "Silicon Valley Hub",
    Icon: VidhanaSoudhaIcon,
    Watermark: VidhanaSoudhaWatermark,
  },
  hyderabad: {
    code: "HYD",
    landmark: "Charminar",
    tagline: "Deccan Capital",
    Icon: CharminarIcon,
    Watermark: CharminarWatermark,
  },
  kolkata: {
    code: "CCU",
    landmark: "Howrah Bridge",
    tagline: "Eastern Gateway",
    Icon: HowrahBridgeIcon,
    Watermark: HowrahBridgeWatermark,
  },
  mumbai: {
    code: "BOM",
    landmark: "Gateway of India",
    tagline: "Commercial Capital",
    Icon: GatewayOfIndiaIcon,
    Watermark: GatewayOfIndiaWatermark,
  },
  chennai: {
    code: "MAA",
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
    code: city.slice(0, 3).toUpperCase(),
    landmark: city,
    tagline: "Regional Hub",
    Icon: VidhanaSoudhaIcon,
    Watermark: VidhanaSoudhaWatermark,
  };
}

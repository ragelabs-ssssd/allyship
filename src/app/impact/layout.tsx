import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Outcomes",
  description:
    "Measurable outcomes from Allyship++: placement performance, Centres of Excellence, and national press coverage across five metro capitals.",
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

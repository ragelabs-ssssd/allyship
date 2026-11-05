import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Leadership",
  description:
    "Why Allyship++? Discover the 7 strategic pillars of the SOA Allyship journey, executive CXO mentorship, and our boardroom-to-arena leadership model.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

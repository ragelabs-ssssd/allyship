import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Leadership",
  description:
    "Why Allyship++? The seven roles of workplace allyship, the three-question authenticity test, and SOA's six-step HR implementation blueprint.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

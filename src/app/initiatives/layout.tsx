import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives & Learning Labs",
  description:
    "Structured allyship programs and learning labs for individuals, professional teams, and community organizers.",
};

export default function InitiativesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

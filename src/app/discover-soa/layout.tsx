import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover SOA University",
  description:
    "Discover Siksha 'O' Anusandhan: NIRF 2025 rankings, constituent faculties, 127-acre campus infrastructure, and global accreditations.",
};

export default function DiscoverSoaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

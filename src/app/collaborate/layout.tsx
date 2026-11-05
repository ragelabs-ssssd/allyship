import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborate With SOA",
  description:
    "Stay involved with ALLYSHIP++ beyond the conclave: mentor students, offer guest sessions, share industry problem statements and build talent partnerships with Siksha 'O' Anusandhan.",
};

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborate With Us",
  description:
    "Partner with SOA University: submit industry challenges, co-build Centres of Excellence, co-design curriculum, and recruit from a 94.54% placement ecosystem.",
};

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

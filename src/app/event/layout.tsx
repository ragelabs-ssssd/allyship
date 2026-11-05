import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metro Conclave Chapters",
  description:
    "Explore all seven ALLYSHIP++ metro chapters across Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai — agendas, speakers, themes, and videos.",
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

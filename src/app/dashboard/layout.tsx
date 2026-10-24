import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Dashboard",
  description:
    "Your Allyship++ certificate, saved resources, registered sessions, and everyday ally action checklist.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

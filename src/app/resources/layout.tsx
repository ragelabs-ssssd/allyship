import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "An open repository of peer-reviewed guides, action toolkits, frameworks, checklists, and research briefings on allyship.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

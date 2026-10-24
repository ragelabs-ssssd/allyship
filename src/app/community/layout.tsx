import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Circles",
  description:
    "Join allyship working circles, RSVP to moderated workshops, and read the safety, moderation, and Chatham House charter.",
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

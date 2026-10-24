import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact the Secretariat",
  description:
    "Contact the ALLYSHIP++ Conclave Secretariat for executive invitations, Centre of Excellence partnerships, and campus recruitment.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

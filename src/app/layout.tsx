import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/*
 * Fonts are loaded via a stylesheet <link> instead of next/font/google.
 * The project's `turbopack.rules` config routes every `*.css` module through
 * `@tailwindcss/turbopack`, which also processes next/font's generated CSS and
 * corrupts its internal font-module URL query — breaking `next build`.
 * The CSS custom properties are defined directly in globals.css.
 */
const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "ALLYSHIP++ — Where Industry Meets Academia | SOA University",
    template: "%s | ALLYSHIP++ — SOA University",
  },
  description:
    "A curated gathering of corporate leaders, HRs, and change-makers to discuss ideas, build partnerships, and create opportunities with SOA University.",
  keywords: [
    "ALLYSHIP",
    "SOA University",
    "Industry Academia Collaboration",
    "Bhubaneswar",
    "Engineering and Technology",
    "Corporate Partnerships",
    "Research Innovation",
    "Student Talent",
  ],
  authors: [{ name: "SOA University" }],
  creator: "SOA University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allyship.soa.ac.in",
    siteName: "ALLYSHIP++ — SOA University",
    title: "ALLYSHIP++ — Where Industry Meets Academia",
    description:
      "A curated gathering of corporate leaders, HRs, and change-makers to discuss ideas, build partnerships, and create opportunities with SOA University.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLYSHIP++ — Where Industry Meets Academia",
    description:
      "Building bridges between corporate boardrooms and academic excellence through curated conclaves.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Dark is the default; a stored preference only overrides it when the
            visitor explicitly picked light. Runs before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FONT_STYLESHEET} />
      </head>
      <body className="font-sans antialiased text-content-secondary selection:bg-accent-subtle min-h-screen flex flex-col">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-[#0F172A] text-white rounded-xl shadow-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          Skip to main content
        </a>

        <Suspense
          fallback={
            <div className="h-20 sm:h-22 lg:h-24 bg-canvas/90 border-b border-line" />
          }
        >
          <Navbar />
        </Suspense>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

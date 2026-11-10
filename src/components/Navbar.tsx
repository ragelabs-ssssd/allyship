"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { GetInvitedModal } from "./GetInvitedModal";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 40);

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Chapters", href: "/event" },
    { name: "Impact", href: "/impact" },
    { name: "Discover SOA", href: "/discover-soa" },
    { name: "Collaborate", href: "/collaborate" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
          isHidden && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "nav-editorial shadow-2xl"
            : "bg-gradient-to-b from-canvas/50 via-canvas/25 to-transparent dark:from-canvas/95 dark:via-canvas/70 dark:to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20 sm:h-22 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3.5 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl py-1.5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative flex items-center justify-center rounded-full bg-glass-strong p-2 shadow-lg shadow-black/40 border border-line-strong ring-1 ring-line group-hover:border-accent/80 group-hover:shadow-[0_0_24px_rgba(197,168,105,0.35)] transition-all duration-300 flex-shrink-0">
                <Image
                  src="/soa-logo.png"
                  alt="Siksha 'O' Anusandhan University Logo"
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-contain filter brightness-105 contrast-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-content leading-none inline-flex items-start">
                  ALLYSHIP
                  <span className="text-accent text-[0.62em] font-bold ml-1 -mt-0.5 drop-shadow-[0_0_10px_rgba(197,168,105,0.45)]">
                    ++
                  </span>
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent mt-1 opacity-95 group-hover:opacity-100 transition-all duration-300">
                  Siksha &lsquo;O&rsquo; Anusandhan
                </span>
                <span className="font-sans text-[8.5px] sm:text-[9px] font-medium tracking-[0.02em] sm:tracking-[0.04em] text-content-muted group-hover:text-content mt-0.5 transition-colors whitespace-nowrap">
                  Deemed to be University · Category 1 Autonomy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 lg:px-5 py-2.5 font-heading text-sm lg:text-[14.5px] font-semibold tracking-wide transition-all duration-300 rounded-full ${
                      active
                        ? "text-content bg-glass-strong shadow-sm"
                        : "text-content-secondary hover:text-content hover:bg-glass"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="inline-flex items-center gap-2.5 font-heading text-sm font-bold tracking-wide py-2.5 px-6 lg:px-7 rounded-full border border-accent/80 text-accent bg-accent/10 hover:bg-accent hover:text-on-accent hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(197,168,105,0.35)]"
              >
                <span>Request Invite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="text-xs sm:text-sm font-bold py-2 px-4 rounded-full border border-accent/80 text-accent bg-accent/10"
              >
                Invite
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-xl border border-line bg-glass text-content-secondary hover:text-content hover:bg-glass-strong transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden border-t border-line bg-canvas/98 backdrop-blur-2xl shadow-2xl">
            <div className="max-w-[1720px] mx-auto px-6 sm:px-8 xl:px-16 py-6 space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? "text-content font-bold bg-accent/15 border border-accent/30"
                        : "text-content-secondary hover:text-content hover:bg-glass"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-line">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsInviteOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-3 w-full rounded-full bg-accent hover:bg-accent-hover text-on-accent font-sans font-semibold text-sm py-3.5 transition-colors duration-200 shadow-sm"
                >
                  <span>Request Executive Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <GetInvitedModal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </>
  );
}

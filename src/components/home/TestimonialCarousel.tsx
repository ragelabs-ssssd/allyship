"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Quote, Award } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "../animations/SectionReveal";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  chapter: string;
  highlight?: string;
  image?: string;
  imagePosition?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const testimonials: Testimonial[] = [
  {
    quote:
      "Leadership in elite athletics mirrors corporate allyship. You cannot expect extraordinary execution without relentless trust, psychological conditioning, and mutual respect between mentors and performers.",
    author: "Anju Bobby George",
    role: "Olympian & World Championship Medalist",
    organization: "Anju Bobby Sports Foundation",
    chapter: "Bengaluru Conclave Keynote",
    highlight: "Khel Ratna Luminary",
    image: "/testimonials/anju-bobby-george.jpg",
    imagePosition: "50% 18%",
  },
  {
    quote:
      "Whether bowling the first delivery in international cricket or leading education ventures, sustained peak performance demands mental fortitude, relentless discipline, and authentic camaraderie across the team.",
    author: "Nilesh Kulkarni",
    role: "Former Indian Test Cricketer",
    organization: "Founder Director, IISM",
    chapter: "Mumbai Conclave Fireside",
    highlight: "Test Cricketer",
    image: "/testimonials/nilesh-kulkarni.jpg",
    imagePosition: "50% 12%",
  },
  {
    quote:
      "When we bridge corporate learning academies directly with curriculum design at universities like SOA, we eliminate the two-year learning curve for graduate engineers entering global tech organizations.",
    author: "Dr. P.B. Kotur",
    role: "Global Head, Engineering Academy",
    organization: "L&T Technology Services",
    chapter: "Bengaluru & Mumbai Conclave Deliberations",
    highlight: "Academy Head",
    image: "/testimonials/pb-kotur-v2.jpg",
    imagePosition: "50% 15%",
  },
  {
    quote:
      "Allyship is not a soft sentiment; it is an executive duty. Leaders must actively create safe harbors where emerging talent can question assumptions, innovate without fear, and build resilient careers.",
    author: "Archana Grover",
    role: "Global Head – Capabilities & Transformation",
    organization: "Standard Chartered",
    chapter: "Chennai Conclave Moderator",
    highlight: "Panel Moderator",
    image: "/testimonials/archana-grover.jpg",
    imagePosition: "50% 20%",
  },
  {
    quote:
      "Training national sprinters for the Paris Olympics proved that peak performance is nurtured through empathy and discipline. Corporate leadership must adopt the same coach-athlete allyship.",
    author: "Premanand J.",
    role: "Paris Olympics National Sprint Coach",
    organization: "Indian National Athletics Squad",
    chapter: "Chennai Conclave Fireside",
    highlight: "Olympic Mentor",
    image: "/testimonials/premanand-j.jpg",
    imagePosition: "50% 20%",
  },
  {
    quote:
      "In high-pressure cricket matches as in volatile enterprise environments, talent only flourishes when backed by institutional stamina, mental preparation, and authentic camaraderie.",
    author: "Arshad Ayub",
    role: "Former Indian International Cricketer",
    organization: "Former President, HCA",
    chapter: "Hyderabad Conclave Chief Guest",
    highlight: "Chief Guest",
    image: "/testimonials/arshad-ayub-v2.jpg",
    imagePosition: "50% 20%",
  },
  {
    quote:
      "On an Olympic hockey turf as in any competitive enterprise, victory is never an individual triumph. It belongs to squads that communicate instinctively, absorb pressure selflessly, and lift each other up without hesitation.",
    author: "Gurbux Singh",
    role: "1964 Olympic Hockey Gold Medalist",
    organization: "Indian Olympic Team Captain",
    chapter: "Kolkata Conclave Keynote",
    highlight: "Olympic Gold Medalist",
    image: "/testimonials/gurbux-singh.jpg",
    imagePosition: "50% 12%",
  },
  {
    quote:
      "Young professionals don’t need perfect success stories, they need real ones. Talking about my setbacks here reminded me why struggle, when shared, becomes the most powerful form of mentorship.",
    author: "Dr. G. Srinivas Patnaik",
    role: "Secretary, Athletics Federation of India",
    organization: "Athletics Federation of India (AFI)",
    chapter: "Hyderabad Conclave Speaker",
    highlight: "AFI Governance",
    image: "/testimonials/srinivas-patnaik.jpg",
    imagePosition: "50% 15%",
  },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration; runs once after mount
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 lg:py-28 bg-canvas relative border-b border-line overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-line">
          <SectionReveal>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Voices of Conclave Luminaries
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content tracking-tight mt-2">
              Perspectives From the Conclave
            </h2>
          </SectionReveal>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-line bg-surface-3 flex items-center justify-center text-content hover:border-accent hover:text-accent shadow-xs transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-line bg-surface-3 flex items-center justify-center text-content hover:border-accent hover:text-accent shadow-xs transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 sm:-ml-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 sm:pl-8"
              >
                <div className="h-full flex flex-col bg-surface-3 rounded-2xl border border-line shadow-lg hover:border-accent/60 transition-all duration-300 overflow-hidden">
                  {/* Portrait — the focal point of the card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2 on-media">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        style={{ objectPosition: item.imagePosition || "50% 15%" }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface-sunken">
                        <span className="font-display text-5xl font-bold text-accent">
                          {initials(item.author)}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {item.highlight && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-sans text-[10px] font-semibold uppercase tracking-[0.14em] bg-black/70 text-accent-light border border-accent/40 backdrop-blur-md">
                        <Award className="w-3 h-3" />
                        {item.highlight}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h4 className="font-display text-lg font-semibold leading-tight">
                        {item.author}
                      </h4>
                      <p className="font-sans text-xs text-white/80 mt-0.5 line-clamp-1">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote + attribution */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div className="space-y-4">
                      <Quote className="w-7 h-7 text-accent opacity-80" />
                      <p className="font-serif italic font-normal tracking-normal text-base sm:text-[17px] leading-[1.5] text-content">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-line space-y-1">
                      <p className="font-sans text-xs font-semibold text-accent">
                        {item.organization}
                      </p>
                      <p className="font-sans text-[10px] text-content-muted uppercase tracking-[0.14em] pt-0.5 font-medium">
                        {item.chapter}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === idx
                  ? "w-8 bg-accent"
                  : "w-2 bg-line-strong"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

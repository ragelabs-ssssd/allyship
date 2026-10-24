"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  by?: "words" | "chars";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  by = "words",
  as: Component = "span",
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const items = by === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (customDelay = delay) => ({
      opacity: 1,
      transition: {
        staggerChildren: by === "words" ? 0.08 : 0.03,
        delayChildren: customDelay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="inline-block"
      >
        {items.map((item, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span variants={child} className="inline-block">
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tagline = "Some tagline about me";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < tagline.length) {
        setDisplayedText(tagline.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
        setTimeout(() => setShowCursor(false), 800);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-8 md:pt-10">
      <div className="flex items-center gap-4">
        <img
          src="/profile.jpg"
          alt="Itay Zitvar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p
          className="text-[16px] font-medium uppercase tracking-[0.15em] text-secondary"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Itay Zitvar
        </p>
      </div>

      <a
        href="https://www.linkedin.com/in/itayzitvar/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-[13px] text-accent hover:underline hover:underline-offset-4 transition-all"
      >
        LinkedIn
      </a>

      <h1
        className="mt-4 md:mt-6 font-serif italic leading-[1.15]"
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontFamily: "var(--font-serif)",
        }}
      >
        {displayedText}
        {showCursor && (
          <span
            className={typingDone ? "cursor-blink" : ""}
            style={{ fontStyle: "normal" }}
          >
            |
          </span>
        )}
      </h1>

      <motion.div
        className="mt-4 md:mt-6 h-px bg-rule"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
      />
    </section>
  );
}

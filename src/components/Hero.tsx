"use client";

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
    <section>
      <div className="flex items-center gap-6">
        <img
          src="/profile.jpg"
          alt="Itay Zitvar"
          className="w-[88px] h-[88px] rounded-[32px] object-cover object-top shadow-[0_6px_20px_rgba(43,40,35,0.10)]"
        />
        <div>
          <h2
            className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.02em] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Itay Zitvar
          </h2>
          <div className="mt-2.5 flex gap-2">
            {["Wharton", "Nvidia", "AI"].map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-white px-3.5 py-1 text-[13px] font-semibold shadow-[0_1px_3px_rgba(43,40,35,0.08)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-3 flex gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/itayzitvar/" },
              { label: "X", href: "https://x.com/itayzit" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-accent hover:underline hover:underline-offset-4"
              >
                {link.label}
                <svg
                  aria-hidden="true"
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9L9 3M4 3h5v5" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <h1
        className="mt-12 font-bold leading-[1.15] tracking-[-0.02em] whitespace-nowrap"
        style={{
          fontSize: "clamp(20px, 7vw, 40px)",
          fontFamily: "var(--font-display)",
        }}
      >
        {displayedText}
        {typingDone && <span className="text-accent">.</span>}
        {showCursor && <span className={typingDone ? "cursor-blink" : ""}>|</span>}
      </h1>
    </section>
  );
}

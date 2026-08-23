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
          className="w-[88px] h-[88px] rounded-[32px] object-cover object-top shadow-[0_6px_20px_rgba(34,36,42,0.10)]"
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
                className="rounded-full bg-white px-3.5 py-1 text-[13px] font-semibold shadow-[0_1px_3px_rgba(34,36,42,0.08)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="https://x.com/itayzit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-foreground px-3.5 py-1.5 text-[13px] font-semibold text-background shadow-[0_2px_8px_rgba(34,36,42,0.18)] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_5px_14px_rgba(34,36,42,0.22)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow me on X
            </a>
            <a
              href="https://www.linkedin.com/in/itayzitvar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[14px] font-semibold text-accent hover:underline hover:underline-offset-4"
            >
              LinkedIn
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
        <span className="sr-only">{tagline}.</span>
        <span aria-hidden="true">
          {displayedText}
          {typingDone && <span className="text-accent">.</span>}
          {showCursor && (
            <span className={typingDone ? "cursor-blink" : ""}>|</span>
          )}
        </span>
      </h1>
    </section>
  );
}

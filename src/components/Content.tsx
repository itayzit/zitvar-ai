"use client";

import { motion } from "framer-motion";

export default function Content() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.6 }}
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-secondary">
        Content
      </p>

      <a
        href="https://itay-ai.base44.app/archive"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-start gap-4 group active:scale-[0.96] transition-transform"
      >
        <img
          src="/itay-ai.jpg"
          alt="Itay AI"
          className="w-[72px] h-[72px] rounded-md object-cover flex-shrink-0 mt-0.5 ring-1 ring-black/10"
        />
        <div>
          <span
            className="text-[17px] font-semibold text-foreground transition-[text-underline-offset] group-hover:underline group-hover:underline-offset-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Itay AI
          </span>
          <p className="mt-0.5 text-[14px] leading-relaxed text-secondary">
            Absolutely no fluff. I write about papers, products and podcasts in the AI world.
          </p>
        </div>
      </a>

      <a
        href="https://chat.whatsapp.com/Gp7LZgWA0eg9QD3rb5vGPn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[13px] font-semibold text-background hover:opacity-90 active:scale-[0.96] transition-[transform,opacity] shadow-sm"
      >
        Join my private WhatsApp group
      </a>

      <motion.div
        className="mt-6 h-px bg-rule"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
      />
    </motion.section>
  );
}

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
        href="https://itay-ai.base44.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-start gap-4 group"
      >
        <img
          src="/itay-ai.jpg"
          alt="Itay AI"
          className="w-[72px] h-[72px] rounded-md object-cover flex-shrink-0 mt-0.5"
        />
        <div>
          <span
            className="text-[20px] text-accent transition-all group-hover:underline group-hover:underline-offset-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Itay AI
          </span>
          <p className="mt-1 text-[15px] leading-relaxed text-foreground">
            Absolutely no fluff. I write about papers, products and podcasts in the AI world.
          </p>
        </div>
      </a>

      <a
        href="https://chat.whatsapp.com/Gp7LZgWA0eg9QD3rb5vGPn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-[13px] text-accent hover:underline hover:underline-offset-4 transition-all"
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

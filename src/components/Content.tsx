"use client";

import { motion } from "framer-motion";

export default function Content() {
  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <h2
        className="text-[15px] font-bold uppercase tracking-[0.14em] text-secondary"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Content
      </h2>

      <a
        href="https://itay-ai.base44.app/archive"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-5 rounded-[22px] bg-card-butter p-5 transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(43,40,35,0.10)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <img
          src="/itay-ai.jpg"
          alt=""
          className="w-16 h-16 rounded-[14px] object-cover flex-shrink-0"
        />
        <div>
          <h3
            className="text-[20px] font-bold tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Itay AI
          </h3>
          <p className="mt-1 text-[14px] leading-relaxed text-secondary">
            Absolutely no fluff. I write about papers, products and podcasts in
            the AI world.
          </p>
        </div>
      </a>

      <a
        href="https://chat.whatsapp.com/Gp7LZgWA0eg9QD3rb5vGPn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[16px] font-bold text-white shadow-[0_6px_18px_rgba(224,104,75,0.30)] transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(224,104,75,0.35)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Join my private WhatsApp group →
      </a>
    </motion.section>
  );
}

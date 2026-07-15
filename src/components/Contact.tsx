"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className="text-[30px] font-extrabold tracking-[-0.02em] pb-1.5 bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-no-repeat [background-size:100%_4px] [background-position:0_100%] hover:text-accent transition-colors active:scale-[0.96] motion-reduce:transition-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Get in touch
        </button>
      </motion.section>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}

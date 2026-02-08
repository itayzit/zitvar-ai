"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <motion.section
        className="pb-8 md:pb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.0 }}
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className="group relative text-[16px] text-accent"
        >
          <span>Get in touch</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </button>
      </motion.section>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}

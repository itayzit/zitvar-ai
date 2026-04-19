"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("send failed");
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
      onClose();
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 w-full max-w-[440px] mx-6 flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="self-end text-[14px] text-secondary hover:text-foreground transition-colors"
            >
              close
            </button>

            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full border-b border-rule bg-transparent pb-3 text-[16px] text-foreground placeholder:italic placeholder:text-secondary/60 focus:border-accent focus:outline-none transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border-b border-rule bg-transparent pb-3 text-[16px] text-foreground placeholder:italic placeholder:text-secondary/60 focus:border-accent focus:outline-none transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              />
            </div>

            <div>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to talk about?"
                rows={3}
                className="w-full resize-none border-b border-rule bg-transparent pb-3 text-[16px] text-foreground placeholder:italic placeholder:text-secondary/60 focus:border-accent focus:outline-none transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start text-[16px] text-accent underline underline-offset-4 hover:underline-offset-8 transition-all disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
              {status === "error" && (
                <span className="text-[14px] text-red-400">
                  Failed to send, try again
                </span>
              )}
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

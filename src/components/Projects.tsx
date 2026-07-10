"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "ThankYouGPT",
    href: "https://thank-you-gpt.com",
    thumbnail: "/thank-you-gpt.png",
    description: "A thank you note generator for ivy league MBA students",
  },
  {
    name: "1000Words",
    href: "https://1000words.co",
    thumbnail: "/1000words.jpg",
    description:
      "The feature Duolingo would take years to create — learn language through pictures",
  },
  {
    name: "Defluffer",
    href: "https://itayzit.github.io/defluffer/",
    thumbnail: "/defluffer.png",
    description:
      "A Chrome extension that turns long, AI-bloated LinkedIn posts into one line, as you scroll",
  },
  {
    name: "ROIC Tree Generator",
    href: "https://roic-tree-generator.vercel.app/",
    thumbnail: "/roic-tree.svg",
    description:
      "Decompose any company's Return on Invested Capital into its drivers.",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-secondary">
        Projects
      </p>

      <div className="mt-3 flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group active:scale-[0.96] transition-transform"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.3 + i * 0.08 }}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={72}
              height={72}
              unoptimized
              className="w-[72px] h-[72px] rounded-md object-cover flex-shrink-0 mt-0.5 ring-1 ring-black/10"
            />
            <div>
              <span
                className="text-[17px] font-semibold text-foreground transition-[text-underline-offset] group-hover:underline group-hover:underline-offset-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.name}
              </span>
              <p className="mt-0.5 text-[14px] leading-relaxed text-secondary">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-6 h-px bg-rule"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
      />
    </motion.section>
  );
}

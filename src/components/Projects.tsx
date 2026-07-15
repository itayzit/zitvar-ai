"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "ThankYouGPT",
    href: "https://thank-you-gpt.com",
    thumbnail: "/thank-you-gpt.png",
    description: "A thank you note generator for ivy league MBA students",
    tint: "bg-card-lilac",
  },
  {
    name: "1000Words",
    href: "https://1000words.co",
    thumbnail: "/1000words.jpg",
    description:
      "The feature Duolingo would take years to create — learn language through pictures",
    tint: "bg-card-sage",
  },
  {
    name: "Defluffer",
    href: "https://itayzit.github.io/defluffer/",
    thumbnail: "/defluffer.png",
    description:
      "A Chrome extension that turns long, AI-bloated LinkedIn posts into one line, as you scroll",
    tint: "bg-card-peach",
  },
  {
    name: "ROIC Tree Generator",
    href: "https://roic-tree-generator.vercel.app/",
    thumbnail: "/roic-tree.svg",
    description:
      "Decompose any company's Return on Invested Capital into its drivers",
    tint: "bg-card-sky",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="mt-16"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <h2
        className="text-[15px] font-bold uppercase tracking-[0.14em] text-secondary"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Projects
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.tint} flex flex-col gap-3.5 rounded-[22px] p-5 transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(43,40,35,0.10)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
          >
            <Image
              src={project.thumbnail}
              alt=""
              width={52}
              height={52}
              unoptimized
              className="w-[52px] h-[52px] rounded-[14px] object-cover"
            />
            <div>
              <h3
                className="text-[20px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-[14px] leading-relaxed text-secondary">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

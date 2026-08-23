import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Itay Zitvar",
  url: "https://www.zitvar.ai",
  image: "https://www.zitvar.ai/profile.jpg",
  description:
    "Works at Nvidia on model routing and inference optimization. Wharton MBA. Builds AI products and writes about AI.",
  sameAs: [
    "https://x.com/itayzit",
    "https://www.linkedin.com/in/itayzitvar/",
  ],
};

export default function Home() {
  return (
    <main className="min-h-[100dvh] max-w-[700px] mx-auto px-7 pt-16 md:pt-20 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Projects />
      <Content />
      <Contact />
    </main>
  );
}

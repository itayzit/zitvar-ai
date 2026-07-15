import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-[100dvh] max-w-[700px] mx-auto px-7 pt-16 md:pt-20 pb-24">
      <Hero />
      <Projects />
      <Content />
      <Contact />
    </main>
  );
}

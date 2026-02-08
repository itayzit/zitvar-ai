import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-[100dvh] relative bg-background">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #BFDBFE 0%, transparent 70%)",
          opacity: 0.5,
        }}
      />
      <main className="relative z-10 min-h-[100dvh] max-w-[520px] ml-6 md:ml-[15vw] lg:ml-[25vw] mr-auto px-6 flex flex-col justify-between">
        <Hero />
        <Projects />
        <Content />
        <Contact />
      </main>
    </div>
  );
}

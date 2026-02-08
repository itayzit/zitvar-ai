import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="h-[100dvh] overflow-hidden">
      <main className="h-full max-w-[520px] ml-6 md:ml-[15vw] lg:ml-[25vw] mr-auto px-6 flex flex-col justify-between">
        <Hero />
        <Projects />
        <Content />
        <Contact />
      </main>
    </div>
  );
}

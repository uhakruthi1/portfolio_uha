import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Experience from "@/components/main/Experience";
import Contact from "@/components/main/Contact";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <section className="snap-start h-screen">
          <Hero />
        </section>
        <Experience/>
        <Projects />
        <Skills />
       <Contact/>
        
      </div>
    </main>
  );
}

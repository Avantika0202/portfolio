import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CareerFocus } from "@/components/CareerFocus";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navigation />
      <Hero />
      <CareerFocus />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
      
      <footer className="py-8 bg-background border-t border-border text-center text-xs text-muted-foreground uppercase tracking-widest">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Avantika Srivastava. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg font-sans text-white">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-portfolio-muted">
          © 2024 Jordan Ellis. Built with care.
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;
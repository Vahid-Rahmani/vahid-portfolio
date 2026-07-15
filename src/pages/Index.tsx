import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import RevealMore from "@/components/portfolio/RevealMore";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Roadmap from "@/components/portfolio/Roadmap";
import FooterCredits from "@/components/FooterCredits";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg font-sans text-white">
      <Header />
      <main>
        <About />
        <RevealMore />
        <Experience />
        <Roadmap />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-portfolio-muted">
          © 2026 Vahid Rahmani.
          <FooterCredits />
        </div>
      </footer>
    </div>
  );
};

export default Index;
import Sidebar from "@/components/portfolio/Sidebar";
import MobileTopBar from "@/components/portfolio/MobileTopBar";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import RevealMore from "@/components/portfolio/RevealMore";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Roadmap from "@/components/portfolio/Roadmap";
import Projects from "@/components/portfolio/Projects";
import FooterCredits from "@/components/FooterCredits";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-[#f4f4f5]">
      <Sidebar />
      <MobileTopBar />

      <main className="lg:pl-[280px]">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 lg:pt-12">
          <Header />
          <Projects />
          <About />
          <RevealMore />
          <Roadmap />
          <Experience />
          <Skills />
          <Certificates />
          <Contact />

          <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center text-sm text-zinc-600">
            © 2026 Vahid Rahmani.
            <FooterCredits />
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
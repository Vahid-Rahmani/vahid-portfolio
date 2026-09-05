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
import SignalBackdrop from "@/components/portfolio/SignalBackdrop";

const Index = () => {
  return (
    <div className="portfolio-shell min-h-screen font-sans text-[#f4f4f5]">
      <SignalBackdrop />
      <Sidebar />
      <MobileTopBar />

      <main className="relative z-10 lg:pl-[300px]">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 lg:pt-10 xl:px-12">
          <Header />
          <Projects />
          <About />
          <RevealMore />
          <Roadmap />
          <Experience />
          <Skills />
          <Certificates />
          <Contact />

          <footer className="mt-16 border-t border-cyan-300/10 pt-8 text-center text-sm text-slate-500">
            © 2026 Vahid Rahmani.
            <FooterCredits />
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;

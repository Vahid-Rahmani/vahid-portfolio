import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-portfolio-accent/10 blur-3xl"></div>
        <div className="absolute top-48 -left-16 h-64 w-64 rounded-full bg-portfolio-accent/5 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <div className="animate-fade-in-up">
          <OpenToWorkBadge />
        </div>

        <h1
          className="mt-6 animate-fade-in-up text-5xl font-bold tracking-tight text-white font-display sm:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Vahid Rahmani
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl animate-fade-in-up text-lg text-portfolio-muted sm:text-xl"
          style={{ animationDelay: "0.12s" }}
        >
          Junior Frontend Developer — crafting clean, accessible, and
          delightful web experiences.
        </p>

        <div
          className="mt-8 flex animate-fade-in-up flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.18s" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-portfolio-accent px-6 py-3 text-sm font-semibold text-portfolio-bg transition hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            View projects <ArrowDown size={16} />
          </a>
        </div>

        <div
          className="mt-8 flex animate-fade-in-up items-center justify-center gap-5 text-portfolio-muted"
          style={{ animationDelay: "0.24s" }}
        >
          <a href="https://github.com/vahidrahmaniinfo24-alt" target="_blank" rel="noreferrer" className="transition hover:text-portfolio-accent" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/vahid-rahmani-699944417" target="_blank" rel="noreferrer" className="transition hover:text-portfolio-accent" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@jordanellis.dev" className="transition hover:text-portfolio-accent" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
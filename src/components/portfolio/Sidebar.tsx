"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import LanguageToggle from "@/components/LanguageToggle";

const navKeys = [
  { id: "projects", key: "nav.projects" },
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "roadmap", key: "nav.roadmap" },
  { id: "skills", key: "nav.skills" },
  { id: "certificates", key: "nav.certificates" },
  { id: "contact", key: "nav.contact" },
];

const Sidebar = () => {
  const { t } = useTranslation();
  const [active, setActive] = React.useState<string>("projects");

  React.useEffect(() => {
    const sections = navKeys
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col justify-between border-r border-white/[0.06] bg-[#09090b] px-8 py-12 lg:flex">
      <div>
        <a href="#projects" className="block">
          <h1 className="text-2xl font-semibold tracking-tight text-[#f4f4f5]">
            Vahid Rahmani
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Cloud Engineer & IT System Administrator
          </p>
        </a>

        <nav className="mt-10">
          <ul className="space-y-1">
            {navKeys.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "group inline-flex items-center gap-2 text-sm transition-colors",
                    active === item.id
                      ? "text-[#f4f4f5]"
                      : "text-zinc-500 hover:text-zinc-300",
                  )}
                >
                  <span
                    className={cn(
                      "h-px w-4 transition-all duration-300",
                      active === item.id
                        ? "bg-teal-400 w-6"
                        : "bg-zinc-700 group-hover:bg-zinc-500",
                    )}
                  />
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/costs"
                className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                <span className="h-px w-4 bg-zinc-700 transition-all duration-300 group-hover:w-6 group-hover:bg-zinc-500" />
                Costs <ExternalLink size={12} className="opacity-50" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 text-zinc-500">
        <a href="https://github.com/vahidrahmaniinfo24-alt" target="_blank" rel="noreferrer" className="transition-colors hover:text-teal-400" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/vahid-rahmani-699944417" target="_blank" rel="noreferrer" className="transition-colors hover:text-teal-400" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:vahidrahmani.info@gmail.com" className="transition-colors hover:text-teal-400" aria-label="E-Mail">
          <Mail size={18} />
        </a>
        <LanguageToggle />
        <a href="#contact" className="ml-auto inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-teal-400">
          {t("nav.top")} <ArrowUpRight size={14} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
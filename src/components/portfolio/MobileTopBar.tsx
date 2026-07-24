"use client";

import React from "react";
import { Menu, X } from "lucide-react";
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

const MobileTopBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <a href="#projects" className="text-base font-semibold tracking-tight text-[#f4f4f5]">
          Vahid Rahmani
        </a>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button onClick={() => setOpen((v) => !v)} className="text-zinc-400 transition hover:text-[#f4f4f5]" aria-label="Menü umschalten">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={cn("grid border-t border-white/[0.06] bg-[#09090b] transition-all duration-300 ease-in-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <nav className="px-5 py-4">
            <ul className="space-y-1">
              {navKeys.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setOpen(false)} className={cn("block py-2 text-sm transition-colors", active === item.id ? "text-[#f4f4f5]" : "text-zinc-500 hover:text-zinc-300")}>
                    {t(item.key)}
                  </a>
                </li>
              ))}
              <li>
                <a href="/costs" onClick={() => setOpen(false)} className="block py-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300">
                  Costs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileTopBar;
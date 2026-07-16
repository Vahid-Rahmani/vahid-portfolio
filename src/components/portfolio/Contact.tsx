"use client";

import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="scroll-mt-24 px-0 py-16">
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center sm:p-12">
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5] sm:text-2xl">{t("contact.title")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">{t("contact.text")}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:vahidrahmani.info@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#09090b] transition hover:bg-zinc-200">
            <Mail size={16} /> {t("contact.email")}
          </a>
          <a href="https://linkedin.com/in/vahid-rahmani-699944417" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
            <Linkedin size={16} /> {t("contact.linkedin")}
          </a>
          <a href="https://github.com/vahidrahmaniinfo24-alt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
            <Github size={16} /> {t("contact.github")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
"use client";

import { useTranslation } from "react-i18next";
import { UserRound } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-4 flex items-center gap-2">
        <UserRound className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("about.title")}</h2>
      </div>
      <p className="text-[15px] leading-relaxed text-zinc-400">{t("about.text")}</p>
    </section>
  );
};

export default About;
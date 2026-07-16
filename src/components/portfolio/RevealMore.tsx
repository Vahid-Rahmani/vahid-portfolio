"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Target, Heart, Zap, FileText } from "lucide-react";

const RevealMore = () => {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);

  const items = [
    { icon: Target, title: t("reveal.goalTitle"), text: t("reveal.goalText") },
    { icon: Heart, title: t("reveal.driveTitle"), text: t("reveal.driveText") },
    { icon: Zap, title: t("reveal.funTitle"), text: t("reveal.funText") },
    { icon: FileText, title: t("reveal.learningTitle"), text: t("reveal.learningText") },
  ];

  return (
    <section className="scroll-mt-24 border-b border-white/[0.06] px-0 py-10">
      <div className="text-center">
        <button onClick={() => setRevealed((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
          <Sparkles size={16} />
          {revealed ? t("reveal.less") : t("reveal.title")}
        </button>
      </div>
      {revealed && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="animate-fade-in-up rounded-xl border border-white/[0.08] bg-white/[0.02] p-5" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="text-teal-400" size={18} />
                  <h3 className="text-base font-medium text-[#f4f4f5]">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RevealMore;
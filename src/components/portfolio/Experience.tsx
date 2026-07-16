"use client";

import { useTranslation } from "react-i18next";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as Array<{
    role: string; company: string; location: string; period: string; points: string[];
  }>;

  return (
    <section id="experience" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Briefcase className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("experience.title")}</h2>
      </div>
      <div className="relative border-l border-white/[0.08] pl-6">
        {items.map((item, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[1.95rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-teal-400 bg-[#09090b]"></span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-medium text-[#f4f4f5]">{item.role}</h3>
              <span className="text-xs font-medium text-teal-400">{item.period}</span>
            </div>
            <p className="text-sm text-zinc-500">{item.company} · {item.location}</p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p, j) => (
                <li key={j} className="flex gap-2 text-sm text-zinc-400">
                  <span className="text-teal-400">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
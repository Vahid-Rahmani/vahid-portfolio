"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Languages, Award, CheckCircle2 } from "lucide-react";

const Certificates = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { const tm = setTimeout(() => setMounted(true), 150); return () => clearTimeout(tm); }, []);

  const langs = t("certificates.langs", { returnObjects: true }) as Array<{ name: string; level: string; value: number }>;
  const foundational = t("certificates.foundational", { returnObjects: true }) as string[];
  const focus = t("certificates.focusCerts", { returnObjects: true }) as string[];

  return (
    <section id="certificates" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Award className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("certificates.title")}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-teal-400/20 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Languages className="text-teal-400" size={18} />
            <h3 className="text-base font-semibold text-[#f4f4f5]">{t("certificates.languages")}</h3>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5">
            {langs.map((lang) => (
              <div key={lang.name}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#f4f4f5]">{lang.name}</span>
                  <span className="text-xs text-zinc-500">{lang.level}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-teal-400 transition-[width] duration-1000 ease-out" style={{ width: mounted ? `${lang.value}%` : "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-teal-400/20 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Award className="text-teal-400" size={18} />
            <h3 className="text-base font-semibold text-[#f4f4f5]">{t("certificates.title")}</h3>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("certificates.foundations")}</p>
              <div className="flex flex-wrap gap-2">
                {foundational.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm text-emerald-300">
                    <CheckCircle2 size={14} className="shrink-0" /> {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("certificates.focus")}</p>
              <div className="flex flex-wrap gap-2">
                {focus.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 text-sm text-teal-400">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
                    </span>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
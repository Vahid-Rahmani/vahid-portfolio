"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Languages, Award, CheckCircle2, Clock } from "lucide-react";

const Certificates = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { const tm = setTimeout(() => setMounted(true), 150); return () => clearTimeout(tm); }, []);

  const langs = t("certificates.langs", { returnObjects: true }) as Array<{ name: string; level: string; value: number }>;
  const earned = t("certificates.earnedCerts", { returnObjects: true }) as Array<{ name: string; detail: string; date: string }>;
  const planned = t("certificates.plannedCerts", { returnObjects: true }) as Array<{ name: string; detail: string; date: string }>;

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
          <div className="flex flex-1 flex-col gap-6">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("certificates.earned")}</p>
              </div>
              <div className="flex flex-col gap-3">
                {earned.map((cert) => (
                  <div key={cert.name} className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.03] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-emerald-300">{cert.name}</span>
                      {cert.date && <span className="shrink-0 text-xs text-zinc-500">{cert.date}</span>}
                    </div>
                    {cert.detail && <p className="mt-1 text-xs leading-relaxed text-zinc-400">{cert.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Clock size={14} className="text-teal-400" />
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("certificates.planned")}</p>
              </div>
              <div className="flex flex-col gap-3">
                {planned.map((cert) => (
                  <div key={cert.name} className="rounded-lg border border-teal-400/10 bg-teal-400/[0.03] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-teal-400">{cert.name}</span>
                      {cert.date && <span className="shrink-0 text-xs text-zinc-500">{cert.date}</span>}
                    </div>
                    {cert.detail && <p className="mt-1 text-xs leading-relaxed text-zinc-400">{cert.detail}</p>}
                  </div>
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
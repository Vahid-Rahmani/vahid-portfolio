"use client";

import React from "react";
import { Languages, Award, CheckCircle2 } from "lucide-react";

const languages = [
  { name: "Deutsch", level: "B1 (Fortgeschritten)", value: 60 },
  { name: "Persisch", level: "Muttersprache", value: 100 },
  { name: "Türkisch", level: "Verhandlungssicher", value: 90 },
];

const foundationalCerts = [
  "CompTIA A+",
  "CompTIA Network+",
  "Cisco CCNA",
  "MCSA / MCSE",
];

const focusCerts = [
  "Cisco CCNP",
  "Azure Security",
];

const Certificates = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="certificates" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Award className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Sprachen & Zertifikate</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Card - Languages */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-portfolio-accent/30 hover:shadow-[0_0_30px_rgba(255,107,87,0.12)] sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Languages className="text-portfolio-accent" size={18} />
            <h3 className="text-lg font-semibold text-white">Sprachen</h3>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-5">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-white">{lang.name}</span>
                  <span className="text-xs text-portfolio-muted">{lang.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-portfolio-accent transition-[width] duration-1000 ease-out"
                    style={{ width: mounted ? `${lang.value}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card - Certifications */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-portfolio-accent/30 hover:shadow-[0_0_30px_rgba(255,107,87,0.12)] sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Award className="text-portfolio-accent" size={18} />
            <h3 className="text-lg font-semibold text-white">Zertifizierungen & Fokus</h3>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            {/* Established Foundations */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
                Etablierte Fundamente
              </p>
              <div className="flex flex-wrap gap-2">
                {foundationalCerts.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300"
                  >
                    <CheckCircle2 size={14} className="shrink-0" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
                In Vorbereitung / Fokus 2026
              </p>
              <div className="flex flex-wrap gap-2">
                {focusCerts.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 rounded-full border border-portfolio-accent/30 bg-portfolio-accent/10 px-3 py-1.5 text-sm text-portfolio-accent"
                  >
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-accent opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-accent"></span>
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
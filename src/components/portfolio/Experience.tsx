import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Weiterbildung zum Cloud Engineer",
    company: "Digital Career Institute (DCI)",
    location: "Hamburg",
    period: "06.2026 – laufend",
    points: [
      "Fokus auf moderne Enterprise-Architekturen, Netzwerksicherheit und Cloud-Migration.",
      "Praktische Implementierung von Automatisierungs-Szenarien mittels Python-Grundlagen.",
    ],
  },
  {
    role: "Kurier / Logistikmitarbeiter & IT-Hardware-Support",
    company: "Smiley Pizza",
    location: "Hamburg",
    period: "10.2023 – 03.2026",
    points: [
      "Sicherstellung und First-Level-Support der internen Mobilgeräte-Hardware der Fahrer.",
      "Logistische Planung und Routenoptimierung über digitale Koordinationsplattformen.",
    ],
  },
  {
    role: "Fahrer / Logistikmitarbeiter & Technischer Support",
    company: "Amazon Logistics",
    location: "Hamburg",
    period: "04.2023 – 09.2023",
    points: [
      "Einsatz und Routen-Anpassung über das digitale Dispatching-System Cortex.",
      "Fehlerbehebung und Hardware-Support bei Störungen an Scannern und mobilen Endgeräten.",
    ],
  },
  {
    role: "Inhaber & Hardware-Spezialist (Selbstständig)",
    company: "Eigenes IT-Fachgeschäft",
    location: "Istanbul, Türkei",
    period: "06.2020 – 12.2022",
    points: [
      "Aufbau und Betrieb eines Reparaturzentrums für anspruchsvolle Mikroelektronik.",
      "Analyse komplexer Platinen-Schaltpläne und präzises Mikrolöten (Board-Level-Reparatur).",
      "Kundenberatung, technischer Support und Systemkonfiguration für Business- und Endkunden.",
    ],
  },
  {
    role: "Network Administrator & IT-Support",
    company: "Jahan Aseman Co.",
    location: "Teheran, Iran",
    period: "2008 – 2010",
    points: [
      "Administration und Wartung der lokalen Netzwerkinfrastruktur.",
      "Benutzer-Support (Helpdesk), Hardware-Installation und Behebung von Systemstörungen.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Briefcase className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Beruflicher Werdegang</h2>
      </div>
      <div className="relative border-l border-white/10 pl-8">
        {experience.map((item, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.6rem] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-portfolio-accent ring-4 ring-portfolio-bg"></span>
            <div className="rounded-2xl border border-white/10 bg-portfolio-surface p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="text-sm font-medium text-portfolio-accent">{item.period}</span>
              </div>
              <p className="text-sm text-portfolio-muted">{item.company} · {item.location}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-portfolio-muted">
                    <span className="text-portfolio-accent">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
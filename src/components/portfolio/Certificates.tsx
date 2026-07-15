import { Languages, Award } from "lucide-react";

const languages = [
  { name: "Deutsch", level: "B1 (Fortgeschritten)" },
  { name: "Persisch / Türkisch", level: "Muttersprache / Verhandlungssicher" },
];

const certificates = [
  "Cisco CCNA",
  "CompTIA Network+",
  "CompTIA A+",
];

const Certificates = () => {
  return (
    <section id="certificates" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Award className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Sprachen & Zertifikate</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-portfolio-surface p-6">
          <div className="mb-4 flex items-center gap-2">
            <Languages className="text-portfolio-accent" size={18} />
            <h3 className="text-lg font-semibold text-white">Sprachen</h3>
          </div>
          <ul className="space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-white">{lang.name}</span>
                <span className="text-portfolio-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-portfolio-surface p-6">
          <div className="mb-4 flex items-center gap-2">
            <Award className="text-portfolio-accent" size={18} />
            <h3 className="text-lg font-semibold text-white">Zertifikate (in Vorbereitung 2026)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certificates.map((cert) => (
              <span
                key={cert}
                className="rounded-full bg-portfolio-accent/15 px-3 py-1 text-sm text-portfolio-accent"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
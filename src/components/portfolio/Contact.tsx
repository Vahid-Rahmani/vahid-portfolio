import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-portfolio-surface p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-white font-display sm:text-3xl">
          Lassen Sie uns zusammenarbeiten
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-portfolio-muted">
          Ich suche aktiv nach einer Einstiegsposition als Junior Cloud Engineer
          oder IT-Systemadministrator im Raum Hamburg. Melden Sie sich gerne bei
          mir — ich freue mich auf unser Gespräch.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:vahidrahmani.info@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-portfolio-accent px-6 py-3 text-sm font-semibold text-portfolio-bg transition hover:opacity-90"
          >
            <Mail size={16} /> E-Mail
          </a>
          <a
            href="https://linkedin.com/in/vahid-rahmani-699944417"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/vahidrahmaniinfo24-alt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
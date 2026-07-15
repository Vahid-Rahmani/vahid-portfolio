import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-portfolio-surface p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-white font-display sm:text-3xl">
          Let's build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-portfolio-muted">
          I'm actively looking for junior frontend opportunities. Feel free to
          reach out — I'd love to chat about how I can help your team.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@jordanellis.dev"
            className="inline-flex items-center gap-2 rounded-full bg-portfolio-accent px-6 py-3 text-sm font-semibold text-portfolio-bg transition hover:opacity-90"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com"
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
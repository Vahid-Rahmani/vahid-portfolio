import { useTranslation } from "react-i18next";
import { faq } from "@/data/faq";

const Faq = () => {
  const { i18n } = useTranslation();
  const language = i18n.language === "en" ? "en" : "de";
  return (
    <section id="faq" className="scroll-mt-24 border-b border-white/[0.06] py-16" aria-labelledby="faq-title">
      <h2 id="faq-title" className="mb-8 text-xl font-semibold text-[#f4f4f5]">
        {language === "de" ? "Fragen zu Profil und Projekten" : "Questions about my profile and projects"}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {faq[language].map(({ question, answer }) => (
          <article key={question} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="mb-3 text-base font-semibold text-teal-300">{question}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;

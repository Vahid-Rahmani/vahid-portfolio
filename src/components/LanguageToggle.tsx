"use client";

import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const current = i18n.language;

  const toggle = () => {
    i18n.changeLanguage(current === "de" ? "en" : "de");
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400"
      aria-label="Toggle language"
    >
      <Languages size={14} />
      {t("language.toggle")}
    </button>
  );
};

export default LanguageToggle;
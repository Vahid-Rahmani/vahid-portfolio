"use client";

import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { basePath, languageFromPath, localizedPath } from "@/lib/locale";

const LanguageToggle = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const next = languageFromPath(location.pathname) === "de" ? "en" : "de";

  return (
    <Link
      to={localizedPath(basePath(location.pathname), next) + location.search + location.hash}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400"
      aria-label={next === "en" ? "Read this page in English" : "Diese Seite auf Deutsch lesen"}
      hrefLang={next}
    >
      <Languages size={14} />
      {t("language.toggle")}
    </Link>
  );
};

export default LanguageToggle;

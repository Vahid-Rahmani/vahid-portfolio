"use client";

import { useTranslation } from "react-i18next";
import { MapPin, ArrowDown, Download } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfilePhoto from "./ProfilePhoto";
import cvPdf from "../../../img/vahid_cv.pdf";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-b border-white/[0.06] pb-16 pt-4 text-center">
      <div className="mx-auto flex flex-col items-center">
        <ProfilePhoto />
        <div className="mt-6"><OpenToWorkBadge /></div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#f4f4f5] sm:text-5xl">Vahid Rahmani</h1>
        <p className="mt-3 text-lg text-zinc-400">{t("header.role")}</p>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-zinc-500">
          <MapPin size={14} className="text-teal-400" /> {t("header.location")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#09090b] transition hover:bg-zinc-200">{t("header.contactBtn")}</a>
          <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-[#f4f4f5]">
            {t("header.experienceBtn")} <ArrowDown size={15} />
          </a>
          <a href={cvPdf} download className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
            <Download size={15} /> {t("header.cvBtn")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
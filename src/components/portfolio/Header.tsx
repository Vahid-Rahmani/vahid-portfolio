"use client";

import { useTranslation } from "react-i18next";
import { MapPin, ArrowDown } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfilePhoto from "./ProfilePhoto";
import CvDownloadDialog from "./CvDownloadDialog";
import cvPdf from "../../../img/vahid_cv.pdf";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-b border-white/[0.06] pb-8 pt-4">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <ProfilePhoto size="sm" />
          <div className="min-w-0">
            <h1 className="text-xl font-semibold tracking-tight text-[#f4f4f5] sm:text-2xl">Vahid Rahmani</h1>
            <p className="mt-0.5 text-sm text-zinc-400">{t("header.role")}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
              <MapPin size={12} className="text-teal-400" /> {t("header.location")}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <OpenToWorkBadge />
          <a href="#contact" className="rounded-full bg-[#f4f4f5] px-4 py-2 text-xs font-medium text-[#09090b] transition hover:bg-zinc-200">{t("header.contactBtn")}</a>
          <a href="#experience" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-[#f4f4f5]">
            {t("header.experienceBtn")} <ArrowDown size={13} />
          </a>
          <CvDownloadDialog cvPdf={cvPdf} />
        </div>
      </div>
    </header>
  );
};

export default Header;

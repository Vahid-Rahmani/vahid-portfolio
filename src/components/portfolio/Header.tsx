"use client";

import { useTranslation } from "react-i18next";
import { MapPin, ArrowDown, Sparkles } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfilePhoto from "./ProfilePhoto";
import CvDownloadDialog from "./CvDownloadDialog";
import cvPdf from "../../../img/vahid_cv.pdf";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="border-b border-white/[0.06] pb-8 pt-4">
      {/* ── Mobile: Gradient Profile Card ── */}
      <div className="profile-card rounded-2xl p-6 sm:hidden">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo with Ring */}
          <div className="profile-ring mb-5">
            <div className="rounded-full bg-[#09090b] p-[2px]">
              <ProfilePhoto size="lg" />
            </div>
          </div>

          {/* Name & Info */}
          <h1 className="text-xl font-bold tracking-tight text-[#f4f4f5]">Vahid Rahmani</h1>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-teal-400">
            <Sparkles size={13} className="shrink-0" />
            {t("header.role")}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-zinc-500">
            <MapPin size={12} className="text-teal-400" /> {t("header.location")}
          </p>

          {/* Primary CTAs */}
          <div className="mt-6 flex w-full gap-3">
            <OpenToWorkBadge className="flex-1 justify-center" />
            <a
              href="#contact"
              className="cta-primary flex-1 rounded-full px-4 py-2.5 text-center text-sm"
            >
              {t("header.contactBtn")}
            </a>
          </div>

          {/* Secondary CTAs */}
          <div className="mt-3 flex w-full gap-3">
            <a
              href="#experience"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-400 transition hover:border-white/20 hover:text-[#f4f4f5]"
            >
              {t("header.experienceBtn")} <ArrowDown size={13} />
            </a>
            <CvDownloadDialog cvPdf={cvPdf} />
          </div>
        </div>
      </div>

      {/* ── Desktop: Horizontal Layout ── */}
      <div className="hidden flex-col gap-6 sm:flex sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="profile-ring">
            <div className="rounded-full bg-[#09090b] p-[2px]">
              <ProfilePhoto size="sm" />
            </div>
          </div>
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
          <a href="#contact" className="cta-primary rounded-full px-4 py-2 text-xs">{t("header.contactBtn")}</a>
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

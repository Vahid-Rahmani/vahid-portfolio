"use client";

import { useTranslation } from "react-i18next";
import { MapPin, ArrowDown, Sparkles, Activity, Server, CloudCog } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfilePhoto from "./ProfilePhoto";
import CvDownloadDialog from "./CvDownloadDialog";
import cvPdf from "../../../img/vahid_cv.pdf";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="command-hero border-b border-cyan-300/10 pb-10 pt-4">
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
      <div className="hidden gap-8 sm:grid lg:grid-cols-[1.35fr_.65fr] lg:items-stretch">
        <div className="hero-identity flex items-center gap-5 rounded-[1.75rem] p-6 lg:p-8">
          <div className="profile-ring profile-ring-large">
            <div className="rounded-full bg-[#09090b] p-[2px]">
              <ProfilePhoto size="lg" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[.18em] text-cyan-300">
              <span className="signal-dot" /> Cloud systems online
            </div>
            <h1 className="glitch-title text-4xl font-bold tracking-[-0.04em] text-white lg:text-5xl" data-text="Vahid Rahmani">Vahid Rahmani</h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{t("header.role")}</p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={12} className="text-teal-400" /> {t("header.location")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <OpenToWorkBadge />
              <a href="#contact" className="cta-primary rounded-full px-5 py-2.5 text-xs">{t("header.contactBtn")}</a>
              <a href="#experience" className="glass-button inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-medium text-slate-300">
                {t("header.experienceBtn")} <ArrowDown size={13} />
              </a>
              <CvDownloadDialog cvPdf={cvPdf} />
            </div>
          </div>
        </div>
        <div className="ops-panel rounded-[1.75rem] p-5">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
            <span className="font-mono text-xs uppercase tracking-[.16em] text-slate-400">Operator status</span>
            <Activity size={17} className="text-cyan-300" />
          </div>
          <div className="mt-5 space-y-4">
            <div className="ops-row"><CloudCog size={17} /><span>Azure / Cloud</span><b>ACTIVE</b></div>
            <div className="ops-row"><Server size={17} /><span>Windows / Linux</span><b>READY</b></div>
            <div className="ops-row"><Sparkles size={17} /><span>AI Automation</span><b>BUILDING</b></div>
          </div>
          <div className="mt-5 h-16 overflow-hidden rounded-xl border border-cyan-300/10 bg-black/20 p-3">
            <div className="telemetry-bars">{Array.from({ length: 18 }).map((_, i) => <i key={i} style={{ animationDelay: `${i * -0.11}s` }} />)}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Network, Code, Terminal, Shield, Cpu, ChevronDown, CheckCircle2, CircleDot, Milestone } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "completed" | "in-progress" | "planned";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Code, Terminal, Shield, Cpu, Milestone,
};

const StatusBadge = ({ status, t }: { status: Status; t: (k: string) => string }) => {
  if (status === "completed") return <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"><CheckCircle2 size={14} /> {t("roadmap.status.completed")}</span>;
  if (status === "in-progress") return <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span></span> {t("roadmap.status.inProgress")}</span>;
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-500"><CircleDot size={14} /> {t("roadmap.status.planned")}</span>;
};

const nodeStyles: Record<Status, string> = {
  completed: "border-emerald-400/50 text-emerald-300",
  "in-progress": "border-teal-400/60 text-teal-400",
  planned: "border-white/15 text-zinc-500",
};

const Roadmap = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const phases = t("roadmap.phases", { returnObjects: true }) as Array<{
    tag: string; subtitle: string; title: string; period: string; topics: string[]; icon: string; status: Status;
  }>;

  return (
    <section id="roadmap" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-4 flex items-center gap-2">
        <Milestone className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("roadmap.title")}</h2>
      </div>
      <p className="mb-10 text-sm text-zinc-500">{t("roadmap.subtitle")}</p>
      <div className="relative">
        <div className="absolute left-[1.05rem] top-4 bottom-4 w-px bg-white/[0.08]"></div>
        <div className="space-y-6">
          {phases.map((phase, i) => {
            const Icon = iconMap[phase.icon] || Milestone;
            const expanded = expandedId === phase.tag;
            return (
              <div key={phase.tag} className="relative animate-fade-in-up pl-10" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className={cn("absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-[#09090b]", nodeStyles[phase.status])}>
                  <Icon size={14} />
                </span>
                <div onClick={() => setExpandedId(expanded ? null : phase.tag)} className="cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/15">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">{phase.tag}</p>
                      <h3 className="text-base font-medium text-[#f4f4f5]">{phase.title}</h3>
                      <p className="text-sm text-zinc-500">{phase.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <StatusBadge status={phase.status} t={t} />
                      <span className="text-xs text-zinc-500">{phase.period}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-teal-400">
                    {expanded ? t("roadmap.cheatHide") : t("roadmap.cheatShow")}
                    <ChevronDown size={16} className={cn("transition-transform", expanded && "rotate-180")} />
                  </div>
                  <div className={cn("grid transition-all duration-300 ease-in-out", expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("roadmap.cheatLabel")}</p>
                        <ul className="space-y-2">
                          {phase.topics.map((topic, j) => (
                            <li key={j} className="flex gap-2 text-sm text-zinc-300"><span className="text-teal-400">—</span><span>{topic}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
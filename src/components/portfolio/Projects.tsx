"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Network, Shield, Bot, Cpu, Globe, FolderGit, X, CheckCircle2, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "completed" | "in-progress" | "planned";
type Step = { label: string; status: StepStatus };
type Project = {
  title: string; subtitle: string; description: string; architecture: string;
  tech: string[]; icon: string; steps: Step[]; githubUrl?: string;
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Shield, Bot, Cpu, Globe,
};

const githubUrls: Record<string, string> = {
  "Automated Hybrid Network & Monitoring Dashboard": "https://github.com/vahidrahmaniinfo24-alt/Automated-Hybrid-Network-Monitoring-Dashboard",
  "Hybrid Identity Sync: Local AD to Azure Entra ID": "https://github.com/vahidrahmaniinfo24-alt/Hybrid-Identity-Sync-Local-AD-to-Azure-Entra-ID",
  "Serverless Network Sentinel Bot": "https://github.com/vahidrahmaniinfo24-alt/Serverless-Network-Sentinel-Bot",
  "Cloud-Connected Hardware & IoT Monitor": "https://github.com/vahidrahmaniinfo24-alt/Cloud-Connected-Hardware-IoT-Monitor",
  "Global High-Availability Web Hosting with IaC": "https://github.com/vahidrahmaniinfo24-alt/Global-High-Availability-Web-Hosting-with-IaC",
};

const StepIcon = ({ status }: { status: StepStatus }) => {
  if (status === "completed") return <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />;
  if (status === "in-progress") return <span className="relative flex h-4 w-4 shrink-0 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span></span>;
  return <CircleDot size={18} className="shrink-0 text-zinc-600" />;
};

const ProjectModal = ({ project, onClose, t }: { project: Project; onClose: () => void; t: (k: string) => string }) => {
  const Icon = iconMap[project.icon] || FolderGit;
  return (
    <motion.div className="fixed inset-0 z-[60] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.div role="dialog" aria-modal="true" className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#09090b] p-6 shadow-2xl sm:p-8" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.2, ease: "easeOut" }}>
        <button onClick={onClose} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-teal-400/40 hover:text-teal-400" aria-label="Schließen"><X size={18} /></button>
        <div className="flex items-start gap-4 pr-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400"><Icon size={24} /></div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug text-[#f4f4f5]">{project.title}</h3>
            <p className="mt-1 text-sm text-teal-400">{project.subtitle}</p>
          </div>
        </div>
        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span></span>
            {t("projects.concept")}
          </span>
        </div>
        <div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("projects.architecture")}</p>
          <p className="text-sm leading-relaxed text-zinc-300">{project.architecture}</p>
        </div>
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.roadmapLabel")}</h4>
          <ul className="space-y-3">
            {project.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <StepIcon status={step.status} />
                <span className={cn("text-sm leading-relaxed", step.status === "planned" ? "text-zinc-500" : "text-zinc-300")}>{step.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <a href={githubUrls[project.title] || "#"} target={githubUrls[project.title] ? "_blank" : undefined} rel={githubUrls[project.title] ? "noreferrer" : undefined} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400" aria-label="GitHub Repository"><Github size={14} /> {t("projects.github")}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f4f5] px-4 py-2 text-xs font-medium text-[#09090b] transition hover:bg-zinc-200" aria-label="Live Demo"><ExternalLink size={14} /> {t("projects.demo")}</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [active, setActive] = React.useState<Project | null>(null);
  const items = t("projects.items", { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <FolderGit className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("projects.title")}</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, i) => {
          const Icon = iconMap[project.icon] || FolderGit;
          return (
            <button key={project.title} onClick={() => setActive(project)} className="group animate-fade-in-up cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400"><Icon size={20} /></div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-snug text-[#f4f4f5]">{project.title}</h3>
                  <p className="mt-1 text-xs text-teal-400/80">{project.subtitle}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (<span key={tech} className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-white/[0.06]">{tech}</span>))}
              </div>
              <p className="mt-4 text-xs font-medium text-teal-400 opacity-0 transition-opacity group-hover:opacity-100">{t("projects.clickHint")}</p>
            </button>
          );
        })}
      </div>
      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} t={t} />}</AnimatePresence>
    </section>
  );
};

export default Projects;
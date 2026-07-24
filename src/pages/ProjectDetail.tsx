"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Network, Shield, Bot, Cpu, Globe, FolderGit, CheckCircle2, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  githubUrls, demoUrls, getProgress, getStatusLabel, statusColor, progressBarColor, slugify, projectImages, type Step, type StepStatus,
} from "@/data/projects";
import Sidebar from "@/components/portfolio/Sidebar";
import MobileTopBar from "@/components/portfolio/MobileTopBar";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Shield, Bot, Cpu, Globe,
};

const StepIcon = ({ status }: { status: StepStatus }) => {
  if (status === "completed") return <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />;
  if (status === "in-progress") return <span className="relative flex h-4 w-4 shrink-0 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span></span>;
  return <CircleDot size={18} className="shrink-0 text-zinc-600" />;
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as Array<{
    title: string; subtitle: string; description: string; architecture: string;
    tech: string[]; icon: string; steps: Step[];
  }>;

  const project = items.find((p) => slugify(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#09090b] font-sans text-[#f4f4f5]">
        <Sidebar />
        <MobileTopBar />
        <main className="lg:pl-[280px]">
          <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 lg:pt-12">
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <FolderGit size={48} className="mb-4 text-zinc-600" />
              <h1 className="text-2xl font-semibold text-[#f4f4f5]">Project not found</h1>
              <p className="mt-2 text-sm text-zinc-500">The project you're looking for doesn't exist.</p>
              <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#09090b] transition hover:bg-zinc-200">
                <ArrowLeft size={16} /> Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const Icon = iconMap[project.icon] || FolderGit;
  const progress = getProgress(project.steps);
  const github = githubUrls[project.title];
  const demo = project.demoUrl || demoUrls[project.title];
  const imgSrc = projectImages[slug || ""] || "";

  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-[#f4f4f5]">
      <Sidebar />
      <MobileTopBar />

      <main className="lg:pl-[280px]">
        <div className="mx-auto max-w-3xl px-6 pb-20 pt-20 lg:pt-12">

          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-teal-400">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {imgSrc && (
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08]">
                <img src={imgSrc} alt={project.title} className="w-full object-cover" />
              </div>
            )}

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
                <Icon size={28} />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold leading-snug text-[#f4f4f5] sm:text-3xl">{project.title}</h1>
                <p className="mt-1 text-base text-teal-400">{project.subtitle}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium", statusColor(progress))}>
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span></span>
                {t(getStatusLabel(progress))}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className={cn("h-full rounded-full transition-all duration-700 ease-out", progressBarColor(progress))} style={{ width: `${progress}%` }}></div>
                </div>
                <span className="text-xs font-semibold text-zinc-400">{progress}%</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">Description</h2>
              <p className="text-[15px] leading-relaxed text-zinc-300">{project.description}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t("projects.architecture")}</h2>
              <p className="text-[15px] leading-relaxed text-zinc-300">{project.architecture}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-zinc-300 ring-1 ring-white/[0.06]">{tech}</span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.roadmapLabel")}</h2>
              <div className="relative border-l border-white/[0.08] pl-6">
                {project.steps.map((step, i) => (
                  <div key={i} className="relative mb-6 last:mb-0">
                    <span className="absolute -left-[1.95rem] top-1.5">
                      <StepIcon status={step.status} />
                    </span>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <span className={cn("text-sm leading-relaxed", step.status === "planned" ? "text-zinc-500" : "text-zinc-300")}>
                        {step.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
                  <Github size={16} /> {t("projects.github")}
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#09090b] transition hover:bg-zinc-200">
                  <ExternalLink size={16} /> {t("projects.demo")}
                </a>
              )}
            </div>
          </motion.div>

          <footer className="mt-16 border-t border-white/[0.06] pt-8 text-center text-sm text-zinc-600">
            © 2026 Vahid Rahmani.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;

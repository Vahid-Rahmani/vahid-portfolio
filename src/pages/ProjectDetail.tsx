"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Network, Shield, Bot, Cpu, Globe, FolderGit, CheckCircle2, CircleDot, Activity, BarChart3, Workflow, LayoutGrid, CircuitBoard, AlertTriangle, GitBranch, BookOpen, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  githubUrls, demoUrls, getProgress, getStatusLabel, statusColor, progressBarColor, slugify, projectImages, type Step, type StepStatus,
} from "@/data/projects";
import Sidebar from "@/components/portfolio/Sidebar";
import MobileTopBar from "@/components/portfolio/MobileTopBar";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Network, Shield, Bot, Cpu, Globe,
};

const featureIconMap: React.ComponentType<{ size?: number; className?: string }>[] = [Activity, BarChart3, Workflow, Globe, CircuitBoard, AlertTriangle];

const StepIcon = ({ status }: { status: StepStatus }) => {
  if (status === "completed") return <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />;
  if (status === "in-progress") return <span className="relative flex h-4 w-4 shrink-0 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span></span>;
  return <CircleDot size={18} className="shrink-0 text-zinc-600" />;
};

const RoadmapIcon = ({ status }: { status: string }) => {
  if (status === "completed") return <CheckCircle2 size={16} className="shrink-0 text-emerald-300" />;
  if (status === "in-progress") return <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400"></span></span>;
  return <CircleDot size={16} className="shrink-0 text-zinc-600" />;
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as Array<{
    title: string; subtitle: string; description: string; architecture: string;
    tech: string[]; icon: string; steps: Step[];
    features?: Array<{ title: string; description: string }>;
    dashboardPages?: Array<{ page: string; description: string }>;
    hardwareOptions?: Array<{
      name: string; tag: string; cost: string; wiring: string;
      components: Array<{ name: string; cost: string; purpose: string }>;
    }>;
    sensorSpecs?: Array<{ sensor: string; range: string; accuracy: string; humidity: string; bestFor: string }>;
    comparison?: { headers: string[]; rows: string[][] };
    roadmap?: Array<{ phase: string; title: string; status: string; items: string[] }>;
    alertThresholds?: Array<{ status: string; temp: string; color: string; action: string }>;
    modules?: Array<{ name: string; description: string }>;
    localization?: Array<{ lang: string; flag: string }>;
    author?: string;
    showSteps?: boolean;
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
  const isCustomView = project.showSteps === false && project.features;

  if (isCustomView) {
    return (
      <div className="min-h-screen bg-[#09090b] font-sans text-[#f4f4f5]">
        <Sidebar />
        <MobileTopBar />

        <main className="lg:pl-[280px]">
          <div className="mx-auto max-w-4xl px-6 pb-20 pt-20 lg:pt-12">

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

              {project.author && (
                <p className="mt-4 text-sm text-zinc-500">{t("projects.author")} <span className="text-zinc-300">{project.author}</span></p>
              )}

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">Description</h2>
                <p className="text-[15px] leading-relaxed text-zinc-300">{project.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.keyFeatures")}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features?.map((feature, i) => {
                    const FeatureIcon = featureIconMap[i % featureIconMap.length];
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                        className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-teal-400/20 hover:bg-teal-400/[0.03]"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400 transition-colors group-hover:bg-teal-400/15">
                          <FeatureIcon size={20} />
                        </div>
                        <h3 className="mb-2 text-sm font-semibold text-[#f4f4f5]">{feature.title}</h3>
                        <p className="text-[13px] leading-relaxed text-zinc-400">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {project.dashboardPages && project.dashboardPages.length > 0 && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <LayoutGrid size={16} className="text-teal-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.dashboardPages")}</h2>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Page</th>
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">What it shows</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.dashboardPages.map((dp, i) => (
                          <tr key={dp.page} className={cn("border-b border-white/[0.04] last:border-0", i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]")}>
                            <td className="px-4 py-2.5 font-medium text-[#f4f4f5]">{dp.page}</td>
                            <td className="px-4 py-2.5 text-zinc-400">{dp.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t("projects.architecture")}</h2>
                <div className="flex flex-wrap items-center gap-2 text-[15px] text-zinc-300">
                  {project.architecture.split("→").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="rounded-lg bg-white/[0.04] px-3 py-1.5 ring-1 ring-white/[0.06]">{part.trim()}</span>
                      {i < arr.length - 1 && <span className="text-teal-400/60">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {project.hardwareOptions && project.hardwareOptions.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.hardwareOptions")}</h2>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {project.hardwareOptions.map((hw) => (
                      <div key={hw.name} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                        <div className="mb-1 flex items-center gap-2">
                          <CircuitBoard size={16} className="text-teal-400" />
                          <h3 className="text-base font-semibold text-[#f4f4f5]">{hw.name}</h3>
                        </div>
                        <p className="mb-1 text-xs text-teal-400/80">{hw.tag}</p>
                        <p className="mb-4 text-sm font-semibold text-zinc-400">{hw.cost}</p>

                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("projects.components")}</h4>
                        <div className="overflow-hidden rounded-xl border border-white/[0.06] mb-4">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                                <th className="px-3 py-2 font-semibold text-zinc-400">Component</th>
                                <th className="px-3 py-2 font-semibold text-zinc-400">Cost</th>
                                <th className="px-3 py-2 font-semibold text-zinc-400">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              {hw.components.map((c, i) => (
                                <tr key={c.name} className={cn("border-b border-white/[0.04] last:border-0", i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]")}>
                                  <td className="px-3 py-2 font-medium text-[#f4f4f5]">{c.name}</td>
                                  <td className="px-3 py-2 text-zinc-400">{c.cost}</td>
                                  <td className="px-3 py-2 text-zinc-400">{c.purpose}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">{t("projects.wiring")}</h4>
                        <pre className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-300">{hw.wiring}</pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.sensorSpecs && project.sensorSpecs.length > 0 && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.sensorSpecs")}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Sensor</th>
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Range</th>
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Accuracy</th>
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Humidity</th>
                          <th className="px-4 py-2.5 font-semibold text-zinc-400">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.sensorSpecs.map((s, i) => (
                          <tr key={s.sensor} className={cn("border-b border-white/[0.04] last:border-0", i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]")}>
                            <td className="px-4 py-2.5 font-medium text-[#f4f4f5]">{s.sensor}</td>
                            <td className="px-4 py-2.5 text-zinc-400">{s.range}</td>
                            <td className="px-4 py-2.5 text-zinc-400">{s.accuracy}</td>
                            <td className="px-4 py-2.5 text-zinc-400">{s.humidity}</td>
                            <td className="px-4 py-2.5 text-zinc-400">{s.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.comparison && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.comparison")}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                          {project.comparison.headers.map((h) => (
                            <th key={h} className="px-4 py-2.5 font-semibold text-zinc-400">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {project.comparison.rows.map((row, i) => (
                          <tr key={i} className={cn("border-b border-white/[0.04] last:border-0", i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]")}>
                            {row.map((cell, j) => (
                              <td key={j} className={cn("px-4 py-2.5", j === 0 ? "font-medium text-[#f4f4f5]" : "text-zinc-400")}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.roadmap && project.roadmap.length > 0 && (
                <div className="mt-8">
                  <div className="mb-4 flex items-center gap-2">
                    <GitBranch size={16} className="text-teal-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.roadmap")}</h2>
                  </div>
                  <div className="relative border-l border-white/[0.08] pl-6">
                    {project.roadmap.map((phase, i) => (
                      <div key={i} className="relative mb-8 last:mb-0">
                        <span className="absolute -left-[1.95rem] top-1.5">
                          <RoadmapIcon status={phase.status} />
                        </span>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">{phase.phase}</span>
                            <span className="text-xs text-zinc-500">—</span>
                            <span className={cn("text-xs font-medium", phase.status === "completed" ? "text-emerald-300" : phase.status === "in-progress" ? "text-teal-400" : "text-zinc-500")}>
                              {phase.status === "completed" ? "✓ Done" : phase.status === "in-progress" ? "In Progress" : "Planned"}
                            </span>
                          </div>
                          <h3 className="mb-2 text-sm font-semibold text-[#f4f4f5]">{phase.title}</h3>
                          <ul className="space-y-1">
                            {phase.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.alertThresholds && project.alertThresholds.length > 0 && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <AlertTriangle size={16} className="text-teal-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.alertThresholds")}</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.alertThresholds.map((a) => (
                      <div key={a.status} className={cn("rounded-xl border p-4", a.color === "Red" || a.color === "Rot" ? "border-red-400/20 bg-red-400/[0.04]" : a.color === "Orange" ? "border-orange-400/20 bg-orange-400/[0.04]" : "border-emerald-400/20 bg-emerald-400/[0.04]")}>
                        <div className="mb-1 flex items-center gap-2">
                          <span className={cn("h-2.5 w-2.5 rounded-full", a.color === "Red" || a.color === "Rot" ? "bg-red-400" : a.color === "Orange" ? "bg-orange-400" : "bg-emerald-400")} />
                          <span className="text-sm font-semibold text-[#f4f4f5]">{a.status}</span>
                        </div>
                        <p className="text-xs font-semibold text-zinc-300">{a.temp}</p>
                        <p className="mt-1 text-xs text-zinc-500">{a.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.modules && project.modules.length > 0 && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <BookOpen size={16} className="text-teal-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.modules")}</h2>
                  </div>
                  <div className="space-y-3">
                    {project.modules.map((mod) => (
                      <div key={mod.name} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <code className="mt-0.5 shrink-0 rounded-md bg-teal-400/10 px-2 py-0.5 text-xs font-semibold text-teal-400">{mod.name}</code>
                        <p className="text-sm text-zinc-400">{mod.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.localization && project.localization.length > 0 && (
                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Languages size={16} className="text-teal-400" />
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-400">{t("projects.localization")}</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.localization.map((l) => (
                      <div key={l.flag} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
                        <span className="text-lg">{l.flag === "DE" ? "🇩🇪" : l.flag === "EN" ? "🇺🇸" : l.flag === "TR" ? "🇹🇷" : l.flag === "RU" ? "🇷🇺" : l.flag === "AR" ? "🇦🇪" : "🌐"}</span>
                        <span className="text-sm font-medium text-zinc-300">{l.lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t("projects.technologies")}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-zinc-300 ring-1 ring-white/[0.06]">{tech}</span>
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
  }

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

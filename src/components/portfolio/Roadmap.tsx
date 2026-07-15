"use client";

import React from "react";
import {
  Network,
  Terminal,
  Cloud,
  Box,
  Cpu,
  GitBranch,
  ChevronDown,
  CheckCircle2,
  CircleDot,
  Milestone,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "completed" | "in-progress" | "planned";

const phases = [
  {
    id: "phase-0",
    tag: "PHASE 0",
    subtitle: "Classic Systems Engineering",
    title: "MCSA & MCSE (Microsoft Certified Solutions Expert)",
    period: "2011 – 2014",
    status: "completed" as Status,
    icon: Network,
    topics: [
      "Windows Server Administration",
      "Active Directory (AD)",
      "Group Policy",
      "DNS / DHCP",
      "Network Infrastructure",
    ],
    note: "Perfectly aligned with Computer Science studies graduation in 2014.",
  },
  {
    id: "phase-1",
    tag: "PHASE 1",
    subtitle: "Modern DevOps Foundations",
    title: "DevOps Foundations",
    period: "Juni 2026",
    status: "completed" as Status,
    icon: Terminal,
    topics: [
      "Linux Enterprise Basics (ls, cd, cp, cat, grep, permissions)",
      "Git Version Control (clone, add, commit, push, branch, merge)",
    ],
    note: "",
  },
  {
    id: "phase-2",
    tag: "PHASE 2",
    subtitle: "Cloud Infrastructure & Containerization",
    title: "Cloud (Azure) & Containers",
    period: "Juli 2026",
    status: "in-progress" as Status,
    icon: Cloud,
    topics: [
      "Microsoft Azure Administration (Azure VMs, Networking, Entra ID)",
      "Docker & Containerization (build, run, ps, Docker Hub, tag & push)",
    ],
    note: "",
  },
  {
    id: "phase-3",
    tag: "PHASE 3",
    subtitle: "Infrastructure as Code & Automation",
    title: "Infrastructure as Code & Automation",
    period: "August – September 2026",
    status: "planned" as Status,
    icon: Box,
    topics: [
      "Terraform (init, validate, plan, apply, destroy)",
      "Ansible Configuration Management (ping, playbooks, inventories)",
    ],
    note: "",
  },
  {
    id: "phase-4",
    tag: "PHASE 4",
    subtitle: "Continuous Integration & Delivery",
    title: "Continuous Integration & Delivery",
    period: "Oktober – November 2026",
    status: "planned" as Status,
    icon: GitBranch,
    topics: [
      "Build Tools (Maven package/install)",
      "Code Quality (SonarQube analysis)",
      "Jenkins Pipelines (Checkout, Test, Build, Deploy)",
    ],
    note: "",
  },
  {
    id: "phase-5",
    tag: "PHASE 5",
    subtitle: "Enterprise Orchestration",
    title: "Orchestration & AWS Deployment",
    period: "Dezember 2026 – Januar 2027",
    status: "planned" as Status,
    icon: Cpu,
    topics: [
      "AWS CLI (S3, EC2 instances, AWS configure)",
      "Kubernetes Cluster Management (pods, nodes, services, apply/describe)",
    ],
    note: "",
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
        <CheckCircle2 size={14} /> Abgeschlossen
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
        </span>
        In Arbeit
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-portfolio-muted">
      <CircleDot size={14} /> Geplant
    </span>
  );
};

const nodeStyles: Record<Status, string> = {
  completed: "border-emerald-500/60 text-emerald-400",
  "in-progress": "border-blue-400/70 text-blue-400",
  planned: "border-white/15 text-portfolio-muted",
};

const Roadmap = () => {
  const [progress, setProgress] = React.useState(0);
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh * 0.6 - rect.top;
      const p = Math.min(Math.max(scrolled / rect.height, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="roadmap" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 flex items-center gap-2">
        <Milestone className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Karriere- & Lern-Roadmap</h2>
      </div>
      <p className="mb-10 text-portfolio-muted">
        Vom klassischen Microsoft Systems Engineering bis zur modernen
        Cloud-/DevOps-Welt – mein strukturierter Weg.
      </p>

      <div ref={containerRef} className="relative">
        {/* Background track */}
        <div className="absolute left-[1.45rem] top-4 bottom-4 w-0.5 rounded-full bg-white/10"></div>
        {/* Glowing animated progress line */}
        <div
          className="absolute left-[1.45rem] top-4 w-0.5 rounded-full bg-portfolio-accent shadow-[0_0_12px_3px_rgba(255,107,87,0.55)] transition-[height] duration-200 ease-out"
          style={{ height: `calc((100% - 2rem) * ${progress})` }}
        ></div>

        <div className="space-y-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const expanded = expandedId === phase.id;
            return (
              <div
                key={phase.id}
                className="relative animate-fade-in-up pl-12"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Node */}
                <span
                  className={cn(
                    "absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-portfolio-bg",
                    nodeStyles[phase.status],
                    phase.status === "in-progress" && "shadow-[0_0_0_4px_rgba(96,165,250,0.15)]",
                  )}
                >
                  <Icon size={16} />
                </span>

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-portfolio-surface p-6 transition-colors hover:border-white/20">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                        {phase.tag}
                      </p>
                      <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                      <p className="text-sm text-portfolio-muted">{phase.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <StatusBadge status={phase.status} />
                      <span className="text-xs text-portfolio-muted">{phase.period}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedId(expanded ? null : phase.id)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-portfolio-accent transition hover:opacity-80"
                    aria-expanded={expanded}
                  >
                    {expanded ? "Tech Cheat Sheet verbergen" : "Tech Cheat Sheet anzeigen"}
                    <ChevronDown size={16} className={cn("transition-transform", expanded && "rotate-180")} />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-xl border border-white/10 bg-portfolio-bg/50 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
                          Tech Cheat Sheet
                        </p>
                        <ul className="space-y-2">
                          {phase.topics.map((t) => (
                            <li key={t} className="flex gap-2 text-sm text-white">
                              <span className="text-portfolio-accent">▹</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                        {phase.note && (
                          <p className="mt-3 text-xs italic text-portfolio-muted">{phase.note}</p>
                        )}
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
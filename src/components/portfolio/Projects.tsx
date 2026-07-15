"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Network,
  Shield,
  Bot,
  Cpu,
  Globe,
  FolderGit,
  X,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "completed" | "in-progress" | "planned";

type Step = {
  label: string;
  status: StepStatus;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  architecture: string;
  tech: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  steps: Step[];
};

const projects: Project[] = [
  {
    title: "Automated Hybrid Network & Monitoring Dashboard",
    subtitle: "Ansible-automated hybrid lab with live Python telemetry",
    description:
      "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
    architecture:
      "Local Virtual Network (Windows Server AD + Linux clients) → Python Agent → Flask/Streamlit Dashboard.",
    tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
    icon: Network,
    steps: [
      { label: "Step 1: Design network topology and IP planning (VirtualBox).", status: "completed" },
      { label: "Step 2: Configure Windows Server AD & DNS/DHCP services (In Progress).", status: "in-progress" },
      { label: "Step 3: Write Ansible playbooks to automate Linux client provisioning.", status: "planned" },
      { label: "Step 4: Develop Python telemetry agent to collect CPU/Ping metrics.", status: "planned" },
      { label: "Step 5: Build the Streamlit dashboard and link it to the agent.", status: "planned" },
    ],
  },
  {
    title: "Hybrid Identity Sync: Local AD to Azure Entra ID",
    subtitle: "Seamless on-prem-to-cloud identity federation",
    description:
      "Configured a local Windows Server Active Directory domain and successfully synced users, groups, and security policies with Azure Active Directory (Entra ID) using Microsoft Entra Connect.",
    architecture:
      "On-Premises Windows Active Directory → Azure AD Connect → Azure Entra ID.",
    tech: ["Windows Server", "Active Directory", "Azure Entra ID", "Azure AD Connect"],
    icon: Shield,
    steps: [
      { label: "Step 1: Set up Windows Server 2022/2025 domain controller.", status: "completed" },
      { label: "Step 2: Create a free Azure Developer sandbox tenant.", status: "planned" },
      { label: "Step 3: Install and configure Microsoft Entra Connect on-premises.", status: "planned" },
      { label: "Step 4: Implement hybrid user synchronization and password hash sync.", status: "planned" },
      { label: "Step 5: Test and verify Single Sign-On (SSO) and Entra ID login.", status: "planned" },
    ],
  },
  {
    title: "Serverless Network Sentinel Bot",
    subtitle: "Event-driven outage alerts to chat ops",
    description:
      "Deployed a serverless Python script that continuously monitors server ports and instantly routes real-time network outage or latency alerts to a private Discord/Telegram channel.",
    architecture:
      "Cron Job → Serverless Function (Python) → Port/Ping Checker → Webhook → Discord/Telegram.",
    tech: ["Python", "Serverless", "REST APIs", "Telegram Bot API"],
    icon: Bot,
    steps: [
      { label: "Step 1: Write local Python script using sockets to check TCP ports (In Progress).", status: "in-progress" },
      { label: "Step 2: Create Telegram/Discord bot token and set up API webhooks.", status: "planned" },
      { label: "Step 3: Package the script for serverless execution (Azure Functions).", status: "planned" },
      { label: "Step 4: Configure cron-trigger schedule to run every 5 minutes.", status: "planned" },
      { label: "Step 5: Implement failure recovery and alert throttling.", status: "planned" },
    ],
  },
  {
    title: "Cloud-Connected Hardware & IoT Monitor",
    subtitle: "From bench soldering to live cloud telemetry",
    description:
      "This project leverages my professional background in hardware diagnostics and board-level micro-soldering. I designed the physical circuitry, analyzed the schematics, and physically assembled microcontrollers (ESP32) connected to cloud IoT Hubs to stream and monitor real-time hardware telemetry (temperature, voltage).",
    architecture:
      "Physical Circuit Schematics → ESP32 Microcontroller → MQTT Protocol → Azure IoT Hub → Live Chart UI.",
    tech: ["Python/C++", "IoT Hub", "ESP32", "MQTT", "WebSockets"],
    icon: Cpu,
    steps: [
      { label: "Step 1: Analyze physical board schematics and trace voltage/temp test points.", status: "completed" },
      { label: "Step 2: Micro-solder wires to ESP32 ADC pins for diagnostic telemetry (In Progress).", status: "in-progress" },
      { label: "Step 3: Write C++/Python code to publish sensor data via MQTT.", status: "planned" },
      { label: "Step 4: Provision Azure IoT Hub and define routing to Azure Stream Analytics.", status: "planned" },
      { label: "Step 5: Render a real-time oscilloscope/telemetry chart on the portfolio page.", status: "planned" },
    ],
  },
  {
    title: "Global High-Availability Web Hosting with IaC",
    subtitle: "Terraform-built zero-downtime static edge",
    description:
      "Deployed a globally distributed, secure static site architecture using Cloud Storage and CDN networks, automated end-to-end via Terraform Infrastructure as Code.",
    architecture: "Terraform Configuration → Azure Blob / AWS S3 → CDN → HTTPS Cert.",
    tech: ["Terraform", "Azure Blob / AWS S3", "CloudFront / CDN", "Route 53", "SSL"],
    icon: Globe,
    steps: [
      { label: "Step 1: Design global content delivery architecture.", status: "completed" },
      { label: "Step 2: Write Terraform files for AWS S3 bucket / Azure Storage container.", status: "planned" },
      { label: "Step 3: Configure CloudFront / Azure CDN for edge caching.", status: "planned" },
      { label: "Step 4: Set up automated SSL certificate provisioning via Let's Encrypt / ACM.", status: "planned" },
      { label: "Step 5: Test deployment speeds globally and implement a clean CI/CD destroy/apply pipeline.", status: "planned" },
    ],
  },
];

const StepIcon = ({ status }: { status: StepStatus }) => {
  if (status === "completed") {
    return <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />;
  }
  if (status === "in-progress") {
    return (
      <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400"></span>
      </span>
    );
  }
  return <CircleDot size={18} className="shrink-0 text-portfolio-muted" />;
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const Icon = project.icon;
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-portfolio-surface p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] sm:p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-portfolio-muted transition hover:border-portfolio-accent hover:text-portfolio-accent"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
            <Icon size={24} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-portfolio-accent">{project.subtitle}</p>
          </div>
        </div>

        {/* Concept badge */}
        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-portfolio-accent/15 px-3 py-1 text-xs font-semibold text-portfolio-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-accent"></span>
            </span>
            Konzeptphase
          </span>
        </div>

        {/* Architecture */}
        <div className="mt-5 rounded-xl border border-white/10 bg-portfolio-bg/50 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
            Architecture
          </p>
          <p className="text-sm leading-relaxed text-white">{project.architecture}</p>
        </div>

        {/* Implementation Roadmap */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-portfolio-accent">
            Implementation Roadmap
          </h4>
          <ul className="space-y-3">
            {project.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-portfolio-bg/40 p-3"
              >
                <StepIcon status={step.status} />
                <span
                  className={cn(
                    "text-sm leading-relaxed",
                    step.status === "planned"
                      ? "text-portfolio-muted"
                      : "text-white",
                  )}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div
          className="mt-6 flex items-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-portfolio-accent hover:text-portfolio-accent"
            aria-label="GitHub Repository (Platzhalter)"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1.5 rounded-full bg-portfolio-accent px-4 py-2 text-xs font-semibold text-portfolio-bg transition hover:opacity-90"
            aria-label="Live Demo (Platzhalter)"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <FolderGit className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Projekte</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <button
              key={project.title}
              onClick={() => setActiveProject(project)}
              className="group animate-fade-in-up cursor-pointer rounded-2xl border border-white/10 bg-portfolio-surface p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-accent/40 hover:shadow-[0_0_28px_rgba(255,107,87,0.25)]"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent transition-colors group-hover:bg-portfolio-accent/20">
                  <Icon size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-portfolio-accent">{project.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-portfolio-muted ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs font-medium text-portfolio-accent opacity-0 transition-opacity group-hover:opacity-100">
                Klicken für Implementation Roadmap →
              </p>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
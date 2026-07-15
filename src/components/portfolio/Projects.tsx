"use client";

import React from "react";
import {
  Github,
  ExternalLink,
  Network,
  Shield,
  Bot,
  Cpu,
  Globe,
  FolderGit,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  architecture: string;
  features: string[];
  tech: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const projects: Project[] = [
  {
    title: "Automated Hybrid Network & Monitoring Dashboard",
    subtitle: "Ansible-automated hybrid lab with live Python telemetry",
    description:
      "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
    architecture:
      "VirtualBox hosts a Windows Server DC and Linux clients. Ansible enforces desired state across nodes; a Python service polls interfaces and streams metrics to a Flask dashboard over WebSockets.",
    features: [
      "Automated provisioning of AD domain & Linux clients via Ansible playbooks",
      "Real-time network throughput & latency dashboard (Python + WebSocket)",
      "Centralized logging and alerting on configuration drift",
      "Reproducible VirtualBox snapshots for instant lab resets",
    ],
    tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
    icon: Network,
  },
  {
    title: "Hybrid Identity Sync: Local AD to Azure Entra ID",
    subtitle: "Seamless on-prem-to-cloud identity federation",
    description:
      "Configured a local Windows Server Active Directory domain and successfully synced users, groups, and security policies with Azure Active Directory (Entra ID) using Microsoft Entra Connect.",
    architecture:
      "An on-prem Windows Server AD domain is bridged to Azure Entra ID through Entra Connect, synchronizing users, groups, and GPO-linked security objects into the cloud identity plane.",
    features: [
      "Deployed & hardened an on-prem Active Directory domain",
      "Configured Entra Connect sync rules (hash + pass-through)",
      "Mapped security groups to cloud RBAC roles",
      "Validated SSO across Microsoft 365 workloads",
    ],
    tech: ["Windows Server", "Active Directory", "Azure Entra ID", "Azure AD Connect"],
    icon: Shield,
  },
  {
    title: "Serverless Network Sentinel Bot",
    subtitle: "Event-driven outage alerts to chat ops",
    description:
      "Deployed a serverless Python script that continuously monitors server ports and instantly routes real-time network outage or latency alerts to a private Discord/Telegram channel.",
    architecture:
      "A serverless function (Azure Functions / AWS Lambda) runs on a schedule, probes target ports via TCP, and pushes incidents to a Telegram/Discord webhook when latency or availability breaches thresholds.",
    features: [
      "Cron-triggered serverless port monitoring",
      "Multi-target TCP health checks with timeout handling",
      "Rich alert cards delivered via Telegram Bot API",
      "Zero always-on cost — fully event-driven architecture",
    ],
    tech: ["Python", "Serverless", "REST APIs", "Telegram Bot API"],
    icon: Bot,
  },
  {
    title: "Cloud-Connected Hardware & IoT Monitor",
    subtitle: "From bench soldering to live cloud telemetry",
    description:
      "This project leverages my professional background in hardware diagnostics and board-level micro-soldering. I designed the physical circuitry, analyzed the schematics, and physically assembled microcontrollers (ESP32) connected to cloud IoT Hubs to stream and monitor real-time hardware telemetry (temperature, voltage).",
    architecture:
      "ESP32 microcontrollers publish sensor readings over MQTT to a cloud IoT Hub; a stream processor forwards data to a WebSocket-fed web UI showing live temperature & voltage curves.",
    features: [
      "Firmware in C++ for ESP32 sensor sampling",
      "Secure MQTT ingestion via cloud IoT Hub",
      "Live voltage/temperature charts over WebSockets",
      "Bridges hands-on hardware repair with cloud observability",
    ],
    tech: ["Python/C++", "IoT Hub", "ESP32", "MQTT", "WebSockets"],
    icon: Cpu,
  },
  {
    title: "Global High-Availability Web Hosting with IaC",
    subtitle: "Terraform-built zero-downtime static edge",
    description:
      "Deployed a globally distributed, secure static site architecture using Cloud Storage and CDN networks, automated end-to-end via Terraform Infrastructure as Code.",
    architecture:
      "Terraform codifies storage buckets, CDN distributions, DNS records, and TLS certs for a globally cached, HTTPS-only static site with edge failover across regions.",
    features: [
      "Full infrastructure defined as Terraform code",
      "Global CDN caching with edge points of presence",
      "Automatic SSL/TLS provisioning & renewal",
      "DNS failover & health-check routing via Route 53",
    ],
    tech: ["Terraform", "Azure Blob / AWS S3", "CloudFront / CDN", "Route 53", "SSL"],
    icon: Globe,
  },
];

const Projects = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <FolderGit className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Projekte</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const expanded = expandedId === project.title;
          return (
            <div
              key={project.title}
              onClick={() => setExpandedId(expanded ? null : project.title)}
              className={cn(
                "group cursor-pointer animate-fade-in-up rounded-2xl border bg-portfolio-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-accent/40 hover:shadow-[0_0_28px_rgba(255,107,87,0.25)]",
                expanded
                  ? "border-portfolio-accent/40 shadow-[0_0_28px_rgba(255,107,87,0.25)]"
                  : "border-white/10",
              )}
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

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-portfolio-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 rounded-xl border border-white/10 bg-portfolio-bg/50 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
                      Architecture
                    </p>
                    <p className="text-sm leading-relaxed text-white">
                      {project.architecture}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-white">
                        <span className="text-portfolio-accent">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-5 flex items-center gap-3"
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
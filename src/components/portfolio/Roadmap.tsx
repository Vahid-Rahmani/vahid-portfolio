"use client";

import React from "react";
import {
  Network,
  Code,
  Terminal,
  Shield,
  Cpu,
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
    subtitle: "Network & Systems Engineering Foundation",
    title: "IT Systems & Networking Foundation",
    period: "2011 – 2014",
    status: "completed" as Status,
    icon: Network,
    topics: [
      "Hardware Assembly & Board-level Diagnostics (Schematics, Micro-soldering, Layer 1 Physical Assembly)",
      "CompTIA A+ (Hardware & OS)",
      "CompTIA Network+",
      "Cisco CCNA (Routing & Switching)",
      "MCSA & MCSE (Windows Server, Active Directory, DNS/DHCP, Group Policy)",
    ],
    note: "",
  },
  {
    id: "phase-1",
    tag: "PHASE 1",
    subtitle: "Web Development & Scripting Foundations",
    title: "Programming & Web Basics",
    period: "Juni 2026",
    status: "completed" as Status,
    icon: Code,
    topics: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Python (Automation & Scripting)",
      "Git Version Control",
    ],
    note: "",
  },
  {
    id: "phase-2",
    tag: "PHASE 2",
    subtitle: "Linux, Containers & CCNA Update",
    title: "Enterprise Linux, Containers & CCNA Update",
    period: "Juli 2026",
    status: "in-progress" as Status,
    icon: Terminal,
    topics: [
      "Linux Enterprise Basics",
      "Microsoft Azure Administration",
      "Docker Containerization",
      "CCNA Modern Network Update (Advanced Routing/Switching in modern environments)",
    ],
    note: "",
  },
  {
    id: "phase-3",
    tag: "PHASE 3",
    subtitle: "IaC, CCNP Core & NGFW Security",
    title: "Infrastructure as Code & CCNP Core",
    period: "August – September 2026",
    status: "planned" as Status,
    icon: Shield,
    topics: [
      "Terraform (IaC)",
      "Ansible Automation",
      "CCNP Enterprise Core (ENCOR – Enterprise Network Architecture)",
      "Next-Generation Firewalls (NGFW – Fortinet FortiGate / Palo Alto Security Rules, VPNs, NAT)",
    ],
    note: "",
  },
  {
    id: "phase-4",
    tag: "PHASE 4",
    subtitle: "CI/CD Pipelines, CCNP Routing & Cloud Security",
    title: "CI/CD & Advanced Security Routing",
    period: "Oktober – November 2026",
    status: "planned" as Status,
    icon: Network,
    topics: [
      "Build Tools (Maven package/install)",
      "Code Quality (SonarQube analysis)",
      "Jenkins Pipelines (Checkout, Test, Build, Deploy)",
      "CCNP Enterprise Advanced Routing (ENARSI – Troubleshooting & Security Protocols)",
      "Cloud & Network Security (Firewall rules, DMZ, Azure Bastion, Network Security Groups)",
    ],
    note: "",
  },
  {
    id: "phase-5",
    tag: "PHASE 5",
    subtitle: "Enterprise Orchestration & AWS",
    title: "Enterprise Orchestration & AWS",
    period: "Dezember 2026 – Januar 2027",
    status: "planned" as Status,
    icon: Cpu,
    topics: [
      "AWS CLI (S3, EC2 instances, AWS configure)",
      "Kubernetes Cluster Management (pods, nodes, services, apply/describe)",
      "SecOps integration in deployment pipelines",
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
        Vom klassischen Network & Systems Engineering bis zur modernen
        Cloud-/DevOps- und Security-Welt – mein strukturierter Weg.
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

                {/* Clickable Card */}
                <div
                  onClick={() => setExpandedId(expanded ? null : phase.id)}
                  className="cursor-pointer rounded-2xl border border-white/10 bg-portfolio-surface p-6 transition-colors hover:border-white/20"
                >
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

                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-portfolio-accent">
                    {expanded ? "Tech Cheat Sheet verbergen" : "Tech Cheat Sheet anzeigen"}
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", expanded && "rotate-180")}
                    />
                  </div>

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
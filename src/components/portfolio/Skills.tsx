"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Sparkles, Cloud, KeyRound, Server, Network, Users, Boxes, Container,
  Code, Terminal, GitBranch, Globe, Shield, Route, CircuitBoard, Wrench, FileCode, Scan,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Microsoft Azure": Cloud, "Azure Active Directory": KeyRound, "Azure VMs": Server,
  "Virtual Networks (VNet)": Network, "Identity & Access (IAM)": KeyRound,
  "Terraform (IaC)": Boxes, "Docker": Container, "Python (Basics)": Code, "Python (Grundlagen)": Code,
  "Bash & PowerShell": Terminal, "Git / GitHub": GitBranch,
  "Windows Server 2025": Server, "Active Directory (AD DS)": Users, "Linux (Ubuntu/Debian)": Terminal,
  "TCP/IP": Network, "DNS": Globe, "DHCP": Network, "Firewalls": Shield, "Routing & Switching": Route,
  "Board-Level Repair": CircuitBoard, "Board-Level-Reparatur": CircuitBoard,
  "Micro-soldering": Wrench, "Mikrolöten": Wrench, "Schematic Analysis": FileCode, "Schaltplan-Analyse": FileCode,
  "Hardware Diagnostics": Scan, "Hardware-Diagnose": Scan,
};

const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as Array<{ label: string; items: string[] }>;

  return (
    <section id="skills" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">{t("skills.title")}</h2>
      </div>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">{group.label}</h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((name) => {
                const Icon = iconMap[name] || CircleHelp;
                return (
                  <span key={name} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 px-3.5 text-sm font-normal text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-teal-400/40 hover:bg-teal-400/5 hover:text-teal-400">
                    <Icon size={14} className="shrink-0" />
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
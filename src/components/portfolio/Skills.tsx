import { Sparkles } from "lucide-react";

const skillGroups = [
  {
    label: "Cloud-Plattformen",
    items: ["Microsoft Azure", "Azure Active Directory", "Azure VMs", "Virtual Networks (VNet)", "Identity & Access (IAM)"],
  },
  {
    label: "DevOps & Automatisierung",
    items: ["Terraform (IaC)", "Docker", "Python (Grundlagen)", "Bash & PowerShell", "Git / GitHub"],
  },
  {
    label: "Systemadministration",
    items: ["Windows Server 2025", "Active Directory (AD DS)", "Linux (Ubuntu/Debian)"],
  },
  {
    label: "Netzwerk & Sicherheit",
    items: ["TCP/IP", "DNS", "DHCP", "Firewalls", "Routing & Switching"],
  },
  {
    label: "Hardware & Elektronik",
    items: ["Board-Level-Reparatur", "Mikrolöten", "Schaltplan-Analyse", "Hardware-Diagnose"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Fachkenntnisse</h2>
      </div>
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-portfolio-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-portfolio-surface px-4 py-2 text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
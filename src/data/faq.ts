import type { Locale } from "@/lib/locale";

export const faq: Record<Locale, Array<{ question: string; answer: string }>> = {
  de: [
    {
      question: "Wer ist Vahid Rahmani?",
      answer: "Vahid Rahmani ist System & Network Engineer in Hamburg mit über 10 Jahren Berufserfahrung in technischen, operativen und IT-nahen Bereichen. Er absolviert eine Cloud-Engineering-Weiterbildung am Digital Career Institute und verbindet frühere Netzwerk- und Hardwareerfahrung mit Windows Server, Linux, Cisco, Azure und Automatisierung.",
    },
    {
      question: "Welche Infrastrukturkenntnisse zeigen seine Projekte?",
      answer: "Sein Abschlussprojekt umfasst zwei logische Standorte, sechs VLANs, mehrere Domain Controller, Hyper-V, Linux/KVM, EVE-NG, SoftEther, iSCSI und einen zweiknotigen Dateiserver-Cluster. Ein separates Monitoring-Projekt nutzt Active Directory, Kerberos, PowerShell Remoting, WinRM, Python und FastAPI.",
    },
    {
      question: "Welche Qualifikationen sind abgeschlossen und was lernt er aktuell?",
      answer: "Abgeschlossen sind ein B.Sc. Informatik sowie fünf projektbasierte DCI-Zertifikate im Bereich AI & Automation. Frühere CCNA-, Network+-, CompTIA-A+- und Microsoft-Trainings werden als Trainings und nicht als aktuelle Herstellerzertifizierungen dargestellt. Aktuell bereitet er sich auf RHCSA vor und vertieft Terraform, Docker, Ansible und Kubernetes; CCNP/CCIE ist ein langfristiger Lernpfad.",
    },
    {
      question: "Welche Hardwareprojekte zeigt das Portfolio?",
      answer: "Das Raspberry-Pi-Projekt umfasst einen physischen Hardwareprototyp mit mehreren Sensoren und Linux-basierter Integration. Die Repository-Dokumentation wird auf den finalen Aufbau aktualisiert; geplante Cloud-Funktionen werden nicht als bereits umgesetzt dargestellt.",
    },
    {
      question: "Wie kann man Vahid Rahmani kontaktieren?",
      answer: "Vahid Rahmani ist über vahidrahmani.info@gmail.com und sein LinkedIn-Profil erreichbar. Er ist offen für Positionen in Systemadministration, Network Engineering, IT Infrastructure und Cloud Infrastructure.",
    },
  ],
  en: [
    {
      question: "Who is Vahid Rahmani?",
      answer: "Vahid Rahmani is a System & Network Engineer based in Hamburg with more than 10 years of experience across technical, operational and IT-related roles. He is completing Cloud Engineering training at the Digital Career Institute and combines earlier networking and hardware experience with Windows Server, Linux, Cisco, Azure and automation.",
    },
    {
      question: "What infrastructure skills do his projects demonstrate?",
      answer: "His graduation project includes two logical sites, six VLANs, multiple domain controllers, Hyper-V, Linux/KVM, EVE-NG, SoftEther, iSCSI and a two-node file server cluster. A separate monitoring project uses Active Directory, Kerberos, PowerShell Remoting, WinRM, Python and FastAPI.",
    },
    {
      question: "Which qualifications are completed and what is he learning now?",
      answer: "Completed qualifications include a B.Sc. in Computer Science and five project-based DCI certificates in AI & Automation. Earlier CCNA, Network+, CompTIA A+ and Microsoft learning is presented as training, not as current vendor certification. He is currently preparing for RHCSA and deepening Terraform, Docker, Ansible and Kubernetes; CCNP/CCIE is a long-term learning path.",
    },
    {
      question: "What hardware work is shown in the portfolio?",
      answer: "The Raspberry Pi project includes a physical prototype with multiple sensors and Linux-based hardware integration. Repository documentation is being aligned with the final build, and planned cloud features are not presented as already implemented.",
    },
    {
      question: "How can I contact Vahid Rahmani?",
      answer: "You can contact Vahid Rahmani at vahidrahmani.info@gmail.com or through his LinkedIn profile. He is open to roles in system administration, network engineering, IT infrastructure and cloud infrastructure.",
    },
  ],
};

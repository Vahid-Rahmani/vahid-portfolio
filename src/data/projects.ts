export type StepStatus = "completed" | "in-progress" | "planned";
export type Step = { label: string; status: StepStatus };
export type Project = {
  title: string; subtitle: string; description: string; architecture: string;
  tech: string[]; icon: string; steps: Step[]; githubUrl?: string; demoUrl?: string;
};

import cloudImg from "../../img/cloud.jpg";

export const githubUrls: Record<string, string> = {
  "Automated Hybrid Network & Monitoring Dashboard": "https://github.com/Vahid-Rahmani/Automated-Hybrid-Network-Monitoring-Dashboard",
  "Hybrid Identity Sync: Local AD to Azure Entra ID": "https://github.com/Vahid-Rahmani/Hybrid-Identity-Sync-Local-AD-to-Azure-Entra-ID",
  "Serverless Network Sentinel Bot": "https://github.com/Vahid-Rahmani/Serverless-Network-Sentinel-Bot",
  "Cloud-Connected Hardware & IoT Monitor": "https://github.com/Vahid-Rahmani/Cloud-Connected-Hardware-IoT-Monitor",
  "Global High-Availability Web Hosting with IaC": "https://github.com/vahidrahmaniinfo24-alt/Global-High-Availability-Web-Hosting-with-IaC",
  "PyFlow — Python Learning Platform": "https://github.com/Vahid-Rahmani/-pyflow-platform/tree/main",
  "PyMentor — AI Coding Demo": "https://github.com/Vahid-Rahmani/py-mentor",
  "LinkedIn AI Agent": "https://github.com/Vahid-Rahmani/agent-for-linkdin",
  "Zova — AI Learning Assistant": "https://github.com/Vahid-Rahmani/zofa",
  "AI Drop Agent": "https://github.com/Vahid-Rahmani/AI-Drop-Agent",
  "Zova Product Website": "https://github.com/Vahid-Rahmani/zovasite",
  "Cloud DevOps Hub": "https://github.com/Vahid-Rahmani/cloud-devops-hub",
  "Network to Cloud Sheets": "https://github.com/Vahid-Rahmani/network-to-cloud-sheets",
};

export const demoUrls: Record<string, string> = {
  "Automated Hybrid Network & Monitoring Dashboard": "/project-images/monitoring.png",
  "Cloud-Connected Hardware & IoT Monitor": "https://cloud-connected-hardware-iot-monitor-ajf9nifbw9ks9mi2clskdr.streamlit.app/",
  "Global High-Availability Web Hosting with IaC": "https://global-high-availability-web-hosting-with-iacgit-bbegw6s42tjyu.streamlit.app/costs",
  "PyFlow — Python Learning Platform": "https://pyflow-platform.vercel.app/",
  "PyMentor — AI Coding Demo": "https://py-mentor.vercel.app",
  "Zova — AI Learning Assistant": "https://zovasite.vercel.app/guide#install",
};

export const featuredProjects = [
  "LinkedIn AI Agent",
  "Cloud-Connected Hardware & IoT Monitor",
  "Global High-Availability Web Hosting with IaC",
  "Automated Hybrid Network & Monitoring Dashboard",
  "Zova — AI Learning Assistant",
];

export const stepWeight: Record<StepStatus, number> = {
  completed: 1,
  "in-progress": 0.5,
  planned: 0,
};

export const getProgress = (steps: Step[]): number => {
  if (steps.length === 0) return 0;
  const total = steps.reduce((sum, s) => sum + stepWeight[s.status], 0);
  return Math.round((total / steps.length) * 100);
};

export const getStatusLabel = (progress: number): string => {
  if (progress >= 100) return "projects.completed";
  if (progress >= 80) return "projects.almostDone";
  if (progress >= 40) return "projects.activeDevelopment";
  if (progress > 0) return "projects.inDevelopment";
  return "projects.concept";
};

export const statusColor = (progress: number): string => {
  if (progress >= 100) return "bg-emerald-400/10 text-emerald-300";
  if (progress >= 40) return "bg-teal-400/10 text-teal-400";
  if (progress > 0) return "bg-teal-400/10 text-teal-400";
  return "bg-white/[0.06] text-zinc-500";
};

export const progressBarColor = (progress: number): string => {
  if (progress >= 100) return "bg-emerald-400";
  if (progress > 0) return "bg-teal-400";
  return "bg-zinc-600";
};

export const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[—–]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const projectImages: Record<string, string> = {
  "automated-hybrid-network-monitoring-dashboard": "/project-images/monitoring.png",
  "hybrid-identity-sync-local-ad-to-azure-entra-id": "/project-images/hybrid-identity.svg",
  "serverless-network-sentinel-bot": "/project-images/sentinel-bot.svg",
  "cloud-connected-hardware-iot-monitor": cloudImg,
  "global-high-availability-web-hosting-with-iac": "/project-images/global-hosting.svg",
  "pyflow-python-learning-platform": "/project-images/pyflow.svg",
  "pymentor-ai-coding-demo": "/project-images/pymentor.svg",
  "linkedin-ai-agent": "/project-images/linkedin-agent.svg",
  "zova-ai-learning-assistant": "/placeholder.svg",
  "ai-drop-agent": "/placeholder.svg",
  "zova-product-website": "/placeholder.svg",
  "cloud-devops-hub": "/placeholder.svg",
  "network-to-cloud-sheets": "/placeholder.svg",
};

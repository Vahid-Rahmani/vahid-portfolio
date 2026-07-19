"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.about": "About Me",
      "nav.experience": "Experience",
      "nav.roadmap": "Roadmap",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",
      "nav.top": "Top",

      "header.openToWork": "Open to Work",
      "header.role": "Cloud Engineer & IT System Administrator",
      "header.location": "Hamburg, Germany",
      "header.contactBtn": "Get in touch",
      "header.experienceBtn": "Experience",
      "header.cvBtn": "Resume",

      "about.title": "About Me",
      "about.text": "Thanks to my solid experience in board-level repair, micro-soldering, and reading complex schematics, I have a deep understanding of the physical layer (Layer 1) of IT infrastructure. This enables me to precisely assemble, cable, and diagnose physical network components, server hardware, and IoT devices at the hardware level. I am currently training to become a Cloud Engineer to combine this physical expertise with modern cloud infrastructure (Azure, Terraform, Docker). I am looking for an entry-level position as a Junior Cloud Engineer or IT System Administrator in the Hamburg area.",

      "reveal.title": "Click here for more about me",
      "reveal.less": "Show less",
      "reveal.goalTitle": "My Goal",
      "reveal.goalText": "Entry as Junior Cloud Engineer or IT System Administrator in the Hamburg area, to help shape modern cloud infrastructures with Azure, Terraform and Docker.",
      "reveal.driveTitle": "What drives me",
      "reveal.driveText": "Bridging the gap between physical hardware and the modern cloud world — from micro-soldering to infrastructure-as-code.",
      "reveal.funTitle": "Fun Fact",
      "reveal.funText": "I repaired demanding mainboards at component level for over 2 years before turning to the cloud.",
      "reveal.learningTitle": "Currently learning",
      "reveal.learningText": "Deepening Azure DevOps, Kubernetes basics and automated cloud deployments with Terraform.",

      "experience.title": "Professional Experience",
      "experience.items": [
        {
          role: "Training as Cloud Engineer",
          company: "Digital Career Institute (DCI)",
          location: "Hamburg",
          period: "06.2026 – ongoing",
          points: [
            "Focus on modern enterprise architectures, network security and cloud migration.",
            "Practical implementation of automation scenarios using Python basics.",
          ],
        },
        {
          role: "Courier / Logistics Worker & IT Hardware Support",
          company: "Smiley Pizza",
          location: "Hamburg",
          period: "10.2023 – 03.2026",
          points: [
            "Ensuring and first-level support of drivers' internal mobile device hardware.",
            "Logistical planning and route optimization via digital coordination platforms.",
          ],
        },
        {
          role: "Driver / Logistics Worker & Technical Support",
          company: "Amazon Logistics",
          location: "Hamburg",
          period: "04.2023 – 09.2023",
          points: [
            "Deployment and route adjustment via the Cortex digital dispatching system.",
            "Troubleshooting and hardware support for scanner and mobile device failures.",
          ],
        },
        {
          role: "Owner & Hardware Specialist (Self-employed)",
          company: "Own IT Store",
          location: "Istanbul, Turkey",
          period: "06.2020 – 12.2022",
          points: [
            "Set-up and operation of a repair center for demanding microelectronics.",
            "Analysis of complex PCB schematics and precise micro-soldering (board-level repair).",
            "Customer advice, technical support and system configuration for business and end customers.",
          ],
        },
        {
          role: "Network Administrator & IT Support",
          company: "Jahan Aseman Co.",
          location: "Tehran, Iran",
          period: "2008 – 2010",
          points: [
            "Administration and maintenance of local network infrastructure.",
            "User support (helpdesk), hardware installation and resolution of system faults.",
          ],
        },
      ],

      "roadmap.title": "Career & Learning Roadmap",
      "roadmap.subtitle": "From classic Network & Systems Engineering to the modern cloud/devops and security world — my structured path.",
      "roadmap.cheatShow": "Show Tech Cheat Sheet",
      "roadmap.cheatHide": "Hide Tech Cheat Sheet",
      "roadmap.cheatLabel": "Tech Cheat Sheet",
      "roadmap.status.completed": "Completed",
      "roadmap.status.inProgress": "In Progress",
      "roadmap.status.planned": "Planned",
      "roadmap.phases": [
        {
          tag: "PHASE 0",
          subtitle: "Network & Systems Engineering Foundation",
          title: "IT Systems & Networking Foundation",
          period: "2011 – 2014",
          topics: [
            "Hardware Assembly & Board-level Diagnostics (Schematics, Micro-soldering, Layer 1 Physical Assembly)",
            "CompTIA A+ (Hardware & OS)",
            "CompTIA Network+",
            "Cisco CCNA (Routing & Switching)",
            "MCSA & MCSE (Windows Server, Active Directory, DNS/DHCP, Group Policy)",
          ],
        },
        {
          tag: "PHASE 1",
          subtitle: "Web Development & Scripting Foundations",
          title: "Programming & Web Basics",
          period: "June 2026",
          topics: [
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "Python (Automation & Scripting)",
            "Git Version Control",
          ],
        },
        {
          tag: "PHASE 2",
          subtitle: "Linux, Containers & CCNA Update",
          title: "Enterprise Linux, Containers & CCNA Update",
          period: "July – August 2026",
          topics: [
            "Linux Enterprise Basics",
            "Microsoft Azure Administration",
            "Docker Containerization",
            "CCNA Modern Network Update (Advanced Routing/Switching in modern environments)",
          ],
        },
        {
          tag: "PHASE 3",
          subtitle: "IaC, CCNP Core & NGFW Security",
          title: "Infrastructure as Code & CCNP Core",
          period: "September – November 2026",
          topics: [
            "Terraform (IaC)",
            "Ansible Automation",
            "CCNP Enterprise Core (ENCOR – Enterprise Network Architecture)",
            "Next-Generation Firewalls (NGFW – Fortinet FortiGate / Palo Alto Security Rules, VPNs, NAT)",
          ],
        },
        {
          tag: "PHASE 4",
          subtitle: "CI/CD Pipelines, CCNP Routing & Cloud Security",
          title: "CI/CD & Advanced Security Routing",
          period: "December 2026 – February 2027",
          topics: [
            "Build Tools (Maven package/install)",
            "Code Quality (SonarQube analysis)",
            "Jenkins Pipelines (Checkout, Test, Build, Deploy)",
            "CCNP Enterprise Advanced Routing (ENARSI – Troubleshooting & Security Protocols)",
            "Cloud & Network Security (Firewall rules, DMZ, Azure Bastion, Network Security Groups)",
          ],
        },
        {
          tag: "PHASE 5",
          subtitle: "Cloud Architecture & Azure Specialization",
          title: "Cloud Architecture & Azure Specialization",
          period: "March – May 2027",
          topics: [
            "Azure Solutions Architecture (Hub-and-Spoke, Landing Zones)",
            "Azure Kubernetes Service (AKS) Basics",
            "Azure DevOps & CI/CD with Pipelines",
            "Cost Management & Governance in Azure",
          ],
        },
        {
          tag: "PHASE 6",
          subtitle: "Graduation Project & Job Preparation",
          title: "Graduation Project & Job Preparation",
          period: "June – July 2027",
          topics: [
            "Final Project: End-to-End Cloud Infrastructure with Terraform & Azure",
            "Application documents & portfolio polish",
            "Mock interviews & technical preparation",
            "Transition to Junior Cloud Engineer / IT System Administrator role",
          ],
        },
      ],

      "projects.title": "Projects",
      "projects.clickHint": "Click for roadmap →",
      "projects.concept": "Concept Phase",
      "projects.architecture": "Architecture",
      "projects.roadmapLabel": "Implementation Roadmap",
      "projects.github": "GitHub",
      "projects.demo": "Live Demo",
      "projects.items": [
        {
          title: "Automated Hybrid Network & Monitoring Dashboard",
          subtitle: "Ansible-automated hybrid lab with live Python telemetry",
          description:
            "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
          architecture:
            "Local Virtual Network (Windows Server AD + Linux clients) → Python Agent → Flask/Streamlit Dashboard.",
          tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
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
          steps: [
            { label: "Step 1: Design global content delivery architecture.", status: "completed" },
            { label: "Step 2: Write Terraform files for AWS S3 bucket / Azure Storage container.", status: "planned" },
            { label: "Step 3: Configure CloudFront / Azure CDN for edge caching.", status: "planned" },
            { label: "Step 4: Set up automated SSL certificate provisioning via Let's Encrypt / ACM.", status: "planned" },
            { label: "Step 5: Test deployment speeds globally and implement a clean CI/CD destroy/apply pipeline.", status: "planned" },
          ],
        },
        {
          title: "PyFlow — Python Learning Platform",
          subtitle: "AI-powered interactive Python & AI education platform",
          description:
            "PyFlow is a modern, interactive and AI-powered education platform designed to turn beginners into proficient Python and AI developers. Built with a 'Learn-by-Doing' philosophy: gamified lessons, an AI tutor, a secure Monaco-based code sandbox, PWA experience and full i18n (DE, EN, TR, RU, AR).",
          architecture:
            "React + Tailwind Frontend → Django REST API → PostgreSQL / Redis / Celery Sandbox → OpenAI LLM Agents.",
          tech: ["React", "Tailwind CSS", "Django", "DRF", "PostgreSQL", "Docker", "Redis", "Celery", "OpenAI API"],
          steps: [
            { label: "Step 1: Project scaffolding & i18n infrastructure.", status: "completed" },
            { label: "Step 2: Course content management & user progress tracking.", status: "in-progress" },
            { label: "Step 3: AI code sandbox implementation (secure execution).", status: "planned" },
            { label: "Step 4: Gamification (XP, streaks, achievements) & PWA mobile app.", status: "planned" },
            { label: "Step 5: Public launch on Vercel with multi-language support.", status: "completed" },
          ],
        },
        {
          title: "PyMentor — AI Coding Demo",
          subtitle: "AI-powered Python mentor & code assistant",
          description:
            "PyMentor is an AI-driven coding companion that provides real-time Python mentoring, debugging help, and personalized explanations. Currently ~60% complete, with core AI chat and code analysis already functional.",
          architecture:
            "React Frontend → Python FastAPI → OpenAI LLM Agents → Redis Cache.",
          tech: ["React", "Tailwind CSS", "FastAPI", "Python", "OpenAI API", "Redis"],
          steps: [
            { label: "Step 1: Project scaffolding & FastAPI backend setup.", status: "completed" },
            { label: "Step 2: AI chat integration with LLM agents (functional).", status: "completed" },
            { label: "Step 3: Real-time code analysis & debugging suggestions.", status: "in-progress" },
            { label: "Step 4: User history & session persistence (Redis).", status: "in-progress" },
            { label: "Step 5: Public demo deployment & UI polish.", status: "planned" },
          ],
        },
      ],

      "skills.title": "Skills",
      "skills.groups": [
        { label: "Cloud Platforms", items: ["Microsoft Azure", "Azure Active Directory", "Azure VMs", "Virtual Networks (VNet)", "Identity & Access (IAM)"] },
        { label: "DevOps & Automation", items: ["Terraform (IaC)", "Docker", "Python (Basics)", "Bash & PowerShell", "Git / GitHub"] },
        { label: "System Administration", items: ["Windows Server 2025", "Active Directory (AD DS)", "Linux (Ubuntu/Debian)"] },
        { label: "Network & Security", items: ["TCP/IP", "DNS", "DHCP", "Firewalls", "Routing & Switching"] },
        { label: "Hardware & Electronics", items: ["Board-Level Repair", "Micro-soldering", "Schematic Analysis", "Hardware Diagnostics"] },
      ],

      "certificates.title": "Languages & Certificates",
      "certificates.languages": "Languages",
      "certificates.foundations": "Established Foundations",
      "certificates.focus": "In Preparation / Focus 2026",
      "certificates.langs": [
        { name: "German", level: "B1 (Advanced)", value: 60 },
        { name: "Persian", level: "Native", value: 100 },
        { name: "Turkish", level: "Fluent", value: 90 },
      ],
      "certificates.foundational": ["CompTIA A+", "CompTIA Network+", "Cisco CCNA", "MCSA / MCSE"],
      "certificates.focusCerts": ["Cisco CCNP", "Azure Security"],

      "contact.title": "Let's work together",
      "contact.text": "I am actively looking for an entry-level position as Junior Cloud Engineer or IT System Administrator in the Hamburg area. Feel free to contact me — I look forward to our conversation.",
      "contact.email": "Email",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",

      "footer.credits": "Crafted with care by Vahid",
      "language.toggle": "DE",
    },
  },
  de: {
    translation: {
      "nav.about": "Über mich",
      "nav.experience": "Werdegang",
      "nav.roadmap": "Roadmap",
      "nav.projects": "Projekte",
      "nav.skills": "Fachkenntnisse",
      "nav.certificates": "Zertifikate",
      "nav.contact": "Kontakt",
      "nav.top": "Top",

      "header.openToWork": "Open to Work",
      "header.role": "Cloud Engineer & IT System Administrator",
      "header.location": "Hamburg, Deutschland",
      "header.contactBtn": "Kontakt aufnehmen",
      "header.experienceBtn": "Werdegang",
      "header.cvBtn": "Lebenslauf",

      "about.title": "Über mich",
      "about.text": "Dank meiner fundierten Erfahrung in der Board-Level-Reparatur, im Mikrolöten und im Lesen von komplexen Schaltplänen (Schematics) besitze ich ein tiefes Verständnis für die physische Schicht (Layer 1) der IT-Infrastruktur. Dies ermöglicht es mir, physische Netzwerkkomponenten, Server-Hardware und IoT-Geräte präzise zu assemblieren, zu verkabeln und auf Hardware-Ebene zu diagnostizieren. Aktuell bilde ich mich zum Cloud Engineer weiter, um diese physische Expertise mit moderner Cloud-Infrastruktur (Azure, Terraform, Docker) zu verbinden. Ich suche eine Einstiegsposition als Junior Cloud Engineer oder IT-Systemadministrator im Raum Hamburg.",

      "reveal.title": "Klicke hier für mehr über mich",
      "reveal.less": "Weniger anzeigen",
      "reveal.goalTitle": "Mein Ziel",
      "reveal.goalText": "Einstieg als Junior Cloud Engineer oder IT-Systemadministrator im Raum Hamburg, um moderne Cloud-Infrastrukturen mit Azure, Terraform und Docker mitzugestalten.",
      "reveal.driveTitle": "Was mich antreibt",
      "reveal.driveText": "Die Brücke zwischen physischer Hardware und moderner Cloud-Welt zu schlagen — vom Mikrolöten bis zur Infrastructure-as-Code.",
      "reveal.funTitle": "Fun Fact",
      "reveal.funText": "Ich habe über 2 Jahre lang anspruchsvolle Mainboards auf Komponentenebene repariert, bevor ich mich der Cloud zuwandte.",
      "reveal.learningTitle": "Aktuell am Lernen",
      "reveal.learningText": "Vertiefung in Azure DevOps, Kubernetes-Grundlagen und automatisierte Cloud-Deployments mit Terraform.",

      "experience.title": "Beruflicher Werdegang",
      "experience.items": [
        {
          role: "Weiterbildung zum Cloud Engineer",
          company: "Digital Career Institute (DCI)",
          location: "Hamburg",
          period: "06.2026 – laufend",
          points: [
            "Fokus auf moderne Enterprise-Architekturen, Netzwerksicherheit und Cloud-Migration.",
            "Praktische Implementierung von Automatisierungs-Szenarien mittels Python-Grundlagen.",
          ],
        },
        {
          role: "Kurier / Logistikmitarbeiter & IT-Hardware-Support",
          company: "Smiley Pizza",
          location: "Hamburg",
          period: "10.2023 – 03.2026",
          points: [
            "Sicherstellung und First-Level-Support der internen Mobilgeräte-Hardware der Fahrer.",
            "Logistische Planung und Routenoptimierung über digitale Koordinationsplattformen.",
          ],
        },
        {
          role: "Fahrer / Logistikmitarbeiter & Technischer Support",
          company: "Amazon Logistics",
          location: "Hamburg",
          period: "04.2023 – 09.2023",
          points: [
            "Einsatz und Routen-Anpassung über das digitale Dispatching-System Cortex.",
            "Fehlerbehebung und Hardware-Support bei Störungen an Scannern und mobilen Endgeräten.",
          ],
        },
        {
          role: "Inhaber & Hardware-Spezialist (Selbstständig)",
          company: "Eigenes IT-Fachgeschäft",
          location: "Istanbul, Türkei",
          period: "06.2020 – 12.2022",
          points: [
            "Aufbau und Betrieb eines Reparaturzentrums für anspruchsvolle Mikroelektronik.",
            "Analyse komplexer Platinen-Schaltpläne und präzises Mikrolöten (Board-Level-Reparatur).",
            "Kundenberatung, technischer Support und Systemkonfiguration für Business- und Endkunden.",
          ],
        },
        {
          role: "Network Administrator & IT-Support",
          company: "Jahan Aseman Co.",
          location: "Teheran, Iran",
          period: "2008 – 2010",
          points: [
            "Administration und Wartung der lokalen Netzwerkinfrastruktur.",
            "Benutzer-Support (Helpdesk), Hardware-Installation und Behebung von Systemstörungen.",
          ],
        },
      ],

      "roadmap.title": "Karriere- & Lern-Roadmap",
      "roadmap.subtitle": "Vom klassischen Network & Systems Engineering bis zur modernen Cloud-/DevOps- und Security-Welt – mein strukturierter Weg.",
      "roadmap.cheatShow": "Tech Cheat Sheet anzeigen",
      "roadmap.cheatHide": "Tech Cheat Sheet verbergen",
      "roadmap.cheatLabel": "Tech Cheat Sheet",
      "roadmap.status.completed": "Abgeschlossen",
      "roadmap.status.inProgress": "In Arbeit",
      "roadmap.status.planned": "Geplant",
      "roadmap.phases": [
        {
          tag: "PHASE 0",
          subtitle: "Network & Systems Engineering Foundation",
          title: "IT Systems & Networking Foundation",
          period: "2011 – 2014",
          topics: [
            "Hardware Assembly & Board-level Diagnostics (Schematics, Micro-soldering, Layer 1 Physical Assembly)",
            "CompTIA A+ (Hardware & OS)",
            "CompTIA Network+",
            "Cisco CCNA (Routing & Switching)",
            "MCSA & MCSE (Windows Server, Active Directory, DNS/DHCP, Group Policy)",
          ],
        },
        {
          tag: "PHASE 1",
          subtitle: "Web Development & Scripting Foundations",
          title: "Programming & Web Basics",
          period: "Juni 2026",
          topics: [
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "Python (Automation & Scripting)",
            "Git Version Control",
          ],
        },
        {
          tag: "PHASE 2",
          subtitle: "Linux, Containers & CCNA Update",
          title: "Enterprise Linux, Containers & CCNA Update",
          period: "Juli – August 2026",
          topics: [
            "Linux Enterprise Basics",
            "Microsoft Azure Administration",
            "Docker Containerization",
            "CCNA Modern Network Update (Advanced Routing/Switching in modern environments)",
          ],
        },
        {
          tag: "PHASE 3",
          subtitle: "IaC, CCNP Core & NGFW Security",
          title: "Infrastructure as Code & CCNP Core",
          period: "September – November 2026",
          topics: [
            "Terraform (IaC)",
            "Ansible Automation",
            "CCNP Enterprise Core (ENCOR – Enterprise Network Architecture)",
            "Next-Generation Firewalls (NGFW – Fortinet FortiGate / Palo Alto Security Rules, VPNs, NAT)",
          ],
        },
        {
          tag: "PHASE 4",
          subtitle: "CI/CD Pipelines, CCNP Routing & Cloud Security",
          title: "CI/CD & Advanced Security Routing",
          period: "Dezember 2026 – Februar 2027",
          topics: [
            "Build Tools (Maven package/install)",
            "Code Quality (SonarQube analysis)",
            "Jenkins Pipelines (Checkout, Test, Build, Deploy)",
            "CCNP Enterprise Advanced Routing (ENARSI – Troubleshooting & Security Protocols)",
            "Cloud & Network Security (Firewall rules, DMZ, Azure Bastion, Network Security Groups)",
          ],
        },
        {
          tag: "PHASE 5",
          subtitle: "Cloud Architecture & Azure Specialization",
          title: "Cloud Architecture & Azure Specialization",
          period: "März – Mai 2027",
          topics: [
            "Azure Solutions Architecture (Hub-and-Spoke, Landing Zones)",
            "Azure Kubernetes Service (AKS) Grundlagen",
            "Azure DevOps & CI/CD mit Pipelines",
            "Cost Management & Governance in Azure",
          ],
        },
        {
          tag: "PHASE 6",
          subtitle: "Graduation Project & Job Preparation",
          title: "Graduation Project & Job Preparation",
          period: "Juni – Juli 2027",
          topics: [
            "Abschlussprojekt: End-to-End Cloud-Infrastruktur mit Terraform & Azure",
            "Bewerbungsunterlagen & Portfolio-Feinschliff",
            "Mock-Interviews & technische Vorbereitung",
            "Übergang in Junior Cloud Engineer / IT-Systemadministrator Rolle",
          ],
        },
      ],

      "projects.title": "Projekte",
      "projects.clickHint": "Klicken für Roadmap →",
      "projects.concept": "Konzeptphase",
      "projects.architecture": "Architektur",
      "projects.roadmapLabel": "Implementation Roadmap",
      "projects.github": "GitHub",
      "projects.demo": "Live Demo",
      "projects.items": [
        {
          title: "Automated Hybrid Network & Monitoring Dashboard",
          subtitle: "Ansible-automated hybrid lab with live Python telemetry",
          description:
            "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
          architecture:
            "Local Virtual Network (Windows Server AD + Linux clients) → Python Agent → Flask/Streamlit Dashboard.",
          tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
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
          steps: [
            { label: "Step 1: Design global content delivery architecture.", status: "completed" },
            { label: "Step 2: Write Terraform files for AWS S3 bucket / Azure Storage container.", status: "planned" },
            { label: "Step 3: Configure CloudFront / Azure CDN for edge caching.", status: "planned" },
            { label: "Step 4: Set up automated SSL certificate provisioning via Let's Encrypt / ACM.", status: "planned" },
            { label: "Step 5: Test deployment speeds globally and implement a clean CI/CD destroy/apply pipeline.", status: "planned" },
          ],
        },
        {
          title: "PyFlow — Python Learning Platform",
          subtitle: "KI-gestützte interaktive Python- & KI-Lernplattform",
          description:
            "PyFlow ist eine moderne, interaktive und KI-gestützte Bildungsplattform, die Anfänger zu fortgeschrittenen Python- und KI-Entwicklern macht. Mit 'Learning-by-Doing'-Philosophie: gamifizierte Lektionen, KI-Tutor, sicherer Monaco-Code-Sandbox, PWA-Erlebnis und volle i18n (DE, EN, TR, RU, AR).",
          architecture:
            "React + Tailwind Frontend → Django REST API → PostgreSQL / Redis / Celery Sandbox → OpenAI LLM Agents.",
          tech: ["React", "Tailwind CSS", "Django", "DRF", "PostgreSQL", "Docker", "Redis", "Celery", "OpenAI API"],
          steps: [
            { label: "Step 1: Projekt-Scaffolding & i18n-Infrastruktur.", status: "completed" },
            { label: "Step 2: Kursinhalts-Verwaltung & Fortschrittstracking.", status: "in-progress" },
            { label: "Step 3: KI-Code-Sandbox-Implementierung (sichere Ausführung).", status: "planned" },
            { label: "Step 4: Gamification (XP, Streaks, Achievements) & PWA Mobile App.", status: "planned" },
            { label: "Step 5: Öffentlicher Launch auf Vercel mit Mehrsprachigkeit.", status: "completed" },
          ],
        },
        {
          title: "PyMentor — AI Coding Demo",
          subtitle: "KI-gestützter Python-Mentor & Code-Assistent",
          description:
            "PyMentor ist ein KI-gestützter Programmierbegleiter, der Echtzeit-Python-Mentoring, Debugging-Hilfe und personalisierte Erklärungen bietet. Derzeit ~60% fertig, mit funktionalem KI-Chat und Code-Analyse.",
          architecture:
            "React Frontend → Python FastAPI → OpenAI LLM Agents → Redis Cache.",
          tech: ["React", "Tailwind CSS", "FastAPI", "Python", "OpenAI API", "Redis"],
          steps: [
            { label: "Step 1: Projekt-Scaffolding & FastAPI-Backend-Setup.", status: "completed" },
            { label: "Step 2: KI-Chat-Integration mit LLM-Agents (funktional).", status: "completed" },
            { label: "Step 3: Echtzeit-Code-Analyse & Debugging-Vorschläge.", status: "in-progress" },
            { label: "Step 4: Benutzerverlauf & Session-Persistenz (Redis).", status: "in-progress" },
            { label: "Step 5: Öffentliches Demo-Deployment & UI-Politur.", status: "planned" },
          ],
        },
      ],

      "skills.title": "Fachkenntnisse",
      "skills.groups": [
        { label: "Cloud-Plattformen", items: ["Microsoft Azure", "Azure Active Directory", "Azure VMs", "Virtual Networks (VNet)", "Identity & Access (IAM)"] },
        { label: "DevOps & Automatisierung", items: ["Terraform (IaC)", "Docker", "Python (Grundlagen)", "Bash & PowerShell", "Git / GitHub"] },
        { label: "Systemadministration", items: ["Windows Server 2025", "Active Directory (AD DS)", "Linux (Ubuntu/Debian)"] },
        { label: "Netzwerk & Sicherheit", items: ["TCP/IP", "DNS", "DHCP", "Firewalls", "Routing & Switching"] },
        { label: "Hardware & Elektronik", items: ["Board-Level-Reparatur", "Mikrolöten", "Schaltplan-Analyse", "Hardware-Diagnose"] },
      ],

      "certificates.title": "Sprachen & Zertifikate",
      "certificates.languages": "Sprachen",
      "certificates.foundations": "Etablierte Fundamente",
      "certificates.focus": "In Vorbereitung / Fokus 2026",
      "certificates.langs": [
        { name: "Deutsch", level: "B1 (Fortgeschritten)", value: 60 },
        { name: "Persisch", level: "Muttersprache", value: 100 },
        { name: "Türkisch", level: "Verhandlungssicher", value: 90 },
      ],
      "certificates.foundational": ["CompTIA A+", "CompTIA Network+", "Cisco CCNA", "MCSA / MCSE"],
      "certificates.focusCerts": ["Cisco CCNP", "Azure Security"],

      "contact.title": "Lassen Sie uns zusammenarbeiten",
      "contact.text": "Ich suche aktiv nach einer Einstiegsposition als Junior Cloud Engineer oder IT-Systemadministrator im Raum Hamburg. Melden Sie sich gerne bei mir — ich freue mich auf unser Gespräch.",
      "contact.email": "E-Mail",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",

      "footer.credits": "Mit Sorgfalt von Vahid erstellt",
      "language.toggle": "EN",
    },
  },
};

const savedLang = localStorage.getItem("lang") || "de";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "de",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = savedLang;

export default i18n;
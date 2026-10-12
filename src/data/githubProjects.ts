import type { Project } from "./projects";

// Public repository descriptions and documented implementation status.
// Keep project titles identical across languages so existing slug routing works.
export const githubProjectAdditions: Record<"en" | "de", Project[]> = {
  en: [
    {
      title: "Klybit — IT Learning & Cisco Simulator",
      subtitle: "Multilingual infrastructure learning, practice and guided labs",
      description: "A learning workspace for Windows Server, Azure Fundamentals, Docker and CCNA, with lessons, original practice questions, account-based progress, Leitner review and guided lab evidence. The Cisco workspace adds a browser-based CLI simulator for topology, configuration and troubleshooting practice. Learning materials and learner-reported lab outcomes are separate from official certification exams.",
      architecture: "React / Next.js learning workspace → Shared question and lab data → Account-scoped checkpoints → Cloudflare D1 → Browser-based Cisco CLI simulation.",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Cloudflare D1", "Windows Server", "Azure", "Docker", "CCNA"],
      icon: "Network",
      steps: [
        { label: "Build multilingual lessons, practice banks and guided infrastructure labs.", status: "completed" },
        { label: "Add account-based checkpoints, search and Leitner review.", status: "completed" },
        { label: "Implement the browser-based Cisco CLI and topology workspace.", status: "completed" },
        { label: "Continue reviewing learning content and expanding simulator exercises.", status: "in-progress" },
      ],
    },
    {
      title: "MultiAgentCoding",
      subtitle: "Visual workflows and an execution control plane for AI coding agents",
      description: "A Python/FastAPI control plane for configuring and running multi-agent coding workflows. It combines model-independent agents, reusable roles, skills, prompt profiles, evaluation rubrics and a visual workflow designer with an Obsidian knowledge vault. The documented runtime uses OpenCode with execution planning, dry runs, cancellation and bounded retries. Direct provider adapters and persistent run storage remain planned work.",
      architecture: "Agent Dashboard / Workflow Designer / Terminal → Workflow Planner → OpenCode Adapter → Execution Runtime → Events and Results → Obsidian Knowledge Vault.",
      tech: ["Python", "FastAPI", "JavaScript", "OpenCode", "AI Agents", "Workflow Graphs", "Obsidian", "BYOK"],
      icon: "Bot",
      steps: [
        { label: "Implement agent identities, reusable roles, skills and prompt profiles.", status: "completed" },
        { label: "Build the dashboard, workflow designer and terminal interfaces.", status: "completed" },
        { label: "Connect controlled execution, evaluation and persistent project knowledge.", status: "completed" },
        { label: "Add direct provider adapters and persistent run storage.", status: "planned" },
      ],
    },
    {
      title: "CloudGuard AI",
      subtitle: "Azure-first infrastructure observability and governed AI operations",
      description: "A public product and architecture showcase for explainable infrastructure operations across Windows/Active Directory, Linux, edge devices and Azure. It documents health-signal ingestion, inventory and events, evidence-based diagnosis, and approval-gated automation. Phase 0 foundations are complete and the Phase 1 internal MVP is in development. The public repository contains the product direction; runtime implementation is maintained separately.",
      architecture: "Windows / Edge / Azure Connector Concepts → Ingestion → Inventory and Event Store → Policy and Knowledge Engines → Agent Runtime → Verification → Dashboard.",
      tech: ["Microsoft Azure", "Windows Server", "Active Directory", "Observability", "AI Operations", "Edge Telemetry", "Policy Governance"],
      icon: "Shield",
      steps: [
        { label: "Document Phase 0 architecture, connector concepts and operational safety boundaries.", status: "completed" },
        { label: "Develop the Phase 1 internal Windows-to-diagnosis MVP.", status: "in-progress" },
        { label: "Validate the platform through a pilot customer phase.", status: "planned" },
        { label: "Expand managed-service capabilities after the pilot.", status: "planned" },
      ],
    },
    {
      title: "Zova — Flutter Language Learning App",
      subtitle: "Mobile language learning with lessons, interactive books and progress tracking",
      description: "An independent Flutter/Dart language-learning app with onboarding, course roadmaps, four exercise types, an interactive book reader and progress tracking. Supabase adapters support account and profile storage, while Stripe integration provides the subscription workflow. An offline demo mode uses local storage and simulated payments; live backend and payment configuration is a separate deployment step. This mobile app is separate from the Zova classroom browser extension.",
      architecture: "Flutter / Dart UI → Course and Progress Models → Local Demo Storage or Supabase → Stripe Subscription Integration.",
      tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Stripe", "Local Storage", "Mobile Learning"],
      icon: "Globe",
      steps: [
        { label: "Build onboarding, course navigation and interactive lesson exercises.", status: "completed" },
        { label: "Add the book reader, learning profile and local progress tracking.", status: "completed" },
        { label: "Provide Supabase/Stripe adapters and an offline demo mode.", status: "completed" },
        { label: "Configure and validate live backend and payment services for a release.", status: "planned" },
      ],
    },
  ],
  de: [
    {
      title: "Klybit — IT Learning & Cisco Simulator",
      subtitle: "Mehrsprachiges Infrastruktur-Lernen mit Übungen und geführten Labs",
      description: "Ein Lernbereich für Windows Server, Azure-Grundlagen, Docker und CCNA mit Lektionen, eigenen Übungsfragen, kontobasiertem Fortschritt, Leitner-Wiederholung und geführten Lab-Nachweisen. Der Cisco-Bereich ergänzt einen browserbasierten CLI-Simulator für Topologie, Konfiguration und Fehlersuche. Lernmaterial und selbst gemeldete Lab-Ergebnisse sind von offiziellen Zertifizierungsprüfungen getrennt.",
      architecture: "React-/Next.js-Lernbereich → Gemeinsame Fragen- und Lab-Daten → Kontobasierte Checkpoints → Cloudflare D1 → Browserbasierte Cisco-CLI-Simulation.",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Cloudflare D1", "Windows Server", "Azure", "Docker", "CCNA"],
      icon: "Network",
      steps: [
        { label: "Mehrsprachige Lektionen, Fragenbanken und geführte Infrastruktur-Labs erstellt.", status: "completed" },
        { label: "Kontobasierte Checkpoints, Suche und Leitner-Wiederholung ergänzt.", status: "completed" },
        { label: "Browserbasierte Cisco-CLI und Topologie-Arbeitsbereich implementiert.", status: "completed" },
        { label: "Lerninhalte weiter prüfen und Simulator-Übungen erweitern.", status: "in-progress" },
      ],
    },
    {
      title: "MultiAgentCoding",
      subtitle: "Visuelle Workflows und Ausführungssteuerung für KI-Coding-Agenten",
      description: "Eine Python-/FastAPI-Steuerung zum Konfigurieren und Ausführen von Multi-Agent-Coding-Workflows. Modellunabhängige Agenten, wiederverwendbare Rollen, Skills, Prompt-Profile und Bewertungsregeln verbinden sich mit einem visuellen Workflow-Designer und einem Obsidian-Wissensspeicher. Die dokumentierte Laufzeit nutzt OpenCode mit Ausführungsplanung, Testläufen, Abbruch und begrenzten Wiederholungen. Direkte Provider-Adapter und dauerhafte Laufhistorien sind noch geplant.",
      architecture: "Agent-Dashboard / Workflow-Designer / Terminal → Workflow-Planer → OpenCode-Adapter → Ausführungslaufzeit → Ereignisse und Ergebnisse → Obsidian-Wissensspeicher.",
      tech: ["Python", "FastAPI", "JavaScript", "OpenCode", "KI-Agenten", "Workflow-Graphen", "Obsidian", "BYOK"],
      icon: "Bot",
      steps: [
        { label: "Agentenidentitäten, wiederverwendbare Rollen, Skills und Prompt-Profile implementiert.", status: "completed" },
        { label: "Dashboard, Workflow-Designer und Terminal-Oberflächen erstellt.", status: "completed" },
        { label: "Kontrollierte Ausführung, Bewertung und dauerhaftes Projektwissen verbunden.", status: "completed" },
        { label: "Direkte Provider-Adapter und dauerhafte Laufhistorien ergänzen.", status: "planned" },
      ],
    },
    {
      title: "CloudGuard AI",
      subtitle: "Azure-orientierte Infrastrukturüberwachung und kontrollierte KI-Operationen",
      description: "Eine öffentliche Produkt- und Architekturdokumentation für nachvollziehbare Infrastruktur-Operationen mit Windows/Active Directory, Linux, Edge-Geräten und Azure. Dokumentiert sind die Aufnahme von Zustandssignalen, Inventar und Ereignisse, evidenzbasierte Diagnose und freigabepflichtige Automatisierung. Die Grundlagen aus Phase 0 sind abgeschlossen; der interne MVP aus Phase 1 wird entwickelt. Das öffentliche Repository beschreibt die Produktrichtung; die Laufzeit wird separat gepflegt.",
      architecture: "Windows-/Edge-/Azure-Connector-Konzepte → Dateneingang → Inventar- und Ereignisspeicher → Policy- und Wissens-Engines → Agentenlaufzeit → Verifikation → Dashboard.",
      tech: ["Microsoft Azure", "Windows Server", "Active Directory", "Observability", "KI-Operationen", "Edge-Telemetrie", "Policy Governance"],
      icon: "Shield",
      steps: [
        { label: "Phase-0-Architektur, Connector-Konzepte und operative Sicherheitsgrenzen dokumentiert.", status: "completed" },
        { label: "Internen Phase-1-MVP von Windows bis zur Diagnose entwickeln.", status: "in-progress" },
        { label: "Plattform in einer Pilotkundenphase validieren.", status: "planned" },
        { label: "Managed-Service-Funktionen nach dem Pilotbetrieb erweitern.", status: "planned" },
      ],
    },
    {
      title: "Zova — Flutter Language Learning App",
      subtitle: "Mobiles Sprachenlernen mit Lektionen, interaktiven Büchern und Lernfortschritt",
      description: "Eine eigenständige Flutter-/Dart-App zum Sprachenlernen mit Onboarding, Kurspfaden, vier Übungstypen, interaktivem Buchleser und Lernfortschritt. Supabase-Adapter unterstützen Konten und Profildaten; die Stripe-Anbindung stellt den Abo-Ablauf bereit. Im Offline-Demomodus werden lokaler Speicher und simulierte Zahlungen genutzt. Die Einrichtung echter Backend- und Zahlungsdienste ist ein separater Veröffentlichungsschritt. Diese mobile App ist eigenständig gegenüber der Zova-Browsererweiterung für den Unterricht.",
      architecture: "Flutter-/Dart-Oberfläche → Kurs- und Fortschrittsmodelle → Lokaler Demospeicher oder Supabase → Stripe-Abo-Anbindung.",
      tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Stripe", "Lokaler Speicher", "Mobiles Lernen"],
      icon: "Globe",
      steps: [
        { label: "Onboarding, Kursnavigation und interaktive Lektionen erstellt.", status: "completed" },
        { label: "Buchleser, Lernprofil und lokale Fortschrittsverwaltung ergänzt.", status: "completed" },
        { label: "Supabase-/Stripe-Adapter und einen Offline-Demomodus bereitgestellt.", status: "completed" },
        { label: "Echte Backend- und Zahlungsdienste für eine Veröffentlichung einrichten und prüfen.", status: "planned" },
      ],
    },
  ],
};

# Vahid Rahmani — Cloud & Infrastructure Portfolio

> Personal portfolio for hands-on work across Azure, Windows Server, Linux, networking, Python, automation, and practical AI-enabled tools.

<p align="center">
  <a href="https://vahid-portfolio-three.vercel.app/"><img src="https://img.shields.io/badge/live%20portfolio-vahid--portfolio--three.vercel.app-2563eb" alt="Live portfolio"></a>
  <a href="https://www.linkedin.com/in/vahid-rahmani-699944417/"><img src="https://img.shields.io/badge/LinkedIn-Vahid%20Rahmani-0A66C2" alt="LinkedIn"></a>
  <a href="https://github.com/Vahid-Rahmani"><img src="https://img.shields.io/badge/GitHub-Vahid--Rahmani-181717?logo=github" alt="GitHub"></a>
</p>

## What this portfolio communicates

The site brings together infrastructure labs, monitoring tools, automation experiments, and learning products in one evidence-led profile. Each featured project is presented with its purpose, technology choices, current state, and repository link so a reviewer can move from overview to implementation quickly.

## Focus areas

| Area | Evidence in the project collection |
| --- | --- |
| Cloud & infrastructure | Azure architecture, monitoring, hybrid networking and deployment planning |
| Systems administration | Windows Server, Active Directory, PowerShell remoting and Linux practice |
| Automation | Python utilities, repeatable workflows, data collection and operational tooling |
| AI engineering | RAG/data pipelines, multi-agent workflow orchestration and classroom assistance |
| Web delivery | React, TypeScript, Vite, Tailwind CSS and Vercel deployment |
| Hardware & networking | Raspberry Pi, IoT monitoring concepts, diagnostics and network fundamentals |

## Featured project map

```mermaid
flowchart TB
    P[Portfolio] --> I[Infrastructure]
    P --> A[Automation & AI]
    P --> W[Web products]
    I --> M[Hybrid Network Monitoring]
    I --> H[Cloud-connected Hardware Monitor]
    I --> AZ[Azure AI Specialist]
    A --> MA[MultiAgentCoding]
    A --> D[AI Drop Agent]
    W --> Z[Zova classroom assistant]
    W --> S[Zova product site]
```

## Selected projects

- [Automated Hybrid Network & Monitoring Dashboard](https://github.com/Vahid-Rahmani/Automated-Hybrid-Network-Monitoring-Dashboard) — Active Directory discovery, reachability checks, Windows host metrics, and a FastAPI dashboard.
- [Cloud Connected Hardware IoT Monitor](https://github.com/Vahid-Rahmani/Cloud-Connected-Hardware-IoT-Monitor) — Raspberry Pi / hardware monitoring direction connected to cloud telemetry concepts.
- [Azure AI Specialist Project Plan](https://github.com/Vahid-Rahmani/Azure-AI-Specialist-Project-Plan) — data-first Azure knowledge collection, evaluation, RAG, and model strategy.
- [MultiAgentCoding](https://github.com/Vahid-Rahmani/mullti_agent_coding) — visual orchestration and control plane for multi-agent coding workflows.
- [AI Drop Agent](https://github.com/Vahid-Rahmani/AI-Drop-Agent) — automation project for product discovery and marketplace workflows.
- [Zova extension](https://github.com/Vahid-Rahmani/dobzova) — Chrome classroom assistant for transcription, translation, study support, and local class history.
- [Zova product site](https://zovasite.vercel.app/) — public product landing page, guide, privacy information, and support content.

## Site architecture

```mermaid
flowchart LR
    V[Visitor] --> R[React + TypeScript]
    R --> T[Tailwind UI]
    R --> D[Project data]
    R --> L[Project / LinkedIn / GitHub links]
    R --> B[Vercel deployment]
```

The portfolio is a Vite-powered React application. Project content is kept in the source data layer so it can be reviewed and updated without scattering project details across UI components.

## Local development

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
pnpm build
```

The production build is emitted to `dist/` and is configured for Vercel deployment. It renders the actual React pages into static HTML at build time, so project content and metadata are available before JavaScript runs. No runtime server or new rendering dependency is required.

German pages retain the existing URLs; English pages use `/en` and `/en/project/:slug`. The language switch preserves the current page. Titles, descriptions, canonicals, reciprocal hreflang, social cards and JSON-LD come from `src/lib/seo.ts`; visible questions and their structured answers share `src/data/faq.ts`.

The build generates a sitemap covering every public project in both languages, an optional `llms.txt` project index, a stable profile image, and a real `404.html`. The sample `/costs` dashboard is marked `noindex` and excluded from the sitemap. Crawler rules preserve the resume restriction, including its bundled asset path. The existing Search Console verification token is retained.

Run `pnpm exec tsc -p tsconfig.app.json --noEmit` and `pnpm build` to validate changes. After deploying, use Search Console URL Inspection and submit `https://vahid-portfolio-three.vercel.app/sitemap.xml` for recrawling. `llms.txt` is optional documentation; it is not a Google ranking requirement. Indexing, search positions and AI citations are not guaranteed.

## Professional profile

I am a Cloud Engineer Trainee and IT infrastructure practitioner in Hamburg, Germany, focused on Azure, Windows Server, Linux, networking, Python, and practical automation. My projects are built as learning evidence: clear scope, reproducible setup, and an honest separation between implemented features and future work.

Languages: German, Persian, and English.

## Links

- [Live portfolio](https://vahid-portfolio-three.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/vahid-rahmani-699944417/)
- [GitHub](https://github.com/Vahid-Rahmani)

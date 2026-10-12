import i18n from "@/i18n";
import { faq } from "@/data/faq";
import { githubUrls, slugify, type Project } from "@/data/projects";
import { basePath, languageFromPath, localizedPath, type Locale } from "./locale";

export const SITE_URL = "https://vahid-portfolio-three.vercel.app";
export const PROFILE_IMAGE = `${SITE_URL}/profile-photo.jpg`;
export const SEARCH_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const getProjects = (language: Locale): Project[] =>
  i18n.getFixedT(language)("projects.items", { returnObjects: true }) as Project[];

export type PageMetadata = {
  title: string;
  description: string;
  language: Locale;
  canonical: string;
  alternates: Array<{ language: string; url: string }>;
  indexable: boolean;
  schema: Record<string, unknown>;
};

export const getPageMetadata = (pathname: string): PageMetadata => {
  const language = languageFromPath(pathname);
  const path = basePath(pathname);
  const projects = getProjects(language);
  const project = projects.find((item) => `/project/${slugify(item.title)}` === path);
  const isHome = path === "/";
  const isCosts = path === "/costs";
  const indexable = isHome || Boolean(project);
  const canonical = `${SITE_URL}${localizedPath(path, language)}`;
  const title = isHome
    ? language === "de" ? "Vahid Rahmani | Cloud- und Netzwerktechnik in Hamburg" : "Vahid Rahmani | Cloud & Network Engineer in Hamburg"
    : project ? `${project.title} | Vahid Rahmani`
    : isCosts ? "AWS Hosting Cost Demo | Vahid Rahmani" : "Page not found | Vahid Rahmani";
  const description = isHome
    ? language === "de"
      ? "Vahid Rahmani in Hamburg: CCNA, Azure, Windows Server und Python-Automatisierung. Entdecken Sie praktische Netzwerk-Labs, KI-Projekte und GitHub-Code."
      : "Explore Vahid Rahmani's cloud and networking portfolio in Hamburg: CCNA, Azure, Windows Server, Python automation, infrastructure labs and AI projects."
    : project ? (project.description.length > 160 ? project.description.slice(0, 157).replace(/\s+\S*$/, "") + "…" : project.description)
    : isCosts ? "Illustrative AWS hosting cost dashboard with sample data. A portfolio demonstration, not current provider pricing or a customer billing report."
    : "The requested portfolio page does not exist. Return to Vahid Rahmani's portfolio to browse infrastructure and automation projects.";
  const alternates = indexable ? [
    { language: "de", url: `${SITE_URL}${localizedPath(path, "de")}` },
    { language: "en", url: `${SITE_URL}${localizedPath(path, "en")}` },
    { language: "x-default", url: `${SITE_URL}${path}` },
  ] : [];
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Person", "@id": personId, name: "Vahid Rahmani", url: `${SITE_URL}/`,
      jobTitle: "CCNA-Certified Cloud & Network Engineer | AI Automation Engineer",
      image: PROFILE_IMAGE, email: "vahidrahmani.info@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Hamburg", addressCountry: "DE" },
      sameAs: ["https://www.linkedin.com/in/vahid-rahmani-699944417/", "https://github.com/Vahid-Rahmani"],
      knowsAbout: ["Microsoft Azure", "Windows Server", "Active Directory", "Hyper-V", "Cisco Networking", "EVE-NG", "SoftEther", "Linux", "Python", "Infrastructure Automation"],
    },
    {
      "@type": "WebSite", "@id": websiteId, name: "Vahid Rahmani Portfolio", url: `${SITE_URL}/`,
      publisher: { "@id": personId }, inLanguage: ["de", "en"],
    },
  ];
  if (indexable) {
    graph.push({
      "@type": isHome ? "ProfilePage" : "WebPage", "@id": `${canonical}#webpage`,
      url: canonical, name: title, description, inLanguage: language,
      isPartOf: { "@id": websiteId }, author: { "@id": personId },
      mainEntity: { "@id": isHome ? personId : `${canonical}#project` },
      ...(isHome ? {
        primaryImageOfPage: {
          "@type": "ImageObject", url: PROFILE_IMAGE, contentUrl: PROFILE_IMAGE,
          width: 1280, height: 1280, caption: "Vahid Rahmani",
        },
      } : {}),
    });
    if (isHome) {
      graph.push({
        "@type": "ItemList", "@id": `${canonical}#projects`, name: "Portfolio projects",
        itemListElement: projects.map((item, index) => ({
          "@type": "ListItem", position: index + 1, name: item.title,
          url: `${SITE_URL}${localizedPath(`/project/${slugify(item.title)}`, language)}`,
        })),
      });
      graph.push({
        "@type": "FAQPage", "@id": `${canonical}#faq`, inLanguage: language,
        isPartOf: { "@id": `${canonical}#webpage` },
        mainEntity: faq[language].map(({ question, answer }) => ({
          "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      });
    } else if (project) {
      graph.push({
        "@type": "CreativeWork", "@id": `${canonical}#project`, name: project.title,
        description: project.description, creator: { "@id": personId },
        url: canonical, inLanguage: language, keywords: project.tech,
        ...(githubUrls[project.title] ? { sameAs: [githubUrls[project.title]] } : {}),
      });
      graph.push({
        "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Portfolio", item: `${SITE_URL}${localizedPath("/", language)}` },
          { "@type": "ListItem", position: 2, name: project.title, item: canonical },
        ],
      });
    }
  }
  return { title, description, language, canonical, alternates, indexable, schema: { "@context": "https://schema.org", "@graph": graph } };
};

export const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char]!));

export const renderSeoHead = (page: PageMetadata): string => {
  const meta = (key: string, content: string, property = false) =>
    `<meta data-seo ${property ? "property" : "name"}="${key}" content="${escapeHtml(content)}" />`;
  return [
    `<title data-seo>${escapeHtml(page.title)}</title>`,
    meta("description", page.description), meta("robots", page.indexable ? SEARCH_ROBOTS : "noindex, follow"),
    `<link data-seo rel="canonical" href="${escapeHtml(page.canonical)}" />`,
    ...page.alternates.map((item) => `<link data-seo rel="alternate" hreflang="${item.language}" href="${escapeHtml(item.url)}" />`),
    meta("og:type", "website", true), meta("og:site_name", "Vahid Rahmani Portfolio", true),
    meta("og:title", page.title, true), meta("og:description", page.description, true), meta("og:url", page.canonical, true),
    meta("og:locale", page.language === "de" ? "de_DE" : "en_GB", true),
    meta("og:locale:alternate", page.language === "de" ? "en_GB" : "de_DE", true),
    meta("og:image", PROFILE_IMAGE, true), meta("og:image:alt", "Vahid Rahmani — cloud and networking practitioner in Hamburg", true),
    meta("og:image:type", "image/jpeg", true), meta("og:image:width", "1280", true), meta("og:image:height", "1280", true),
    meta("twitter:card", "summary_large_image"), meta("twitter:title", page.title), meta("twitter:description", page.description),
    meta("twitter:image", PROFILE_IMAGE), meta("twitter:image:alt", "Vahid Rahmani — cloud and networking practitioner in Hamburg"),
    `<script data-seo id="seo-schema" type="application/ld+json">${JSON.stringify(page.schema).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
};

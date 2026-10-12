import { mkdir, readFile, writeFile, copyFile, rm } from "node:fs/promises";
import path from "node:path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { AppContent } from "./App";
import i18n from "./i18n";
import { getPageMetadata, getProjects, renderSeoHead, escapeHtml, SITE_URL } from "./lib/seo";
import { localizedPath, type Locale } from "./lib/locale";
import { slugify } from "./data/projects";

const output = path.resolve("dist");
const template = await readFile(path.join(output, "index.html"), "utf8");
const languages: Locale[] = ["de", "en"];
const projects = getProjects("de");
const projectPaths = projects.map((item) => `/project/${slugify(item.title)}`);
const indexablePaths = ["/", ...projectPaths];

for (const language of languages) {
  await i18n.changeLanguage(language);
  for (const base of [...indexablePaths, "/costs"]) {
    const route = localizedPath(base, language);
    const page = getPageMetadata(route);
    const body = renderToString(<StaticRouter location={route}><AppContent /></StaticRouter>);
    const html = template
      .replace(/<html lang="[^"]*"/, `<html lang="${language}"`)
      .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, renderSeoHead(page))
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    const directory = path.join(output, route === "/" ? "" : route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
  }
}

await i18n.changeLanguage("de");
const missingRoute = "/404";
const missingBody = renderToString(<StaticRouter location={missingRoute}><AppContent /></StaticRouter>);
await writeFile(path.join(output, "404.html"), template
  .replace(/<html lang="[^"]*"/, '<html lang="de"')
  .replace(/<!-- SEO_HEAD_START -->[\s\S]*?<!-- SEO_HEAD_END -->/, renderSeoHead(getPageMetadata(missingRoute)))
  .replace('<div id="root"></div>', `<div id="root">${missingBody}</div>`));

const urls = languages.flatMap((language) => indexablePaths.map((base) => {
  const page = getPageMetadata(localizedPath(base, language));
  return `  <url>\n    <loc>${escapeHtml(page.canonical)}</loc>\n${page.alternates.map((item) =>
    `    <xhtml:link rel="alternate" hreflang="${item.language}" href="${escapeHtml(item.url)}" />`).join("\n")}\n  </url>`;
}));
await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`);

await copyFile(path.resolve("img/vr.jpg"), path.join(output, "profile-photo.jpg"));
await writeFile(path.join(output, "llms.txt"), `# Vahid Rahmani — Cloud and Network Portfolio\n\n> Official portfolio of Vahid Rahmani, a CCNA-certified cloud and networking practitioner based in Hamburg, Germany, currently training at Digital Career Institute.\n\n## Profile\n- [German portfolio](${SITE_URL}/): Profile, experience, skills, certificates, projects, frequently asked questions and contact.\n- [English portfolio](${SITE_URL}/en): English version of the same profile.\n- [GitHub](https://github.com/Vahid-Rahmani): Public project repositories.\n- [LinkedIn](https://www.linkedin.com/in/vahid-rahmani-699944417/): Professional profile.\n\n## Projects\n${projects.map((item) => `- [${item.title}](${SITE_URL}/en/project/${slugify(item.title)}): ${item.description}`).join("\n")}\n\n## Accuracy\nCCNP/CCIE and RHCSA are learning paths, not completed credentials. Project pages distinguish implemented, in-progress and planned work. The /costs dashboard uses illustrative sample data, not current cloud-provider prices or customer bills. Refer to the visible project pages for implementation status. Contact: vahidrahmani.info@gmail.com.\n`);

await rm(path.resolve(".prerender"), { recursive: true, force: true });
console.log(`Prerendered ${languages.length * (indexablePaths.length + 1)} pages plus a 404; sitemap includes ${urls.length} public language URLs.`);

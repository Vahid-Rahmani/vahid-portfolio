export type Locale = "de" | "en";

export const languageFromPath = (path: string): Locale =>
  /^\/en(?:\/|$)/.test(path) ? "en" : "de";

export const basePath = (path: string): string =>
  (path.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") || "/");

export const localizedPath = (path: string, language: string): string => {
  const normalized = path.startsWith("#") ? `/${path}` : path;
  return language === "en" ? `/en${normalized.replace(/^\/(?=[#?]|$)/, "")}` : normalized;
};

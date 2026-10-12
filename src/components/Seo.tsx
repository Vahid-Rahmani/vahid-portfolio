import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getPageMetadata, renderSeoHead } from "@/lib/seo";

const Seo = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    const page = getPageMetadata(pathname);
    if (i18n.language !== page.language) void i18n.changeLanguage(page.language);
    document.documentElement.lang = page.language;
    document.head.querySelectorAll("[data-seo]").forEach((node) => node.remove());
    document.head.insertAdjacentHTML("beforeend", renderSeoHead(page));
  }, [pathname, i18n]);
  return null;
};

export default Seo;

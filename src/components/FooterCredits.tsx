"use client";

import { useTranslation } from "react-i18next";

const FooterCredits = () => {
  const { t } = useTranslation();
  return <span className="ml-1 text-zinc-600">{t("footer.credits")}</span>;
};

export default FooterCredits;
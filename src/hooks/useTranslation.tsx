import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContextDefinition";
import { translations } from "../translations/translations";

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { language } = useLanguage();
  const current = translations[language];

  return {
    t: new Proxy(current, {
      get: (target, prop) => target[prop as string] ?? `[${String(prop)}]`,
    }),
    lang: language,
  };
}

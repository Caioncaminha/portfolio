import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

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

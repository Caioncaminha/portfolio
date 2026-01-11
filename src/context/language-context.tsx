"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Language, Dictionary } from "@/data/dictionaries";

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "pt") && savedLang !== language) {
      // eslint-disable-next-line
      setLanguage(savedLang);
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, dict: dictionaries[language], setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import rawContent from "../../content.json";
import { getDict, type Dictionary } from "@/lib/content";
import type { RawContent } from "@/types/content";

export type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  raw: RawContent;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const content = rawContent as RawContent;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "en" || saved === "pt") {
      setLanguageState(saved);
    }
  }, []); // empty deps — run once on mount only

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dict: getDict(content, language),
        raw: content,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

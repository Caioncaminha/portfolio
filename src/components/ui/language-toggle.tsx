"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="px-3 py-1 rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors border border-transparent hover:border-border focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle Language"
    >
      {language === "en" ? "EN" : "PT"}
    </button>
  );
}

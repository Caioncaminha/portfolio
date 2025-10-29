import { createContext } from "react";

export type LanguageContextType = {
  language: "en" | "pt";
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

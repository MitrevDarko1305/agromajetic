"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { sr } from "../lib/i18n/sr";
import { de } from "../lib/i18n/de";

const dictionaries = { sr, de };
type Lang = "sr" | "de";

const LanguageContext = createContext<{
  lang: Lang;
  t: typeof sr;
  setLang: (l: Lang) => void;
}>({ lang: "sr", t: sr, setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sr");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
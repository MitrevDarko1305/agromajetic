"use client";
import { useLanguage } from "./language-provider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "sr" ? "de" : "sr")}
      className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors cursor-pointer"
    >
      {lang === "sr" ? "DE" : "SR"}
    </button>
  );
}
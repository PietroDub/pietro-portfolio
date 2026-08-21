"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  function toggleLanguage() {
    setLanguage(language === "en" ? "pt" : "en");
  }

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "EN" : "PT"}
    </button>
  );
}
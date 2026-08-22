"use client";

import { useState } from "react";
import {
  translations,
  Language,
} from "@/data/translations";

import { LanguageContext } from "@/context/LanguageContext";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
// providers/LanguageProvider.tsx

"use client";

import { useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
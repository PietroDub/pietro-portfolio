"use client";

import { createContext } from "react";
import {
  translations,
  Language,
} from "@/data/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: (typeof translations)[Language];
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);
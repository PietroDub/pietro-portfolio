"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import {
  translations,
  Language,
} from "@/data/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);
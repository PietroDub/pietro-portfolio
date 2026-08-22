"use client";

import Image from "next/image";

import ThemeToggle from "../layout/ThemeToogle";
import LanguageSelector from "../layout/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

export default function Navbar() {
  const { translations } = useLanguage();
  return (
    <header
  className="
    fixed top-4 left-4 right-4 z-50
    flex items-center justify-between
    rounded-2xl
    bg-[#fff9ee]/75
    px-5 py-3
    shadow-sm
    backdrop-blur-xl
    transition-colors duration-300

    dark:bg-[#120b0b]/75

    sm:left-6 sm:right-6 sm:px-8
    lg:left-10 lg:right-10 lg:px-12
  "
>
  <nav className="flex items-center gap-5 lg:gap-8">
    <Image
      src="/Pie.png"
      alt="Pie logo"
      width={55}
      height={22}
      priority
      className="h-auto w-auto"
    />

    <div className="hidden items-center gap-5 md:flex lg:gap-8 text-lg lg:text-xl">
      <a
        href="#about"
        className="
          font-mono 
          text-[#ff2f3f]
          transition-all duration-200
          hover:opacity-70
        "
      >
        //{translations.nav.about}
      </a>

      <a
        href="#projects"
        className="
          font-mono 
          text-[#ff2f3f]
          transition-all duration-200
          hover:opacity-70
        "
      >
        //{translations.nav.projects}
      </a>

      <a
        href="#career"
        className="
          font-mono 
          text-[#ff2f3f]
          transition-all duration-200
          hover:opacity-70
        "
      >
        //{translations.nav.career}
      </a>

      <a
        href="#contact"
        className="
          font-mono 
          text-[#ff2f3f]
          transition-all duration-200
          hover:opacity-70
        "
      >
        //{translations.nav.contact}
      </a>
    </div>
  </nav>

  <div className="flex items-center gap-3">
    <LanguageSelector />
    <ThemeToggle />
  </div>
</header>
  );
}

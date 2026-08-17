"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    setIsDark(nextTheme);

    document.documentElement.classList.toggle("dark", nextTheme);

    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative flex h-9 w-16 items-center
        rounded-full
        border border-[#ff2f3f]/20
        bg-[#fff9ee]/80
        p-1
        dark:bg-[#120b0b]/80
      "
    >
      <motion.div
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="
          flex h-7 w-7 items-center justify-center
          rounded-full
          bg-[#ff2f3f]
          text-[#fff9ee]
        "
      >
        {isDark ? (
          <Moon size={15} strokeWidth={2.5} />
        ) : (
          <Sun size={15} strokeWidth={2.5} />
        )}
      </motion.div>
    </button>
  );
}
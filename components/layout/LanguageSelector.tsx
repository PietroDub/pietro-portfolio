"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "pt">("en");

  function selectLanguage(value: "en" | "pt") {
    setLanguage(value);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-1.5
          font-mono text-sm
          text-[#ff2f3f]
          transition-opacity
          hover:opacity-70
        "
      >
        <span>{language.toUpperCase()}</span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 top-8
              flex min-w-20 flex-col
              overflow-hidden
              rounded-xl
              border border-[#ff2f3f]/20
              bg-[#fff9ee]/95
              p-1
              shadow-lg
              backdrop-blur-md
              dark:bg-[#120b0b]/95
            "
          >
            <button
              onClick={() => selectLanguage("en")}
              className="
                rounded-lg px-3 py-2
                text-left font-mono text-xs
                text-[#ff2f3f]
                hover:bg-[#ff2f3f]/10
              "
            >
              EN
            </button>

            <button
              onClick={() => selectLanguage("pt")}
              className="
                rounded-lg px-3 py-2
                text-left font-mono text-xs
                text-[#ff2f3f]
                hover:bg-[#ff2f3f]/10
              "
            >
              PT
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
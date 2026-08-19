"use client";

import { motion } from "motion/react";
import { Project } from "@/Types/Project";

type ProjectPreviewProps = {
  project: Project;
  variant: "active" | "side";
  direction: "next" | "prev";
};

export default function ProjectPreview({
  project,
  variant,
  direction,
}: ProjectPreviewProps) {
  const isActive = variant === "active";

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        x: direction === "next" ? 80 : -80,
        scale: 0.85,
      }}
      animate={{
        opacity: isActive ? 1 : 0.55,
        x: 0,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative
        shrink-0
        overflow-hidden
        bg-[#5b0c0c]

        ${
          isActive
            ? "h-[300px] w-[520px]"
            : "h-[240px] w-[180px]"
        }
      `}
    >
      {/* Imagem */}
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-80
          transition-transform
          duration-500
          hover:scale-105
        "
      />

      {/* Overlay vermelho */}
      <div
        className="
          absolute
          inset-0
          bg-[#5b0c0c]/50
          transition-all
          duration-300
          hover:bg-[#5b0c0c]/30
        "
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          px-4
        "
      >
        <h3
          className={`
            font-sans
            font-semibold
            uppercase
            text-[#ff2f3f]
            drop-shadow-[2px_2px_0px_#120b0b]
            transition-all
            duration-500

            ${
              isActive
                ? "text-3xl md:text-4xl"
                : "text-xl md:text-2xl"
            }
          `}
        >
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}
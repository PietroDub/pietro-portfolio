"use client";

import { useRef, useState } from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import { Project } from "../../Types/Project";
import ProjectPreview from "./ProjectPreview";
import { ProjectInfo } from "./ProjectInfo";

const data: Project[] = [
  {
    title: "AnimeHub",
    description:
      "Full-stack platform for managing anime lists, ratings, favorites and watching progress.",
    image: "/projects/animehub.png",
    technologies: [
      "Next.js",
      "TypeScript",
      ".NET",
      "MongoDB",
    ],
    status: "live",
    links: {
      github: "GITHUB_ANIMEHUB_FRONT",
      frontend: "GITHUB_ANIMEHUB_BACKEND",
      demo: "ANIMEHUB_LIVE",
      api: "ANIMEHUB_API",
    },
  },

  {
    title: "DampCode",
    description:
      "Web application developed with React and a .NET backend.",
    image: "/projects/dampcode.png",
    technologies: [
      "React",
      "TypeScript",
      ".NET",
      "MongoDB",
    ],
    status: "source",
    links: {
      github: "GITHUB_DAMPCODE_FRONT",
      api: "GITHUB_DAMPCODE_API",
    },
  },

  {
    title: "FogoBaixo",
    description:
      "Interactive recipe platform focused on healthy and personalized food experiences.",
    image: "/projects/fogobaixo.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
    ],
    status: "source",
    links: {
      github: "GITHUB_FOGOBAIXA",
    },
  },

  {
    title: "Portfolio",
    description:
      "Personal portfolio focused on development, projects and technical skills.",
    image: "/projects/Portfolio (1).png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Three.js",
    ],
    status: "live",
    links: {
      github: "GITHUB_PORTFOLIO",
      demo: "PORTFOLIO_LIVE",
    },
  },
];

export default function MainProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const touchStartX = useRef<number | null>(null);
  // const touchEndX = useRef<number | null>(null);

  const previousIndex =
    (activeIndex - 1 + data.length) % data.length;

  const nextIndex =
    (activeIndex + 1) % data.length;

  function handlePrevious() {
    setDirection("prev");
    setActiveIndex(previousIndex);
  }

  function handleNext() {
    setDirection("next");
    setActiveIndex(nextIndex);
  }

  function handleSelect(index: number) {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  }

  /*
   * =========================
   * SWIPE MOBILE
   * =========================
   */

function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
  touchStartX.current = event.touches[0].clientX;
}

function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
  if (touchStartX.current === null) return;

  const touchEndX = event.changedTouches[0].clientX;

  const distance = touchStartX.current - touchEndX;

  const minimumSwipeDistance = 50;

  if (Math.abs(distance) >= minimumSwipeDistance) {
    if (distance > 0) {
      // Swipe para esquerda → próximo
      handleNext();
    } else {
      // Swipe para direita → anterior
      handlePrevious();
    }
  }

  touchStartX.current = null;
}

  const previousProject = data[previousIndex];
  const currentProject = data[activeIndex];
  const nextProject = data[nextIndex];

  return (
    <section
      id="projects"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        px-6
        pt-28
        md:px-12
        lg:px-20
      "
    >
      {/* Título */}
      <h2
        className="
          font-sans
          text-4xl
          font-bold
          uppercase
          text-[#ff2f3f]
          drop-shadow-[2px_2px_0px_#8f1111]
          md:text-5xl
        "
      >
        Projects:
      </h2>

      {/* =========================
          CARROSSEL
          ========================= */}
      <div
        style={{ touchAction: "pan-y" }}
        className="
          relative
          mt-10
          flex
          w-full
          items-center
          justify-center
          overflow-hidden

          md:overflow-visible
          lg:mt-14
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Seta esquerda */}
        <div
          className="
            absolute
            left-1
            top-1/2
            z-30
            -translate-y-1/2

            md:left-0
            lg:-left-4
          "
        >
          <ButtonLeft onClick={handlePrevious} />
        </div>

        {/* Projeto anterior */}
        <div className="hidden md:block">
          <ProjectPreview
            key={`previous-${previousProject.title}`}
            project={previousProject}
            variant="side"
            direction={direction}
          />
        </div>

        {/* Projeto atual */}
        <ProjectPreview
          key={`current-${currentProject.title}`}
          project={currentProject}
          variant="active"
          direction={direction}
        />

        {/* Próximo projeto */}
        <div className="hidden md:block">
          <ProjectPreview
            key={`next-${nextProject.title}`}
            project={nextProject}
            variant="side"
            direction={direction}
          />
        </div>

        {/* Seta direita */}
        <div
          className="
            absolute
            right-1
            top-1/2
            z-30
            -translate-y-1/2

            md:right-0
            lg:-right-4
          "
        >
          <ButtonRight onClick={handleNext} />
        </div>
      </div>

      {/* =========================
          INFORMAÇÕES
          ========================= */}
      <ProjectInfo
        key={currentProject.title}
        project={currentProject}
      />

      {/* =========================
          INDICADORES
          ========================= */}
      <div className="mt-6 flex justify-center gap-3">
        {data.map((project, index) => (
          <button
            key={project.title}
            onClick={() => handleSelect(index)}
            aria-label={`Go to ${project.title}`}
            className={`
              h-3
              rounded-full
              transition-all
              duration-300

              ${
                index === activeIndex
                  ? "w-12 bg-[#ff2f3f]"
                  : "w-8 bg-[#8f1111]"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
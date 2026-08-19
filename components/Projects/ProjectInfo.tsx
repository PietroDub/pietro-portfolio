import { Project, ProjectInfoProps } from "@/Types/Project";

export function ProjectInfo({
  project,
}: ProjectInfoProps) {
  return (
    <div
      className="
        mx-auto
        mt-6
        flex
        w-full
        max-w-2xl
        flex-col
        items-center
        text-center
      "
    >
      {/* Status */}
      <span
        className="
          font-mono
          text-xs
          uppercase
          tracking-widest
          text-[#ff2f3f]
        "
      >
        {project.status === "live"
          ? "● LIVE"
          : "● SOURCE"}
      </span>

      {/* Descrição */}
      <p
        className="
          mt-3
          max-w-xl
          font-mono
          text-xs
          leading-relaxed
          text-[#ff2f3f]
          md:text-sm
        "
      >
        {project.description}
      </p>

      {/* Tecnologias */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="
              font-mono
              text-[10px]
              uppercase
              text-[#8f1111]
              md:text-xs
            "
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Ações */}
      <div className="mt-5 flex items-center gap-3">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border-2
              border-[#ff2f3f]
              px-6
              py-3
              font-mono
              text-sm
              font-bold
              uppercase
              text-[#ff2f3f]
              transition-all
              duration-200
              hover:bg-[#ff2f3f]
              hover:text-[#fff9ee]
            "
          >
            {project.status === "live"
              ? "View Project"
              : "View Code"}
          </a>
        )}

        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-mono
              text-sm
              text-[#ff2f3f]
              transition-opacity
              hover:opacity-60
            "
          >
            &lt;&gt; GitHub
          </a>
        )}

        {project.links.api && (
          <a
            href={project.links.api}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-mono
              text-sm
              text-[#ff2f3f]
              transition-opacity
              hover:opacity-60
            "
          >
            API
          </a>
        )}
      </div>
    </div>
  );
}
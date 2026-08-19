export default function MainCarrer() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Academic Startup Project",
      period: "2025 — Present",
      description:
        "Full-stack system development using .NET, React.js, MySQL and MongoDB in an academic startup simulation.",
      highlights: [
        "REST APIs with C# and .NET",
        "SQL and NoSQL database integration",
        "Frontend development with React.js",
        "Technical leadership using Scrum/Kanban",
      ],
    },
    {
      role: "Automation & Video Editing",
      company: "Freelancer",
      period: "2022 — Present",
      description:
        "Development of Python automations to optimize video editing workflows and reduce repetitive manual tasks.",
      highlights: [
        "Process automation with PyAutoGUI",
        "Automatic file organization",
        "Reduced operational time from ~2h/day to ~30min",
        "Contributed to channels with 1M+ monthly views",
      ],
    },
  ];

  const education = [
    {
      course: "Software Engineering",
      institution: "UNISAGRADO",
      period: "2025 — 2028",
    },
    {
      course: "Multiplatform Software Development",
      institution: "FATEC",
      period: "2025 — 2027",
    },
    {
      course: "Systems Analysis and Development",
      institution: "SENAI Jaú",
      period: "2023 — 2024",
    },
  ];

  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "C#",
    ".NET",
    "ASP.NET Core",
    "REST APIs",
    "SQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Three.js",
  ];

  const languages = [
    "English — Advanced",
    "Portuguese — Native",
  ];

  const certifications = [
    "Software Development — UNISAGRADO",
    "Systems Analysis and Development — SENAI",
    "C# and .NET — Rocketseat",
    "English B2 — TOEIC",
  ];

  return (
    <section
      id="career"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        px-6
        pt-28
        pb-20
        md:px-12
        lg:px-20
      "
    >
      {/* Header */}
      <div className="mb-10">
        <h2
          className="
            font-sans
            text-5xl
            font-bold
            uppercase
            text-[#ff2f3f]
            drop-shadow-[3px_3px_0px_#8f1111]
            md:text-6xl
          "
        >
          Career:
        </h2>

        <p
          className="
            mt-3
            font-mono
            text-sm
            text-[#ff2f3f]
            md:text-base
          "
        >
          // My professional journey, education and skills.
        </p>
      </div>

      {/* EXPERIENCE + EDUCATION */}
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-8
          lg:grid-cols-2
        "
      >
        {/* EXPERIENCE */}
        <div
          className="
            border
            border-[#8f1111]/40
            bg-[#5b0c0c]/5
          "
        >
          <div
            className="
              border-b
              border-[#8f1111]/40
              px-6
              py-4
            "
          >
            <h3
              className="
                font-mono
                text-2xl
                font-bold
                uppercase
                text-[#ff2f3f]
              "
            >
              Experience
            </h3>
          </div>

          <div className="space-y-8 p-6">
            {experiences.map((experience, index) => (
              <article
                key={experience.role}
                className="
                  relative
                  border-l-2
                  border-[#ff2f3f]/50
                  pl-6
                "
              >
                {/* marcador */}
                <span
                  className="
                    absolute
                    -left-[7px]
                    top-1
                    h-3
                    w-3
                    bg-[#ff2f3f]
                  "
                />

                <p
                  className="
                    font-mono
                    text-xs
                    text-[#ff2f3f]
                  "
                >
                  0{index + 1}
                </p>

                <h4
                  className="
                    mt-2
                    font-mono
                    text-xl
                    font-bold
                    text-[#8f1111]
                    dark:text-[#ff2f3f]
                  "
                >
                  {experience.role}
                </h4>

                <p
                  className="
                    mt-1
                    font-mono
                    text-sm
                    text-[#ff2f3f]
                  "
                >
                  {experience.company}
                </p>

                <p
                  className="
                    mt-1
                    font-mono
                    text-xs
                    text-[#8f1111]/70
                    dark:text-[#fff9ee]/60
                  "
                >
                  {experience.period}
                </p>

                <p
                  className="
                    mt-4
                    font-mono
                    text-sm
                    leading-relaxed
                    text-[#8f1111]
                    dark:text-[#fff9ee]
                  "
                >
                  {experience.description}
                </p>

                <ul
                  className="
                    mt-4
                    space-y-2
                    font-mono
                    text-xs
                    text-[#8f1111]
                    dark:text-[#fff9ee]/80
                  "
                >
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span className="mr-2 text-[#ff2f3f]">
                        &gt;
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div
          className="
            border
            border-[#8f1111]/40
            bg-[#5b0c0c]/5
          "
        >
          <div
            className="
              border-b
              border-[#8f1111]/40
              px-6
              py-4
            "
          >
            <h3
              className="
                font-mono
                text-2xl
                font-bold
                uppercase
                text-[#ff2f3f]
              "
            >
              Education
            </h3>
          </div>

          <div className="space-y-8 p-6">
            {education.map((item, index) => (
              <article
                key={item.course}
                className="
                  relative
                  border-l-2
                  border-[#ff2f3f]/50
                  pl-6
                "
              >
                <span
                  className="
                    absolute
                    -left-[7px]
                    top-1
                    h-3
                    w-3
                    bg-[#ff2f3f]
                  "
                />

                <p
                  className="
                    font-mono
                    text-xs
                    text-[#ff2f3f]
                  "
                >
                  0{index + 1}
                </p>

                <h4
                  className="
                    mt-2
                    font-mono
                    text-xl
                    font-bold
                    text-[#8f1111]
                    dark:text-[#ff2f3f]
                  "
                >
                  {item.course}
                </h4>

                <p
                  className="
                    mt-1
                    font-mono
                    text-sm
                    text-[#ff2f3f]
                  "
                >
                  {item.institution}
                </p>

                <p
                  className="
                    mt-1
                    font-mono
                    text-xs
                    text-[#8f1111]/70
                    dark:text-[#fff9ee]/60
                  "
                >
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* HARD SKILLS */}
      <div
        className="
          mt-8
          border
          border-[#8f1111]/40
          bg-[#5b0c0c]/5
        "
      >
        <div
          className="
            border-b
            border-[#8f1111]/40
            px-6
            py-4
          "
        >
          <h3
            className="
              font-mono
              text-2xl
              font-bold
              uppercase
              text-[#ff2f3f]
            "
          >
            Hard Skills
          </h3>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-3
            p-6
            sm:grid-cols-3
            md:grid-cols-4
          "
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                border
                border-[#ff2f3f]/40
                px-4
                py-3
                font-mono
                text-sm
                text-[#8f1111]
                transition-all
                duration-200
                hover:border-[#ff2f3f]
                hover:bg-[#ff2f3f]
                hover:text-[#fff9ee]
                dark:text-[#fff9ee]
              "
            >
              {skill}
              <span className="text-[#ff2f3f]"> _</span>
            </div>
          ))}
        </div>

        {/* Languages + Certifications */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-t
            border-[#8f1111]/40
            p-6
            md:grid-cols-2
          "
        >
          {/* Languages */}
          <div>
            <h4
              className="
                mb-4
                font-mono
                text-lg
                font-bold
                uppercase
                text-[#ff2f3f]
              "
            >
              Languages
            </h4>

            <div className="space-y-2">
              {languages.map((language) => (
                <p
                  key={language}
                  className="
                    font-mono
                    text-sm
                    text-[#8f1111]
                    dark:text-[#fff9ee]
                  "
                >
                  <span className="text-[#ff2f3f]">&gt;</span>{" "}
                  {language}
                </p>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4
              className="
                mb-4
                font-mono
                text-lg
                font-bold
                uppercase
                text-[#ff2f3f]
              "
            >
              Certifications
            </h4>

            <div className="space-y-2">
              {certifications.map((certification) => (
                <p
                  key={certification}
                  className="
                    font-mono
                    text-sm
                    text-[#8f1111]
                    dark:text-[#fff9ee]
                  "
                >
                  <span className="text-[#ff2f3f]">&gt;</span>{" "}
                  {certification}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
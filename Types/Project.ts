export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: "live" | "source";

  links: {
    github?: string;
    demo?: string;
    api?: string;
    frontend?: string;
  };
};

export type ProjectInfoProps = {
  project: Project;
};

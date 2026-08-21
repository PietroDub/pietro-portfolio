export const translations = {
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      career: "Career",
      contact: "Contact",
    },

    hero: {
      greeting: "Hi my name is",
      title: "Pietro Vito",
      subtitle: "I DO SOME THINGS ON WEB",
      description:
        "Full-Stack Web Developer, constantly improving my skills and bringing my best to every project. Take a look at my work.",
      button: "Let's Work!",
    },

    projects: {
      title: "Projects:",
    },

    career: {
      title: "Career:",
      experience: "Experience",
      education: "Education",
      skills: "Hard Skills",
    },

    contact: {
      title: "Contact:",
      email: "Your email...",
      message: "Your message here...",
      send: "Send",
    },
  },

  pt: {
    nav: {
      about: "Sobre Mim",
      projects: "Projetos",
      career: "Carreira",
      contact: "Contato",
    },

    hero: {
      greeting: "Olá, meu nome é",
      title: "Pietro Vito",
      subtitle: "EU FAÇO ALGUMAS COISAS NA WEB",
      description:
        "Desenvolvedor Full-Stack, sempre aprimorando minhas habilidades e dando o meu melhor em cada projeto. Confira meu trabalho.",
      button: "Vamos Trabalhar!",
    },

    projects: {
      title: "Projetos:",
    },

    career: {
      title: "Carreira:",
      experience: "Experiência",
      education: "Educação",
      skills: "Hard Skills",
    },

    contact: {
      title: "Contato:",
      email: "Seu e-mail...",
      message: "Sua mensagem...",
      send: "Enviar",
    },
  },
};

export type Language = keyof typeof translations;
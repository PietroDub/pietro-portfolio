import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/PietroDub",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/pietroviton/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pietro-vito/",
    icon: FaLinkedinIn,
  },
  {
    name: "Resume",
    href: "/documents/CurrículoPietroVito.pdf",
    icon: FaPaperclip,
  },
];

export default function SocialLinks() {
  return (
    <nav
  aria-label="Social links"
  className="
    fixed
    bottom-4
    left-1/2
    z-50
    -translate-x-1/2

    flex
    items-center
    gap-2

    rounded-full
    border-2
    border-[#ff2f3f]
    bg-[#fff9ee]/90
    px-3
    py-2

    shadow-[0_4px_0px_#ff2f3f]
    backdrop-blur-md

    transition-all
    duration-300
    ease-out

    hover:-translate-y-1
    hover:shadow-[0_7px_0px_#8f1111]

    dark:bg-[#120b0b]/90

    sm:bottom-6
    sm:gap-3
    sm:px-4
    sm:py-2.5
  "
>
  {socialLinks.map(({ name, href, icon: Icon }) => (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      download={"PietroVito.pdf"}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full

        bg-[#ff2f3f]
        text-[#fff9ee]

        transition-all
        duration-200
        ease-out

        hover:scale-110
        hover:bg-[#8f1111]
        hover:shadow-[0_0_12px_#ff2f3f]

        active:scale-95

        sm:h-10
        sm:w-10
      "
    >
      <Icon className="h-5 w-5 transition-transform duration-200 group-hover:rotate-6" />
    </a>
  ))}
</nav>
  );
}
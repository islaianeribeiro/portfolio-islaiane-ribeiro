import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const socialLinks = [
  {
    url: "mailto:islaiane.lribeiro@gmail.com",
    icon: <TfiEmail />,
    ariaLabel: "Enviar e-mail para Islaiane Ribeiro",
  },
  {
    url: "https://www.linkedin.com/in/islaianeribeiro",
    icon: <FaLinkedin />,
    ariaLabel: "Visitar perfil de Islaiane Ribeiro no LinkedIn",
  },
  {
    url: "https://github.com/islaianeribeiro",
    icon: <FaGithub />,
    ariaLabel: "Ver repositórios de Islaiane Ribeiro no GitHub",
  },
];

export default function SocialLinks() {
  return (
    <div>
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target="_blank"
          className="inline-flex px-3 py-3 mx-2 my-4 text-lg font-semibold bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:-translate-y-1  hover:shadow-[0_0_0.8rem_#4b7c84]"
          aria-label={item.ariaLabel}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    url: "https://www.instagram.com/_islaianeribeiro/#",
    icon: <FaInstagram />,
  },
  {
    url: "https://www.linkedin.com/in/islaianeribeiro",
    icon: <FaLinkedin />,
  },
  {
    url: "https://github.com/islaianeribeiro",
    icon: <FaGithub />,
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
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

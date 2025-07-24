import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    url: "https://www.instagram.com/_islaianeribeiro/#",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    url: "https://www.linkedin.com/in/islaianeribeiro",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    url: "https://github.com/islaianeribeiro",
    icon: <FontAwesomeIcon icon={faGithub} />,
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
          className="inline-flex px-3 py-3 mx-2 my-4 text-lg font-semibold bg-accent text-light border-0 rounded-md cursor-pointer no-underline transition duration-200 hover:shadow-[0_0_0.8rem_#4b7c84] hover:-translate-y-1"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

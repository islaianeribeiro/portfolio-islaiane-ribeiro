import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJest, SiMongodb, SiVite } from "react-icons/si";

const tecnologias = [
  {
    nome: "HTML",
    icon: <FaHtml5 className="w-9 h-9" />,
    descricao: "Linguagem de marcação para criar a estrutura de páginas web.",
  },
  {
    nome: "CSS",
    icon: <FaCss3 className="w-9 h-9" />,
    descricao:
      "Estilização de páginas HTML com cores, layouts e responsividade.",
  },
  {
    nome: "JavaScript",
    icon: <FaJs className="w-9 h-9" />,
    descricao: "Linguagem de programação para interatividade no front-end.",
  },
  {
    nome: "TypeScript",
    icon: <BiLogoTypescript className="w-9 h-9" />,
    descricao: "JavaScript com tipagem estática para apps mais seguros.",
  },
  {
    nome: "TailwindCSS",
    icon: <RiTailwindCssFill className="w-9 h-9" />,
    descricao: "Framework CSS utilitário para estilizar com classes.",
  },
  {
    nome: "ReactJS",
    icon: <FaReact className="w-9 h-9" />,
    descricao: "Biblioteca JS para criar interfaces reativas e escaláveis.",
  },
  {
    nome: "NextJS",
    icon: <RiNextjsFill className="w-9 h-9" />,
    descricao: "Framework React com SSR, rotas e performance otimizada.",
  },
  {
    nome: "Vite",
    icon: <SiVite className="w-9 h-9" />,
    descricao: "Ferramenta moderna de build para projetos frontend rápidos.",
  },
  {
    nome: "Git",
    icon: <FaGitAlt className="w-9 h-9" />,
    descricao:
      "Sistema de controle de versão para rastrear mudanças no código.",
  },
  {
    nome: "GitHub",
    icon: <FaGithub className="w-9 h-9" />,
    descricao: "Plataforma para hospedagem e colaboração em projetos com Git.",
  },
  {
    nome: "MongoDB",
    icon: <SiMongodb className="w-9 h-9" />,
    descricao: "Banco de dados NoSQL baseado em documentos.",
  },
  {
    nome: "Jest",
    icon: <SiJest className="w-9 h-9" />,
    descricao: "Framework de testes para aplicações JavaScript.",
  },
  {
    nome: "NodeJS",
    icon: <FaNode className="w-9 h-9" />,
    descricao: "Ambiente para rodar JavaScript no backend.",
  },
];

export default function Skills() {
  return (
    <>
      <div className="w-1/2">
        <h2 className="text-3xl uppercase text-center text-dark dark:text-light mb-6">
          MINHAS <span className="text-accent">HABILIDADES.</span>
        </h2>
        <div className="flex flex-col gap-5 h-full text-dark dark:text-light">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tecnologias.map((item, index) => (
              <div
                key={index}
                className="group [perspective:1000px] w-30 aspect-square"
              >
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-lg flex flex-col justify-center items-center [backface-visibility:hidden]">
                    <span className="text-3xl mb-1 text-accent">
                      {item.icon}
                    </span>
                    <p className="text-sm">{item.nome}</p>
                  </div>

                  <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-inner flex flex-col justify-center items-center p-2 text-xs text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {item.descricao}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

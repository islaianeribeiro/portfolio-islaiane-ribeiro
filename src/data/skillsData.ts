import { IconType } from "react-icons";
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

export interface SkillsDataProps {
  nome: string;
  icon: IconType;
  descricao: string;
}

export const skillsData: SkillsDataProps[] = [
  {
    nome: "HTML",
    icon: FaHtml5,
    descricao: "Linguagem de marcação para criar a estrutura de páginas web.",
  },
  {
    nome: "CSS",
    icon: FaCss3,
    descricao:
      "Estilização de páginas HTML com cores, layouts e responsividade.",
  },
  {
    nome: "JavaScript",
    icon: FaJs,
    descricao: "Linguagem de programação para interatividade no front-end.",
  },
  {
    nome: "TypeScript",
    icon: BiLogoTypescript,
    descricao: "JavaScript com tipagem estática para apps mais seguros.",
  },
  {
    nome: "TailwindCSS",
    icon: RiTailwindCssFill,
    descricao: "Framework CSS utilitário para estilizar com classes.",
  },
  {
    nome: "ReactJS",
    icon: FaReact,
    descricao: "Biblioteca JS para criar interfaces reativas e escaláveis.",
  },
  {
    nome: "NextJS",
    icon: RiNextjsFill,
    descricao: "Framework React com SSR, rotas e performance otimizada.",
  },
  {
    nome: "Vite",
    icon: SiVite,
    descricao: "Ferramenta moderna de build para projetos frontend rápidos.",
  },
  {
    nome: "Git",
    icon: FaGitAlt,
    descricao:
      "Sistema de controle de versão para rastrear mudanças no código.",
  },
  {
    nome: "GitHub",
    icon: FaGithub,
    descricao: "Plataforma para hospedagem e colaboração em projetos com Git.",
  },
  {
    nome: "MongoDB",
    icon: SiMongodb,
    descricao: "Banco de dados NoSQL baseado em documentos.",
  },
  {
    nome: "Jest",
    icon: SiJest,
    descricao: "Framework de testes para aplicações JavaScript.",
  },
  {
    nome: "NodeJS",
    icon: FaNode,
    descricao: "Ambiente para rodar JavaScript no backend.",
  },
];

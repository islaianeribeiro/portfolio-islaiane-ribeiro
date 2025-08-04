import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Project {
  id: string;
  nome: string;
  descricaoCurta: string;
  capa: string;
  linkRepositorio: string;
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col justify-around h-108 bg-light dark:bg-dark border border-dark dark:border-light rounded-[1.2rem] p-4 text-dark dark:text-light text-center hover:shadow-[0_0_1.5rem_#4b7c84]">
      <Image
        src={project.capa}
        alt={`Imagem do projeto ${project.nome}`}
        className="w-full h-48 object-fill rounded-md mb-2 border border-dark dark:border-light"
        width={200}
        height={200}
      />
      <h3 className="text-base md:text-xl font-semibold text-accent">
        {project.nome}
      </h3>
      <p className="text-sm text-justify">{project.descricaoCurta}</p>
      <div className="project-links">
        <a
          href={project.linkRepositorio}
          target="_blank"
          className="inline-flex px-2 py-2 m-0.5 text-sm bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:bg-white hover:text-accent"
        >
          GitHub
        </a>
        <Link
          href={`/project/${project.id}`}
          className="inline-flex px-2 py-2 m-1 text-sm bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:bg-white hover:text-accent"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

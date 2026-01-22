import Image from "next/image";
import { FC } from "react";
import { ProjectActions } from "./ProjectActions";

interface Project {
  id: string;
  nome: string;
  descricaoCurta: string;
  imagens: string;
  linkRepositorio: string;
  linkDeploy: string;
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between bg-gradient-to-br from-accent-2 to-light border border-accent-3/30 min-h-[436px] xl:min-h-[400px] rounded-lg overflow-hidden text-dark text-center hover:shadow-[0_0_1.5rem_#4b7c84]">
      <div className="w-full h-50 overflow-hidden">
        <Image
          src={project.imagens[0]}
          alt={`Imagem do projeto ${project.nome}`}
          className="w-full h-full object-fill hover:scale-105"
          width={200}
          height={200}
        />
      </div>

      <h3 className="pt-2 text-lg lg:text-xl font-bold text-accent">
        {project.nome}
      </h3>
      <p className="px-5 text-justify">{project.descricaoCurta}</p>

      <ProjectActions project={project} />
    </div>
  );
};

export default ProjectCard;

import { ParticlesBackground } from "@/components/common/ParticlesBackground";
import Button from "@/components/ui/Button";
import CustomCarousel from "@/components/ui/CustomCarousel";
import projects from "@/data/projects";
import Image from "next/image";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { use } from "react";
import { ThemeToggle } from "@/components/ui";

export default function ProjetoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  // Converte o id do projeto para string antes de comparar
  const projeto = projects.find((p) => String(p.id) === id);
  if (!projeto) {
    return <div className="p-6">Projeto não encontrado.</div>;
  }

  const secoes = [
    { titulo: "Principais funcionalidades:", itens: projeto.funcionalidades },
    { titulo: "Destaques técnicos:", itens: projeto.destaquesTecnicos },
  ];
  return (
    <>
      <ParticlesBackground />

      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2.5">
            <div>
              <Button
                className="flex justify-center items-center p-2.5 bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:text-accent-2"
                href="/#projects"
                icon={<FaArrowRightToBracket className="scale-x-[-1]" />}
                ariaLabel="Ir para seção de projetos"
              />
            </div>
            <h1 className="text-xl md:text-3xl font-bold text-accent">
              {projeto.nome}
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="relative w-full mb-4">
          <CustomCarousel slidesPerView={1} breakpoints={{}}>
            {projeto.imagens.map((item, index) => (
              <Image
                className="rounded-2xl"
                key={index}
                src={item}
                alt={`Imagem do projeto ${projeto.nome}`}
                width={848}
                height={426}
              />
            ))}
          </CustomCarousel>
        </div>

        <div className="text-black dark:text-light">
          <p className="text-sm md:text-base mb-4">{projeto.introducao}</p>

          {secoes.map((secao, index) => (
            <div key={index}>
              <h2 className="text-lg text-accent md:text-xl font-semibold mt-4">
                {secao.titulo}
              </h2>
              <ul className="list-disc list-inside ml-2 space-y-1">
                {secao.itens.map((item, i) => (
                  <li className="text-sm md:text-base" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-sm md:text-base my-4">{projeto.conclusao}</p>

          <Button
            className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-medium bg-accent text-light rounded-md transition-all duration-300 hover:bg-white hover:text-accent hover:shadow-lg"
            href={projeto.linkRepositorio}
            text="Repositório do projeto"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}

import { ParticlesBackground } from "@/components/common";
import Button from "@/components/ui/Button";
import CustomCarousel from "@/components/ui/CustomCarousel";
import ThemeToggle from "@/components/ui/ThemeToggle";
import projects from "@/data/projects.json";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  params: { id: string };
}

export default async function ProjetoPage({ params }: Props) {
  // Caso o 'params' seja uma Promise, espere ela:
  const resolvedParams = await params;

  const projeto = projects.find((p) => p.id === resolvedParams.id);

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
      <ThemeToggle />

      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center mb-4 gap-2.5">
          <div>
            <Button
              className="flex justify-center items-center p-2.5 bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:bg-white hover:text-accent"
              href="/#projects"
              icon={
                <FontAwesomeIcon
                  className="w-5 h-5 scale-x-[-1]"
                  icon={faArrowRightToBracket}
                />
              }
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-accent">
            {projeto.nome}
          </h1>
        </div>

        <div className="mb-5">
          <div>
            <CustomCarousel slidesPerView={1} breakpoints={{}}>
              {projeto.imagens.map((item, index) => (
                <img
                  className="rounded-2xl"
                  key={index}
                  src={item}
                  alt={`Imagem do projeto ${projeto.nome}`}
                />
              ))}
            </CustomCarousel>
          </div>
        </div>

        <div className="text-black dark:text-light">
          <p className="text-sm md:text-base mb-4">{projeto.introducao}</p>

          {secoes.map((secao, index) => (
            <div key={index}>
              <h2 className="text-lg md:text-xl text-accent mt-4 first:mt-0">
                {secao.titulo}
              </h2>
              <ul className="list-disc ml-5">
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
            className="inline-flex px-2 py-2 m-1 text-sm bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:bg-white hover:text-accent"
            href={projeto.linkRepositorio}
            text="Repositório do projeto"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}

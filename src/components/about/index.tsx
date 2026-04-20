import Image from "next/image";
import avatarIslaiane from "@/assets/avatar.png";

const paragrafos = [
  "Sou Desenvolvedora Front-End formada em Análise e Desenvolvimento de Sistemas, com foco na criação de interfaces modernas, acessíveis e responsivas, sempre priorizando a clareza e a experiência do usuário.",
  "Tenho experiência prática com React, Next.js, JavaScript e TypeScript, além de desenvolvimento de interfaces integradas a APIs, versionamento com Git e aplicação de boas práticas de componentização, performance e UI/UX.",
  "Estou disponível para projetos freelance, desenvolvendo soluções digitais sob medida, e também em busca de uma oportunidade como Desenvolvedora Front-End Júnior, onde eu possa contribuir com o time e continuar evoluindo profissionalmente.",
];

export default function About() {
  return (
    <div className="px-2.5" data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full text-dark dark:text-light overflow-x-hidden">
        <div data-aos="fade-right">
          <Image
            className="w-70 h-70 md:w-80 md:h-80 object-contain rounded-full"
            src={avatarIslaiane}
            alt="Avatar ilustrado representando Islaiane Ribeiro"
            width={300}
            height={300}
          />
        </div>
        <div data-aos="fade-left" className="w-full md:w-3/5 pt-3">
          <h2 className="text-2xl md:text-3xl leading-10">
            MUITO PRAZER,{" "}
            <span className="text-accent block">SOU ISLAIANE RIBEIRO.</span>
          </h2>

          {paragrafos.map((texto, index) => (
            <p key={index} className="my-5 mx-0 text-base text-justify">
              {texto}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

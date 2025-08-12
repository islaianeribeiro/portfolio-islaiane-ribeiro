import Image from "next/image";

const paragrafos = [
  "Olá! Sou Islaiane Ribeiro, Desenvolvedora Front-End formada em Análise e Desenvolvimento de Sistemas. Tenho experiência prática na criação de interfaces modernas, acessíveis e responsivas, com foco em oferecer uma boa experiência ao usuário final.",
  "Possuo conhecimento sólido em HTML, CSS, JavaScript, TypeScript, React.js, Next.js e Tailwind CSS. Também tenho experiência com consumo de APIs REST, versionamento com Git/GitHub e aplicação de boas práticas de componentização, UI/UX e performance. Sou organizada, comunicativa, tenho facilidade em aprender novas tecnologias e tenho familiaridade com metodologias ágeis como Scrum.",
  "Atualmente, estou em busca da minha primeira oportunidade como Desenvolvedora Front-End Júnior. Quero contribuir com soluções escaláveis e acessíveis, colaborar com o time e continuar evoluindo profissionalmente na área de tecnologia.",
];

export default function About() {
  return (
    <div className="px-2.5" data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full text-dark dark:text-light overflow-x-hidden">
        <div data-aos="fade-right">
          <Image
            className="w-70 h-70 md:w-80 md:h-80 object-contain rounded-full"
            src="/images/avatar.png"
            alt="Descrição da imagem"
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

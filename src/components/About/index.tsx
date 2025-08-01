import Image from "next/image";

const paragrafos = [
  "Olá! Me chamo Islaiane Ribeiro e sou Desenvolvedora Front-End, apaixonada por transformar ideias em interfaces interativas, acessíveis e de alto desempenho. Busco sempre criar experiências intuitivas e eficientes, combinando tecnologia e design. Tenho conhecimento em JavaScript, TypeScript, React.js, Next.js, HTML, CSS, TailwindCSS. Sou graduanda em Análise e Desenvolvimento de Sistemas (Unopar - conclusão em jun/2025).",
  "Desenvolvo projetos pessoais e acadêmicos aplicando boas práticas como componentização, responsividade e otimização de performance. Também fui selecionada para a fase avançada do Bootcamp Skill+ Santander Open Academy, onde venho aprimorando conhecimentos em Python, DataViz, Inteligência Artificial Generativa e Data Storytelling, além de participar de mentorias e simulações de entrevistas técnicas.",
  "Possuo habilidades em comunicação, resolução de problemas, auto-organização e aprendizado contínuo, adaptando-me rapidamente a novas tecnologias e desafios. Estou em busca da minha primeira oportunidade como desenvolvedora júnior! Caso tenha interesse em colaborar ou trocar experiências, fique à vontade para entrar em contato!",
];

export default function About() {
  return (
    <div className="px-2.5 h-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full text-dark dark:text-light">
        <div>
          <Image
            className="w-70 h-70 md:w-90 md:h-90 object-contain rounded-full"
            src="/images/avatar.png"
            alt="Descrição da imagem"
            width={300}
            height={300}
          />
        </div>
        <div className="w-full md:w-3/5 pt-3">
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

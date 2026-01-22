import { FiSmartphone, FiTool } from "react-icons/fi";
import { FaGlobe, FaBolt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <FiSmartphone className="text-2xl text-light" />,
    title: "Landing Pages",
    description:
      "Desenvolvimento de páginas modernas e responsivas, adaptadas a diferentes dispositivos, com foco em performance, usabilidade e boa apresentação visual.",
  },
  {
    icon: <FaGlobe className="text-2xl text-light" />,
    title: "Portfólios e Sites Pessoais",
    description:
      "Criação de sites personalizados para profissionais e marcas pessoais, com layouts organizados, identidade visual consistente e foco em credibilidade.",
  },
  {
    icon: <FaBolt className="text-2xl text-light" />,
    title: "Aplicações Interativas",
    description:
      "Construção de aplicações web dinâmicas utilizando JavaScript, React e Next.js, priorizando interatividade, organização de código e boa experiência do usuário.",
  },
  {
    icon: <FiTool className="text-2xl text-light" />,
    title: "Otimização de Sites",
    description:
      "Aprimoramento de sites existentes com foco em desempenho, acessibilidade e SEO, buscando melhorar carregamento, usabilidade e estrutura.",
  },
];

export default function Services() {
  return (
    <div className="relative w-full z-10 text-center">
      <h2 className="text-2xl font-semibold md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
        Meus <span className="text-accent">Serviços</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Desenvolvo soluções digitais focadas em interfaces modernas, funcionais
        e responsivas, aplicando boas práticas de front-end e experiência do
        usuário.
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            aosDuration={400 + index * 200}
          />
        ))}
      </div>
    </div>
  );
}

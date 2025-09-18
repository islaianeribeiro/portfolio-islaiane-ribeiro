import { FiSmartphone, FiTool } from "react-icons/fi";
import { FaGlobe, FaBolt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <FiSmartphone className="text-2xl text-light" />,
    title: "Landing Pages",
    description:
      "Desenvolvimento de páginas modernas, rápidas e adaptadas a qualquer dispositivo, com foco em performance e conversão de visitantes em clientes.",
  },
  {
    icon: <FaGlobe className="text-2xl text-light" />,
    title: "Portfólios e Sites Pessoais",
    description:
      "Criação de sites exclusivos e personalizados para destacar sua marca pessoal ou profissional, transmitindo credibilidade e identidade visual.",
  },
  {
    icon: <FaBolt className="text-2xl text-light" />,
    title: "Aplicações Interativas",
    description:
      "Construção de aplicações web dinâmicas e funcionais com JavaScript, React e Next.js, entregando experiências envolventes e intuitivas para o usuário.",
  },
  {
    icon: <FiTool className="text-2xl text-light" />,
    title: "Otimização de Sites",
    description:
      "Melhoria de sites existentes com foco em desempenho, acessibilidade e SEO, garantindo carregamento rápido e melhor experiência para o usuário.",
  },
];

export default function Services() {
  return (
    <div className="relative w-full z-10 text-center">
      <h2 className="text-2xl font-semibold md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
        Meus <span className="text-accent">Serviços</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Ajudo empresas e profissionais a transformarem ideias em experiências
        digitais modernas e funcionais.
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

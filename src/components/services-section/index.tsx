import { FiSmartphone, FiTool } from "react-icons/fi";
import { FaGlobe, FaBolt } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <FaGlobe className="text-2xl text-light" />,
    title: "Sites e Landing Pages",
    description:
      "Desenvolvimento de sites profissionais e páginas de vendas, com design responsivo, boa performance e foco em apresentar seu negócio com clareza.",
  },
  {
    icon: <FiSmartphone className="text-2xl text-light" />,
    title: "Links na Bio Personalizados",
    description:
      "Criação de páginas personalizadas para reunir seus links em um só lugar, com identidade visual e sem mensalidade.",
  },
  {
    icon: <FiTool className="text-2xl text-light" />,
    title: "Otimização e Atualizações",
    description:
      "Melhorias em sites existentes, ajustes de performance, organização e suporte contínuo para manter tudo funcionando bem.",
  },
  {
    icon: <FaBolt className="text-2xl text-light" />,
    title: "Soluções Personalizadas",
    description:
      "Desenvolvimento de soluções sob medida para necessidades específicas, desde páginas simples até aplicações interativas.",
  },
];

export default function Services() {
  return (
    <div className="relative w-full z-10 text-center">
      <h2 className="text-2xl font-semibold md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
        Meus <span className="text-accent">Serviços</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Desenvolvo soluções digitais com foco em interfaces modernas, funcionais
        e responsivas, unindo boa experiência do usuário e organização.
      </p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

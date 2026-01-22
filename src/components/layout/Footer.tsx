import { SocialLinks } from "@/components/ui";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-accent to-light dark:to-dark text-dark dark:text-light p-7.5 lg:px-40 text-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl text-accent font-semibold">Islaiane Ribeiro</p>
        <p className="text-base">
          Desenvolvedora Front-End com foco em React, Next.js e interfaces
          modernas e responsivas.
        </p>
        <SocialLinks />
      </div>
      <div className="mt-5 border-t border-white/10 w-full"></div>
      <div className="flex flex-col mil:flex-row mil:gap-96 p-6 gap-4 items-center justify-center">
        <p className="text-sm text-center">
          ©2025 Islaiane Ribeiro. Todos os direitos reservados.
        </p>
        <p className="text-sm flex gap-1 items-center">
          Feito com ❤️ e um toque de ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;

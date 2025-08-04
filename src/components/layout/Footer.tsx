import { SocialLinks } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-accent to-light dark:to-dark text-dark dark:text-light py-7.5 text-center">
      <div className="flex md:flex-row flex-col mb-3.5 justify-around items-center">
        <h2 className="font-bold text-2xl mb-5 text-accent">
          Islaiane Ribeiro
        </h2>

        <div className="flex justify-center gap-5 mb-5">
          <SocialLinks />
        </div>
      </div>
      <p className="text-sm">
        &copy; 2025 Islaiane Ribeiro. Todos os direitos reservados.
      </p>
    </footer>
  );
}

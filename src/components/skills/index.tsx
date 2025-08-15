import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="w-4/5 xl:w-1/2" data-aos="zoom-out">
      <h2 className="text-2xl font-semibold md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
        MINHAS <span className="text-accent">HABILIDADES.</span>
      </h2>

      <p className="hidden sm:block text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        Passe o mouse sobre os cards para ver mais detalhes sobre cada
        tecnologia.
      </p>

      <p className="block sm:hidden text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        Toque nos cards para ver mais detalhes sobre cada tecnologia.
      </p>

      <SkillCard />
    </div>
  );
}

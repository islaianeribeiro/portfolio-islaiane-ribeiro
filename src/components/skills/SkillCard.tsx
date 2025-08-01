import { IconType } from "react-icons";

type SkillCardProps = {
  nome: string;
  icon: IconType;
  descricao: string;
};

export default function SkillCard({
  nome,
  icon: Icon,
  descricao,
}: SkillCardProps) {
  return (
    <div className="group [perspective:1000px] w-30 aspect-square">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-lg flex flex-col justify-center items-center [backface-visibility:hidden]">
          <Icon className="w-9 h-9 text-accent" />
          <p className="text-sm">{nome}</p>
        </div>
        <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-inner flex flex-col justify-center items-center p-2 text-xs text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {descricao}
        </div>
      </div>
    </div>
  );
}

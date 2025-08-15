"use client";

import { useState } from "react";
import { skillsData } from "./skillsData"; // importando direto aqui

export default function SkillCard() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-dark dark:text-light">
      {skillsData.map((skill, index) => {
        const Flipped = flippedIndex === index;
        return (
          <div
            key={skill.nome}
            className="w-30 aspect-square [perspective:1000px] cursor-pointer group"
            onClick={() => setFlippedIndex(Flipped ? null : index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]
                ${Flipped ? "[transform:rotateY(180deg)]" : ""}
                md:group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Frente */}
              <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-lg flex flex-col justify-center items-center [backface-visibility:hidden]">
                <skill.icon
                  className="w-9 h-9 text-accent"
                  aria-hidden="true"
                />
                <p className="text-sm">{skill.nome}</p>
              </div>

              {/* Verso */}
              <div className="absolute inset-0 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-inner flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-xs text-center p-2">{skill.descricao}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import { Button, SocialLinks } from "@/components/ui";
import TypingText from "./TypingText";
import islaianePhoto from "@/assets/perfil.png";

export default function StartPage() {
  return (
    <div className="w-full" data-aos="fade-up">
      <div className="flex items-center justify-evenly gap-0 h-full dark:text-light ">
        <div className="flex flex-col text-center w-full lg:w-[40%]">
          <h1 className="font-bold text-xl uppercase lg:text-start">
            Muito prazer, me chamo
          </h1>
          <h2 className="text-xl font-bold mb-1.5 uppercase lg:text-start text-accent">
            Islaiane Ribeiro
          </h2>
          <TypingText
            text="Desenvolvedora Front-End apaixonada por tecnologia!"
            speed={80}
          />

          <div className="mt-25">
            <p className="text-center text-base md:text-lg">
              Transformando ideias em sites bonitos, rápidos e responsivos com
              muito café e código!
            </p>
          </div>

          <SocialLinks />

          <div>
            <Button
              href="/cv/Curriculo-Islaiane-Ribeiro-2025.pdf"
              text="Currículo"
              className="inline-flex px-3 py-2 m-0.5 text-sm font-bold bg-accent-2 text-accent-3 border-0 rounded-md cursor-pointer no-underline hover:-translate-y-1 hover:shadow-[0_0_0.8rem_#4b7c84]"
              target="_blank"
            />
          </div>
        </div>

        <div
          className="shadow-multicolor-rotate rounded-[160px] hidden lg:block"
          data-aos="zoom-in"
        >
          <Image
            src={islaianePhoto}
            alt="Foto de perfil de Islaiane Ribeiro"
            width={250}
            height={250}
            priority
            className="w-80 h-80 pt-2.5 bg-light dark:bg-dark rounded-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

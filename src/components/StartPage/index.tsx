import Image from "next/image";
import SocialLinks from "../ui/SocialLinks";
import Button from "../ui/Button";

export default function StartPage() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-evenly gap-0 h-full dark:text-light ">
        <div className="flex flex-col text-center w-full lg:w-[40%]">
          <h1 className="font-bold text-xl uppercase lg:text-start">
            Muito prazer, me chamo
          </h1>
          <h2 className="text-xl font-bold mb-1.5 uppercase lg:text-start text-accent">
            Islaiane Ribeiro
          </h2>
          <p className="text-lg font-normal lg:text-end">
            Desenvolvedora
            <span className="text-accent font-bold"> Front-End</span>
          </p>

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
              className="inline-flex px-3 py-3 m-0.5 text-sm font-semibold bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:-translate-y-1 hover:shadow-[0_0_0.8rem_#4b7c84]"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/images/perfil.png"
            alt="Descrição da imagem"
            width={250}
            height={250}
            priority
            className="w-90 h-90 object-contain bg-[#4b7c84] shadow-[0_0_0.8rem_#f4f4f4] rounded-full hover:-translate-y-1 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

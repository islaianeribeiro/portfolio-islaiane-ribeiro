import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function StartPage() {
  return (
    <section className="h-[100vh] py-18 px-[5%] items-center">
      <div className="w-full">
        <div className="flex items-center justify-evenly gap-0 h-full">
          <div className="home__txt">
            <h1>Muito prazer, me chamo</h1>
            <h2>Islaiane Ribeiro</h2>
            <p>
              Desenvolvedora <span>Front-End</span>
            </p>

            <div className="text">
              <p>
                Transformando ideias em sites bonitos, rápidos e responsivos com
                muito café e código!
              </p>
            </div>

            <div className="btn">
              <Link
                href="https://www.instagram.com/_islaianeribeiro/#"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/islaianeribeiro"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="https://github.com/islaianeribeiro" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>

            <div className="btn">
              <p>Currículo</p>
            </div>
          </div>

          <div className="home__img">
            <Image
              src="/perfil.png"
              alt="Descrição da imagem"
              width={500}
              height={300}
              priority // carrega mais rápido (opcional)
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

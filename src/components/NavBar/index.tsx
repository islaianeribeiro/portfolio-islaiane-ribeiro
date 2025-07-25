"use client";

import { useState, useCallback } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/ui/Button";
import ClientNavBar from "./ClientNavBar";

const menuItems = [
  { url: "#home", label: "Início" },
  { url: "#about", label: "Sobre" },
  { url: "#projects", label: "Projetos" },
  { url: "#skills", label: "Habilidades" },
  { url: "#contact", label: "Contato" },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuToggle = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  return (
    <header>
      <div className="flex items-center justify-around md:justify-evenly w-full h-17 fixed top-0 bg-accent z-[10]">
        <div className="flex">
          <a href="/" className="no-underline">
            <p className="text-xl text-white">Islaiane Ribeiro</p>
          </a>
        </div>

        <Button
          className="block text-xl w-8 md:hidden text-light cursor-pointer"
          onClick={handleMenuToggle}
          ariaLabel={openMenu ? "Fechar menu" : "Abrir menu"}
          icon={<FontAwesomeIcon icon={openMenu ? faXmark : faBars} />}
        />

        <ClientNavBar
          openMenu={openMenu}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          menuItems={menuItems}
        />
      </div>
    </header>
  );
}

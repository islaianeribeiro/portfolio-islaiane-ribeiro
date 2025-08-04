"use client";

import { useState, useCallback, useEffect } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Button } from "@/components/ui";
import ClientNavBar from "./ClientNavBar";
import Link from "next/link";

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

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // Prioriza a mais visível

        if (visibleSections.length > 0) {
          const id = visibleSections[0].target.id;
          const index = sectionIds.indexOf(id);
          setActiveIndex(index);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% visível
      }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header>
      <div className="flex items-center justify-around md:justify-evenly w-full h-17 fixed top-0 bg-accent z-100">
        <div className="flex">
          <Link href="/" className="no-underline">
            <p className="text-xl text-white">Islaiane Ribeiro</p>
          </Link>
        </div>

        <Button
          className="block text-xl w-4 md:hidden text-light cursor-pointer"
          onClick={handleMenuToggle}
          ariaLabel={openMenu ? "Fechar menu" : "Abrir menu"}
          icon={openMenu ? <FaXmark /> : <FaBarsStaggered />}
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

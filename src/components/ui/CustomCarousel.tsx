// components/CustomCarousel.tsx
"use client";

import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types"; // Importa tipo SwiperOptions
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";

interface CustomCarouselProps {
  children: ReactNode[];
  slidesPerView?: number;
  breakpoints?: SwiperOptions["breakpoints"];
}

const CustomCarousel = ({
  children,
  slidesPerView = 1,
  breakpoints = {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}: CustomCarouselProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      <h2 className="text-3xl uppercase text-center text-dark dark:text-light mb-6">
        Meus <span className="text-accent">projetos</span>
      </h2>
      {/* Navegação personalizada */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button
          ref={prevRef}
          className="text-dark dark:text-light hover:scale-105 text-2xl"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button
          ref={nextRef}
          className="text-dark dark:text-light hover:scale-105 text-2xl"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={breakpoints}
        className="!pb-10"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;

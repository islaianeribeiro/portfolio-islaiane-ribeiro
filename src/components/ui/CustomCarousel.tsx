"use client";

import { ReactNode, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType, SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

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
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button
          onClick={goPrev}
          className="flex justify-center px-2 py-2 w-8 h-8 bg-accent hover:bg-accent-3 text-light border-0 rounded-full cursor-pointer no-underline hover:scale-102"
          aria-label="Retornar ao item anterior"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button
          onClick={goNext}
          className="flex justify-center px-2 py-2 w-8 h-8 bg-accent hover:bg-accent-3 text-light border-0 rounded-full cursor-pointer no-underline hover:scale-102"
          aria-label="Ir para o próximo item"
        >
          <FaChevronRight />
        </button>
      </div>

      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        loop
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        className="!pb-6.5"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomCarousel;

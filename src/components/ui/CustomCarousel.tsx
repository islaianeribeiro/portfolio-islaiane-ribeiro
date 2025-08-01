// components/CustomCarousel.tsx
"use client";

import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types"; // Importa tipo SwiperOptions
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CustomCarouselProps {
  children: ReactNode[];
  slidesPerView?: number;
  breakpoints?: SwiperOptions["breakpoints"];
  title?: string | ReactNode;
}

const CustomCarousel = ({
  children,
  slidesPerView = 1,
  breakpoints = {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  title,
}: CustomCarouselProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      {title && (
        <h2 className="text-2xl md:text-3xl uppercase text-center text-dark dark:text-light mb-6">
          {typeof title === "string" ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-accent">{title.split(" ").slice(-1)}</span>
            </>
          ) : (
            title
          )}
        </h2>
      )}

      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button
          ref={prevRef}
          className="flex justify-center px-2 py-2 w-8 h-8 bg-accent hover:bg-[#327680] text-light border-0 rounded-full cursor-pointer no-underline hover:scale-102"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button
          ref={nextRef}
          className="flex justify-center px-2 py-2 w-8 h-8 bg-accent hover:bg-[#327680] text-light border-0 rounded-full cursor-pointer no-underline hover:scale-102"
        >
          <FaChevronRight />
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
        className="!pb-6.5"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;

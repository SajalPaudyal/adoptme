import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
import { Pets } from "../constants/pets";
import { Pet } from "../types/pet.types";
import OptimizedImage from "./OptimizedImage";
import CTABUtton from "./CTAButton";
import React from "react";
export default function SwiperCarousel() {
  return (
    <React.Fragment>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        {Pets.map((pet: Pet) => (
          <SwiperSlide key={pet.id}>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <OptimizedImage
                image={pet.image}
                alt={pet.name}
                classname="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex items-center justify-center">
                <CTABUtton buttonType="primary-small" text= {`Adopt ${pet.name}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
}

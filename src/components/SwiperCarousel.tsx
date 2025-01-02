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
          <div key={pet.id} className="max-h-1">
            <SwiperSlide>
              <div className="min-h-[450px] border border-black relative rounded-lg">
                <div>
                  <OptimizedImage
                    image={pet.image}
                    alt={pet.name}
                    classname="w-full h-56 object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col items-center p-6">
                  <p className="text-3xl font-semibold">{pet.name}</p>
                  <div className="flex flex-col items-center justify-between w-full mt-5 text-2xl mb-2">
                    <p>{pet.age} yr</p>
                    <p>{pet.sex}</p>
                  </div>
                  <p className="text-xl text-gray-500">{pet.breed}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="mt-10 items-center flex justify-center">
        <CTABUtton text="See More..." buttonType="secondary" />
      </div>
    </React.Fragment>
  );
}

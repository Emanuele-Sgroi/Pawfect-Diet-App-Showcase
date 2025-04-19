"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function FeatureBlock({ title, text, images, reverse = false }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-5 my-12 md:my-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div
        className={`w-full md:w-1/2 md:max-w-[500px] text-primary px-4 flex flex-col ${
          reverse ? "items-start" : "items-end"
        }`}
      >
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-4 white_outline text-secondary">
            {title}
          </h3>
          <p className="text-base leading-relaxed md:max-w-[500px] text-secondary-light">
            {text}
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full md:w-1/2 px-4 flex justify-center">
        <div className="w-[90%] max-w-[500px]">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg w-[350px] h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

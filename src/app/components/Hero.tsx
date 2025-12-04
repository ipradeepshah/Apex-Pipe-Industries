"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    "/projects/profile-1.jpg",
    "/projects/profile-2.jpg",
    "/projects/profile-3.jpg",
    "/projects/profile-4.jpg",
    "/projects/profile-5.jpg",
    "/projects/profile-6.jpg",
    "/projects/profile-7.jpg",
    "/projects/profile-8.jpg",
    "/projects/profile-9.jpg",
  ];

  return (
    <section className="py-10">
    <div className="container max-w-7xl h-[70vh] mx-auto px-4 ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <Image
                src={img}
                alt={`Slide ${i}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
}

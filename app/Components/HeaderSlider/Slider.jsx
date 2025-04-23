"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import img from "@/public/banner.jpg";

const Slider = () => {
  const images = [
    {
      src: img,
      alt: "Protable outdoor bluetooth speaker",
      text: "Your Personalized Recommendations Awaiting!",
    },
    {
      src: img,
      alt: "Explore What Others Recommend for You",
      text: "Explore What Others Recommend for You",
    },
  ];

  return (
    <div className="sliders h-[400px] lg:h-[500px] py-8 flex flex-col items-center justify-center">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-11/12 md:w-3/4"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative h-full"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl lg:text-4xl font-bold text-center px-4">
                  {image.text}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

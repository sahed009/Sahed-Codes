import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import {
  FreeMode,
  Thumbs,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

const imageArray = [
  {
    id: 1,
    src: require("../assets/cert0.webp"),
    alt: "Certificate of Achievement awarded to MD Saheduzzaman Sobuj by Google Cybersecurity",
    width: 2200,
    height: 1700,
    link: "https://coursera.org/share/65a4a21f1aafaaa47928d378bbdd2b6c",
  },
  {
    id: 2,
    src: require("../assets/cert1.webp"),
    alt: "Certificate of Achievement awarded to MD Saheduzzaman Sobuj by NHSPC",
    width: 3162,
    height: 2393,
    link: "#!",
  },
  {
    id: 3,
    src: require("../assets/cert4.webp"),
    alt: "Certificate of Achievement awarded to MD Saheduzzaman Sobuj by Udemy",
    width: 1600,
    height: 1190,
    link: "https://www.udemy.com/certificate/UC-c2829360-7650-4f62-bbb3-f8213f91dab0/",
  },
  {
    id: 4,
    src: require("../assets/cert2.webp"),
    alt: "Certificate of Achievement awarded to MD Saheduzzaman Sobuj by NHSPC",
    width: 3232,
    height: 2316,
    link: "#!",
  },
  {
    id: 5,
    src: require("../assets/cert3.webp"),
    alt: "Certificate of Achievement awarded to MD Saheduzzaman Sobuj by NHSPC",
    width: 3056,
    height: 2394,
    link: "#!",
  },
];

const Certificates = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-[#000] ">
      <div data-aos="fade-up" className="flex flex-col gap-3">
        <div className="relative w-1/2">
          <h1 className="text-white text-[50px] font-semibold  before:text-accent before:[''] before:absolute before:border-b-4 before:border-accent before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
            <span className="text-[#70C878]">My</span> Achievement
            <span className="text-[#70C878]">.</span>
          </h1>
        </div>
        <div className="mt-8">
          <p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400 leading-7">
            <span className="text-[#70C878]">W</span>elcome to my Certificate
            Showcase!
          </p>
        </div>
      </div>
      <div data-aos="fade-down" className="w-[90%] md:w-[40%] mt-6">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          loop={true}
          freeMode={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Navigation, EffectCoverflow, Autoplay]}
        >
          {imageArray.map((image) => (
            <SwiperSlide key={image.id} className="mb-4">
              <a href={image.link} rel="noopener noreferrer">
                <div className="z-50 border-[10px] border-primary shadow-2xl rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10%] rounded-bl-[10%]">
                  <img
                    src={image.src}
                    alt={image.alt}

                    className=" object-cover max-w-full h-auto border-[10px] border-white shadow-2xl rounded-tl-[2px] rounded-br-[3px] rounded-tr-[8%] rounded-bl-[8%]  mx-auto"
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    srcSet={`${image.src}?w=320 320w,
                 ${image.src}?w=640 640w,
                 ${image.src}?w=768 768w,
                 ${image.src}?w=1024 1024w,
                 ${image.src}?w=1200 1200w,
                 ${image.src}?w=1600 1600w,
                 ${image.src}?w=1920 1920w`}
                  />
                </div>

              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imageArray.map((image) => (
            <SwiperSlide key={image.id} className="mb-4">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-md max-w-full h-auto object-cover"
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                srcSet={`${image.src}?w=320 320w,
                 ${image.src}?w=640 640w,
                 ${image.src}?w=768 768w,
                 ${image.src}?w=1024 1024w,
                 ${image.src}?w=1200 1200w,
                 ${image.src}?w=1600 1600w,
                 ${image.src}?w=1920 1920w`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;

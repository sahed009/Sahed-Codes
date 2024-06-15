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
		src: require("../assets/cert0.png"),
		alt: "Google Cybersecurity"
	},
	{
		id: 2,
		src: require("../assets/cert1.jpg"),
		alt: "NHSPC",
	}, {
		id: 3,
		src: require("../assets/cert4.jpg"),
		alt: "Udemy",
	},
	{
		id: 4,
		src: require("../assets/cert2.jpg"),
		alt: "NHSPC",
	},
	{
		id: 5,
		src: require("../assets/cert3.jpg"),
		alt: "NHSPC",
	},
];

const Certificates = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-[#000]">
			<div data-aos="fade-right" className="flex flex-col gap-3">
				<div className="relative w-1/2">
					<h1 className="text-white text-[50px] font-semibold  before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
						<span className="text-[#70C878]">My</span> Achievement
						<span className="text-[#70C878]">.</span>
					</h1>
				</div>
				<div className="mt-8">
					<p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400 leading-7">
						<span className="text-[#70C878]">W</span>elcome to my
						Certificate Showcase!
					</p>
				</div>
			</div>
			<div data-aos="fade-left" className="w-[90%] md:w-[40%] mt-6">
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
					modules={[
						FreeMode,
						Thumbs,
						Navigation,
						EffectCoverflow,
						Autoplay,
					]}
				>
					{imageArray.map((image) => (
						<SwiperSlide key={image.id} className="mb-4">
							<div className="z-50 border-[10px] border-[#50C878] shadow-2xl rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10%] rounded-bl-[10%]"
							>
								<img
									src={image.src}
									alt={image.alt}
									className=" object-cover max-w-full h-auto border-[10px] border-white shadow-2xl rounded-tl-[2px] rounded-br-[3px] rounded-tr-[8%] rounded-bl-[8%]  mx-auto"
								/>
							</div>
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
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Certificates;

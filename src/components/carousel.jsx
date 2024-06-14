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
		src: require("../assets/Gericht.jpeg"),
		alt: "Gericht",
		link: "https://sahed009.github.io/gericht-pr",
	},
	{
		id: 2,
		src: require("../assets/piroll.jpeg"),
		alt: "Piroll",
		link: "https://sahed009.github.io/piroll/",
	},
	{
		id: 4,
		src: require("../assets/mahi.jpeg"),
		alt: "Mahi",
		link: "https://sahed009.github.io/mahi/",
	},
	{
		id: 5,
		src: require("../assets/gpt-3.jpeg"),
		alt: "GPT-3",
		link: "https://sahed009.github.io/gpt3-pr/",
	},
];

const Carousel = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className="flex flex-col md:flex-row gap-5 items-center justify-center bg-[#000]">
			<div data-aos="fade-right" className="flex flex-col gap-3">
				<div className="relative w-1/2">
					<h1 className="text-white text-[50px] font-semibold  before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
						<span className="text-[#70C878]">My</span> Work
						<span className="text-[#70C878]">.</span>
					</h1>
				</div>
				<div className="mt-8">
					<p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400 leading-7">
						<span className="text-[#70C878]">W</span>elcome to my
						Projects Showcase! <br />
						Explore my diverse range of projects through a dynamic
						slideshow. Click on the images to dive into the details
						and experience live links. From web development to
						design, each project represents my passion for
						creativity and innovation.
						<br />
						Let's bring ideas to life!
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
							<a
								href={image.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={image.src}
									alt={image.alt}
									className="rounded-md max-w-full h-auto object-cover"
								/>
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
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Carousel;

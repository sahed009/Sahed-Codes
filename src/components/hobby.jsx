import React from "react";

const Hobby = () => {
	return (
		<div className="container px-4 lg:pl-40 mx-auto mt-10">
			<div className="relative  w-1/2 md:w-1/3">
				<h1 className="text-6xl text-bold before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
					<span className="text-[#70C878]">My</span> Hobbies
				</h1>
			</div>
			<div className="grid grid-cols-12 gap-4">
				<div data-aos="zoom-in-up"
					className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
				>
					<img
						src={require("../assets/strategy.gif")}
						alt="chess"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">Chess</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/books.gif")}
						alt="chess"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">
						Reading
					</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/camera.gif")}
						alt="chess"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">
						Photography
					</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/music.gif")}
						alt="chess"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">Music</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/film-tape.gif")}
						alt="movie"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">Movie</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/airplane.gif")}
						alt="airplane"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">
						Travelling
					</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/coding.gif")}
						alt="Coding"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">
						Coding
					</p>
				</div>
				<div data-aos="zoom-in-up" className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center">
					<img
						src={require("../assets/pots.gif")}
						alt="cooking"
						className="max-w-full h-auto rounded-full border-2 border-[#50C878] p-4"
					/>
					<p className="text-2xl text-bold text-center mt-4">
						Cooking
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hobby;

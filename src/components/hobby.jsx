import React from "react";

const Hobby = () => {
  return (
    <div className="container px-4 lg:pl-40 mx-auto mt-10">
      <div className="relative  w-1/2 md:w-1/3">
        <h1 className="text-6xl text-bold before:text-accent before:[''] before:absolute before:border-b-4 before:border-accent before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
          <span className="text-[#70C878]">My</span> Hobbies
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/strategy.gif")}
            alt="MD Saheduzzaman Sobuj enjoys chess"
            width={640}
            height={640}
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/strategy.gif")}?w=320 320w,
								 ${require("../assets/strategy.gif")}?w=640 640w,
								 ${require("../assets/strategy.gif")}?w=768 768w,
								 ${require("../assets/strategy.gif")}?w=1024 1024w,
								 ${require("../assets/strategy.gif")}?w=1200 1200w,
								 ${require("../assets/strategy.gif")}?w=1600 1600w,
								 ${require("../assets/strategy.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Chess</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/books.gif")}
            alt="MD Saheduzzaman Sobuj enjoys books"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/books.gif")}?w=320 320w,
                 ${require("../assets/books.gif")}?w=640 640w,
                 ${require("../assets/books.gif")}?w=768 768w,
                 ${require("../assets/books.gif")}?w=1024 1024w,
                 ${require("../assets/books.gif")}?w=1200 1200w,
                 ${require("../assets/books.gif")}?w=1600 1600w,
                 ${require("../assets/books.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Reading</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/camera.gif")}
            alt="MD Saheduzzaman Sobuj enjoys photography"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/camera.gif")}?w=320 320w,
								 ${require("../assets/camera.gif")}?w=640 640w,
								 ${require("../assets/camera.gif")}?w=768 768w,
								 ${require("../assets/camera.gif")}?w=1024 1024w,
								 ${require("../assets/camera.gif")}?w=1200 1200w,
								 ${require("../assets/camera.gif")}?w=1600 1600w,
								 ${require("../assets/camera.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Photography</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/music.gif")}
            alt="MD Saheduzzaman Sobuj enjoys music"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/music.gif")}?w=320 320w,
                 ${require("../assets/music.gif")}?w=640 640w,
                 ${require("../assets/music.gif")}?w=768 768w,
                 ${require("../assets/music.gif")}?w=1024 1024w,
                 ${require("../assets/music.gif")}?w=1200 1200w,
                 ${require("../assets/music.gif")}?w=1600 1600w,
                 ${require("../assets/music.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Music</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/film-tape.gif")}
            alt="MD Saheduzzaman Sobuj enjoys movie"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/film-tape.gif")}?w=320 320w,
                 ${require("../assets/film-tape.gif")}?w=640 640w,
                 ${require("../assets/film-tape.gif")}?w=768 768w,
                 ${require("../assets/film-tape.gif")}?w=1024 1024w,
                 ${require("../assets/film-tape.gif")}?w=1200 1200w,
                 ${require("../assets/film-tape.gif")}?w=1600 1600w,
                 ${require("../assets/film-tape.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Movie</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/airplane.gif")}
            alt="MD Saheduzzaman Sobuj enjoys travelling"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/airplane.gif")}?w=320 320w,
                 ${require("../assets/airplane.gif")}?w=640 640w,
                 ${require("../assets/airplane.gif")}?w=768 768w,
                 ${require("../assets/airplane.gif")}?w=1024 1024w,
                 ${require("../assets/airplane.gif")}?w=1200 1200w,
                 ${require("../assets/airplane.gif")}?w=1600 1600w,
                 ${require("../assets/airplane.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Travelling</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/coding.gif")}
            alt="MD Saheduzzaman Sobuj enjoys coding"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/coding.gif")}?w=320 320w,
                 ${require("../assets/coding.gif")}?w=640 640w,
                 ${require("../assets/coding.gif")}?w=768 768w,
                 ${require("../assets/coding.gif")}?w=1024 1024w,
                 ${require("../assets/coding.gif")}?w=1200 1200w,
                 ${require("../assets/coding.gif")}?w=1600 1600w,
                 ${require("../assets/coding.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Coding</p>
        </div>
        <div
          data-aos="zoom-in-up"
          className="col-span-6 md:col-span-3 p-8 md:p-16 flex flex-col items-center justify-center"
        >
          <img
            src={require("../assets/pots.gif")}
            alt="MD Saheduzzaman Sobuj enjoys cooking"
            className="max-w-full h-auto rounded-full border-2 border-primary p-4"
            width={640}
            height={640}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/pots.gif")}?w=320 320w,
                 ${require("../assets/pots.gif")}?w=640 640w,
                 ${require("../assets/pots.gif")}?w=768 768w,
                 ${require("../assets/pots.gif")}?w=1024 1024w,
                 ${require("../assets/pots.gif")}?w=1200 1200w,
                 ${require("../assets/pots.gif")}?w=1600 1600w,
                 ${require("../assets/pots.gif")}?w=1920 1920w`}
          />
          <p className="text-2xl text-bold text-center mt-4">Cooking</p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;

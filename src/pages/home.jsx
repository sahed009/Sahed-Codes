import React from "react";
import Navbar from "../components/navbar";
import Heroheader from "../components/heroheader";
import Footer from "../components/footer";

const home = () => {
  return (
    <div className="h-full bg-black text-white overflow-hidden">
      <div className="relative">
        <div
          className="absolute right-0  rounded-full p-10 "
          data-aos="fade-up"
        >
          <img
            src={require("../assets/logo sahed codes.png")}
            alt="Official logo of Sahed Codes"
            className="max-w-[48px] md:max-w-[90px] lg:max-w-[150px] xl:max-w-[150px] h-auto rounded"
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            srcSet={`${require("../assets/logo sahed codes.png")}?w=320 320w,
                 ${require("../assets/logo sahed codes.png")}?w=640 640w,
                 ${require("../assets/logo sahed codes.png")}?w=768 768w,
                 ${require("../assets/logo sahed codes.png")}?w=1024 1024w,
                 ${require("../assets/logo sahed codes.png")}?w=1200 1200w,
                 ${require("../assets/logo sahed codes.png")}?w=1600 1600w,
                 ${require("../assets/logo sahed codes.png")}?w=1920 1920w`}
          />
        </div>
      </div>
      <Navbar />
      <div className="container">
        <Heroheader />
      </div>

      <Footer />
    </div>
  );
};

export default home;

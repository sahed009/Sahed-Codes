import React from "react";
import Navbar from "../components/navbar";
import Heroheader from "../components/heroheader";
import Footer from "../components/footer";


const home = () => {
	return (
		<div className="h-full bg-black text-white overflow-hidden">
			<div className="relative">
				<div className="absolute right-0  rounded-full p-10 "  data-aos="fade-up">
					<img
						src={require("../assets/logo sahed codes.png")}
						alt=""
						className="max-w-[48px] md:max-w-[90px] lg:max-w-[150px] xl:max-w-[150px] h-auto rounded"
					/>
				</div>

                <div className="absolute right-0 top-[550px] md:top-[400px] md:right-10 rounded-full p-10 animate-spin">
					<img
						src={require("../assets/abstract-shape.png")}
						alt=""
						className="max-w-[48px]  h-auto"
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

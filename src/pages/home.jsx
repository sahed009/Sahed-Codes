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
						alt="Official logo of Sahed Codes"
						className="max-w-[48px] md:max-w-[90px] lg:max-w-[150px] xl:max-w-[150px] h-auto rounded"
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

import React from "react";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const projects = () => {
	return (
		<div className="h-full bg-black text-white overflow-hidden relative">
			<Navbar />
			<div className="container px-4 lg:pl-40 mx-auto py-20 lg:py-4 relative">
				<Carousel />
			</div>
            <Footer />
		</div>
	);
};

export default projects;

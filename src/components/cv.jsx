import React from "react";

const CV = () => {
	return (
		<div data-aos="fade-down" className="py-10 flex items-center justify-center gap-4 pl-0 md:pl-32">
			<button className="min-h-[48px] px-12 py-4 rounded-sm bg-transparent hover:bg-[#70C878] outline outline-[#70C878] text-lg hover:text-xl transition-all duration-150">
				<a href={require("../assets/My Resume.pdf")}>Download CV</a>
			</button>
		</div>
	);
};

export default CV;

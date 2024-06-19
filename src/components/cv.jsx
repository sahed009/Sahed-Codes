import React from "react";

const CV = () => {
	return (
		<button className="bg-primary text-bgc min-w-[140px] md:min-w-[160px] font-semibold  min-h-[48px] shadow rounded-md hover:text-lg transition-all duration-300">
			<a href={require("../assets/My Resume.pdf")}>Download CV</a>
		</button>
	);
};

export default CV;

import React from "react";

const CV = () => {
	return (
		<button className="bg-[#50C878] text-[#000000] min-w-[160px] font-semibold  min-h-[48px] shadow rounded-md hover:text-lg transition-all duration-300">
			<a href={require("../assets/My Resume.pdf")}>Download CV</a>
		</button>
	);
};

export default CV;

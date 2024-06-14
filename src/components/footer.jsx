import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";
import React from "react";

const footer = () => {
	return (
		<div className="text-white md:flex md:flex-col md:justify-center md:items-center text-center py-8 ">
			<ScrollToTop
				smooth
				color="#70C878"
				className="!bg-transparent !rounded-full !outline !outline-[#70C878] !flex !items-center !justify-center !bottom-[60px] !right-4 !shadow-none"
			/>
            <hr className="border border-[#70C878] mt-20 mb-10 w-full" />
			<div className="container w-[85%] md:w-full text-center">
				<FontAwesomeIcon
					icon={faCopyright}
					className="text-[#70C878] mr-3 text-2xl"
				/>
				2023 Saheduzzaman. All rights reserved.
				<br />
				Unauthorized use of any materials on this website may violate
				copyright, trademark, and other laws.
			</div>
		</div>
	);
};

export default footer;

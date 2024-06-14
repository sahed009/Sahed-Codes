import React, { Fragment, useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const testimonialList = [
	{
		author: {
			fullName: "Sujon Ahmed",
			picture: require("../assets/sujon-dp.jpg"),
			designation: "Founder / CEO",
		},
		rating: 4.5,
		description:
			"Working with Sahed was a pleasure. Their expertise in ReactJS helped bring our project to life.",
	},
	{
		author: {
			fullName: "Kefayetur Rahman",
			picture: require("../assets/kefayet-dp.jpg"),
			designation: "Resident Doctor",
		},
		rating: 4.3,
		description:
			"I highly recommend Sahed as a frontend developer. They are professional, reliable and talented",
	},
	{
		author: {
			fullName: "Mahdi Ahmed",
			picture:
            require("../assets/mahdi-dp.jpg"),
			designation: "Scientist",
		},
		rating: 4.7,
		description:
			"We were impressed with Sahed's attention to detail.We look forward to working with them again.",
	},
	{
		author: {
			fullName: "Mahsher Chowdhury",
			picture: require("../assets/mahi-dp.jpg"),
			designation: "Chef",
		},
		rating: 5,
		description:
			"Sahed is a frontend rockstar! He delivered stunning design, flawless code and exceeded our expectations. Quick and detail-oriented, He made the process a breeze.",
	},
	{
		author: {
			fullName: "Nabil Ahmed",
			picture: require("../assets/nabil-dp.jpg"),
			designation: "Engineer",
		},
		rating: 5,
		description:
			"Saheds frontend skills are impressive. Quick to grasp our needs, she added valuable insights for a fast and visually appealing website. Responsive and a joy to work with!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-white"
						/>
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							className="text-white"
						/>
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-slate-500 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const Testimonial = ({ terminalList }) => {
	const [index, setIndex] = useState(0);
	const { author, description, rating } = testimonialList[index];

	const handleControl = useCallback(
		(type) => {
			if (type === "prev") {
				setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
			} else if (type === "next") {
				setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
			}
		},
		[index]
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			handleControl("next");
		}, 3000);

		return () => clearInterval(intervalId);
	}, [handleControl]);
	return (
		<section className=" text-white">
			<Navbar />
			<div className="container px-4 lg:pl-40 mx-auto py-20 lg:py-16 relative">
				<div className="flex flex-col md:flex-row gap-4 md:gap-8">
					<div data-aos="fade-right" className="flex flex-col justify-center gap-4">
						<div className="relative w-1/2">
							<h1 className="text-white text-[50px] font-semibold  before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
								<span className="text-[#70C878]">Client</span>{" "}
								Review
								<span className="text-[#70C878]">.</span>
							</h1>
						</div>
						<div className="mt-8">
							<p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400 leading-7">
								<span className="text-[#70C878]">H</span>ere's
								What People are Saying About My Work.
							</p>
						</div>
					</div>

					<div  data-aos="fade-left" className="flex justify-center mt-6">
						<div className="lg:max-w-5xl transition-all duration-1500 ease-in-out">
							<div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 border border-[#70C878] rounded-xl p-2">
								<div className="md:w-1/2 md:py-12">
									<div
										className="bg-center bg-no-repeat bg-cover rounded-xl h-full min-h-[275px] md:min-h-[350px] max-w-300 object-cover"
										style={{
											backgroundImage: `url(${author.picture})`,
										}}
									></div>
								</div>
								<div className="md:w-1/2 relative">
									<div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-[#70c778] -z-[1] rounded-xl"></div>
									<div className="flex flex-col justify-center h-full mb-10 md:mb-0">
										<div className="p-6 lg:py-16 mb-6">
											<h4 className="text-2xl font-bold mb-4">
												{author.fullName}
											</h4>
                                            <h4 className="text-lg leading-10 opacity-90 mb-4 border-b-2 border-black ">
												{author.designation}
											</h4>
											<Rating
												rating={rating}
												showLabel={false}
											/>
											<p className="text-black">
												{description}
											</p>
										</div>
										<div className="px-6 lg:px-12 text-end">
											<button
												className="w-10 h-10 text-[12px] text-[#fff] hover:text-[#151719] bg-transparent border border-[#fff]  hover:bg-[#fff] rounded-full inline-flex items-center justify-center duration-150  mr-3"
												onClick={() =>
													handleControl("prev")
												}
											>
												<FontAwesomeIcon
													icon={faChevronLeft}
												/>
											</button>
											<button
												className="w-10 h-10 text-[12px] text-[#fff] hover:text-[#151719] bg-transparent border border-[#fff]  hover:bg-[#fff] rounded-full inline-flex items-center justify-center duration-150  mr-3"
												onClick={() =>
													handleControl("next")
												}
											>
												<FontAwesomeIcon
													icon={faChevronRight}
												/>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Testimonial;

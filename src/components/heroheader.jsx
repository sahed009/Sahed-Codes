import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebook,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CV from "./cv";

const socialLinks = [
	{ icon: faFacebook, href: "https://www.facebook.com/sahed.009" },
	{ icon: faInstagram, href: "https://www.instagram.com/sahed.009/" },
	{ icon: faLinkedinIn, href: "https://www.linkedin.com/in/sahed009/" },
	{ icon: faTwitter, href: "https://twitter.com/sahed_009" },
];

const infoList = [
	{ label: "Born in", value: "Sylhet, Bangladesh" },
	{ label: "Experience", value: "2+ Years" },
	{ label: "Birth Year", value: "1999" },
];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-1" key={i}>
				<span className="opacity-50 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const SocialLinks = ({ links }) => (
	<ul className="inline-flex mt-6">
		{links.map((link, i) => (
			<li className="mr-5" key={i}>
				<a
					href={link.href}
					className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

const Heroheader = () => {
	return (
		<div className="h-full container px-4 lg:pl-40 mx-auto py-20 lg:py-[60px]">
			<div className="grid grid-cols-12 gap-4">
				<div data-aos="fade-up" className="col-span-12 lg:col-span-5 xl:col-span-4 mb-6 lg:mb-0">
					<img
						src={require("../assets/main-dp.webp")}
						alt="MD Saheduzzaman Sobuj, Frontend Developer from Sylhet, Bangladesh"
						className="max-w-full h-auto border-[20px] border-[#50C878] shadow-2xl rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
					/>
				</div>
				<div data-aos="fade-down" className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
					<p className="text-xl leading-normal mb-2 opacity-50">
						Crafting Digital Excellence, One Pixel at a Time.
					</p>
					<h2 className="text-3xl leading-none md:text-7xl font-bold mb-6 w-full relative flex flex-row md:flex-col gap-4">
						<span className=" text-[#50C878]">MD</span>{" "}
						<span className="before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
							Saheduzzaman
						</span>
					</h2>
					<p className="text-xl leading-normal opacity-75 mb-2">
						<span className="text-[#50C878]">I'm</span> a Frontend
						Developer based in Bangladesh and enjoy playing with
						sites. I love playing chess, travelling, photography &
						music.
					</p>

					<div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
						<div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
							<div>
								<ProfileKeyInfo />
								<SocialLinks links={socialLinks} />
							</div>
							<div className="flex md:flex-col justify-between gap-4 md:gap-8">

								<CV />
								<Link to="/contact">
									<button className="border-2 border-[#50C878] text-[#50C878] min-w-[160px]  min-h-[48px] rounded-md font-semibold hover:text-lg transition-all duration-300">
										Contact
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heroheader;

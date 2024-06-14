import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const features = [
	{
		img: require("../assets/js-icon.png"),
		title: "Javascript",
		description:
			"JavaScript Expert  I specialize in crafting dynamic and responsive web applications. Proficient in modern frameworks, I excel in creating interactive user interfaces with clean and maintainable code. Let's elevate your digital presence together!",
	},
	{
		img: require("../assets/react-icon.png"),
		title: "Reactjs",
		description:
			"React.js specialist crafting scalable architectures, mastering state with Redux, and optimizing for responsive design. Proven in agile, collaborative development with a focus on performance. Let's build something extraordinary!",
	},
	{
		img: require("../assets/tailwind-icon.png"),
		title: "Tailwind Css",
		description:
			"Tailwind CSS Expert  Crafting sleek, responsive designs efficiently. Let's elevate your web presence!",
	},
	{
		img: require("../assets/figma-icon.png"),
		title: "Figma",
		description:
			"Figma-to-Web Alchemist I specialize in turning Figma designs into pixel-perfect websites. With precision and efficiency, I bring your visions to life. Let's seamlessly translate your design into a stunning online presence.",
	},

	{
		img: require("../assets/html-icon.png"),
		title: "Html 5",
		description:
			"I specialize in HTML5, crafting modern, semantic, and accessible web structures. Proficient in creating responsive designs, I ensure a seamless user experience across devices. ",
	},

	{
		img: require("../assets/css-icon.png"),
		title: "Css 3",
		description:
			"CSS3 expert, sculpting visually stunning and responsive styles for modern web experiences. With a keen eye for design and a focus on innovation, I transform concepts into captivating digital interfaces. Let's elevate your website's aesthetics and functionality with the power of CSS3!",
	},
];

const FeatureItem = ({ feature, align }) => {
	return (
		<div  data-aos="fade-up" className="grid grid-cols-12">
			<div
				className={`col-span-12 md:col-span-7 mt-12 ${
					align && "md:col-start-6"
				}`}
			>
				<div
					className={`rounded-[20px] bg-[#171519] p-6 lg:p-12 relative before:bg-[#70C878] before:rounded-[20px] before:absolute before:-top-6 before:-bottom-6 ${
						align ? "before:-right-6" : "before:-left-6"
					} before:w-1/3 before:-z-[1]`}
				>
					<div className="h-16 w-16 rounded-xl text-[32px] inline-flex items-center justify-center mb-6">
						<img src={feature.img} alt="" />
					</div>
					<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
					<p className="opacity-70">{feature.description}</p>
				</div>
			</div>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
	align: PropTypes.bool,
};

const Expertise = () => {
	return (
		<section className="text-white relative overflow-hidden z-[1]">
			<Navbar />
			<div className="container px-4 lg:pl-40 mx-auto py-20 lg:py-10 relative">
				<div  data-aos="fade-right">
					<div className="relative w-1/2 md:w-1/3">
						<h2 className="text-white text-[50px] font-semibold  before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
							<span className="text-[#70C878]">My</span> Expertise
							<span className="text-[#70C878]">.</span>
						</h2>
					</div>

					<p className="text-lg leading-6 my-6">
						I specialize in React.js for dynamic interfaces and
						Tailwind CSS for sleek, responsive designs. Let's create
						an exceptional online presence together!
					</p>
				</div>

				{features.map((feature, i) => (
					<FeatureItem 
						align={i % 2 ? false : true}
						feature={feature}
						key={i}
					/>
				))}
			</div>
			<Footer />
		</section>
	);
};

export default Expertise;

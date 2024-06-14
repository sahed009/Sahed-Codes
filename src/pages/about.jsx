import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Hobby from "../components/hobby";
import Quotes from "../components/quotes";
import Footer from "../components/footer";
import CV from "../components/cv";

const About = () => {
	return (
		<div className="h-full bg-black text-white overflow-hidden">
			<Navbar />
			<div className="container px-4 lg:pl-40 mx-auto py-20 lg:py-[60px] relative">
				<h1 data-aos="fade-right" className="relative w-1/2 md:w-1/3">
					{" "}
					<span className="text-6xl text-bold before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
						<span className="text-[#70C878]">A</span>bout Me
					</span>
				</h1>
				<Link to="/contact" className="flex justify-end items-start">
					<button className="border-2 border-[#50C878] text-[#50C878] min-w-[160px]  min-h-[48px] rounded-md hover:text-lg transition-all duration-150">
						Contact
					</button>
				</Link>
				<p  data-aos="fade-left" className="text-2xl leading-10 mt-10">
					Hey there! <br /> I'm a computer science student from
					Bangladesh, juggling books and freelance frontend
					development gigs. I'm on a mission to make the web a cooler
					place, one pixel at a time. <br />
					While I'm knee-deep in coding, my heart's set on becoming a
					cybersecurity whiz. I want to be the digital superhero that
					keeps our online world safe and sound. <br />
					This portfolio is my digital playground—check out what I've
					been up to, and let's chat! Whether you want to swap tech
					stories or team up on a project, I'm all ears. Thanks for
					stopping by! 🚀
				</p>
			</div>
            <CV />
			<Hobby />
			<Quotes />
			<Footer />
		</div>
	);
};

export default About;

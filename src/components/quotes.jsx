import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const quotes = () => {
	return (
		<div className="container px-4 lg:pl-40 mx-auto mt-10">
			<div className="relative w-[60%] md:w-[40%]">
				<h1 className="text-6xl text-bold before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
					<span className="text-[#70C878]">Favourite</span> Quotes
				</h1>
			</div>
			<ul className="text-2xl mt-8">
				<li className="my-4 flex flex-col justify-between">
					<sup>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-lg text-[#70C878] mr-4"
						/>
					</sup>{" "}
					<p data-aos="zoom-in-left">The greatest glory in living lies not in never falling, but in rising every time we fall.</p>
					<p data-aos="zoom-in-right" className="text-end text-[#70C878]">- Nelson Mandela</p>
				</li>
                <li className="my-4 flex flex-col justify-between">
					<sup>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-lg text-[#70C878] mr-4"
						/>
					</sup>{" "}
					<p data-aos="zoom-in-left">It is during our darkest moments that we must focus to see the light.</p>
					<p data-aos="zoom-in-right" className="text-end text-[#70C878]">- Aristotle</p>
				</li>
                <li className="my-4 flex flex-col justify-between">
					<sup>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-lg text-[#70C878] mr-4"
						/>
					</sup>{" "}
					<p data-aos="zoom-in-left">In three words I can sum up everything I've learned about life: it goes on.</p>
					<p  data-aos="zoom-in-right" className="text-end text-[#70C878]">- Robert Frost</p>
				</li>
                <li className="my-4 flex flex-col justify-between">
					<sup>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-lg text-[#70C878] mr-4"
						/>
					</sup>{" "}
					<p data-aos="zoom-in-left">I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.</p>
					<p data-aos="zoom-in-right" className="text-end text-[#70C878]">- Maya Angelou</p>
				</li>
                <li className="my-4 flex flex-col justify-between">
					<sup>
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-lg text-[#70C878] mr-4"
						/>
					</sup>{" "}
					<p data-aos="zoom-in-left">It is better to be hated for what you are than to be loved for what you are not.</p>
					<p data-aos="zoom-in-right" className="text-end text-[#70C878]">- Andre Gide</p>
				</li>
			</ul>
		</div>
	);
};

export default quotes;

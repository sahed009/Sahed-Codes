import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<>
			<div data-aos="fade-right" className="hidden lg:flex flex-col justify-center items-center bg-[#50C878] w-20 h-screen py-16 text-white fixed transition-all duration-200 z-20">
				<Link
					to="/"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md  hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50 absolute top-[14%] left-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0"
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						Home
					</span>
				</Link>
				<Link
					to="/about"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[28%] left-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0 "
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						About
					</span>
				</Link>
				<Link
					to="/expertise"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[42%] left-6"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0 "
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						Expertise
					</span>
				</Link>
				<Link
					to="/projects"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[56%] left-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0"
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						Projects
					</span>
				</Link>
				<Link
					to="/testimonials"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[70%] left-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0"
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						Testimonials
					</span>
				</Link>
				<Link
					to="/contact"
					className="group  flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[84%] left-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-14 w-14 p-2 mb-0"
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
					</svg>
					<span className="p-0 mt-0 opacity-0 group-hover:opacity-100">
						Contact
					</span>
				</Link>
			</div>

			<div className="lg:hidden">
				<button
					onClick={toggleMobileMenu}
					className="fixed z-50 top-4 left-4 bg-[#50C878] text-white rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-12 w-12 p-2 mb-0 animate-bounce"
						viewBox="0 0 640 512"
						fill="#191716"
					>
						<path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
					</svg>
				</button>

				{isMobileMenuOpen && (
					<div className="fixed top-0 left-0 w-[75%] h-full flex flex-col justify-center items-center bg-[#50C878] text-white z-50">
						<button
							onClick={toggleMobileMenu}
							className="fixed top-4 left-4 p-2 bg-[#50C878] text-white rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 shadow-xl rounded-md"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
							</svg>
						</button>

						<Link
							to="/"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50 absolute top-[14%] left-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" />
							</svg>
							<span className="p-0 mt-0">Home</span>
						</Link>
						<Link
							to="/about"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[28%] left-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
							</svg>
							<span className="p-0 mt-0">About</span>
						</Link>
						<Link
							to="/expertise"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[42%] left-6"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
							</svg>
							<span className="p-0 mt-0">Expertise</span>
						</Link>
						<Link
							to="/projects"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[56%] left-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z" />
							</svg>
							<span className="p-0 mt-0">Projects</span>
						</Link>
						<Link
							to="/testimonials"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[70%] left-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
							</svg>
							<span className="p-0 mt-0">Testimonials</span>
						</Link>
						<Link
							to="/contact"
							className="group  w-2/3 flex items-center justify-center
                 px-4 py-2 text-center hover:shadow-lg rounded-md hover:shadow-green-700 transition-all duration-500 hover:bg-opacity-50  absolute top-[84%] left-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-14 w-14 p-2 mb-0 mr-3"
								viewBox="0 0 640 512"
								fill="#191716"
							>
								<path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
							</svg>
							<span className="p-0 mt-0">Contact</span>
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Navbar;

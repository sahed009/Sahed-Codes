import React, { useState } from "react";
import Navbar from "../components/navbar";
import profileImg from "../assets/profile-img.jpg";
import Footer from "../components/footer";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form
			className=""
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
		>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#161515] shadow-2xl shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#70C878] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#161515] shadow-2xl shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#70C878] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#161515] shadow-lg shadow-[#2f2f2f] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#70C878] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-end">
				<button
					type="submit"
					className="bg-[#50C878] hover:bg-opacity-90 text-white px-9 py-3 rounded-md mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div  data-aos="fade-right" className="bg-[#191716] shadow-xl rounded-2xl p-6 md:p-12 border border-[#70C878]">
		<h2 className="text-3xl md:text-[45px] leading-none font-bold mb-4">
			<span className="text-[#70C878]">Contact</span> Me
		</h2>
		<div className="relative w-1/3">
			<p className=" mb-12  before:text-green-400 before:[''] before:absolute before:border-b-4 before:border-green-400 before:top-2 before:left-0 before:w-0 before:h-[100%] before:overflow-hidden before:text-7xl before:animate-animate">
				Send a mail!
			</p>
		</div>

		<ContactForm />
	</div>
);

const Contact = () => {
	return (
		<div className="h-full bg-black text-white">
			<Navbar />
			<div className="container pb-28 pt-10 lg:pl-24 mx-auto">
				<div className="grid grid-cols-12 py-6 lg:gap-8">
					<div className="col-span-12 lg:col-span-7 p-16 mb-4 lg:mb-0 ">
						<div className="md:relative">
							<div class="hidden lg:block md:absolute -top-10 -left-10 w-[75%] h-[450px] bg-transparent  border-2 border-[#50C878] rounded-md"></div>
						</div>
						<img
							src={profileImg}
							alt="me"
							className="max-w-full lg:max-w-[35%] h-auto z-10 lg:absolute border-2 border-l-[#70C878] border-b-[#70C878] border-t-0 border-r-0 p-2 rounded-md"
						/>
					</div>
					<div className="col-span-12 lg:col-span-5">
						<ContactFormCard />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Contact;

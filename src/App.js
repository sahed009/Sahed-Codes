import React, { useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import { Routes, Route } from "react-router";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		Aos.init({ duration:800, easing: "linear"});
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/expertise" element={<Expertise />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/testimonials" element={<Testimonials />} />
			</Routes>
		</>
	);
};

export default App;

import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import { Routes, Route } from "react-router";
import TextPreloader from "./components/textPreloader";
import Cursor from './components/cursor';
import "./App.css"

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setloading(false)
		}, 2500)
	}, [])


	useEffect(() => {
		Aos.init({ duration: 800, easing: "linear" });
	}, []);


	return (
		<>
			<Cursor />
			{loading ? <TextPreloader /> : <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/expertise" element={<Expertise />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/testimonials" element={<Testimonials />} />
			</Routes>}

		</>
	);
};

export default App;

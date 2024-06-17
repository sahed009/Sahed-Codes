import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import { Routes, Route } from "react-router";
import TextPreloader from "./components/textPreloader";
import Cursor from "./components/cursor";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800, easing: "linear" });
  }, []);

  return (
    <>
      <Analytics />
      <Cursor />
      {loading ? (
        <TextPreloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route
            path="/projects"
            element={
              <Projects
                title="How to Create Dynamic Meta Tags"
                description="Learn how to create dynamic meta tags in a React.js application for improved SEO."
                canonicalUrl="https://shedcodes.com/#/projects"
              />
            }
          />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      )}
    </>
  );
};

export default App;

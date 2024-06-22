import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextPreloader from "./components/textPreloader";
import Cursor from "./components/cursor";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";

import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1300);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800, easing: "linear" });
  }, []);

  return (
    <Router>
      <Analytics />
      <Cursor />
      {loading ? (
        <TextPreloader />
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Expertise">
              <Expertise />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Testimonials">
              <Testimonials />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;

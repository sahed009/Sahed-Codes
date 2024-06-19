import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/expertise">
                <Expertise />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/testimonials">
                <Testimonials />
              </Route>
            </Switch>
          </>
        )}
    </Router>
  );
};

export default App;

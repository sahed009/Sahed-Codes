import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextPreloader from "./components/textPreloader";
import Cursor from "./components/cursor";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";

import Aos from "aos";
import "aos/dist/aos.css";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyExpertise = React.lazy(() => import("./pages/Expertise"));
const LazyProjects = React.lazy(() => import("./pages/Projects"));
const LazyTestimonials = React.lazy(() => import("./pages/Testimonials"));

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
              <React.Suspense>
                <LazyHome />
              </React.Suspense>
            </Route>
            php Copy code
            <Route path="/About">
              <React.Suspense>
                <LazyAbout />
              </React.Suspense>
            </Route>
            <Route path="/Contact">
              <React.Suspense>
                <LazyContact />
              </React.Suspense>
            </Route>
            <Route path="/Expertise">
              <React.Suspense>
                <LazyExpertise />
              </React.Suspense>
            </Route>
            <Route path="/Projects">
              <React.Suspense>
                <LazyProjects />
              </React.Suspense>
            </Route>
            <Route path="/Testimonials">
              <React.Suspense>
                <LazyTestimonials />
              </React.Suspense>
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;

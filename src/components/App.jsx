import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./site-styles.css";

export default function App() {
    return <div>
      <Navigation />
      <Intro />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
}
import React from "react";
import Navigation from "../Navigation/Navigation";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home() {
    return <div>
      <Navigation />
      <Intro />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
}
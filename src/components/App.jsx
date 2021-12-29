import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return <div>
      <Navigation />
      <Intro />
      <Skills />
      <Testimonials />
      <Contact />
  {/* <!-- Footer --> */}

  <footer id="footer" class="container-narrow white-section">
    <p>© Copyright 2021 Brenna Watry</p>
    <p>Design elements created by Brenna Watry in <a href="https://www.canva.com/create/logos/">Canva.com</a>'s logo creater.</p>
  </footer>

    </div>
}
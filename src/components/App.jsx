import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return <div>
      <Navigation />
      <Intro />
      <Skills />
      <Testimonials />
  {/* <!-- Contact Me --> */}

  <section class="container-narrow white-section" id="contact-me">
    <h2>Contact Me</h2>
    <a href="https://github.com/bwatry"><i class="contact-icon fab fa-github-square fa-3x"></i></a>
    <a href="https://www.linkedin.com/in/brenna-watry-9527b592/"><i class="contact-icon fab fa-linkedin fa-3x"></i></a>
    <a href="https://www.facebook.com/brenna.watry"><i class="contact-icon fab fa-facebook-square fa-3x"></i></a>
    {/* <!-- <a href="#contact-me"><i class="unlinked contact-icon fas fa-envelope-square fa-3x"></i></a> --> */}
  </section>

  {/* <!-- Footer --> */}

  <footer id="footer" class="container-narrow white-section">
    <p>© Copyright 2021 Brenna Watry</p>
    <p>Design elements created by Brenna Watry in <a href="https://www.canva.com/create/logos/">Canva.com</a>'s logo creater.</p>
  </footer>

    </div>
}
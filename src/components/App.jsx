import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Skills from "./Skills";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return <div>
      <Navigation />
      <Intro />
      <Skills />

  {/* <!-- Testimonials --> */}

  <section id="testimonials" class="teal-section">
    <div class="row">
      <div class="col-lg-12">
        <div id="testimonial-carousel" class="carousel slide" data-ride="carousel" data-interval="8000">
          <div class="carousel-inner">
            <div class="carousel-item active container-fluid">
              <h3 class="testimonial-text">I told her for years that she should become a programmer. She finally listened to me.</h3>
              <em>Dad (father)</em>
            </div>
            <div class="carousel-item container-fluid">
              <h3 class="testimonial-text">Brenna is a lifesaver! She just knows what to do and does it.</h3>
              <em>Every employer ever (not a direct quote)</em>
            </div>
            <div class="carousel-item container-fluid">
              <h3 class="testimonial-text">She should be feeding us more. Like on the hour every hour. And she doesn't pet us enough. But otherwise, she's all right.</h3>
              <em>Saga & Rumor (cats)</em>
            </div>
          </div>
          <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <img class="line-break-gold" src="Images/Art Deco Logo-sm.png" alt="Art Deco line break" />
      </div>
    </div>

  </section>

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
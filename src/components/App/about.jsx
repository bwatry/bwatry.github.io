import React from "react";
import Navigation from "../Navigation/Navigation";
import Bio from "../Bio/Bio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./about.css";

export default function About() {
    return <div>
        <Navigation />
        <Bio />
        <Contact />
        <Footer />
    </div>
}
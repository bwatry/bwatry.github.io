import React from "react";
import { Container } from "react-bootstrap";
import "./intro.css";

export default function Intro() {
    return <Container fluid className="intro-section teal-section">
            <div className="introduction">
                <p>Hello.</p>
                <h1 className="intro-text">I'm Brenna Watry</h1>
            </div>
            <div className="stylized-img">
                <img className="brenna-img" src="Images/Art Deco Picture.png" alt="Picture of Brenna Watry" />
            </div>
    </Container>
}
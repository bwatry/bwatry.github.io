import React from "react";
import Container from "react-bootstrap/Container";
import "./contact.css";

export default function Contact() {
    return <Container className="container-narrow white-section" id="contact-me">
            <h2>Contact Me</h2>
            <a href="https://github.com/bwatry" aria-label="Go to Brenna's GitHub page." tabIndex="0">
                <i className="contact-icon fab fa-github-square fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/brenna-watry-9527b592/" aria-label="Go to Brenna's LinkedIn page." tabIndex="0">
                <i className="contact-icon fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://www.facebook.com/brenna.watry" aria-label="Go to Brenna's Facebook page." tabIndex="0">
                <i className="contact-icon fab fa-facebook-square fa-3x"></i>
            </a>
        </Container>
}
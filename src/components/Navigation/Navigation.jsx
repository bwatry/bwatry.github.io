import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navigation.css";

export default function Navigation() {
    return <Navbar className="teal-section" expand="lg" variant="dark" sticky="top">
                <Navbar.Brand href="index.html">
                    <img className="nav-home" src="Images/Art Deco Logo-sm.png" alt="Home" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="other-pages" href="about-me.html">About Me</Nav.Link>
                        <Nav.Link className="other-pages" href="story.html">Unexpected Gift</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
}
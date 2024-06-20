import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
    return <Navbar className="teal-section" expand="lg" variant="dark" sticky="top">
                <Navbar.Brand href="/" tabIndex="0">
                    <img className="nav-home" src="Images/Art Deco Logo-sm.png" alt="Go to Home Page" title="Go to Home Page" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="other-pages" as={Link} to="/about" tabIndex="0">About Me</Nav.Link>
                        <Nav.Link className="other-pages" as={Link} to="//breezyfohn.com/#/cancer" tabIndex="0">My Journey</Nav.Link>
                        {/* <Nav.Link className="other-pages" as={Link} to="/story" tabIndex="0">Unexpected Gift</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
}
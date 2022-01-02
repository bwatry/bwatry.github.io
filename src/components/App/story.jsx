import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";

export default function Story() {
    return <div>
        <Navigation />
        <Container fluid className="white-section">
            <h1>This Page is Under Construction</h1>
            <p>Check back in the future for an interactive, choice-based story!</p>
        </Container>
        <Footer />
    </div>
}
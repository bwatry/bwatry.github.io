import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonials() {
    return <Container fluid id="testimonials" className="teal-section">
                <Carousel id="testimonial-carousel" className="carousel slide" interval={8000}>
                    <Carousel.Item className="container-fluid">
                        <h3 className="testimonial-text">I told her for years that she should become a programmer. She finally listened to me.</h3>
                        <em>Dad (father)</em>
                    </Carousel.Item>
                    <Carousel.Item className="container-fluid">
                        <h3 className="testimonial-text">Brenna is a lifesaver! She just knows what to do and does it.</h3>
                        <em>Every employer ever (not a direct quote)</em>
                    </Carousel.Item>
                    <Carousel.Item className="container-fluid">
                        <h3 className="testimonial-text">She should be feeding us more. Like on the hour every hour. And she doesn't pet us enough. But otherwise, she's all right.</h3>
                        <em>Saga & Rumor (cats)</em>
                    </Carousel.Item>
                </Carousel>
                <img className="line-break-gold" src="Images/Art Deco Logo-sm.png" alt="Art Deco line break" />
    </Container>
}
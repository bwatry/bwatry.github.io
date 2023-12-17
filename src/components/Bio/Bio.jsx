import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./bio.css";
import Col from "react-bootstrap/Col";

export default function Bio() {
    return <Container fluid className="bio-section white-section container-fluid">
            <Row>
                <Col md="12" lg="auto">
                    <img className="about-me-img" src="Images/Art Deco Picture-white.png" alt="Picture of Brenna" />
                </Col>
                <Col md="auto" lg="8">
                    <h1>How It Started</h1>
                    <p>
                        I dreamed of being a writer as a child.
                        I even got a degree in creative writing and published a few short
                        stories. To pay the bills, I took a job writing science-based legal reports.
                    </p>
                    <p>
                        And then, in an unusual and fortuitous turn of events, I got the
                        chance to try my hand at creating, cleaning, and transforming a
                        database. I took a few online classes, and the spark was lit.
                    </p>
                    <p>
                        SQL was nice enough, but I wanted to explore other languages, so I
                        took a course in web development, and <em>that</em> was when I
                        really fell in love. No hesitation: I made a career change.
                    </p>
                    <h1>How It's Going</h1>
                    <p>
                        For the last two years, I've been working as a front end developer 
                        in the eCommerce field. I've lost count of the number of sites I've 
                        integrated on, but some notables include <a href="//www.keenfootwear.com">KEEN Footwear</a>, 
                        &nbsp;<a href="//camilla.com">Camilla</a>,
                        and <a href="//www.bluefly.com">Bluefly</a>. 
                        For more repos, check out <a href="//github.com/bwatry">my GitHub</a>.
                    </p>
                    <p>
                        I'm always excited to learn something new, like TypeScript, 
                        or deepen my existing knowledge of React, JavaScript, or Sass. 
                    </p>
                    <p>
                        I'm looking for new opportunities, and a chance to continue growing as a 
                        developer. If you think I might be a good fit for your company, 
                        please don't hesitate to reach out!
                    </p>
                </Col>
            </Row>
        </Container>
}
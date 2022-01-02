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
                    <h1>About Brenna</h1>
                    <p>I've known since I was a child that I wanted to be a writer.
                        I even got a degree in creative writing and published a few short
                        stories. To pay the bills, I took a job writing science-based legal reports.
                    </p>
                    <p>And then, in an unusual and fortuitous turn of events, I got the
                        chance to try my hand at creating, cleaning, and transforming a
                        database. I took a few online classes so I'd know what I was doing.
                        It was just VBA and SQL to begin with, but the spark was lit.
                    </p>
                    <p>(Not by VBA, ew.)</p>
                    <p>SQL was nice enough, but I wanted to explore other languages, so I
                        took a course in web development, and <em>that</em> was when I
                        really fell in love. There were similarities not just between
                        programming and writing, but also with other hobbies I loved:
                        sewing, jigsaw puzzles, and art.
                    </p>
                    <p>I made this web site to demonstrate to myself and others what I
                        could do. I hope I've caught your interest!
                    </p>
                </Col>
            </Row>
        </Container>
}
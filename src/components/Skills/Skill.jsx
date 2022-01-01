import React from "react";
import Col from "react-bootstrap/Col";

export default function Skill(props) {
    return <Col sm="auto" lg="4" className="skill">
        <h2>{props.title}</h2>
        <img className="line-break-teal" src="Images/Art Deco Logo Teal.png" alt="Art Deco line break" />
        <p className="skill-details">{props.details}</p>
    </Col>
}
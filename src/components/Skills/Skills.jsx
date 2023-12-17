import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Skill from "./Skill";
import "./skills.css";

export default function Skills() {
    return <Container fluid className="container-fluid white-section">
            <Row>
                <Skill title="Programmer" details="I have two years of experience as a front end developer using HTML, CSS/Sass, JavaScript, and React. Before that, I dabbled in SQL databases." />
                <Skill title="Writer" details="I write anything from fiction to technical documents, which makes me a skilled communicator with both customers and technical collaborators." />
                <Skill title="Seamstress" details="I have been sewing for over a decade. Ask me if I've sewn the clothes I'm wearing (hint: I probably have!)." />
            </Row>
    </Container>
}
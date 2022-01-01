import React from "react";
import Skill from "./Skill";
import "./skills.css";

export default function Skills() {
    return <div>
        <section className="container-fluid white-section">
            <div className="row">
                <Skill title="Programmer" details="I have experience in HTML, CSS, JavaScript, SQL, NoSQL, & Python, as well as associated libraries." />
                <Skill title="Writer" details="I write anything from fiction to technical documents (though not both at the same time, that wouldn't do)." />
                <Skill title="Seamstress" details="I have been sewing for over a decade. I sew men's & women's clothing, but most of the time, I sew my clothing." />
            </div>
        </section>
    </div>
}
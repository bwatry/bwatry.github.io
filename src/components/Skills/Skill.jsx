import React from "react";

export default function Skill(props) {
    return <div className="skill col-lg-4">
        <h2>{props.title}</h2>
        <img className="line-break-teal" src="Images/Art Deco Logo Teal.png" alt="Art Deco line break" />
        <p className="skill-details">{props.details}</p>
    </div>
}
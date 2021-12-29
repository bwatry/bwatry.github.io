import React from "react";

export default function Navigation() {
    return <div>
        <section className="teal-section">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="index.html">
                    <img className="nav-home" src="Images/Art Deco Logo-sm.png" alt="Home" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="other-pages nav-item">
                            <a className="nav-link" href="about-me.html">About Me</a>
                        </li>
                        <li className="other-pages nav-item">
                            <a className="nav-link unlinked" href="story.html">Unexpected Gift</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    </div>
}
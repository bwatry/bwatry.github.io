import React from "react";

export default function Navigation() {
    return <div>
        <section class="teal-section">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="index.html">
                    <img class="nav-home" src="Images/Art Deco Logo-sm.png" alt="Home" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="other-pages nav-item">
                            <a class="nav-link" href="about-me.html">About Me</a>
                        </li>
                        <li class="other-pages nav-item">
                            <a class="nav-link unlinked" href="story.html">Unexpected Gift</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    </div>
}
import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return <footer id="footer" className="container-narrow white-section">
            <p>© Copyright {currentYear} Brenna Watry</p>
            <p>Design elements created by Brenna Watry in <a href="https://www.canva.com/create/logos/">Canva.com</a>'s logo creater.</p>
        </footer>
}
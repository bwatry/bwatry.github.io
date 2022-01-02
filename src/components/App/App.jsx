import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
    return <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
}
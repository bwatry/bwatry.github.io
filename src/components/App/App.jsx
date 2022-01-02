import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Story from "./story";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
    return <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
}
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/Contact";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";
import Credits from "../pages/Credits";
import About_contact from "../pages/About_contact";

const Path = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/about_contact" element={<About_contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Path;

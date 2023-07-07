import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import { render } from "react-dom";
import "./App.css";
import React from "react";
import About from "./components/aboutme";
import Navtitle from "./components/navbar";
import CV from "./components/cv";
import Projects from "./components/projects";
import Contact from "./components/contactme";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navtitle />

      <div>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

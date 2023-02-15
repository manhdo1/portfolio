import "./App.css";
import React from "react";
import "../src/components/GlobalCss.css";

import Home from "./layout/home/home";
import { Route, Routes } from "react-router-dom";
import Skills from "./layout/skills/skills";
import Navbar1 from "./components/navbar";
import Project from "./layout/project";
import Contact from "./layout/contact";

import Footed from "./components/footed";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footed />
    </>
  );
}

export default App;

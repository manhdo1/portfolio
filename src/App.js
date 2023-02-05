import "./App.css";
import React from "react";
import "../src/components/GlobalCss.css";

import Home from "./layout/home/home";
import { Route, Routes } from "react-router-dom";
import Skills from "./layout/skills/skills";
import Navbar1 from "./components/navbar";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
      {/* <Home/> */}
      {/* <Routes>

        <Route path="/skills" element={ <Skills/> } />
    
      </Routes> */}
    </>
  );
}

export default App;

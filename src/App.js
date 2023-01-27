
import "./App.css";
import React from "react";
import "../src/components/GlobalCss.css";
import Navbar1 from "./components/navbar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Htmlcss from "../src/assets/image/coding.png";
import Levels from "./components/levels/level";

const color = {
  lv1: "#7C7C7C",
  lv2: "#04FC04",
  lv3: "#FBF404",
  lv4: "#FC7C1C",
  lv5: "#FC0404",
};
const img = {
  HCJ: Htmlcss,
};
const text = {
  hcj: "html/css/js",
};
const level = {
  fa: "Fundamental Awareness",
  no: "Novice",
  in: "Intermediate",
  ad: "Advanced",
  ex: "Expert",
};
function App() {
  return (
    <>
      {/* <Navbar1 /> */}
      {/* <Banner /> */}
      <Skills color={color} img={img} text={text} />
      <Levels level={level} color={color}/>
    </>
  );
}

export default App;

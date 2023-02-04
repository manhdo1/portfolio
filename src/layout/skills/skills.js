import React from "react";
// import { color, img, text } from "../../App";
import Skill from "../../components/skills";
import Htmlcss from "../../assets/image/coding.png"
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
const Skills = () => {
  return (
    <>
      <Skill color={color} img={img} text={text} />
    </>
  );
};
export default Skills;

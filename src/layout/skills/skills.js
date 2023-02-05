import React from "react";
import Skill from "../../components/skills";
// import Htmlcss from "../../assets/image/coding.png";
import react from "../../assets/image/physics.png";
import css from "../../assets/image/css-3.png";
import html from "../../assets/image/html.png";
import js from "../../assets/image/js.png";
import ts from "../../assets/image/typescript.png";
import nj from "../../assets/image/nj2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
// import Levels from "../../components/levels/level";

import Loading1 from "../../components/load";
import UpdateSoon from "../updateSoon";
// const color = {
//   lv1: "#7C7C7C",
//   lv2: "#04FC04",
//   lv3: "#FBF404",
//   lv4: "#FC7C1C",
//   lv5: "#FC0404",
// };
const lv1 = "#1CACF4";
const lv2 = "#096edd";
const lv3 = "#FC7C1C";
const lv4 = "#FCFB20";
const lv5 = "#195d8c";

// export const level = {
//   fa: "Fundamental Awareness",
//   no: "Novice",
//   in: "Intermediate",
//   ad: "Advanced",
//   ex: "Expert",
// };
const Skills = () => {
  return (
    <>
      <Container className="containerSkills" >
        <h4 className="title">Programming skills</h4>
        <Row>
          {/* <Col sm={3}>
            <Levels level={level} color={color} />
          </Col> */}
          <Col>
            <Row className="mb-5" xs={1} md={6}>
              <Col>
                <Skill color={lv3} img={html} text={"html"} />
              </Col>
              <Col>
                <Skill color={lv1} img={css} text={"css"} />
              </Col>
              <Col>
                <Skill color={lv4} img={js} text={"js"} />
              </Col>
              <Col>
                <Skill color={lv5} img={react} text={"reactjs"} />
              </Col>
              <Col>
                <Skill color={lv2} img={ts} text={"typescript"} />
              </Col>
              <Col>
                <Skill color={lv2} img={nj} text={"nextjs"} />
              </Col>
            </Row>
           
          </Col>
          <UpdateSoon/>
          {/* <Col>
            <Skill color={color} img={img} text={text} />
          </Col> */}
        </Row>
          {/* <Loading1 /> */}
      </Container>
    </>
  );
};
export default Skills;

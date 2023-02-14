import React from "react";
import Skill from "../../components/skills";
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



import UpdateSoon from "../updateSoon";

var myArray = [
  {
    color: "#FC7C1C",
    text: "html",
    img: html,
  },
  {
    color: "#1CACF4",
    text: "Css",
    img: css,
  },
  {
    color: "#FCFB20",
    text: "javascript",
    img: js,
  },
  {
    color: "#195d8c",
    text: "reactjs",
    img: react,
  },
  {
    color: "#096edd",
    text: "typescript",
    img: ts,
  },
  {
    color: "#fafafa",
    text: "nextjs",
    img: nj,
  },
];

const Skills = () => {
  return (
    <>
      <Container className="containerSkills">
        <h4 className="title">Programming skills</h4>
        <Row>
          <Col>
            <Row className="mb-5" xs={1} md={4} lg={6}>
              {myArray.map((obj, index) => {
                return (
                  <>
                    <Col key={index}>
                      <Skill color={obj.color} img={obj.img} text={obj.text} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Col>
          <UpdateSoon />
        </Row>
      </Container>
    </>
  );
};
export default Skills;

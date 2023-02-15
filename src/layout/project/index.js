import React from "react";
import { Container } from "react-bootstrap";
import ProjectCp from "../../components/myproject";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UpdateSoon from "../updateSoon";
import "./style.css";
import pj from "../../assets/image/pj1.png";
import pj2 from "../../assets/image/pj2.png";


const arrayPJ = [
  {
    img: pj,
    title: "Website bán máy tính",
    type: 1,
    link: "https://github.com/manhdo1/projectmnm",
  },
  {
    img: pj2,
    title: "My portfolio",
    type: 2,
    link: "https://github.com/manhdo1/portfolio",
  },
  
];

const Project = () => {
  return (
    <>
      <Container className="containerSkills">
        <h4 className="title">my project</h4>
        <Row>
          <Col>
            <Row className="mb-5" xs={1} md={2} lg={4}>
              {arrayPJ.map((obj, index) => {
                return (
                  <>
                    <Col className="center" key={index}>
                      <ProjectCp
                        img={obj.img}
                        title={obj.title}
                        type={obj.type}
                        link={obj.link}
                      />
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
export default Project;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import img1 from "../../assets/image/img2.png";
import img2 from "../../assets/image/img3.jpg";
import { IoMaleFemaleSharp } from "react-icons/io5";
import { FaBirthdayCake, FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation, ImMail } from "react-icons/im";
const headerText = {
  hi: "WELCOM TO MY PORTFOLIO",
  intro: "Hi. I'M FRONT-END DEVELOPER",
  desc: "Constantly learning to cultivate knowledge about programming to develop professional skills.",
};
const Banner = () => {
  const sendmail = () => {
    window.location = "mailto:dodinhmanh75@gmail.com";
  };
  return (
    <>
      <section className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">{headerText.hi}</span>
              <h1>{headerText.intro}</h1>
              <p>
                {headerText.desc}
              </p>
              <Row>
                <Col>
                  <div className="imgAV">
                    <img src={img2} alt="img" />
                  </div>
                </Col>
                <Col>
                  <Infor icon={<FaUserAlt />} desc={"Do Dinh Manh"} />
                  <Infor icon={<IoMaleFemaleSharp />} desc={"Male"} />
                  <Infor icon={<FaBirthdayCake />} desc={"18/07/2001"} />
                  <Infor icon={<ImLocation />} desc={"Ho Chi Minh, Viet Nam"} />
                  <Infor icon={<BsFillTelephoneFill />} desc={"0971.237.810"} />
                  <Infor
                    icon={<ImMail/>}
                    desc={"dodinhmanh75@gmail.com"}
                    func={sendmail}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="img-header">
                <img className="img-as" src={img1} alt="heading" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Banner;
export const Infor = (props) => {
  return (
    <>
      <Row>
        {props.func ? (
          <div className="mt-2 cursor " onClick={props.func}>
            <span className="me-3">{props.icon}</span>
            <span className="link-1">{props.desc}</span>
          </div>
        ) : (
          <span className=" mt-2">
            <span className="me-3">{props.icon}</span>
            {props.desc}
          </span>
        )}
      </Row>
    </>
  );
};

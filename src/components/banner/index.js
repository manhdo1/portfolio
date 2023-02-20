import React from "react";
import { useState, useEffect } from "react";
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
  desc: "Constantly learning to cultivate knowledge about programming to develop professional skills.",
};
const Banner = () => {
  const sendmail = () => {
    window.location = "mailto:dodinhmanh75@gmail.com";
  };
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [`Front-end Developer`, "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    // console.log(loopNum , toRotate.length, i);
    let fullText = toRotate[i];
    // console.log(fullText);
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <Container>
        <section className="banner slide-in-fwd-center">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">{headerText.hi}</span>
              <h1>
                {`Hi! I'm `}{" "}
                <span className="txt-rotate" dataperiod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>{headerText.desc}</p>
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
                    icon={<ImMail />}
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
        </section>
      </Container>
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

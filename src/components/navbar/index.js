import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <>
      <Navbar className="text-color" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="gadian" data-hover="ĐỖ ĐÌNH MẠNH">DDM</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-color hovertext">
                Home
              </Nav.Link>
              <Nav.Link href="#Projects" className="text-color hovertext">
                Projects
              </Nav.Link>
              <Nav.Link href="#Skills" className="text-color hovertext">
                Skill
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100008130589056"
                  title="facebook"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png"
                    width="40"
                    className="while margin-icon"
                    alt="Facebook Icon Black Circle, Black And Transparent, Logo Design, New"
                  />
                </a>

                <a href="https://github.com/manhdo1" title="github">
                  <img
                    src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                    width="40"
                    alt="img "
                    className="while margin-icon" 
                  />
                </a>
                <a
                  href="https://www.instagram.com/manhdo1807/"
                  title="instagram"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/instagram-icon-png/black-hd-instagram-icon-simple-black-design-9.png"
                    width="40"
                    alt="img"
                    className="while margin-icon"
                  />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbar1;

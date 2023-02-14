import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactF from "../../components/contact";
const Contact = () => {
  return (
    <>
      <Container className="containerSkills">
        <h4 className="title">Contact me</h4>
          <Row>
            <Col md={4}><ContactF/></Col>
            <Col md={8}></Col>
          </Row>
       
      </Container>
    </>
  );
};
export default Contact;

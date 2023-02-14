import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import "./style.css";
const ProjectCp = ({ img, title, type, link }) => {
  return (
    <>
      <Card className="tilt-in-top-1"
        style={{ width: "16rem", marginTop: "3rem", background: "#301E67" }}
      >
        <Card.Img variant="top" src={img} className="imgCard" />
        <Card.Body>
          <Card.Title className="colorText">{title}</Card.Title>
          {type == 1 ? (
            <>
              <Card.Text className="textCard">
                {" "}
                <AiOutlineTeam /> team project
              </Card.Text>
            </>
          ) : (
            <Card.Text className="textCard">
              {" "}
              <BsFillPersonFill /> personal project
            </Card.Text>
          )}
          <Button className="buttonCss">
            {" "}
            <a href={link} target="_blank" rel="noopener noreferrer" >
              Go to source
            </a>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProjectCp;

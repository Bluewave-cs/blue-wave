import { Col, Container, Row } from "react-bootstrap";

import "../styles/start.css";
import { CustomButton } from "./button";
import mainImage from "../../../assets/images/decorators/start-main.png";

export const Start = () => {
  const handleClick = () => {
    var element = document.getElementById("quote");
    element!.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="d-flex align-items-center start-background">
      <Container>
        <Row>
          <Col sm={12} md={7}>
            <h1 className="fs-3 start-title-sm">
              Professional Cleaning Services
            </h1>
            <h3 className="display-5 mt-0 mb-0 start-title-md">For a</h3>
            <h2 className="display-1 mt-0 mb-0 start-title-lg">Spotless</h2>
            <h2 className="display-1 mt-0 mb-0 start-title-lg">Business</h2>
            <h3 className="display-5 mt-0 mb-3 start-title-md">Environment</h3>

            <CustomButton
              type="button"
              buttonSize="lg"
              disabled={false}
              label="Get a quote"
              handleClick={handleClick}
            />
          </Col>
          <Col sm={12} md={4} className="d-none d-lg-block">
            <img className="start-main-image" src={mainImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

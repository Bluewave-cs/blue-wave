import { Col, Container, Row } from "react-bootstrap";

import "../styles/about_us.css";
import aboutUs from "../../../assets/images/about-us.png";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="bluewave-section">
        <Row>
          <Col sm={12} md={6} className="d-flex align-items-center">
            <img
              src={aboutUs}
              alt="About us - BlueWave"
              className="mx-auto d-block about-us-image "
            />
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className=" fs-1 bluewave-title">
              ABOUT <span className="bluewave-title-variant">US</span>
            </h1>
            <p className="fs-5 text-center bluewave-text">
              We are a team of experienced cleaning professionals who decided to
              start our own business with one goal: to provide{" "}
              <span className="bluewave-text-variant">
                honest, high-quality, and fair cleaning services.
              </span>{" "}
              With years of expertise, we know what it takes to deliver spotless
              results and exceptional care.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

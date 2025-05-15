import { Col, Container, Row } from "react-bootstrap";

import "../styles/contact_us.css";
import { Location } from "./location";

import ContactPhone from "../../../assets/images/contact/contact-phone.webp";
import EmailIcon from "../../../assets/images/contact/email-blue-icon.webp";
import PhoneIcon from "../../../assets/images/contact/phone-blue-icon-variant.webp";

import calgaryMap from "../../../assets/images/contact/calgary-map.webp";

export const ContactUs = () => {
  return (
    <section>
      <Container id="contact-us" className="bluewave-section">
        <Row className="mb-3">
          <Col
            className="mb-5 d-flex align-items-center justify-content-center order-2 order-md-1"
            sm={12}
            md={12}
            lg={6}
          >
            <img className="map" src={calgaryMap} alt="BlueWave phone" />
          </Col>
          <Col className="mb-5 order-1 order-md-2" sm={12} md={12} lg={6}>
            <Row className="d-flex flex-column justify-content-center align-items-center text-center mb-3">
              <img src={ContactPhone} alt="" className="phone-icon" />
              <h1 className="fs-1 bluewave-title">
                CALL US <span className="bluewave-title-variant">TODAY!</span>
              </h1>
              <p className="fs-5 text-center bluewave-text">
                We’re looking for new clients
              </p>
            </Row>

            <Row className="row d-flex justify-content-center mb-4">
              <Col md={2} className="pe-md-0 text-center text-md-end">
                <img
                  src={EmailIcon}
                  alt="BlueWave Email Icon"
                  className="img-fluid xs-icon mb-2"
                />
              </Col>
              <Col md={8} className="ps-md-3 text-center text-md-start">
                <p className="fs-5 bluewave-text">
                  hello<wbr></wbr>@bluewave<wbr></wbr>-cleanings.com
                </p>
              </Col>
            </Row>

            <Row className="row d-flex justify-content-center mb-4">
              <Col md={2} className="pe-md-0 text-center text-md-end">
                <img
                  src={PhoneIcon}
                  alt="BlueWave Email Icon"
                  className="img-fluid xs-icon mb-2"
                />
              </Col>
              <Col md={8} className="ps-md-3 text-center text-md-start">
                <p className="fs-5 bluewave-text m-0">(825) 365 9214</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Location name="Calgary" md={6} lg={6} />
          <Location name="Airdrie" md={6} lg={6} />
          <Location name="Okotoks" md={6} lg={6} />
          <Location name="Chestermere" md={6} lg={6} />
        </Row>
      </Container>
    </section>
  );
};

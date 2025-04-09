import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

// import phoneIcon from "../../../assets/images/phone-icon.png";
// import contactIcon from "../../../assets/images/contact.png";

// import emailIcon from "../../../assets/images/email-icon.png";
// import phoneNumberPrimary from "../../../assets/images/phone-number-primary.png";
// import phoneNumberSecondary from "../../../assets/images/phone-number-secondary.png";

import "../styles/contact_us.css";
import { Location } from "./location";
// import { ContactItem } from "./contact_item";
import EmailIcon from "../../../assets/images/email-blue-icon.png";
import PhoneIcon from "../../../assets/images/phone-blue-icon.png";
import PhoneIconVariant from "../../../assets/images/phone-blue-icon-variant.png";

export const ContactUs = () => {
  return (
    <section>
      <Container className="bluewave-section">
        <Row>
          <Col xs={12}>
            <h1 className="fs-1 text-center bluewave-title-variant">
              Contact us today!
            </h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="text-center">
            {/* <img className="icon-lg" src={phoneIcon} alt="BlueWave phone" /> */}
          </Col>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Col sm={12} md={8}>
            <p className="fs-5 text-center bluewave-text">
              Now, we’re looking for{" "}
              <span className="bluewave-text-variant">new clients</span> who
              believe in us and value reliable, top-tier cleaning. Let us help
              you keep your space pristine while supporting a small business
              built on trust and dedication. Give us a chance, and we’ll exceed
              your expectations!
            </p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}></Col>

          <Col md={12}></Col>
        </Row>

        <Row className="mb-3">
          <Col sm={12} md={12} lg={6}>
            icono
          </Col>
          <Col sm={12} md={12} lg={6} className="">
            <div className="text-center">
              {/* <img
              src={contactIcon}
              className="icon-md "
              alt="BlueWave contact"
            /> */}
            </div>
            <Card className="card-secondary">
              <CardBody className="m-3 p-2 bluewave-text-2">
                <Row>
                  <Col
                    xs={12}
                    md={2}
                    className="text-center text-md-end p-3 pb-0"
                  >
                    <img
                      src={EmailIcon}
                      alt="BlueWave Email Icon"
                      className="img-fluid xs-icon"
                    />
                  </Col>

                  <Col
                    xs={12}
                    md={10}
                    className="text-center text-md-start p-3 ps-md-0"
                  >
                    <p className="fs-5 bluewave-text m-0">
                      bluewave<wbr></wbr>.cleanings<wbr></wbr>@gmail.com
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    xs={12}
                    md={2}
                    className="text-center text-md-end p-3 pb-0"
                  >
                    <img
                      src={PhoneIcon}
                      alt="BlueWave Email Icon"
                      className="img-fluid xs-icon"
                    />
                  </Col>

                  <Col
                    xs={12}
                    md={10}
                    className="text-center text-md-start p-3 ps-md-0"
                  >
                    <p className="fs-5 bluewave-text m-0">(825) 365 9214</p>
                  </Col>
                </Row>

                <Row>
                  <Col
                    xs={12}
                    md={2}
                    className="text-center text-md-end p-3 pb-0"
                  >
                    <img
                      src={PhoneIcon}
                      alt="BlueWave Email Icon"
                      className="img-fluid xs-icon"
                    />
                  </Col>

                  <Col
                    xs={12}
                    md={10}
                    className="text-center text-md-start p-3 ps-md-0"
                  >
                    <p className="fs-5 bluewave-text m-0">(825) 561 4392</p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
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
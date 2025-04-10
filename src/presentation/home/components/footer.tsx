import { Col, Container, Row } from "react-bootstrap";

import "../styles/footer.css";

import facebookIcon from "../../../assets/images/socials/facebook-icon.png";
import linkedin from "../../../assets/images/socials/linkedin-icon.png";
import whatsapIcon from "../../../assets/images/socials/whatsap-icon.png";

import emailLogo from "../../../assets/images/contact/email-white-icon.png";
import phoneLogo from "../../../assets/images/contact/phone-white-icon.png";

export const BlueWaveFooter = () => {
  return (
    <footer className="py-5 footer-container">
      <Container>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <h5 className="mb-4 footer-title">About us</h5>
            <p className="mb-4"></p>
            <div>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61573938560731">
                <img src={facebookIcon} alt="" className="footer-icon" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/bluewave-cleaning-services/about/?viewAsMember=true">
                <img src={linkedin} alt="" className="footer-icon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/bluewave_yyc/">
                <img src={whatsapIcon} alt="" className="footer-icon" />
              </a>
            </div>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <h5 className="mb-4 footer-title">BlueWave</h5>
            <ul className="ps-0">
              <li>
                <a href="#main-services" className="footer-text footer-list-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#about-us" className="footer-text footer-list-link">
                  About us
                </a>
              </li>
              <li>
                <a href="#services" className="footer-text footer-list-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact-us" className="footer-text footer-list-link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#quote" className="footer-text footer-list-link">
                  Get a quote
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={4} className="mb-5">
            <h5 className="mb-4 footer-title">Contact Info</h5>
            <ul className="ps-0">
              <li>
                <img src={emailLogo} alt="" className="footer-icon" />
                <p className="footer-text">bluewave.cleanings@gmail.com</p>
              </li>
              <li>
                <img src={phoneLogo} alt="" className="footer-icon" />
                <p className="footer-text">(825) 365 9214</p>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <hr className="mb-4 footer-text" />
            <div className="text-center">
              <p className="mb-0 footer-text">
                {" "}
                © {new Date().getFullYear()} BlueWave. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

/*

   <footer className="footer-container">
      <Container className="">
        <Row>
          <Col md={2}>
            <img className="img-fluid footer-logo" src={footerLogo} alt="" />
          </Col>
          <Col md={10}>
            <Row className="">
              <Col sm={12} md={4}>
                <img
                  src={emailLogo}
                  alt="bluewave email"
                  className="footer-icon"
                />
                <p className="footer-text">bluewave.cleanings@gmail.com</p>
              </Col>
              <Col md={3}>
                <img
                  src={phoneLogo}
                  alt="bluewave email"
                  className="footer-icon"
                />
                <p className="footer-text">(825) 365 9214</p>
              </Col>
              <Col md={3}>
                <img
                  src={phoneLogo}
                  alt="bluewave email"
                  className="footer-icon"
                />
                <p className="footer-text">(825) 561 4392</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <p className="text-center footer-text">
              {" "}
              © {new Date().getFullYear()} BlueWave. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

*/

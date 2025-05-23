import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../styles/footer.css";

import facebookIcon from "../../../assets/images/socials/facebook-icon.webp";
import linkedin from "../../../assets/images/socials/linkedin-icon.webp";
import instagramIcon from "../../../assets/images/socials/instagram-icon.webp";

import emailLogo from "../../../assets/images/contact/email-white-icon.webp";
import phoneLogo from "../../../assets/images/contact/phone-white-icon.webp";
import { Fragment } from "react/jsx-runtime";
import { TermsAndConditionsModal } from "./terms_and_conditions";
import { PrivacyPolicyModal } from "./privacy_policy";

export const BlueWaveFooter = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const handleCloseTerms = () => setShowTerms(false);
  const handleShowTerms = () => setShowTerms(true);

  const handleClosePolicy = () => setShowPolicy(false);
  const handleShowPolicy = () => setShowPolicy(true);

  return (
    <Fragment>
      <footer className="py-5 footer-container">
        <Container>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <h5 className="mb-4 footer-title">About us</h5>
              <p className="mb-4"></p>
              <div className="ps-0">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61573938560731"
                >
                  <img
                    src={facebookIcon}
                    alt="Bluewave Facebook Account"
                    className="footer-icon"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/bluewave-cleaning-services/about/?viewAsMember=true"
                >
                  <img
                    src={linkedin}
                    alt="Bluewave Linkedin Account"
                    className="footer-icon"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/bluewave_yyc/"
                >
                  <img
                    src={instagramIcon}
                    alt="Bluewave Instragram Account"
                    className="footer-icon"
                  />
                </a>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <h5 className="mb-4 footer-title">BlueWave</h5>
              <ul className="ps-0">
                <li>
                  <a
                    href="#main-services"
                    className="footer-text footer-list-link"
                  >
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
                  <a
                    href="#contact-us"
                    className="footer-text footer-list-link"
                  >
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

            <Col md={6} lg={4} className="mb-4">
              <h5 className="mb-4 footer-title">Contact Info</h5>
              <ul className="ps-0">
                <li>
                  <img
                    src={emailLogo}
                    alt="Bluewave email"
                    className="footer-icon"
                  />
                  <p className="footer-text">
                    hello<wbr></wbr>@bluewave<wbr></wbr>-cleanings.com
                  </p>
                </li>
                <li>
                  <img
                    src={phoneLogo}
                    alt="Bluewave phone number"
                    className="footer-icon"
                  />
                  <p className="footer-text">(825) 365 9214</p>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between align-items-center">
            <hr className="mb-4 footer-text" />
            <Col xs="auto">
              <p className="mb-0 footer-text">
                {" "}
                © {new Date().getFullYear()} BlueWave. All rights reserved.
              </p>
            </Col>

            <Col xs="auto">
              <div className="d-flex gap-2">
                <p className="mb-0 footer-text footer-legal-item" onClick={handleShowTerms}>
                  Terms and conditions
                </p>
                <p className="mb-0 footer-text footer-legal-item" onClick={handleShowPolicy}>
                  Privacy policy
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <TermsAndConditionsModal
        show={showTerms}
        handleClose={handleCloseTerms}
      />

      <PrivacyPolicyModal show={showPolicy} handleClose={handleClosePolicy} />
    </Fragment>
  );
};

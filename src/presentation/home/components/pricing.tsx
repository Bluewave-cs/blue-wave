import { Col, Container, Row } from "react-bootstrap";
import { PricingCard } from "./pricing_card";

import "../styles/pricing.css";
import { postConstructionServices } from "../../../core/constants/post_construction_services";
import { officeServices } from "../../../core/constants/office_services";
import { commercialServices } from "../../../core/constants/commercial_services";

import postConstructionIcon from "../../../assets/images/services/post-construction-cleaning.webp";
import officeIcon from "../../../assets/images/services/office-cleaning-variant.webp";
import commercialIcon from "../../../assets/images/services/commercial-cleaning.webp";

import lightBackgroundArrowIcon from "../../../assets/images/light-background-arrow.webp";
import darkBackgroundArrowIcon from "../../../assets/images/dark-background-arrow.webp";
import { PricingCardVariant } from "./pricing_card_variant";

export const Pricing = () => {
  return (
    <section id="services">
      <div className="light-blue-container">
        <Container>
          <Row className="d-flex justify-content-center">
            <PricingCard
              icon={postConstructionIcon}
              title="POST CONSTRUCTION"
              cardColor="#ffffff"
              titleColor="#152835"
              serviceTitleColor="#152835"
              innerCard={false}
              arrowIcon={darkBackgroundArrowIcon}
              serviceList={postConstructionServices}
            />
            <PricingCard
              icon={officeIcon}
              title="OFFICE"
              cardColor="#152835"
              titleColor="#ffffff"
              serviceTitleColor="#ffffff"
              innerCard={true}
              arrowIcon={lightBackgroundArrowIcon}
              serviceList={officeServices}
            />
            <PricingCard
              icon={commercialIcon}
              title="COMMERCIAL"
              cardColor="#ffffff"
              titleColor="#152835"
              serviceTitleColor="#152835"
              innerCard={true}
              arrowIcon={darkBackgroundArrowIcon}
              serviceList={commercialServices}
            />
          </Row>
          <Row>
            <Col xs={12}>
              <PricingCardVariant />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

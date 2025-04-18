import { Container, Row } from "react-bootstrap";

import { FeatureItem } from "./feature_item";

import "../styles/features.css";
import yearsOfExperience from "../../../assets/images/features/years-of-experience.webp";
import localtedInCalgary from "../../../assets/images/features/located-in-calgary.webp";
import fairPrices from "../../../assets/images/features/fair-pirces.webp";

export const Features = () => {
  return (
    <Container className="features-container">
      <Row>
        <FeatureItem
          title="3 YEARS"
          subtitle="OF EXPERIENCE"
          icon={yearsOfExperience}
          iconAlt="3 years of experience"
        />
        <FeatureItem
          title="LOCATED"
          subtitle="IN CALGARY"
          icon={localtedInCalgary}
          iconAlt="Located in Calgary"
        />
        <FeatureItem
          title="FAIR"
          subtitle="PRICES"
          icon={fairPrices}
          iconAlt="Fair prices"
        />
      </Row>
    </Container>
  );
};

import { Card, CardBody, Container, Row } from "react-bootstrap";

import { ServiceItem } from "./service_item";

import "../styles/services.css";
import postConstructionIcon from "../../../assets/images/services/post-construction-cleaning.webp";
import officeIcon from "../../../assets/images/services/office-cleaning.webp";
import commercialIcon from "../../../assets/images/services/commercial-cleaning.webp";
import airbnbIcon from "../../../assets/images/services/airnbn-cleaning.webp";

export const Services = () => {
  return (
    <section id="main-services">
      <Container className="services-container">
        <Card className="services-card">
          <CardBody>
            <Row>
              <ServiceItem
                icon={postConstructionIcon}
                name="POST CONSTRUCTION"
              />
              <ServiceItem icon={officeIcon} name="OFFICE" />
              <ServiceItem icon={commercialIcon} name="COMMERCIAL" />
              <ServiceItem icon={airbnbIcon} name="AIRBNB" />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};

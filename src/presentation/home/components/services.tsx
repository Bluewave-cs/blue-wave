import { Card, CardBody, Container, Row } from "react-bootstrap";

import { ServiceItem } from "./service_item";

import "../styles/services.css";
import postConstructionIcon from "../../../assets/images/post-construction-cleaning.png";
import officeIcon from "../../../assets/images/office-cleaning.png";
import commercialIcon from "../../../assets/images/commercial-cleaning.png";
import airbnbIcon from "../../../assets/images/airnbn-cleaning.png";

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

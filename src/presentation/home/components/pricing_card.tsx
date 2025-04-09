import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";

import "../styles/pricing_card.css";
import serviceIcon from "../../../assets/images/service-icon.png";

interface PricingCardProps {
  icon: string;
  title: string;
  cardColor: string;
  titleColor: string;
  serviceTitleColor: string;
  arrowIcon: string;
  innerCard: boolean;
  serviceList: {
    name: string;
    description: string;
  }[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
  icon,
  title,
  cardColor,
  titleColor,
  serviceTitleColor,
  arrowIcon,
  innerCard,
  serviceList,
}) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4} className="py-4">
      <Card
        className="pricing-card h-100"
        style={{ backgroundColor: cardColor }}
      >
        <CardBody className="text-center d-flex flex-column ">
          <div>
            <img
              src={icon}
              alt=""
              className="img-fluid text-center pricing-card-icon"
            />
          </div>
          <h1 className="fs-5 pricing-card-title" style={{ color: titleColor }}>
            {title}
          </h1>
          <h4 className="fs-4 pricing-card-subtitle">CLEANING</h4>
          <hr className="my-4 separator" />
          {serviceList.map((service) => (
            <Row>
              <Col md={2} className="mb-2">
                <img
                  src={arrowIcon}
                  alt="BlueWave Service"
                  className="service-icon"
                />
              </Col>
              <Col md={10} className="text-sm-center text-md-start ps-0">
                <p
                  className="service-name m-0"
                  style={{ color: serviceTitleColor }}
                >
                  {service.name}
                </p>
                <p className="fs-6 service-description">
                  {service.description}
                </p>
              </Col>
            </Row>
          ))}

          {innerCard ? (
            <Card className="tertiary-card mt-auto my-4">
              <CardBody>
                <p className="fs-6 tertiary-card-primary-text">
                  We adapt to you.
                </p>
                <p className="fs-6 tertiary-card-seconday-text">
                  (We customize the service to your needs)
                </p>
              </CardBody>
            </Card>
          ) : null}
        </CardBody>
      </Card>
    </Col>
  );
};

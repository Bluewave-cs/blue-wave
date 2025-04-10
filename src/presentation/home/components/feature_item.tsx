import React from "react";
import { Col } from "react-bootstrap";

import "../styles/feature_item.css";

interface FeatureItemProps {
  title: string;
  subtitle: string;
  icon: string;
  iconAlt: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  subtitle,
  icon,
  iconAlt,
}) => {
  return (
    <Col
      sm={12}
      md={4}
      className="d-flex flex-column justify-content-center align-items-center feature-item"
    >
      <img className="feature-icon" src={icon} alt={iconAlt} />
      <p className="fs-3 mt-0 mb-0 feature-title ">{title}</p>
      <p className="fs-4 mt-0 mb-0 feature-subtitle">{subtitle}</p>
    </Col>
  );
};
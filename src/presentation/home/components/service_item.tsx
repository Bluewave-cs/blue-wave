import { Col } from "react-bootstrap";
import "../styles/service_item.css";

interface ServiceItemProps {
  icon: string;
  name: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ name, icon}) => {
  return (
    <Col xs={12} sm={6} md={6} lg={3} className="text-center service-item">
      <img className="service-item-icon" src={icon} alt={name} />
      <p className="fs-4 mt-0 mb-0 service-name">{name}</p>
      <p className="fs-3 mt-0 mb-0 cleaning-text">CLEANING</p>
    </Col>
  );
};

import { Col } from "react-bootstrap";

import locationIcon from "../../../assets/images/location-icon.webp";

interface LocationProps {
  name: string;
  lg: number;
  md: number;
}

export const Location: React.FC<LocationProps> = ({ name }) => {
  return (
    <Col xs={12} sm={12} md={3} lg={3} className="text-center mb-5">
      <img
        src={locationIcon}
        alt="Bluewave location"
        className="icon-sm img-fluid"
      />
      <p className="fs-4 text-center ml-0 bluewave-text">{name}</p>
    </Col>
  );
};

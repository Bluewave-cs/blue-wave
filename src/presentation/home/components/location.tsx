import { Col } from "react-bootstrap";

import locationIcon from "../../../assets/images/location-icon.png";

interface LocationProps {
  name: string;
  lg: number;
  md: number;
}

export const Location: React.FC<LocationProps> = ({ name, md, lg}) => {
  return (
    <Col xs={12} sm={12} md={md} lg={lg} className="text-center mb-5">
      <img
        src={locationIcon}
        alt="Bluewave location"
        className="icon-sm img-fluid"
      />
      <p className="fs-2 text-center ml-0 bluewave-text">{name}</p>
    </Col>
  );
};

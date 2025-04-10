import { Col, Row } from "react-bootstrap";

interface ContactItemProps {
  contact: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  return (
    <Row>
      <Col xs={12}></Col>
      <Col xs={12}>
        <p className="fs-5 text-center bluewave-text">{contact}</p>
      </Col>
    </Row>
  );
};
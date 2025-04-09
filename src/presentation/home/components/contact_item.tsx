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

/*

<div className="d-flex flex-row gap-3 align-items-center mb-2">
                <img className="xs-icon" src={emailIcon} alt="BlueWave email" />
                <h1 className="fs-5 text-blue">bluewave.cleanings@gmail.com</h1>
              </div>

              <div className="d-flex flex-row gap-3 align-items-center mb-2">
                <img
                  className="xs-icon"
                  src={phoneNumberPrimary}
                  alt="BlueWave phone number"
                />
                <h2 className="fs-5 text-blue"></h2>
              </div>

              <div className="d-flex flex-row gap-3 align-items-center mb-2">
                <img
                  className="xs-icon"
                  src={phoneNumberSecondary}
                  alt="BlueWave phone number"
                />
                <h2 className="fs-5 text-blue">(825) 561 4392</h2>
              </div>

*/

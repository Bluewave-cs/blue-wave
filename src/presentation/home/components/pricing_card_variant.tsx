import { Card, CardBody, Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import airbnbIcon from "../../../assets/images/airnbn-cleaning.png";

export const PricingCardVariant = () => {
  return (
    <Col xs={12}>
      <Card className="pricing-card">
        <CardBody>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <img
                  src={airbnbIcon}
                  alt=""
                  className="img-fluid text-center pricing-card-icon"
                />
              </div>
              <h1 className="fs-5 pricing-card-title">AIRBNB</h1>
              <h4 className="fs-4 pricing-card-subtitle">CLEANING</h4>
            </Col>
            <Col sm={12} md={12} lg={9}>
              <Row>
                <Col md={4}>
                  <div>
                    <p className="service-name mb-0">General Cleaning</p>
                    <ul className="pricing-card-list-item">
                      <li>Dust all surfaces (tables, shelves, countertops)</li>
                      <li>Vacuum and mop floors</li>
                      <li>Empty trashbins andreplace liners</li>
                      <li>
                        Disinfecthigh-touchareas (light
                        switches,doorknobs,remotes)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="service-name mb-0">Kitchen</p>
                    <ul className="pricing-card-list-item">
                      <li>Wipe down countertops and appliances</li>
                      <li>Clean inside microwave and fridge (if needed)</li>
                      <li>Wash and put away dishes</li>
                      <li>Refill coffee, tea, and essentials</li>
                    </ul>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <p className="service-name mb-0">Bathroom</p>
                    <ul className="pricing-card-list-item">
                      <li>Scrub toilet, sink, and shower/tub</li>
                      <li>Scrubtoilet, sink, and shower/tub</li>
                      <li>Refill toiletries (soap, shampoo, toiletpaper)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="service-name mb-0">Bedrooms & Living Area</p>
                    <ul className="pricing-card-list-item">
                      <li>Change and replace bed linens</li>
                      <li>Fluff pillows and arrange furniture neatly</li>
                      <li>Check forpersonal items left behind</li>
                    </ul>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <p className="service-name mb-0">FinalTouches</p>
                    <ul className="pricing-card-list-item">
                      <li>Change and replace bed linens</li>
                      <li>Fluff pillows and arrange furniture neatly</li>
                      <li>Check forpersonal items left behind</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

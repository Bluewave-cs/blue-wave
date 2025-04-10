import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { QuoteForm } from "./quote_form";
import { Fragment } from "react/jsx-runtime";

import quoteFormImage from "../../../assets/images/decorators/quote-form-image.png";

import "../styles/quote.css";

export const Quote = () => {
  return (
    <section id="quote">
      <Fragment>
        <Container className="bluewave-section-top-variant">
          <Row>
            <Col xs={12}>
              <h1 className="fs-1 text-center bluewave-title">
                GET A <span className="bluewave-title-variant">CUOTE</span>
              </h1>
            </Col>
          </Row>
        </Container>

        <div className="quote-section-background">
          <Container>
            <Row>
              <Col sm={12} md={12} lg={4} className="d-none d-lg-block">
                <img className="quote-form-image" src={quoteFormImage} alt="" />
              </Col>
              <Col sm={12} md={12} lg={8}>
                <Card className="contact-card">
                  <CardBody>
                    <QuoteForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    </section>
  );
};

import { Container, Nav, Navbar } from "react-bootstrap";
import navbarLogo from "../../../assets/images/logos/bluewave-navbar-logo.webp";

export const BlueWaveNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={navbarLogo} alt="Bluevawe Cleanings Logo" className="navbar-brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about-us">About us</Nav.Link>
            <Nav.Link href="#services">What's Included</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            <Nav.Link href="#quote">Get A Quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

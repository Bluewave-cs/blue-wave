import { Button, Modal } from "react-bootstrap";

interface TermsAndConditionsModalProps {
  show: boolean;
  handleClose: () => void;
}

export const TermsAndConditionsModal: React.FC<
  TermsAndConditionsModalProps
> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Last updated: 2025/04/15</h6>
        <p>
          Welcome to the BlueWave Cleaning Services website
          (https://www.bluewave-cleanings.com/). By accessing and using this
          website, you agree to comply with these Terms and Conditions. If you
          do not agree with any part, please do not use our services or website.
        </p>

        <h6>Services</h6>
        <p>
          BlueWave Cleaning Services provides professional cleaning services in
          Calgary, Airdrie, Okotoks, and Chestermere. All services are subject
          to availability and may vary depending on location and scope.
        </p>

        <h6>Bookings and Cancellations</h6>
        <p>
          To schedule a service, you must provide accurate information.
          Cancellations must be made at least 24 hours in advance. Failure to do
          so may result in a cancellation fee.
        </p>

        <h6>Prices and Payments</h6>
        <p>
          Prices are expressed in Canadian dollars (CAD) and may vary depending
          on the type of service, space size, and specific conditions. We
          reserve the right to change prices without prior notice.
        </p>

        <h6>Intellectual Property</h6>
        <p>
          All content on this website (text, images, logos, design) is the
          property of BlueWave Cleaning Services. Unauthorized reproduction or
          distribution is strictly prohibited.
        </p>

        <h6>Limitation of Liability</h6>
        <p>
          BlueWave Cleaning Services is not liable for any direct, indirect,
          incidental, or consequential damages arising from the use or inability
          to use this website or our services.
        </p>

        <h6>Third-Party Links</h6>
        <p>
          Our site may contain links to external websites. We have no control
          over their content and assume no responsibility for them.
        </p>

        <h6>Modifications</h6>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes become effective once published on the site. Continued use of
          the site constitutes your acceptance of the updated terms.
        </p>

        <h6>Governing Law</h6>
        <p>
          These terms are governed by the laws of the Province of Alberta,
          Canada.
        </p>

        <h6>Contact</h6>
        <p>
          For questions about these Terms and Conditions, contact us at: Email:
          bluewave.cleanings@gmail.com <br /> Phone: (825) 365 9214
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

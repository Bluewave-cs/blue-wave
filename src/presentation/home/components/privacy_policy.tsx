import { Button, Modal } from "react-bootstrap";

interface PrivacyPolicyModalProps {
  show: boolean;
  handleClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Privacy policy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Last updated: 2025/04/15</h6>
        <p>
          At BlueWave Cleaning Services, we value your privacy and are committed
          to protecting the personal information you provide through our website
          and services.
        </p>

        <h6>Information We Collect</h6>
        <p>We may collect the following personal data:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Service address</li>
          <li>Payment information (when applicable)</li>
        </ul>

        <h6>How We Use Your Information</h6>
        <hr />
        <h6>We use your information to:</h6>
        <ul>
          <li>Coordinate and deliver services</li>
          <li>Communicate with you</li>
          <li>Issue invoices and process payments</li>
          <li>Improve our website and service offerings</li>
        </ul>

        <h6>Disclosure of Information</h6>
        <hr />
        <h6>
          We do not share your personal information with third parties, except
          in the following cases:
        </h6>
        <ul>
          <li>Legal compliance</li>
          <li>Service provision (e.g., payment processors)</li>
          <li>Protection of our legal rights</li>
        </ul>

        <h6>Security</h6>
        <p>
          We implement appropriate measures to protect your personal
          information, but no system is completely secure. We recommend not
          sharing unnecessary sensitive information.
        </p>

        <h6>Cookies</h6>
        <p>
          We use cookies to enhance your experience on our site. You can
          configure your browser to refuse cookies, though some features may be
          affected.
        </p>

        <h6>Your Rights</h6>
        <p>
          You have the right to access, update, or delete your personal data. To
          make a request, please contact us directly.
        </p>

        <h6>Changes to This Policy</h6>
        <p>
          We reserve the right to update this Privacy Policy at any time. We
          recommend reviewing it periodically for any changes.
        </p>

        <h6>Contact</h6>
        <p>
          For questions regarding this Privacy Policy, contact us at: Email:
          hello@bluewave-cleanings.com
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

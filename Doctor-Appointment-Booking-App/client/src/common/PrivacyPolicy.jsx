import { Link } from "react-router-dom";
import "./System.css";

function PrivacyPolicy() {
  return (
    <div className="legal-page">

      <div className="system-orb system-orb-1"></div>
      <div className="system-orb system-orb-2"></div>
      <div className="system-orb system-orb-3"></div>

      <div className="legal-container">

        <div className="legal-header">
          <span className="legal-label">
            PRIVACY
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy and personal information are important to us.
          </p>
        </div>

        <div className="legal-card">

          <div className="legal-section">
            <h2>1. Information We Collect</h2>

            <p>
              We may collect information that you provide when creating
              an account or using the service, including your name,
              email address, phone number and appointment information.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. How We Use Information</h2>

            <p>
              Information may be used to create and manage your account,
              process appointments, communicate important updates and
              improve the overall service experience.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Information Security</h2>

            <p>
              Reasonable technical and organizational measures are used
              to help protect personal information from unauthorized
              access, alteration, disclosure or destruction.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Sharing Information</h2>

            <p>
              Personal information is not sold. Information may be shared
              with relevant service providers or healthcare professionals
              when necessary to provide requested services.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Browser Storage</h2>

            <p>
              Browser storage technologies may be used to remember
              preferences, maintain sessions and support certain
              functionality.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Your Choices</h2>

            <p>
              You may contact the support team regarding your personal
              information and request updates or deletion where applicable
              and subject to legal requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Policy Updates</h2>

            <p>
              This Privacy Policy may be updated periodically to reflect
              changes to the service or applicable requirements.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Contact</h2>

            <p>
              If you have questions or concerns regarding this Privacy
              Policy, please contact the support team.
            </p>
          </div>

          <div className="legal-actions">

            <Link
              to="/register"
              className="legal-button legal-button-secondary"
            >
              ← Back to Registration
            </Link>

            <Link
              to="/terms"
              className="legal-button legal-button-primary"
            >
              Terms & Conditions →
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
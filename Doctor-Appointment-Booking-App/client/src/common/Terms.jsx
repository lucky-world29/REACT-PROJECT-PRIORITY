import { Link } from "react-router-dom";
import "./System.css";

function Terms() {
  return (
    <div className="legal-page">

      <div className="system-orb system-orb-1"></div>
      <div className="system-orb system-orb-2"></div>
      <div className="system-orb system-orb-3"></div>

      <div className="legal-container">

        <div className="legal-header">
          <span className="legal-label">
            TERMS OF USE
          </span>

          <h1>Terms & Conditions</h1>

          <p>
            Please read these terms carefully before using the service.
          </p>
        </div>

        <div className="legal-card">

          <div className="legal-section">
            <h2>1. Acceptance of Terms</h2>

            <p>
              By accessing or using this service, you agree to comply
              with these Terms & Conditions. If you do not agree with
              these terms, please discontinue use of the service.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Account Registration</h2>

            <p>
              When creating an account, you agree to provide accurate,
              complete and current information. You are responsible for
              maintaining the confidentiality of your account credentials.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Appointments</h2>

            <p>
              Appointment availability depends on the schedules and
              availability of healthcare professionals. An appointment
              request may be subject to confirmation or availability.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. User Responsibilities</h2>

            <p>
              Users are responsible for providing correct information
              and using the service in a lawful and responsible manner.
              You must not misuse, disrupt or attempt to gain unauthorized
              access to the service.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Medical Disclaimer</h2>

            <p>
              The service is intended to help users connect with
              healthcare professionals and manage appointments. It does
              not itself provide medical diagnosis, treatment or emergency
              medical services.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Service Availability</h2>

            <p>
              We may temporarily modify, suspend or discontinue parts of
              the service for maintenance, updates or other operational
              reasons.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Changes to These Terms</h2>

            <p>
              These terms may be updated from time to time. Continued use
              of the service after changes are published indicates
              acceptance of the updated terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Contact</h2>

            <p>
              If you have questions regarding these Terms & Conditions,
              please contact the support team.
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
              to="/privacy-policy"
              className="legal-button legal-button-primary"
            >
              Privacy Policy →
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Terms;
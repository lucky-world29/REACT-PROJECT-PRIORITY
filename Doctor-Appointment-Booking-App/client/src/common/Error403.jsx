import { Link } from "react-router-dom";
import "./System.css";

function Error403() {
  return (
    <div className="system-page">

      <div className="system-orb system-orb-1"></div>
      <div className="system-orb system-orb-2"></div>
      <div className="system-orb system-orb-3"></div>

      <div className="system-floating-symbol system-symbol-1">⛔</div>
      <div className="system-floating-symbol system-symbol-2">✚</div>
      <div className="system-floating-symbol system-symbol-3">⚕</div>
      <div className="system-floating-symbol system-symbol-4">♡</div>

      <div className="system-container">

        <div className="system-visual">

          <div className="system-ring system-ring-1"></div>
          <div className="system-ring system-ring-2"></div>
          <div className="system-ring system-ring-3"></div>

          <div className="system-orb-visual">
            <div className="system-medical-cross">×</div>
          </div>

          <div className="system-mini-card system-mini-card-1">
            <div className="system-mini-icon">⛔</div>
            <div>
              <strong>Access Restricted</strong>
              <span>Permission required</span>
            </div>
          </div>

        </div>

        <div className="system-content">

          <div className="system-code">
            ERROR 403
          </div>

          <h1>
            Access <span>Denied.</span>
          </h1>

          <p>
            You don't have permission to access this resource.
            If you believe this is a mistake, please contact support.
          </p>

          <div className="system-actions">
            <Link to="/" className="system-primary-button">
              ← Go to Home
            </Link>

            <Link to="/contact" className="system-secondary-button">
              Contact Support
            </Link>
          </div>

          <div className="system-status">
            <span className="system-status-dot"></span>
            Your session remains protected.
          </div>

        </div>

      </div>
    </div>
  );
}

export default Error403;
import { Link } from "react-router-dom";
import "./System.css";

function Error404() {
  return (
    <div className="system-page">

      <div className="system-orb system-orb-1"></div>
      <div className="system-orb system-orb-2"></div>
      <div className="system-orb system-orb-3"></div>

      <div className="system-floating-symbol system-symbol-1">✚</div>
      <div className="system-floating-symbol system-symbol-2">♡</div>
      <div className="system-floating-symbol system-symbol-3">⚕</div>
      <div className="system-floating-symbol system-symbol-4">🩺</div>

      <div className="system-container">

        <div className="system-visual">

          <div className="system-ring system-ring-1"></div>
          <div className="system-ring system-ring-2"></div>
          <div className="system-ring system-ring-3"></div>

          <div className="system-orb-visual">
            <div className="system-medical-cross">?</div>
          </div>

          <div className="system-mini-card system-mini-card-1">
            <div className="system-mini-icon">🔎</div>
            <div>
              <strong>Page Not Found</strong>
              <span>Nothing here</span>
            </div>
          </div>

          <div className="system-mini-card system-mini-card-2">
            <div className="system-mini-icon">🩺</div>
            <div>
              <strong>Let's get you back</strong>
              <span>Everything is okay</span>
            </div>
          </div>

        </div>

        <div className="system-content">

          <div className="system-code">
            ERROR 404
          </div>

          <h1>
            Page <span>Not Found.</span>
          </h1>

          <p>
            The page you're looking for may have been moved, removed,
            or the address you entered may be incorrect.
          </p>

          <div className="system-actions">
            <Link to="/" className="system-primary-button">
              ← Back to Home
            </Link>

            <Link to="/doctors" className="system-secondary-button">
              Find Doctors
            </Link>
          </div>

          <div className="system-status">
            <span className="system-status-dot"></span>
            Don't worry, we'll help you find your way.
          </div>

        </div>

      </div>
    </div>
  );
}

export default Error404;
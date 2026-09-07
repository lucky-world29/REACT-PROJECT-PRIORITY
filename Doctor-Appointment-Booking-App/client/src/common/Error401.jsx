import { Link } from "react-router-dom";
import "./System.css";

function Error401() {
  return (
    <div className="system-page">

      <div className="system-orb system-orb-1"></div>
      <div className="system-orb system-orb-2"></div>
      <div className="system-orb system-orb-3"></div>

      <div className="system-floating-symbol system-symbol-1">🔒</div>
      <div className="system-floating-symbol system-symbol-2">✚</div>
      <div className="system-floating-symbol system-symbol-3">♡</div>
      <div className="system-floating-symbol system-symbol-4">⚕</div>

      <div className="system-container">

        <div className="system-visual">

          <div className="system-ring system-ring-1"></div>
          <div className="system-ring system-ring-2"></div>
          <div className="system-ring system-ring-3"></div>

          <div className="system-orb-visual">
            <div className="system-medical-cross">🔒</div>
          </div>

          <div className="system-mini-card system-mini-card-1">
            <div className="system-mini-icon">🔐</div>
            <div>
              <strong>Authentication</strong>
              <span>Login required</span>
            </div>
          </div>

        </div>

        <div className="system-content">

          <div className="system-code">
            ERROR 401
          </div>

          <h1>
            Login <span>Required.</span>
          </h1>

          <p>
            You need to sign in before you can access this resource.
            Please log in to continue securely.
          </p>

          <div className="system-actions">
            <Link to="/login" className="system-primary-button">
              Login →
            </Link>

            <Link to="/" className="system-secondary-button">
              ← Go to Home
            </Link>
          </div>

          <div className="system-status">
            <span className="system-status-dot"></span>
            Your account is safe.
          </div>

        </div>

      </div>
    </div>
  );
}

export default Error401;
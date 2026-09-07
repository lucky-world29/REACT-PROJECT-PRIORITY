import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="doctor-navbar">

      <div className="floating-navbar">

        {/* Logo */}
        <Link
          to="/"
          className="floating-logo"
          onClick={closeMenu}
        >
          <div className="floating-logo-icon">
            +
          </div>
        </Link>


        {/* Navigation */}
        <div
          className={`floating-nav ${
            menuOpen ? "open" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
            className={
              location.pathname === "/"
                ? "floating-nav-link active"
                : "floating-nav-link"
            }
          >
            Home
          </Link>


          <Link
            to="/doctors"
            onClick={closeMenu}
            className={
              location.pathname === "/doctors"
                ? "floating-nav-link active"
                : "floating-nav-link"
            }
          >
            Doctors
          </Link>


          <Link
            to="/appointments"
            onClick={closeMenu}
            className={
              location.pathname === "/appointments"
                ? "floating-nav-link active"
                : "floating-nav-link"
            }
          >
            Appointments
          </Link>

        </div>


        {/* Login */}
        <Link
          to="/login"
          className="floating-login"
          onClick={closeMenu}
        >
          <span>Login</span>
          <span className="floating-login-arrow">→</span>
        </Link>


        {/* Mobile Button */}
        <button
          className={`floating-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
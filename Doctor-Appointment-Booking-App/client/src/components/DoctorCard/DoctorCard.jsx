import { Link } from "react-router-dom";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">

      {/* Decorative glow */}
      <div className="card-glow"></div>

      {/* Top Section */}
      <div className="doctor-card-top">

        {/* Doctor Avatar */}
        <div className="doctor-avatar-small">
          {doctor.name
            .replace("Dr. ", "")
            .charAt(0)
            .toUpperCase()}

          <span className="online-dot"></span>
        </div>

        {/* Availability */}
        <div className="availability">
          <span></span>
          Available
        </div>

      </div>

      {/* Doctor Information */}
      <div className="doctor-info">

        <h3>{doctor.name}</h3>

        <div className="specialization">
          <span className="medical-icon">⚕</span>
          {doctor.specialization}
        </div>

        {/* Rating */}
        <div className="doctor-rating">

          <span className="stars">
            ★★★★★
          </span>

          <strong>4.8</strong>

          <span className="reviews">
            (124 reviews)
          </span>

        </div>

      </div>

      {/* Doctor Details */}
      <div className="doctor-details">

        <div className="detail-item">
          <span className="detail-icon">🩺</span>

          <div>
            <small>Experience</small>
            <strong>8+ Years</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">👥</span>

          <div>
            <small>Patients</small>
            <strong>1.2K+</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🏥</span>

          <div>
            <small>Hospital</small>
            <strong>City Hospital</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">📅</span>

          <div>
            <small>Next Available</small>
            <strong>Today</strong>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="card-divider"></div>

      {/* Footer */}
      <div className="doctor-card-footer">

        <div className="consultation">
          <small>Consultation Fee</small>
          <strong>₹500</strong>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="book-doctor-btn"
        >
          Book Appointment
          <span>→</span>
        </Link>

      </div>

    </div>
  );
}

export default DoctorCard;
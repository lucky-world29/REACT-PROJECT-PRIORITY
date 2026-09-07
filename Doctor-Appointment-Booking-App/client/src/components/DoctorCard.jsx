import { Link } from "react-router-dom";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="card-glow"></div>

      <div className="doctor-card-top">
        <div className="doctor-avatar-small">
          <span>👨‍⚕️</span>
          <span className="online-dot"></span>
        </div>

        <div className="availability">
          <span></span>
          Available
        </div>
      </div>

      <div className="doctor-info">
        <h3>{doctor.name}</h3>

        <div className="specialization">
          <span className="medical-icon">✚</span>
          {doctor.specialization}
        </div>

        <div className="doctor-rating">
          <span className="stars">★★★★★</span>
          <strong>4.9</strong>
          <span className="reviews">(120+ reviews)</span>
        </div>
      </div>

      <div className="doctor-details">
        <div className="detail-item">
          <span className="detail-icon">🩺</span>
          <div>
            <small>Experience</small>
            <strong>8+ Years</strong>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">📍</span>
          <div>
            <small>Location</small>
            <strong>City Hospital</strong>
          </div>
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="doctor-card-footer">
        <div className="consultation">
          <small>Consultation</small>
          <strong>₹500</strong>
        </div>

        <Link
          className="book-doctor-btn"
          to={`/book/${doctor.id}`}
        >
          Book Appointment
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./BookAppointment.css";

function BookAppointment() {
  const { id } = useParams();

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
    "07:30 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName || !selectedDate || !selectedTime) {
      alert("Please fill all required details.");
      return;
    }

    alert("Appointment booked successfully!");
  };

  return (
    <div className="booking-page">

      {/* Background decorations */}
      <div className="booking-orb booking-orb-1"></div>
      <div className="booking-orb booking-orb-2"></div>

      <div className="container booking-container">

        {/* Back Button */}
        <Link to="/doctors" className="back-doctors">
          ← Back to Doctors
        </Link>

        {/* Page Heading */}
        <div className="booking-heading">
          <span>APPOINTMENT BOOKING</span>

          <h1>
            Book Your
            <strong> Appointment</strong>
          </h1>

          <p>
            Choose your preferred date and time and schedule
            your consultation with ease.
          </p>
        </div>

        <div className="row g-4">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <div className="col-lg-4">

            <div className="doctor-preview">

              <div className="doctor-preview-glow"></div>

              {/* Doctor Image / Avatar */}
              <div className="large-doctor-avatar">
                👨‍⚕️
              </div>

              <div className="available-badge">
                <span></span>
                Available Today
              </div>

              <h2>Dr. Rahul Sharma</h2>

              <p className="doctor-speciality">
                Cardiologist
              </p>

              <div className="doctor-rating">
                <span>★★★★★</span>
                <strong>4.9</strong>
                <small>(120+ reviews)</small>
              </div>

              <div className="doctor-info-list">

                <div>
                  <span>🩺</span>
                  <section>
                    <small>Experience</small>
                    <strong>12+ Years</strong>
                  </section>
                </div>

                <div>
                  <span>🏥</span>
                  <section>
                    <small>Hospital</small>
                    <strong>City Care Hospital</strong>
                  </section>
                </div>

                <div>
                  <span>💰</span>
                  <section>
                    <small>Consultation Fee</small>
                    <strong>₹700</strong>
                  </section>
                </div>

              </div>

              {/* Doctor ID */}
              <div className="doctor-id">
                Doctor ID: <strong>#{id}</strong>
              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="col-lg-8">

            <form
              className="booking-card"
              onSubmit={handleSubmit}
            >

              {/* Patient Details */}

              <div className="booking-section">

                <div className="booking-section-title">
                  <div className="section-number">01</div>

                  <div>
                    <h3>Patient Information</h3>
                    <p>Tell us who the appointment is for.</p>
                  </div>
                </div>

                <div className="row g-3">

                  <div className="col-md-6">

                    <label>
                      Patient Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) =>
                        setPatientName(e.target.value)
                      }
                      placeholder="Enter patient name"
                    />

                  </div>

                  <div className="col-md-6">

                    <label>Email Address</label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="example@email.com"
                    />

                  </div>

                  <div className="col-md-6">

                    <label>Phone Number</label>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value)
                      }
                      placeholder="+91 98765 43210"
                    />

                  </div>

                  <div className="col-md-6">

                    <label>Reason for Visit</label>

                    <select>
                      <option value="">
                        Select reason
                      </option>

                      <option>Regular Checkup</option>
                      <option>Heart Consultation</option>
                      <option>Follow-up</option>
                      <option>General Consultation</option>
                    </select>

                  </div>

                </div>

              </div>

              {/* Date */}

              <div className="booking-section">

                <div className="booking-section-title">

                  <div className="section-number">
                    02
                  </div>

                  <div>
                    <h3>Choose Date</h3>

                    <p>
                      Select your preferred appointment date.
                    </p>
                  </div>

                </div>

                <div className="date-wrapper">

                  <span>📅</span>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) =>
                      setSelectedDate(e.target.value)
                    }
                  />

                </div>

              </div>

              {/* Time */}

              <div className="booking-section">

                <div className="booking-section-title">

                  <div className="section-number">
                    03
                  </div>

                  <div>
                    <h3>Select Time</h3>

                    <p>
                      Available consultation slots.
                    </p>
                  </div>

                </div>

                <div className="time-grid">

                  {timeSlots.map((time) => (

                    <button
                      type="button"
                      key={time}
                      className={`time-slot ${
                        selectedTime === time
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedTime(time)
                      }
                    >
                      {time}
                    </button>

                  ))}

                </div>

              </div>

              {/* Summary */}

              <div className="appointment-summary">

                <div>
                  <small>Appointment with</small>

                  <strong>
                    Dr. Rahul Sharma
                  </strong>
                </div>

                <div>
                  <small>Date & Time</small>

                  <strong>
                    {selectedDate
                      ? selectedDate
                      : "Select date"}{" "}
                    {selectedTime && `• ${selectedTime}`}
                  </strong>
                </div>

                <div>
                  <small>Consultation Fee</small>

                  <strong>₹700</strong>
                </div>

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="confirm-booking"
              >
                <span>✓</span>
                Confirm Appointment
                <strong>→</strong>
              </button>

              <p className="secure-text">
                🔒 Your information is secure and protected.
              </p>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BookAppointment;
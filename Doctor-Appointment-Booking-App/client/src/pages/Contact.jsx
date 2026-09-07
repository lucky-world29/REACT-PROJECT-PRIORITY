import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("Contact Form:", formData);

    alert("Your message has been sent successfully! 💙");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="contact-bg-orb contact-bg-orb-1"></div>
      <div className="contact-bg-orb contact-bg-orb-2"></div>
      <div className="contact-bg-orb contact-bg-orb-3"></div>


      {/* =================================
          FLOATING PARTICLES
      ================================= */}

      <div className="contact-particle particle-1"></div>
      <div className="contact-particle particle-2"></div>
      <div className="contact-particle particle-3"></div>
      <div className="contact-particle particle-4"></div>
      <div className="contact-particle particle-5"></div>


      <div className="container contact-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="contact-heading">

          <span className="contact-eyebrow">
            WE'RE HERE FOR YOU
          </span>

          <h1>
            Let's Talk About
            <strong> Your Health.</strong>
          </h1>

          <p>
            Have a question, need assistance, or want to know more
            about DoctorApp? Our team is always ready to help.
          </p>

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="contact-main">

          {/* =================================
              LEFT SIDE - 3D SCENE
          ================================= */}

          <div className="contact-visual">

            <div className="scene-glow"></div>

            {/* 3D Orb */}
            <div className="medical-orb">

              <div className="orb-ring orb-ring-1"></div>
              <div className="orb-ring orb-ring-2"></div>
              <div className="orb-ring orb-ring-3"></div>

              <div className="orb-core">
                <span>+</span>
              </div>

            </div>


            {/* Floating Phone Card */}

            <div className="floating-card phone-card">

              <div className="floating-icon">
                ☎
              </div>

              <div>
                <small>Call us</small>
                <strong>+91 98765 43210</strong>
              </div>

            </div>


            {/* Floating Email Card */}

            <div className="floating-card email-card">

              <div className="floating-icon">
                @
              </div>

              <div>
                <small>Email us</small>
                <strong>hello@doctorapp.com</strong>
              </div>

            </div>


            {/* Floating Support Card */}

            <div className="floating-card support-card">

              <div className="support-avatar">
                ✓
              </div>

              <div>
                <strong>We're online</strong>
                <small>Usually replies instantly</small>
              </div>

              <span className="online-dot"></span>

            </div>


            {/* 3D Medical Cross */}

            <div className="medical-cross-3d">
              <div className="cross-horizontal"></div>
              <div className="cross-vertical"></div>
            </div>


            {/* Decorative Rings */}

            <div className="scene-ring scene-ring-1"></div>
            <div className="scene-ring scene-ring-2"></div>

          </div>


          {/* =================================
              RIGHT SIDE - FORM
          ================================= */}

          <div className="contact-card">

            <div className="contact-card-top">

              <div className="contact-card-icon">
                💬
              </div>

              <div>
                <span>SEND A MESSAGE</span>
                <h2>How can we help?</h2>
              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* Name + Email */}

              <div className="contact-row">

                <div className="contact-field">

                  <label>
                    Your Name <span>*</span>
                  </label>

                  <div className="contact-input">
                    <span>👤</span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>

                </div>


                <div className="contact-field">

                  <label>
                    Email Address <span>*</span>
                  </label>

                  <div className="contact-input">
                    <span>✉</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                    />
                  </div>

                </div>

              </div>


              {/* Phone + Subject */}

              <div className="contact-row">

                <div className="contact-field">

                  <label>
                    Phone Number
                  </label>

                  <div className="contact-input">
                    <span>📱</span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                </div>


                <div className="contact-field">

                  <label>
                    Subject <span>*</span>
                  </label>

                  <div className="contact-input">

                    <span>▣</span>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select subject
                      </option>

                      <option value="appointment">
                        Appointment Help
                      </option>

                      <option value="doctor">
                        Doctor Information
                      </option>

                      <option value="account">
                        Account Support
                      </option>

                      <option value="technical">
                        Technical Issue
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                  </div>

                </div>

              </div>


              {/* Message */}

              <div className="contact-field">

                <label>
                  Message <span>*</span>
                </label>

                <div className="contact-textarea">

                  <span>✎</span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                  ></textarea>

                </div>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="send-message-button"
              >

                <span>Send Message</span>

                <strong>→</strong>

              </button>

              <div className="contact-secure">
                🔒 Your information is private and secure.
              </div>

            </form>

          </div>

        </div>


        {/* =================================
            CONTACT INFO
        ================================= */}

        <div className="contact-info-grid">

          <div className="contact-info-box">

            <div className="info-box-icon">
              ☎
            </div>

            <div>
              <small>CALL US</small>
              <h3>+91 98765 43210</h3>
              <p>Mon - Sat · 9:00 AM - 7:00 PM</p>
            </div>

          </div>


          <div className="contact-info-box">

            <div className="info-box-icon">
              @
            </div>

            <div>
              <small>EMAIL US</small>
              <h3>hello@doctorapp.com</h3>
              <p>We usually respond within 24 hours.</p>
            </div>

          </div>


          <div className="contact-info-box">

            <div className="info-box-icon">
              ⌖
            </div>

            <div>
              <small>VISIT US</small>
              <h3>Hyderabad, India</h3>
              <p>Our healthcare support center.</p>
            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="contact-bottom">

          <div>
            <span>NEED AN APPOINTMENT?</span>

            <h2>
              Find the right doctor for you.
            </h2>
          </div>

          <Link
            to="/doctors"
            className="contact-doctors-button"
          >
            Find a Doctor
            <strong>→</strong>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Contact;
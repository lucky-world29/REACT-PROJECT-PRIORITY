import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="doctor-home">

      {/* =========================================
          ANIMATED BACKGROUND
      ========================================= */}

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>


      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero-section container">

        <div className="row align-items-center min-vh-100">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="col-lg-6 hero-content">

            <div className="badge-pill">
              <span className="pulse-dot"></span>
              Trusted Healthcare Platform
            </div>


            <h1>
              Your Health.
              <br />
              <span>Our Priority.</span>
            </h1>


            <p className="hero-description">
              Book appointments with trusted doctors, manage your
              healthcare and get the medical attention you deserve —
              all in one simple platform.
            </p>


            {/* Hero Buttons */}

            <div className="hero-buttons">

              <Link
                to="/doctors"
                className="btn-book"
              >
                Book an Appointment
                <span>→</span>
              </Link>


              <Link
                to="/doctors"
                className="btn-explore"
              >
                Explore Doctors
              </Link>

            </div>


            {/* Stats */}

            <div className="stats-row">

              <div>
                <strong>500+</strong>
                <span>Doctors</span>
              </div>

              <div>
                <strong>10K+</strong>
                <span>Patients</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Specialities</span>
              </div>

            </div>

          </div>


          {/* =====================================
              3D MEDICAL VISUAL
          ===================================== */}

          <div className="col-lg-6 visual-column">

            <div className="medical-scene">


              {/* Floating Appointment Card */}

              <div className="floating-card appointment-card">

                <div className="card-icon">
                  📅
                </div>

                <div>
                  <small>Next Appointment</small>
                  <strong>Today, 10:30 AM</strong>
                </div>

              </div>


              {/* =================================
                  DOCTOR 3D
              ================================= */}

              <div className="doctor-3d">

                <div className="doctor-glow"></div>


                <div className="doctor-avatar">

                  {/* Doctor Head */}

                  <div className="doctor-head">

                    <div className="hair"></div>

                    <div className="face">

                      <div className="eye eye-left"></div>

                      <div className="eye eye-right"></div>

                      <div className="smile"></div>

                    </div>

                  </div>


                  {/* Doctor Body */}

                  <div className="doctor-body">

                    <div className="stethoscope">

                      <span></span>

                      <span></span>

                    </div>


                    <div className="coat-pocket">
                      +
                    </div>

                  </div>

                </div>


                {/* Floating Medical Elements */}

                <div className="floating-icon icon-heart">
                  ❤️
                </div>

                <div className="floating-icon icon-cross">
                  ✚
                </div>

                <div className="floating-icon icon-plus">
                  +
                </div>

                <div className="floating-icon icon-health">
                  🩺
                </div>

              </div>


              {/* =================================
                  RATING CARD
              ================================= */}

              <div className="floating-card rating-card">

                <div className="rating-avatar">
                  👩‍⚕️
                </div>

                <div>

                  <strong>
                    Dr. Sarah Wilson
                  </strong>

                  <small>
                    Cardiologist
                  </small>

                  <div className="stars">
                    ★★★★★
                    <span>4.9</span>
                  </div>

                </div>

              </div>


              {/* =================================
                  SUCCESS CARD
              ================================= */}

              <div className="floating-card success-card">

                <span className="success-check">
                  ✓
                </span>

                <div>

                  <strong>
                    Appointment Confirmed
                  </strong>

                  <small>
                    You're all set!
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          SERVICES SECTION
      ========================================= */}

      <section className="services-section">

        <div className="container">

          <div className="section-heading">

            <span>
              OUR SERVICES
            </span>

            <h2>
              Everything You Need for Better Health
            </h2>

            <p>
              Simple, reliable and convenient healthcare at your fingertips.
            </p>

          </div>


          <div className="row g-4">


            {/* =================================
                FIND DOCTORS
            ================================= */}

            <div className="col-md-4">

              <div className="service-card">

                <div className="service-icon">
                  🩺
                </div>

                <h3>
                  Find Doctors
                </h3>

                <p>
                  Discover experienced doctors based on speciality,
                  location and availability.
                </p>

                <Link to="/doctors">
                  Explore Doctors →
                </Link>

              </div>

            </div>


            {/* =================================
                BOOK APPOINTMENT
            ================================= */}

            <div className="col-md-4">

              <div className="service-card featured-service">

                <div className="service-icon">
                  📅
                </div>

                <h3>
                  Book Appointment
                </h3>

                <p>
                  Choose your preferred date and time and book your
                  appointment in seconds.
                </p>

                <Link to="/doctors">
                  Book Now →
                </Link>

              </div>

            </div>


            {/* =================================
                MANAGE HEALTH
            ================================= */}

            <div className="col-md-4">

              <div className="service-card">

                <div className="service-icon">
                  💙
                </div>

                <h3>
                  Manage Health
                </h3>

                <p>
                  Keep track of appointments and stay connected with
                  your healthcare journey.
                </p>

                <Link to="/contact">
                  Learn More →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA SECTION
      ========================================= */}

      <section className="cta-section container">

        <div className="cta-box">

          <div>

            <span>
              YOUR HEALTH MATTERS
            </span>

            <h2>
              Ready to take care of your health?
            </h2>

            <p>
              Find the right doctor and book your appointment today.
            </p>

          </div>


          <Link
            to="/doctors"
            className="btn-book"
          >
            Get Started →
          </Link>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="home-footer">

        <div className="container">

          <div className="footer-content">

            <h3>
              Doctor<span>App</span>
            </h3>

            <p>
              Making healthcare simple, accessible and human.
            </p>


            <div className="footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/doctors">
                Doctors
              </Link>

              <Link to="/contact">
                Contact
              </Link>

              <Link to="/login">
                Login
              </Link>

            </div>

          </div>


          <div className="copyright">

            © 2024 DoctorApp. All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;
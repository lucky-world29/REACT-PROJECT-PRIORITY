import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import RegImage from "../img/register.png";

import "../components/LoginPage.css";
import { Link } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  
  // Send email using your API endpoint
  // const handleSend = async (emailText) => {
  //   alert(emailText);
  //   setSent(true); // Indicate email is being sent
  //   try {
  //     // Send email using your API endpoint
  //     const response = await API.post('/auth/register', { text: emailText,username: username,password:password}, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     console.log("Email sent successfully:", response.data);
  //     alert("A confirmation email has been sent!");
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     alert("Failed to send confirmation email. Please try again.");
  //   } finally {
  //     setSent(false); // Reset sending state
  //   }
  // };

  // Register component for a new user
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Call the registration API
  //     const res = await API.post("/auth/register", { username, password });
  //     // alert(res.data.message);

  //     //ohayo 
  //     // setIsRegistered(true); // Move to OTP verification step

  //     console.log(res.data.message);
    
  //     // If registration is successful, send the email
  //     const emailText = `Welcome ${username}! Thank you for registering.`;
  //     handleSend(emailText);

  //      // Redirect to OTP Verification page
  //      navigate("/verify-otp");
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.response?.data?.error || "An error occurred during registration.");
  //   }
  // };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setSent(true); // Indicate that the process has started
  
    try {
      // Call the registration API and let it handle everything
      const res = await API.post("/auth/register", { username, password });
     
      alert(res.data.message); // Notify user about registration success

      // Extract the OTP from the response
      const otp = res.data.otp;


      navigate("/verify-otp"); // Redirect to OTP verification page
      console.log("Username:", username);
      console.log("OTP:", otp);
  
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "An error occurred during registration.");
    } finally {
      setSent(false); // Reset the state
    }
  };
  

  return (
    <>
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            ACCOUNT PLUS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Registration Content */}
      <div className="row w-100 shadow rounded bg-white overflow-hidden my-auto" style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Left Section */}
        <div className="col-md-6 p-5">
          <h2 className="mb-3 fw-bold text-danger">✨ Sign Up</h2>
          <p className="text-muted mb-4">Free forever. No credit card needed.</p>
          <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input
      type="text"
      id="name"
      className="form-control"
      placeholder="Your Name"
      onChange={(e) => setUsername(e.target.value)}
      required
      autoComplete="username"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input
      type="password"
      id="password"
      className="form-control"
      placeholder="At least 8 characters"
      onChange={(e) => setPassword(e.target.value)}
      required
      autoComplete="new-password"
    />
  </div>
  <button type="submit" className="btn btn-primary w-100" disabled={sent}>
    {sent ? "Processing..." : "Continue"}
  </button>
</form>

          <p className="text-center mt-3">
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h4 className="fw-bold">Simple and inviting for a registration page!</h4>
            <p className="text-muted text-danger-emphasis">Your journey begins here. Sign up today and take the first step towards success!</p>
            <img
              src={RegImage}
              alt="Chart Preview"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Register;
 
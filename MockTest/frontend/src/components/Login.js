import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9988/auth/login", formData); // Use your backend URL
      setToken(response.data); // Store token for future use
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error.response?.data || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                onChange={handleChange}
                autoComplete="username"  // Added autocomplete
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
                autoComplete="current-password"  // Added autocomplete
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          {message && <p className="mt-3 text-center text-danger">{message}</p>}
          {token && (
            <div className="mt-4">
              <h5>Your Token:</h5>
              <p className="text-break">{token}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

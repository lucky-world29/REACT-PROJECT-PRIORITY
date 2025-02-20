import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    roles: "",
    phone: "",
    fullname: "",
    createdBy: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9988/auth/signup", {
        ...formData,
        roles: formData.roles.split(","),
      });
      setMessage(response.data); 
    } catch (error) {
      setMessage(error.response?.data || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center mb-4">Signup</h2>
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
                autoComplete="new-password"  // Added autocomplete
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                onChange={handleChange}
                autoComplete="tel"  // Added autocomplete
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="form-control"
                placeholder="Enter your full name"
                onChange={handleChange}
                autoComplete="name"  // Added autocomplete
              />
            </div>
            <div className="mb-3">
              <label htmlFor="createdBy" className="form-label">Created By</label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                className="form-control"
                placeholder="Who is creating this account?"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="roles" className="form-label">Roles</label>
              <input
                type="text"
                id="roles"
                name="roles"
                className="form-control"
                placeholder="Enter roles (comma separated)"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Signup</button>
          </form>
          {message && <p className="mt-3 text-center text-danger">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;

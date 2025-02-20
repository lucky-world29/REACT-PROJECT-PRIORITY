import React, { useState, useEffect } from "react";
import API from "../api";
import { Link } from "react-router-dom"; // Import Link for navigation

const Protected = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("user"); // Correct key

        console.log("Token from localStorage:", token);
        console.log("Username from localStorage:", storedUsername); 

        if (!storedUsername) {
          console.warn("Username is not set in localStorage");
        }
        setUsername(storedUsername); // Set username in state

        const res = await API.get("/auth/protected", {
          headers: { Authorization: token },
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage(err.response?.data?.message || "Error fetching data");
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      {username && <h2>Welcome, {username}!</h2>}
      <h3>{username}</h3>

      <nav>
        <ul>
          <li>
            <Link to="/add-category">Add Category</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
        </ul>
      </nav>
    </div>

  );
};

export default Protected;

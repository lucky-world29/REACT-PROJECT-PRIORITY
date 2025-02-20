const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const cors = require("cors");
const db = require("../config/db");
const router = express.Router();

//Ohayo
// Helper to generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

 
// Register
router.post("/register", async (req, res) => {
  const { text, username, password } = req.body;

  try {
        if (!username || !password) { 
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

   
    if (typeof password !== "string" || password.trim() === "") {
      return res.status(400).json({ message: "Invalid password format" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

     // Generate OTP
     const otp = generateOTP();
     console.log("Generated OTP:", otp);

    const query = "INSERT INTO users (username, password, otp, verified_otp) VALUES (?, ?, ?, ?)";
    db.query(query, [username, hashedPassword, otp, 0], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      try {
        // Send email only after successful registration
        const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "luckyrex2911@gmail.com",
            pass: "kjvbnxkadtpzpokg",
          },
        });

        await transport.sendMail({
          from: "luckyrex2911@gmail.com",
          to: username,
          subject: "Welcome to the platform!",
          html: `
          <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <h2 style="text-align: center; color: #4CAF50;">Welcome to Our Platform!</h2>
              <p>Welcome ${username}! Thank you for registering.</p>
              <p>Your OTP is ${otp}</p>
              <p>Hello,</p>
              <p>Thank you for joining us. We're thrilled to have you onboard. Click the link below to get started:</p>
              <a href="https://example.com" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 5px; text-align: center;">Get Started</a>
              <p style="margin-top: 20px;">If you have any questions, feel free to reply to this email.</p>
              <p>Best Regards,<br>Team</p>
            </div>
          </body>
              `,
        });

        return res
          .status(201)
          .json({ message: "User registered and email sent successfully" });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return res
          .status(500)
          .json({ message: "User registered but email sending failed" }); // Handle email failure
      }
    });
  } catch (error) {
    console.error("Error in registration process:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
 
// Verify OTP
router.post("/verify-otp", (req, res) => {
  const { username, otp } = req.body;
  console.log("Username:", username);
  console.log("OTP:", otp);
  

  if (!username || !otp) {
    return res.status(400).json({ message: "Username and OTP are required" });
  } 

  const query = "SELECT otp FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (results.length === 0 || String(results[0].otp) !== String(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const updateQuery = "UPDATE users SET verified_otp = 1 WHERE username = ?";
    db.query(updateQuery, [username], (updateErr) => {
      if (updateErr) return res.status(500).json({ error: "Database error during OTP verification" });

      res.json({ message: "OTP verified successfully" });
    });
  });
});


// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  });
});

// Protected Route
router.get("/protected", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "Token is required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: "Access granted", user });
  });
});

module.exports = router;

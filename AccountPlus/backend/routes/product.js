// const db = require("../config/db");
// src/routes/product.js
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Verify database connection
db.getConnection((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the database in product.js  ");
  } 
});

// Add Category
router.post("/categories", (req, res) => {
  const { name } = req.body;
  const query = "INSERT INTO categories (name) VALUES (?)";
  db.query(query, [name], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send({ id: results.insertId, name });
  });
});

// Add Product with Image
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.files?.image;

    if (!name || !description || !price || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save image to server
    const imagePath = path.join(uploadDir, image.name);
    await image.mv(imagePath);
 
    // Save product to database
    const imageURL = `/uploads/${image.name}`;
    db.query(
      "INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)",
      [name, description, price, imageURL],
      (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.status(201).json({ message: "Product added successfully", productId: result.insertId });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add Product with Category
router.post("/products", (req, res) => {
  const { name, price, categoryId } = req.body;
  const query = "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)";
  db.query(query, [name, price, categoryId], (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send({ id: results.insertId, name, price, categoryId });
  });
});

// Get Products by Category
router.get("/products", (req, res) => {
  const query = `
    SELECT p.id, p.name AS product_name, p.price, c.name AS category_name 
    FROM products p
    JOIN categories c ON p.category_id = c.id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).send(results);
  });
});

// Get Products by Category ID
router.get("/products/category/:id", (req, res) => {
  const categoryId = req.params.id;
  const query = `
    SELECT p.id, p.name AS product_name, p.price, c.name AS category_name 
    FROM products p
    JOIN categories c ON p.category_id = c.id
    WHERE c.id = ?
  `;
  db.query(query, [categoryId], (err, results) => {
    if (err) return res.status(500).send(err.message);
    if (results.length === 0) return res.status(404).json({ message: "No products found for this category" });
    res.status(200).send(results);
  });
});

module.exports = router;


// 
// -- Create categories table
// CREATE TABLE categories (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
// );

// -- Create products table
// CREATE TABLE products (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description TEXT NOT NULL,
//     price DECIMAL(10,2) NOT NULL,
//     image VARCHAR(255) NOT NULL,
//     category_id INT NOT NULL,
//     FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
// );
//
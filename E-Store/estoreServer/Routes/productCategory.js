const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const productCategories = express.Router();

productCategories.use(cors());
productCategories.use(bodyParser.json());

// Create a pool connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port:3306,
    multipleStatements:true
});

// Test the database connection on startup
pool.getConnection((err, connection) => {
    if (err) {
        console.error("MySQL connection error:", err.message);
    } else {
        console.log("MySQL connected successfully using createPool.");
        connection.release();  // Release the connection back to the pool
    }
});



productCategories.get("/", (req, res) => {
    let categorydata;

    pool.query("Select * from categories", (error, categories) => {
        if (error) {
            categorydata = error;
            res.status(500).send(categorydata);
        } else {
            categorydata = categories;
            res.status(200).send(categorydata);
        }
    });
});

module.exports = productCategories;
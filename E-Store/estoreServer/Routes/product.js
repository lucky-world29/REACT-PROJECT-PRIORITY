
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const product = express.Router();  // Keep router name as 'product'

product.use(cors());
product.use(bodyParser.json());


// Database pool connection
const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "luckyrex",
    database : "estore",
    port : 3306,
    multipleStatements : true
})

// Test the database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("MySQL connection error:", err.message);
    } else {
        console.log("MySQL connected successfully using createPool.");
        connection.release();  // Release the connection
    }
})

product.get("/productCategories",(req,res)=>{
    let categoryData;

            pool.query("SELECT * FROM categories",(error,categories)=>{
                if(error){
                    categoryData = error;
                    res.status(500).send(error);
                }else{
                    categoryData = categories;
                    // res.status(200).send(categoryData);
                    res.status(200).send(categories);
                }
            })
})

product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("SELECT * FROM products",(err,rows)=>{
        if(err){
            res.status(500).send(err);
        }else{
            productData = rows;
            // res.status(200).send(productData);
            res.status(200).send(rows);
        }
    })
})


module.exports = product;   // Export product router
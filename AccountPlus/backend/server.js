    const express = require("express");
    const bodyParser = require("body-parser");
    const cors = require("cors");
    const dotenv = require("dotenv");
    const nodemailer = require("nodemailer");
    dotenv.config();

    const app = express();

    // Middleware
    app.use(bodyParser.json());
    app.use(cors());

    // Parse incoming JSON requests
    app.use(express.json());


    // Routes
    const authRoutes = require("./routes/auth");
    app.use("/api/auth", authRoutes);

    const productRoutes = require('./routes/product');
    app.use('/api/product', productRoutes);


    // Server listening
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

const express = require("express");
const productCategories = require("./Routes/productCategory");
const app = express();
const cors = require("cors");
app.use("/productCategories",productCategories);



// // // // // // // 
const PORT = 5001
app.listen(PORT, () => {
    console.log("Server running on port 5000");
});
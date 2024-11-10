const express = require("express");
const productCategories = require("./Routes/productCategory");
const app = express();

app.use("/productCategories",productCategories);



// // // // // // // 
const PORT = 5001
app.listen(PORT, () => {
    console.log("Server running on port 5000");
});
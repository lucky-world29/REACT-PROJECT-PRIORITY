const express = require('express');
const app = express();

const PORT = 5001;

const server = app.listen(PORT,()=>{
    console.log("App is running on the post - 5001");
})
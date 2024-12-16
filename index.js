const express = require("express");

const app = express();

app.get("/" , (req , res)=>{
    res.send("Hello I'm deployed🚀")
})

app.listen(3000 , ()=>{
    console.log("Backend is connected")
})
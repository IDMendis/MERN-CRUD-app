

//qesvLqmxQKO3rG6s
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use("/",(req,res)=>{
    res.send("Hello from backend.....");
});

mongoose.connect("mongodb+srv://admin:qesvLqmxQKO3rG6s@cluster0.2auvurx.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB");
})
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server is running on port 5000");
    });
})
.catch((err)=>{
    console.log(err);
});
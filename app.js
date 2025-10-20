

//qesvLqmxQKO3rG6s
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/UserRoutes');

const app = express();

//middleware
app.use("/users", router);

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
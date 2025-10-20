const express = require('express');
const router = express.Router();

//insert model
const User = require('../Model/UserModel');
//insert user controller
const UserController = require('../Controllers/UserCotroller');

//get all users
router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);


module.exports = router;

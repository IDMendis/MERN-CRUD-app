const express = require('express');
const router = express.Router();

//insert model
const User = require('../Model/UserModel');
//insert user controller
const UserController = require('../Controllers/UserCotroller');

//get all users
router.get("/",UserController.getAllUsers);

module.exports = router;

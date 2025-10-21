const express = require('express');
const router = express.Router();

//insert model
const User = require('../Model/UserModel');
//insert user controller
const UserController = require('../Controllers/UserCotroller');

//get all users
router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);


module.exports = router;

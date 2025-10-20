const User = require('../Model/UserModel');

// Get all users
const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({ users });
};

// Add a new user
const addUsers = async (req, res) => {
    const { name, gmail, age, password } = req.body;
    let user;
    
    try {
        user = new User({ name, gmail, age, password });
        await user.save();
    } catch (err) {
        console.log(err);
    }

    if (!user) {
        return res.status(500).json({ message: "Unable to add user" });
    }

    return res.status(201).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;

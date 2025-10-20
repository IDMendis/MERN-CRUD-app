const User = require('../Model/UserModel');

const getAllUsers = async (req, res) => {
    let Users;
    try{
        Users = await User.find();
    }catch(err){
        console.log(err);
    }

    //not found nam
    if(!Users){
        return res.status(404).json({message: "No Users found"});
    }
    //display all users
    return res.status(200).json({Users});

};

exports.getAllUsers = getAllUsers;
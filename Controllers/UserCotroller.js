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


    const addUsers= async(req,res,next)=>{
        const {name,gmail,age,password}= req.body;
        let users;
        try{
            users= new users({name,gmail,age,password});
            await users.save();

        }catch(err){
            console.log(err);
        }
        if(!users){
            return res.status(500).json({message: "Unable to add users"});
        }
    }

};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
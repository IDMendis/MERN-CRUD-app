const mongoose = require('mongoose');

const Schema = new mongoose.Schema;

const UserSchema = new Schema({
    name:{

        type: String,
        required: true,

    },
    gmail:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }

    

});

module.exports = mongoose.model('UserModule', UserSchema);
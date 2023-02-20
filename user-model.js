const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:4
    },
    contact:{
        type:Number,
        requried:true,
        minLength:10,
        maxLength:10
    },
    pincode:{
        required:true,
        type:Number
    }
},{timestamps: true});

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;
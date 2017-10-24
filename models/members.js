const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var membersSchema = new Schema({
    first_name :{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        min: 10,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}, {
        timestamps: true
    });

var Members = mongoose.model('member', membersSchema);
module.exports = Members;
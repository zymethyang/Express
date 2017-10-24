const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var tempsSchema = new Schema({
    username :{
        type:String,
        required:true
    },
    temp_1:{
        type:Number,
        required:false
    },
    temp_2:{
        type: Number,
        required: false
    },
    temp_3:{
        type: Number,
        required:false
    },
    temp_4:{
        type:Number,
        required:false
    },
    temp_5:{
        type: Number,
        required: false
    },
    temp_6:{
        type: Number,
        required:false
    },
    temp_7:{
        type:Number,
        required:false
    },
    temp_8:{
        type: Number,
        required: false
    },
    temp_9:{
        type: Number,
        required:false
    },
    temp_10:{
        type:Number,
        required:false
    },
    temp_11:{
        type: Number,
        required: false
    },
    temp_12:{
        type: Number,
        required:false
    },
}, {
        timestamps: true
    });

var Temps = mongoose.model('temp', tempsSchema);
module.exports = Temps;
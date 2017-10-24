const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var humiditisSchema = new Schema({
    username :{
        type:String,
        required:true
    },
    humiditi_1:{
        type:Number,
        required:false
    },
    humiditi_2:{
        type: Number,
        required: false
    },
    humiditi_3:{
        type: Number,
        required:false
    },
    humiditi_4:{
        type:Number,
        required:false
    },
    humiditi_5:{
        type: Number,
        required: false
    },
    humiditi_6:{
        type: Number,
        required:false
    },
    humiditi_7:{
        type:Number,
        required:false
    },
    humiditi_8:{
        type: Number,
        required: false
    },
    humiditi_9:{
        type: Number,
        required:false
    },
    humiditi_10:{
        type:Number,
        required:false
    },
    humiditi_11:{
        type: Number,
        required: false
    },
    humiditi_12:{
        type: Number,
        required:false
    },
}, {
        timestamps: true
    });

var Humiditis = mongoose.model('humiditi', humiditisSchema);
module.exports = Humiditis;
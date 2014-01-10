'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EspLogSchema=new Schema({
    timestamp : {
        type: Date,
        default: Date.now
    },
    level :{
        type : String,
        default: '',
        trim : true
    },
    thread : {
        type : String,
        default: '',
        trim : true
    },
    message :  {
        type : String,
        default: '',
        trim : true
    },
    fileName : {
        type : String,
        default: '',
        trim : true
    },
    method : {
        type : String,
        default: '',
        trim : true
    },
    lineNumber : {
        type : String,
        default: '',
        trim : true
    },
    class : {
        fullyQualifiedClassName : String,
        package : [String],
        className: String
    },
    host: {
        process : String,
        name : String,
        ip: String
    }
},{collection: 'log'});

mongoose.model('EspLog', EspLogSchema);
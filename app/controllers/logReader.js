'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    EspLog = mongoose.model('EspLog'),
    _ = require('lodash');

exports.all = function(req, res) {
    EspLog.find().sort('-timestamp').exec(function(err, logs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(logs);
        }
    });
};
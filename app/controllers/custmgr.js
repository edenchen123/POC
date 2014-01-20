'use strict';

var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'),
    State = mongoose.model('State');

exports.customers = function (req, res) {
    Customer.find({}, {}, function (err, customers) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(customers);
        }
    });
};

exports.customer = function (req, res) {
    var id = req.params.id;
    Customer.load(id, function (err, customer) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(customer);
        }
    });
};

exports.addCustomer = function (req, res) {
    var stateId = req.body.stateId;
    State.load(stateId, function (err, state) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var customer = new Customer();
            var s = {'id': state.id, 'abbreviation': state.abbreviation, 'name': state.name}

            customer.firstName = req.body.firstName;
            customer.lastName = req.body.lastName;
            customer.email = req.body.email;
            customer.address = req.body.address;
            customer.city = req.body.city;
            customer.state = s;
            customer.stateId = state.id;
            customer.zip = req.body.zip;
            customer.gender = req.body.gender;

            customer.save(function (err, customer) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(req.body);
                }
            });
        }
    });
};

exports.editCustomer = function (req, res) {
    var stateId = req.body.stateId;
    State.load(stateId, function (err, state) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            var s = {'id': state.id, 'abbreviation': state.abbreviation, 'name': state.name};

            Customer.findOne({'_id': req.params.id}, {'_id': 1, 'firstName': 1, 'lastName': 1, 'city': 1, 'state': 1, 'stateId': 1, 'gender': 1}, function (err, customer) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                    return;
                }
                customer.firstName = req.body.firstName || customer.firstName;
                customer.lastName = req.body.lastName || customer.lastName;
                customer.email = req.body.email || customer.email;
                customer.address = req.body.address || customer.address;
                customer.city = req.body.city || customer.city;
                customer.state = s;
                customer.stateId = s.id;
                customer.zip = req.body.zip || customer.zip;
                customer.gender = req.body.gender || customer.gender;


                customer.save(function (err) {
                    if (err) {
                        res.render('error', {
                            status: 500
                        });
                    } else {
                        res.json({'status': true});
                    }
                });

            });
        }
    });
};

exports.deleteCustomer = function (req, res) {
    Customer.remove({'_id': req.params.id}, function (err, customer) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp({'status': true});
        }
    });
};

exports.states = function (req, res) {
    State.find({},{},function(err,states){
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(states);
        }
    });
};
/**
 * Created by Allen on 2017-05-25.
 */


var express = require('express');
var router = express.Router();
var multer = require('../services/multer');
var path = require('path');
var models = require('../models');
var bookshelf = require('../services/bookshelf');


router.post('/', multer.array('photos', 12), function (req, res, next) {
    // the transaction to post a new property
    var post_property_transac = function(t) {
        // create a new entry in address table
        return new models.Address({
            lat: req.body.addr.lat,
            lng: req.body.addr.lng,
            city_id: 1  // Toronto
        })
            .save(null, { transaction: t })
            .then(function (address) {
                // expiry date of a post is two weeks from it is created
                var expiry_date = new Date();
                expiry_date.setDate(expiry_date.getDate() + 14);

                // create a new entry in property table
                return new models.Property({
                    create_datetime: new Date(),
                    expiry_datetime: expiry_date,
                    availability_start_date: new Date(req.body.availability.from),
                    availability_end_date: new Date(req.body.availability.to),
                    address_id: address.id,
                    property_type_id: 2, // apartment
                    owner: req.user.id
                })
                    .save(null, {transaction: t})
            })
    };

    bookshelf.transaction(post_property_transac)
        .then(function(property) {
            res.send(property.id);
        })
        .catch(function(err) {
            console.log(err);
            res.sendStatus(500);
            res.end();
        });
});


module.exports = router;


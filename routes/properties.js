/**
 * Created by Allen on 2017-05-25.
 */


var express = require('express');
var router = express.Router();
var multer = require('../services/multer');
var path = require('path');
var models = require('../models');
var bookshelf = require('../services/bookshelf');
var Promise = require('bluebird');

// create a new property
router.post('/create', multer.array('photos', 12), function (req, res, next) {

    // the transaction to post a new property
    var post_property_transac = function(t) {
        // expiry date of a post is two weeks from it is created
        var expiry_date = new Date();
        expiry_date.setDate(expiry_date.getDate() + 14);

        // create a new entry in property table
        return new models.Property({
            short_desc: req.body.short_desc,
            create_datetime: new Date(),
            expiry_datetime: expiry_date,
            availability_start_date: new Date(req.body.availability.from),
            availability_end_date: new Date(req.body.availability.to),
            property_type_id: 2, // apartment TODO should come from req.body
            owner: req.user.id
        })
            .save(null, {transaction: t})
            .tap(function(property) {

                // create a new entry in address table
                return new models.Address({
                    unit: req.body.unit,
                    lat: req.body.addr.lat,
                    lng: req.body.addr.lng,
                    city_id: 1  // Toronto TODO should come from req.body
                })
                    .save({ property_id: property.id }, { transaction: t })
            })
            .tap(function(property) {

                // save each photo path to photo table
                var photo_promises = req.files.map(function (photo) {
                    return new models.Photo({
                        url: photo.path
                    }).save({ property_id: property.id }, { transaction: t });
                });
                return Promise.all(photo_promises);
            })
    };

    // execute the transaction
    bookshelf.transaction(post_property_transac)
        .then(function(property) {
            res.send({ property_id: property.id });  // returns property id
        })
        .catch(function(err) {
            console.log(err);
            res.sendStatus(500); // internal server error
        });
});

module.exports = router;


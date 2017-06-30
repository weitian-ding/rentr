/**
 * Created by Allen on 2017-06-28.
 */

var bookshelf = require('../services/bookshelf');

var City = bookshelf.Model.extend({
    tableName: 'city',
    addresses: function () {
        return this.hasMany('Address');
    }
});

module.exports = bookshelf.model('City', City);
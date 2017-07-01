/**
 * Created by Allen on 2017-06-09.
 */

var bookshelf = require('../services/bookshelf');

var Property = bookshelf.Model.extend({
    tableName: 'property',
    user: function() {
        return this.belongsTo('User');
    },
    photos: function() {
        return this.hasMany('Photo');
    },
    address: function() {
        return this.hasOne('address');
    }
});

module.exports = bookshelf.model('Property', Property);
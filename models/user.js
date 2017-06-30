var bookshelf = require('../services/bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'user',
    properties: function () {
        return this.hasMany('Property');
    }
});

module.exports = bookshelf.model('User', User);
var bookshelf = require('../services/bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'user'
});

module.exports = User;
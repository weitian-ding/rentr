/**
 * Created by Allen on 2017-06-09.
 */

var bookshelf = require('../services/bookshelf');

var Property = bookshelf.Model.extend({
    tableName: 'property',
    user: function() {
        return this.belongsTo('User');
    }
});

module.exports = bookshelf.model('Property', Property);
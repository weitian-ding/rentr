/**
 * Created by Allen on 2017-06-30.
 */


var bookshelf = require('../services/bookshelf');

var Photo = bookshelf.Model.extend({
    tableName: 'photo',
    user: function() {
        return this.belongsTo('Property');
    }
});

module.exports = bookshelf.model('Photo', Photo);
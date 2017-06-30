/**
 * Created by Allen on 2017-06-28.
 */

var bookshelf = require('../services/bookshelf');

var Address = bookshelf.Model.extend({
    tableName: 'address',
    city: function () {
        return this.belongsTo('City');
    }
});

module.exports = bookshelf.model('Address', Address);
var dbconfig = require('../knexfile.js');
var knex = require('knex')(dbconfig.development);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;

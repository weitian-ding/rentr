/**
 * Created by Allen on 2017-05-30.
 */

var conn = {
    host     : 'aa517ld4daxpe4.c69aue1yiq2j.us-west-2.rds.amazonaws.com',
    user     : 'Alice',
    password : 'Alice123',
    charset  : 'utf8'
};

// connect without database selected
var knex = require('knex')({ client: 'mysql', connection: conn});

knex.raw('CREATE DATABASE rentr')
    .then(function(){
        console.log('database rentr created');
        process.exit();
    })
    .catch(function(err) {
        console.log(err);
        process.exit();
    });
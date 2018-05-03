require('dotenv').load();

var environment = process.env.NODE_ENV || 'developement';
var config = require('..knexfile.js')[environment];
module.exports = require('knex')(config);

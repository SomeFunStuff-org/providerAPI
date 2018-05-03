var knex = require('../config/knex');

module.exports = {
    getProviders: function(){
       return knex('providers');
    }
}

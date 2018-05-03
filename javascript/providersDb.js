var knex = require('../js/knex');


module.exports = {
    getProviders: function(){
        return knex('providers');
    }
}

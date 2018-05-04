var knex = require('../config/knex');

module.exports = {
    getProviders: function(){
       return knex('providers');
    },
    addProvider: function(data) {
        return knex('providers').insert(data, 'ProviderID');
    },
    getProvider: function(id) {
        return knex('providers')
            .where('providersID', id);
    }
}

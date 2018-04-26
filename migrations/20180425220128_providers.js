
exports.up = function(knex, Promise) {
    return knex.schema.createTable('providers', function(table){
        table.increments('providerID');
        table.string('name');
        table.integer('tier');
    }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Archers');
};

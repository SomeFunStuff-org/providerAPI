
exports.up = function(knex, Promise) {
    return knex.schema.createTable('providers', function(table){
        table.increments('providerID');
        table.string('name');
        table.integer('tier');
        table.string('links');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('providers');
};

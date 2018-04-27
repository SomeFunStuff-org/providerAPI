
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        { providerID: 1, name: 'lawncare', tier: 1, links: '[ {"href":"/lawnmowers", "rel": "lawnmowers", "type":"GET"} ]' },
        { providerID: 2, name: 'window cleaning', tier: 1, links: '[ {"href":"/windowcleaners", "rel": "windowcleaners", "type":"GET"} ]' },
        { providerID: 3, name: 'house cleaning', tier: 1, links: '[ {"href":"/housecleaners", "rel": "housecleaners", "type":"GET"} ]' },
        { providerID: 4, name: 'plumbing', tier: 2, links: '[ {"href":"/plumbers", "rel": "plumbers", "type":"GET"} ]' },
        { providerID: 5, name: 'lawyer', tier: 5, links: '[ {"href":"/lawyers", "rel": "lawyers", "type":"GET"} ]' }
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {id: 1, name: 'lawncare', tier: 1 },
        {id: 2, name: 'window cleaning', tier: 1},
        {id: 3, name: 'toilet scubbing', tier: 1},
        {id: 4, name: 'plumbing', tier: 2},
        {id: 5, name: 'lawyer', tier: 5}
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {name: 'afrosii'},
        {name: 'radeon'},
        {name: 'volondimort'}
      ]);
    });
};

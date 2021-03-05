
exports.seed = function(knex) {
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'lg', price: 5986},
        { name: 'sony', price: 3986},
        { name: 'apple', price: 10986}
      ]);
    });
    
};

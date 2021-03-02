exports.up = function(knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('id'); // this represents the primary key.
        table.string('name'); // this is a column.
    })
    .createTable('products', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.float('price').notNullable();
     })
     .createTable('orders', function (table) {
        table.increments('id');
        table.integer('client_id').notNullable();
        table.integer('product_id').notNullable();
        table.integer('count').notNullable();


        table.foreign('client_id').references('id').inTable('clients');
        table.foreign('product_id').references('id').inTable('products');
     });
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clients').dropTableIfExists('products').dropTableIfExists('orders');
};
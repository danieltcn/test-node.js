"use strict";

const knex = require('knex')(require('../../knexfile'));

module.exports = {
    postClientProduct: async (client_id, product_id) => {
        const where = {client_id, product_id};
        let count = await knex('orders')
            .where(where)
            .select('count');

            console.log(count);
            
        if (count.length) {
            count = count[0].count + 1;
            await knex('orders')
                .where(where)
                .update({
                    count
                });
        } else {
            await knex('orders').insert({client_id, product_id, count:1});
        }
    },
    deleteClientsProduct: (clientId, productId) => {

    },
    getClientProducts: id => {
    },
    getClientsProductsSum: () => {

    },
    getClientsProductsCount: () => {

    }

};

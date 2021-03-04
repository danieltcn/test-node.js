"use strict";

const knex = require('knex')(require('../../knexfile'));

module.exports = {
    postClientProduct: async (client_id, product_id) => {
        const where = {client_id, product_id};
        let count = await knex('orders')
            .where(where)
            .select('count');

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
    deleteClientsProduct: async (client_id, product_id) => {
        const where = {client_id, product_id};
        let count = await knex('orders')
            .where(where)
            .select('count');
            
        if (count.length && count[0].count > 1) {
            count = count[0].count - 1;
            await knex('orders')
                .where(where)
                .update({
                    count
                });
        } else {
            await knex('orders').where(where).del();
        }
    },
    getClientProducts: async id => {
        const result = await knex('orders')
            .join('products', 'orders.product_id', 'products.id')
            .select('products.name', 'products.price', 'orders.count')
            .where('orders.client_id', id);

        return result;
    },
    getClientsProductsSum: async () => {

        const result = await knex('orders')
            .join('products', 'orders.product_id', 'products.id')
            .join('clients','orders.client_id','clients.id')
            .select('clients.name', 'products.price', 'orders.count');

        const data = [];

        result.forEach(item => {
            const existingClient = data.find(i => i.name === item.name);
            if (existingClient) {
                existingClient.sum +=  item.count * item.price;
                existingClient.count += item.count;
            } else {
                data.push({ name: item.name, sum: item.count * item.price, count: item.count});
            }
        });

        data.sort((a, b) => b.sum - a.sum);

        return data;

    },
    getClientsProductsCount: async () => {

        const result = await knex('orders')
            .join('products', 'orders.product_id', 'products.id')
            .select('products.name', 'products.price', 'orders.count');

        const data = [];
        
        result.forEach(item => {
            const existingProduct = data.find(i => i.name === item.name);
            if (existingProduct) {
                existingProduct.count += item.count;
            } else {
                data.push({ name: item.name, count: item.count });
            }
        });

        data.sort((a, b) => b.count - a.count);

        return data;

    }

};

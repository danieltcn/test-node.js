"use strict";

const express = require('express');
const knex = require('knex')(require('../../knexfile'));
const clientsRouter = express.Router();
const clientsService = require('../services/clients.service');

clientsRouter.route('/clients/:client_id/products/:product_id')
    .post((request, response) => {
        const {client_id, product_id} = request.params;
        
        clientsService.postClientProduct(client_id, product_id);
        
        response.send(200);
    });

clientsRouter.route('/clients/:clientId/products/:productId')
    .get(async (request, response) => {
        const result = await knex
            .select('username')
            .from('clients');
        response.json({
            users: result
        });
    });

// clientsRouter.route('/cliets/:clietsId/products')
//     .get('/users', async (request, response) => {
//         const result = await knex
//             .select('username')
//             .from('clients');
//         response.json({
//             users: result
//         });
//     });

// clientsRouter.route('/clients/products/sum')
//     .get('/users', async (request, response) => {
//         const result = await knex
//             .select('username')
//             .from('clients');
//         response.json({
//             users: result
//         });
//     });

// clientsRouter.route('/clients/products/count')
//     .get(async (request, response) => {
//         const users = await knex('clients')
//             .where(request.query)
//             .select('username', 'email');
//         response.json({ users });
//     });

module.exports = clientsRouter;


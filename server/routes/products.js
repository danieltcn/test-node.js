"use strict";

const express = require('express');
const knex = require('../../knexfile');
const usersRouter = express.Router();

// usersRouter.route('/users')
//     .get('/users', async (req, res) => {
//         const result = await knex
//             .select('username')
//             .from('clients');
//         res.json({
//             users: result
//         });
//     });

module.exports = usersRouter;
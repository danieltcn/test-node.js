"use strict";

const knex = require('knex')(require('../../knexfile'));

module.exports = {

    getProducts: async (page, perPage) => {
        const result = await knex("products").paginate({
            perPage: perPage,
            currentPage: page
          });

        return result;
    }

};

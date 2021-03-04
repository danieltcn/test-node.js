"use strict";

const express = require('express');
// const knex = require('../../knexfile');
const knex = require('knex')(require('../../knexfile'));
const productsRouter = express.Router();

const productService = require('../services/products.services');

const { attachPaginate } = require('knex-paginate');
attachPaginate();

productsRouter.get("/products", (request, response) => {
    
    const { page, perPage } = request.query;
    
    const products = productService.getProducts( page, perPage );

    products.then(results => {
        response.json(results);
    });
    
  });

module.exports = productsRouter;
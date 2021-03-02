"use strict";

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


// app.listen(port, () => console.log(`listening on port: ${port}`));

app.listen(port, () => {
    console.log(`Server started on port ${ port }`);
  }).on('error', err => {
    console.log('ERROR: ', err);
  });

app.use('/', [
    require('./routes/clients'),
    require('./routes/products')
  ]);

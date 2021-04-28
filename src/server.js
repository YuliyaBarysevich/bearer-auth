'use strict'

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const authRoutes = require('./auth/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

app.use('*', notFound);
app.use(errorHandler);

module.exports ={
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on http://localhost:${port}/`))
  }
}
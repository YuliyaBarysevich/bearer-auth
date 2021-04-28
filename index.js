'use strict'

const server = require('./src/server')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const PORT = process.env.PORT || 3333;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(process.env.MONGODB_URI, options);

server.start(PORT);
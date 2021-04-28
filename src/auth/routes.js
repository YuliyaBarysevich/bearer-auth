'use strict'

const express = require('express');
const authRouter = express.Router();

const User = require('./models/users')
const basicAuth = require('./middleware/basic')
const bearerAuth = require('./middleware/bearer');
const { request } = require('express');

authRouter.post('/signup', async (req, res) => {
  try{
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  }catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, async (req, res) => {
  const users = await User.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
})

authRouter.get('/secret', bearerAuth, async (req, res) => {
  res.status(200).send('Welcome to the secret area!')
})

module.exports = authRouter;
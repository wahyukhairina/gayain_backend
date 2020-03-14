const express = require('express');
const Route = express.Router();

const {
  register,
  login,
  getUser,
  updateData,
  deleteData,
} = require('../controllers/user_management');

Route.get('/', getUser)
  .post('/register', register)
  .post('/login', login)
  .patch('/:userId', updateData)
  .delete('/:userId', deleteData);

module.exports = Route;

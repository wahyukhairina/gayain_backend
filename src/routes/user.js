 const express = require('express');
const Route = express.Router();

const {
  register,
  login,
  getUser,
  updateData,
  deleteData,
} = require('../controllers/user_management');
const { uploadImage } = require('../helpers/upload_user')

Route.get('/', getUser)
  .post('/register', uploadImage, register)
  .post('/login', login)
  .patch('/:userId',uploadImage ,updateData)
  .delete('/:userId', deleteData);

module.exports = Route;

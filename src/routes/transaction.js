const express = require('express')
const Route = express.Router()
const { payment } = require('../controllers/transaction')

Route
  .post('/', payment)

module.exports = Route

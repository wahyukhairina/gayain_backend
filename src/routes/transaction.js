const express = require('express')
const Route = express.Router()
const { pendingPayment, endPayment } = require('../controllers/transaction')

Route
  .post('/', pendingPayment)
  .patch('/', endPayment)

module.exports = Route

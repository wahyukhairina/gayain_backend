const express = require('express')
const Route = express.Router()
const { pendingPayment, endPayment, weeklyTransaction, recapitulationTransaction, historyTransaction  } = require('../controllers/transaction')

Route
  .post('/', pendingPayment)
  .patch('/', endPayment)
  .get('/weekly', weeklyTransaction)
  .get('/history', recapitulationTransaction)
  .get('/history/:id_transaction', historyTransaction)

module.exports = Route

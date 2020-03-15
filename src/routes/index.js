const express = require('express')
const Route = express.Router()
const transactionRouter = require('./transaction')

Route
  .use('/transaction', transactionRouter)

module.exports = Route

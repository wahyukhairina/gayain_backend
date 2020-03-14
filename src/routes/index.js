const express = require('express')
const Route = express.Router()
const posRouter = require('./product')
const transactionRouter = require('./transaction')

Route
  .use('/product', posRouter)
  .use('/uploads', express.static('./uploads'))
  .use('/transaction', transactionRouter)

module.exports = Route

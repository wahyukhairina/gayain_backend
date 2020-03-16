const express = require('express')
const route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')
const categoryRouter = require('./category')

Route
  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/upload', express.static('./upload'))
  .use('/transaction', transactionRouter)
  .use('/category', categoryRouter)

module.exports = route;

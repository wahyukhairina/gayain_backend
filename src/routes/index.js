const express = require('express')
const route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')
const categoryRouter = require('./category')

route

  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))
  .use('/transaction', transactionRouter)
  .use('/category', categoryRouter)

module.exports = route;

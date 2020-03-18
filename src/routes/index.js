const express = require('express')
const route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')
const categoryRouter = require('./category')
const courierRouter = require('./provinces')
const promoRouter = require('./promo')

route
  .use('/promo', promoRouter)
  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/upload', express.static('./upload'))
  .use('/transaction', transactionRouter)
  .use('/category', categoryRouter)
  .use('/courier', courierRouter)

module.exports = route

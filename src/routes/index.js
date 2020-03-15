<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express');
const Route = express.Router();
const posRouter = require('./product');
const userRoute = require('./user');
const transactionRouter = require('./transaction');
// const categoryRouter = require('./category')
=======
const express = require('express')
const route = express.Router()
const posRouter = require('./product')
const userRoute = require('./user')
const transactionRouter = require('./transaction')
const categoryRouter = require('./category')
>>>>>>> cb1b2368382dd660433fe450c36a8544ca15e094

route

  .use('/product', posRouter)
  .use('/user', userRoute)
  .use('/uploads', express.static('./uploads'))
<<<<<<< HEAD
  .use('/transaction', transactionRouter);
// .use('/category', categoryRouter)
=======
const express = require('express')
const Route = express.Router()
const transactionRouter = require('./transaction')

Route
  .use('/transaction', transactionRouter)
>>>>>>> transaction
=======
  .use('/transaction', transactionRouter)
  .use('/category', categoryRouter)
>>>>>>> cb1b2368382dd660433fe450c36a8544ca15e094

module.exports = route;

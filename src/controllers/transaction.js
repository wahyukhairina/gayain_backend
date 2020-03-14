const models = require('../models/transaction')
const helpers = require('../helpers')

module.exports = {
  pendingPayment: async (request, response) => {
    try {
      const pendingPayment = request.body
      if (pendingPayment === undefined || pendingPayment === '') return 
      console.log('pendingPayment Undifined')

      var dataArray = 0
      await pendingPayment.products.map(e => {
        const data = {
          id_transaction: pendingPayment.id_transaction,
          productId: e.productId,
          stock: e.quantity
        }
        const date = {
          date_added: new Date()
        }
        models.pendingPayment(data, dataArray, date)
        dataArray++
      })

      helpers.response(response, 200, 'OK')
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },

  endPayment: async (request, response) => {
    try {
      const endPayment = request.body
      if (endPayment === undefined || endPayment === '') return console.log('Tidak ada data')

      var a = 0
      await endPayment.products.map(e => {
        const data = {
          id_transaction: endPayment.id_transaction,
          productId: e.productId,
          stock: e.quantity
        }
        const date = {
          date_added: new Date()
        }
        models.endPayment(data, a, date)
        a++
      })

      helpers.response(response, 200, 'OK')
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  },

  
}

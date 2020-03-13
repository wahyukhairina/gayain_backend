const models = require('../models/transaction')
const helpers = require('../helpers')

module.exports = {
  payment: async (request, response) => {
    try {
      const payment = request.body
      if (payment === undefined || payment === '') return console.log('Tidak ada data')

      var a = 0
      await payment.products.map(e => {
        const data = {
          id_transaction: payment.id_transaction,
          productId: e.productId,
          stock: e.quantity
        }
        const status ={
          status: status
        }
        const date = {
          date_added: new Date()
        }
        models.payment(data, a, date)
        a++
      })

      helpers.response(response, 200, 'OK')
    } catch (error) {
      console.log(error)
      helpers.cutomErrorResponse(response, 400, 'Internal server error')
    }
  }
}

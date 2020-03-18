const productModel = require('../models/product')
const miscHelper = require('../helpers')
const { IP, port } = require('../configs')
const uuidv4 = require('uuid/v4')

module.exports = {
    getAll: async (request, response) => {
      console.log(request.query)
        try {
          const category = request.query.category || ''
          const limit = request.query.limit || 666
          const activePage = request.query.page || 1
          const searchName = request.query.name || ''
          const sortBy = request.query.sortBy || 'id'
          const sort = request.query.sort || 'ASC'
          const pagination = {
            activePage, limit, sortBy, sort
          }
    
          const totalData = await productModel.countData(searchName, category)
          const totalPages = Math.ceil(totalData / limit)
          const pager = {
            totalPages
          }
          const result = await productModel.getAll(searchName, pagination, category)
    
          miscHelper.response(response, 200, result, pager)
        } catch (error) {
          console.log(error)
          miscHelper.cutomErrorResponse(response, 400, 'Internal server error')
        }
      },

      getNew: async (request, response) => {
        try { 
          const result = await productModel.getNew()
          miscHelper.response(response, 200, result)

        }
        catch (error) {
          console.log(error)
          miscHelper.cutomErrorResponse(response, 400, 'Internal server error')
        }
      },

  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.getDetail(productId)
      miscHelper.response(response, 200, result)
    } catch (error) {
      miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
    }
  },

  inputProduct: async (request, response) => {
    try {
      const id = uuidv4()
      const { name, category, price, stock } = request.body
      const data = {
        id,
        name,
        image: `${IP}:${port}/upload/${request.file.filename}`,
        category,
        stock,
        price,
        created: new Date(),
        updated: new Date()
      }
      const result = await productModel.inputProduct(data)
      miscHelper.response(response, 200, data)
      console.log(request.file)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal Server Error!')
    }
  },

  updateProduct: async (request, response) => {
    console.log(request.body)
    try {
      const { name, category, price, stock } = request.body
      data = {
        name,
        image: `${IP}:${port}/upload/${request.file.filename}`,
        category,
        stock,
        price,
        updated: new Date()
      }
      const productId = request.params.productId
      const result = await productModel.updateProduct(data, productId)
      const modelProduct = {
        ...data,
        id: productId
      }
      miscHelper.response(response, 200, modelProduct)
    } catch (error) {
      console.log(err)
      miscHelper.customErrorResponse(response, 404, 'Internal Server Error!')
    }
  },

  deleteProduct: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.deleteProduct(productId)
      const deleteModel = {
        id: productId
      }
      miscHelper.response(response, 200, deleteModel)
    } catch (error) {
      miscHelper.customErrorResponse(response, 404, 'Internal Server Error!')
    }
  }
}

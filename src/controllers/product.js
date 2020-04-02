const productModel = require('../Models/product')
const miscHelper = require('../Helpers')
module.exports = {
    getAll : async (request, response) => {
     try {
         const category = request.query.category || ''
         const searchName = request.query.name || ''
         const sortBy = request.query.sortBy || 'id'
         const limit = request.query.limit || 9999
         const page = request.query.page || '1'

         const result = await productModel.getAll(searchName, sortBy, limit, page, category)
         const tData = await productModel.getAll(searchName, 'id', 1000, 1, category)
         const tPage = Math.ceil(tData.length / limit)
         console.log(tPage, tData)
         miscHelper.response(response, 200, result, tPage)
     } catch (error) {
         miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
       }   
    },
    getDetail : async (request, response) => {
        try {
            const productId = request.params.productId
            const result = await productModel.getDetail(productId)
            miscHelper.response(response, 200, result)
        } catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }   
       },
    inputProduct : async (request, response) => {
        console.log(request)
        try {
            const { name, category, price, stock } = request.body
            const data = {
                name,
                category,
                price,
                stock,
                // image : `http://localhost:4500/upload/${request.file.filename}`, 
                created_at : new Date(),
                updated_at : new Date()
                }
                const result = await productModel.inputProduct(data)
                data.id=result.insertId
                miscHelper.response(response, 200, data) 
            console.log(request.body)      
            } 
        catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }   
       },
       updateProduct : async (request, response) => {
        console.log(request.body)
        try {
            const { name, category, price, stock } = request.body
            data = {
                name,
                category,
                price,
                stock,
                // image : `http://localhost:4500/upload/${request.file.filename}`,
                updated_at : new Date()

            }
            const productId = request.params.productId
            const result = await productModel.updateProduct(data, productId)
            const modelProduct = {
                ...data,
                id: parseInt(productId)
            }
            miscHelper.response(response, 200, modelProduct)
        } catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }   
       },
       deleteProduct : async (request, response) => {
        try {
            const productId = request.params.productId
            const result = await productModel.deleteProduct(productId)
            const deleteModel = {
                        id : parseInt(productId)
                    }
            miscHelper.response(response, 200, deleteModel)
        } catch (error) {
            miscHelper.customErrorResult(response, 404, 'Internal Server Error!')
          }
       }
       
}
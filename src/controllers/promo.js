const categoryModel = require('../models/promo')
const miscHelper = require('../helpers')
const uuidv4 = require('uuid/v4')
const {IP, port} = require('../configs/index')

module.exports={
    listPromo : async (request, response) =>{
        try{
            const searchName = request.body.name || ''
            const result = await promoModel.listPromo(searchName)
            miscHelper.response(response, 200, result)
        } catch (error){

            miscHelper.customErrorResponse(response, 400, 'Promo not found!')
        }
    },
    inputPromo : async (request, response) => {
        try{
            promo_id = uuidv4()
            const data = {
                promo_id,
                image: `${IP}:${port}/upload/${request.file.filename}`,
                description: request.body.description,
                name: request.body.name,
                created: new Date(),
                updated: new Date()
            }
            const result = await promoModel.inputPromo(data)

            miscHelper.response(response, 200, data)
        }catch (error) {
            miscHelper.customErrorResponse(response, 400, 'Cannot add promo!')
        }
    },
    editPromo : async (request, response) => {
        try{
            const data = {
                name : request.body.name,
                image: `${IP}:${port}/upload/${request.file.filename}`,
                description: request.body.description, 
                updated: new Date()
            }
            const promoId= request.params.promoId
            const result = await promoModel.editPromo(data, promoId)
            const modelPromo={
                ...data,
                promo_id:promoId
            }
            miscHelper.response(response, 200, modelPromo)
        }catch (error) {
            miscHelper.customErrorResponse(response, 400, 'Cannot edit promo!')
        }
    },
    deletePromo : async (request, response) => {
        try{
            const promoId = request.params.promoId
            const result = await promoModel.deletePromo(categoryId)
            const modelDelete = {
                category_id:categoryId
            }
            miscHelper.response(response, 200, modelDelete)
        }catch (error){
            miscHelper.customErrorResponse(response, 400, 'Cannot delete promo!')
        }
    }
}
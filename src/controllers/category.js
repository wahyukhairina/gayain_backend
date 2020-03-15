const categoryModel = require('../models/category')
const miscHelper = require('../helpers')
const uuidv4 = require('uuid/v4')
const {IP, port} = require('../configs/index')

module.exports={
    listCategory : async (request, response) =>{
        try{
            const searchName = request.body.name || ''
            const result = await categoryModel.listCategory(searchName)
            miscHelper.response(response, 200, result)
        } catch (error){

            miscHelper.customErrorResponse(response, 400, 'Category not found!')
        }
    },
    inputCategory : async (request, response) => {
        try{
            const category_id = uuidv4()
            const data = {
                category_id,
                image: `${IP}:${port}/upload/${request.file.filename}`,
                name: request.body.name,
                created: new Date(),
                updated: new Date()
            }
            const result = await categoryModel.inputCategory(data)

            miscHelper.response(response, 200, data)
        }catch (error) {
            miscHelper.customErrorResponse(response, 400, 'Cannot add category!')
        }
    },
    editCategory : async (request, response) => {
        try{
            const data = {
                name : request.body.name,
                image: `${IP}:${port}/upload/${request.file.filename}`,
                updated: new Date()
            }
            const categoryId= request.params.categoryId
            const result = await categoryModel.editCategory(data, categoryId)
            const modelCategory={
                ...data,
                category_id:categoryId
            }
            miscHelper.response(response, 200, modelCategory)
        }catch (error) {
            miscHelper.customErrorResponse(response, 400, 'Cannot edit category!')
        }
    },
    deleteCategory : async (request, response) => {
        try{
            const categoryId = request.params.categoryId
            const result = await categoryModel.deleteCategory(categoryId)
            const modelDelete = {
                category_id:categoryId
            }
            miscHelper.response(response, 200, modelDelete)
        }catch (error){
            miscHelper.customErrorResponse(response, 400, 'Cannot delete category!')
        }
    }
}
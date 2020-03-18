const express = require('express')
const route = express.Router()


const {getAll, getDetail, inputProduct, updateProduct, deleteProduct, getNew } = require('../controllers/product')

const { uploadImage } = require('../controllers/upload') 

route
    .get('/new', getNew)
    .get('/', getAll)
    .get('/:productId', getDetail)
    .post('/', uploadImage, inputProduct)
    .patch('/:productId', uploadImage, updateProduct)
    .delete('/:productId', deleteProduct)
    

module.exports = route

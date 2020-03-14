const express = require('express')
const route = express.Router()


const {getAll, getDetail, inputProduct } = require('../controllers/product')

const { uploadImage } = require('../controllers/upload')

route
    .get('/', getAll)
    .get('/:productId', getDetail)
    .post('/', uploadImage, inputProduct)
    

module.exports = route
const express = require('express')
const route = express.Router()

const { listPromo, inputPromo, editPromo, deletePromo }=require('../controllers/promo')
const { uploadImage } = require('../controllers/upload')

route

    .get('/', listPromo)
    .post('/', uploadImage, inputPromo)
    .patch('/:promoId', uploadImage, editPromo)
    .delete('/:promoId', deletePromo)

module.exports = route


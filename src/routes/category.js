const express = require('express')
const route = express.Router()

const { listCategory, inputCategory, editCategory, deleteCategory }=require('../controllers/category')

route

    .get('/', listCategory)
    .post('/', inputCategory)
    .patch('/:categoryId', editCategory)
    .delete('/:categoryId', deleteCategory)

module.exports = route


const express = require('express')
const route = express.Router()

const { listCategory, inputCategory, editCategory, deleteCategory } = require('../controllers/category')
const { uploadImage } = require('../controllers/upload')

route

  .get('/', listCategory)
  .post('/', uploadImage, inputCategory)
  .patch('/:categoryId', uploadImage, editCategory)
  .delete('/:categoryId', deleteCategory)

module.exports = route
